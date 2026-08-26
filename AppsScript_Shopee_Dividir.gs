/**
 * Apps Script - Divide a planilha "Anúncios Shopee" (4.337 produtos, com
 * fotos) em vários arquivos pequenos (~80 produtos cada), pra ficar bem
 * abaixo do limite de 10MB de download.
 *
 * COMO INSTALAR (mesmo processo de sempre):
 * 1. Abra a planilha "Anúncios Shopee" no Google Sheets (o arquivo GRANDE,
 *    com todas as fotos já inseridas).
 * 2. Menu Extensões > Apps Script.
 * 3. Apague todo o código que já estiver lá (Code.gs) - pode manter os
 *    scripts anteriores em outro projeto/aba se quiser, mas nesse projeto
 *    específico é melhor deixar só este código.
 * 4. Cole todo o conteúdo deste arquivo.
 * 5. Clique no ícone de salvar (disquete).
 * 6. Feche a aba do Apps Script e volte pra planilha - aparece o menu
 *    "✂️ Dividir Planilha".
 * 7. Rode "▶️ Iniciar/Continuar divisão" - na primeira vez o Google vai
 *    pedir autorização (inclusive pra mexer com arquivos do Drive), aceite.
 *    Esse primeiro clique manual é obrigatório; depois ele continua sozinho.
 *
 * COMO FUNCIONA:
 * - Pega as 4.337 linhas de produtos e divide em grupos de 80.
 * - Pra cada grupo, cria uma planilha nova (só com aquelas linhas + fotos),
 *   já move pra dentro da pasta "Anúncios Shopee Divididos" que você
 *   compartilhou.
 * - Processa por lotes de até ~4,5 minutos, continuando sozinho a cada
 *   1 minuto até terminar todos os ~55 arquivos.
 * - Cria uma aba "Log de Divisão" nesta planilha grande, com o nome/link
 *   de cada arquivo gerado e o andamento.
 */

const ABA_ORIGEM = 'Sheet1';
const ID_PASTA_DESTINO = '1ba5De8AuGBPvc0kkoa9XQS30EKjUVpNj';
const LINHAS_POR_ARQUIVO = 80;
const LINHA_INICIO = 2;
const NUM_COLUNAS = 7; // A até G: ID, SKU, Nome, Categoria, Link Capa, Imagem Capa, Motivo da Falha
const COL_IMAGEM = 6; // coluna F

const TEMPO_LIMITE_MS = 4.5 * 60 * 1000;
const PROP_PROXIMA_LINHA = 'proximaLinhaDivisao';
const NOME_FUNCAO_TRIGGER = 'continuarDivisao';
const ABA_LOG = 'Log de Divisão';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('✂️ Dividir Planilha')
    .addItem('▶️ Iniciar/Continuar divisão', 'iniciarDivisao')
    .addItem('⏸️ Parar processamento automático', 'pararDivisao')
    .addItem('🔄 Reiniciar do zero', 'reiniciarDivisao')
    .addToUi();
}

function iniciarDivisao() {
  processarLoteDivisao();
  SpreadsheetApp.getUi().alert('Lote inicial processado. Vai continuar sozinho a cada 1 minuto até terminar. Acompanhe pela aba "Log de Divisão".');
}

function continuarDivisao() {
  processarLoteDivisao();
}

