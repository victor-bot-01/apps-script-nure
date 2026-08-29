/**
 * Apps Script - Newsletter por Templates (Essência do Brasil)
 *
 * ARQUITETURA (planilha com 4 abas):
 * 1. "Links Produtos"          - catálogo de produtos (Link do produto | Link
 *                                 da foto | Nome - sem coluna de preço: o
 *                                 preço sempre vem da pesquisa mais recente,
 *                                 colada em "Marketing em Preparação"). Já
 *                                 existente.
 * 2. "Links Padrão"            - links fixos do site (Início, Contato,
 *                                 Instagram, categorias...). Já existente.
 * 3. "Templade"                - catálogo de ESTRUTURAS de e-mail. Cada
 *                                 template (ex: "Template A") tem sua seção
 *                                 de "Estrutura" (cores, quantidade de
 *                                 produtos/banners) e sua "Ficha técnica"
 *                                 (campos de texto separados por etiqueta,
 *                                 que a IA preenche por tema). A célula
 *                                 "Texto pronto pra copiar" é preenchida
 *                                 pelo PRÓPRIO SCRIPT (não é fórmula do
 *                                 Sheets - isso evita erro de separador de
 *                                 fórmula por causa do idioma da planilha).
 * 4. "Marketing em Preparação" - estrutura FIXA (serve pra qualquer
 *                                 template), reaproveitada a cada campanha:
 *                                 2 campos de texto único - um pra colar o
 *                                 resultado da pesquisa de produtos (até 5
 *                                 blocos "ETIQUETA: valor", um por produto,
 *                                 separados por linha em branco - mesmo
 *                                 formato que o "texto pronto pra pedir
 *                                 produtos" já pede) e outro pra colar o
 *                                 bloco copiado da "Templade". O preço
 *                                 exibido no e-mail é sempre o "Preço
 *                                 original" (e o "Preço com desconto", se
 *                                 houver) que vierem desse texto colado -
 *                                 "Links Produtos" não guarda preço, só
 *                                 link/foto/nome.
 *
 * FLUXO DE UMA CAMPANHA:
 * 1. Você me dá o tema.
 * 2. Eu olho a aba "Templade" e digo qual template combina melhor.
 * 3. Eu preencho a "Ficha técnica" daquele template com textos sugeridos.
 * 4. Você roda "🔄 Atualizar 'Texto pronto pra copiar'" (recalcula o bloco
 *    de texto a partir dos valores atuais), copia essa célula e cola no
 *    campo de texto da aba "Marketing em Preparação", e preenche nome,
 *    preço pesquisado, preço com desconto e observação de cada produto.
 * 5. Você roda "✉️ Enviar - Template" (item ÚNICO de menu, serve pra
 *    qualquer template). O script lê o nome do template dentro do texto
 *    colado, escolhe sozinho a função de montagem certa, busca os produtos
 *    por nome, confere o preço contra "Links Produtos", monta o HTML e
 *    envia.
 *
 * CADA TEMPLATE NOVO = 1 função de montagem (ex: montarHtmlTemplateA) +
 * 1 entrada no REGISTRO_TEMPLATES abaixo. Não precisa de item de menu novo
 * nem função de envio nova - o "✉️ Enviar - Template" já serve pra todos.
 * Quando você criar um "Template B" na aba "Templade", é só pedir que eu
 * adiciono o código dele aqui do mesmo jeito.
 *
 * COMO INSTALAR (mesmo processo de sempre):
 * 1. Abra a planilha no Google Sheets.
 * 2. Menu Extensões > Apps Script.
 * 3. Apague todo o código antigo (Code.gs) e cole todo o conteúdo deste
 *    arquivo no lugar.
 * 4. Salve (ícone de disquete).
 * 5. Feche a aba do Apps Script e volte pra planilha - aparece o menu
 *    "📧 Newsletter - Essência do Brasil". Na primeira execução o Google
 *    vai pedir autorização pra enviar e-mail em seu nome - é normal, aceite.
 * 6. Se a aba "Templade" já existir na sua planilha com a célula "Texto
 *    pronto pra copiar" mostrando "#ERROR!" (bug da versão anterior, que
 *    usava fórmula do Sheets), rode "🔄 Atualizar 'Texto pronto pra
 *    copiar'" pra corrigir sem precisar recriar a aba.
 */

const EMAIL_DESTINO_TESTE = 'victor@gigaimports.com';

const ABA_PRODUTOS = 'Links Produtos';
const ABA_LINKS_PADRAO = 'Links Padrão';
const ABA_TEMPLADE = 'Templade';
const ABA_PREPARACAO = 'Marketing em Preparação';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📧 Newsletter - Essência do Brasil')
    .addItem('🧩 Criar aba "Templade"', 'criarAbaTemplade')
    .addItem('🔄 Atualizar "Texto pronto pra copiar" (Templade)', 'atualizarTextoParaCopiar')
    .addItem('🧹 Limpar Ficha técnica (Templade)', 'limparFichaTecnicaTemplade')
    .addItem('📝 Criar aba "Marketing em Preparação"', 'criarAbaMarketingPreparacao')
    .addItem('🧹 Limpar "Marketing em Preparação" (nova campanha)', 'limparMarketingPreparacao')
    .addItem('🔗 Criar aba "Links Padrão"', 'criarAbaLinksPadrao')
    .addSeparator()
    .addItem('✉️ Enviar - Template', 'enviarTemplate')
    .addToUi();
}

