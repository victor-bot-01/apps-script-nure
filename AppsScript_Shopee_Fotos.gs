/**
 * Apps Script - Inserção de imagens NA CÉLULA para TODOS os produtos (Shopee)
 * Anúncios Shopee - Essência do Brasil / Ponte Vecchio Joias
 *
 * COMO INSTALAR (mesmo processo de sempre):
 * 1. Abra a planilha "Anúncios Shopee" no Google Sheets.
 * 2. Menu Extensões > Apps Script.
 * 3. Apague todo o código que já estiver lá (Code.gs) - inclusive as
 *    versões anteriores desse script (a do teste com 5 linhas).
 * 4. Cole todo o conteúdo deste arquivo.
 * 5. Clique no ícone de salvar (disquete).
 * 6. Feche a aba do Apps Script e volte pra planilha - em alguns segundos
 *    aparece o menu "📷 Fotos Shopee" na barra de menus.
 * 7. Rode "▶️ Iniciar/Continuar inserção de todas as imagens" PELO MENOS
 *    UMA VEZ CLICANDO (não pelo trigger) - na primeira vez o Google vai
 *    pedir autorização, é normal, aceite. Esse primeiro clique manual é
 *    obrigatório para o script poder continuar sozinho depois.
 *
 * COMO FUNCIONA (processamento em lotes automático):
 * São 4.337 produtos - processar tudo de uma vez estouraria o limite de
 * 6 minutos de execução do Apps Script. Por isso o script:
 *   - processa por até ~4,5 minutos por vez;
 *   - salva o progresso (até qual linha já processou);
 *   - agenda sozinho a continuação 1 minuto depois, até terminar tudo;
 *   - você não precisa ficar clicando - só precisa dar o primeiro clique.
 * Pra acompanhar o andamento, olhe a aba nova "Log de Fotos" que o script
 * cria sozinho - cada lote registra quantas linhas processou e se algo
 * deu errado, e escreve "PROCESSAMENTO CONCLUÍDO" quando terminar tudo.
 *
 * IMPORTANTE - imagens que carregam errado: o script consegue detectar
 * quando não tem link (fica registrado no Log), mas não consegue saber
 * na hora se um link está quebrado (o Google busca a imagem depois, em
 * segundo plano) - pode ser que algumas fotos apareçam com ícone de erro
 * na planilha mesmo sem erro no Log. Depois que terminar tudo, posso
 * conferir uma amostra pra você.
 */

const ABA = 'Sheet1';
const COL_LINK_CAPA = 5;    // coluna E
const COL_IMAGEM_SAIDA = 6; // coluna F
const LINHA_INICIO = 2;
const TEMPO_LIMITE_MS = 4.5 * 60 * 1000; // margem de segurança sob o limite de 6 min
const PROP_ULTIMA_LINHA = 'ultimaLinhaProcessada';
const NOME_FUNCAO_TRIGGER = 'continuarInsercaoImagens';
const ABA_LOG = 'Log de Fotos';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📷 Fotos Shopee')
    .addItem('▶️ Iniciar/Continuar inserção de todas as imagens', 'iniciarInsercaoCompleta')
    .addItem('⏸️ Parar processamento automático', 'pararProcessamento')
    .addItem('🔄 Reiniciar progresso do zero (linha 2)', 'reiniciarProgresso')
    .addItem('🧹 Limpar imagens soltas da planilha', 'limparImagensFlutuantes')
    .addToUi();
}

function iniciarInsercaoCompleta() {
  processarLote();
  SpreadsheetApp.getUi().alert('Lote inicial processado. O script vai continuar sozinho a cada 1 minuto até terminar. Acompanhe pela aba "Log de Fotos".');
}

// chamada automaticamente pelo gatilho de tempo - não precisa rodar manual
function continuarInsercaoImagens() {
  processarLote();
}

