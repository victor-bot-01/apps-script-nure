/**
 * E-mail marketing — Essência do Brasil
 * Campanha: ENEM — 61 dias. 6 momentos. 1 objetivo.
 *
 * Estrutura fiel ao mapa aprovado:
 * 1) faixa utilidade; 2) cabeçalho; 3) menu 6 colunas;
 * 4) hero; 5) cabeçalho vitrine; 6) vitrine 6 colunas;
 * 7) CTA 3 colunas; 8) atributos 6 colunas;
 * 9) rodapé 4 colunas; 10) descadastro.
 */

function templateEnem61Dias_() {
  var URL = {
    home: 'https://essenciadobrasil.com.br/',
    perfumesMasc: 'https://www.essenciadobrasil.com.br/perfumes-masculinos',
    perfumesFem: 'https://www.essenciadobrasil.com.br/perfumes-femininos/',
    oleos: 'https://essenciadobrasil.com.br/oleos-essenciais/',
    blends: 'https://www.essenciadobrasil.com.br/oleos-essenciais/blends-sinergias/',
    kits: 'https://essenciadobrasil.com.br/oleos-essenciais/kits2/',
    essencias: 'https://www.essenciadobrasil.com.br/essencias/',
    focar: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-focar-pronto-p-uso-roll-on-10ml/',
    respirar: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-respirar-pronto-p-uso-roll-on-10ml/',
    inspirar: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-inspirar-pronto-p-uso-roll-on-10ml/',
    acalmar: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-acalmar-pronto-p-uso-roll-on-10ml/',
    relaxar: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-relaxar-pronto-p-uso-roll-on-10ml/',
    dormir: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-dormir-pronto-p-uso-roll-on-10ml/'
  };

  var IMG = {
    hero: 'https://i.ibb.co/93vbWm9y/file-000000007d24820e903af9ec16ffde14.png',
    focar: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzvhj-41fdf1cda0a4c8fef217489908446221-1024-1024.webp',
    respirar: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzivs-1c090d06821e46ab8a17489908532645-1024-1024.webp',
    inspirar: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzvln-a7300ff5b56ece7ce517489908467473-1024-1024.webp',
    acalmar: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzxnr-44af881fc16a6e082317489908392737-1024-1024.webp',
    relaxar: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzrn4-0ef6c77f4002ab232117489908497841-1024-1024.webp',
    dormir: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzwav-9d6aeab7b859a55eea17489908415410-1024-1024.webp'
  };

  var products = [
    {n:'RESPIRAR', moment:'ANTES DE COMEÇAR', notes:'Eucalipto, Hortelã-pimenta e Melaleuca.', copy:'Antes dos livros, um instante para respirar. Comece no seu tempo e prepare o espaço para o que vem a seguir.', img:IMG.respirar, url:URL.respirar},
    {n:'FOCAR', moment:'HORA DE ESTUDAR', notes:'Eucalipto, Laranja Amarga e Menta Arvensis.', copy:'Material organizado, distrações de lado. Um ritual para marcar o começo do seu tempo de estudo.', img:IMG.focar, url:URL.focar},
    {n:'INSPIRAR', moment:'ENTRE UM CONTEÚDO E OUTRO', notes:'Laranja Doce, Limão Siciliano e Tangerina.', copy:'Terminou um bloco? Mude de matéria, renove o ambiente e comece outra vez.', img:IMG.inspirar, url:URL.inspirar},
    {n:'ACALMAR', moment:'HORA DA PAUSA', notes:'Lavandim, Hortelã-pimenta e Limão Siciliano.', copy:'Nem todo minuto precisa produzir alguma coisa. Faça uma pausa, saia da mesa por alguns instantes e depois continue.', img:IMG.acalmar, url:URL.acalmar},
    {n:'RELAXAR', moment:'DEPOIS DOS ESTUDOS', notes:'Laranja Doce, Cedro da Virgínia e Anis-estrelado.', copy:'Feche os livros. O estudo de hoje terminou. Agora é hora de deixar a rotina desacelerar.', img:IMG.relaxar, url:URL.relaxar},
    {n:'DORMIR', moment:'FIM DO DIA', notes:'Lavandim, Bergamota e Alecrim.', copy:'Guarde o material e respeite o fim do dia. Amanhã haverá outro capítulo — e outro momento para continuar.', img:IMG.dormir, url:URL.dormir}
  ];

  var css = '<style>' +
    '@media only screen and (max-width:920px){' +
      '.stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}' +
      '.stackgap{display:block!important;height:14px!important;line-height:14px!important;}' +
      '.product-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:18px 24px!important;}' +
      '.benefit-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:14px 24px!important;text-align:center!important;}' +
      '.footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:18px 24px!important;text-align:center!important;}' +
      '.menu-cell{font-size:9px!important;line-height:12px!important;padding:8px 2px!important;}' +
      '.hero-copy{width:58%!important;box-sizing:border-box!important;padding:30px 18px 30px 24px!important;}' +
      '.hero-title{font-size:29px!important;line-height:31px!important;color:#ffffff!important;}' +
      '.hero-subtitle{font-size:15px!important;line-height:21px!important;color:#ffffff!important;}' +
      '.hero-body{font-size:13px!important;line-height:19px!important;color:#ffffff!important;}' +
      '.section-title{font-size:25px!important;line-height:29px!important;}' +
      '.mobile-button{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}' +
    '}' +
  '</style>';

  var html = '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1.0">' + css + '</head>' +
  '<body style="margin:0;padding:0;background:#f3f0ea;font-family:Arial,Helvetica,sans-serif;color:#2c3f32;">' +

  // 1. Faixa superior
  '<table role="presentation" width="100%" style="width:100%;table-layout:fixed;border-collapse:collapse;background:#3e3157;"><tr>' +
    '<td style="padding:7px 14px;font-size:10px;line-height:14px;color:#ffffff;text-align:left;">FOCO HOJE, CONQUISTA AMANHÃ.</td>' +
    '<td style="padding:7px 14px;font-size:10px;line-height:14px;color:#ffffff;text-align:right;">Essência do Brasil</td>' +
  '</tr></table>' +

  // Envelope fluido max 900
  '<table role="presentation" width="100%" align="center" style="width:100%;max-width:900px;table-layout:fixed;border-collapse:collapse;margin:0 auto;background:#ffffff;">' +

  // 2. Cabeçalho
  '<tr><td style="padding:25px 20px 18px;text-align:center;background:#ffffff;">' +
    '<a href="'+URL.home+'" style="color:#31563e;text-decoration:none;font-family:Georgia,serif;font-size:27px;line-height:32px;letter-spacing:2px;">ESSÊNCIA DO BRASIL</a>' +
    '<div style="font-size:10px;line-height:14px;letter-spacing:3px;color:#7b806f;margin-top:4px;">PERFUMARIA NATURAL</div>' +
  '</td></tr>' +

  // 3. Menu 6 colunas
  '<tr><td style="padding:0;background:#ffffff;">' +
    '<table role="presentation" width="100%" style="width:100%;table-layout:fixed;border-collapse:collapse;border-top:1px solid #e7e3dc;border-bottom:1px solid #e7e3dc;"><tr>' +
      menuCell_('PERFUMES MASC.',URL.perfumesMasc) +
      menuCell_('PERFUMES FEM.',URL.perfumesFem) +
      menuCell_('ÓLEOS ESSENCIAIS',URL.oleos) +
      menuCell_('BLENDS',URL.blends) +
      menuCell_('KITS',URL.kits) +
      menuCell_('ESSÊNCIAS',URL.essencias) +
    '</tr></table>' +
  '</td></tr>' +

  // 4. Hero com imagem pública de fundo e texto HTML real.
  '<tr><td background="'+IMG.hero+'" style="background-image:url(\''+IMG.hero+'\');background-position:center center;background-size:cover;background-repeat:no-repeat;height:500px;padding:0;vertical-align:middle;">' +
    '<!--[if gte mso 9]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:900px;height:500px;"><v:fill type="frame" src="'+IMG.hero+'" color="#d8c9ad"/><v:textbox inset="0,0,0,0"><![endif]-->' +
    '<table role="presentation" width="100%" style="width:100%;border-collapse:collapse;"><tr>' +
      '<td class="hero-copy" style="width:44%;padding:48px 25px 48px 42px;vertical-align:middle;box-sizing:border-box;">' +
        '<div class="hero-title" style="font-family:Georgia,serif;font-size:39px;line-height:42px;font-weight:bold;color:#294b36;text-transform:uppercase;">FALTAM 61 DIAS<br>PARA O ENEM.</div>' +
        '<div class="hero-subtitle" style="font-size:18px;line-height:24px;font-weight:bold;color:#294b36;margin-top:16px;">61 dias. 6 momentos. 1 objetivo.</div>' +
        '<div class="hero-body" style="font-size:14px;line-height:21px;color:#33473b;margin-top:14px;">A reta final chegou. Entre conteúdos, revisões e simulados, também existe uma rotina que precisa caber nos seus dias.</div>' +
        '<div class="hero-body" style="font-size:14px;line-height:21px;color:#33473b;font-weight:bold;margin-top:12px;">Você não precisa passar por isso no automático.</div>' +
      '</td>' +
      '<td style="width:56%;padding:0;">&nbsp;</td>' +
    '</tr></table>' +
    '<!--[if gte mso 9]></v:textbox></v:rect><![endif]-->' +
  '</td></tr>' +

  // 5. Cabeçalho vitrine
  '<tr><td style="padding:38px 24px 20px;text-align:center;background:#f7f4fa;">' +
    '<div class="section-title" style="font-family:Georgia,serif;font-size:31px;line-height:36px;color:#44375c;font-weight:bold;">6 MOMENTOS PARA CUIDAR DA SUA ROTINA</div>' +
    '<div style="font-size:14px;line-height:20px;color:#6f6876;margin-top:8px;">Um ritual para acompanhar cada parte da sua jornada.</div>' +
  '</td></tr>' +

  // 6. Vitrine 6 colunas
  '<tr><td style="padding:0 10px 30px;background:#f7f4fa;">' +
    '<table role="presentation" width="100%" style="width:100%;table-layout:fixed;border-collapse:collapse;"><tr>' +
      products.map(productCell_).join('') +
    '</tr></table>' +
  '</td></tr>' +

  // 7. CTA 3 colunas
  '<tr><td style="padding:18px 24px 28px;background:#ffffff;">' +
    '<table role="presentation" width="100%" style="width:100%;table-layout:fixed;border-collapse:separate;border-spacing:0;background:#eee8f4;border-radius:16px;"><tr>' +
      '<td class="benefit-cell" style="width:33.33%;padding:22px 20px;vertical-align:middle;box-sizing:border-box;">' +
        '<div style="font-family:Georgia,serif;font-size:18px;line-height:22px;color:#44375c;font-weight:bold;">Sua rotina também faz parte da preparação.</div>' +
        '<div style="font-size:12px;line-height:18px;color:#655d6d;margin-top:7px;">São 61 dias para estudar, revisar, pausar, recomeçar e descansar — um dia de cada vez.</div>' +
      '</td>' +
      '<td class="benefit-cell" style="width:33.33%;padding:22px 20px;vertical-align:middle;text-align:center;box-sizing:border-box;border-left:1px solid #ded4e8;border-right:1px solid #ded4e8;">' +
        '<div style="font-size:14px;line-height:19px;color:#44375c;font-weight:bold;">61 DIAS · 6 MOMENTOS · 1 OBJETIVO</div>' +
        '<div style="font-size:12px;line-height:18px;color:#655d6d;margin-top:7px;">Não é sobre fazer tudo de uma vez. É sobre continuar.</div>' +
      '</td>' +
      '<td class="benefit-cell" style="width:33.33%;padding:22px 20px;vertical-align:middle;text-align:center;box-sizing:border-box;">' +
        '<a class="mobile-button" href="'+URL.kits+'" style="display:inline-block;background:#44375c;color:#ffffff;text-decoration:none;font-size:12px;line-height:16px;font-weight:bold;padding:14px 18px;border-radius:24px;box-sizing:border-box;">CONHEÇA OS 6 MOMENTOS</a>' +
      '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // 8. Atributos 6 colunas
  '<tr><td style="padding:26px 10px;background:#ffffff;border-top:1px solid #eeeae4;">' +
    '<table role="presentation" width="100%" style="width:100%;table-layout:fixed;border-collapse:collapse;"><tr>' +
      attributeCell_('ORGANIZAR','um passo de cada vez') +
      attributeCell_('ESTUDAR','com constância') +
      attributeCell_('REVISAR','o que foi aprendido') +
      attributeCell_('PAUSAR','quando for preciso') +
      attributeCell_('DESCANSAR','ao fim do dia') +
      attributeCell_('CONTINUAR','amanhã') +
    '</tr></table>' +
  '</td></tr>' +

  // 9. Rodapé 4 colunas
  '<tr><td style="padding:0;background:#3e3157;">' +
    '<table role="presentation" width="100%" style="width:100%;table-layout:fixed;border-collapse:collapse;"><tr>' +
      '<td class="footer-col" style="width:25%;padding:28px 18px;color:#ffffff;vertical-align:top;box-sizing:border-box;">' +
        '<div style="font-family:Georgia,serif;font-size:17px;line-height:21px;letter-spacing:1px;">ESSÊNCIA DO BRASIL</div>' +
        '<div style="font-size:11px;line-height:17px;color:#ddd4e7;margin-top:8px;">Perfumaria natural, essências e óleos essenciais.</div>' +
      '</td>' +
      '<td class="footer-col" style="width:25%;padding:28px 18px;color:#ffffff;vertical-align:top;box-sizing:border-box;">' +
        '<div style="font-size:12px;line-height:18px;font-weight:bold;">ATENDIMENTO</div>' +
        '<div style="font-size:11px;line-height:17px;color:#ddd4e7;margin-top:8px;"><a href="'+URL.home+'" style="color:#ddd4e7;text-decoration:none;">Acesse nossa loja</a></div>' +
      '</td>' +
      '<td class="footer-col" style="width:25%;padding:28px 18px;color:#ffffff;vertical-align:top;box-sizing:border-box;">' +
        '<div style="font-size:12px;line-height:18px;font-weight:bold;">NAVEGUE</div>' +
        '<div style="font-size:11px;line-height:17px;color:#ddd4e7;margin-top:8px;"><a href="'+URL.oleos+'" style="color:#ddd4e7;text-decoration:none;">Óleos Essenciais</a> · <a href="'+URL.essencias+'" style="color:#ddd4e7;text-decoration:none;">Essências</a></div>' +
      '</td>' +
      '<td class="footer-col" style="width:25%;padding:28px 18px;color:#ffffff;vertical-align:top;box-sizing:border-box;">' +
        '<div style="font-size:12px;line-height:18px;font-weight:bold;">FORMAS DE PAGAMENTO</div>' +
        '<div style="font-size:11px;line-height:17px;color:#ddd4e7;margin-top:8px;">Cartões · Pix · Boleto</div>' +
      '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // 10. Descadastro
  '<tr><td style="padding:20px 28px;text-align:center;background:#eee8f4;color:#5e5665;font-size:10px;line-height:16px;">Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.</td></tr>' +

  '</table></body></html>';

  var inlineImages = {
    ritualIcon: Utilities.newBlob(Utilities.base64Decode('iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAdElEQVR42mNgGAVDDej4WP7HhwfMYpo5hFSLqeoQSi2nyBGEDP3+6TkKpqojSLWc6o4gx3JiHEFT31MtFCixnOJQoNT3FIfCqANGHTDqgAF3wIAXRIOiKB7wymhQVMcD3iAZFE2yQdEoHRTN8kHTMRkFtAIA3D7R5VZDmwwAAAAASUVORK5CYII='), 'image/png', 'ritual-icon.png')
  };

  return {html: html, inlineImages: inlineImages, urls: URL, images: IMG};
}

