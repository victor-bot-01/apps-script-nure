/**
 * Apps Script - Teste de inserção de imagens NA CÉLULA (Shopee)
 * Anúncios Shopee - Essência do Brasil / Ponte Vecchio Joias
 *
 * COMO INSTALAR (mesmo processo de antes):
 * 1. Abra a planilha "Anúncios Shopee" no Google Sheets.
 * 2. Menu Extensões > Apps Script.
 * 3. Apague todo o código que já estiver lá (Code.gs) - inclusive a
 *    versão anterior desse script, se ainda estiver colada.
 * 4. Cole todo o conteúdo deste arquivo.
 * 5. Clique no ícone de salvar (disquete).
 * 6. Feche a aba do Apps Script e volte pra planilha - em alguns segundos
 *    aparece o menu "📷 Fotos Shopee" na barra de menus.
 * 7. Na primeira vez que usar, o Google vai pedir autorização - é normal.
 * 8. Rode pelo menu: 📷 Fotos Shopee > Limpar imagens soltas da planilha
 *    (isso remove as imagens flutuantes bagunçadas do teste anterior)
 * 9. Depois rode: 📷 Fotos Shopee > Testar com imagem NA célula (5 primeiras)
 *
 * O QUE MUDOU EM RELAÇÃO AO TESTE ANTERIOR:
 * Da vez passada usei sheet.insertImage(), que cria uma imagem "flutuante"
 * por cima da planilha (não fica de verdade dentro da célula, por isso
 * apareceu com tamanho errado e fora do lugar). Agora uso
 * SpreadsheetApp.newCellImage(), que faz a imagem virar o valor real da
 * célula - fica contida dentro dela e redimensiona junto com a
 * linha/coluna.
 */

const ABA = 'Sheet1';
const COL_LINK_CAPA = 5;    // coluna E
const COL_IMAGEM_SAIDA = 6; // coluna F
const LINHA_INICIO_TESTE = 2;
const LINHA_FIM_TESTE = 6; // 5 primeiras linhas de dados (2,3,4,5,6)

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📷 Fotos Shopee')
    .addItem('🧹 Limpar imagens soltas da planilha', 'limparImagensFlutuantes')
    .addItem('🧪 Testar com imagem NA célula (5 primeiras)', 'testarImagemNaCelula')
    .addToUi();
}

/**
 * Remove as imagens flutuantes que ficaram bagunçadas no teste anterior
 * (o método insertImage() antigo). Rode isso uma vez antes do novo teste.
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

/**
 * Insere a imagem da Capa (coluna E) NA célula da coluna F (não flutuante),
 * só nas 5 primeiras linhas de dados, pra validar esse método.
 */
function testarImagemNaCelula() {
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
      const imagemCelula = SpreadsheetApp.newCellImage().setSourceUrl(url).build();
      sheet.getRange(linha, COL_IMAGEM_SAIDA).setValue(imagemCelula);
      sucesso++;
    } catch (e) {
      falhas.push('Linha ' + linha + ': erro ao inserir - ' + e.message);
    }
  }

  // ajusta largura da coluna F e altura das 5 linhas pra imagem aparecer bem
  sheet.setColumnWidth(COL_IMAGEM_SAIDA, 180);
  sheet.setRowHeights(LINHA_INICIO_TESTE, LINHA_FIM_TESTE - LINHA_INICIO_TESTE + 1, 150);

  let msg = sucesso + ' de ' + (LINHA_FIM_TESTE - LINHA_INICIO_TESTE + 1) + ' imagens inseridas NA célula com sucesso.';
  if (falhas.length > 0) {
    msg += '\n\nProblemas:\n' + falhas.join('\n');
  }
  SpreadsheetApp.getUi().alert(msg);
}
