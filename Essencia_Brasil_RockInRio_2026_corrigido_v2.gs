/**
 * Essência do Brasil — Rock in Rio 2026: The Fragrance Line-Up
 * Template de e-mail marketing para GmailApp.sendEmail.
 *
 * Arquitetura preservada do modelo aprovado:
 * 1) preheader 2 colunas
 * 2) cabeçalho/logo 1 coluna
 * 3) navegação 6 colunas
 * 4) hero com texto + área visual
 * 5) benefícios 6 colunas
 * 6) título de vitrine
 * 7) produtos 6 colunas
 * 8) faixa temática 4 colunas
 * 9) confiança/institucional 6 colunas
 * 10) rodapé 4 colunas
 * 11) faixa final
 * 12) descadastro
 */

var EDB_RIR26 = {
  assunto: 'The Fragrance Line-Up: o palco está montado!',
  home: 'https://essenciadobrasil.com.br/',
  contato: 'https://essenciadobrasil.com.br/contato/',
  hero: 'https://i.ibb.co/FRTNJjb/Chat-GPT-Image-5-de-set-de-2026-14-49-30.png',
  menus: [
    {nome:'Perfumes Masculinos', url:'https://essenciadobrasil.com.br/perfumes-masculinos/', cid:'navPerfMasc'},
    {nome:'Perfumes Femininos', url:'https://essenciadobrasil.com.br/perfumes-femininos/', cid:'navPerfFem'},
    {nome:'Óleos Essenciais', url:'https://essenciadobrasil.com.br/oleos-essenciais/', cid:'navOleo'},
    {nome:'Essências', url:'https://essenciadobrasil.com.br/essencias/', cid:'navEssencias'},
    {nome:'Cremes e Séruns', url:'https://essenciadobrasil.com.br/seruns-e-cremes/', cid:'navSeruns'},
    {nome:'Coleções', url:'https://essenciadobrasil.com.br/colecoes/', cid:'navColecoes'}
  ],
  produtos: [
    {
      nome:'Night 100ml',
      selo:'HEADLINER DA NOITE',
      imagem:'https://acdn-us.mitiendanube.com/stores/006/291/372/products/jmesyo7-e1989b49d6820ff98817489753603512-1024-1024.webp',
      url:'https://essenciadobrasil.com.br/produtos/perfume-com-feromonios-night-100ml-masculino/',
      descricao:'Uma fragrância feita para a noite ganhar profundidade. Com o equilíbrio entre ho wood, limão siciliano, especiarias, cedro, sálvia esclaréia, fava tonka e cacau, o Night revela uma presença envolvente, sofisticada e cheia de atmosfera. É o perfume para quem prefere entrar em cena sem excesso — mas ser lembrado até depois do último acorde.',
      botao:'QUERO CONHECER'
    },
    {
      nome:'Dark Code 100ml',
      selo:'INTENSO E NOTURNO',
      imagem:'https://acdn-us.mitiendanube.com/stores/006/291/372/products/jmmob71-e21a23b2464149cb4417489753623892-1024-1024.webp',
      url:'https://essenciadobrasil.com.br/produtos/perfume-dark-code-100ml-amadeirado-intenso-top-masculino/',
      descricao:'Patchouli, especiarias, maçã verde, mandarina, âmbar, couro e fava tonka em uma composição de noite densa, misteriosa e marcante.',
      botao:'QUERO SENTIR'
    },
    {
      nome:'Attraction 100ml',
      selo:'MAGNÉTICO E ENVOLVENTE',
      imagem:'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-05c51eb9bb7d03435817882697383603-1024-1024.webp',
      url:'https://essenciadobrasil.com.br/produtos/perfume-com-feromonios-attraction-100ml-masculino/',
      descricao:'Cedro da Virgínia, flor de laranjeira, bergamota e notas frutadas criam uma fragrância luminosa, elegante e naturalmente cativante.',
      botao:'QUERO SENTIR'
    },
    {
      nome:'Patchouli Dark 100ml + Mini 10ml',
      selo:'PATCHOULI EM ALTA VOLTAGEM',
      imagem:'https://acdn-us.mitiendanube.com/stores/006/291/372/products/jmesgnp-89c8fef1954078f07817489753918021-1024-1024.webp',
      url:'https://essenciadobrasil.com.br/produtos/perfume-masculino-patchouli-dark-100ml-mini-perfume-10ml/',
      descricao:'Com patchouli, folha de tabaco, especiarias, baunilha, cacau, fava tonka e flor de tabaco, entrega calor, mistério e profundidade — com mini perfume para seguir a noite com você.',
      botao:'QUERO SENTIR'
    },
    {
      nome:'Lord 100ml',
      selo:'ELEGÂNCIA COM PRESENÇA',
      imagem:'https://acdn-us.mitiendanube.com/stores/006/291/372/products/jmei46u-a06e6918252a5fef9717489753475612-1024-1024.webp',
      url:'https://essenciadobrasil.com.br/produtos/perfume-lord-100ml-masculino-amadeirado-elegante-top-2022/',
      descricao:'Patchouli, notas marinhas, grapefruit, folha de louro, jasmim, madeira de guaiaco e âmbar cinza formam uma presença distinta, firme e sofisticada.',
      botao:'QUERO SENTIR'
    },
    {
      nome:'Platinum 100ml',
      selo:'REFINAMENTO DISCRETO',
      imagem:'https://acdn-us.mitiendanube.com/stores/006/291/372/products/jxrib6l-c29f4bbafcf10e70f917489753155762-1024-1024.webp',
      url:'https://essenciadobrasil.com.br/produtos/perfume-platinum-100ml-masculino-elegante-top-melhor-2022/',
      descricao:'Ho wood, cedro da Virgínia, bergamota, pimentas, sálvia esclaréia, fava tonka e cacau compõem uma fragrância elegante, segura e naturalmente sedutora.',
      botao:'QUERO SENTIR'
    }
  ]
};