function processarLote() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(ABA);
  if (!sheet) {
    SpreadsheetApp.getUi().alert('Não encontrei a aba "' + ABA + '".');
    return;
  }

  const ultimaLinhaDados = sheet.getLastRow();
  const props = PropertiesService.getScriptProperties();
  let linhaAtual = Number(props.getProperty(PROP_ULTIMA_LINHA)) || LINHA_INICIO;

  if (linhaAtual > ultimaLinhaDados) {
    finalizarProcessamento();
    return;
  }

  // formata coluna/linhas uma vez (idempotente, seguro rodar de novo)
  sheet.setColumnWidth(COL_IMAGEM_SAIDA, 180);

  const logSheet = obterOuCriarLogSheet(ss);
  const linhaInicioLote = linhaAtual;
  const inicio = Date.now();
  let processadas = 0;
  let erros = 0;

  while (linhaAtual <= ultimaLinhaDados && (Date.now() - inicio) < TEMPO_LIMITE_MS) {
    sheet.setRowHeight(linhaAtual, 150);
    const url = sheet.getRange(linhaAtual, COL_LINK_CAPA).getValue();
    if (url) {
      try {
        const imagemCelula = SpreadsheetApp.newCellImage().setSourceUrl(url).build();
        sheet.getRange(linhaAtual, COL_IMAGEM_SAIDA).setValue(imagemCelula);
      } catch (e) {
        logSheet.appendRow([new Date(), linhaAtual, 'Erro ao inserir imagem: ' + e.message]);
        erros++;
      }
    } else {
      logSheet.appendRow([new Date(), linhaAtual, 'Sem link na coluna E (Imagem de Capa)']);
      erros++;
    }
    processadas++;
    linhaAtual++;
  }

  props.setProperty(PROP_ULTIMA_LINHA, String(linhaAtual));
  logSheet.appendRow([new Date(), linhaInicioLote + '-' + (linhaAtual - 1),
    'Lote concluído: ' + processadas + ' linha(s) processada(s), ' + erros + ' problema(s)']);

  if (linhaAtual > ultimaLinhaDados) {
    finalizarProcessamento();
  } else {
    agendarContinuacao();
  }
}

function agendarContinuacao() {
  removerTriggersExistentes();
  ScriptApp.newTrigger(NOME_FUNCAO_TRIGGER)
    .timeBased()
    .after(1 * 60 * 1000) // continua em 1 minuto
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

function finalizarProcessamento() {
  removerTriggersExistentes();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const logSheet = obterOuCriarLogSheet(ss);
  logSheet.appendRow([new Date(), '-', '✅ PROCESSAMENTO CONCLUÍDO - todas as linhas foram processadas']);
  PropertiesService.getScriptProperties().deleteProperty(PROP_ULTIMA_LINHA);
}

function pararProcessamento() {
  removerTriggersExistentes();
  SpreadsheetApp.getUi().alert('Processamento automático pausado. Use "Iniciar/Continuar" pra retomar de onde parou (o progresso fica salvo).');
}

function reiniciarProgresso() {
  const ui = SpreadsheetApp.getUi();
  const resp = ui.alert(
    'Isso vai fazer o script recomeçar da linha 2 na próxima vez que rodar (as imagens já inseridas continuam lá, só o controle de progresso é zerado). Confirma?',
    ui.ButtonSet.YES_NO
  );
  if (resp === ui.Button.YES) {
    removerTriggersExistentes();
    PropertiesService.getScriptProperties().deleteProperty(PROP_ULTIMA_LINHA);
    ui.alert('Progresso reiniciado. Rode "Iniciar/Continuar" pra começar de novo.');
  }
}

function obterOuCriarLogSheet(ss) {
  let sheet = ss.getSheetByName(ABA_LOG);
  if (!sheet) {
    sheet = ss.insertSheet(ABA_LOG);
    sheet.appendRow(['Data/Hora', 'Linha(s)', 'Mensagem']);
  }
  return sheet;
}

/**
 * Remove imagens flutuantes soltas (de testes antigos com insertImage()).
 * Não afeta as imagens inseridas com newCellImage() (essas ficam dentro
 * da célula, não são "flutuantes").
 */
function limparImagensFlutuantes() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(ABA);
  if (!sheet) {
    SpreadsheetApp.getUi().alert('Não encontrei a aba "' + ABA + '".');
    return;
  }
  const imagens = sheet.getImages();
  let removidas = 0;
  imagens.forEach(function(img) {
    img.remove();
    removidas++;
  });
  SpreadsheetApp.getUi().alert(removidas + ' imagem(ns) flutuante(s) removida(s).');
}
