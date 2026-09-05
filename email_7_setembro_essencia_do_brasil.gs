const ASSUNTO_SETEMBRO_2026 = 'E se as cores do Brasil tivessem aroma?';

const URLS_SETEMBRO_2026 = {
  home: 'https://essenciadobrasil.com.br/',
  colecoes: 'https://essenciadobrasil.com.br/colecoes/',
  contato: 'https://www.essenciadobrasil.com.br/contato/',
  perfumesMasculinos: 'https://essenciadobrasil.com.br/perfumes-masculinos/',
  perfumesFemininos: 'https://essenciadobrasil.com.br/perfumes-femininos/',
  oleosEssenciais: 'https://essenciadobrasil.com.br/oleos-essenciais/',
  essencias: 'https://essenciadobrasil.com.br/essencias/',
  cremesSeruns: 'https://essenciadobrasil.com.br/seruns-e-cremes/',
  ofertas: 'https://essenciadobrasil.com.br/black-essencia-do-brasil/',
  copaiba: 'https://essenciadobrasil.com.br/produtos/perfume-masculino-copaiba-da-amazonia-100ml/',
  laranja: 'https://essenciadobrasil.com.br/produtos/perfume-spray-laranja-doce-brilhante-feminino-10ml-natural/',
  tangerina: 'https://essenciadobrasil.com.br/produtos/perfume-tangerina-radiante-masculino-100ml-natural-e-vegano/',
  limao: 'https://essenciadobrasil.com.br/produtos/perfume-limao-siciliano-radiante-feminino-50ml-natural/'
};

const FOTOS_SETEMBRO_2026 = {
  hero: 'https://i.ibb.co/chG7RS4M/Chat-GPT-Image-5-de-set-de-2026-17-00-40.png',
  copaiba: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dbbpr2j-dac4fe4ab6a04cea9917488760579331-1024-1024.webp',
  laranja: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/2rv8bnf-f949bb07dc2febdbbd17488751348202-1024-1024.webp',
  tangerina: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/dztdqhg-daedfd0af6f6f705b517488761997126-1024-1024.webp',
  limao: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/2rxihps-c2fc0fc28d3f3b0ed617488764276983-1024-1024.webp'
};

