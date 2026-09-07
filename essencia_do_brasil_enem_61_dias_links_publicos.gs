/**
 * Essência do Brasil — ENEM 2026
 * Assunto: Faltam 61 dias. 6 momentos. 1 objetivo.
 *
 * Execute enviarTesteEnem61Dias() para enviar um teste ao usuário ativo.
 * Todas as imagens, inclusive os dois ícones, usam URLs públicas.
 */

function criarTemplateEnem61Dias_() {
  var subject = 'Faltam 61 dias. 6 momentos. 1 objetivo.';

  var URLS = {
    home: 'https://essenciadobrasil.com.br/',
    perfumesMasculinos: 'https://essenciadobrasil.com.br/perfumes-masculinos/',
    perfumesFemininos: 'https://essenciadobrasil.com.br/perfumes-femininos/',
    oleosEssenciais: 'https://essenciadobrasil.com.br/oleos-essenciais/',
    essencias: 'https://essenciadobrasil.com.br/essencias/',
    kits: 'https://essenciadobrasil.com.br/kits/',
    colecoes: 'https://essenciadobrasil.com.br/colecoes/',

    respirar: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-respirar-pronto-p-uso-roll-on-10ml/',
    focar: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-focar-pronto-p-uso-roll-on-10ml/',
    inspirar: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-inspirar-pronto-p-uso-roll-on-10ml/',
    acalmar: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-acalmar-pronto-p-uso-roll-on-10ml/',
    relaxar: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-relaxar-pronto-p-uso-roll-on-10ml/',
    dormir: 'https://essenciadobrasil.com.br/produtos/kit-oleo-essencial-dormir-pronto-p-uso-roll-on-10ml/',

    heroDesktop: 'https://i.ibb.co/8gChCgjm/file-00000000fddc820ea2fc2d6c8a9d2968.png',
    heroMobile: 'https://i.ibb.co/C3sGYR3k/file-0000000014d4820eb5cf3ef137728737.png',

    fotoRespirar: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzivs-1c090d06821e46ab8a17489908532645-1024-1024.webp',
    fotoFocar: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzvhj-41fdf1cda0a4c8fef217489908446221-1024-1024.webp',
    fotoInspirar: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzvln-a7300ff5b56ece7ce517489908467473-1024-1024.webp',
    fotoAcalmar: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzxnr-44af881fc16a6e082317489908392737-1024-1024.webp',
    fotoRelaxar: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzrn4-0ef6c77f4002ab232117489908497841-1024-1024.webp',
    fotoDormir: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dchzwav-9d6aeab7b859a55eea17489908415410-1024-1024.webp'
  };

  var products = [
    {
      moment: 'ANTES DE ESTUDAR',
      name: 'RESPIRAR',
      text: 'Eucalipto, Menta Piperita e Melaleuca em um blend fresco e aromático para marcar o começo: organize a mesa, respire e dê início ao seu momento de estudo.',
      url: URLS.respirar,
      image: URLS.fotoRespirar
    },
    {
      moment: 'ANTES DE ESTUDAR',
      name: 'FOCAR',
      text: 'Eucalipto, Laranja Amarga e Menta Arvensis formam uma composição fresca, cítrica e aromática. Um pequeno ritual para separar as distrações do dia daquele momento que você decidiu dedicar aos estudos.',
      url: URLS.focar,
      image: URLS.fotoFocar,
      principal: true
    },
    {
      moment: 'DURANTE A ROTINA',
      name: 'INSPIRAR',
      text: 'Laranja Doce, Limão Siciliano e Tangerina criam um encontro luminoso de cítricos. Para aqueles intervalos em que você fecha o livro por alguns minutos antes de começar outra etapa.',
      url: URLS.inspirar,
      image: URLS.fotoInspirar
    },
    {
      moment: 'DURANTE A ROTINA',
      name: 'ACALMAR',
      text: 'Lavandim, Menta Piperita e Limão Siciliano unem notas aromáticas, frescas e cítricas. Um convite para incluir pequenas pausas entre uma revisão e a próxima.',
      url: URLS.acalmar,
      image: URLS.fotoAcalmar
    },
    {
      moment: 'DEPOIS DOS ESTUDOS',
      name: 'RELAXAR',
      text: 'Laranja Doce, Cedro da Virgínia e Anis Estrelado encontram o cítrico, a madeira e uma faceta aromática. Para marcar aquela mudança de ritmo em que os livros se fecham e o restante da noite começa.',
      url: URLS.relaxar,
      image: URLS.fotoRelaxar
    },
    {
      moment: 'FIM DO DIA',
      name: 'DORMIR',
      text: 'Lavandim, Bergamota e Alecrim acompanham o último momento da rotina. Quando chega a hora de guardar o material, deixar o estudo para amanhã e dar espaço ao descanso.',
      url: URLS.dormir,
      image: URLS.fotoDormir
    }
  ];

  function productCell(p) {
    return ''
      + '<td class="product-cell stack100" valign="top" style="width:16.66%;padding:0 7px 22px 7px;box-sizing:border-box;text-align:center;">'
      +   '<div style="font-family:Arial,sans-serif;font-size:10px;line-height:14px;letter-spacing:1px;color:#72538f;font-weight:bold;min-height:28px;">' + p.moment + '</div>'
      +   '<a href="' + p.url + '" style="text-decoration:none;color:#3f3150;">'
      +     '<img src="' + p.image + '" width="130" height="130" alt="' + p.name + '" style="display:block;width:100%;max-width:130px;height:auto;margin:8px auto 10px auto;border:0;">'
      +     '<div style="font-family:Georgia,serif;font-size:17px;line-height:21px;color:#3f3150;font-weight:bold;letter-spacing:.4px;">' + p.name + '</div>'
      +   '</a>'
      +   '<div style="font-family:Arial,sans-serif;font-size:12px;line-height:18px;color:#655d69;padding-top:8px;">' + p.text + '</div>'
      +   (p.principal
          ? '<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;margin-top:12px;"><tr><td align="center" style="padding:0;"><a href="' + p.url + '" style="display:inline-block;background:#5b3477;color:#ffffff;text-decoration:none;font-family:Arial,sans-serif;font-size:11px;line-height:14px;font-weight:bold;letter-spacing:.5px;padding:10px 11px;border-radius:18px;">CONHEÇA FOCAR</a></td></tr></table>'
          : '')
      + '</td>';
  }

  var productHtml = products.map(productCell).join('');

  var html = ''
  + '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1.0">'
  + '<style>'
  + '@media only screen and (max-width:920px){'
  + '.stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}'
  + '.stackgap{display:block!important;width:100%!important;max-width:100%!important;height:12px!important;box-sizing:border-box!important;}'
  + '.product-cell{padding:8px 24px 24px 24px!important;}'
  + '.menu-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:5px 12px!important;}'
  + '.benefit-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:9px 22px!important;}'
  + '.footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:12px 24px!important;text-align:center!important;}'
  + '.cta-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:12px 24px!important;text-align:center!important;}'
  + '.banner-desktop{display:none!important;max-height:0!important;overflow:hidden!important;}'
  + '.banner-mobile{display:block!important;max-height:none!important;width:100%!important;height:auto!important;}'
  + '.mobile-pad{padding-left:20px!important;padding-right:20px!important;}'
  + '.section-title{font-size:26px!important;line-height:31px!important;}'
  + '}'
  + '</style></head>'
  + '<body style="margin:0;padding:0;background:#eee9f1;">'

  // Envelope principal: 100% fluido + max-width 900.
  + '<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;table-layout:fixed;background:#eee9f1;margin:0;padding:0;">'
  + '<tr><td align="center" style="padding:0;">'
  + '<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;max-width:900px;table-layout:fixed;margin:0 auto;background:#ffffff;">'

  // 1. Preheader
  + '<tr><td style="padding:0;background:#4d2e62;">'
  + '<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;table-layout:fixed;">'
  + '<tr>'
  + '<td class="stack100" style="width:50%;padding:9px 20px;font-family:Arial,sans-serif;font-size:11px;line-height:15px;color:#ffffff;box-sizing:border-box;">FOCO HOJE, CONQUISTA AMANHÃ.</td>'
  + '<td class="stack100" style="width:50%;padding:9px 20px;font-family:Arial,sans-serif;font-size:10px;line-height:15px;color:#e9dfef;text-align:right;box-sizing:border-box;">Essência do Brasil</td>'
  + '</tr></table></td></tr>'

  // 2. Cabeçalho
  + '<tr><td align="center" style="padding:25px 20px 15px 20px;background:#fbf9f6;">'
  + '<a href="' + URLS.home + '" style="text-decoration:none;color:#51355f;">'
  + '<div style="font-family:Georgia,serif;font-size:29px;line-height:34px;letter-spacing:4px;color:#51355f;">ESSÊNCIA</div>'
  + '<div style="font-family:Arial,sans-serif;font-size:10px;line-height:14px;letter-spacing:5px;color:#8b7196;">DO BRASIL</div>'
  + '</a></td></tr>'

  // 3. Navegação — 6 colunas
  + '<tr><td style="padding:0 12px 15px 12px;background:#fbf9f6;">'
  + '<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;table-layout:fixed;">'
  + '<tr>'
  + '<td class="menu-cell" style="width:16.66%;padding:8px 4px;text-align:center;"><a href="' + URLS.perfumesMasculinos + '" style="font-family:Arial,sans-serif;font-size:10px;line-height:14px;color:#4f4653;text-decoration:none;">PERFUMES MASC.</a></td>'
  + '<td class="menu-cell" style="width:16.66%;padding:8px 4px;text-align:center;"><a href="' + URLS.perfumesFemininos + '" style="font-family:Arial,sans-serif;font-size:10px;line-height:14px;color:#4f4653;text-decoration:none;">PERFUMES FEM.</a></td>'
  + '<td class="menu-cell" style="width:16.66%;padding:8px 4px;text-align:center;"><a href="' + URLS.oleosEssenciais + '" style="font-family:Arial,sans-serif;font-size:10px;line-height:14px;color:#4f4653;text-decoration:none;">ÓLEOS ESSENCIAIS</a></td>'
  + '<td class="menu-cell" style="width:16.66%;padding:8px 4px;text-align:center;"><a href="' + URLS.essencias + '" style="font-family:Arial,sans-serif;font-size:10px;line-height:14px;color:#4f4653;text-decoration:none;">ESSÊNCIAS</a></td>'
  + '<td class="menu-cell" style="width:16.66%;padding:8px 4px;text-align:center;"><a href="' + URLS.kits + '" style="font-family:Arial,sans-serif;font-size:10px;line-height:14px;color:#4f4653;text-decoration:none;">KITS</a></td>'
  + '<td class="menu-cell" style="width:16.66%;padding:8px 4px;text-align:center;"><a href="' + URLS.colecoes + '" style="font-family:Arial,sans-serif;font-size:10px;line-height:14px;color:#4f4653;text-decoration:none;">COLEÇÕES</a></td>'
  + '</tr></table></td></tr>'

  // 4. Hero — duas imagens públicas, desktop/mobile
  + '<tr><td style="padding:0;background:#f6f0f5;">'
  + '<a href="' + URLS.focar + '" style="display:block;text-decoration:none;">'
  + '<img src="' + URLS.heroDesktop + '" class="banner-desktop" width="900" height="506" alt="Faltam 61 dias para o ENEM — 6 momentos para a rotina de estudos" style="display:block;width:100%;max-width:100%;height:auto;border:0;">'
  + '<img src="' + URLS.heroMobile + '" class="banner-mobile" width="600" height="900" alt="Faltam 61 dias para o ENEM — 6 momentos para a rotina de estudos" style="display:none;width:100%;max-width:100%;height:auto;border:0;">'
  + '</a>'
  + '</td></tr>'

  // 5. Introdução
  + '<tr><td class="mobile-pad" align="center" style="padding:35px 35px 25px 35px;background:#f3edf6;">'
  + '<div class="section-title" style="font-family:Georgia,serif;font-size:31px;line-height:37px;color:#503663;font-weight:bold;">6 MOMENTOS PARA A SUA ROTINA</div>'
  + '<div style="font-family:Arial,sans-serif;font-size:14px;line-height:22px;color:#6d6272;padding-top:8px;">Óleos essenciais para acompanhar diferentes momentos da sua jornada.</div>'
  + '<div style="font-family:Georgia,serif;font-size:18px;line-height:24px;color:#72538f;font-weight:bold;padding-top:13px;">61 dias. 6 momentos. 1 objetivo.</div>'
  + '</td></tr>'

  // 6. Vitrine — 6 colunas desktop, stack mobile
  + '<tr><td style="padding:0 12px 18px 12px;background:#f3edf6;">'
  + '<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;table-layout:fixed;">'
  + '<tr>' + productHtml + '</tr>'
  + '</table></td></tr>'

  // 7. Faixa de fechamento — 3 blocos; ícones CID
  + '<tr><td style="padding:12px 24px 30px 24px;background:#f3edf6;">'
  + '<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;table-layout:fixed;background:#e8def0;border-radius:14px;">'
  + '<tr>'
  + '<td class="cta-col" valign="middle" style="width:33.33%;padding:18px 16px;box-sizing:border-box;text-align:left;">'
  + '<img src="https://i.ibb.co/jqsh7hz/icone-presente.png" width="54" height="54" alt="" style="display:block;width:54px;height:54px;max-width:100%;margin:0 auto 9px auto;border:0;">'
  + '<div style="font-family:Georgia,serif;font-size:17px;line-height:21px;color:#503663;font-weight:bold;text-align:center;">Você também faz parte do seu plano de estudos.</div>'
  + '<div style="font-family:Arial,sans-serif;font-size:11px;line-height:17px;color:#675d6c;text-align:center;padding-top:5px;">Pausas, rotina e descanso também têm seu lugar nesses 61 dias.</div>'
  + '</td>'
  + '<td class="cta-col" valign="middle" style="width:33.33%;padding:18px 16px;box-sizing:border-box;text-align:center;border-left:1px solid #d5c7df;border-right:1px solid #d5c7df;">'
  + '<img src="https://i.ibb.co/FbXKcQmM/icone-cerebro.png" width="54" height="54" alt="" style="display:block;width:54px;height:54px;max-width:100%;margin:0 auto 9px auto;border:0;">'
  + '<div style="font-family:Arial,sans-serif;font-size:17px;line-height:22px;color:#503663;font-weight:bold;">61 DIAS · 6 MOMENTOS · 1 OBJETIVO</div>'
  + '<div style="font-family:Arial,sans-serif;font-size:12px;line-height:17px;color:#675d6c;padding-top:5px;">Um dia de cada vez.</div>'
  + '</td>'
  + '<td class="cta-col" valign="middle" style="width:33.33%;padding:18px 16px;box-sizing:border-box;text-align:center;">'
  + '<a href="' + URLS.oleosEssenciais + '" style="display:inline-block;background:#56356d;color:#ffffff;text-decoration:none;font-family:Arial,sans-serif;font-size:12px;line-height:16px;font-weight:bold;padding:13px 18px;border-radius:22px;">CONHEÇA OS 6 MOMENTOS</a>'
  + '</td>'
  + '</tr></table></td></tr>'

  // 8. Benefícios — 6 colunas
  + '<tr><td style="padding:20px 10px;background:#fbfaf8;border-top:1px solid #eee7ef;">'
  + '<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;table-layout:fixed;">'
  + '<tr>'
  + ['INGREDIENTES SELECIONADOS','ÓLEOS ESSENCIAIS','BLENDS AROMÁTICOS','PRONTO PARA USO','PRODUÇÃO CUIDADOSA','ATENDIMENTO ESPECIALIZADO'].map(function(x){
      return '<td class="benefit-cell" valign="top" style="width:16.66%;padding:7px 6px;box-sizing:border-box;text-align:center;font-family:Arial,sans-serif;font-size:10px;line-height:15px;color:#5f5266;font-weight:bold;">' + x + '</td>';
    }).join('')
  + '</tr></table></td></tr>'

  // 9. Rodapé — 4 colunas
  + '<tr><td style="padding:22px 12px;background:#4d2e62;">'
  + '<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;table-layout:fixed;">'
  + '<tr>'
  + '<td class="footer-col" valign="top" style="width:25%;padding:10px 12px;box-sizing:border-box;color:#ffffff;">'
  + '<div style="font-family:Georgia,serif;font-size:18px;line-height:22px;letter-spacing:1px;">ESSÊNCIA DO BRASIL</div>'
  + '<div style="font-family:Arial,sans-serif;font-size:11px;line-height:17px;color:#dfd1e5;padding-top:7px;">A natureza inspira.<br>A essência transforma.</div>'
  + '</td>'
  + '<td class="footer-col" valign="top" style="width:25%;padding:10px 12px;box-sizing:border-box;color:#ffffff;">'
  + '<div style="font-family:Arial,sans-serif;font-size:11px;line-height:16px;font-weight:bold;">ATENDIMENTO</div>'
  + '<div style="font-family:Arial,sans-serif;font-size:10px;line-height:17px;color:#dfd1e5;padding-top:6px;">Acesse nosso site para falar com a equipe e consultar informações sobre pedidos.</div>'
  + '</td>'
  + '<td class="footer-col" valign="top" style="width:25%;padding:10px 12px;box-sizing:border-box;color:#ffffff;">'
  + '<div style="font-family:Arial,sans-serif;font-size:11px;line-height:16px;font-weight:bold;">NAVEGUE</div>'
  + '<div style="font-family:Arial,sans-serif;font-size:10px;line-height:18px;padding-top:6px;">'
  + '<a href="' + URLS.perfumesFemininos + '" style="color:#dfd1e5;text-decoration:none;">Perfumes</a> • '
  + '<a href="' + URLS.oleosEssenciais + '" style="color:#dfd1e5;text-decoration:none;">Óleos Essenciais</a> • '
  + '<a href="' + URLS.essencias + '" style="color:#dfd1e5;text-decoration:none;">Essências</a> • '
  + '<a href="' + URLS.kits + '" style="color:#dfd1e5;text-decoration:none;">Kits</a>'
  + '</div></td>'
  + '<td class="footer-col" valign="top" style="width:25%;padding:10px 12px;box-sizing:border-box;color:#ffffff;">'
  + '<div style="font-family:Arial,sans-serif;font-size:11px;line-height:16px;font-weight:bold;">ESSÊNCIA DO BRASIL</div>'
  + '<div style="font-family:Arial,sans-serif;font-size:10px;line-height:17px;color:#dfd1e5;padding-top:6px;">Perfumaria natural, óleos essenciais, essências e cuidados aromáticos.</div>'
  + '</td>'
  + '</tr></table></td></tr>'

  // 10. Descadastro
  + '<tr><td align="center" style="padding:17px 25px;background:#e9dfef;font-family:Arial,sans-serif;font-size:9px;line-height:14px;color:#6d6072;">'
  + 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.'
  + '</td></tr>'

  + '</table></td></tr></table>'
  + '</body></html>';

  return {
    subject: subject,
    html: html
  };
}

