/**
 * TESTE - Template B (Coleção Essência)
 *
 * Arquivo SEPARADO, só pra visualizar esse template novo por e-mail antes de
 * decidir se ele entra "de vez" no arquivo principal (AppsScript_Newsletter_
 * Teste.gs). Não depende de nenhuma aba da planilha - os dados dos 6
 * perfumes e os textos estão fixos aqui embaixo (const DADOS_TESTE), só pra
 * teste visual mesmo.
 *
 * ÍCONES: por enquanto estão todos como EMOJI (rápido de testar, sem
 * depender de nenhuma imagem extra). Se o visual aprovar, troco os emojis
 * por imagens de ícone de linha fina (mais fiel ao design original, mas
 * precisa gerar/hospedar cada ícone como PNG pequeno).
 *
 * CORES: paleta com mais tons que o Template A (creme/bege no topo e nas
 * seções de produto, verde bem escuro nas faixas de destaque, dourado nos
 * detalhes) - baseada no print que você mandou.
 *
 * COMO TESTAR:
 * 1. Cole este arquivo inteiro num projeto de Apps Script (pode ser um
 *    novo, separado do principal - não precisa estar numa planilha).
 * 2. No editor, escolha a função "enviarTesteTemplateB" no menu de funções
 *    (canto superior, ao lado do botão ▶ Executar) e clique em Executar.
 * 3. Na primeira vez o Google vai pedir autorização - aceite.
 * 4. Confira o e-mail em victor@gigaimports.com (ajuste a constante
 *    EMAIL_DESTINO_TESTE abaixo se quiser mandar pra outro endereço).
 */

const EMAIL_DESTINO_TESTE = 'victor@gigaimports.com';

// Links dos banners (deixe vazio '' pra ver o visual com cor sólida no
// lugar da foto - cole um link https:// aqui quando tiver a imagem gerada).
const LINK_BANNER_HERO_TESTE = '';
const LINK_BANNER_PRESENTEIE_TESTE = '';

// 6 perfumes de exemplo (mesmo conteúdo do print) - troque à vontade pra
// testar outros textos.
const DADOS_TESTE = {
  lancamento: 'LANÇAMENTO',
  tituloHero: 'COLEÇÃO ESSÊNCIA',
  subtituloHero: '6 PERFUMES. 6 HISTÓRIAS.<br>1 ESSÊNCIA: VOCÊ.',
  textoHero: 'Fragrâncias autorais que despertam emoções, marcam momentos e revelam a sua essência em cada detalhe.',
  botaoHero: 'CONHEÇA A COLEÇÃO',
  selos: [
    { emoji: '🧴', texto: 'ALTA FIXAÇÃO<br>E LONGA DURAÇÃO' },
    { emoji: '🌿', texto: 'FRAGRÂNCIAS<br>EXCLUSIVAS' },
    { emoji: '💚', texto: 'CRUELTY FREE<br>E VEGANO' },
    { emoji: '🎁', texto: 'PERFEITOS PARA<br>PRESENTEAR' },
  ],
  tituloSecaoProdutos: 'CONHEÇA AS 6 FRAGRÂNCIAS',
  produtos: [
    { emoji: '🌿', nome: 'AMAZÔNIA', descricao: 'Fresco e envolvente. A força da natureza em uma fragrância.', notas: 'Bergamota, Cedro, Patchouli, Âmbar' },
    { emoji: '🌊', nome: 'BRISA TROPICAL', descricao: 'Leve, cítrico e revigorante como a brisa do mar.', notas: 'Limão Siciliano, Jasmim, Musk' },
    { emoji: '🌸', nome: 'FLOR DE IPANEMA', descricao: 'Floral delicado e sofisticado que encanta e inspira.', notas: 'Rosa, Peônia, Violeta, Musk' },
    { emoji: '🌙', nome: 'NOITE DOURADA', descricao: 'Sexy, marcante e intenso. Para noites inesquecíveis.', notas: 'Baunilha, Âmbar, Patchouli, Praliné' },
    { emoji: '🌳', nome: 'RAÍZES', descricao: 'Amadeirado e elegante. Conecta você com sua essência.', notas: 'Sândalo, Vetiver, Cedro, Âmbar' },
    { emoji: '✨', nome: 'ALMA BRASILEIRA', descricao: 'Quente e marcante. A identidade do Brasil em um perfume.', notas: 'Especiarias, Couro, Âmbar, Musk' },
  ],
  tituloPresenteie: 'PRESENTEIE COM SIGNIFICADO',
  textoPresenteie: 'A Coleção Essência é perfeita para quem ama variedade e deseja levar mais do que um perfume: leva histórias, memórias e sentimentos.',
  botaoPresenteie: 'QUERO PRESENTEAR',
  infosPresenteie: [
    { emoji: '🚚', linha1: 'FRETE GRÁTIS', linha2: 'Para compras acima de R$199' },
    { emoji: '💳', linha1: 'ATÉ 6X SEM JUROS', linha2: 'Em todos os cartões' },
  ],
  tagline: 'A sua essência, nosso propósito.',
  redesSociais: [
    { emoji: '📷', nome: 'Instagram' },
    { emoji: '📘', nome: 'Facebook' },
    { emoji: '🎵', nome: 'TikTok' },
    { emoji: '💬', nome: 'WhatsApp' },
  ],
  telefone: '(21) 99999-9999',
  email: 'contato@essenciadobrasil.com.br',
};