function menuCell_(label, url) {
  return '<td class="menu-cell" style="width:16.66%;padding:10px 3px;text-align:center;vertical-align:middle;font-size:10px;line-height:13px;font-weight:bold;box-sizing:border-box;">' +
    '<a href="'+url+'" style="color:#3d4d42;text-decoration:none;"><img src="cid:ritualIcon" width="18" height="18" alt="" style="display:block;width:18px;height:18px;max-width:100%;margin:0 auto 5px;border:0;">'+label+'</a>' +
  '</td>';
}

function productCell_(p, i) {
  return '<td class="product-cell" style="width:16.66%;padding:12px 6px 18px;text-align:center;vertical-align:top;box-sizing:border-box;">' +
    '<div style="font-size:9px;line-height:12px;letter-spacing:1px;color:#766a7f;">MOMENTO '+(i+1)+'</div>' +
    '<a href="'+p.url+'" style="text-decoration:none;color:#44375c;"><img src="'+p.img+'" width="132" height="132" alt="'+p.n+'" style="display:block;width:100%;height:auto;max-width:100%;margin:9px auto 10px;border:0;"></a>' +
    '<div style="font-family:Georgia,serif;font-size:16px;line-height:19px;font-weight:bold;color:#44375c;">'+p.n+'</div>' +
    '<div style="font-size:9px;line-height:13px;font-weight:bold;color:#8a6475;margin-top:5px;">'+p.moment+'</div>' +
    '<div style="font-size:9px;line-height:14px;color:#5f5a60;margin-top:7px;">'+p.notes+'</div>' +
    '<div style="font-size:10px;line-height:15px;color:#4f4a50;margin-top:8px;">'+p.copy+'</div>' +
    '<div style="font-size:13px;line-height:18px;font-weight:bold;color:#44375c;margin-top:9px;">R$ 49,90</div>' +
    '<a href="'+p.url+'" style="display:inline-block;margin-top:9px;color:#44375c;text-decoration:underline;font-size:10px;line-height:14px;font-weight:bold;">CONHECER</a>' +
  '</td>';
}

