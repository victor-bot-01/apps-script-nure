/**
 * Essência do Brasil — Perfumes em Óleo - Sem Álcool
 * Assunto aprovado: E se a memória começasse pela pele?
 * Template preparado para GmailApp.sendEmail.
 */

function enviarTestePerfumesEmOleo() {
  var destinatario = Session.getActiveUser().getEmail();
  if (!destinatario) {
    throw new Error('Não foi possível identificar o e-mail do usuário ativo com Session.getActiveUser().getEmail().');
  }

  var template = montarTemplatePerfumesEmOleo_();
  validarTemplatePerfumesEmOleo(template);

  var opcoes = {
    htmlBody: template.html,
    inlineImages: template.inlineImages,
    name: 'Essência do Brasil'
  };

  // Regra 17: nenhuma imagem deve ser enviada como attachment.
  if (Object.prototype.hasOwnProperty.call(opcoes, 'attachments')) {
    throw new Error('Regra 17 violada: attachments não pode existir neste envio.');
  }

  GmailApp.sendEmail(
    destinatario,
    template.subject,
    template.plainText,
    opcoes
  );
}

function montarTemplatePerfumesEmOleo_() {
  var subject = 'E se a memória começasse pela pele?';

  var links = {
    home: 'https://essenciadobrasil.com.br/',
    perfumesMasculinos: 'https://essenciadobrasil.com.br/perfumes-masculinos/',
    perfumesFemininos: 'https://essenciadobrasil.com.br/perfumes-femininos/',
    oleosEssenciais: 'https://essenciadobrasil.com.br/oleos-essenciais/',
    essencias: 'https://essenciadobrasil.com.br/essencias/',
    colecoes: 'https://essenciadobrasil.com.br/colecoes/',
    ofertas: 'https://essenciadobrasil.com.br/black-essencia-do-brasil/',
    perfumesEmOleo: 'https://essenciadobrasil.com.br/colecoes/perfumes-em-oleo-sem-alcool/',
    patchouli: 'https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-01-patchouli-20ml-sem-alcool-6mjd6/',
    lavanda: 'https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-02-lavanda-20ml-sem-alcool-1y4ho/',
    capimLimao: 'https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-03-capim-limao-20ml-sem-alcool-1izak/',
    ylangYlang: 'https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-04-ylang-ylang-20ml-sem-alcool-1vdt3/',
    geranio: 'https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-05-geranio-20ml-sem-alcool-hn6y3/',
    sandalo: 'https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-06-sandalo-20ml-sem-alcool-3a884/'
  };

  var fotos = {
    hero: 'https://i.ibb.co/XkMZQmwD/Chat-GPT-Image-3-de-set-de-2026-18-59-39.png',
    historia: 'https://i.ibb.co/V0hRJSxL/Chat-GPT-Image-3-de-set-de-2026-18-59-03.png',
    patchouli: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-1d1b780c5021877f0017873248514639-1024-1024.webp',
    lavanda: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-fa6f64e1c38aa03cbc17873248536000-1024-1024.webp',
    capimLimao: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-b2fc0794e172cb497f17873248600646-1024-1024.webp',
    ylangYlang: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-b00b34d74aed021cd317873248620297-1024-1024.webp',
    geranio: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-443bed0fbcffb5d60117873248663218-1024-1024.webp',
    sandalo: 'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-bf6bc046c99bf92c5a17873248682753-1024-1024.webp'
  };

  var inlineImages = montarIconesInline_();

  var html = `<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @media only screen and (max-width:920px){
      .stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
      .mobile-pad-24{padding-left:24px!important;padding-right:24px!important;}
      .mobile-center{text-align:center!important;}
      .mobile-button{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;text-align:center!important;}
      .hero-title{font-size:34px!important;line-height:38px!important;}
      .hero-subtitle{font-size:20px!important;line-height:27px!important;}
      .hero-body{font-size:16px!important;line-height:25px!important;}
      .section-title{font-size:27px!important;line-height:33px!important;}
      .product-title{font-size:22px!important;line-height:27px!important;}
      .product-card{padding:22px!important;}
      .mobile-gap{height:18px!important;line-height:18px!important;font-size:18px!important;}
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f3efe6;font-family:Arial,Helvetica,sans-serif;color:#20251d;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#f3efe6;margin:0;padding:0;">
    <tr>
      <td align="center" style="padding:0;margin:0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:900px;table-layout:fixed;background-color:#fbf8f1;margin:0 auto;">

          <tr>
            <td style="background-color:#ead8ad;padding:10px 22px;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;letter-spacing:.35px;color:#243222;">
              COMPRE 4 E PAGUE 3 | 3% DE DESCONTO NO PIX
            </td>
          </tr>

          <tr>
            <td style="padding:22px 28px 18px 28px;background-color:#fbf8f1;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
                <tr>
                  <td class="stack100 mobile-center" style="width:25%;vertical-align:middle;padding:0 12px 0 0;">
                    <a href="${links.home}" style="text-decoration:none;color:#203121;">
                      <img src="cid:leafIcon" width="34" height="34" alt="" style="display:inline-block;border:0;outline:none;text-decoration:none;width:34px;height:34px;max-width:100%;vertical-align:middle;margin-right:8px;">
                      <span style="font-family:Georgia,'Times New Roman',serif;font-size:27px;line-height:32px;letter-spacing:3.5px;color:#203121;vertical-align:middle;">ESSÊNCIA</span><br>
                      <span style="font-family:Georgia,'Times New Roman',serif;font-size:14px;line-height:20px;letter-spacing:4px;color:#203121;margin-left:47px;">DO BRASIL</span>
                    </a>
                  </td>
                  <td class="stack100 mobile-center" style="width:25%;vertical-align:middle;text-align:center;padding:8px 6px;">
                    <img src="cid:dropIcon" width="27" height="27" alt="" style="display:block;border:0;outline:none;text-decoration:none;width:27px;height:27px;max-width:100%;margin:0 auto 7px auto;">
                    <div style="font-size:11px;line-height:15px;font-weight:bold;color:#203121;">SEM ÁLCOOL</div>
                  </td>
                  <td class="stack100 mobile-center" style="width:25%;vertical-align:middle;text-align:center;padding:8px 6px;">
                    <img src="cid:leafIcon" width="27" height="27" alt="" style="display:block;border:0;outline:none;text-decoration:none;width:27px;height:27px;max-width:100%;margin:0 auto 7px auto;">
                    <div style="font-size:11px;line-height:15px;font-weight:bold;color:#203121;">91% NATURAIS</div>
                  </td>
                  <td class="stack100 mobile-center" style="width:25%;vertical-align:middle;text-align:center;padding:8px 0 8px 6px;">
                    <img src="cid:heartIcon" width="27" height="27" alt="" style="display:block;border:0;outline:none;text-decoration:none;width:27px;height:27px;max-width:100%;margin:0 auto 7px auto;">
                    <div style="font-size:11px;line-height:15px;font-weight:bold;color:#203121;">COM VITAMINA E</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background-color:#1e3522;padding:13px 18px;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:20px;letter-spacing:.55px;">
              <a href="${links.perfumesMasculinos}" style="color:#f5e7bd;text-decoration:none;">PERFUMES MASCULINOS</a> <span style="color:#9b8751;">|</span>
              <a href="${links.perfumesFemininos}" style="color:#f5e7bd;text-decoration:none;">PERFUMES FEMININOS</a> <span style="color:#9b8751;">|</span>
              <a href="${links.oleosEssenciais}" style="color:#f5e7bd;text-decoration:none;">ÓLEOS ESSENCIAIS</a> <span style="color:#9b8751;">|</span>
              <a href="${links.essencias}" style="color:#f5e7bd;text-decoration:none;">ESSÊNCIAS</a> <span style="color:#9b8751;">|</span>
              <a href="${links.perfumesEmOleo}" style="color:#f5e7bd;text-decoration:none;">PERFUMES EM ÓLEO</a> <span style="color:#9b8751;">|</span>
              <a href="${links.ofertas}" style="color:#f5e7bd;text-decoration:none;">OFERTAS</a>
            </td>
          </tr>

          <tr>
            <td style="background-color:#eee3ce;padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
                <tr>
                  <td class="stack100 mobile-pad-24" style="width:50%;vertical-align:middle;padding:38px 28px 38px 38px;background-color:#eee3ce;">
                    <div style="font-size:12px;line-height:18px;letter-spacing:1.2px;color:#a37b2f;font-weight:bold;margin-bottom:10px;">LANÇAMENTO</div>
                    <div class="hero-title" style="font-family:Georgia,'Times New Roman',serif;font-size:44px;line-height:48px;color:#17311f;letter-spacing:.2px;margin:0 0 12px 0;">PERFUMES EM ÓLEO</div>
                    <div class="hero-subtitle" style="font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:32px;color:#a4772d;margin:0 0 20px 0;">SEM ÁLCOOL</div>
                    <div class="hero-subtitle" style="font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:29px;color:#243222;margin:0 0 15px 0;">6 composições. 6 atmosferas.<br>Uma nova forma de perfumar.</div>
                    <div class="hero-body" style="font-size:15px;line-height:24px;color:#3f463d;margin:0 0 24px 0;">Uma coleção criada para quem busca fragrância e cuidado no mesmo gesto. Com 91% de ingredientes naturais, vitamina E e base em óleos vegetais de macadâmia e jojoba.</div>
                    <a class="mobile-button" href="${links.perfumesEmOleo}" style="display:inline-block;background-color:#1e3522;color:#fff4d6;text-decoration:none;font-size:12px;line-height:16px;font-weight:bold;letter-spacing:.5px;padding:14px 21px;border-radius:3px;">CONHECER A COLEÇÃO</a>
                  </td>
                  <td class="stack100" style="width:50%;vertical-align:middle;background-color:#eee3ce;padding:0;">
                    <a href="${links.perfumesEmOleo}" style="text-decoration:none;display:block;">
                      <img src="${fotos.hero}" width="450" height="253" alt="Perfumes em Óleo - Sem Álcool" style="display:block;border:0;outline:none;text-decoration:none;width:100%;height:auto;max-width:100%;">
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background-color:#1e3522;padding:16px 14px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
                <tr>
                  <td class="stack100" style="width:25%;padding:8px 10px;text-align:center;vertical-align:middle;">
                    <img src="cid:dropIcon" width="28" height="28" alt="" style="display:block;border:0;width:28px;height:28px;max-width:100%;margin:0 auto 6px auto;">
                    <div style="font-size:11px;line-height:16px;color:#f0d68e;font-weight:bold;letter-spacing:.5px;">SEM ÁLCOOL</div>
                    <div style="font-size:11px;line-height:16px;color:#f5f1e6;">Suavidade e conforto</div>
                  </td>
                  <td class="stack100" style="width:25%;padding:8px 10px;text-align:center;vertical-align:middle;">
                    <img src="cid:leafIcon" width="28" height="28" alt="" style="display:block;border:0;width:28px;height:28px;max-width:100%;margin:0 auto 6px auto;">
                    <div style="font-size:11px;line-height:16px;color:#f0d68e;font-weight:bold;letter-spacing:.5px;">91% NATURAIS</div>
                    <div style="font-size:11px;line-height:16px;color:#f5f1e6;">Fragrância e cuidado</div>
                  </td>
                  <td class="stack100" style="width:25%;padding:8px 10px;text-align:center;vertical-align:middle;">
                    <img src="cid:heartIcon" width="28" height="28" alt="" style="display:block;border:0;width:28px;height:28px;max-width:100%;margin:0 auto 6px auto;">
                    <div style="font-size:11px;line-height:16px;color:#f0d68e;font-weight:bold;letter-spacing:.5px;">COM VITAMINA E</div>
                    <div style="font-size:11px;line-height:16px;color:#f5f1e6;">Cuidado para a pele</div>
                  </td>
                  <td class="stack100" style="width:25%;padding:8px 10px;text-align:center;vertical-align:middle;">
                    <img src="cid:giftIcon" width="28" height="28" alt="" style="display:block;border:0;width:28px;height:28px;max-width:100%;margin:0 auto 6px auto;">
                    <div style="font-size:11px;line-height:16px;color:#f0d68e;font-weight:bold;letter-spacing:.5px;">RITUAL DE PELE</div>
                    <div style="font-size:11px;line-height:16px;color:#f5f1e6;">Um rastro mais íntimo</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td class="mobile-pad-24" style="padding:32px 28px 18px 28px;background-color:#fbf8f1;text-align:center;">
              <div class="section-title" style="font-family:Georgia,'Times New Roman',serif;font-size:31px;line-height:37px;color:#233223;letter-spacing:.7px;">CONHEÇA AS 6 COMPOSIÇÕES</div>
              <div style="font-size:14px;line-height:22px;color:#6a695f;margin-top:8px;">Seis interpretações olfativas para diferentes humores, momentos e presenças.</div>
            </td>
          </tr>

          <tr>
            <td style="padding:0 22px 10px 22px;background-color:#fbf8f1;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
                <tr>
                  ${cardProduto_(links.patchouli, fotos.patchouli, 'COMPOSIÇÃO 01', 'PATCHOULI', 'Terroso, profundo e envolvente. Um patchouli de presença marcante, aquecido por âmbar doce, açafrão e madeiras cremosas.', 'patchouli terroso · âmbar doce · açafrão · madeiras cremosas', 'VER PATCHOULI')}
                  ${cardProduto_(links.sandalo, fotos.sandalo, 'COMPOSIÇÃO 06', 'SÂNDALO', 'Quente e reconfortante. O sândalo cremoso encontra tabaco, baunilha e especiarias quentes em uma composição acolhedora e densa.', 'sândalo cremoso · tabaco · baunilha · especiarias quentes', 'VER SÂNDALO')}
                  ${cardProduto_(links.lavanda, fotos.lavanda, 'COMPOSIÇÃO 02', 'LAVANDA', 'Serena e refinada. A lavanda aromática se abre em flores brancas, baunilha suave e madeiras delicadas.', 'lavanda aromática · flores brancas · baunilha suave · madeiras', 'VER LAVANDA')}
                </tr>
              </table>
            </td>
          </tr>

          <tr><td class="mobile-gap" style="height:10px;line-height:10px;font-size:10px;background-color:#fbf8f1;">&nbsp;</td></tr>

          <tr>
            <td style="padding:0 22px 30px 22px;background-color:#fbf8f1;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
                <tr>
                  ${cardProduto_(links.geranio, fotos.geranio, 'COMPOSIÇÃO 05', 'GERÂNIO', 'Verde, rosado e revigorante. Um floral fresco com notas verdes, frescor aquático e um fundo amadeirado discreto.', 'gerânio rosado · notas verdes · frescor aquático · madeiras', 'VER GERÂNIO')}
                  ${cardProduto_(links.capimLimao, fotos.capimLimao, 'COMPOSIÇÃO 03', 'CAPIM LIMÃO', 'Vibrante e luminoso. O frescor cítrico do capim-limão encontra notas verdes, vetiver terroso e madeiras minerais.', 'capim-limão cítrico · notas verdes · vetiver terroso · madeiras minerais', 'VER CAPIM LIMÃO')}
                  ${cardProduto_(links.ylangYlang, fotos.ylangYlang, 'COMPOSIÇÃO 04', 'YLANG YLANG', 'Floral, luminoso e opulento. Um buquê de ylang-ylang cremoso, flores brancas, rosa e jasmim.', 'ylang-ylang cremoso · flores brancas · rosa · jasmim', 'VER YLANG YLANG')}
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 22px 26px 22px;background-color:#fbf8f1;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
                <tr>
                  <td class="stack100" style="width:50%;vertical-align:stretch;background-color:#233725;padding:0;">
                    <a href="${links.perfumesEmOleo}" style="display:block;text-decoration:none;">
                      <img src="${fotos.historia}" width="450" height="338" alt="Coleção de Perfumes em Óleo Essência do Brasil" style="display:block;border:0;outline:none;text-decoration:none;width:100%;height:auto;max-width:100%;">
                    </a>
                  </td>
                  <td class="stack100 mobile-pad-24" style="width:50%;vertical-align:middle;background-color:#1d3522;padding:28px 32px;">
                    <div style="font-family:Georgia,'Times New Roman',serif;font-size:25px;line-height:31px;color:#e6bd60;margin-bottom:12px;">O perfume como um gesto íntimo</div>
                    <div style="font-size:14px;line-height:23px;color:#f5f0e6;margin-bottom:18px;">Mais do que perfumar, esta coleção foi criada para acompanhar a pele de perto. A base em óleos vegetais de macadâmia e jojoba ajuda a prolongar o aroma, enquanto a vitamina E acrescenta um cuidado delicado ao ritual. O resultado é uma experiência sensorial mais próxima, mais silenciosa e profundamente pessoal.</div>
                    <a class="mobile-button" href="${links.perfumesEmOleo}" style="display:inline-block;background-color:#c79b42;color:#ffffff;text-decoration:none;font-size:12px;line-height:16px;font-weight:bold;letter-spacing:.4px;padding:13px 18px;border-radius:3px;">ESCOLHER MINHA COMPOSIÇÃO</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 22px 28px 22px;background-color:#fbf8f1;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border:1px solid #d6c49b;">
                <tr>
                  <td class="stack100" style="width:50%;padding:20px 22px;text-align:center;background-color:#f2ead9;vertical-align:middle;">
                    <div style="font-size:13px;line-height:18px;color:#98702c;font-weight:bold;letter-spacing:.6px;">COMPRE 4 E PAGUE 3</div>
                    <div style="font-size:12px;line-height:18px;color:#4e5149;margin-top:5px;">Condição válida para produtos participantes da loja.</div>
                  </td>
                  <td class="stack100" style="width:50%;padding:20px 22px;text-align:center;background-color:#f2ead9;vertical-align:middle;border-left:1px solid #d6c49b;">
                    <div style="font-size:13px;line-height:18px;color:#98702c;font-weight:bold;letter-spacing:.6px;">3% DE DESCONTO NO PIX</div>
                    <div style="font-size:12px;line-height:18px;color:#4e5149;margin-top:5px;">Condição disponível no pagamento via Pix.</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 28px;background-color:#f7f3e9;text-align:center;border-top:1px solid #dfd6c3;">
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:20px;line-height:26px;color:#203121;letter-spacing:2.2px;">ESSÊNCIA DO BRASIL</div>
              <div style="font-size:12px;line-height:19px;color:#6c6b63;margin-top:6px;">A sua essência, nosso propósito.</div>
              <div style="font-size:12px;line-height:19px;margin-top:10px;"><a href="${links.home}" style="color:#8d6b2d;text-decoration:underline;">essenciadobrasil.com.br</a> <span style="color:#aaa08c;">|</span> <a href="${links.colecoes}" style="color:#8d6b2d;text-decoration:underline;">Coleções</a></div>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 28px;background-color:#18301e;text-align:center;font-size:11px;line-height:18px;color:#f2eee5;">
              Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  var plainText = [
    'Perfumes em Óleo - Sem Álcool',
    '6 composições. 6 atmosferas. Uma nova forma de perfumar.',
    '',
    'Conheça a coleção: ' + links.perfumesEmOleo,
    '',
    'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.'
  ].join('\n');

  return {
    subject: subject,
    html: html,
    plainText: plainText,
    inlineImages: inlineImages,
    links: links,
    fotos: fotos
  };
}

function cardProduto_(url, foto, composicao, nome, descricao, notas, botao) {
  return `<td class="stack100 product-card" style="width:33.33%;vertical-align:top;padding:8px;box-sizing:border-box;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#f4efe4;border:1px solid #e3d9c7;">
      <tr>
        <td style="padding:18px 14px 8px 14px;text-align:center;">
          <a href="${url}" style="display:block;text-decoration:none;">
            <img src="${foto}" width="235" height="235" alt="${nome}" style="display:block;border:0;outline:none;text-decoration:none;width:100%;height:auto;max-width:100%;margin:0 auto;">
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 16px 18px 16px;text-align:center;vertical-align:top;">
          <div style="font-size:10px;line-height:15px;color:#a37930;font-weight:bold;letter-spacing:.8px;">${composicao}</div>
          <div class="product-title" style="font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:29px;color:#263226;margin:4px 0 9px 0;">${nome}</div>
          <div style="font-size:12px;line-height:18px;color:#52554e;min-height:72px;">${descricao}</div>
          <div style="font-size:10px;line-height:16px;color:#7d715b;margin:12px 0 15px 0;"><strong style="color:#4e554a;">PERFIL OLFATIVO</strong><br>${notas}</div>
          <a class="mobile-button" href="${url}" style="display:inline-block;background-color:#203624;color:#fff5da;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;letter-spacing:.4px;padding:11px 13px;border-radius:2px;">${botao}</a>
        </td>
      </tr>
    </table>
  </td>`;
}

function montarIconesInline_() {
  var base64 = {
    leafIcon: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABHklEQVR42u2YwRHCMAwEZQ9N0QFtUBlt0AFlwZfxJOCQk3Qit+9E8V4s24mZEEIIIYQQ4oi0zIc/bpfnt2vO13v7qwBmpCPDaBXEPYPo1eTR9Vq2/Ke3uedeigDWBH4ZOLJWSABLA0a8sbHu3pq9sjzlIhgpj6jrvgswy8MDQPent3zYOYCp590CiDzsIJ/VGXs/4gBE2wKR8nQBRMubmZ0qyHv+E+hHlqcIIFPeNYCZrSpbHhrA1gEzyKe1AIs8PIBx8EuiTPIhM+BdmE3ezOmP0Jazepa46wyYlcqWT/0YYpBP2wVY5N3WgLV1gEncdQZUkXcJoJI8PIBq8tAAKsrDAqgqDwmgsjwkgFG2knza+V8IIYQQQgghhBCpvADJ9bRDMLcXwwAAAABJRU5ErkJggg==',
    dropIcon: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABKElEQVR42u1awQ3CQAxrvRUbsAaTsUY3YCx4IfUJbRw7qv3hgXS5OnZ6TW5ZgiAIgiAIBHg97+/9rwKr+uH3uD229v3g6iqES/ZVVoDLw6tIiAUcC1+nCuAifRUJUgt8s694/bUS8Iv0VVaAi+9VJMDJ94p6AJXvj/4/hoAzZ/1OK8BZ+h3rwkX6KivASfoKK+RbwL3JwVYBnHyvqAdgZn/CIQvu2WerABOzXxkXE7LPXBdTs18VH1Oyz1o/B6EQEAJCQAgIASEgBISAEDCkL2DXE1QONiviZy4w4QuQGRdTvGo/GutWQVW8jMfZWTm7efaN0paW2FESOq7TtnWFK26JMerMqqoB/5LEKrL0yl1RwEbMBlmbZ79eJSc4hdRtoZ4sBUEQXBofFXTAba/B7TIAAAAASUVORK5CYII=',
    heartIcon: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABTElEQVR42u2ZyxGDMAxEbSZN0UHaoLK0QQcpK7kyDMQfrVYO7Lsww0HWrv9ySkIIIYQQQgghBIz36/nZfqPjnPHwEn70b17WzI5TInuJLnEkAhWHZgBiWM7LmlFxqAaUkt4mZBHYEqfHBKgBNQnUmNEbh2bAvvGehlECrLlMd9+up4jeR7Jvv3W9maIT33/Z5H/ufURuWgOu0PuWtUAjQAbIABlAOXBoG9QUkAHXM2CUdcCSR5MBqDqet/iWU2rzCBjJBERRpWsKjGACqqLUvQZEmoASb14EI0xAiodsg0wT0OJh5wCGCR7ioQchTxO8xKcEehusEY16O0CKdzEA1WuevU65C1imBEu8+2WoxwSmeMptsMUEtnjadbjGhAjx1HrALxOixLvuApa7O/PRhV4RKoljvziFlMTORI723EabDqOV2IUQQgghbsEXMB38TxR7gVMAAAAASUVORK5CYII=',
    giftIcon: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAwUlEQVR42u3YwQ3CMAxA0abqUmzAGkzGGmzQseCKegFqu6TK+8eqcpPf2LIzTQAAAIPSqj+w3q/P7bPL7dGy3o8y97T5X+J0LyB70VUS2hGbjxzhzFiHCHhfcOZiq+KW1oAzMJ/h72/jZdYDJ4AAArTCf+/GqvimEEsBAgZnqcyvSGO0ZwbYU6cUQTWAAAJ0gpGxNzL6ZsSJxpACBBBAAAEEEEAAAQQQQAABBBBAAAGjkXKV1ROuxKQAAQAAAAA+8wIoFVBbHWPOGAAAAABJRU5ErkJggg=='
  };

  return {
    leafIcon: Utilities.newBlob(Utilities.base64Decode(base64.leafIcon), 'image/png', 'leaf-icon.png'),
    dropIcon: Utilities.newBlob(Utilities.base64Decode(base64.dropIcon), 'image/png', 'drop-icon.png'),
    heartIcon: Utilities.newBlob(Utilities.base64Decode(base64.heartIcon), 'image/png', 'heart-icon.png'),
    giftIcon: Utilities.newBlob(Utilities.base64Decode(base64.giftIcon), 'image/png', 'gift-icon.png')
  };
}

function validarTemplatePerfumesEmOleo(templateOpcional) {
  var t = templateOpcional || montarTemplatePerfumesEmOleo_();
  var html = t.html;
  var inlineImages = t.inlineImages;

  // Assunto aprovado na ETAPA 5.
  if (t.subject !== 'E se a memória começasse pela pele?') {
    throw new Error('Assunto divergente do aprovado.');
  }

  // Regras 2, 4 e 5: tabela principal fluida e toda tabela 100% com table-layout:fixed.
  if (!/<table\s+width="100%"[^>]*max-width:900px[^>]*table-layout:fixed/i.test(html)) {
    throw new Error('Tabela principal não está fluida com max-width:900px e table-layout:fixed.');
  }
  var tabelas = html.match(/<table\b[^>]*>/gi) || [];
  tabelas.forEach(function(tag, i) {
    if (!/\bwidth="[^"]+"/i.test(tag) || !/style="[^"]*\bwidth\s*:/i.test(tag)) {
      throw new Error('Regra 4 violada na tabela #' + (i + 1) + ': width ausente no HTML ou no style.');
    }
    if (/\bwidth="100%"/i.test(tag) && !/table-layout\s*:\s*fixed/i.test(tag)) {
      throw new Error('Regra 5 violada na tabela #' + (i + 1) + ': tabela 100% sem table-layout:fixed.');
    }
  });

  // Regra 12: breakpoint = 900 + 20 = 920px.
  if (!/@media only screen and \(max-width:920px\)/i.test(html)) {
    throw new Error('Breakpoint mobile incorreto: deve ser exatamente 920px.');
  }

  // Regra 13: stack100 precisa de box-sizing:border-box.
  if (!/\.stack100\{[^}]*width:100%!important;[^}]*box-sizing:border-box!important;/i.test(html)) {
    throw new Error('Regra 13 violada: .stack100 sem box-sizing:border-box!important.');
  }

  // Regra 20: textos grandes do hero têm classes e redução mobile.
  ['hero-title', 'hero-subtitle', 'hero-body'].forEach(function(classe) {
    var re = new RegExp('\\.' + classe + '\\{[^}]*font-size:[^}]*line-height:', 'i');
    if (!re.test(html)) {
      throw new Error('Regra 20 violada: falta ajuste mobile para .' + classe);
    }
  });

  // Regra 21: nenhuma TD que empilha pode ter atributo HTML width=.
  var tds = html.match(/<td\b[^>]*>/gi) || [];
  tds.forEach(function(tag, i) {
    if (/class="[^"]*\bstack100\b[^"]*"/i.test(tag) && /\bwidth="/i.test(tag)) {
      throw new Error('Regra 21 violada na TD #' + (i + 1) + ': stack100 com atributo HTML width=.');
    }
  });

  // Regra 7: todo img precisa de width, height e max-width:100%.
  var imgs = html.match(/<img\b[^>]*>/gi) || [];
  imgs.forEach(function(tag, i) {
    if (!/\bwidth="\d+"/i.test(tag) || !/\bheight="\d+"/i.test(tag) || !/max-width\s*:\s*100%/i.test(tag)) {
      throw new Error('Regra 7/8 violada na imagem #' + (i + 1) + ': faltam width, height ou max-width:100%.');
    }
  });

  // Regra 19: chaves de inlineImages e referências cid devem coincidir 1:1.
  var cidRefs = [];
  var cidRegex = /cid:([A-Za-z0-9_-]+)/g;
  var m;
  while ((m = cidRegex.exec(html)) !== null) {
    if (cidRefs.indexOf(m[1]) === -1) cidRefs.push(m[1]);
  }
  cidRefs.sort();
  var inlineKeys = Object.keys(inlineImages).sort();
  if (JSON.stringify(cidRefs) !== JSON.stringify(inlineKeys)) {
    throw new Error('Regra 19 violada. CIDs no HTML: [' + cidRefs.join(', ') + '] | inlineImages: [' + inlineKeys.join(', ') + ']');
  }

  // Regra 23: as oito fotos/banners devem estar em URLs públicas https e no HTML.
  Object.keys(t.fotos).forEach(function(chave) {
    var url = t.fotos[chave];
    if (!/^https:\/\//i.test(url)) {
      throw new Error('Regra 23 violada: foto ' + chave + ' não usa URL pública HTTPS.');
    }
    if (html.indexOf('src="' + url + '"') === -1) {
      throw new Error('Regra 23 violada: foto ' + chave + ' não está usada via <img src> no HTML.');
    }
  });

  // Regra 14: nenhum href vazio, # ou javascript.
  var hrefs = html.match(/href="[^"]*"/gi) || [];
  hrefs.forEach(function(attr) {
    var valor = attr.substring(6, attr.length - 1);
    if (!valor || valor === '#' || /^javascript:/i.test(valor)) {
      throw new Error('Regra 14 violada: link vazio, # ou javascript encontrado: ' + attr);
    }
  });

  // Correção aprovada na ETAPA 4: não mencionar frete grátis.
  if (/frete\s+gr[áa]tis/i.test(html)) {
    throw new Error('Correção da ETAPA 4 violada: foi encontrada menção a frete grátis.');
  }

  // Regra 15: texto de descadastro exato.
  var compliance = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';
  if (html.indexOf(compliance) === -1) {
    throw new Error('Regra 15 violada: texto de descadastro não está exatamente como aprovado.');
  }

  return true;
}