// ======================= ABA "TEMPLADE" =======================

/**
 * Cria (se ainda não existir) a aba "Templade", já com o bloco do
 * "Template A" (a estrutura que já testamos: cabeçalho + destaque + 3
 * produtos + benefícios + banner largo + sobre + 2 produtos + rodapé).
 * Não sobrescreve se a aba já existir, pra não perder edições suas.
 */
function criarAbaTemplade() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (ss.getSheetByName(ABA_TEMPLADE)) {
    SpreadsheetApp.getUi().alert('A aba "' + ABA_TEMPLADE + '" já existe - não mexi pra não sobrescrever o que você já tenha preenchido.');
    return;
  }

  const sheet = ss.insertSheet(ABA_TEMPLADE);

  const linhas = [
    ['TEMPLATE A', ''],
    ['— Estrutura —', ''],
    ['Nome do template', 'Template A'],
    ['Cor de fundo', '#151a12 (verde escuro)'],
    ['Cor de destaque (dourado)', '#c9a227'],
    ['Cor de texto claro', '#f4ecdb'],
    ['Cor de texto escuro', '#2a2823'],
    ['Quantidade de produtos', '5 (3 + 2)'],
    ['Quantidade de banners/fotos padrão', '3 (destaque, faixa larga, sobre)'],
    ['Seções', 'Cabeçalho, destaque (hero), 3 produtos, benefícios, banner largo, sobre, 2 produtos, rodapé'],
    ['Função de envio', 'Enviar - Template A (menu)'],
    ['', ''],
    ['— Ficha técnica (preencha os valores; a célula "Texto pronto pra copiar" abaixo já junta tudo automaticamente) —', ''],
    ['NOME DO TEMPLATE', 'Template A'],
    ['TÍTULO HERO', 'Semana do Brasil'],
    ['LEGENDA HERO', 'Uma celebração brasileira'],
    ['TEXTO HERO', 'Descontos exclusivos em essências e perfumes com óleos essenciais puros, só até domingo.'],
    ['TEXTO BOTÃO HERO', 'Aproveite as ofertas'],
    ['TÍTULO SEÇÃO PRODUTOS', 'Selecionados pra você'],
    ['TÍTULO BENEFÍCIOS', 'Por que aproveitar essa semana'],
    ['BENEFÍCIO 1', 'Até 30% de desconto em produtos selecionados'],
    ['BENEFÍCIO 2', 'Frete grátis a partir de R$ 150'],
    ['BENEFÍCIO 3', 'Estoque limitado, promoção só até domingo'],
    ['TÍTULO SOBRE', 'Sobre a Essência do Brasil'],
    ['TEXTO SOBRE', 'Perfumaria natural feita com óleos essenciais puros, celebrando a biodiversidade brasileira em cada frasco.'],
    ['RODAPÉ TEXTO', 'Essência do Brasil · e-mail de campanha'],
    ['', ''],
    ['Texto pronto pra copiar (cole isso no campo de texto da aba "Marketing em Preparação")', ''],
  ];

  sheet.getRange(1, 1, linhas.length, 2).setValues(linhas);

  sheet.getRange('A1').setFontWeight('bold').setFontSize(13);
  sheet.getRange('A2').setFontWeight('bold');
  sheet.getRange('A13').setFontWeight('bold');
  sheet.getRange('A28').setFontWeight('bold');
  sheet.getRange(1, 1, linhas.length, 2).setWrap(true);
  sheet.setColumnWidth(1, 320);
  sheet.setColumnWidth(2, 420);

  // Junta as linhas "NOME DO TEMPLATE" até "RODAPÉ TEXTO" em um bloco de
  // texto único, pronto pra copiar - feito pelo script (não por fórmula do
  // Sheets, pra não depender do separador de fórmula da língua da planilha).
  atualizarTextoParaCopiar();

  SpreadsheetApp.getUi().alert('Aba "' + ABA_TEMPLADE + '" criada com o bloco do Template A. Quando você criar um Template B, é só duplicar esse padrão de bloco mais abaixo na mesma aba e me avisar pra eu adicionar o código dele.');
}

/**
 * Recalcula a célula "Texto pronto pra copiar" a partir dos valores atuais
 * da ficha técnica (da linha "NOME DO TEMPLATE" até a linha "RODAPÉ TEXTO"
 * na aba "Templade") e escreve o resultado como texto puro (não fórmula).
 * Rode isso de novo sempre que editar algum valor da ficha técnica.
 */
