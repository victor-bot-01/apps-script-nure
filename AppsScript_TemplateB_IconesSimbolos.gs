/**
 * TESTE - Template B, variante A: ícones em SÍMBOLOS UNICODE SEGUROS
 *
 * Arquivo separado só pra comparar visualmente com o
 * "AppsScript_TemplateB_IconesCSS.gs" (a outra variante, com desenhos em
 * CSS). Mesma estrutura/conteúdo do Template B, só troca como os ícones
 * pequenos são feitos.
 *
 * POR QUE ISSO EXISTE: a primeira versão do Template B usava emoji colorido
 * (🌿🧴💚🎁 etc.) e eles apareceram como "�" no Gmail - esses emojis ficam
 * fora do "plano básico" (BMP) do Unicode e quebram nesse tipo de
 * renderização. Aqui uso só símbolos DENTRO do plano básico (✦ ❧ ♡ ♧ e
 * variações) - os mesmos usados com sucesso nos arquivos de teste que você
 * já tinha (teste_icones_email_essencia_do_brasil.gs e
 * template_email_marketing_essencia_colecao.gs). São monocromáticos (usam a
 * cor do texto ao redor) e funcionam em qualquer cliente de e-mail, sem
 * precisar de fonte ou imagem nenhuma.
 *
 * COMO TESTAR: cole num projeto de Apps Script, escolha a função
 * "enviarTesteIconesSimbolos" no menu de funções do editor e clique em
 * Executar.
 */

const EMAIL_DESTINO_ICONES_SIMBOLOS = 'victor@gigaimports.com';

const LINK_BANNER_HERO_ICONES_SIMBOLOS = '';
const LINK_BANNER_PRESENTEIE_ICONES_SIMBOLOS = '';

const DADOS_ICONES_SIMBOLOS = {
  lancamento: 'LANÇAMENTO',
  tituloHero: 'COLEÇÃO ESSÊNCIA',
  subtituloHero: '6 PERFUMES. 6 HISTÓRIAS.<br>1 ESSÊNCIA: VOCÊ.',
  textoHero: 'Fragrâncias autorais que despertam emoções, marcam momentos e revelam a sua essência em cada detalhe.',
  botaoHero: 'CONHEÇA A COLEÇÃO',
  selos: [
    { simbolo: '✦', texto: 'ALTA FIXAÇÃO<br>E LONGA DURAÇÃO' },
    { simbolo: '❧', texto: 'FRAGRÂNCIAS<br>EXCLUSIVAS' },
    { simbolo: '♡', texto: 'CRUELTY FREE<br>E VEGANO' },
    { simbolo: '♧', texto: 'PERFEITOS PARA<br>PRESENTEAR' },
  ],
  tituloSecaoProdutos: 'CONHEÇA AS 6 FRAGRÂNCIAS',
  produtos: [
    { simbolo: '❧', nome: 'AMAZÔNIA', descricao: 'Fresco e envolvente. A força da natureza em uma fragrância.', notas: 'Bergamota, Cedro, Patchouli, Âmbar' },
    { simbolo: '✦', nome: 'BRISA TROPICAL', descricao: 'Leve, cítrico e revigorante como a brisa do mar.', notas: 'Limão Siciliano, Jasmim, Musk' },
    { simbolo: '♡', nome: 'FLOR DE IPANEMA', descricao: 'Floral delicado e sofisticado que encanta e inspira.', notas: 'Rosa, Peônia, Violeta, Musk' },
    { simbolo: '✦', nome: 'NOITE DOURADA', descricao: 'Sexy, marcante e intenso. Para noites inesquecíveis.', notas: 'Baunilha, Âmbar, Patchouli, Praliné' },
    { simbolo: '❧', nome: 'RAÍZES', descricao: 'Amadeirado e elegante. Conecta você com sua essência.', notas: 'Sândalo, Vetiver, Cedro, Âmbar' },
    { simbolo: '♧', nome: 'ALMA BRASILEIRA', descricao: 'Quente e marcante. A identidade do Brasil em um perfume.', notas: 'Especiarias, Couro, Âmbar, Musk' },
  ],
  tituloPresenteie: 'PRESENTEIE COM SIGNIFICADO',
  textoPresenteie: 'A Coleção Essência é perfeita para quem ama variedade e deseja levar mais do que um perfume: leva histórias, memórias e sentimentos.',
  botaoPresenteie: 'QUERO PRESENTEAR',
  infosPresenteie: [
    { simbolo: '✦', linha1: 'FRETE GRÁTIS', linha2: 'Para compras acima de R$199' },
    { simbolo: '✦', linha1: 'ATÉ 6X SEM JUROS', linha2: 'Em todos os cartões' },
  ],
  tagline: 'A sua essência, nosso propósito.',
  redesSociais: ['INSTAGRAM', 'FACEBOOK', 'TIKTOK', 'WHATSAPP'],
  telefone: '(21) 99999-9999',
  email: 'contato@essenciadobrasil.com.br',
};

