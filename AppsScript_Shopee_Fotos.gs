/**
 * Apps Script - Teste de inserção de imagens (Shopee)
 * Anúncios Shopee - Essência do Brasil / Ponte Vecchio Joias
 *
 * COMO INSTALAR (mesmo processo de antes):
 * 1. Abra a planilha "Anúncios Shopee" no Google Sheets.
 * 2. Menu Extensões > Apps Script.
 * 3. Apague qualquer código de exemplo que já esteja lá (Code.gs).
 * 4. Cole todo o conteúdo deste arquivo.
 * 5. Clique no ícone de salvar (disquete).
 * 6. Feche a aba do Apps Script e volte pra planilha - em alguns segundos
 *    aparece um novo menu "📷 Fotos Shopee" na barra de menus.
 * 7. Na primeira vez que usar, o Google vai pedir autorização - é normal.
 * 8. Rode pelo menu: 📷 Fotos Shopee > Testar (5 primeiras linhas)
 *
 * O QUE ESSE TESTE FAZ:
 * Pega o link da "Imagem de Capa" (coluna E) das 5 primeiras linhas de
 * dados (linhas 2 a 6) e insere a imagem de verdade (não fórmula) na
 * coluna F, usando o método "imagem sobre a célula" - o único confirmado
 * como visível para análise depois.
 *
 * IMPORTANTE: isso é só o teste das 5 primeiras linhas, como combinado.
 * Depois de confirmar que funcionou, ampliamos para as 4.337 linhas todas
 * em um próximo passo (com lotes, por causa do volume).
 */

const ABA = 'Sheet1';
const COL_LINK_CAPA = 5;   // coluna E
const COL_IMAGEM_SAIDA = 6; // coluna F
const LINHA_INICIO_TESTE = 2;
const LINHA_FIM_TESTE = 6; // 5 primeiras linhas de dados (2,3,4,5,6)

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📷 Fotos Shopee')
    .addItem('🧪 Testar (5 primeiras linhas)', 'testarInserirImagensCapa')
    .addToUi();
}

/**
 * Insere a imagem da Capa (coluna E) na coluna F, só nas 5 primeiras
 * linhas de dados, para validarmos o método antes de rodar em tudo.
 */
function testarInserirImagensCapa() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(ABA);
  if (!sheet) {
    SpreadsheetApp.getUi().alert('Não encontrei a aba "' + ABA + '". Confira o nome da aba.');
    return;
  }

  let sucesso = 0;
  let falhas = [];

  for (let linha = LINHA_INICIO_TESTE; linha <= LINHA_FIM_TESTE; linha++) {
    const url = sheet.getRange(linha, COL_LINK_CAPA).getValue();
    if (!url) {
      falhas.push('Linha ' + linha + ': sem link na coluna E');
      continue;
    }
    try {
      // remove imagem/conteúdo antigo da célula de saída, se houver
      sheet.getRange(linha, COL_IMAGEM_SAIDA).clearContent();

      // insere a imagem de verdade, ancorada na célula (não é fórmula)
      sheet.insertImage(url, COL_IMAGEM_SAIDA, linha);
      sucesso++;
    } catch (e) {
      falhas.push('Linha ' + linha + ': erro ao inserir - ' + e.message);
    }
  }

  // ajusta largura da coluna F e altura das 5 linhas pra imagem aparecer bem
  sheet.setColumnWidth(COL_IMAGEM_SAIDA, 180);
  sheet.setRowHeights(LINHA_INICIO_TESTE, LINHA_FIM_TESTE - LINHA_INICIO_TESTE + 1, 150);

  let msg = sucesso + ' de ' + (LINHA_FIM_TESTE - LINHA_INICIO_TESTE + 1) + ' imagens inseridas com sucesso.';
  if (falhas.length > 0) {
    msg += '\n\nProblemas:\n' + falhas.join('\n');
  }
  SpreadsheetApp.getUi().alert(msg);
}