var EDB_RIR26_ICON_BASE64 = {
  navPerfMasc: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAZ0lEQVR42mNgGAUEACOxCqVl1f6jiz19fIugfiZa+4BkC4hxNclBhC14iLWQiRLDiZFnoSRoCBk+OCN51AKqA6JT0SotLYwUU/j5zxDyQdi1ayM0HxAdRMQEB1k+IFRaklp8jwIMAACaMh/oGw1kyQAAAABJRU5ErkJggg==',
  navPerfFem: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAoElEQVR42mNgGAUEACMpiqVl1f7D2E8f3yJKLxM5hmPjUwSkZdX+Y7OAGEuYaB0HLMQGCbnxwkiJ4dgAuiWMuAxHVojPQmzqkMVYSHFdPy9CeeHnPwxUTabIhmPjk5TRsAUJNgOx+QI9DpiIiShyIxhvEKErRnctOh+XoxgJpW9cqYlQ6qFbTqa5BYyklKCwYMAlTrIP0DXB+LjER8HgBAAxWFrC7jxwUwAAAABJRU5ErkJggg==',
  navOleo: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAm0lEQVR42u1UOwrAIAw1XkNcHTyQh/RADq7iOdKpIGL8S1toNiF5PxIZ+2t3CanwOPgICX9tNFujosC2kNRAjhMsk/QOT5GMDlH9/FPXWpo77qBKYLVGqzWu9DzjIAYPaZ6Uwpa7pgPjHFBg6ds4B0IqjMFDjgGtrYjBQ03pLYIi4D2rlzrJwYVUSIEP7Xfpu+65F5g9pCXFO+sC9bJTYuU2HUkAAAAASUVORK5CYII=',
  navEssencias: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAfElEQVR42mNgGAUDDRgp0Swtq/Yfmf/08S1GqliAbjA6QLaIkRLD0V2MTY4JXQE+1+EznKggItV1ZEUyKeG7SksLRW3YtWvERzK+FIJuMDpAtojkSEY2HN3F2OTIjmRswUEwiAZdJFOUk/FpHs3JgyeSKaoPiEkho4AqAABFzHrs+YhsJAAAAABJRU5ErkJggg==',
  navSeruns: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAaElEQVR42mNgGAUDDRjxSUrLqv0n1qCnj29hNYuJ1j5gocR1xPiSKAtICSqig4hUQ3GpZ6Kmi7HpYyE37CnyATXBwCfTVVpaBOMj7No1xsHrA3yuGxRxMMxTESVlEF4fkJKDqaFvhAMAmocfpafVuB0AAAAASUVORK5CYII=',
  navColecoes: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAtUlEQVR42u2UMQ6DMAxFf6ysOQFi7ZAD9R49CffgQAysKCdgRUqnVFZlsAmgqhJfYokf/gk/Brj1azlpsWkfWVpP0/jh+xjza142GQAga3Ne62PMANAFr26O1pqlaXT84TW+8y54SIxqoImblBOdagAAz2FwmgkdvSXcRMrE7Qm5ZCMxvDk3Je2aSTWJsWZyWN/NqwfNwlQPmoUp8tr33jK2MHT1z+7/Dbw1rFrmtEGzvH9L1BtAnWilkS0NSwAAAABJRU5ErkJggg==',
};

function criarInlineImagesRockInRio2026_() {
  var inlineImages = {};
  Object.keys(EDB_RIR26_ICON_BASE64).forEach(function(chave) {
    inlineImages[chave] = Utilities.newBlob(
      Utilities.base64Decode(EDB_RIR26_ICON_BASE64[chave]),
      'image/png',
      chave + '.png'
    );
  });
  return inlineImages;
}