function processarLoteDivisao() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const origem = ss.getSheetByName(ABA_ORIGEM);
  if (!origem) {
    SpreadsheetApp.getUi().alert('Não encontrei a aba "' + ABA_ORIGEM + '".');
    return;
  }

  const ultimaLinhaDados = origem.getLastRow();
  const props = PropertiesService.getScriptProperties();
  let linhaAtual = Number(props.getProperty(PROP_PROXIMA_LINHA)) || LINHA_INICIO;

  if (linhaAtual > ultimaLinhaDados) {
    finalizarDivisao();
    return;
  }

  const logSheet = obterOuCriarLogSheet(ss);
  const pastaDestino = DriveApp.getFolderById(ID_PASTA_DESTINO);
  const headerValues = origem.getRange(1, 1, 1, NUM_COLUNAS).getValues();
  const inicio = Date.now();

  while (linhaAtual <= ultimaLinhaDados && (Date.now() - inicio) < TEMPO_LIMITE_MS) {
    const linhaFim = Math.min(linhaAtual + LINHAS_POR_ARQUIVO - 1, ultimaLinhaDados);
    const numLinhas = linhaFim - linhaAtual + 1;

    let tentativas = 0;
    let sucesso = false;
    let ultimoErro = null;

    while (tentativas < 3 && !sucesso) {
      tentativas++;
      try {
        const nomeArquivo = 'Anúncios Shopee - Linhas ' + pad4(linhaAtual) + '-' + pad4(linhaFim);
        const novaPlanilha = SpreadsheetApp.create(nomeArquivo);
        Utilities.sleep(800);
        const novaAba = novaPlanilha.getSheets()[0];
        novaAba.setName('Sheet1');

        // cabeçalho
        novaAba.getRange(1, 1, 1, NUM_COLUNAS).setValues(headerValues);

        // dados + fotos: copyTo() só funciona dentro da mesma planilha, então
        // pra copiar pra um arquivo diferente usamos getValues/setValues
        // (que também carrega a imagem da célula certinho)
        const valoresLote = origem.getRange(linhaAtual, 1, numLinhas, NUM_COLUNAS).getValues();
        novaAba.getRange(2, 1, numLinhas, NUM_COLUNAS).setValues(valoresLote);

        novaAba.setColumnWidth(COL_IMAGEM, 180);
        novaAba.setRowHeights(2, numLinhas, 150);

        // move a planilha nova pra pasta de destino
        const arquivoDrive = DriveApp.getFileById(novaPlanilha.getId());
        pastaDestino.addFile(arquivoDrive);
        DriveApp.getRootFolder().removeFile(arquivoDrive);

        logSheet.appendRow([new Date(), pad4(linhaAtual) + '-' + pad4(linhaFim), nomeArquivo, novaPlanilha.getUrl()]);
        sucesso = true;
      } catch (e) {
        ultimoErro = e;
        Utilities.sleep(2000 * tentativas); // espera mais a cada nova tentativa
      }
    }

    if (!sucesso) {
      logSheet.appendRow([new Date(), pad4(linhaAtual) + '-' + pad4(linhaFim),
        'ERRO após 3 tentativas: ' + ultimoErro.message, '']);
    }

    Utilities.sleep(1000); // pausa entre arquivos, pra não estourar limite de velocidade
    linhaAtual = linhaFim + 1;
  }

  props.setProperty(PROP_PROXIMA_LINHA, String(linhaAtual));

  if (linhaAtual > ultimaLinhaDados) {
    finalizarDivisao();
  } else {
    agendarContinuacao();
  }
}

function pad4(n) {
  return ('0000' + n).slice(-4);
}

function agendarContinuacao() {
  removerTriggersExistentes();
  ScriptApp.newTrigger(NOME_FUNCAO_TRIGGER)
    .timeBased()
    .after(1 * 60 * 1000)
    .create();
}

function removerTriggersExistentes() {
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function(t) {
    if (t.getHandlerFunction() === NOME_FUNCAO_TRIGGER) {
      ScriptApp.deleteTrigger(t);
    }
  });
}

function finalizarDivisao() {
  removerTriggersExistentes();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const logSheet = obterOuCriarLogSheet(ss);
  logSheet.appendRow([new Date(), '-', '✅ DIVISÃO CONCLUÍDA - todos os arquivos foram gerados', '']);
  PropertiesService.getScriptProperties().deleteProperty(PROP_PROXIMA_LINHA);
}

function pararDivisao() {
  removerTriggersExistentes();
  SpreadsheetApp.getUi().alert('Processamento pausado. Use "Iniciar/Continuar" pra retomar de onde parou.');
}

function reiniciarDivisao() {
  const ui = SpreadsheetApp.getUi();
  const resp = ui.alert(
    'Isso reinicia o controle de progresso da linha 2 (os arquivos já criados na pasta continuam lá - você precisaria apagar manualmente se não quiser duplicar). Confirma?',
    ui.ButtonSet.YES_NO
  );
  if (resp === ui.Button.YES) {
    removerTriggersExistentes();
    PropertiesService.getScriptProperties().deleteProperty(PROP_PROXIMA_LINHA);
    ui.alert('Progresso reiniciado.');
  }
}

function obterOuCriarLogSheet(ss) {
  let sheet = ss.getSheetByName(ABA_LOG);
  if (!sheet) {
    sheet = ss.insertSheet(ABA_LOG);
    sheet.appendRow(['Data/Hora', 'Linhas', 'Arquivo', 'Link']);
  }
  return sheet;
}