function atualizarTextoParaCopiar() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_TEMPLADE);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_TEMPLADE + '". Crie primeiro pelo menu "🧩 Criar aba \'Templade\'".');
    return;
  }

  const dados = sheet.getRange(1, 1, sheet.getLastRow(), 2).getValues();
  // Comparação com o texto EXATO (sem forçar maiúsculo) de propósito: a
  // seção "Estrutura" usa "Nome do template" (frase normal) e a "Ficha
  // técnica" usa "NOME DO TEMPLATE" (tudo maiúsculo) - são rótulos
  // diferentes, e comparar sem diferenciar caixa fazia a busca cair na
  // linha errada (a da seção "Estrutura", que vem antes).
  const inicio = dados.findIndex(function(linha) { return String(linha[0]).trim() === 'NOME DO TEMPLATE'; });
  const fim = dados.findIndex(function(linha) { return String(linha[0]).trim() === 'RODAPÉ TEXTO'; });
  // startsWith (índice 0), não "contém em qualquer lugar": o texto de
  // instrução da seção "Ficha técnica" também MENCIONA "Texto pronto pra
  // copiar" no meio da frase - só a linha certa começa exatamente com isso.
  const linhaAlvo = dados.findIndex(function(linha) { return String(linha[0]).trim().toLowerCase().indexOf('texto pronto pra copiar') === 0; });
  // linha de instrução da "Ficha técnica" - limpa qualquer lixo que uma
  // versão anterior do script possa ter escrito ali por engano.
  const linhaInstrucao = dados.findIndex(function(linha) { return String(linha[0]).trim().toLowerCase().indexOf('— ficha técnica') === 0; });

  if (inicio === -1 || fim === -1 || fim < inicio || linhaAlvo === -1) {
    ui.alert('Não encontrei as linhas esperadas ("NOME DO TEMPLATE", "RODAPÉ TEXTO" e "Texto pronto pra copiar") na aba "' + ABA_TEMPLADE + '". Se você mudou a estrutura dessa aba, me avisa pra eu ajustar o script.');
    return;
  }

  const textoFinal = dados.slice(inicio, fim + 1)
    .map(function(linha) { return String(linha[0]).trim() + ': ' + String(linha[1] || '').trim(); })
    .join('\n');

  sheet.getRange(linhaAlvo + 1, 2).setValue(textoFinal);
  if (linhaInstrucao !== -1) {
    sheet.getRange(linhaInstrucao + 1, 2).clearContent();
  }
  ui.alert('"Texto pronto pra copiar" atualizado. Copie a célula e cole no campo de texto da aba "' + ABA_PREPARACAO + '".');
}

/**
 * Apaga só os VALORES da Ficha técnica do Template A (da linha "NOME DO
 * TEMPLATE" até "RODAPÉ TEXTO", coluna B) e a célula "Texto pronto pra
 * copiar" - mantém os rótulos e a seção "Estrutura" intactos. Use antes de
 * preencher os textos de um tema novo, pra não sobrar texto do tema
 * anterior misturado.
 */
function limparFichaTecnicaTemplade() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_TEMPLADE);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_TEMPLADE + '". Crie primeiro pelo menu "🧩 Criar aba \'Templade\'".');
    return;
  }

  const resp = ui.alert(
    'Isso vai apagar os valores da Ficha técnica do Template A (título, textos, benefícios...) na aba "Templade" - os rótulos e a seção "Estrutura" continuam lá. Confirma?',
    ui.ButtonSet.YES_NO
  );
  if (resp !== ui.Button.YES) return;

  const dados = sheet.getRange(1, 1, sheet.getLastRow(), 2).getValues();
  const inicio = dados.findIndex(function(linha) { return String(linha[0]).trim() === 'NOME DO TEMPLATE'; });
  const fim = dados.findIndex(function(linha) { return String(linha[0]).trim() === 'RODAPÉ TEXTO'; });
  const linhaAlvo = dados.findIndex(function(linha) { return String(linha[0]).trim().toLowerCase().indexOf('texto pronto pra copiar') === 0; });

  if (inicio === -1 || fim === -1) {
    ui.alert('Não encontrei as linhas da Ficha técnica na aba "' + ABA_TEMPLADE + '".');
    return;
  }

  sheet.getRange(inicio + 1, 2, fim - inicio + 1, 1).clearContent();
  if (linhaAlvo !== -1) {
    sheet.getRange(linhaAlvo + 1, 2).clearContent();
  }

  ui.alert('Ficha técnica limpa. Pode preencher os valores do novo tema.');
}

/**
 * Apaga os produtos e o texto preenchidos na aba "Marketing em
 * Preparação", pra deixar pronta pra próxima campanha (ela guarda uma
 * campanha por vez).
 */
function limparMarketingPreparacao() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_PREPARACAO);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_PREPARACAO + '". Crie primeiro pelo menu "📝 Criar aba \'Marketing em Preparação\'".');
    return;
  }

  const resp = ui.alert(
    'Isso vai apagar os produtos e o texto preenchidos na aba "Marketing em Preparação", pra começar uma campanha nova. Confirma?',
    ui.ButtonSet.YES_NO
  );
  if (resp !== ui.Button.YES) return;

  sheet.getRange(2, 2).clearContent();
  sheet.getRange(3, 2).clearContent();

  ui.alert('Aba "' + ABA_PREPARACAO + '" limpa. Pronta pra próxima campanha.');
}

// ======================= ABA "MARKETING EM PREPARAÇÃO" =======================

/**
 * Cria (se ainda não existir) a aba "Marketing em Preparação": estrutura
 * fixa, reaproveitada a cada campanha - 2 campos de texto único: um pra
 * colar o resultado da pesquisa de produtos (todos de uma vez, um bloco
 * "ETIQUETA: valor" por produto, separados por linha em branco) e outro
 * pra colar o bloco copiado da "Templade".
 */