function attributeCell_(title, sub) {
  return '<td style="width:16.66%;padding:8px 5px;text-align:center;vertical-align:top;box-sizing:border-box;">' +
    '<img src="cid:ritualIcon" width="24" height="24" alt="" style="display:block;width:24px;height:24px;max-width:100%;margin:0 auto 7px;border:0;">' +
    '<div style="font-size:10px;line-height:14px;font-weight:bold;color:#31563e;">'+title+'</div>' +
    '<div style="font-size:9px;line-height:13px;color:#74766f;margin-top:3px;">'+sub+'</div>' +
  '</td>';
}

function validarTemplateEnem61Dias_() {
  var t = templateEnem61Dias_();
  var html = t.html;
  var inlineKeys = Object.keys(t.inlineImages).sort();

  var cidMatches = html.match(/cid:([A-Za-z0-9_-]+)/g) || [];
  var cidKeys = cidMatches.map(function(x){ return x.substring(4); })
    .filter(function(v,i,a){ return a.indexOf(v) === i; }).sort();

  if (JSON.stringify(inlineKeys) !== JSON.stringify(cidKeys)) {
    throw new Error('Falha regra 19: inlineImages e CIDs não correspondem 1:1. inlineImages=' +
      inlineKeys.join(',') + ' | CIDs=' + cidKeys.join(','));
  }

  if (/attachments\s*:/.test(html)) {
    throw new Error('Falha regra 17: referência indevida a attachments.');
  }

  Object.keys(t.images).forEach(function(k){
    if (!/^https:\/\//.test(t.images[k])) throw new Error('Falha regra 23: imagem '+k+' sem URL pública HTTPS.');
  });

  if (html.indexOf('max-width:900px') === -1 || html.indexOf('max-width:920px') === -1) {
    throw new Error('Falha regras 2/12: max-width 900px e breakpoint 920px são obrigatórios.');
  }

  if (html.indexOf('Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.') === -1) {
    throw new Error('Falha regra 15: texto de descadastro foi alterado.');
  }

  // Regra 21: células que mudam de largura/display na media query não podem ter atributo HTML width.
  var forbidden = /<td[^>]*class="[^"]*(stack100|product-cell|benefit-cell|footer-col)[^"]*"[^>]*\swidth=/i;
  if (forbidden.test(html)) throw new Error('Falha regra 21: TD responsiva contém atributo HTML width.');

  // Regra 20/22: classes de texto do hero precisam existir no mobile.
  ['.hero-title{font-size:29px!important;line-height:31px!important;color:#ffffff!important;}',
   '.hero-subtitle{font-size:15px!important;line-height:21px!important;color:#ffffff!important;}',
   '.hero-body{font-size:13px!important;line-height:19px!important;color:#ffffff!important;}'
  ].forEach(function(rule){
    if (html.indexOf(rule) === -1) throw new Error('Falha regras 20/22: regra mobile do hero ausente.');
  });

  // Fotos de produto não podem usar CID.
  Object.keys(t.images).forEach(function(k){
    if (t.images[k].indexOf('cid:') === 0) throw new Error('Falha regra 23: foto/banner em CID.');
  });

  return true;
}

function enviarTesteEnem61Dias() {
  validarTemplateEnem61Dias_();

  var t = templateEnem61Dias_();
  var destinatario = Session.getActiveUser().getEmail();
  if (!destinatario) {
    throw new Error('Não foi possível obter o e-mail da conta ativa via Session.getActiveUser().getEmail().');
  }

  GmailApp.sendEmail(
    destinatario,
    'Faltam 61 dias. 6 momentos. 1 objetivo.',
    'Faltam 61 dias para o ENEM. Conheça 6 momentos para acompanhar uma rotina de estudos equilibrada. Acesse https://essenciadobrasil.com.br/',
    {
      htmlBody: t.html,
      inlineImages: t.inlineImages,
      name: 'Essência do Brasil'
    }
  );
}