function validarTemplateEnem61Dias() {
  var t = criarTemplateEnem61Dias_();
  var html = t.html;

  function exigir(condicao, mensagem) {
    if (!condicao) throw new Error('Validação ENEM 61 dias: ' + mensagem);
  }
  // Ícones agora usam URLs públicas para reduzir o peso da mensagem.
  exigir(html.indexOf('https://i.ibb.co/jqsh7hz/icone-presente.png') !== -1, 'URL pública do ícone presente ausente.');
  exigir(html.indexOf('https://i.ibb.co/FbXKcQmM/icone-cerebro.png') !== -1, 'URL pública do ícone cérebro ausente.');
  exigir(html.indexOf('cid:') === -1, 'Não deve haver referências cid: no HTML.');

  // Nenhuma imagem como attachment.
  exigir(html.indexOf('attachments') === -1, 'O template não deve conter attachments.');

  // Regra 23: banners e produtos são https://, não cid:.
  exigir(html.indexOf('https://i.ibb.co/8gChCgjm/') !== -1, 'Banner desktop público ausente.');
  exigir(html.indexOf('https://i.ibb.co/C3sGYR3k/') !== -1, 'Banner mobile público ausente.');
  exigir((html.match(/acdn-us\.mitiendanube\.com\/stores\/006\/291\/372\/products\//g) || []).length >= 6,
         'As seis fotos públicas de produto precisam estar no HTML.');

  // Regra 24: alternância desktop/mobile.
  exigir(html.indexOf('class="banner-desktop"') !== -1, 'Classe banner-desktop ausente.');
  exigir(html.indexOf('class="banner-mobile"') !== -1, 'Classe banner-mobile ausente.');
  exigir(html.indexOf('.banner-desktop{display:none!important;') !== -1, 'Regra mobile para ocultar desktop ausente.');
  exigir(html.indexOf('.banner-mobile{display:block!important;') !== -1, 'Regra mobile para mostrar mobile ausente.');

  // Regra 12: 900 + 20 = 920.
  exigir(html.indexOf('@media only screen and (max-width:920px)') !== -1,
         'Breakpoint deve ser exatamente 920px.');

  // Regra 15: compliance literal.
  var compliance = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';
  exigir(html.indexOf(compliance) !== -1, 'Texto obrigatório de descadastro ausente ou alterado.');

  // Regra 21: nenhuma TD responsiva pode carregar atributo HTML width=.
  var tdResponsivas = html.match(/<td[^>]+class="[^"]*(?:stack100|menu-cell|benefit-cell|footer-col|cta-col)[^"]*"[^>]*>/g) || [];
  tdResponsivas.forEach(function(tag) {
    exigir(!/\swidth\s*=/.test(tag), 'TD responsiva contém atributo HTML width=: ' + tag);
  });

  // Regra 7: todas as imagens devem conter max-width.
  var imgs = html.match(/<img\b[^>]*>/g) || [];
  imgs.forEach(function(tag) {
    exigir(/max-width\s*:\s*100%/.test(tag), 'Imagem sem max-width:100%: ' + tag);
    exigir(/\swidth="/.test(tag), 'Imagem sem atributo HTML width: ' + tag);
    exigir(/\sheight="/.test(tag), 'Imagem sem atributo HTML height: ' + tag);
  });

  // Regra 6: não criar cadeias de navegação com &nbsp;.
  exigir(html.indexOf('&nbsp;•&nbsp;') === -1, 'Separadores de links não podem usar &nbsp; dos dois lados.');

  // As duas imagens do hero devem estar presentes uma única vez.
  exigir((html.match(/class="banner-desktop"/g) || []).length === 1, 'Deve haver exatamente um hero desktop.');
  exigir((html.match(/class="banner-mobile"/g) || []).length === 1, 'Deve haver exatamente um hero mobile.');

  return 'Template validado com sucesso.';
}

function enviarTesteEnem61Dias() {
  validarTemplateEnem61Dias();

  var t = criarTemplateEnem61Dias_();
  var destinatario = Session.getActiveUser().getEmail();

  if (!destinatario) {
    throw new Error('Não foi possível obter o e-mail do usuário ativo com Session.getActiveUser().getEmail().');
  }

  GmailApp.sendEmail(
    destinatario,
    t.subject,
    'Este e-mail possui uma versão HTML. Abra-o em um cliente compatível com HTML.',
    {
      htmlBody: t.html,
      name: 'Essência do Brasil'
    }
  );
}
