/**
 * Apps Script - Teste de Estrutura de Newsletter (Essência do Brasil)
 *
 * O QUE ISSO FAZ:
 * Envia um e-mail de TESTE pra victor@gigaimports.com, só pra visualizar a
 * ORGANIZAÇÃO/ESTRUTURA de uma newsletter em cards (baseada num modelo de
 * referência) dentro de um e-mail de verdade. O texto é todo inventado
 * (tema "Semana do Brasil", de exemplo) e os espaços de imagem ficam em
 * branco (um bloco cinza no lugar) - a ideia é validar o LAYOUT primeiro,
 * antes de entrar com conteúdo e fotos de verdade.
 *
 * Tudo em HTML de tabela (não usa CSS grid/flexbox, não usa fonte
 * customizada, não escreve texto em cima de imagem) - de propósito, porque
 * é o jeito que sobrevive de verdade em qualquer cliente de e-mail
 * (Gmail, Outlook, Apple Mail etc.), diferente de copiar uma página web
 * bonita e colar no Gmail (isso quebra, já testamos).
 *
 * COMO INSTALAR (mesmo processo de sempre):
 * 1. Abra qualquer planilha no Google Sheets (pode ser uma só pra isso).
 * 2. Menu Extensões > Apps Script.
 * 3. Cole todo o conteúdo deste arquivo.
 * 4. Salve (ícone de disquete).
 * 5. Feche a aba do Apps Script e volte pra planilha - aparece o menu
 *    "📧 Teste Newsletter". Na primeira execução o Google vai pedir
 *    autorização pra enviar e-mail em seu nome - é normal, aceite.
 * 6. Clique em "✉️ Enviar e-mail de teste" - o e-mail chega em
 *    victor@gigaimports.com em poucos segundos.
 */

const EMAIL_DESTINO_TESTE = 'victor@gigaimports.com';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📧 Teste Newsletter')
    .addItem('✉️ Enviar e-mail de teste', 'enviarTesteNewsletter')
    .addItem('🔗 Criar aba de Links Padrão', 'criarAbaLinksPadrao')
    .addToUi();
}

/**
 * Cria (se ainda não existir) a aba "Links Padrão", já preenchida com toda
 * a estrutura de categorias/filtros do menu do site - só falta colar o
 * link de cada linha na coluna D. Não sobrescreve se a aba já existir,
 * pra não perder links que você já tiver preenchido.
 */
function criarAbaLinksPadrao() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const NOME_ABA = 'Links Padrão';

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

function enviarTesteNewsletter() {
  const produto = lerProdutoDaPlanilha();
  const html = montarHtmlNewsletter(produto);
  const textoAlternativo = 'Semana do Brasil - Essência do Brasil. Abra este e-mail num cliente que suporte HTML pra ver o conteúdo completo.';

  GmailApp.sendEmail(EMAIL_DESTINO_TESTE, 'Semana do Brasil - teste de estrutura', textoAlternativo, {
    htmlBody: html,
    name: 'Essência do Brasil',
  });

  SpreadsheetApp.getUi().alert('E-mail de teste enviado para ' + EMAIL_DESTINO_TESTE + '. Confira sua caixa de entrada.');
}

/**
 * Lê o primeiro produto (linha 2) da planilha ativa. Espera as colunas,
 * nessa ordem: A = Link do produto | B = Link da foto | C = Preço | D = Nome.
 * Se a linha estiver vazia, retorna null (o e-mail cai de volta pro
 * card de exemplo "Sementes do Brasil").
 */
function lerProdutoDaPlanilha() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const linha = sheet.getRange(2, 1, 1, 4).getValues()[0];
  const [link, foto, preco, nome] = linha;
  if (!nome) return null;

  return {
    link: link || '#',
    foto: foto || '',
    preco: preco,
    nome: nome,
  };
}

// ======================= MONTAGEM DO HTML =======================
// Tudo com tabelas + estilo inline, de propósito - é o único jeito que
// funciona de forma confiável em e-mail.