function enviarTesteIconesSimbolos() {
  const html = montarHtmlIconesSimbolos(DADOS_ICONES_SIMBOLOS);
  GmailApp.sendEmail(EMAIL_DESTINO_ICONES_SIMBOLOS, 'Teste - Ícones em símbolos Unicode', 'Abra este e-mail num cliente que suporte HTML pra ver o conteúdo completo.', {
    htmlBody: html,
    name: 'Essência do Brasil',
  });
  Logger.log('Enviado para ' + EMAIL_DESTINO_ICONES_SIMBOLOS);
}

// ======================= MONTAGEM DO HTML =======================

function montarHtmlIconesSimbolos(d) {
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

  const barraUtilidade =
    '<tr><td style="background-color:' + corCreme + ';padding:8px 24px;border-bottom:1px solid ' + corBordaSuave + ';">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td style="font-family:Arial,sans-serif;font-size:11px;color:' + corTextoEscuro + ';">✦ FRETE GRÁTIS PARA COMPRAS ACIMA DE R$199</td>' +
        '<td align="right" style="font-family:Arial,sans-serif;font-size:11px;color:' + corTextoSuave + ';">Não consegue ver este e-mail? <a href="#" style="color:' + corTextoEscuro + ';">Clique aqui</a></td>' +
      '</tr></table>' +
    '</td></tr>';

  const cabecalho =
    '<tr><td style="background-color:' + corCreme + ';padding:20px 24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td valign="middle">' +
          '<div style="font-family:Georgia,serif;font-size:15px;color:' + corTextoEscuro + ';">❧</div>' +
          '<div style="font-family:Georgia,serif;font-size:24px;letter-spacing:0.08em;color:' + corTextoEscuro + ';">ESSÊNCIA</div>' +
          '<div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;color:' + corTextoSuave + ';">— DO BRASIL —</div>' +
        '</td>' +
        '<td align="right" valign="middle">' +
          '<table role="presentation" cellpadding="0" cellspacing="0"><tr>' +
            '<td align="center" style="padding:0 14px;font-family:Arial,sans-serif;font-size:10px;color:' + corTextoEscuro + ';">' +
              '<div style="font-size:18px;color:' + corDourado + ';">❧</div>PRODUTOS<br>DE QUALIDADE' +
            '</td>' +
            '<td align="center" style="padding:0 14px;font-family:Arial,sans-serif;font-size:10px;color:' + corTextoEscuro + ';">' +
              '<div style="font-size:18px;color:' + corDourado + ';">✦</div>FRAGRÂNCIAS<br>EXCLUSIVAS' +
            '</td>' +
            '<td align="center" style="padding:0 14px;font-family:Arial,sans-serif;font-size:10px;color:' + corTextoEscuro + ';">' +
              '<div style="font-size:18px;color:' + corDourado + ';">♡</div>FEITO COM<br>PROPÓSITO' +
            '</td>' +
          '</tr></table>' +
        '</td>' +
      '</tr></table>' +
    '</td></tr>';

  const itensNav = ['PERFUMES', 'ÓLEOS ESSENCIAIS', 'ESSÊNCIAS', 'KITS', 'JOIAS', 'PROMOÇÕES'];
  const nav =
    '<tr><td style="background-color:' + corVerdeEscuro + ';padding:14px 24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">' +
        itensNav.map(function(item) {
          return '<a href="#" style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.06em;color:' + corTextoClaro + ';text-decoration:none;padding:0 12px;">' + item + '</a>';
        }).join('<span style="color:' + corDourado + ';">|</span>') +
      '</td></tr></table>' +
    '</td></tr>';

  const temBannerHero = /^https?:\/\//i.test(LINK_BANNER_HERO_ICONES_SIMBOLOS);
  const corFundoHeroFallback = '#ede4cd';

  const heroConteudo =
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="58%" valign="middle" style="padding:48px 24px 48px 32px;">' +
        '<div style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.12em;color:' + corDourado + ';padding-bottom:10px;">✦ ' + d.lancamento + '</div>' +
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
      '<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:760px;height:431px;">' +
      '<v:fill type="frame" src="' + LINK_BANNER_HERO_ICONES_SIMBOLOS + '" color="' + corFundoHeroFallback + '" />' +
      '<v:textbox inset="0,0,0,0">' +
      '<![endif]-->' +
      '<div>' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" background="' + LINK_BANNER_HERO_ICONES_SIMBOLOS + '" style="background-image:url(\'' + LINK_BANNER_HERO_ICONES_SIMBOLOS + '\');background-repeat:no-repeat;background-size:cover;background-position:center;background-color:' + corFundoHeroFallback + ';">' +
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

  const tiraSelos =
    '<tr><td style="background-color:' + corVerdeEscuro + ';padding:20px 24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        d.selos.map(function(selo) {
          return '<td align="center" width="25%" style="font-family:Arial,sans-serif;font-size:11px;line-height:1.4;color:' + corTextoClaro + ';">' +
            '<div style="font-size:20px;color:' + corDourado + ';padding-bottom:4px;">' + selo.simbolo + '</div>' + selo.texto +
          '</td>';
        }).join('') +
      '</tr></table>' +
    '</td></tr>';

  const cardProduto = function(produto) {
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:' + corCremeClaro + ';border:1px solid ' + corBordaSuave + ';">' +
        '<tr><td align="center" style="padding:18px 16px 0;">' + placeholderImagem(150, '[ foto do perfume ]') + '</td></tr>' +
        '<tr><td align="center" style="padding:14px 16px 2px;font-family:Georgia,serif;font-size:15px;font-weight:bold;color:' + corTextoEscuro + ';">' + produto.nome + '</td></tr>' +
        '<tr><td align="center" style="padding:0 16px 10px;font-family:Arial,sans-serif;font-size:12px;line-height:1.5;color:' + corTextoSuave + ';">' + produto.descricao + '</td></tr>' +
        '<tr><td align="center" style="padding:0 16px 4px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.1em;color:' + corDourado + ';">NOTAS</td></tr>' +
        '<tr><td align="center" style="padding:0 16px 16px;font-family:Arial,sans-serif;font-size:11px;color:' + corTextoEscuro + ';">' + produto.notas + '</td></tr>' +
        '<tr><td align="center" style="padding-bottom:16px;font-size:16px;color:' + corDourado + ';">' + produto.simbolo + '</td></tr>' +
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
      '<div align="center" style="font-family:Georgia,serif;font-size:20px;color:' + corTextoEscuro + ';padding-bottom:20px;"><span style="color:' + corDourado + ';">❧</span>&nbsp;&nbsp;' + d.tituloSecaoProdutos + '&nbsp;&nbsp;<span style="color:' + corDourado + ';">❧</span></div>' +
      linhaCards(d.produtos.slice(0, 3)) +
      '<div style="height:16px;line-height:16px;">&nbsp;</div>' +
      linhaCards(d.produtos.slice(3, 6)) +
    '</td></tr>';

  const blocoPresenteie =
    '<tr><td style="background-color:' + corVerdeEscuro2 + ';padding:24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td width="34%" valign="middle" class="stack100" style="padding-right:20px;">' + imagemOuPlaceholder(LINK_BANNER_PRESENTEIE_ICONES_SIMBOLOS, 240, 240, '[ foto da caixa-presente ]') + '</td>' +
        '<td width="42%" valign="middle" class="stack100" style="padding-right:20px;">' +
          '<div style="font-family:Georgia,serif;font-size:19px;color:' + corTextoClaro + ';padding-bottom:10px;"><span style="color:' + corDourado + ';">♧</span> ' + d.tituloPresenteie + '</div>' +
          '<div style="font-family:Arial,sans-serif;font-size:13px;line-height:1.6;color:#cfc8b8;padding-bottom:16px;">' + d.textoPresenteie + '</div>' +
          '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:' + corDourado + ';border-radius:2px;padding:11px 22px;">' +
            '<a href="#" style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.06em;color:' + corVerdeEscuro + ';text-decoration:none;font-weight:bold;">' + d.botaoPresenteie + ' →</a>' +
          '</td></tr></table>' +
        '</td>' +
        '<td width="24%" valign="middle" class="stack100">' +
          d.infosPresenteie.map(function(info, i) {
            const borda = i > 0 ? 'border-top:1px dashed #445039;' : '';
            return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="' + borda + 'padding:' + (i > 0 ? '14px 0 0' : '0') + ';">' +
              '<span style="font-size:15px;color:' + corDourado + ';">' + info.simbolo + '</span>&nbsp; ' +
              '<span style="font-family:Arial,sans-serif;font-size:12px;font-weight:bold;color:' + corTextoClaro + ';">' + info.linha1 + '</span><br>' +
              '<span style="font-family:Arial,sans-serif;font-size:11px;color:#a8a08c;padding-left:22px;">' + info.linha2 + '</span>' +
            '</td></tr></table>';
          }).join('<div style="height:10px;line-height:10px;">&nbsp;</div>') +
        '</td>' +
      '</tr></table>' +
    '</td></tr>';

  const rodape =
    '<tr><td style="background-color:' + corCreme + ';padding:28px 24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td width="34%" valign="top" class="stack100" style="font-family:Georgia,serif;font-style:italic;font-size:13px;color:' + corTextoEscuro + ';"><span style="color:' + corDourado + ';">❧</span><br>' + d.tagline + '</td>' +
        '<td width="33%" valign="top" align="center" class="stack100">' +
          '<div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.14em;color:' + corTextoSuave + ';padding-bottom:8px;">SIGA-NOS</div>' +
          '<div style="font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.08em;color:' + corTextoEscuro + ';line-height:1.9;">' + d.redesSociais.join(' &nbsp;·&nbsp; ') + '</div>' +
        '</td>' +
        '<td width="33%" valign="top" align="right" class="stack100" style="font-family:Arial,sans-serif;font-size:11px;color:' + corTextoEscuro + ';line-height:1.8;">' +
          '<div style="font-size:10px;letter-spacing:0.14em;color:' + corTextoSuave + ';padding-bottom:6px;">ATENDIMENTO</div>' +
          '<span style="color:' + corDourado + ';">✦</span> ' + d.telefone + '<br>' +
          '✉ ' + d.email +
        '</td>' +
      '</tr></table>' +
    '</td></tr>';

  const barraFinal =
    '<tr><td style="background-color:' + corVerdeEscuro + ';padding:16px 24px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td width="20%" style="font-family:Georgia,serif;font-size:12px;color:' + corTextoClaro + ';"><span style="color:' + corDourado + ';">❧</span> Essência do Brasil</td>' +
        '<td width="60%" align="center" style="font-family:Arial,sans-serif;font-size:10px;color:#a8a08c;">' +
          'Você recebeu este e-mail porque está cadastrado em nossa lista.<br>Se não deseja mais receber nossos e-mails, <a href="#" style="color:' + corDourado + ';">clique aqui</a> para descadastrar.' +
        '</td>' +
        '<td width="20%" align="right" style="font-family:Arial,sans-serif;font-size:10px;color:#a8a08c;"><span style="color:' + corDourado + ';">✦</span> 100% SEGURO<br>Seus dados protegidos</td>' +
      '</tr></table>' +
    '</td></tr>';

  return (
    estiloResponsivo +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eee9dc;">' +
    '<tr><td align="center">' +
    '<table role="presentation" width="760" cellpadding="0" cellspacing="0" style="width:760px;max-width:100%;background-color:' + corCreme + ';">' +
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