function escaparHtmlRockInRio2026_(valor) {
  return String(valor)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function blocoMenuRockInRio2026_() {
  var html = [];
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#ffffff;">');
  html.push('<tr>');
  EDB_RIR26.menus.forEach(function(item) {
    html.push('<td class="nav-cell" valign="top" style="width:16.66%;padding:14px 6px 13px 6px;text-align:center;vertical-align:top;border-top:1px solid #ece9e4;border-bottom:1px solid #ece9e4;box-sizing:border-box;">');
    html.push('<a href="' + escaparHtmlRockInRio2026_(item.url) + '" style="color:#181a23;text-decoration:none;display:block;">');
    html.push('<img src="cid:' + item.cid + '" width="22" height="22" alt="" style="display:block;width:22px;height:22px;max-width:100%;margin:0 auto 7px auto;border:0;outline:none;text-decoration:none;">');
    html.push('<span class="nav-text" style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:13px;font-weight:700;letter-spacing:0.35px;text-transform:uppercase;color:#181a23;">' + escaparHtmlRockInRio2026_(item.nome) + '</span>');
    html.push('</a>');
    html.push('</td>');
  });
  html.push('</tr></table>');
  return html.join('');
}

function blocoHeroRockInRio2026_() {
  var hero = escaparHtmlRockInRio2026_(EDB_RIR26.hero);
  var html = [];
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#05070d;">');
  html.push('<tr>');
  html.push('<td class="hero-bg" background="' + hero + '" valign="top" style="padding:0;background-color:#05070d;background-image:url(\'' + hero + '\');background-repeat:no-repeat;background-position:center center;background-size:cover;height:560px;vertical-align:top;">');
  // A imagem fotográfica do hero também aparece como IMG remoto oculto, mantendo a origem pública HTTPS exigida.
  html.push('<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">');
  html.push('<img src="' + hero + '" width="900" height="563" alt="" style="display:block;width:100%;height:auto;max-width:100%;border:0;outline:none;text-decoration:none;">');
  html.push('</div>');
  html.push('<!--[if gte mso 9]>');
  html.push('<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:900px;height:560px;">');
  html.push('<v:fill type="frame" src="' + hero + '" color="#05070d" />');
  html.push('<v:textbox inset="0,0,0,0">');
  html.push('<![endif]-->');
  // Exceção deliberada ao table-layout:fixed: as duas colunas mudam apenas porcentagem no mobile.
  html.push('<table class="hero-cols" role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">');
  html.push('<tr>');
  html.push('<td class="hero-copy" valign="middle" style="width:44%;padding:46px 18px 36px 34px;vertical-align:middle;box-sizing:border-box;">');
  html.push('<div class="hero-kicker" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-weight:700;letter-spacing:2.2px;color:#e4bd72;text-transform:uppercase;margin:0 0 10px 0;">THE FRAGRANCE LINE-UP</div>');
  html.push('<div class="hero-title" style="font-family:Georgia,\'Times New Roman\',serif;font-size:43px;line-height:47px;font-weight:700;letter-spacing:-0.7px;color:#ffffff;margin:0 0 10px 0;">ROCK IN RIO 2026</div>');
  html.push('<div class="hero-subtitle" style="font-family:Georgia,\'Times New Roman\',serif;font-size:21px;line-height:27px;font-style:italic;color:#f3e7d6;margin:0 0 15px 0;">Se a noite tivesse trilha, teria aroma.</div>');
  html.push('<div class="hero-body" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;font-weight:400;color:#ffffff;margin:0 0 18px 0;">Entre luzes, encontros e o ritmo de uma noite inesquecível, seis fragrâncias entram em cena como um verdadeiro line-up. Do frescor vibrante da abertura ao calor profundo das notas amadeiradas, cada perfume traduz um momento da noite — e o <strong>Night</strong> assume o palco principal com uma presença envolvente, elegante e marcante.</div>');
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">');
  html.push('<tr>');
  html.push('<td class="hero-micro-cell" valign="top" style="width:50%;padding:0 10px 0 0;vertical-align:top;box-sizing:border-box;">');
  html.push('<div class="hero-microtitle" style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:14px;font-weight:700;color:#ffffff;text-transform:uppercase;margin:0 0 3px 0;">6 fragrâncias em cena</div>');
  html.push('<div class="hero-microtext" style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:14px;color:#d8dce7;margin:0;">presenças distintas para acompanhar cada momento da noite</div>');
  html.push('</td>');
  html.push('<td class="hero-micro-cell" valign="top" style="width:50%;padding:0 0 0 10px;vertical-align:top;box-sizing:border-box;">');
  html.push('<div class="hero-microtitle" style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:14px;font-weight:700;color:#ffffff;text-transform:uppercase;margin:0 0 3px 0;">Do início ao último acorde</div>');
  html.push('<div class="hero-microtext" style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:14px;color:#d8dce7;margin:0;">amadeirados, intensos, elegantes e cheios de atmosfera</div>');
  html.push('</td>');
  html.push('</tr></table>');
  html.push('</td>');
  html.push('<td class="hero-art" valign="top" style="width:56%;padding:0;vertical-align:top;box-sizing:border-box;">&nbsp;</td>');
  html.push('</tr></table>');
  html.push('<!--[if gte mso 9]>');
  html.push('</v:textbox></v:rect>');
  html.push('<![endif]-->');
  html.push('</td></tr></table>');
  return html.join('');
}

function blocoBeneficiosRockInRio2026_() {
  var itens = [
    'Presenças que acompanham a noite inteira',
    'Assinaturas olfativas para momentos marcantes',
    'Do frescor à intensidade, no seu ritmo',
    'Frascos práticos para levar com você',
    'Escolhas para diferentes estilos de noite',
    'Perfumes que deixam memória no ar'
  ];
  var html = [];
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#07090e;border-top:1px solid #2a2f3a;border-bottom:1px solid #2a2f3a;">');
  html.push('<tr>');
  itens.forEach(function(texto, i) {
    html.push('<td class="benefit-cell" valign="middle" style="width:16.66%;padding:15px 9px;text-align:center;vertical-align:middle;box-sizing:border-box;' + (i < itens.length - 1 ? 'border-right:1px solid #252a35;' : '') + '">');
    html.push('<div style="width:28px;height:2px;background-color:' + (i % 2 === 0 ? '#b72d2d' : '#2b5fa7') + ';margin:0 auto 8px auto;font-size:0;line-height:0;"></div>');
    html.push('<div class="benefit-text" style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:14px;font-weight:700;color:#f1eee9;">' + escaparHtmlRockInRio2026_(texto) + '</div>');
    html.push('</td>');
  });
  html.push('</tr></table>');
  return html.join('');
}

function blocoTituloProdutosRockInRio2026_() {
  var html = [];
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#ffffff;">');
  html.push('<tr><td valign="middle" style="padding:42px 26px 25px 26px;text-align:center;vertical-align:middle;">');
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">');
  html.push('<tr>');
  html.push('<td valign="middle" style="width:20%;padding:0 12px;vertical-align:middle;"><div style="height:1px;background-color:#cfc8bd;font-size:0;line-height:0;"></div></td>');
  html.push('<td valign="middle" style="width:60%;padding:0;vertical-align:middle;text-align:center;">');
  html.push('<div class="section-title" style="font-family:Georgia,\'Times New Roman\',serif;font-size:29px;line-height:35px;font-weight:700;color:#171922;margin:0 0 7px 0;">6 <span style="display:inline-block;white-space:nowrap;">fragrâncias</span> para entrar no ritmo da noite</div>');
  html.push('<div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:19px;color:#686b73;">Escolha a presença que mais combina com o seu momento.</div>');
  html.push('</td>');
  html.push('<td valign="middle" style="width:20%;padding:0 12px;vertical-align:middle;"><div style="height:1px;background-color:#cfc8bd;font-size:0;line-height:0;"></div></td>');
  html.push('</tr></table>');
  html.push('</td></tr></table>');
  return html.join('');
}

function blocoProdutosRockInRio2026_() {
  var html = [];
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#ffffff;">');
  html.push('<tr>');
  EDB_RIR26.produtos.forEach(function(p, i) {
    html.push('<td class="product-cell" valign="top" style="width:16.66%;padding:0 7px 30px 7px;vertical-align:top;box-sizing:border-box;' + (i < EDB_RIR26.produtos.length - 1 ? 'border-right:1px solid #eeeae4;' : '') + '">');
    html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">');
    html.push('<tr><td valign="top" style="padding:0;text-align:center;vertical-align:top;">');
    html.push('<a href="' + escaparHtmlRockInRio2026_(p.url) + '" style="text-decoration:none;color:#171922;">');
    html.push('<img src="' + escaparHtmlRockInRio2026_(p.imagem) + '" width="150" height="150" alt="' + escaparHtmlRockInRio2026_(p.nome) + '" style="display:block;width:150px;height:auto;max-width:100%;margin:0 auto 10px auto;border:0;outline:none;text-decoration:none;">');
    html.push('</a>');
    html.push('<div class="product-badge" style="font-family:Arial,Helvetica,sans-serif;font-size:8px;line-height:11px;font-weight:700;letter-spacing:0.45px;color:' + (i === 0 ? '#a62323' : '#5a5d65') + ';text-transform:uppercase;min-height:23px;margin:0 0 5px 0;">' + escaparHtmlRockInRio2026_(p.selo) + '</div>');
    html.push('<div class="product-title" style="font-family:Georgia,\'Times New Roman\',serif;font-size:14px;line-height:18px;font-weight:700;color:#171922;min-height:42px;margin:0 0 7px 0;">' + escaparHtmlRockInRio2026_(p.nome) + '</div>');
    html.push('<div class="product-copy" style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:15px;color:#5c6068;min-height:165px;margin:0 0 12px 0;">' + escaparHtmlRockInRio2026_(p.descricao) + '</div>');
    html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">');
    html.push('<tr><td valign="middle" style="padding:0;vertical-align:middle;text-align:center;">');
    html.push('<a class="mobile-button" href="' + escaparHtmlRockInRio2026_(p.url) + '" style="display:block;padding:11px 5px;background-color:' + (i === 0 ? '#a62323' : '#171922') + ';font-family:Arial,Helvetica,sans-serif;font-size:9px;line-height:12px;font-weight:700;letter-spacing:0.55px;color:#ffffff;text-decoration:none;text-align:center;text-transform:uppercase;box-sizing:border-box;">' + escaparHtmlRockInRio2026_(p.botao) + '</a>');
    html.push('</td></tr></table>');
    html.push('</td></tr></table>');
    html.push('</td>');
  });
  html.push('</tr></table>');
  return html.join('');
}

function blocoFaixaTematicaRockInRio2026_() {
  var blocos = [
    ['ESCOLHA SEU MOMENTO', 'Da chegada ao último acorde, há uma fragrância para cada intensidade da noite.'],
    ['6 PRESENÇAS, 6 ATMOSFERAS', 'Amadeirados, intensos, elegantes e envolventes.'],
    ['ENCONTRE SEU FAVORITO', 'Descubra o perfume que acompanha melhor o seu ritmo.'],
    ['A NOITE FICA.', 'O aroma também.']
  ];
  var html = [];
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#080a0f;border-top:4px solid #a62323;border-bottom:4px solid #214d91;">');
  html.push('<tr>');
  blocos.forEach(function(b, i) {
    html.push('<td class="promo-cell" valign="middle" style="width:25%;padding:24px 14px;text-align:center;vertical-align:middle;box-sizing:border-box;' + (i < blocos.length - 1 ? 'border-right:1px solid #2b303a;' : '') + '">');
    html.push('<div class="promo-title" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-weight:700;letter-spacing:0.8px;color:#ffffff;text-transform:uppercase;margin:0 0 7px 0;">' + escaparHtmlRockInRio2026_(b[0]) + '</div>');
    html.push('<div class="promo-copy" style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:15px;color:#cfd2da;">' + escaparHtmlRockInRio2026_(b[1]) + '</div>');
    html.push('</td>');
  });
  html.push('</tr></table>');
  return html.join('');
}

function blocoConfiancaRockInRio2026_() {
  var itens = [
    'Criações com óleos essenciais e finas essências',
    'Fragrâncias com personalidade e atmosfera',
    'Perfumes para diferentes estilos de noite',
    'Embalado com cuidado e propósito',
    'Presença marcante, elegância natural',
    'Essência do Brasil em cada detalhe'
  ];
  var html = [];
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#f7f5f1;">');
  html.push('<tr>');
  itens.forEach(function(texto, i) {
    html.push('<td class="trust-cell" valign="middle" style="width:16.66%;padding:20px 10px;text-align:center;vertical-align:middle;box-sizing:border-box;' + (i < itens.length - 1 ? 'border-right:1px solid #ded9d1;' : '') + '">');
    html.push('<div style="width:22px;height:2px;background-color:' + (i % 2 === 0 ? '#a62323' : '#214d91') + ';margin:0 auto 8px auto;font-size:0;line-height:0;"></div>');
    html.push('<div class="trust-text" style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:15px;font-weight:700;color:#32343b;">' + escaparHtmlRockInRio2026_(texto) + '</div>');
    html.push('</td>');
  });
  html.push('</tr></table>');
  return html.join('');
}

function blocoRodapeRockInRio2026_() {
  var html = [];
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#08090d;">');
  html.push('<tr>');
  html.push('<td class="footer-col" valign="top" style="width:25%;padding:28px 18px;vertical-align:top;box-sizing:border-box;">');
  html.push('<div class="footer-brand" style="font-family:Georgia,\'Times New Roman\',serif;font-size:20px;line-height:24px;font-weight:700;letter-spacing:0.6px;color:#ffffff;margin:0 0 8px 0;">ESSÊNCIA DO BRASIL</div>');
  html.push('<div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:16px;color:#b9bcc5;">Natureza que inspira. Presença que atravessa a noite.</div>');
  html.push('</td>');
  html.push('<td class="footer-col" valign="top" style="width:25%;padding:28px 18px;vertical-align:top;box-sizing:border-box;">');
  html.push('<div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:700;color:#e4bd72;text-transform:uppercase;margin:0 0 8px 0;">Atendimento</div>');
  html.push('<a href="' + EDB_RIR26.contato + '" style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:16px;color:#ffffff;text-decoration:underline;">Fale conosco</a>');
  html.push('</td>');
  html.push('<td class="footer-col" valign="top" style="width:25%;padding:28px 18px;vertical-align:top;box-sizing:border-box;">');
  html.push('<div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:700;color:#e4bd72;text-transform:uppercase;margin:0 0 8px 0;">Redes</div>');
  html.push('<div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:16px;color:#ffffff;">Instagram / Facebook</div>');
  html.push('</td>');
  html.push('<td class="footer-col" valign="top" style="width:25%;padding:28px 18px;vertical-align:top;box-sizing:border-box;">');
  html.push('<div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:15px;font-weight:700;color:#e4bd72;text-transform:uppercase;margin:0 0 8px 0;">Pagamento</div>');
  html.push('<div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:16px;color:#ffffff;">Pix / Cartão / Boleto</div>');
  html.push('</td>');
  html.push('</tr></table>');
  return html.join('');
}

function montarTemplateRockInRio2026_() {
  var html = [];
  html.push('<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">');
  html.push('<style>@media only screen and (max-width:920px){');
  html.push('.preheader-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;text-align:center!important;padding-left:18px!important;padding-right:18px!important;}');
  html.push('.nav-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:10px 14px!important;border-right:0!important;}');
  html.push('.nav-text{font-size:11px!important;line-height:14px!important;}');
  html.push('.hero-copy{width:58%!important;box-sizing:border-box!important;padding:28px 14px 24px 18px!important;}');
  html.push('.hero-art{width:42%!important;box-sizing:border-box!important;}');
  html.push('.hero-kicker{font-size:10px!important;line-height:13px!important;color:#f0c87e!important;letter-spacing:1.5px!important;}');
  html.push('.hero-title{font-size:28px!important;line-height:32px!important;color:#ffffff!important;letter-spacing:-0.3px!important;}');
  html.push('.hero-subtitle{font-size:16px!important;line-height:21px!important;color:#fff3e1!important;}');
  html.push('.hero-body{font-size:11px!important;line-height:17px!important;color:#ffffff!important;}');
  html.push('.hero-micro-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:0 0 10px 0!important;}');
  html.push('.hero-microtitle{font-size:10px!important;line-height:13px!important;color:#ffffff!important;}');
  html.push('.hero-microtext{font-size:9px!important;line-height:13px!important;color:#eef0f5!important;}');
  html.push('.benefit-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;border-right:0!important;border-bottom:1px solid #252a35!important;padding:12px 18px!important;}');
  html.push('.benefit-text{font-size:11px!important;line-height:15px!important;}');
  html.push('.section-title{font-size:24px!important;line-height:30px!important;}');
  html.push('.product-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;border-right:0!important;border-bottom:1px solid #eeeae4!important;padding:20px 24px 28px 24px!important;}');
  html.push('.product-title{font-size:20px!important;line-height:25px!important;min-height:0!important;}');
  html.push('.product-copy{font-size:13px!important;line-height:20px!important;min-height:0!important;}');
  html.push('.product-badge{font-size:10px!important;line-height:13px!important;min-height:0!important;}');
  html.push('.mobile-button{width:100%!important;max-width:100%!important;box-sizing:border-box!important;font-size:11px!important;line-height:14px!important;padding:14px 12px!important;}');
  html.push('.promo-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;border-right:0!important;border-bottom:1px solid #2b303a!important;padding:18px 22px!important;}');
  html.push('.promo-title{font-size:13px!important;line-height:17px!important;}');
  html.push('.promo-copy{font-size:11px!important;line-height:17px!important;}');
  html.push('.trust-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;border-right:0!important;border-bottom:1px solid #ded9d1!important;padding:15px 20px!important;}');
  html.push('.trust-text{font-size:11px!important;line-height:16px!important;}');
  html.push('.footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:20px 24px!important;border-bottom:1px solid #252831!important;}');
  html.push('.footer-brand{font-size:21px!important;line-height:25px!important;}');
  html.push('}</style></head>');
  html.push('<body style="margin:0;padding:0;background-color:#e9e7e3;">');
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#e9e7e3;">');
  html.push('<tr><td valign="top" style="padding:18px 8px;vertical-align:top;">');
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:900px;table-layout:fixed;border-collapse:collapse;margin:0 auto;background-color:#ffffff;">');
  // 1) Preheader
  html.push('<tr><td valign="top" style="padding:0;vertical-align:top;">');
  html.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#08090d;">');
  html.push('<tr>');
  html.push('<td class="preheader-cell" valign="middle" style="width:50%;padding:8px 18px;vertical-align:middle;font-family:Arial,Helvetica,sans-serif;font-size:9px;line-height:13px;color:#d7d8dc;box-sizing:border-box;">Natureza que inspira. Presença que atravessa a noite.</td>');
  html.push('<td class="preheader-cell" valign="middle" style="width:50%;padding:8px 18px;text-align:right;vertical-align:middle;box-sizing:border-box;"><a href="' + EDB_RIR26.home + '" style="font-family:Arial,Helvetica,sans-serif;font-size:9px;line-height:13px;color:#d7d8dc;text-decoration:underline;">Visite nossa loja online</a></td>');
  html.push('</tr></table></td></tr>');
  // 2) Logo textual
  html.push('<tr><td valign="middle" style="padding:24px 20px 20px 20px;text-align:center;vertical-align:middle;background-color:#ffffff;">');
  html.push('<a href="' + EDB_RIR26.home + '" style="text-decoration:none;color:#171922;">');
  html.push('<div style="font-family:Georgia,\'Times New Roman\',serif;font-size:28px;line-height:32px;font-weight:700;letter-spacing:2.1px;color:#171922;">ESSÊNCIA DO BRASIL</div>');
  html.push('<div style="font-family:Arial,Helvetica,sans-serif;font-size:9px;line-height:13px;letter-spacing:2.7px;color:#8b6b43;text-transform:uppercase;margin-top:5px;">PERFUMARIA NATURAL</div>');
  html.push('</a></td></tr>');
  // 3) Menu
  html.push('<tr><td valign="top" style="padding:0;vertical-align:top;">' + blocoMenuRockInRio2026_() + '</td></tr>');
  // 4) Hero
  html.push('<tr><td valign="top" style="padding:0;vertical-align:top;">' + blocoHeroRockInRio2026_() + '</td></tr>');
  // 5) Benefícios
  html.push('<tr><td valign="top" style="padding:0;vertical-align:top;">' + blocoBeneficiosRockInRio2026_() + '</td></tr>');
  // 6) Título
  html.push('<tr><td valign="top" style="padding:0;vertical-align:top;">' + blocoTituloProdutosRockInRio2026_() + '</td></tr>');
  // 7) Produtos
  html.push('<tr><td valign="top" style="padding:0 10px 8px 10px;vertical-align:top;background-color:#ffffff;">' + blocoProdutosRockInRio2026_() + '</td></tr>');
  // 8) Faixa secundária
  html.push('<tr><td valign="top" style="padding:0;vertical-align:top;">' + blocoFaixaTematicaRockInRio2026_() + '</td></tr>');
  // 9) Institucional
  html.push('<tr><td valign="top" style="padding:0;vertical-align:top;">' + blocoConfiancaRockInRio2026_() + '</td></tr>');
  // 10) Rodapé
  html.push('<tr><td valign="top" style="padding:0;vertical-align:top;">' + blocoRodapeRockInRio2026_() + '</td></tr>');
  // 11) Faixa final
  html.push('<tr><td valign="middle" style="padding:19px 24px;text-align:center;vertical-align:middle;background-color:#08090d;border-top:1px solid #a62323;">');
  html.push('<div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:16px;font-weight:700;letter-spacing:1.2px;color:#d14b4b;text-transform:uppercase;">NOITE, MÚSICA E PRESENÇA — O AROMA QUE FICA NO AR.</div>');
  html.push('</td></tr>');
  // 12) Descadastro
  html.push('<tr><td valign="middle" style="padding:18px 24px;text-align:center;vertical-align:middle;background-color:#050609;">');
  html.push('<div style="font-family:Arial,Helvetica,sans-serif;font-size:9px;line-height:15px;color:#8f929b;">Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.</div>');
  html.push('</td></tr>');
  html.push('</table>');
  html.push('</td></tr></table>');
  html.push('</body></html>');
  return html.join('');
}

function corpoTextoRockInRio2026_() {
  return [
    'THE FRAGRANCE LINE-UP',
    'ROCK IN RIO 2026',
    'Se a noite tivesse trilha, teria aroma.',
    '',
    '6 fragrâncias para entrar no ritmo da noite.',
    'Night 100ml, Dark Code 100ml, Attraction 100ml, Patchouli Dark 100ml + Mini 10ml, Lord 100ml e Platinum 100ml.',
    '',
    'Acesse: ' + EDB_RIR26.home,
    '',
    'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.'
  ].join('\n');
}

function validarTemplateRockInRio2026_(html, inlineImages) {
  if (!html || typeof html !== 'string') {
    throw new Error('HTML do template está vazio.');
  }

  var chavesInline = Object.keys(inlineImages).sort();
  var cidsEncontrados = [];
  var regexCid = /cid:([A-Za-z0-9_-]+)/g;
  var m;
  while ((m = regexCid.exec(html)) !== null) {
    if (cidsEncontrados.indexOf(m[1]) === -1) cidsEncontrados.push(m[1]);
  }
  cidsEncontrados.sort();

  if (JSON.stringify(chavesInline) !== JSON.stringify(cidsEncontrados)) {
    throw new Error(
      'Falha na validação inlineImages x cid. inlineImages=' +
      JSON.stringify(chavesInline) +
      ' | cids=' + JSON.stringify(cidsEncontrados)
    );
  }

  var tabelas = html.match(/<table\b[^>]*>/gi) || [];
  tabelas.forEach(function(tag) {
    if (!/\bwidth="[^"]+"/i.test(tag)) {
      throw new Error('Tabela sem atributo HTML width: ' + tag);
    }
    var style = (tag.match(/\bstyle="([^"]*)"/i) || [,''])[1];
    if (!/\bwidth\s*:/i.test(style)) {
      throw new Error('Tabela sem width no style: ' + tag);
    }
    var ehWidth100 = /\bwidth="100%"/i.test(tag);
    var ehHeroCols = /\bclass="[^"]*hero-cols[^"]*"/i.test(tag);
    if (ehWidth100 && !ehHeroCols && !/table-layout\s*:\s*fixed/i.test(style)) {
      throw new Error('Tabela width=100% sem table-layout:fixed fora da exceção hero-cols: ' + tag);
    }
    if (ehHeroCols && /table-layout\s*:\s*fixed/i.test(style)) {
      throw new Error('hero-cols não pode usar table-layout:fixed.');
    }
  });

  var imgs = html.match(/<img\b[^>]*>/gi) || [];
  imgs.forEach(function(tag) {
    if (!/\bwidth="\d+"/i.test(tag) || !/\bheight="\d+"/i.test(tag)) {
      throw new Error('Imagem sem width/height HTML em pixel: ' + tag);
    }
    var style = (tag.match(/\bstyle="([^"]*)"/i) || [,''])[1];
    if (!/max-width\s*:\s*100%/i.test(style)) {
      throw new Error('Imagem sem max-width:100%: ' + tag);
    }
  });

  var classesMoveisTd = [
    'preheader-cell','nav-cell','hero-copy','hero-art','hero-micro-cell',
    'benefit-cell','product-cell','promo-cell','trust-cell','footer-col'
  ];
  var tds = html.match(/<td\b[^>]*>/gi) || [];
  tds.forEach(function(tag) {
    var classe = (tag.match(/\bclass="([^"]*)"/i) || [,''])[1];
    var alvoMobile = classesMoveisTd.some(function(c) {
      return new RegExp('(?:^|\\s)' + c + '(?:\\s|$)').test(classe);
    });
    if (alvoMobile && /\swidth="/i.test(tag)) {
      throw new Error('TD responsiva com atributo HTML width proibido: ' + tag);
    }
  });

  if (html.indexOf('&nbsp;•&nbsp;') !== -1) {
    throw new Error('Encontrado separador com &nbsp; proibido.');
  }

  var textoDescadastro = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';
  if (html.indexOf(textoDescadastro) === -1) {
    throw new Error('Texto obrigatório de descadastro não encontrado exatamente.');
  }

  var fotos = [EDB_RIR26.hero].concat(EDB_RIR26.produtos.map(function(p) { return p.imagem; }));
  fotos.forEach(function(url) {
    if (url.indexOf('https://') !== 0) {
      throw new Error('Imagem fotográfica sem HTTPS público: ' + url);
    }
    if (html.indexOf(url) === -1) {
      throw new Error('Imagem fotográfica pública não usada no HTML: ' + url);
    }
  });

  if (!/@media only screen and \(max-width:920px\)/.test(html)) {
    throw new Error('Breakpoint mobile precisa ser exatamente 920px.');
  }
  if (!/\.hero-title\{[^}]*font-size:[^;]+!important[^}]*line-height:[^;]+!important[^}]*color:[^;]+!important/i.test(html)) {
    throw new Error('hero-title precisa de font-size, line-height e color próprios no mobile.');
  }
  ['hero-kicker','hero-subtitle','hero-body','hero-microtitle','hero-microtext'].forEach(function(classe) {
    var rx = new RegExp('\\.' + classe + '\\{[^}]*font-size:[^;]+!important[^}]*line-height:[^;]+!important[^}]*color:[^;]+!important', 'i');
    if (!rx.test(html)) {
      throw new Error(classe + ' precisa de font-size, line-height e color próprios no mobile.');
    }
  });

  var links = html.match(/href="([^"]+)"/g) || [];
  links.forEach(function(token) {
    var url = token.substring(6, token.length - 1);
    if (!/^https:\/\//i.test(url)) {
      throw new Error('Link não-HTTPS ou incoerente encontrado: ' + url);
    }
  });

  return true;
}