function enviarTesteTemplateB() {
  const html = montarHtmlTemplateB(DADOS_TESTE);
  GmailApp.sendEmail(EMAIL_DESTINO_TESTE, 'Teste - Template B (Coleção Essência)', 'Abra este e-mail num cliente que suporte HTML pra ver o conteúdo completo.', {
    htmlBody: html,
    name: 'Essência do Brasil',
  });
  Logger.log('Enviado para ' + EMAIL_DESTINO_TESTE);
}

// ======================= MONTAGEM DO HTML - TEMPLATE B =======================

function montarHtmlTemplateB(d) {
  // Paleta com mais tons que o Template A - creme no topo/seções de
  // produto, verde bem escuro nas faixas de destaque, dourado nos detalhes.
  const corCreme = '#f7f2e7';
  const corCremeClaro = '#faf7f0';
  const corVerdeEscuro = '#1c2a18';
  const corVerdeEscuro2 = '#16220f';
  const corDourado = '#c9a227';
  const corTextoClaro = '#f4ecdb';
  const corTextoEscuro = '#2a2823';
  const corTextoSuave = '#6f6a58';
  const corBordaSuave = '#e2d9c2';

  const placeholderImagem = function(altura, textoDentro) {
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#e2d9c2;border:1px dashed #b5af9d;">' +
        '<tr><td align="center" style="height:' + altura + 'px;font-family:Arial,sans-serif;font-size:12px;color:' + corTextoSuave + ';">' + textoDentro + '</td></tr>' +
      '</table>'
    );
  };

  const imagemOuPlaceholder = function(link, largura, altura, textoPlaceholder) {
    return /^https?:\/\//i.test(link || '')
      ? '<img src="' + link + '" width="' + largura + '" alt="" style="display:block;width:100%;max-width:' + largura + 'px;height:auto;border:0;">'
      : placeholderImagem(altura, textoPlaceholder);
  };

  const estiloResponsivo =
    '<style>' +
      '@media only screen and (max-width:600px) {' +
        '.stack100 { display:block !important; width:100% !important; padding-right:0 !important; padding-bottom:16px !important; }' +
        '.stackgap { display:none !important; }' +
      '}' +
    '</style>';

  // --- Barra de utilidade
  const barraUtilidade =
    '<tr><td style="background-color:' + corCreme + ';padding:8px 24px;border-bottom:1px solid ' + corBordaSuave + ';">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td style="font-family:Arial,sans-serif;font-size:11px;color:' + corTextoEscuro + ';">🚚 FRETE GRÁTIS PARA COMPRAS ACIMA DE R$199</td>' +
        '<td align="right" style="font-family:Arial,sans-serif;font-size:11px;color:' + corTextoSuave + ';">Não consegue ver este e-mail? <a href="#" style="color:' + corTextoEscuro + ';">Clique aqui</a></td>' +
      '</tr></table>' +
    '</td></tr>';

  // --- Cabeçalho (logo + 3 selos com ícone)
  const cabecalho =
    '<tr><td style="background-color:' + corCreme + ';padding:20px 24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td valign="middle">' +
          '<div style="font-family:Georgia,serif;font-size:13px;color:' + corTextoEscuro + ';">🌿</div>' +
          '<div style="font-family:Georgia,serif;font-size:24px;letter-spacing:0.08em;color:' + corTextoEscuro + ';">ESSÊNCIA</div>' +
          '<div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;color:' + corTextoSuave + ';">— DO BRASIL —</div>' +
        '</td>' +
        '<td align="right" valign="middle">' +
          '<table role="presentation" cellpadding="0" cellspacing="0"><tr>' +
            '<td align="center" style="padding:0 14px;font-family:Arial,sans-serif;font-size:10px;color:' + corTextoEscuro + ';">' +
              '<div style="font-size:18px;">🌿</div>PRODUTOS<br>DE QUALIDADE' +
            '</td>' +
            '<td align="center" style="padding:0 14px;font-family:Arial,sans-serif;font-size:10px;color:' + corTextoEscuro + ';">' +
              '<div style="font-size:18px;">🧴</div>FRAGRÂNCIAS<br>EXCLUSIVAS' +
            '</td>' +
            '<td align="center" style="padding:0 14px;font-family:Arial,sans-serif;font-size:10px;color:' + corTextoEscuro + ';">' +
              '<div style="font-size:18px;">💚</div>FEITO COM<br>PROPÓSITO' +
            '</td>' +
          '</tr></table>' +
        '</td>' +
      '</tr></table>' +
    '</td></tr>';

  // --- Menu de navegação
  const itensNav = ['PERFUMES', 'ÓLEOS ESSENCIAIS', 'ESSÊNCIAS', 'KITS', 'JOIAS', 'PROMOÇÕES'];
  const nav =
    '<tr><td style="background-color:' + corVerdeEscuro + ';padding:14px 24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">' +
        itensNav.map(function(item) {
          return '<a href="#" style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.06em;color:' + corTextoClaro + ';text-decoration:none;padding:0 12px;">' + item + '</a>';
        }).join('<span style="color:' + corDourado + ';">|</span>') +
      '</td></tr></table>' +
    '</td></tr>';

  // --- Hero (fundo = banner gerado por IA, texto real por cima, tom claro
  // porque o fundo do print é claro/quente - diferente do hero escuro do
  // Template A).
  const temBannerHero = /^https?:\/\//i.test(LINK_BANNER_HERO_TESTE);
  const corFundoHeroFallback = '#ede4cd';

  const heroConteudo =
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="58%" valign="middle" style="padding:48px 24px 48px 32px;">' +
        '<div style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.12em;color:' + corDourado + ';padding-bottom:10px;">🍃 ' + d.lancamento + '</div>' +
        '<div style="font-family:Georgia,serif;font-weight:bold;font-size:38px;line-height:1.05;color:' + corTextoEscuro + ';padding-bottom:14px;">' + d.tituloHero + '</div>' +
        '<div style="font-family:Georgia,serif;font-size:15px;line-height:1.4;color:' + corTextoEscuro + ';padding-bottom:14px;">' + d.subtituloHero + '</div>' +
        '<div style="font-family:Arial,sans-serif;font-size:13px;line-height:1.6;color:' + corTextoSuave + ';padding-bottom:20px;max-width:360px;">' + d.textoHero + '</div>' +
        '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:' + corVerdeEscuro + ';border-radius:2px;padding:12px 24px;">' +
          '<a href="#" style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.08em;color:' + corTextoClaro + ';text-decoration:none;font-weight:bold;">' + d.botaoHero + ' →</a>' +
        '</td></tr></table>' +
      '</td>' +
      '<td width="42%"></td>' +
    '</tr></table>';

  const hero = temBannerHero
    ? (
      '<!--[if gte mso 9]>' +
      '<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:340px;">' +
      '<v:fill type="frame" src="' + LINK_BANNER_HERO_TESTE + '" color="' + corFundoHeroFallback + '" />' +
      '<v:textbox inset="0,0,0,0">' +
      '<![endif]-->' +
      '<div>' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" background="' + LINK_BANNER_HERO_TESTE + '" style="background-image:url(\'' + LINK_BANNER_HERO_TESTE + '\');background-repeat:no-repeat;background-size:cover;background-position:center;background-color:' + corFundoHeroFallback + ';">' +
      '<tr><td>' + heroConteudo + '</td></tr>' +
      '</table>' +
      '</div>' +
      '<!--[if gte mso 9]>' +
      '</v:textbox>' +
      '</v:rect>' +
      '<![endif]-->'
    )
    : (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:' + corFundoHeroFallback + ';">' +
        '<tr><td>' + heroConteudo + '</td></tr>' +
      '</table>'
    );

  // --- Tira de selos (4 ícones)
  const tiraSelos =
    '<tr><td style="background-color:' + corVerdeEscuro + ';padding:20px 24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        d.selos.map(function(selo) {
          return '<td align="center" width="25%" style="font-family:Arial,sans-serif;font-size:11px;line-height:1.4;color:' + corTextoClaro + ';">' +
            '<div style="font-size:20px;padding-bottom:4px;">' + selo.emoji + '</div>' + selo.texto +
          '</td>';
        }).join('') +
      '</tr></table>' +
    '</td></tr>';

  // --- Título da seção de produtos + grade de 6 cards (2 fileiras de 3)
  const cardProduto = function(produto) {
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:' + corCremeClaro + ';border:1px solid ' + corBordaSuave + ';">' +
        '<tr><td align="center" style="padding:18px 16px 0;">' + placeholderImagem(120, '[ foto do perfume ]') + '</td></tr>' +
        '<tr><td align="center" style="padding:14px 16px 2px;font-family:Georgia,serif;font-size:15px;font-weight:bold;color:' + corTextoEscuro + ';">' + produto.nome + '</td></tr>' +
        '<tr><td align="center" style="padding:0 16px 10px;font-family:Arial,sans-serif;font-size:12px;line-height:1.5;color:' + corTextoSuave + ';">' + produto.descricao + '</td></tr>' +
        '<tr><td align="center" style="padding:0 16px 4px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.1em;color:' + corDourado + ';">NOTAS</td></tr>' +
        '<tr><td align="center" style="padding:0 16px 16px;font-family:Arial,sans-serif;font-size:11px;color:' + corTextoEscuro + ';">' + produto.notas + '</td></tr>' +
        '<tr><td align="center" style="padding-bottom:16px;font-size:16px;">' + produto.emoji + '</td></tr>' +
      '</table>'
    );
  };

  const linhaCards = function(produtos) {
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        produtos.map(function(produto, i) {
          const gap = i < produtos.length - 1 ? '<td width="3%" class="stackgap"></td>' : '';
          return '<td width="31%" valign="top" class="stack100">' + cardProduto(produto) + '</td>' + gap;
        }).join('') +
      '</tr></table>'
    );
  };

  const secaoProdutos =
    '<tr><td style="background-color:' + corCreme + ';padding:32px 24px;">' +
      '<div align="center" style="font-family:Georgia,serif;font-size:20px;color:' + corTextoEscuro + ';padding-bottom:20px;">🍃&nbsp;&nbsp;' + d.tituloSecaoProdutos + '&nbsp;&nbsp;🍃</div>' +
      linhaCards(d.produtos.slice(0, 3)) +
      '<div style="height:16px;line-height:16px;">&nbsp;</div>' +
      linhaCards(d.produtos.slice(3, 6)) +
    '</td></tr>';

  // --- Bloco "presenteie" (foto + texto/CTA + 2 infos)
  const blocoPresenteie =
    '<tr><td style="background-color:' + corVerdeEscuro2 + ';padding:24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td width="34%" valign="middle" class="stack100" style="padding-right:20px;">' + imagemOuPlaceholder('', 190, 190, '[ foto da caixa-presente ]') + '</td>' +
        '<td width="42%" valign="middle" class="stack100" style="padding-right:20px;">' +
          '<div style="font-family:Georgia,serif;font-size:19px;color:' + corTextoClaro + ';padding-bottom:10px;">🎁 ' + d.tituloPresenteie + '</div>' +
          '<div style="font-family:Arial,sans-serif;font-size:13px;line-height:1.6;color:#cfc8b8;padding-bottom:16px;">' + d.textoPresenteie + '</div>' +
          '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:' + corDourado + ';border-radius:2px;padding:11px 22px;">' +
            '<a href="#" style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.06em;color:' + corVerdeEscuro + ';text-decoration:none;font-weight:bold;">' + d.botaoPresenteie + ' →</a>' +
          '</td></tr></table>' +
        '</td>' +
        '<td width="24%" valign="middle" class="stack100">' +
          d.infosPresenteie.map(function(info, i) {
            const borda = i > 0 ? 'border-top:1px dashed #445039;' : '';
            return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="' + borda + 'padding:' + (i > 0 ? '14px 0 0' : '0') + ';">' +
              '<span style="font-size:16px;">' + info.emoji + '</span>&nbsp; ' +
              '<span style="font-family:Arial,sans-serif;font-size:12px;font-weight:bold;color:' + corTextoClaro + ';">' + info.linha1 + '</span><br>' +
              '<span style="font-family:Arial,sans-serif;font-size:11px;color:#a8a08c;padding-left:22px;">' + info.linha2 + '</span>' +
            '</td></tr></table>';
          }).join('<div style="height:10px;line-height:10px;">&nbsp;</div>') +
        '</td>' +
      '</tr></table>' +
    '</td></tr>';

  // --- Rodapé
  const rodape =
    '<tr><td style="background-color:' + corCreme + ';padding:28px 24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td width="34%" valign="top" class="stack100" style="font-family:Georgia,serif;font-style:italic;font-size:13px;color:' + corTextoEscuro + ';">🍃<br>' + d.tagline + '</td>' +
        '<td width="33%" valign="top" align="center" class="stack100">' +
          '<div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.14em;color:' + corTextoSuave + ';padding-bottom:8px;">SIGA-NOS</div>' +
          d.redesSociais.map(function(rede) { return '<span style="font-size:17px;padding:0 5px;">' + rede.emoji + '</span>'; }).join('') +
        '</td>' +
        '<td width="33%" valign="top" align="right" class="stack100" style="font-family:Arial,sans-serif;font-size:11px;color:' + corTextoEscuro + ';line-height:1.8;">' +
          '<div style="font-size:10px;letter-spacing:0.14em;color:' + corTextoSuave + ';padding-bottom:6px;">ATENDIMENTO</div>' +
          '📱 ' + d.telefone + '<br>' +
          '✉️ ' + d.email +
        '</td>' +
      '</tr></table>' +
    '</td></tr>';

  // --- Barra final
  const barraFinal =
    '<tr><td style="background-color:' + corVerdeEscuro + ';padding:16px 24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td width="20%" style="font-family:Georgia,serif;font-size:12px;color:' + corTextoClaro + ';">🌿 Essência do Brasil</td>' +
        '<td width="60%" align="center" style="font-family:Arial,sans-serif;font-size:10px;color:#a8a08c;">' +
          'Você recebeu este e-mail porque está cadastrado em nossa lista.<br>Se não deseja mais receber nossos e-mails, <a href="#" style="color:' + corDourado + ';">clique aqui</a> para descadastrar.' +
        '</td>' +
        '<td width="20%" align="right" style="font-family:Arial,sans-serif;font-size:10px;color:#a8a08c;">🔒 100% SEGURO<br>Seus dados protegidos</td>' +
      '</tr></table>' +
    '</td></tr>';

  return (
    estiloResponsivo +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eee9dc;">' +
    '<tr><td align="center">' +
    '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:' + corCreme + ';">' +
      barraUtilidade +
      cabecalho +
      nav +
      '<tr><td style="padding:0;">' + hero + '</td></tr>' +
      tiraSelos +
      secaoProdutos +
      blocoPresenteie +
      rodape +
      barraFinal +
    '</table>' +
    '</td></tr>' +
    '</table>'
  );
}