function montarHtmlNewsletter(produtoReal) {
  const corFundoPagina = '#151a12';
  const corFaixaEscura = '#151a12';
  const corDourado = '#c9a227';
  const corTextoClaro = '#f4ecdb';
  const corTextoEscuro = '#2a2823';
  const corPlaceholder = '#d9d4c7';
  const corPlaceholderTexto = '#8a8574';

  const placeholderImagem = function(altura, textoDentro) {
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:' + corPlaceholder + ';border:1px dashed #b5af9d;">' +
        '<tr><td align="center" style="height:' + altura + 'px;font-family:Arial,sans-serif;font-size:12px;color:' + corPlaceholderTexto + ';">' + textoDentro + '</td></tr>' +
      '</table>'
    );
  };

  const card = function(emoji, titulo, texto) {
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +
        '<tr><td align="center">' + placeholderImagem(90, '[ foto do produto ]') + '</td></tr>' +
        '<tr><td align="center" style="padding-top:12px;font-family:Arial,sans-serif;font-size:26px;">' + emoji + '</td></tr>' +
        '<tr><td align="center" style="padding-top:6px;font-family:Georgia,serif;font-size:15px;font-weight:bold;color:' + corTextoEscuro + ';">' + titulo + '</td></tr>' +
        '<tr><td align="center" style="padding:6px 8px 14px;font-family:Arial,sans-serif;font-size:12px;line-height:1.5;color:#5a5648;">' + texto + '</td></tr>' +
        '<tr><td align="center">' +
          '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="border:1px solid ' + corDourado + ';border-radius:16px;padding:6px 18px;">' +
            '<a href="#" style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.06em;color:' + corDourado + ';text-decoration:none;text-transform:uppercase;">Saiba mais</a>' +
          '</td></tr></table>' +
        '</td></tr>' +
      '</table>'
    );
  };

  // Card com dado real vindo da planilha (nome, preço, foto e link de verdade)
  const cardReal = function(produto) {
    const precoFormatado = 'R$ ' + Number(produto.preco).toFixed(2).replace('.', ',');
    const fotoHtml = produto.foto
      ? '<img src="' + produto.foto + '" width="150" alt="' + produto.nome + '" style="display:block;width:100%;max-width:150px;height:auto;border:0;">'
      : placeholderImagem(90, '[ sem link de foto na planilha ]');
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +
        '<tr><td align="center">' + fotoHtml + '</td></tr>' +
        '<tr><td align="center" style="padding-top:6px;font-family:Georgia,serif;font-size:15px;font-weight:bold;color:' + corTextoEscuro + ';">' + produto.nome + '</td></tr>' +
        '<tr><td align="center" style="padding:6px 0 14px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;color:' + corDourado + ';">' + precoFormatado + '</td></tr>' +
        '<tr><td align="center">' +
          '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="border:1px solid ' + corDourado + ';border-radius:16px;padding:6px 18px;">' +
            '<a href="' + produto.link + '" style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.06em;color:' + corDourado + ';text-decoration:none;text-transform:uppercase;">Saiba mais</a>' +
          '</td></tr></table>' +
        '</td></tr>' +
      '</table>'
    );
  };

  const primeiroCard = produtoReal
    ? cardReal(produtoReal)
    : card('&#x1F33F;', 'Sementes do Brasil', 'Essência natural, aroma marcante.');

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

  // Cabeçalho: marca + links de texto (sem menu de verdade, só texto)
  '<tr><td style="background-color:' + corFaixaEscura + ';padding:16px 24px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td style="font-family:Georgia,serif;font-size:16px;color:' + corTextoClaro + ';">Essência do Brasil</td>' +
      '<td align="right" style="font-family:Arial,sans-serif;font-size:11px;color:' + corDourado + ';">' +
        '<a href="#" style="color:' + corDourado + ';text-decoration:none;">SOBRE&nbsp;NÓS</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
        '<a href="#" style="color:' + corDourado + ';text-decoration:none;">OFERTAS</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
        '<a href="#" style="color:' + corDourado + ';text-decoration:none;">CONTATO</a>' +
      '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // Seção de destaque (hero): texto de um lado, placeholder de imagem do outro (sem sobrepor)
  '<tr><td style="background-color:' + corFaixaEscura + ';padding:8px 24px 32px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="55%" valign="middle" class="stack100" style="padding-right:16px;">' +
        '<div style="font-family:Georgia,serif;font-style:italic;font-size:13px;color:' + corDourado + ';">Uma celebração brasileira</div>' +
        '<div style="font-family:Arial,sans-serif;font-weight:bold;font-size:30px;line-height:1.1;color:' + corTextoClaro + ';padding:8px 0;">Semana do<br>Brasil</div>' +
        '<div style="font-family:Georgia,serif;font-size:14px;color:#cfc8b8;padding-bottom:14px;">Descontos exclusivos em essências e perfumes com óleos essenciais puros, só até domingo.</div>' +
        '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:' + corDourado + ';border-radius:18px;padding:10px 22px;">' +
          '<a href="#" style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.06em;color:' + corFaixaEscura + ';text-decoration:none;font-weight:bold;">APROVEITE AS OFERTAS →</a>' +
        '</td></tr></table>' +
      '</td>' +
      '<td width="45%" valign="middle" class="stack100">' + placeholderImagem(160, '[ foto de destaque ]') + '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // Fileira de 3 cards
  '<tr><td style="padding:28px 24px 8px;">' +
    '<div style="font-family:Georgia,serif;font-size:18px;color:' + corTextoEscuro + ';padding-bottom:16px;">Selecionados pra você &#x2728;</div>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="33%" valign="top" class="stack100">' + primeiroCard + '</td>' +
      '<td width="4%" class="stackgap"></td>' +
      '<td width="33%" valign="top" class="stack100">' + card('&#x1F338;', 'Flores do Pomar', 'Notas florais suaves e frescas.') + '</td>' +
      '<td width="4%" class="stackgap"></td>' +
      '<td width="30%" valign="top" class="stack100">' + card('&#x1FAB5;', 'Amadeirado Intenso', 'Óleo essencial de madeira nobre.') + '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // Seção de texto com marcadores (equivalente ao "Financial plan")
  '<tr><td style="padding:20px 24px;">' +
    '<div style="font-family:Georgia,serif;font-size:20px;color:' + corTextoEscuro + ';padding-bottom:10px;">Por que aproveitar essa semana</div>' +
    '<div style="font-family:Arial,sans-serif;font-size:13px;line-height:1.7;color:#5a5648;">' +
      '&#x2705; Até 30% de desconto em produtos selecionados<br>' +
      '&#x2705; Frete grátis a partir de R$ 150<br>' +
      '&#x2705; Estoque limitado, promoção só até domingo' +
    '</div>' +
  '</td></tr>' +

  // Faixa larga de foto
  '<tr><td style="padding:8px 24px 24px;">' + placeholderImagem(140, '[ foto em faixa larga ]') + '</td></tr>' +

  // Seção "sobre" + mais 2 cards
  '<tr><td style="padding:8px 24px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="55%" valign="top" class="stack100" style="padding-right:16px;">' +
        '<div style="font-family:Georgia,serif;font-size:18px;color:' + corTextoEscuro + ';padding-bottom:8px;">Sobre a Essência do Brasil</div>' +
        '<div style="font-family:Arial,sans-serif;font-size:13px;line-height:1.6;color:#5a5648;">Perfumaria natural feita com óleos essenciais puros, celebrando a biodiversidade brasileira em cada frasco.</div>' +
      '</td>' +
      '<td width="45%" valign="top" class="stack100">' + placeholderImagem(110, '[ foto ]') + '</td>' +
    '</tr></table>' +
  '</td></tr>' +
  '<tr><td style="padding:16px 24px 28px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="48%" valign="top" class="stack100">' + card('&#x1F381;', 'Kits Presente', 'Combinações prontas pra presentear.') + '</td>' +
      '<td width="4%" class="stackgap"></td>' +
      '<td width="48%" valign="top" class="stack100">' + card('&#x1F4A7;', 'Óleos Essenciais', '100% puros, extraídos da nossa biodiversidade.') + '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // Rodapé com "bolinhas" de navegação (decorativo)
  '<tr><td align="center" style="background-color:' + corFaixaEscura + ';padding:20px 24px;">' +
    '<div style="font-family:Arial,sans-serif;font-size:14px;color:' + corDourado + ';padding-bottom:10px;">● ○ ○ ○</div>' +
    '<div style="font-family:Arial,sans-serif;font-size:11px;color:#8a8574;">Essência do Brasil · Este é um e-mail de teste de estrutura, conteúdo fictício.</div>' +
  '</td></tr>' +

'</table>' +
'</td></tr>' +
'</table>'
  );
}