function enviarTesteRockInRio2026() {
  var destinatario = Session.getActiveUser().getEmail();
  if (!destinatario) {
    throw new Error('Não foi possível obter o e-mail do usuário ativo via Session.getActiveUser().getEmail().');
  }
  var html = montarTemplateRockInRio2026_();
  var inlineImages = criarInlineImagesRockInRio2026_();
  validarTemplateRockInRio2026_(html, inlineImages);

  GmailApp.sendEmail(
    destinatario,
    EDB_RIR26.assunto,
    corpoTextoRockInRio2026_(),
    {
      htmlBody: html,
      inlineImages: inlineImages,
      name: 'Essência do Brasil'
    }
  );
}

function enviarRockInRio2026(destinatario) {
  if (!destinatario || String(destinatario).indexOf('@') === -1) {
    throw new Error('Informe um destinatário válido.');
  }
  var html = montarTemplateRockInRio2026_();
  var inlineImages = criarInlineImagesRockInRio2026_();
  validarTemplateRockInRio2026_(html, inlineImages);

  GmailApp.sendEmail(
    destinatario,
    EDB_RIR26.assunto,
    corpoTextoRockInRio2026_(),
    {
      htmlBody: html,
      inlineImages: inlineImages,
      name: 'Essência do Brasil'
    }
  );
}