const ICONES_BASE64_SETEMBRO_2026 = {
  icoPerfume: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAeklEQVR42mNgGAWjYBTgBYyUGiBkr/kfn/y7g9cpsoNpsIcgC7UMQg8pQiE7bEKQadhmEnKikJwMw0Qvx5Grj4WaGYMWnhrNJKMOHHXgqAMHc2OBWg2CkRuCozXJqANHHTjqwFEHjjpwmNbF5I63UDpOMwpGwSgYigAA6HQfNVE7xRYAAAAASUVORK5CYII=',
  icoDrop: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAs0lEQVR42u2YwQ2AIBRDpSO4hVM4u1O4hSvoicQYYwRbRGlvHjTNK4WPXWdZaerHYWV+DwpzTJOoPRGoomVRBNvcMs2h2jV4NMegCEVrmRShijY+P6UIRbTMvRHMaBVRo1RrcylCGS2DIhTRMt+Fkh6DYjtnsQ2qlXuymKANNmMwliN100apNlZNMJfe/9fgnZhfGfn3UV0ZYFxHKePWmUnWXTmwClDNRJ1igP2XwbKsL2oD9fViIFcVv0YAAAAASUVORK5CYII=',
  icoAroma: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAq0lEQVR42u2VyxGAIAxEiSXYhVVYu1XYhS3oyQtDSDZ8hsO+o4ObRyCaEiGEDEVaA/bzeK01z3XLVEGPVC9ZaRXzFIy+BwnmRSLHFskQNLgUqh25JmDlQYJ/WB6E3sPaxmqSEumc96isdUgnVcG8SOlZNMuTF5pi7z3UOoZ0S1rl0A81Kim95KyuRiW3Hr84rVBtsIaDDEt0sKbItUpuaXGWFySEEEIIIWRpPiK7h6GXlnjdAAAAAElFTkSuQmCC',
  icoSerum: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAArUlEQVR42u2X4Q3AEBSEERPYwhRm7xTdoivoL4k0lZZ3VPTuN/I53juUoqg6ueCjCz6i1jOzb5iAUmnpfXsz7th2vayDFrFIySFENf/DQWTfgxSJBKi2YMxot2rn21FOtG7OzHz/xIAJrgT5eZvJj/kK8wQ/7IjvIHMoSczBGnXJSSkcNEmuMAg4eNQlKBRclyxGwvFFTUACEpCAK3+aej9Umx2URhk6CimKml0nV+VGJ9msyBUAAAAASUVORK5CYII=',
  icoTag: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAvklEQVR42u2X0Q2AIAxEKXECt2AKZ2cKt3AF/TIhBklLqUC8S/xRoI+jFnAOgiBobq1bONctnLX9yQoq9/6IO3UDfEKlMOk3KSS1dKkUvBaSWrlUan+3q4Gkli5xJiOF9JxgR9zpfrS5+pabKkAtyHNiEkgzwNR5jZOmgBKXhwTkgHpuifhyxxnOQQBa/ijdALlHsHmXOLd3/i4H1YXaykXJePOXmd656EfOP9GBtZWL0jEW6wBTXcIhCIIG1AWc03fDFUBtPAAAAABJRU5ErkJggg==',
  icoLeaf: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAA0klEQVR42u2WQQ7DIAwEQ37DoT/ief0Rhz4nOVWqrEDtXZxDtHtNIk8GjNk2RVGU5+Tzfh3Rb/a74aKQJcNGbb2M3rXPlgNGDNTWCwMXBrRwVwVHP4DAhQC/hSOFWHvuJrFwnmVGOhYCHMHNAK7MocDhY+bfUlkQ1uTO7DsPTG29MBahg/oXeNa1aGMsmSQrD+P0UZcFRwNamNVwNGCmORfgrPsicMgUogzeYc4NOLPogWPsQZcFZKowltOvW+wWoAyyczvFoGeuZjeOoiiKojwoJ2oVor9hM7AgAAAAAElFTkSuQmCC',
  icoSpark: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAA0klEQVR42u3Yuw2EQAwEUO90Q0BHlEdHBJQD6QkhsfaMgbuzc6y3X5s1q6j4sVjncVvncVPlw9sHXMCvBfbuU6gTenL15IQ6oWegw7Q0CfAzEYP04lxLzCIjOPchiSKjuNAp9iIZXPia6UWyOOoevEIqcPRF3TOTDM7MjPo4GycrdWcQBe50BpUlTTHY13czTbn/hmlpxxVglxpKXEYXhCycqsFA1sypkMjCqZDIxCmQyMaxSNyBY5Cull9RvlSnO/3pQ/7bmV1z62Xhb4EVFU/HDi83qCRcnlsYAAAAAElFTkSuQmCC',
  icoGift: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAhUlEQVR42u2XQQ7AEBAA6W968KM+z4968Bw9SXpYlhZpZeaG3ZjY2GAMAMBQ7NPE4F28j/fjtKUYab2GrYecNKeNhxG8iznBNC/F5PK6ljhtkCuXVlItv1uJAWjUk3tX6Vb//xa3NtiW+JrYz58ggggiiCCCCC4uqH5eZjy51n5uAQC84wITY0vjYfoB1QAAAABJRU5ErkJggg==',
  icoCare: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAhElEQVR42u3WQQqAIBBA0RnpMi66kcfrRi46Tq2EEiSzyQz+30WhT6VIhIjo1LrMm+V47i2kFVR77JwPUT8DHmE+RE3XCZXf7wYsTZwDr543BdZMUgK2QtUKVgu8O6b2/GS0vEROBm96usLWI649oeF3ECBAgAABAgQI8N9A/qiJiAZvB/W9TCXYzYCLAAAAAElFTkSuQmCC',
  icoBrazil: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAA7UlEQVR42u1YwQ3DMAgMjNAtOkVn9xTewiu0r0hulTaEO2iVclIUKYkxPsOBsyyFwklxuV3v890L8Uw6WhfLdzP2xlAdfDfx6/vRuszPPE4Kyp6FLSvzW1A01kbrsl57TnjiUZixZw2PI3Y0K6stDLscZLCHyE0ag19Lkkj2TIYZxhEb+uvspcUgPUlY2fupFEJCjdZQlk2NWjnLpkZuTyiDbCdDazGzzNFr8V+UuhShZklNOIOeRFkX5xl7ni1GuhxEniRaNtCSqahcWNlMObgfZYjREVHOxVtsshoMqrYx/8mEd85hB6VCofCMBxwar/m75HGOAAAAAElFTkSuQmCC',
  icoBottle: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAeklEQVR42mNgGAWjYBTgBYyUGiBkr/kfn/y7g9cpsoNpsIcgC7UMQg8pQiE7bEKQadhmEnKikJwMw0Qvx5Grj4WaGYMWnhrNJKMOHHXgqAMHc2OBWg2CkRuCozXJqANHHTjqwFEHjjpwmNbF5I63UDpOMwpGwSgYigAA6HQfNVE7xRYAAAAASUVORK5CYII=',
  icoSprout: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAk0lEQVR42u2WsQ3AIAwEsZUJ2IIpmJ0p2IIVSIWUJk3wE5P8NVTAyQ+GEAghZG9iTj3m1J/OP5BiFusIWq6VKp+K1CziVVVSy0jHaCksiMtgKThdwVaquI8YeQ4VdZNdC7qvoGU/VESs1/P4+lt8t/mQnK2iWIm1UgXRqNVzi5mKeNUv5b9thoIUpCAFNxEkhBAwJ+pRPoUKojFMAAAAAElFTkSuQmCC',
  icoPeople: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAz0lEQVR42u2W0Q3DIAxEg9UJukWn6OyZIltkhfarEkLx2Qa7yse9v4ByPg5Msm2EEEjLEnq+X5/++dyPFG2pMKeNlSWI0unnfuNXY7MpS1Y6fbGrwrMpi9fcuR8NpVGl4zqDVjpjIa2oRye9ScY0tPNX2sUoHbRFo2FPyuEuRttlpeUxYaXcZsxFiqyabN7O884hLZSypiOrW7ByfrXL3TRorSrSJB4dZFJWEsn6boeumciq0cpHndkUU/5mKrm9wcfKp+2f7xJCCCGEEHJLvrgWqWN9AVznAAAAAElFTkSuQmCC',
  icoContact: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAqUlEQVR42u2WSw7AIAgFK/H+V6YrE2v8IDxjF2/WQkZQwvMQQgghEZLlkKrqMYGUpg5yU86SP+0Er24bERvlzp6kEdHdjoj1ndRS3rbXcW3OkGCvDbuSrRy0gjPJlWh7Zvd5iHc0WKrpaSlE0NLySNXcv3gkWWR6lYyOpoyYaUUCVTVYi0eiyIEOFUTLHRFEQ0EK3twFTRv16YV19fMlEvzHsUQIIYR8eQHjKGA83xEjHAAAAABJRU5ErkJggg==',
  icoSocial: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAA50lEQVR42u2YwRLDIAhEs0z+/5fppZmxHROBFdN02GNi8AkowW0rlUrPFmYYUVU9nQDALYBXUDNhMQPuamLPWBqwnSzijcj3sgoumiKyCq4HZIGU7CTvfeuxA+vKR0Yjm8FiG6yBUZisCzsbt89K9O8JjneqqkxqCAuHt3qeO55HDvUhoDX36Fo7WISw3mMB0kK8SgV4C6Anr9jN9vMepE55y0FtrUQplQQA2oqR8cu/0yE4ycfsA/4jBEypWmI7A9JqU7xGs9vUEGCbTyykt30Q72ZgICO9zX/1xY+5WVh5N1MqlQZ6AWpV1BMKdwCGAAAAAElFTkSuQmCC',
  icoPayment: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAaUlEQVR42u2WSw7AIAhEpfH+V6YXaIifOCX43taF48gArQEAAJTGokN3d5kQs08tTwZx0X199WUKcaGDWUgvsO/Yj4OE5IYvRuDxkIy2mlNhquGgotUQEvnCqp7B0wursu7+rHEAAKjOC6t+IC8h+WLiAAAAAElFTkSuQmCC'
};