function criarAbaMarketingPreparacao() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (ss.getSheetByName(ABA_PREPARACAO)) {
    SpreadsheetApp.getUi().alert('A aba "' + ABA_PREPARACAO + '" já existe - não mexi pra não sobrescrever a campanha que você esteja preparando.');
    return;
  }

  const sheet = ss.insertSheet(ABA_PREPARACAO);

  const linhas = [
    ['Campo', 'Valor'],
    ['Produtos (colar aqui o resultado da pesquisa, todos de uma vez, com linha em branco entre um produto e outro)', ''],
    ['Texto (colar aqui a ficha técnica copiada da aba "Templade")', ''],
  ];

  sheet.getRange(1, 1, linhas.length, 2).setValues(linhas);
  sheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  sheet.getRange(2, 1, 2, 2).setWrap(true);
  sheet.setRowHeight(2, 320);
  sheet.setRowHeight(3, 220);
  sheet.setColumnWidth(1, 320);
  sheet.setColumnWidth(2, 480);
  sheet.setFrozenRows(1);

  SpreadsheetApp.getUi().alert('Aba "' + ABA_PREPARACAO + '" criada. Cole o resultado da pesquisa de produtos (linha 2) e a ficha técnica (linha 3), depois rode o envio do template correspondente no menu.');
}

/**
 * Cria (se ainda não existir) a aba "Links Padrão" - já preenchida com
 * toda a estrutura de categorias/filtros do menu do site.
 */
function criarAbaLinksPadrao() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const NOME_ABA = ABA_LINKS_PADRAO;

  if (ss.getSheetByName(NOME_ABA)) {
    SpreadsheetApp.getUi().alert('A aba "' + NOME_ABA + '" já existe - não mexi pra não sobrescrever links que você já tenha colado.');
    return;
  }

  const sheet = ss.insertSheet(NOME_ABA);

  // [Categoria, Subcategoria, Nome para o e-mail, Link]
  const linhas = [
    ['Categoria', 'Subcategoria', 'Nome para o e-mail', 'Link'],

    ['—', '—', 'Início', ''],
    ['—', '—', 'Contato', ''],
    ['—', '—', 'Instagram', ''],
    ['—', '—', 'Descadastro', ''],

    ['Ofertas', '—', 'Ver tudo em Ofertas', ''],
    ['Ofertas', 'Elas', 'Ofertas - Elas', ''],
    ['Ofertas', 'Eles', 'Ofertas - Eles', ''],

    ['Perfumes Masculinos', '—', 'Ver tudo em Perfumes Masculinos', ''],
    ['Perfumes Masculinos', 'Até R$79,90', 'Perfumes Masc. até R$79,90', ''],
    ['Perfumes Masculinos', 'Amadeirados', 'Perfumes Masc. Amadeirados', ''],
    ['Perfumes Masculinos', 'Cítricos', 'Perfumes Masc. Cítricos', ''],
    ['Perfumes Masculinos', 'com Almíscar', 'Perfumes Masc. com Almíscar', ''],
    ['Perfumes Masculinos', 'com Patchouli', 'Perfumes Masc. com Patchouli', ''],
    ['Perfumes Masculinos', 'Florais', 'Perfumes Masc. Florais', ''],
    ['Perfumes Masculinos', 'Herbais', 'Perfumes Masc. Herbais', ''],
    ['Perfumes Masculinos', 'Refrescantes', 'Perfumes Masc. Refrescantes', ''],
    ['Perfumes Masculinos', 'Extrait de Parfum', 'Perfumes Masc. Extrait de Parfum', ''],
    ['Perfumes Masculinos', 'Kits', 'Perfumes Masc. Kits', ''],
    ['Perfumes Masculinos', 'Perfumes Roll On', 'Perfumes Masc. Roll On', ''],
    ['Perfumes Masculinos', 'Mais Vendidos e Recomendados', 'Perfumes Masc. Mais Vendidos', ''],

    ['Perfumes Femininos', '—', 'Ver tudo em Perfumes Femininos', ''],
    ['Perfumes Femininos', 'Amadeirados', 'Perfumes Fem. Amadeirados', ''],
    ['Perfumes Femininos', 'Florais', 'Perfumes Fem. Florais', ''],
    ['Perfumes Femininos', 'Frutais', 'Perfumes Fem. Frutais', ''],
    ['Perfumes Femininos', 'Cítricos', 'Perfumes Fem. Cítricos', ''],
    ['Perfumes Femininos', 'Gourmand', 'Perfumes Fem. Gourmand', ''],
    ['Perfumes Femininos', 'Herbais/Refrescantes', 'Perfumes Fem. Herbais/Refrescantes', ''],
    ['Perfumes Femininos', 'Orientais', 'Perfumes Fem. Orientais', ''],
    ['Perfumes Femininos', 'Kits', 'Perfumes Fem. Kits', ''],
    ['Perfumes Femininos', 'Até R$79,90', 'Perfumes Fem. até R$79,90', ''],
    ['Perfumes Femininos', 'Extrait de Parfum', 'Perfumes Fem. Extrait de Parfum', ''],
    ['Perfumes Femininos', 'Perfumes Roll On', 'Perfumes Fem. Roll On', ''],

    ['Óleos Essenciais', '—', 'Ver tudo em Óleos Essenciais', ''],
    ['Óleos Essenciais', 'Prontos para Massagem', 'Óleos Essenciais p/ Massagem', ''],
    ['Óleos Essenciais', 'Óleos em roll on', 'Óleos Essenciais Roll On', ''],
    ['Óleos Essenciais', 'Kits', 'Óleos Essenciais Kits', ''],
    ['Óleos Essenciais', '10ml a 100ml', 'Óleos Essenciais 10ml a 100ml', ''],
    ['Óleos Essenciais', 'Blends/Sinergias', 'Óleos Essenciais Blends/Sinergias', ''],

    ['Óleos Vegetais', '—', 'Óleos Vegetais', ''],

    ['Essências', '—', 'Ver tudo em Essências', ''],
    ['Essências', 'Individuais', 'Essências Individuais', ''],
    ['Essências', 'Kits de Essências', 'Kits de Essências', ''],

    ['Cremes e Séruns', '—', 'Cremes e Séruns', ''],

    ['Coleções', '—', 'Ver tudo em Coleções', ''],
    ['Coleções', 'Absolu / Elixir - Extrait de Parfum', 'Coleção Absolu / Elixir', ''],
    ['Coleções', 'Botânica Imperial', 'Coleção Botânica Imperial', ''],
    ['Coleções', 'Com Feromônios', 'Coleção Com Feromônios', ''],
    ['Coleções', 'Dia dos Namorados', 'Coleção Dia dos Namorados', ''],
    ['Coleções', 'Dia dos Pais', 'Coleção Dia dos Pais', ''],
    ['Coleções', 'Fougères', 'Coleção Fougères', ''],
    ['Coleções', 'Mol', 'Coleção Mol', ''],
    ['Coleções', 'Profumo', 'Coleção Profumo', ''],
    ['Coleções', 'Sinergias Oficiais do Livro', 'Coleção Sinergias Oficiais do Livro', ''],
    ['Coleções', 'Vegano e Cruelty Free', 'Coleção Vegano e Cruelty Free', ''],

    ['Blog / Conteúdo', '—', 'Aromaterapia Funciona?', ''],
  ];

  sheet.getRange(1, 1, linhas.length, 4).setValues(linhas);
  sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, 4);

  SpreadsheetApp.getUi().alert('Aba "' + NOME_ABA + '" criada com ' + (linhas.length - 1) + ' links (categorias/subcategorias). Agora é só colar o link de cada um na coluna D.');
}

