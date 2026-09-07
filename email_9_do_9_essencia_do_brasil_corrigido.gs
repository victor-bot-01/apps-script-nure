/**
 * E-mail 9 do 9 — Essência do Brasil
 * Versão corrigida após revisão visual.
 */

function enviarTeste99Essencia() {
  var destino = Session.getActiveUser().getEmail();
  if (!destino) {
    throw new Error("Não foi possível identificar o e-mail do usuário ativo.");
  }

  var pacote = montarEmail99Essencia_();
  validarEmail99Essencia_(pacote.html, pacote.inlineImages);

  GmailApp.sendEmail(
    destino,
    "Hoje não é um dia qualquer",
    "Dia 9 do 9 — Essência do Brasil. Abra este e-mail em um cliente compatível com HTML.",
    {
      htmlBody: pacote.html,
      inlineImages: pacote.inlineImages,
      name: "Essência do Brasil"
    }
  );
}

function montarEmail99Essencia_() {
  var html = `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
      .secondary-wrap{display:table!important;width:100%!important;table-layout:fixed!important;}
      .secondary-icon-col{display:table-cell!important;width:22%!important;vertical-align:middle!important;text-align:center!important;box-sizing:border-box!important;}
      .secondary-copy-col{display:table-cell!important;width:56%!important;vertical-align:middle!important;text-align:center!important;box-sizing:border-box!important;}
      .secondary-date-col{display:table-cell!important;width:22%!important;vertical-align:middle!important;text-align:center!important;box-sizing:border-box!important;}
      .secondary-divider{border-left:1px solid #b99045!important;}

    @media only screen and (max-width:920px) {
      .menu-cell a{display:block!important;width:100%!important;text-align:center!important;box-sizing:border-box!important;}
      .menu-cell img{display:block!important;margin-left:auto!important;margin-right:auto!important;}

      .secondary-wrap, .secondary-wrap tbody, .secondary-wrap tr{display:block!important;width:100%!important;max-width:100%!important;}
      .secondary-icon-col,.secondary-copy-col,.secondary-date-col{
        display:block!important;
        width:100%!important;
        max-width:100%!important;
        text-align:center!important;
        box-sizing:border-box!important;
        margin:0 auto!important;
      }
      .secondary-icon-col{padding:18px 16px 10px 16px!important;}
      .secondary-copy-col{padding:14px 20px!important;border-left:0!important;border-top:1px solid #8a6832!important;}
      .secondary-date-col{padding:14px 16px 20px 16px!important;border-left:0!important;border-top:1px solid #8a6832!important;}
      .secondary-icon-img{display:block!important;margin-left:auto!important;margin-right:auto!important;}

      .secondary-wrap{display:block!important;width:100%!important;}
      .secondary-icon-col{display:block!important;width:100%!important;max-width:100%!important;text-align:center!important;padding:18px 16px 8px 16px!important;box-sizing:border-box!important;border-left:0!important;}
      .secondary-copy-col{display:block!important;width:100%!important;max-width:100%!important;text-align:center!important;padding:8px 20px 12px 20px!important;box-sizing:border-box!important;border-left:0!important;}
      .secondary-date-col{display:block!important;width:100%!important;max-width:100%!important;text-align:center!important;padding:10px 16px 20px 16px!important;box-sizing:border-box!important;border-left:0!important;}
      .secondary-divider{border-left:0!important;border-top:1px solid #7a5a2b!important;}
      .secondary-title{font-size:22px!important;line-height:1.2!important;}
      .secondary-subtitle{font-size:12px!important;line-height:1.45!important;}
      .secondary-icon-img{margin:0 auto 6px auto!important;}
      .secondary-date-row{display:block!important;}

      .stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
      .stackgap{display:block!important;width:100%!important;max-width:100%!important;height:16px!important;line-height:16px!important;box-sizing:border-box!important;}
      .menu-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;border-right:0!important;border-bottom:1px solid #e8e1d6!important;}
      .benefit-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;border-right:0!important;border-bottom:1px solid #eadfce!important;}
      .product-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:16px 24px!important;}
      .institution-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;border-right:0!important;border-bottom:1px solid #e8e1d6!important;}
      .footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:18px 24px!important;text-align:center!important;}
      .secondary-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;text-align:center!important;}
      .mobile-pad{padding-left:18px!important;padding-right:18px!important;box-sizing:border-box!important;}
      .mobile-center{text-align:center!important;}
      .mobile-button{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
      .banner-desktop{display:none!important;max-height:0!important;overflow:hidden!important;}
      .banner-mobile{display:block!important;max-height:none!important;}
      .section-title{font-size:26px!important;line-height:1.2!important;}
      .product-title{font-size:20px!important;line-height:1.25!important;}
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f4f0e9;font-family:Arial,Helvetica,sans-serif;color:#2f2b28;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#f4f0e9;margin:0;padding:0;">
    <tr>
      <td align="center" style="padding:0;margin:0;">

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:900px;table-layout:fixed;margin:0 auto;background-color:#fffdf9;">

          <!-- 1. PREHEADER -->
          <tr>
            <td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#2b1734;">
                <tr>
                  <td class="stack100 mobile-center" style="width:50%;padding:9px 16px;color:#f3e9d8;font-size:11px;letter-spacing:1px;text-transform:uppercase;">
                    NATUREZA QUE INSPIRA. QUALIDADE QUE TRANSFORMA.
                  </td>
                  <td class="stack100 mobile-center" style="width:50%;padding:9px 16px;text-align:right;color:#d8c9b9;font-size:11px;">
                    Não consegue ver este e-mail? <span style="color:#d7c191;text-decoration:underline;">Clique aqui</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 2. CABEÇALHO / LOGO -->
          <tr>
            <td align="center" style="padding:28px 20px 22px 20px;background-color:#fffdf9;">
              <a href="https://essenciadobrasil.com.br/" style="text-decoration:none;color:#2b1734;">
                <img src="cid:logoMarca" width="28" height="28" alt="" style="display:block;width:28px;height:28px;max-width:100%;margin:0 auto 8px auto;border:0;">
                <div style="font-family:Georgia,'Times New Roman',serif;font-size:34px;line-height:1;letter-spacing:8px;color:#2b1734;font-weight:normal;">ESSÊNCIA</div>
                <div style="margin-top:7px;font-family:Georgia,'Times New Roman',serif;font-size:13px;letter-spacing:5px;color:#2b1734;">— DO BRASIL —</div>
              </a>
            </td>
          </tr>

          <!-- 3. MENU 6 COLUNAS -->
          <tr>
            <td style="padding:0 10px 14px 10px;background-color:#fffdf9;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-top:1px solid #e8e1d6;border-bottom:1px solid #e8e1d6;">
                <tr>
                  <td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;border-right:1px solid #e8e1d6;">
                    <a href="https://essenciadobrasil.com.br/perfumes-masculinos/" style="text-decoration:none;color:#214d3a;font-size:10px;font-weight:bold;text-transform:uppercase;;display:block;width:100%;text-align:center;box-sizing:border-box;">
                      <img src="cid:navPerfMasc" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;border:0;">
                      Perfumes Masculinos
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;border-right:1px solid #e8e1d6;">
                    <a href="https://www.essenciadobrasil.com.br/perfumes-femininos/" style="text-decoration:none;color:#214d3a;font-size:10px;font-weight:bold;text-transform:uppercase;;display:block;width:100%;text-align:center;box-sizing:border-box;">
                      <img src="cid:navPerfFem" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;border:0;">
                      Perfumes Femininos
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;border-right:1px solid #e8e1d6;">
                    <a href="https://essenciadobrasil.com.br/oleos-essenciais/" style="text-decoration:none;color:#214d3a;font-size:10px;font-weight:bold;text-transform:uppercase;;display:block;width:100%;text-align:center;box-sizing:border-box;">
                      <img src="cid:navOleos" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;border:0;">
                      Óleos Essenciais
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;border-right:1px solid #e8e1d6;">
                    <a href="https://essenciadobrasil.com.br/essencias/" style="text-decoration:none;color:#214d3a;font-size:10px;font-weight:bold;text-transform:uppercase;;display:block;width:100%;text-align:center;box-sizing:border-box;">
                      <img src="cid:navEssencias" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;border:0;">
                      Essências
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;border-right:1px solid #e8e1d6;">
                    <a href="https://essenciadobrasil.com.br/seruns-e-cremes/" style="text-decoration:none;color:#214d3a;font-size:10px;font-weight:bold;text-transform:uppercase;;display:block;width:100%;text-align:center;box-sizing:border-box;">
                      <img src="cid:navSeruns" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;border:0;">
                      Cremes e Séruns
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;">
                    <a href="https://www.essenciadobrasil.com.br/black-essencia-do-brasil/" style="text-decoration:none;color:#214d3a;font-size:10px;font-weight:bold;text-transform:uppercase;;display:block;width:100%;text-align:center;box-sizing:border-box;">
                      <img src="cid:navOfertas" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;border:0;">
                      Ofertas
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 4. HERO -->
          <tr>
            <td style="padding:0;background-color:#2b1734;">
              <a href="https://www.essenciadobrasil.com.br/black-essencia-do-brasil/" style="text-decoration:none;border:0;">
                <img src="https://i.ibb.co/8Dt05G4m/file-000000008cc4820ead9453c84a132b86.png" class="banner-desktop" width="900" height="600" alt="Dia 9 do 9 — quatro escolhas especiais da Essência do Brasil" style="display:block;width:100%;max-width:100%;height:auto;border:0;">
                <img src="https://i.ibb.co/nq6Pv0MS/file-000000002ef4820e8ebd288037bd9913.png" class="banner-mobile" width="600" height="900" alt="Dia 9 do 9 — quatro escolhas especiais da Essência do Brasil" style="display:none;width:100%;max-width:100%;height:auto;border:0;">
              </a>
            </td>
          </tr>
              </table>
            </td>
          </tr>

          <!-- 5. BENEFÍCIOS 5 COLUNAS -->
          <tr>
            <td style="padding:18px 16px;background-color:#fffdf9;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#f8f2e9;border:1px solid #eadfce;">
                <tr>
                  <td class="benefit-cell" style="width:20%;padding:14px 8px;text-align:center;border-right:1px solid #eadfce;">
                    <img src="cid:beneficioDesconto" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;">
                    <div style="font-size:11px;font-weight:bold;color:#214d3a;">ATÉ 70% OFF</div>
                    <div style="font-size:10px;color:#6d625a;margin-top:3px;">Seleção especial do 9 do 9</div>
                  </td>
                  <td class="benefit-cell" style="width:20%;padding:14px 8px;text-align:center;border-right:1px solid #eadfce;">
                    <img src="cid:beneficioFrete" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;">
                    <div style="font-size:11px;font-weight:bold;color:#214d3a;">PAGAMENTO SEGURO</div>
                    <div style="font-size:10px;color:#6d625a;margin-top:3px;">Compre com tranquilidade</div>
                  </td>
                  <td class="benefit-cell" style="width:20%;padding:14px 8px;text-align:center;border-right:1px solid #eadfce;">
                    <img src="cid:beneficioPagamento" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;">
                    <div style="font-size:11px;font-weight:bold;color:#214d3a;">PERFUMARIA NATURAL</div>
                    <div style="font-size:10px;color:#6d625a;margin-top:3px;">Aromas com personalidade</div>
                  </td>
                  <td class="benefit-cell" style="width:20%;padding:14px 8px;text-align:center;border-right:1px solid #eadfce;">
                    <img src="cid:beneficioEmbalagem" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;">
                    <div style="font-size:11px;font-weight:bold;color:#214d3a;">QUALIDADE ESSÊNCIA</div>
                    <div style="font-size:10px;color:#6d625a;margin-top:3px;">Cuidado em cada escolha</div>
                  </td>
                  <td class="benefit-cell" style="width:20%;padding:14px 8px;text-align:center;">
                    <img src="cid:beneficioCuidado" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;">
                    <div style="font-size:11px;font-weight:bold;color:#214d3a;">SÓ NO 9 DO 9</div>
                    <div style="font-size:10px;color:#6d625a;margin-top:3px;">Uma seleção para a data</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 6. TÍTULO DA SELEÇÃO -->
          <tr>
            <td align="center" class="mobile-pad" style="padding:30px 26px 18px 26px;background-color:#fffdf9;">
              <div class="section-title" style="font-family:Georgia,'Times New Roman',serif;font-size:31px;line-height:1.2;color:#2b1734;">4 ESCOLHAS. UM DIA ESPECIAL.</div>
              <div style="font-size:14px;line-height:1.6;color:#6d625a;max-width:650px;margin:10px auto 0 auto;">Uma seleção que percorre o cuidado da pele e diferentes caminhos da perfumaria — reunida especialmente para o 9 do 9.</div>
            </td>
          </tr>

          <!-- 7. VITRINE 4 COLUNAS -->
          <tr>
            <td style="padding:10px 10px 28px 10px;background-color:#fffdf9;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
                <tr>
                  <!-- GOLD -->
                  <td class="product-cell" valign="top" style="width:25%;padding:12px 8px;box-sizing:border-box;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border:1px solid #d7c191;background-color:#ffffff;">
                      <tr><td align="center" style="padding:12px 8px 6px 8px;">
                        <div style="display:inline-block;background-color:#c6a15a;color:#2b1734;font-size:10px;font-weight:bold;letter-spacing:.6px;padding:6px 8px;text-transform:uppercase;">OFERTA OURO</div>
                      </td></tr>
                      <tr><td align="center" style="padding:6px 8px 2px 8px;">
                        <a href="https://essenciadobrasil.com.br/produtos/gold-serum-avancado-com-ouro-silicio-e-hialuronico-30ml/" style="text-decoration:none;">
                          <img src="https://americanas.vtexassets.com/arquivos/ids/17049793-768-auto/7505981189_1_xlarge.webp?quality=90&v=638754733646830000" width="190" height="190" alt="Gold Sérum Avançado 30ml" style="display:block;width:100%;max-width:100%;height:auto;border:0;margin:0 auto;">
                        </a>
                      </td></tr>
                      <tr><td align="center" style="padding:8px 10px 0 10px;">
                        <table width="74" cellpadding="0" cellspacing="0" border="0" style="width:74px;height:74px;table-layout:fixed;margin:0 auto;background-color:#2b1734;border-radius:50%;"><tr><td align="center" valign="middle" style="height:74px;text-align:center;vertical-align:middle;color:#ffffff;font-family:Arial,Helvetica,sans-serif;"><span style="display:block;font-size:17px;line-height:20px;font-weight:bold;">70%</span><span style="display:block;font-size:11px;line-height:14px;font-weight:bold;letter-spacing:.5px;">OFF</span></td></tr></table>
                        <div class="product-title" style="font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.25;color:#2b1734;margin-top:5px;">Gold Sérum Avançado 30ml</div>
                        <div style="font-size:11px;line-height:1.45;color:#6d625a;margin-top:8px;">Ouro coloidal, silício e ácido hialurônico em uma fórmula de cuidado para hidratação, firmeza e ação antioxidante.</div>
                        <div style="margin-top:10px;font-size:11px;color:#8b7b6f;text-decoration:line-through;">R$ 119,90</div>
                        <div style="font-size:20px;font-weight:bold;color:#214d3a;margin-top:2px;">R$ 35,97</div>
                      </td></tr>
                      <tr><td align="center" style="padding:12px 10px 16px 10px;">
                        <a href="https://essenciadobrasil.com.br/produtos/gold-serum-avancado-com-ouro-silicio-e-hialuronico-30ml/" class="mobile-button" style="display:inline-block;background-color:#2b1734;color:#ffffff;text-decoration:none;font-size:10px;font-weight:bold;padding:11px 12px;text-transform:uppercase;">QUERO A OFERTA OURO</a>
                      </td></tr>
                    </table>
                  </td>

                  <!-- ATTAR -->
                  <td class="product-cell" valign="top" style="width:25%;padding:12px 8px;box-sizing:border-box;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border:1px solid #e4ddd2;background-color:#ffffff;">
                      <tr><td align="center" style="padding:12px 8px 6px 8px;">
                        <table width="74" cellpadding="0" cellspacing="0" border="0" style="width:74px;height:74px;table-layout:fixed;margin:0 auto;background-color:#214d3a;border-radius:50%;"><tr><td align="center" valign="middle" style="height:74px;text-align:center;vertical-align:middle;color:#ffffff;font-family:Arial,Helvetica,sans-serif;"><span style="display:block;font-size:17px;line-height:20px;font-weight:bold;">40%</span><span style="display:block;font-size:11px;line-height:14px;font-weight:bold;letter-spacing:.5px;">OFF</span></td></tr></table>
                      </td></tr>
                      <tr><td align="center" style="padding:6px 8px 2px 8px;">
                        <a href="https://essenciadobrasil.com.br/produtos/perfume-attar-masculino-spray-portatil-10ml/" style="text-decoration:none;">
                          <img src="https://acdn-us.mitiendanube.com/stores/006/291/372/products/perfume-attar-10ml-58699bf6cc71d879a417882687321387-1024-1024.webp" width="190" height="190" alt="Perfume Attar Masculino 10ml" style="display:block;width:100%;max-width:100%;height:auto;border:0;margin:0 auto;">
                        </a>
                      </td></tr>
                      <tr><td align="center" style="padding:8px 10px 0 10px;">
                        <div class="product-title" style="font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.25;color:#2b1734;">Attar Masculino 10ml</div>
                        <div style="font-size:11px;line-height:1.45;color:#6d625a;margin-top:8px;">Bergamota e limão abrem caminho para especiarias, frutas e um fundo de cedro, ho wood e patchouli.</div>
                        <div style="margin-top:10px;font-size:11px;color:#8b7b6f;text-decoration:line-through;">R$ 39,90</div>
                        <div style="font-size:20px;font-weight:bold;color:#214d3a;margin-top:2px;">R$ 23,94</div>
                      </td></tr>
                      <tr><td align="center" style="padding:12px 10px 16px 10px;">
                        <a href="https://essenciadobrasil.com.br/produtos/perfume-attar-masculino-spray-portatil-10ml/" class="mobile-button" style="display:inline-block;background-color:#2b1734;color:#ffffff;text-decoration:none;font-size:10px;font-weight:bold;padding:11px 12px;text-transform:uppercase;">CONHECER ATTAR</a>
                      </td></tr>
                    </table>
                  </td>

                  <!-- PATCHOULI -->
                  <td class="product-cell" valign="top" style="width:25%;padding:12px 8px;box-sizing:border-box;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border:1px solid #e4ddd2;background-color:#ffffff;">
                      <tr><td align="center" style="padding:12px 8px 6px 8px;">
                        <table width="74" cellpadding="0" cellspacing="0" border="0" style="width:74px;height:74px;table-layout:fixed;margin:0 auto;background-color:#214d3a;border-radius:50%;"><tr><td align="center" valign="middle" style="height:74px;text-align:center;vertical-align:middle;color:#ffffff;font-family:Arial,Helvetica,sans-serif;"><span style="display:block;font-size:17px;line-height:20px;font-weight:bold;">37%</span><span style="display:block;font-size:11px;line-height:14px;font-weight:bold;letter-spacing:.5px;">OFF</span></td></tr></table>
                      </td></tr>
                      <tr><td align="center" style="padding:6px 8px 2px 8px;">
                        <a href="https://essenciadobrasil.com.br/produtos/perfume-patchouli-feminino-spray-portatil-10ml/" style="text-decoration:none;">
                          <img src="https://acdn-us.mitiendanube.com/stores/006/291/372/products/j9cu7tp-bfefe851f5bd0452e017489830525265-1024-1024.webp" width="190" height="190" alt="Perfume Patchouli Feminino 10ml" style="display:block;width:100%;max-width:100%;height:auto;border:0;margin:0 auto;">
                        </a>
                      </td></tr>
                      <tr><td align="center" style="padding:8px 10px 0 10px;">
                        <div class="product-title" style="font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.25;color:#2b1734;">Patchouli Feminino 10ml</div>
                        <div style="font-size:11px;line-height:1.45;color:#6d625a;margin-top:8px;">O caráter profundo e amadeirado do patchouli conduz esta composição natural em uma versão portátil.</div>
                        <div style="margin-top:10px;font-size:11px;color:#8b7b6f;text-decoration:line-through;">R$ 39,90</div>
                        <div style="font-size:20px;font-weight:bold;color:#214d3a;margin-top:2px;">R$ 25,14</div>
                      </td></tr>
                      <tr><td align="center" style="padding:12px 10px 16px 10px;">
                        <a href="https://essenciadobrasil.com.br/produtos/perfume-patchouli-feminino-spray-portatil-10ml/" class="mobile-button" style="display:inline-block;background-color:#2b1734;color:#ffffff;text-decoration:none;font-size:10px;font-weight:bold;padding:11px 12px;text-transform:uppercase;">CONHECER PATCHOULI</a>
                      </td></tr>
                    </table>
                  </td>

                  <!-- DAMA -->
                  <td class="product-cell" valign="top" style="width:25%;padding:12px 8px;box-sizing:border-box;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border:1px solid #e4ddd2;background-color:#ffffff;">
                      <tr><td align="center" style="padding:12px 8px 6px 8px;">
                        <table width="74" cellpadding="0" cellspacing="0" border="0" style="width:74px;height:74px;table-layout:fixed;margin:0 auto;background-color:#214d3a;border-radius:50%;"><tr><td align="center" valign="middle" style="height:74px;text-align:center;vertical-align:middle;color:#ffffff;font-family:Arial,Helvetica,sans-serif;"><span style="display:block;font-size:17px;line-height:20px;font-weight:bold;">30%</span><span style="display:block;font-size:11px;line-height:14px;font-weight:bold;letter-spacing:.5px;">OFF</span></td></tr></table>
                      </td></tr>
                      <tr><td align="center" style="padding:6px 8px 2px 8px;">
                        <a href="https://essenciadobrasil.com.br/produtos/perfume-feminino-natural-dama-da-noite-50ml/" style="text-decoration:none;">
                          <img src="https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-2d0f0bb6f84aba5bc817882695638648-1024-1024.webp" width="190" height="190" alt="Perfume Feminino Natural Dama da Noite 50ml" style="display:block;width:100%;max-width:100%;height:auto;border:0;margin:0 auto;">
                        </a>
                      </td></tr>
                      <tr><td align="center" style="padding:8px 10px 0 10px;">
                        <div class="product-title" style="font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.25;color:#2b1734;">Dama da Noite 50ml</div>
                        <div style="font-size:11px;line-height:1.45;color:#6d625a;margin-top:8px;">Dama-da-noite, groselha-preta e pera encontram íris, jasmim e flor de laranjeira sobre um fundo envolvente.</div>
                        <div style="margin-top:10px;font-size:11px;color:#8b7b6f;text-decoration:line-through;">R$ 78,90</div>
                        <div style="font-size:20px;font-weight:bold;color:#214d3a;margin-top:2px;">R$ 54,90</div>
                      </td></tr>
                      <tr><td align="center" style="padding:12px 10px 16px 10px;">
                        <a href="https://essenciadobrasil.com.br/produtos/perfume-feminino-natural-dama-da-noite-50ml/" class="mobile-button" style="display:inline-block;background-color:#2b1734;color:#ffffff;text-decoration:none;font-size:10px;font-weight:bold;padding:11px 12px;text-transform:uppercase;">CONHECER DAMA DA NOITE</a>
                      </td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 8. BANNER SECUNDÁRIO HTML — REFERÊNCIA 9.9 -->
          <tr>
            <td style="padding:14px 28px 18px 28px;background-color:#fffdf9;">
              <table class="secondary-wrap" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#2b1734;border-radius:10px;overflow:hidden;">
                <tr>
                  <td class="secondary-icon-col" style="width:22%;padding:18px 14px;text-align:center;vertical-align:middle;">
                    <img class="secondary-icon-img" src="cid:institucionalIngredientes" width="48" height="48" alt="" style="display:block;width:48px;height:48px;max-width:100%;margin:0 auto 4px auto;border:0;">
                    <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#d3ad59;line-height:1;">9.9</div>
                  </td>

                  <td class="secondary-copy-col secondary-divider" style="width:56%;padding:18px 22px;text-align:center;vertical-align:middle;border-left:1px solid #b99045;">
                    <div class="secondary-title" style="font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:1.15;color:#ffffff;">
                      <span style="color:#d3ad59;">O DIA É 9.</span><br>
                      A OPORTUNIDADE TAMBÉM.
                    </div>
                    <div class="secondary-subtitle" style="font-size:12px;line-height:1.5;color:#eadfeb;margin-top:9px;">
                      Quatro escolhas especiais reunidas para o 9 do 9 da Essência do Brasil.
                    </div>
                  </td>

                  <td class="secondary-date-col secondary-divider" style="width:22%;padding:18px 14px;text-align:center;vertical-align:middle;border-left:1px solid #b99045;">
                    <img class="secondary-icon-img" src="cid:institucionalPerfumaria" width="44" height="44" alt="" style="display:block;width:44px;height:44px;max-width:100%;margin:0 auto 6px auto;border:0;">
                    <div class="secondary-date-row" style="font-size:11px;letter-spacing:1px;color:#ffffff;text-transform:uppercase;">VÁLIDO EM</div>
                    <div style="font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.1;color:#d3ad59;margin-top:4px;">09/09</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 9. ATRIBUTOS INSTITUCIONAIS 4 COLUNAS -->
          <tr>
            <td style="padding:24px 14px;background-color:#fffdf9;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
                <tr>
                  <td class="institution-cell" style="width:25%;padding:14px 10px;text-align:center;border-right:1px solid #e8e1d6;">
                    <img src="cid:institucionalEssencia" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;">
                    <div style="font-size:11px;font-weight:bold;color:#214d3a;">INGREDIENTES DE QUALIDADE</div>
                    <div style="font-size:10px;color:#6d625a;margin-top:4px;">Escolhas cuidadosas em cada fórmula</div>
                  </td>
                  <td class="institution-cell" style="width:25%;padding:14px 10px;text-align:center;border-right:1px solid #e8e1d6;">
                    <img src="cid:institucionalCuidado" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;">
                    <div style="font-size:11px;font-weight:bold;color:#214d3a;">PERFUMARIA NATURAL</div>
                    <div style="font-size:10px;color:#6d625a;margin-top:4px;">Composições que valorizam matérias-primas naturais</div>
                  </td>
                  <td class="institution-cell" style="width:25%;padding:14px 10px;text-align:center;border-right:1px solid #e8e1d6;">
                    <img src="cid:socialInstagram" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;">
                    <div style="font-size:11px;font-weight:bold;color:#214d3a;">ESSÊNCIA DO BRASIL</div>
                    <div style="font-size:10px;color:#6d625a;margin-top:4px;">Natureza transformada em perfumaria</div>
                  </td>
                  <td class="institution-cell" style="width:25%;padding:14px 10px;text-align:center;">
                    <img src="cid:promoTag99" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;">
                    <div style="font-size:11px;font-weight:bold;color:#214d3a;">FEITO COM CUIDADO</div>
                    <div style="font-size:10px;color:#6d625a;margin-top:4px;">Da criação à preparação do seu pedido</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 10. RODAPÉ PRINCIPAL 4 COLUNAS -->
          <tr>
            <td style="padding:0;background-color:#2b1734;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
                <tr>
                  <td class="footer-col" valign="top" style="width:25%;padding:22px 18px;color:#ffffff;">
                    <div style="font-family:Georgia,'Times New Roman',serif;font-size:17px;color:#ffffff;font-weight:bold;">ESSÊNCIA DO BRASIL</div>
                    <div style="font-size:10px;line-height:1.5;color:#d9cedf;margin-top:7px;">Perfumaria natural, essências e cuidados.</div>
                    <div style="margin-top:10px;"><a href="https://essenciadobrasil.com.br/" style="font-size:10px;color:#d7c191;text-decoration:none;">essenciadobrasil.com.br</a></div>
                  </td>
                  <td class="footer-col" valign="top" style="width:25%;padding:22px 18px;color:#ffffff;">
                    <div style="font-size:11px;color:#d7c191;font-weight:bold;text-transform:uppercase;">Atendimento</div>
                    <div style="font-size:10px;line-height:1.6;color:#d9cedf;margin-top:7px;">Consulte informações, produtos e condições diretamente em nossa loja.</div>
                  </td>
                  <td class="footer-col" valign="top" style="width:25%;padding:22px 18px;color:#ffffff;">
                    <img src="cid:promoCalendario" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 8px auto;">
                    <div style="font-size:11px;color:#d7c191;font-weight:bold;text-transform:uppercase;">Redes sociais</div>
                    <div style="font-size:10px;line-height:1.6;color:#d9cedf;margin-top:7px;">Acompanhe os conteúdos e novidades da Essência do Brasil.</div>
                  </td>
                  <td class="footer-col" valign="top" style="width:25%;padding:22px 18px;color:#ffffff;">
                    <div style="font-size:11px;color:#d7c191;font-weight:bold;text-transform:uppercase;">Pagamento</div>
                    <div style="font-size:10px;line-height:1.6;color:#d9cedf;margin-top:7px;">As opções disponíveis são apresentadas com segurança no checkout da loja.</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 11. DESCADASTRO -->
          <tr>
            <td align="center" class="mobile-pad" style="padding:16px 24px;background-color:#efe8df;color:#6d625a;font-size:10px;line-height:1.5;">
              Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  var inlineImages = {
    logoMarca: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "logoMarca.png"),
    navPerfMasc: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "navPerfMasc.png"),
    navPerfFem: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "navPerfFem.png"),
    navOleos: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "navOleos.png"),
    navEssencias: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "navEssencias.png"),
    navSeruns: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "navSeruns.png"),
    navOfertas: Utilities.newBlob(Utilities.base64Decode("iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAK0UlEQVR4nO2cbWxb1RnH/8+5iZMAbVIo7WhtJ+nLQJSXTt0odlLqxLGTUsYGU9EmEJM2JqRJbAxtHyYNbRJjHyahoYltfBpC094IlLWlhNiOY9rYpi1h0C0b0Kap7TS0FErTUtrEvvfZh5KuTa7vPbavndTx71vuOed/H/1i2feee84FKlSoUKFChXkOZWtoae66HlpmDbNYXLJiGONE2pGqs5m3I8cjn1qR2er0r2NoK1XgxCJb9e6egz0TVuTmyiWit2CLMuo8+RARHgPji7NR0OdkiCjEmvZsLBXaDoBzDXDZ25cLofydgZaLDh9h4NvxZLDPulLluCDavdK/hNK8dVphc4EYKcp3oiOvvSc7YM2aLbb60yffBHCzTvMEEe6NJoKvWleiOQIAWp2bF3Ga++egZABws5rZ53J0dMoOaDg1fg/0JQNADTNectm9XdaUJ4cAABWTzxJwYylPnBu0gIi2uRs7Nsv0ZvBXTLrUkhAvtzj9PguKk0K02v3rCbivVCcsgBowvSQlW9A5ibxaBm9zOX3ewkszR2gC3y3FiSxCSjYDst+/dQRsb2nsbLOgNkMEwJ5in8RiTGXHE4EYmP8omXeFxtoOl9230aL6dBEAmop5giJhKtuWyjzMwAsyYQRcSQKvtDg6N1hX4qUIANXFCi8yhrIjiGRqkun7AbwomXcVk7rzdqevKFdeohihJaQGTFtbHL679RojiGSWJxu+CcLf5OJoAQG9bof/DiuLBC5/0QBgY0J3Ntnd6FYnFp94EKBtMmEEXAniHa12/3oriywH0YCJ7MHBwfT4gvr7AGyXzFuoCe512Ttvs6rAchENmMgeGuqeHF/QsIWBHZJ59SS0gNvhNbv5kcIq0QzGO8R4GYTXGThjUW6u2JjwQrYfyKGh7skakb4PQK9kXj1IvOZq7PhSoYUVLJoZW8Hq6lgquDaaCt4bSwQ9k5naJSD8GMDZQvPzwPhq5HDknE2kvw4gKJl3NTEFW5s7by2kKHI7fTlPQU7BxL+JJ0KPZWtvdXa0aqAAgLp8z1EAEyD+RiwR2qnX6LK76khctQOA7C34R6qmefeM9u3Pp5gCPtH8lj2x6CdGPQaSoQEi+nn+5ygIw092fDR+diJTezfA/ZJ5ixVFhNwO/035FFOAaHq6G92qWa/T5/B7AJ/lf56CMJQ9OLbjs08nxFcB7JJKY1wL4r4NTm/OM515i9aEslum3/5jgTMAD+Z7HgswlL3/WOCM7Wx6M4ABybwlKkTY1eS/IZci8hZNGT6VQ/fxfM9jEcY/kMcjn1Jd3Z0AYpJ5S0njcEtz1/WyBeQtmpVcJqOoOd/zWIih7Oh720+rtqpNYLwhmXcdq2p4vd23WqZz3qKFpt4j0+/z//pceXpjKHvPwZ5TE9XcBWCvZN4yRSDssneuMuuY/48h0Q/cze2NZr1YVZ+CwbKGWcD4B/JQaNwm0p0A3pTMs5PQwq3OjhVGnQq5YVkIVenJJtsDT5W7seMZAFLP+UqM2U3NSQGbH+C3JPMcGlP/7U1dTdk6FHTDch4+DRK/JY3/kda0EZtC9RpjI4geA5DXNWcJMbmp6byahNYHYK1k3kFUU0tsOPDh9AYLRF/2GMr2LPMsTlfb+pj5FpkwAqInFzS0Dw11T158vJxm7/LF+GtkLPKRmFA6APxbJoyBlvpTJ381/XhF9HkMZe8+2nMc1eRl4D9SaYQfTX/+WBH9fwxlx4YDH2qK1g7gvxJZgkn73RZsUS4csKrKMsH4Onuk75hCwgvC+xJZNx9xfPLg1B8V0TMx/hpJ9H4AofoBzLiymAHRT4FfCKAiOhvGXyMj4QSBHoD5cuLV7saBTUBFtBE1YMq66jSaDATB/JxZCDM9CFREm1EDIV502Tt0lwAT6HEAZgsqN3uaPLUCeaymn08QcCUR/eniK4gpoqngGDP+bDb+nFbVKgDkMq88PyHcOuYcf0CvSUA8bzZcQLQKQOpSZd7D4Ef0ji9LLYwBOGEyfK0AQeqRVAWsu2OZ3zH9YDe6VWbsMR7Kq4Rg+kuxKis30lV8u26D4HdNhl4nBpKBQQBhy6sqQwRRk95xYjpmMrReAABr/CiASZPOFZh1FwIx2GyTqCIAID4a+heYH7W8sDJDg/6Tf8F0hcnQ9IUbllgq9Acw/8zSysoMIhzQO86Cl5sM/eSSO8NYKvQkiB63rLLyIiO4Jsu6D1pjPJRHZ9yCxxKBX1Zkz4QZwYHkzk+mH/c0eWrBMF6wTvS+7lxHRbYOhKf0DqfVaj9MVssyeDDrpFJF9sXQtmxvRGCS2BCrKrsMZ+8qsgEAh5VJ5Xt6DZ/P6t1lMv5D++jC7J/oKeazbAIdJUXp2n2057huu6CnYDLVzMDWbnSrUvPR81E2gY5qAm3Z3hPicvoeBmD+dgRNPAcAM+ZYs5EaH97laFilAmiXHXO5MiU5fjigO4fhavS7CfgrgCrjHERjqcATQA6igfkh20yyu8m3lhivAVggkfVQanz4EJCjaKC8ZZtJXm/33iJAIQDXmGUxoyeWCj4x9XfOooHylG36SXb4bxIK9QG41iyLgTNg8bXRU8MXHgjkJRooL9lmkjc4vTcyURjAEsm8R+KpwCX7GPMWDZSHbNMfvib/DWARBrBUJo+B5+PJ4IwrtIJEA5e3bDPJ51+yqPUDuE4yMtxgq/rWwRMHZ2wLLFg0cHnKNv/h862m85s9l0lGxqiu7q7wgZ26eyotEQ2cl+1sWPUZZC7iZ59jBNERSwR0V4a6m9sbBUQYwIyHsbow3lBrqrriB3aeztbFMtEAkBofjl0Gso8RhDea7B3Sa2xd0eFkVbwO6XdN8VuCajrjI68a7qW0VDQw52WbSlYzFCFAdl/kP1lTfLFUz4x56ulYLhqYs7INJd+xzO9QgQgBhtvYLuLtjKr59hwJmi2eAVAk0cCck20oef3yTXZUcQTASqk0xjsZTevYe6TvY9kCiiYamDOyTSUrSqYfgOnuVwAgov22TLojOtYvLRkosmhg1mUbS272LlXAfQBkN8+/qyqaN5rq152fNqLoooFZk20qWaginMNbht9Ni3Tb3sP9ZquSdCmJaKDksg0lu1f6l4gMhQkwWSYwBb+nkNIeT/QdzbegkokGSibbUPKGL2y6lkkLQ3b7NOF9YmofSAY+KKSokooGii7bVLJqy/Qh+9vSp3OAGG3RVHCs0MJKLhoommzjmxHn5kWaku5FDhvoWVPbYqN9BUsGZkk0YLlsQ8meJk9DhhEE8GXJvIQmFO8byWDKgtoAzKJo4Lxsx8IVGRAVMuv3AQtqyzZB5Gny1E5q1RHISz5UlaGN0VRvsoCaZjDr299iqdCTRPwIgHQew4cEuDXbVCcATKrV3wewTjLvMBS1fddYwLJP8hSzLhoAoonQM8RwM5ntBbnAOQC/nsjU3jaQDB0y7Em4UzIzoQmlLTYSTkj2z4m59K4jAEBLY2ebpmn3E6ENl07wnAUwCOCVtEg/v+9wROqa1u30RQG4TbqlBNhj+k8rgDkn+mI8TZ7aiYy4pkbTJiJjkY+Rx+ZTt9P3NIAfGnQZBaueWCo8nHehEsxp0Vbgbm5vhKrsB7BQp/mIqqFtz2hQdyW/lcyJ7+hiEhsJJ0BaFwMj05reBKsbSyEZmAef6CnWrVtXXfvR4lbWeCkzHYqP9u5DZR98hQoVKlSoUDr+BydBgafSJ42pAAAAAElFTkSuQmCC"), "image/png", "navOfertas.png"),
    beneficioDesconto: Utilities.newBlob(Utilities.base64Decode("iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFMUlEQVR4nO2cTWhcVRSAvzMzSU1rqVqEuqxFtDtLZhTtSmhJUqgtXQi6Cg1im4IWddoapIh/JDNBi0ihEE0XXYoQSjNTunBlS9sEQWgRxe5ENFRoTTpt0pnjIokUzc/c+96bd9/M/bZzzzl3vlxu3rz37gGPx+PxeDwej8fj8Xg8DUDCSvTd588+crea6RHlRWAzsAa4p8INlIuZqpZ2Hpu8FVa9qBkvdG5JC32KbAMygv5cI32mJ3/lkk2+wKLPFXKb0sJxQXsVOlYYegdhNJNJf7Tj8OU/gtaNkvJw7i1Ui0Db/z4Uvr49XTn4ygfXZk1ypoJMqDSc25cWroMeXEUywFqUQ/fnqtfLxeyeIHWjpFzIDqB6gqUkAyj7N6zrOGma13pFl4Zz/aL6pWWOmkJ/T37ilG39KCgXsgMIn9Q1uMbz3UcnrtSb22pFl4Zz+wJIBkgJnDxfzO22jA8dI8kAKV41yW8s+lwht0mUEYLv7ylFR8c/3fZ4wDyBMZY8zzMmg41Fp4XjoI+axi3DxnRb5v2QcllhKRmU6P4ZXhjs3CBor9GEVkHRvrGh7evDzFkv1pIBEeren8FQ9P2M7Krj6sKUde1ytzvknKsSSDJUZtNtp01ijEQv/BgJHRGJJO9yBJEMoKJv7n770m8mMaZ79GbD8fWhPBlJ3iUILBl9p/vdyRHTODPRwlrTAvWgIg9Hkfe/hCG5Jz/5mU2smWjljk2R1RDV6SjyPkicksFQtAo3bAutmBd+jSLvInFLBvMVfTFIsWUnkYomL7ghGQxFZ6pagtC3j+n2jko55JyAO5LBUPTOY5O3EEbDKPwAIy8duhb6Hu2SZLD4CS46+yFwM6T6U5m51Mch5foX1ySDheiu/I9/An1ALWDtqiq9OwauhPVHA9yUDJa3SbvzE2MK/djLriJ6oOfIxLhl/JK4KhkC3uo8X8ztVnQU2GgQNqVKbytJhoCPsrryV8/W5qpbBfkCmFll+DRwIjOX2tpqkiHEp+BjQ9vXz9+FkxckpU+h8pBCReAXES61d1TKrXB1sRyhiY6DUjGbFyjYxovqe11HJgfDnNOytRpRJAqSJBkSKjppkiGBopMoGRImOqmSIUGikywZEiI66ZIhAaKbQTI4LrpZJIPDoptJMjgqutkkg4Oim1EyOCa6WSWDQ6KbWTI4IrrZJYMDoltBMsQsulUkQ4yiW0kyxCS61SRDDKJbUTI0WHSrSoYGim5lyQCZRhQpF7IDEPA4w5HwXwloZKOAyFe0i+9dxNEoIFLRLkqeP17NiOGh1L+A/d35iTHbuoFeCVsJRyX3i+o3Fid/HwO+LRWzb9jWjmRFOyp537zkQN+5JsjervzVs6aBoYt2UfLCnnw9pDPsN2tz1a27Bn6YMgkKdetwUTK40SggtBXtquQLg50bamn5PeQz7DP3amue2HP0+7/rDQhlRbsqGdxpFBBYtMuSwZ1GAYFEuy55AScaBViLTohkZxoFWIlOjOT5Yk40CjAWXS5mDydGMu40CjASPV7o3AIMGc3oARoteaGoE40CjESnhT6g3WhGC8QiGXcaBRiJriGdZvOZJy7J4E6jAMM9WowfFMQpeREXGgUYiU5R+8lkvAuSwY1GAYZbR/pMvWNdkbxI3I0CjEQvNKledb9zTfIiPfmJU4LsxXwbmVLlZZs2bIsYX0ffnqkcEPhqqc8EKoi+7qLkReJqFGB9m7Q8lH0O0dcQeVphLgWXZ9Ntp007HMZJXI0CPB6Px+PxeDwej8fj8UTGPxziDNNBdLQsAAAAAElFTkSuQmCC"), "image/png", "beneficioDesconto.png"),
    beneficioFrete: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "beneficioFrete.png"),
    beneficioPagamento: Utilities.newBlob(Utilities.base64Decode("iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAADt0lEQVR4nO3dv28bdRjH8fdzGKTEaSIKC5SpQUiIrXZEOzGA1KQDmCCC1B11JSq2+CVhlqqxyx/AXwCtVCXukIQFCRZoYoepLJAsIMqCUFKnUVNxD0MaiGjunOTOj5vL89p83+/3+T76yLo728oFnHPOOeecc84dbbLbwWvVl54YzPeXUC0hnAKeA/K2rR0a68BvKEuIzKyt352ZqN7a/P+kh4KeuzIyTqh1EU6atJk9y0pQHisvTO88+G/Q1SrBmXzxskLZvrcMEmo/tJsfVquEAMH28ZfzhSkPOUVK5XR+5NL2S4Gt04WoXu9dV9klom+efb81I1sXvr6fgOFeN5VFqqzcubvxYjCY7y/hIXeNCCeHBvpezz24hYuzqspVEfnLqLdDJjwOMgEMRc4ItZRDKMRUWc3l5NRrk4sr6TeYHbO1wlQg0iIibBEpBsCzUQUEvvKQOztXaS2rcjVmyokAGIgaDeGP9NvKKOF2zOhAEDPoUuRBG/GgjXjQRmS+XtReN3EU+DvaiAdtxIM24kEb8aCNeNBGPGgjHrQRD9qIB23EgzbiQRvxoI140EZycYMKn42Vm1WjXg61uXqxKvBp1Li/o4140EY8aCMetBEP2ogHbcSDNuJBG/GgjXjQRjxoIx60EQ/aiAdtxIM24kEbif3if6/mPh95VcKwGDtJRUXC5tny0jep1NurfezbTYmCfvDnzV8S6njEoz/+I6AEzNeL19fWN87v9kyLfdXbqz3sayHRqWMw3/8JML7PZW8dy/d9lGK9xPtaSHiO1ncPskogYt3B6iXft/uSXgyfPOC64ynXS7pv1yUMWhYOtApuplkv+b7dlyxoDd8D9ntx2fw7YDLFesn3NZAo6NFKawnVM8B3wL0O0+8JfBsGnD53sfljCvX2quO+FhLfR49WWkvAKyn00pV6jwr/ZGjEgzbiQRvxoI0EQDtyVHnGrpXDTVROxAyvBcDvkYuFd2ZrBX9UWweztcIwom/HTLmdA2mCvhAxYSgQac3XC9eA5S70mAXDnR7HJrCYAxrA+ZhCQyA9+zImE4RG8PRgOA380uteskqVldX2xo2geKF1XwkqvW4oo5THmJyo3toMAMbKC9MC9V53lTUqMjV2sXkDdtxHf7/e/ACh1ru2MkVBpm62Fz/ePvDQD3NfXymUVKUOPG/aWmbozyDl0XKzsfPorr+ANr8oPP7nHXkjDLUkIgW2/plC5KM1j7g28KtAC6Hx1DFtFC+07ve6Keecc84555xzj5p/AGCaC46Tnif/AAAAAElFTkSuQmCC"), "image/png", "beneficioPagamento.png"),
    beneficioEmbalagem: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "beneficioEmbalagem.png"),
    beneficioCuidado: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "beneficioCuidado.png"),
    institucionalIngredientes: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "institucionalIngredientes.png"),
    institucionalPerfumaria: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "institucionalPerfumaria.png"),
    institucionalEssencia: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "institucionalEssencia.png"),
    institucionalCuidado: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "institucionalCuidado.png"),
    socialInstagram: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "socialInstagram.png"),
    promoTag99: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "promoTag99.png"),
    promoCalendario: Utilities.newBlob(Utilities.base64Decode("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"), "image/png", "promoCalendario.png")
  };

  return {
    html: html,
    inlineImages: inlineImages
  };
}

function validarEmail99Essencia_(html, inlineImages) {
  if (!html) throw new Error("HTML vazio.");
  if (!inlineImages) throw new Error("inlineImages ausente.");

  var usados = html.match(/cid:([A-Za-z0-9_-]+)/g) || [];
  var usadosSet = {};
  usados.forEach(function(item) {
    usadosSet[item.replace("cid:", "")] = true;
  });

  var chaves = Object.keys(inlineImages);
  var inlineSet = {};
  chaves.forEach(function(k) { inlineSet[k] = true; });

  var faltando = Object.keys(usadosSet).filter(function(k) { return !inlineSet[k]; });
  var orfaos = chaves.filter(function(k) { return !usadosSet[k]; });

  if (faltando.length) {
    throw new Error("CID sem imagem inline correspondente: " + faltando.join(", "));
  }
  if (orfaos.length) {
    throw new Error("Imagem inline não usada no HTML: " + orfaos.join(", "));
  }
  if (html.indexOf("VER AS OFERTAS") !== -1) {
    throw new Error('O botão "VER AS OFERTAS" deveria permanecer removido.');
  }
  if (html.indexOf("40%</span><span") === -1 ||
      html.indexOf("37%</span><span") === -1 ||
      html.indexOf("30%</span><span") === -1 ||
      html.indexOf("70%</span><span") === -1) {
    throw new Error("Os badges de desconto não estão no formato % + OFF em duas linhas.");
  }

  return true;
}
