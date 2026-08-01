/**
 * Apps Script - Painel de Correção de Anúncios (Mercado Livre)
 * Essência do Brasil / Ponte Vecchio Joias
 *
 * COMO INSTALAR (uma única vez):
 * 1. Abra a planilha no Google Sheets.
 * 2. Menu Extensões > Apps Script.
 * 3. Apague qualquer código de exemplo que já esteja lá (Code.gs).
 * 4. Cole todo o conteúdo deste arquivo.
 * 5. Clique no ícone de salvar (disquete).
 * 6. Feche a aba do Apps Script e volte pra planilha - em alguns segundos
 *    aparece um novo menu "📋 Correção ML" na barra de menus.
 * 7. Na primeira vez que usar uma função do menu, o Google vai pedir
 *    autorização - é normal, é a sua própria planilha pedindo permissão
 *    para editar ela mesma.
 */

const ABAS_CHECKLIST = [
  '🧴 Perfumes', '💧 Óleos Essenciais', '📿 Colares', '🔶 Pingentes',
  '💍 Joias e Acessórios', '🌬️ Difusores e Aromatizadores', '🧖 Cuidados Pessoais'
];
const ABAS_SIMPLES = ['🗑️ Descontinuar', '⚠️ Nomes a Confirmar', '🔁 Possíveis Duplicados'];

const COL_STATUS = 1;      // A
const COL_RESPONSAVEL = 9; // I (nas abas de checklist)
const COL_DATA = 10;       // J (nas abas de checklist)

/**
 * Cria o menu personalizado assim que a planilha é aberta.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📋 Correção ML')
    .addItem('✅ Marcar linha(s) selecionada(s) como Corrigido', 'marcarComoCorrigido')
    .addItem('🔒 Proteger colunas calculadas (fazer 1x)', 'protegerColunas')
    .addItem('🔓 Remover proteção das colunas', 'removerProtecao')
    .addItem('🔄 Atualizar carimbo de data em linhas concluídas', 'atualizarCarimbos')
    .addToUi();
}

/**
 * Marca a(s) linha(s) selecionada(s) na aba atual como "Corrigido"
 * e preenche a data de hoje automaticamente.
 */
function marcarComoCorrigido() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const name = sheet.getName();
  if (ABAS_CHECKLIST.indexOf(name) === -1) {
    SpreadsheetApp.getUi().alert('Essa função funciona só nas abas de categoria (Perfumes, Óleos Essenciais, etc).');
    return;
  }
  const sel = sheet.getActiveRange();
  const startRow = Math.max(sel.getRow(), 2);
  const endRow = sel.getLastRow();
  const today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd/MM/yyyy');

  for (let r = startRow; r <= endRow; r++) {
    sheet.getRange(r, COL_STATUS).setValue('Corrigido');
    const dataCell = sheet.getRange(r, COL_DATA);
    if (!dataCell.getValue()) dataCell.setValue(today);
    const respCell = sheet.getRange(r, COL_RESPONSAVEL);
    if (!respCell.getValue()) {
      const email = Session.getActiveUser().getEmail();
      respCell.setValue(email || '');
    }
  }
  SpreadsheetApp.getActiveSpreadsheet().toast('Linhas ' + startRow + '-' + endRow + ' marcadas como Corrigido.');
}

/**
 * Ao editar manualmente a coluna Status para "Corrigido", preenche a
 * data automaticamente (dispara sozinho, sem precisar do menu).
 */
function onEdit(e) {
  if (!e || !e.range) return;
  const sheet = e.range.getSheet();
  const name = sheet.getName();
  if (ABAS_CHECKLIST.indexOf(name) === -1 && ABAS_SIMPLES.indexOf(name) === -1) return;
  if (e.range.getColumn() !== COL_STATUS && e.range.getColumn() !== 1) return;

  const row = e.range.getRow();
  if (row === 1) return;

  const value = e.range.getValue();
  const isChecklist = ABAS_CHECKLIST.indexOf(name) !== -1;
  if (isChecklist && value === 'Corrigido') {
    const dataCell = sheet.getRange(row, COL_DATA);
    if (!dataCell.getValue()) {
      dataCell.setValue(Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd/MM/yyyy'));
    }
  }
}

/**
 * Protege as colunas que a equipe não deve editar (Gravidade, Código,
 * Link, Título, Situação, Problema(s), Detalhes) - só deixa editável
 * Status, Responsável, Data e Observações.
 */
function protegerColunas() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ABAS_CHECKLIST.forEach(function(name) {
    const sheet = ss.getSheetByName(name);
    if (!sheet) return;
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) return;
    // protege colunas B a H (Gravidade até Detalhes)
    const range = sheet.getRange(2, 2, lastRow - 1, 7);
    const protection = range.protect().setDescription('Colunas calculadas - não editar (' + name + ')');
    protection.setWarningOnly(true); // avisa mas não bloqueia 100% (mais simples pra equipe toda)
  });
  SpreadsheetApp.getUi().alert('Colunas calculadas protegidas (aviso ao editar) em todas as abas de categoria.');
}

function removerProtecao() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ABAS_CHECKLIST.forEach(function(name) {
    const sheet = ss.getSheetByName(name);
    if (!sheet) return;
    const protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
    protections.forEach(function(p) { p.remove(); });
  });
  SpreadsheetApp.getUi().alert('Proteção removida de todas as abas de categoria.');
}

/**
 * Passa por todas as linhas marcadas "Corrigido" sem data preenchida
 * e completa com a data de hoje (útil se alguém editou por fora do onEdit).
 */
function atualizarCarimbos() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd/MM/yyyy');
  let count = 0;
  ABAS_CHECKLIST.forEach(function(name) {
    const sheet = ss.getSheetByName(name);
    if (!sheet) return;
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) return;
    const statusVals = sheet.getRange(2, COL_STATUS, lastRow - 1, 1).getValues();
    const dataVals = sheet.getRange(2, COL_DATA, lastRow - 1, 1).getValues();
    for (let i = 0; i < statusVals.length; i++) {
      if (statusVals[i][0] === 'Corrigido' && !dataVals[i][0]) {
        sheet.getRange(2 + i, COL_DATA).setValue(today);
        count++;
      }
    }
  });
  SpreadsheetApp.getUi().alert(count + ' carimbo(s) de data preenchido(s).');
}