// ======================= LEITURA DE DADOS =======================

/**
 * Procura um produto pelo nome exato (sem diferenciar maiúsculas/minúsculas
 * nem espaços nas pontas) na aba "Links Produtos" (colunas: Link do
 * produto | Link da foto | Nome - sem coluna de preço, o preço vem sempre
 * do texto colado em "Marketing em Preparação", que é mais atualizado).
 * Retorna null se não encontrar.
 */
function buscarProdutoPorNome(nome) {
  if (!nome) return null;
  const alvo = String(nome).trim().toLowerCase();
  if (!alvo) return null;

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_PRODUTOS);
  if (!sheet) throw new Error('Não encontrei a aba "' + ABA_PRODUTOS + '".');

  const ultimaLinha = sheet.getLastRow();
  if (ultimaLinha < 2) return null;

  const dados = sheet.getRange(2, 1, ultimaLinha - 1, 3).getValues();
  for (let i = 0; i < dados.length; i++) {
    const [link, foto, nomeProduto] = dados[i];
    if (String(nomeProduto).trim().toLowerCase() === alvo) {
      return { link: link || '#', foto: foto || '', nome: nomeProduto };
    }
  }
  return null;
}

/**
 * Procura um link fixo pelo "Nome para o e-mail" na aba "Links Padrão".
 * Retorna string vazia se não encontrar ou se o valor não for um link de
 * verdade (ex: a linha de "Descadastro" tem só uma observação, não uma URL).
 */
function buscarLinkPadrao(nomeParaEmail) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_LINKS_PADRAO);
  if (!sheet) return '';

  const ultimaLinha = sheet.getLastRow();
  if (ultimaLinha < 2) return '';

  const dados = sheet.getRange(2, 1, ultimaLinha - 1, 4).getValues();
  const alvo = String(nomeParaEmail).trim().toLowerCase();
  for (let i = 0; i < dados.length; i++) {
    const nome = String(dados[i][2]).trim().toLowerCase();
    if (nome === alvo) {
      const link = String(dados[i][3] || '').trim();
      return /^https?:\/\//i.test(link) ? link : '';
    }
  }
  return '';
}

function hrefOuAlmofada(link) {
  return link ? link : '#';
}

/**
 * Converte um valor de preço (número, ou texto tipo "R$ 39,90") pra número.
 * Retorna null se estiver vazio ou não for possível interpretar.
 */
function paraNumero(valor) {
  if (valor === '' || valor === null || valor === undefined) return null;
  if (typeof valor === 'number') return valor;
  const limpo = String(valor).replace('R$', '').trim().replace(',', '.');
  if (!limpo) return null;
  const numero = parseFloat(limpo);
  return isNaN(numero) ? null : numero;
}

function formatarPreco(numero) {
  return 'R$ ' + numero.toFixed(2).replace('.', ',');
}

/**
 * Lê a aba "Marketing em Preparação": o bloco de produtos colado (linha 2,
 * coluna B) e o texto único colado da ficha técnica (linha 3, coluna B).
 *
 * O bloco de produtos vem no mesmo formato que o texto pronto pra pedir
 * produtos já pede: um grupo de linhas "ETIQUETA: valor" por produto
 * (Nome do produto / Preço original / Preço com desconto / Observação),
 * com uma linha em branco separando um produto do outro - exatamente como
 * a pesquisa devolve, sem precisar reorganizar nada.
 */