function enviarTesteSetembro2026() {
  const destinatario = Session.getActiveUser().getEmail();
  if (!destinatario) {
    throw new Error('Não foi possível obter o e-mail da conta ativa com Session.getActiveUser().getEmail().');
  }

  const htmlBody = montarTemplateSetembro2026_();
  const inlineImages = montarInlineImagesSetembro2026_();
  validarTemplateSetembro2026_(htmlBody, inlineImages);

  const plainBody =
    '7 de Setembro — O Brasil também se revela pelo aroma\n\n' +
    'Quatro fragrâncias inspiradas na natureza, na luz e na identidade do Brasil.\n\n' +
    'Conheça a seleção em: ' + URLS_SETEMBRO_2026.colecoes + '\n\n' +
    'Você recebeu este e-mail porque está em nossa lista de relacionamento. ' +
    'Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';

  GmailApp.sendEmail(destinatario, ASSUNTO_SETEMBRO_2026, plainBody, {
    htmlBody: htmlBody,
    inlineImages: inlineImages,
    name: 'Essência do Brasil'
  });
}

function validarTemplateSetembro2026() {
  const htmlBody = montarTemplateSetembro2026_();
  const inlineImages = montarInlineImagesSetembro2026_();
  validarTemplateSetembro2026_(htmlBody, inlineImages);
  Logger.log('Template Setembro 2026 validado com sucesso.');
}

function montarInlineImagesSetembro2026_() {
  const inlineImages = {};
  Object.keys(ICONES_BASE64_SETEMBRO_2026).forEach(function(chave) {
    inlineImages[chave] = Utilities.newBlob(
      Utilities.base64Decode(ICONES_BASE64_SETEMBRO_2026[chave]),
      'image/png',
      chave + '.png'
    );
  });
  return inlineImages;
}