function lerPreparacao() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_PREPARACAO);
  if (!sheet) throw new Error('Não encontrei a aba "' + ABA_PREPARACAO + '". Crie primeiro pelo menu "📝 Criar aba \'Marketing em Preparação\'".');

  const textoProdutos = String(sheet.getRange(2, 2).getValue() || '').trim();
  const texto = String(sheet.getRange(3, 2).getValue() || '').trim();

  const blocos = textoProdutos
    ? textoProdutos.split(/\n\s*\n/).map(function(bloco) { return bloco.trim(); }).filter(function(bloco) { return bloco; })
    : [];

  const produtos = [];
  for (let i = 0; i < 5; i++) {
    if (!blocos[i]) {
      produtos.push({ nome: '', precoPesquisado: '', precoComDesconto: '', observacao: '' });
      continue;
    }
    const campos = parseTextoColado(blocos[i]);
    produtos.push({
      nome: (campos['NOME DO PRODUTO'] || '').trim(),
      precoPesquisado: campos['PREÇO ORIGINAL'] || '',
      precoComDesconto: campos['PREÇO COM DESCONTO'] || '',
      observacao: campos['OBSERVAÇÃO'] || '',
    });
  }

  return { produtos: produtos, texto: texto };
}

/**
 * Separa o texto único colado em campos, a partir de linhas no formato
 * "ETIQUETA: valor" (uma por linha). Etiquetas viram maiúsculas/sem espaço
 * nas pontas, pra comparar sem depender de acentuação de digitação exata.
 */
function parseTextoColado(texto) {
  const mapa = {};
  if (!texto) return mapa;

  String(texto).split('\n').forEach(function(linha) {
    const idx = linha.indexOf(':');
    if (idx === -1) return;
    const chave = linha.substring(0, idx).trim().toUpperCase();
    const valor = linha.substring(idx + 1).trim();
    if (chave) mapa[chave] = valor;
  });

  return mapa;
}

// ======================= ENVIO (ÚNICO PARA QUALQUER TEMPLATE) =======================

/**
 * Registro de templates conhecidos: chave = nome do template em minúsculo
 * (tem que bater com o valor de "NOME DO TEMPLATE" no texto colado), valor
 * = função de montagem do HTML. Pra adicionar um Template B, basta somar
 * uma linha aqui: 'template b': montarHtmlTemplateB.
 */
const REGISTRO_TEMPLATES = {
  'template a': montarHtmlTemplateA,
};

/**
 * Item de menu ÚNICO pra enviar qualquer template. Lê o texto colado na
 * aba "Marketing em Preparação", descobre pelo "NOME DO TEMPLATE" qual
 * função de montagem usar (via REGISTRO_TEMPLATES) e segue o envio.
 */
function enviarTemplate() {
  const ui = SpreadsheetApp.getUi();

  let preparacao;
  try {
    preparacao = lerPreparacao();
  } catch (e) {
    ui.alert(e.message);
    return;
  }

  if (!preparacao.texto.trim()) {
    ui.alert('O campo de texto da aba "' + ABA_PREPARACAO + '" está vazio. Copie o "Texto pronto pra copiar" da aba "Templade" e cole ali antes de enviar.');
    return;
  }

  const campos = parseTextoColado(preparacao.texto);
  const nomeTemplateNoTexto = (campos['NOME DO TEMPLATE'] || '').trim().toLowerCase();
  const montar = REGISTRO_TEMPLATES[nomeTemplateNoTexto];

  if (!montar) {
    const disponiveis = Object.keys(REGISTRO_TEMPLATES).join(', ');
    ui.alert('Não reconheci o template "' + (campos['NOME DO TEMPLATE'] || '(vazio)') + '". Templates disponíveis: ' + disponiveis + '. Confira se o texto colado na aba "' + ABA_PREPARACAO + '" tem a linha "NOME DO TEMPLATE:" certa (e se cada linha usa o formato "ETIQUETA: valor").');
    return;
  }

  const produtos = [];
  for (let i = 0; i < preparacao.produtos.length; i++) {
    const entrada = preparacao.produtos[i];
    if (!entrada.nome) {
      produtos.push(null);
      continue;
    }

    const produtoCatalogo = buscarProdutoPorNome(entrada.nome);
    if (!produtoCatalogo) {
      ui.alert('Não encontrei o produto "' + entrada.nome + '" na aba "' + ABA_PRODUTOS + '" (Produto ' + (i + 1) + '). Confira se o nome está exatamente igual e tente de novo.');
      return;
    }

    const precoPesquisado = paraNumero(entrada.precoPesquisado);
    if (precoPesquisado === null) {
      ui.alert('Falta o "Preço original" do Produto ' + (i + 1) + ' ("' + entrada.nome + '") na aba "' + ABA_PREPARACAO + '". Preencha antes de enviar.');
      return;
    }

    produtos.push({
      link: produtoCatalogo.link,
      foto: produtoCatalogo.foto,
      nome: produtoCatalogo.nome,
      preco: precoPesquisado,
      precoComDesconto: paraNumero(entrada.precoComDesconto),
      observacao: entrada.observacao,
    });
  }

  const html = montar(produtos, campos);
  const assunto = campos['TÍTULO HERO'] || 'Essência do Brasil';
  const textoAlternativo = assunto + ' - Essência do Brasil. Abra este e-mail num cliente que suporte HTML pra ver o conteúdo completo.';

  GmailApp.sendEmail(EMAIL_DESTINO_TESTE, assunto, textoAlternativo, {
    htmlBody: html,
    name: 'Essência do Brasil',
  });

  ui.alert('E-mail (' + (campos['NOME DO TEMPLATE'] || '') + ') enviado para ' + EMAIL_DESTINO_TESTE + '. Confira sua caixa de entrada.');
}

// ======================= MONTAGEM DO HTML - TEMPLATE A =======================
// Tudo com tabelas + estilo inline, de propósito - é o único jeito que
// funciona de forma confiável em e-mail.

function montarHtmlTemplateA(produtos, campos) {
  const corFundoPagina = '#151a12';
  const corFaixaEscura = '#151a12';
  const corDourado = '#c9a227';
  const corTextoClaro = '#f4ecdb';
  const corTextoEscuro = '#2a2823';
  const corPlaceholder = '#d9d4c7';
  const corPlaceholderTexto = '#8a8574';

  const texto = function(chave, padrao) {
    return campos[chave] || padrao;
  };

  const placeholderImagem = function(altura, textoDentro) {
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:' + corPlaceholder + ';border:1px dashed #b5af9d;">' +
        '<tr><td align="center" style="height:' + altura + 'px;font-family:Arial,sans-serif;font-size:12px;color:' + corPlaceholderTexto + ';">' + textoDentro + '</td></tr>' +
      '</table>'
    );
  };

  const cardReal = function(produto) {
    const precoFormatado = 'R$ ' + Number(produto.preco).toFixed(2).replace('.', ',');
    const temDesconto = produto.precoComDesconto !== null && produto.precoComDesconto !== undefined;
    const precoHtml = temDesconto
      ? '<span style="text-decoration:line-through;color:#8a8574;font-size:12px;font-weight:normal;">' + precoFormatado + '</span>&nbsp; ' +
        '<span style="color:' + corDourado + ';">' + formatarPreco(produto.precoComDesconto) + '</span>'
      : '<span style="color:' + corDourado + ';">' + precoFormatado + '</span>';
    const observacaoHtml = produto.observacao
      ? '<tr><td align="center" style="padding:0 8px 8px;font-family:Arial,sans-serif;font-size:10px;color:#8a8574;">' + produto.observacao + '</td></tr>'
      : '';
    const fotoHtml = produto.foto
      ? '<img src="' + produto.foto + '" width="150" alt="' + produto.nome + '" style="display:block;width:100%;max-width:150px;height:auto;border:0;">'
      : placeholderImagem(90, '[ sem link de foto na planilha ]');
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +
        '<tr><td align="center">' + fotoHtml + '</td></tr>' +
        '<tr><td align="center" style="padding-top:6px;font-family:Georgia,serif;font-size:15px;font-weight:bold;color:' + corTextoEscuro + ';">' + produto.nome + '</td></tr>' +
        '<tr><td align="center" style="padding:6px 0 4px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;">' + precoHtml + '</td></tr>' +
        observacaoHtml +
        '<tr><td align="center" style="padding-bottom:14px;">' +
          '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="border:1px solid ' + corDourado + ';border-radius:16px;padding:6px 18px;">' +
            '<a href="' + hrefOuAlmofada(produto.link) + '" style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.06em;color:' + corDourado + ';text-decoration:none;text-transform:uppercase;">Saiba mais</a>' +
          '</td></tr></table>' +
        '</td></tr>' +
      '</table>'
    );
  };

  const cardVazio = function(numero) {
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +
        '<tr><td align="center">' + placeholderImagem(140, '[ produto ' + numero + ' não preenchido em "' + ABA_PREPARACAO + '" ]') + '</td></tr>' +
      '</table>'
    );
  };

  const card = function(indice) {
    const produto = produtos[indice];
    return produto ? cardReal(produto) : cardVazio(indice + 1);
  };

  const linkOfertas = hrefOuAlmofada(buscarLinkPadrao('Ver tudo em Ofertas'));
  const linkContato = hrefOuAlmofada(buscarLinkPadrao('Contato'));
  const linkInstagram = hrefOuAlmofada(buscarLinkPadrao('Instagram'));
  const linkInicio = hrefOuAlmofada(buscarLinkPadrao('Início'));

  // Regra de e-mail responsivo: em telas até 600px de largura, as colunas
  // que estavam lado a lado (hero, cards, seção "sobre") passam a empilhar
  // uma embaixo da outra, ocupando 100% da largura - e as colunas de
  // "respiro" entre elas somem. Funciona no Gmail (app e navegador), Apple
  // Mail, Outlook.com e Yahoo. O Outlook de desktop (Windows) ignora essa
  // regra e sempre mostra a versão "de computador" - não quebra, só não
  // se adapta ali.
  const estiloResponsivo =
    '<style>' +
      '@media only screen and (max-width:600px) {' +
        '.stack100 { display:block !important; width:100% !important; padding-right:0 !important; padding-bottom:16px !important; }' +
        '.stackgap { display:none !important; }' +
      '}' +
    '</style>';

  return (
estiloResponsivo +
'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:' + corFundoPagina + ';">' +
'<tr><td align="center">' +
'<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#ffffff;">' +

  // Cabeçalho: marca + links de texto (vindos de "Links Padrão")
  '<tr><td style="background-color:' + corFaixaEscura + ';padding:16px 24px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td><a href="' + linkInicio + '" style="font-family:Georgia,serif;font-size:16px;color:' + corTextoClaro + ';text-decoration:none;">Essência do Brasil</a></td>' +
      '<td align="right" style="font-family:Arial,sans-serif;font-size:11px;color:' + corDourado + ';">' +
        '<a href="' + linkOfertas + '" style="color:' + corDourado + ';text-decoration:none;">OFERTAS</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
        '<a href="' + linkInstagram + '" style="color:' + corDourado + ';text-decoration:none;">INSTAGRAM</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
        '<a href="' + linkContato + '" style="color:' + corDourado + ';text-decoration:none;">CONTATO</a>' +
      '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // Seção de destaque (hero): texto de um lado, placeholder de imagem do outro
  '<tr><td style="background-color:' + corFaixaEscura + ';padding:8px 24px 32px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="55%" valign="middle" class="stack100" style="padding-right:16px;">' +
        '<div style="font-family:Georgia,serif;font-style:italic;font-size:13px;color:' + corDourado + ';">' + texto('LEGENDA HERO', 'Uma celebração brasileira') + '</div>' +
        '<div style="font-family:Arial,sans-serif;font-weight:bold;font-size:30px;line-height:1.1;color:' + corTextoClaro + ';padding:8px 0;">' + texto('TÍTULO HERO', 'Essência do Brasil') + '</div>' +
        '<div style="font-family:Georgia,serif;font-size:14px;color:#cfc8b8;padding-bottom:14px;">' + texto('TEXTO HERO', '') + '</div>' +
        '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:' + corDourado + ';border-radius:18px;padding:10px 22px;">' +
          '<a href="' + linkOfertas + '" style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.06em;color:' + corFaixaEscura + ';text-decoration:none;font-weight:bold;">' + texto('TEXTO BOTÃO HERO', 'Aproveite as ofertas').toUpperCase() + ' →</a>' +
        '</td></tr></table>' +
      '</td>' +
      '<td width="45%" valign="middle" class="stack100">' + placeholderImagem(160, '[ foto de destaque ]') + '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // Fileira de 3 produtos
  '<tr><td style="padding:28px 24px 8px;">' +
    '<div style="font-family:Georgia,serif;font-size:18px;color:' + corTextoEscuro + ';padding-bottom:16px;">' + texto('TÍTULO SEÇÃO PRODUTOS', 'Selecionados pra você') + ' &#x2728;</div>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="33%" valign="top" class="stack100">' + card(0) + '</td>' +
      '<td width="4%" class="stackgap"></td>' +
      '<td width="33%" valign="top" class="stack100">' + card(1) + '</td>' +
      '<td width="4%" class="stackgap"></td>' +
      '<td width="30%" valign="top" class="stack100">' + card(2) + '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // Seção de texto com marcadores
  '<tr><td style="padding:20px 24px;">' +
    '<div style="font-family:Georgia,serif;font-size:20px;color:' + corTextoEscuro + ';padding-bottom:10px;">' + texto('TÍTULO BENEFÍCIOS', 'Por que aproveitar essa semana') + '</div>' +
    '<div style="font-family:Arial,sans-serif;font-size:13px;line-height:1.7;color:#5a5648;">' +
      '&#x2705; ' + texto('BENEFÍCIO 1', '') + '<br>' +
      '&#x2705; ' + texto('BENEFÍCIO 2', '') + '<br>' +
      '&#x2705; ' + texto('BENEFÍCIO 3', '') +
    '</div>' +
  '</td></tr>' +

  // Faixa larga de foto
  '<tr><td style="padding:8px 24px 24px;">' + placeholderImagem(140, '[ foto em faixa larga ]') + '</td></tr>' +

  // Seção "sobre" + mais 2 produtos
  '<tr><td style="padding:8px 24px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="55%" valign="top" class="stack100" style="padding-right:16px;">' +
        '<div style="font-family:Georgia,serif;font-size:18px;color:' + corTextoEscuro + ';padding-bottom:8px;">' + texto('TÍTULO SOBRE', 'Sobre a Essência do Brasil') + '</div>' +
        '<div style="font-family:Arial,sans-serif;font-size:13px;line-height:1.6;color:#5a5648;">' + texto('TEXTO SOBRE', '') + '</div>' +
      '</td>' +
      '<td width="45%" valign="top" class="stack100">' + placeholderImagem(110, '[ foto ]') + '</td>' +
    '</tr></table>' +
  '</td></tr>' +
  '<tr><td style="padding:16px 24px 28px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="48%" valign="top" class="stack100">' + card(3) + '</td>' +
      '<td width="4%" class="stackgap"></td>' +
      '<td width="48%" valign="top" class="stack100">' + card(4) + '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // Rodapé
  '<tr><td align="center" style="background-color:' + corFaixaEscura + ';padding:20px 24px;">' +
    '<div style="font-family:Arial,sans-serif;font-size:14px;color:' + corDourado + ';padding-bottom:10px;">● ○ ○ ○</div>' +
    '<div style="font-family:Arial,sans-serif;font-size:11px;color:#8a8574;">' + texto('RODAPÉ TEXTO', 'Essência do Brasil') + '</div>' +
  '</td></tr>' +

'</table>' +
'</td></tr>' +
'</table>'
  );
}