function montarTemplateSetembro2026_() {
  const U = URLS_SETEMBRO_2026;
  const F = FOTOS_SETEMBRO_2026;

  return `<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @media only screen and (max-width:920px) {
      .stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
      .menu-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:9px 18px!important;text-align:left!important;}
      .benefit-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:12px 18px!important;}
      .institution-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:16px 22px!important;border-left:0!important;border-top:1px solid #d9ccb4!important;}
      .institution-main{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:22px!important;}
      .footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:18px 24px!important;border-left:0!important;border-top:1px solid #4a6a58!important;text-align:left!important;}
      .hero-copy{width:62%!important;max-width:62%!important;box-sizing:border-box!important;padding:34px 24px 32px!important;background-color:#f7f1e7!important;}
      .hero-empty{width:38%!important;max-width:38%!important;}
      .hero-eyebrow{font-size:15px!important;line-height:19px!important;color:#123f29!important;}
      .hero-title{font-size:28px!important;line-height:32px!important;color:#123f29!important;}
      .hero-body{font-size:15px!important;line-height:22px!important;color:#244937!important;}
      .hero-cta{font-size:13px!important;line-height:17px!important;}
      .section-title{font-size:22px!important;line-height:28px!important;}
      .brand-title{font-size:29px!important;line-height:34px!important;letter-spacing:6px!important;}
      .footer-brand{font-size:22px!important;line-height:28px!important;letter-spacing:4px!important;}
      .product-img{width:220px!important;max-width:72%!important;height:auto!important;}
      .mobile-center{text-align:center!important;}
      .hide-mobile{display:none!important;}
      .unsubscribe-main{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:14px 18px!important;}
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#eee7da;font-family:Arial,Helvetica,sans-serif;color:#18251e;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    Uma seleção especial com fragrâncias naturais inspiradas na energia, na luz e na natureza do Brasil.
  </div>

  <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#eee7da;">
    <tr>
      <td align="center" style="padding:0;margin:0;">

        <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:900px;table-layout:fixed;border-collapse:collapse;background-color:#fffaf2;margin:0 auto;">

          <!-- 1. Faixa superior / preheader visível -->
          <tr>
            <td style="padding:0;background-color:#0f432b;">
              <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
                <tr>
                  <td width="50%" style="width:50%;padding:12px 22px;color:#ffffff;font-size:13px;line-height:18px;letter-spacing:.3px;text-align:left;">
                    NATUREZA QUE INSPIRA. ORGULHO QUE NOS UNE.
                  </td>
                  <td width="50%" style="width:50%;padding:12px 22px;color:#ffffff;font-size:12px;line-height:18px;text-align:right;">
                    Não consegue ver este e-mail? <a href="${U.home}" style="color:#f0c85b;text-decoration:underline;">Visite nossa loja</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 2. Cabeçalho com logotipo -->
          <tr>
            <td style="padding:22px 24px 16px;background-color:#ffffff;text-align:center;">
              <img src="cid:icoLeaf" width="30" height="30" alt="" style="display:block;margin:0 auto 6px;max-width:100%;border:0;">
              <div class="brand-title" style="font-family:Georgia,'Times New Roman',serif;font-size:34px;line-height:39px;letter-spacing:9px;color:#111111;">ESSÊNCIA</div>
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:20px;letter-spacing:5px;color:#222222;">— DO BRASIL —</div>
            </td>
          </tr>

          <!-- 3. Menu de navegação: 6 colunas -->
          <tr>
            <td style="padding:0;background-color:#ffffff;border-top:1px solid #eee6d7;border-bottom:1px solid #e4dac7;">
              <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
                <tr>
                  <td class="menu-cell" style="width:16.66%;padding:13px 5px;text-align:center;vertical-align:middle;">
                    <a href="${U.perfumesMasculinos}" style="color:#111111;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;">
                      <img src="cid:icoPerfume" width="22" height="22" alt="" style="display:block;margin:0 auto 5px;max-width:100%;border:0;">PERFUMES<br>MASCULINOS
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:13px 5px;text-align:center;vertical-align:middle;border-left:1px solid #eadfc9;">
                    <a href="${U.perfumesFemininos}" style="color:#111111;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;">
                      <img src="cid:icoPerfume" width="22" height="22" alt="" style="display:block;margin:0 auto 5px;max-width:100%;border:0;">PERFUMES<br>FEMININOS
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:13px 5px;text-align:center;vertical-align:middle;border-left:1px solid #eadfc9;">
                    <a href="${U.oleosEssenciais}" style="color:#111111;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;">
                      <img src="cid:icoDrop" width="22" height="22" alt="" style="display:block;margin:0 auto 5px;max-width:100%;border:0;">ÓLEOS<br>ESSENCIAIS
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:13px 5px;text-align:center;vertical-align:middle;border-left:1px solid #eadfc9;">
                    <a href="${U.essencias}" style="color:#111111;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;">
                      <img src="cid:icoAroma" width="22" height="22" alt="" style="display:block;margin:0 auto 5px;max-width:100%;border:0;">ESSÊNCIAS
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:13px 5px;text-align:center;vertical-align:middle;border-left:1px solid #eadfc9;">
                    <a href="${U.cremesSeruns}" style="color:#111111;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;">
                      <img src="cid:icoSerum" width="22" height="22" alt="" style="display:block;margin:0 auto 5px;max-width:100%;border:0;">CREMES E<br>SÉRUNS
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:13px 5px;text-align:center;vertical-align:middle;border-left:1px solid #eadfc9;">
                    <a href="${U.ofertas}" style="color:#111111;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;">
                      <img src="cid:icoTag" width="22" height="22" alt="" style="display:block;margin:0 auto 5px;max-width:100%;border:0;">OFERTAS
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 4. Hero principal -->
          <tr>
            <td background="${F.hero}" style="padding:0;background-color:#f7f1e7;background-image:url('${F.hero}');background-repeat:no-repeat;background-position:center center;background-size:cover;">
              <!--[if gte mso 9]>
              <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:900px;height:530px;">
                <v:fill type="frame" src="${F.hero}" color="#f7f1e7" />
                <v:textbox inset="0,0,0,0">
              <![endif]-->
              <table width="100%" data-layout="fluid-exception" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">
                <tr>
                  <td class="hero-copy" style="width:44%;padding:48px 30px 44px 38px;vertical-align:middle;background-color:#f7f1e7;">
                    <div class="hero-eyebrow" style="font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:22px;color:#0f432b;font-style:italic;margin-bottom:10px;">7 DE SETEMBRO</div>
                    <div class="hero-title" style="font-family:Georgia,'Times New Roman',serif;font-size:39px;line-height:43px;color:#0b3a25;font-weight:bold;margin-bottom:17px;">
                      O Brasil também se revela pelo aroma
                    </div>
                    <div class="hero-body" style="font-size:16px;line-height:24px;color:#253d31;margin-bottom:22px;">
                      Neste 7 de Setembro, celebramos o Brasil por aquilo que ele tem de mais inspirador: a natureza exuberante, a luminosidade dos cítricos e a riqueza de aromas que fazem parte da nossa identidade.<br><br>
                      Selecionamos 4 fragrâncias para traduzir essa essência em forma de perfume: o verde profundo da floresta, o brilho dourado dos frutos e a energia vibrante de um país que inspira todos os dias.
                    </div>
                    <a class="hero-cta" href="${U.colecoes}" style="display:inline-block;background-color:#0f432b;color:#ffffff;text-decoration:none;font-size:14px;line-height:18px;font-weight:bold;padding:13px 18px;border-radius:4px;">CELEBRE NOSSA ESSÊNCIA</a>
                  </td>
                  <td class="hero-empty" style="width:56%;padding:0;vertical-align:middle;">&nbsp;</td>
                </tr>
              </table>
              <!--[if gte mso 9]>
                </v:textbox>
              </v:rect>
              <![endif]-->
            </td>
          </tr>

          <!-- 5. Faixa de benefícios: 4 colunas -->
          <tr>
            <td style="padding:0 18px 12px;background-color:#fffaf2;">
              <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;background-color:#0f432b;">
                <tr>
                  <td class="benefit-cell" style="width:25%;padding:15px 12px;vertical-align:middle;text-align:center;color:#ffffff;">
                    <img src="cid:icoLeaf" width="28" height="28" alt="" style="display:inline-block;vertical-align:middle;max-width:100%;border:0;margin-right:7px;">
                    <span style="font-size:11px;line-height:16px;font-weight:bold;">FEITO COM NATUREZA<br>E PROPÓSITO</span>
                  </td>
                  <td class="benefit-cell" style="width:25%;padding:15px 12px;vertical-align:middle;text-align:center;color:#ffffff;border-left:1px solid #436653;">
                    <img src="cid:icoSpark" width="28" height="28" alt="" style="display:inline-block;vertical-align:middle;max-width:100%;border:0;margin-right:7px;">
                    <span style="font-size:11px;line-height:16px;font-weight:bold;">FRAGRÂNCIAS NATURAIS<br>E SOFISTICADAS</span>
                  </td>
                  <td class="benefit-cell" style="width:25%;padding:15px 12px;vertical-align:middle;text-align:center;color:#ffffff;border-left:1px solid #436653;">
                    <img src="cid:icoGift" width="28" height="28" alt="" style="display:inline-block;vertical-align:middle;max-width:100%;border:0;margin-right:7px;">
                    <span style="font-size:11px;line-height:16px;font-weight:bold;">COMPRE 4<br>E PAGUE 3</span>
                  </td>
                  <td class="benefit-cell" style="width:25%;padding:15px 12px;vertical-align:middle;text-align:center;color:#ffffff;border-left:1px solid #436653;">
                    <img src="cid:icoCare" width="28" height="28" alt="" style="display:inline-block;vertical-align:middle;max-width:100%;border:0;margin-right:7px;">
                    <span style="font-size:11px;line-height:16px;font-weight:bold;">EMBALAMOS COM<br>TODO CUIDADO</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 6. Título da vitrine -->
          <tr>
            <td style="padding:10px 24px 8px;background-color:#fffaf2;text-align:center;">
              <div class="section-title" style="font-family:Georgia,'Times New Roman',serif;font-size:25px;line-height:31px;color:#173e2c;font-weight:bold;">
                4 fragrâncias para celebrar a essência do Brasil
              </div>
            </td>
          </tr>

          <!-- 7. Grade de produtos: 4 colunas -->
          <tr>
            <td style="padding:0 18px 16px;background-color:#fffaf2;">
              <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
                <tr>
                  <td class="stack100" style="width:25%;padding:7px;vertical-align:top;box-sizing:border-box;">
                    <div style="background-color:#fffdf8;border:1px solid #eadfcf;padding:12px;text-align:center;min-height:395px;">
                      <a href="${U.copaiba}" style="text-decoration:none;color:#173e2c;">
                        <img class="product-img" src="${F.copaiba}" width="180" height="180" alt="Perfume Copaíba Amazônica Masculino 100ml" style="display:block;width:100%;height:auto;max-width:100%;border:0;margin:0 auto 8px;">
                      </a>
                      <div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:20px;color:#1a2c22;font-weight:bold;margin-bottom:8px;">COPAÍBA AMAZÔNICA</div>
                      <div style="font-size:12px;line-height:18px;color:#333333;min-height:88px;">A força verde da floresta em uma fragrância marcante, fresca e amadeirada. Uma criação com copaíba e cedro no centro da composição.</div>
                      <a href="${U.copaiba}" style="display:inline-block;margin-top:10px;background-color:#0f432b;color:#ffffff;text-decoration:none;font-size:11px;line-height:15px;font-weight:bold;padding:10px 18px;border-radius:3px;">EU QUERO</a>
                    </div>
                  </td>
                  <td class="stack100" style="width:25%;padding:7px;vertical-align:top;box-sizing:border-box;">
                    <div style="background-color:#fffdf8;border:1px solid #eadfcf;padding:12px;text-align:center;min-height:395px;">
                      <a href="${U.laranja}" style="text-decoration:none;color:#173e2c;">
                        <img class="product-img" src="${F.laranja}" width="180" height="180" alt="Perfume Spray Laranja Doce Brilhante Feminino 10ml" style="display:block;width:100%;height:auto;max-width:100%;border:0;margin:0 auto 8px;">
                      </a>
                      <div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:20px;color:#1a2c22;font-weight:bold;margin-bottom:8px;">LARANJA DOCE BRILHANTE</div>
                      <div style="font-size:12px;line-height:18px;color:#333333;min-height:88px;">Uma fragrância radiante, fresca e alegre, com a luminosidade natural da laranja doce. Leveza, energia e sofisticação no dia a dia.</div>
                      <a href="${U.laranja}" style="display:inline-block;margin-top:10px;background-color:#0f432b;color:#ffffff;text-decoration:none;font-size:11px;line-height:15px;font-weight:bold;padding:10px 18px;border-radius:3px;">EU QUERO</a>
                    </div>
                  </td>
                  <td class="stack100" style="width:25%;padding:7px;vertical-align:top;box-sizing:border-box;">
                    <div style="background-color:#fffdf8;border:1px solid #eadfcf;padding:12px;text-align:center;min-height:395px;">
                      <a href="${U.tangerina}" style="text-decoration:none;color:#173e2c;">
                        <img class="product-img" src="${F.tangerina}" width="180" height="180" alt="Perfume Tangerina Radiante Masculino 100ml" style="display:block;width:100%;height:auto;max-width:100%;border:0;margin:0 auto 8px;">
                      </a>
                      <div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:20px;color:#1a2c22;font-weight:bold;margin-bottom:8px;">TANGERINA RADIANTE</div>
                      <div style="font-size:12px;line-height:18px;color:#333333;min-height:88px;">Vibrante e energética, traduz o brilho cítrico da tangerina em uma experiência luminosa e elegante, com frescor e personalidade.</div>
                      <a href="${U.tangerina}" style="display:inline-block;margin-top:10px;background-color:#0f432b;color:#ffffff;text-decoration:none;font-size:11px;line-height:15px;font-weight:bold;padding:10px 18px;border-radius:3px;">EU QUERO</a>
                    </div>
                  </td>
                  <td class="stack100" style="width:25%;padding:7px;vertical-align:top;box-sizing:border-box;">
                    <div style="background-color:#fffdf8;border:1px solid #eadfcf;padding:12px;text-align:center;min-height:395px;">
                      <a href="${U.limao}" style="text-decoration:none;color:#173e2c;">
                        <img class="product-img" src="${F.limao}" width="180" height="180" alt="Perfume Limão Siciliano Radiante Feminino 50ml" style="display:block;width:100%;height:auto;max-width:100%;border:0;margin:0 auto 8px;">
                      </a>
                      <div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:20px;color:#1a2c22;font-weight:bold;margin-bottom:8px;">LIMÃO SICILIANO RADIANTE</div>
                      <div style="font-size:12px;line-height:18px;color:#333333;min-height:88px;">Luminosa, fresca e sofisticada, revela a vivacidade do limão siciliano com um frescor elegante que ilumina os sentidos.</div>
                      <a href="${U.limao}" style="display:inline-block;margin-top:10px;background-color:#0f432b;color:#ffffff;text-decoration:none;font-size:11px;line-height:15px;font-weight:bold;padding:10px 18px;border-radius:3px;">EU QUERO</a>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 8. Banner institucional secundário em HTML: 4 colunas visuais -->
          <tr>
            <td style="padding:0 26px 16px;background-color:#fffaf2;">
              <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;border:1px solid #d9ccb4;background-color:#fbf7ef;">
                <tr>
                  <td class="institution-main" style="width:40%;padding:18px 20px;vertical-align:middle;">
                    <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
                      <tr>
                        <td width="28%" style="width:28%;padding:0 10px 0 0;vertical-align:middle;text-align:center;">
                          <img src="cid:icoBrazil" width="54" height="54" alt="" style="display:block;margin:0 auto;max-width:100%;border:0;">
                        </td>
                        <td width="72%" style="width:72%;padding:0;vertical-align:middle;">
                          <div style="font-family:Georgia,'Times New Roman',serif;font-size:17px;line-height:21px;color:#173e2c;font-weight:bold;margin-bottom:5px;">SOMOS FEITOS DE NATUREZA, LUZ E IDENTIDADE</div>
                          <div style="font-size:11px;line-height:16px;color:#263a2f;">Neste 7 de Setembro, celebramos um Brasil que inspira pela biodiversidade, pela energia e pela capacidade de transformar natureza em beleza, cuidado e expressão.</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td class="institution-cell" style="width:20%;padding:18px 10px;vertical-align:middle;text-align:center;border-left:1px solid #d9ccb4;">
                    <img src="cid:icoBottle" width="34" height="34" alt="" style="display:block;margin:0 auto 7px;max-width:100%;border:0;">
                    <div style="font-size:10px;line-height:14px;color:#1d3026;font-weight:bold;">PERFUMARIA NATURAL<br>COM IDENTIDADE</div>
                  </td>
                  <td class="institution-cell" style="width:20%;padding:18px 10px;vertical-align:middle;text-align:center;border-left:1px solid #d9ccb4;">
                    <img src="cid:icoSprout" width="34" height="34" alt="" style="display:block;margin:0 auto 7px;max-width:100%;border:0;">
                    <div style="font-size:10px;line-height:14px;color:#1d3026;font-weight:bold;">SOFISTICAÇÃO INSPIRADA<br>NA NATUREZA</div>
                  </td>
                  <td class="institution-cell" style="width:20%;padding:18px 10px;vertical-align:middle;text-align:center;border-left:1px solid #d9ccb4;">
                    <img src="cid:icoPeople" width="34" height="34" alt="" style="display:block;margin:0 auto 7px;max-width:100%;border:0;">
                    <div style="font-size:10px;line-height:14px;color:#1d3026;font-weight:bold;">CONEXÃO COM<br>O QUE É NOSSO</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 9. Rodapé principal: 4 colunas -->
          <tr>
            <td style="padding:0;background-color:#0f432b;">
              <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
                <tr>
                  <td class="footer-col" style="width:25%;padding:22px 18px;vertical-align:top;text-align:center;color:#ffffff;">
                    <img src="cid:icoLeaf" width="28" height="28" alt="" style="display:block;margin:0 auto 8px;max-width:100%;border:0;">
                    <div class="footer-brand" style="font-family:Georgia,'Times New Roman',serif;font-size:20px;line-height:25px;letter-spacing:3px;">ESSÊNCIA</div>
                    <div style="font-family:Georgia,'Times New Roman',serif;font-size:11px;line-height:16px;letter-spacing:2px;">— DO BRASIL —</div>
                    <div style="font-size:11px;line-height:16px;margin-top:8px;">A natureza inspira.<br>A essência transforma.</div>
                  </td>
                  <td class="footer-col" style="width:25%;padding:22px 18px;vertical-align:top;color:#ffffff;border-left:1px solid #4a6a58;">
                    <img src="cid:icoContact" width="26" height="26" alt="" style="display:block;margin-bottom:7px;max-width:100%;border:0;">
                    <div style="font-size:11px;line-height:16px;font-weight:bold;margin-bottom:7px;">ATENDIMENTO</div>
                    <div style="font-size:11px;line-height:17px;"><a href="${U.contato}" style="color:#ffffff;text-decoration:underline;">Fale conosco</a></div>
                    <div style="font-size:10px;line-height:16px;margin-top:5px;">essenciadobrasil.com.br</div>
                  </td>
                  <td class="footer-col" style="width:25%;padding:22px 18px;vertical-align:top;color:#ffffff;border-left:1px solid #4a6a58;">
                    <img src="cid:icoSocial" width="26" height="26" alt="" style="display:block;margin-bottom:7px;max-width:100%;border:0;">
                    <div style="font-size:11px;line-height:16px;font-weight:bold;margin-bottom:7px;">SIGA-NOS</div>
                    <div style="font-size:11px;line-height:17px;">Instagram</div>
                    <div style="font-size:10px;line-height:16px;margin-top:5px;">Essência do Brasil</div>
                  </td>
                  <td class="footer-col" style="width:25%;padding:22px 18px;vertical-align:top;color:#ffffff;border-left:1px solid #4a6a58;">
                    <img src="cid:icoPayment" width="26" height="26" alt="" style="display:block;margin-bottom:7px;max-width:100%;border:0;">
                    <div style="font-size:11px;line-height:16px;font-weight:bold;margin-bottom:7px;">FORMAS DE PAGAMENTO</div>
                    <div style="font-size:10px;line-height:17px;">PIX · VISA · MASTERCARD<br>AMEX · BOLETO</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 10. Faixa final de descadastro: 3 áreas -->
          <tr>
            <td style="padding:0;background-color:#e1b43c;">
              <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
                <tr>
                  <td class="hide-mobile" width="12%" style="width:12%;padding:10px;text-align:center;vertical-align:middle;">
                    <img src="cid:icoLeaf" width="24" height="24" alt="" style="display:block;margin:0 auto;max-width:100%;border:0;">
                  </td>
                  <td class="unsubscribe-main" style="width:76%;padding:12px 18px;text-align:center;vertical-align:middle;font-size:10px;line-height:15px;color:#183425;">
                    Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.
                  </td>
                  <td class="hide-mobile" width="12%" style="width:12%;padding:10px;text-align:center;vertical-align:middle;">
                    <img src="cid:icoLeaf" width="24" height="24" alt="" style="display:block;margin:0 auto;max-width:100%;border:0;">
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function validarTemplateSetembro2026_(htmlBody, inlineImages) {
  const erros = [];

  if (ASSUNTO_SETEMBRO_2026 !== 'E se as cores do Brasil tivessem aroma?') {
    erros.push('O assunto foi alterado.');
  }

  const compliance = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';
  if (htmlBody.indexOf(compliance) === -1) {
    erros.push('O texto obrigatório de descadastro não está idêntico ao padrão aprovado.');
  }

  if (/attachments\s*:/i.test(htmlBody)) {
    erros.push('Foi encontrada referência a attachments no HTML.');
  }

  Object.keys(FOTOS_SETEMBRO_2026).forEach(function(chave) {
    const url = FOTOS_SETEMBRO_2026[chave];
    if (!/^https:\/\//i.test(url)) {
      erros.push('A foto "' + chave + '" não usa URL pública HTTPS.');
    }
    if (url.indexOf('cid:') !== -1) {
      erros.push('A foto "' + chave + '" não pode usar cid:.');
    }
  });

  const hrefs = [];
  const hrefRegex = /href="([^"]+)"/g;
  let hrefMatch;
  while ((hrefMatch = hrefRegex.exec(htmlBody)) !== null) {
    hrefs.push(hrefMatch[1]);
  }
  hrefs.forEach(function(url) {
    if (!/^https:\/\//i.test(url)) {
      erros.push('Link não HTTPS ou de preenchimento detectado: ' + url);
    }
  });

  if (/href="#"/i.test(htmlBody) || /javascript:/i.test(htmlBody)) {
    erros.push('Foi encontrado link de preenchimento ou javascript:.');
  }

  const cids = {};
  const cidRegex = /cid:([A-Za-z0-9_-]+)/g;
  let cidMatch;
  while ((cidMatch = cidRegex.exec(htmlBody)) !== null) {
    cids[cidMatch[1]] = true;
  }

  const chavesInline = Object.keys(inlineImages).sort();
  const chavesCid = Object.keys(cids).sort();

  if (JSON.stringify(chavesInline) !== JSON.stringify(chavesCid)) {
    erros.push(
      'As chaves de inlineImages e os cid: usados no HTML não são idênticos. ' +
      'inlineImages=[' + chavesInline.join(', ') + '] / cid=[' + chavesCid.join(', ') + ']'
    );
  }

  const imgs = htmlBody.match(/<img\b[^>]*>/gi) || [];
  imgs.forEach(function(tag) {
    if (!/\bwidth="[^"]+"/i.test(tag) || !/\bheight="[^"]+"/i.test(tag)) {
      erros.push('Imagem sem atributos HTML width e height: ' + tag.substring(0, 120));
    }
    if (!/max-width\s*:\s*100%/i.test(tag)) {
      erros.push('Imagem sem max-width:100%: ' + tag.substring(0, 120));
    }
  });

  const tables = htmlBody.match(/<table\b[^>]*>/gi) || [];
  tables.forEach(function(tag) {
    if (!/\bwidth="[^"]+"/i.test(tag)) {
      erros.push('Tabela sem atributo width explícito: ' + tag.substring(0, 140));
    }
    if (!/style="[^"]*\bwidth\s*:/i.test(tag)) {
      erros.push('Tabela sem width explícito no style inline: ' + tag.substring(0, 140));
    }
    const largura100 = /\bwidth="100%"/i.test(tag);
    const excecao = /data-layout="fluid-exception"/i.test(tag);
    if (largura100 && !excecao && !/table-layout\s*:\s*fixed/i.test(tag)) {
      erros.push('Tabela width=100% sem table-layout:fixed e sem exceção objetiva: ' + tag.substring(0, 140));
    }
  });

  const classesQueMudamLargura = [
    'stack100', 'menu-cell', 'benefit-cell', 'institution-cell',
    'institution-main', 'footer-col', 'hero-copy', 'hero-empty', 'unsubscribe-main'
  ];
  const tds = htmlBody.match(/<td\b[^>]*>/gi) || [];
  tds.forEach(function(tag) {
    const classe = (tag.match(/class="([^"]+)"/i) || [null, ''])[1];
    const classes = classe.split(/\s+/);
    const alvoMobile = classes.some(function(c) {
      return classesQueMudamLargura.indexOf(c) !== -1;
    });
    if (alvoMobile && /\bwidth="/i.test(tag)) {
      erros.push('TD que muda de largura no mobile contém atributo HTML width=: ' + tag.substring(0, 150));
    }
  });

  const obrigatoriasMedia = [
    '.stack100', '.menu-cell', '.benefit-cell', '.institution-cell',
    '.institution-main', '.footer-col', '.hero-copy', '.unsubscribe-main'
  ];
  obrigatoriasMedia.forEach(function(classe) {
    const inicio = htmlBody.indexOf(classe + '{');
    if (inicio === -1) {
      erros.push('Classe mobile obrigatória ausente: ' + classe);
      return;
    }
    const fim = htmlBody.indexOf('}', inicio);
    const regra = htmlBody.substring(inicio, fim + 2);
    if (/width\s*:\s*(?:100|62)%/i.test(regra) && /padding\s*:/i.test(regra) && !/box-sizing\s*:\s*border-box/i.test(regra)) {
      erros.push('Classe mobile com width e padding sem box-sizing:border-box: ' + classe);
    }
  });

  if (htmlBody.indexOf('@media only screen and (max-width:920px)') === -1) {
    erros.push('Breakpoint incorreto: para max-width 900px, o media query deve ser 920px.');
  }

  ['hero-eyebrow', 'hero-title', 'hero-body', 'hero-cta'].forEach(function(classe) {
    const idx = htmlBody.indexOf('.' + classe + '{');
    if (idx === -1) {
      erros.push('Texto do hero sem classe mobile própria: .' + classe);
      return;
    }
    const fim = htmlBody.indexOf('}', idx);
    const regra = htmlBody.substring(idx, fim + 2);
    if (!/font-size\s*:/i.test(regra) || !/line-height\s*:/i.test(regra)) {
      erros.push('Classe do hero sem font-size e line-height mobile: .' + classe);
    }
    if (!/color\s*:/i.test(regra) && classe !== 'hero-cta') {
      erros.push('Classe textual do hero sem cor mobile explícita: .' + classe);
    }
  });

  if (htmlBody.indexOf(FOTOS_SETEMBRO_2026.hero) === -1) {
    erros.push('O banner hero público não está presente no HTML.');
  }

  ['copaiba', 'laranja', 'tangerina', 'limao'].forEach(function(chave) {
    if (htmlBody.indexOf(FOTOS_SETEMBRO_2026[chave]) === -1) {
      erros.push('A foto pública do produto "' + chave + '" não está presente no HTML.');
    }
  });

  if (/seuemail@exemplo\.com|99999-9999|URL_PROVISORIA|PLACEHOLDER/i.test(htmlBody)) {
    erros.push('Foi encontrado placeholder no template.');
  }

  if (erros.length) {
    throw new Error('Falha na validação do template:\n- ' + erros.join('\n- '));
  }
}
