/**
 * Campanha: Dia do Irmão — 1 + 1 = 3
 * Essência do Brasil
 * Assunto aprovado: Mais que Dois, Uma Sinergia
 *
 * Template HTML construído para GmailApp.sendEmail().
 * Fotos e banners usam URLs públicas HTTPS.
 * Apenas ícones PNG pequenos são carregados em inlineImages via cid:.
 */

var DIA_IRMAO_ASSUNTO = 'Mais que Dois, Uma Sinergia';
var DIA_IRMAO_MAX_WIDTH = 900;
var DIA_IRMAO_BREAKPOINT = 920; // 900 + 20, conforme regra de responsividade.

var DIA_IRMAO_URLS = {
  home: 'https://essenciadobrasil.com.br/',
  perfumesMasculinos: 'https://essenciadobrasil.com.br/perfumes-masculinos/',
  perfumesFemininos: 'https://essenciadobrasil.com.br/perfumes-femininos/',
  oleosEssenciais: 'https://essenciadobrasil.com.br/oleos-essenciais/',
  essencias: 'https://essenciadobrasil.com.br/essencias/',
  colecoes: 'https://essenciadobrasil.com.br/colecoes/',
  serunsCremes: 'https://essenciadobrasil.com.br/seruns-e-cremes/',
  sinergias: 'https://essenciadobrasil.com.br/colecoes/sinergias-oficiais-do-livro/',

  sinergia1: 'https://essenciadobrasil.com.br/produtos/perfume-sinergia-1-lavanda-bergamota-ylang-ylang-100ml/',
  sinergia2: 'https://essenciadobrasil.com.br/produtos/perfume-sinergia-2-manjerona-laranja-doce-vetiver-10ml/',
  sinergia3: 'https://essenciadobrasil.com.br/produtos/perfume-sinergia-3-cedro-sandalo-patchouli-10ml/',
  sinergia4: 'https://essenciadobrasil.com.br/produtos/perfume-sinergia-4-capim-limao-manjericao-olibano-100ml/',
  sinergia5: 'https://essenciadobrasil.com.br/produtos/perfume-sinergia-5-vetiver-cipreste-salvia-sclarea-100ml/',
  sinergia6: 'https://essenciadobrasil.com.br/produtos/perfume-sinergia-6-palmarosa-laranja-amarga-ho-wood-10ml/',

  hero: 'https://i.ibb.co/m5zxGtr5/banner-hero-sinergia-corrigido.png',
  historia: 'https://i.ibb.co/QFsQkDDQ/Chat-GPT-Image-4-de-set-de-2026-19-52-56.png',
  foto1: 'https://i.ibb.co/99Szm2gC/SINERGIA-01.png',
  foto2: 'https://i.ibb.co/qM1btgRc/SINERGIA-2.png',
  foto3: 'https://i.ibb.co/TxgCfsHp/SINERGIA-3.png',
  foto4: 'https://i.ibb.co/KxZk3PPS/SINERGIA-04.png',
  foto5: 'https://i.ibb.co/LD3Q6cDt/SINERGIA-05.png',
  foto6: 'https://i.ibb.co/Gfpmzqmg/SINERGIA-6.png'
};

function enviarTesteDiaDoIrmao() {
  var destinatario = Session.getActiveUser().getEmail();
  if (!destinatario) {
    throw new Error('Não foi possível obter o e-mail da conta ativa com Session.getActiveUser().getEmail().');
  }

  var inlineImages = criarIconesDiaDoIrmao_();
  var html = construirHtmlDiaDoIrmao_();
  validarTemplateDiaDoIrmao_(html, inlineImages);

  var textoPlano = [
    'Mais que Dois, Uma Sinergia',
    '',
    'Dia do Irmão — 1 + 1 = 3',
    'Duas personalidades. Uma conexão.',
    '',
    'Conheça a Coleção Sinergia:',
    DIA_IRMAO_URLS.sinergias
  ].join('\n');

  GmailApp.sendEmail(
    destinatario,
    DIA_IRMAO_ASSUNTO,
    textoPlano,
    {
      htmlBody: html,
      inlineImages: inlineImages,
      name: 'Essência do Brasil'
    }
  );
}

function construirHtmlDiaDoIrmao_() {
  var U = DIA_IRMAO_URLS;

  var html = `<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type="text/css">
@media only screen and (max-width:920px){
  .stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
  .top-strip-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;text-align:center!important;padding:7px 14px!important;}
  .nav-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:9px 16px!important;border-left:0!important;border-top:1px solid #eadbcf!important;}
  .benefit-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:12px 18px!important;border-left:0!important;border-top:1px solid #eadbcf!important;}
  .product-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:10px 18px 18px 18px!important;}
  .story-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;border-left:0!important;}
  .footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:20px 24px!important;border-left:0!important;border-top:1px solid #eadbcf!important;}
  .desktop-hero{display:none!important;max-height:0!important;overflow:hidden!important;mso-hide:all!important;}
  .mobile-hero{display:block!important;max-height:none!important;overflow:visible!important;mso-hide:all!important;}
  .hero-copy{display:block!important;width:100%!important;max-width:100%!important;padding:24px 22px 18px 22px!important;box-sizing:border-box!important;background-color:#fffaf5!important;}
  .hero-art{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
  .hero-kicker{font-size:16px!important;line-height:22px!important;color:#2b1a12!important;letter-spacing:2px!important;}
  .hero-title{font-size:52px!important;line-height:50px!important;color:#2b1a12!important;}
  .hero-script{font-size:58px!important;line-height:56px!important;color:#6b412b!important;}
  .hero-formula{font-size:28px!important;line-height:32px!important;color:#7a4d32!important;}
  .hero-body{font-size:16px!important;line-height:24px!important;color:#2b1a12!important;}
  .hero-products{font-size:13px!important;line-height:19px!important;color:#2b1a12!important;}
  .hero-product-link{color:#2b1a12!important;}
  .hero-button{font-size:13px!important;line-height:18px!important;padding:14px 16px!important;color:#ffffff!important;background-color:#3a2114!important;}
  .section-title{font-size:21px!important;line-height:26px!important;}
  .section-subtitle{font-size:13px!important;line-height:19px!important;}
  .product-image{width:190px!important;height:190px!important;max-width:100%!important;}
  .story-image{width:100%!important;height:auto!important;max-width:100%!important;}
  .story-title{font-size:24px!important;line-height:29px!important;}
  .story-body{font-size:14px!important;line-height:21px!important;}
  .circle-box{width:210px!important;height:210px!important;max-width:210px!important;box-sizing:border-box!important;margin:0 auto!important;}
}
</style>
</head>
<body style="margin:0;padding:0;background-color:#f3eee7;font-family:Arial,Helvetica,sans-serif;color:#2f241e;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#f3eee7;margin:0;padding:0;">
  <tr>
    <td align="center" style="padding:0;margin:0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:900px;table-layout:fixed;background-color:#fffaf5;margin:0 auto;">

        <!-- 1. FAIXA SUPERIOR -->
        <tr>
          <td style="padding:0;background-color:#3a2114;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#3a2114;">
              <tr>
                <td class="top-strip-cell" style="width:55%;padding:9px 18px;color:#fff8f1;font-size:11px;line-height:16px;font-weight:bold;letter-spacing:.6px;text-align:left;box-sizing:border-box;">
                  <img src="cid:iconHeart" width="18" height="18" alt="" style="display:inline-block;vertical-align:middle;margin-right:8px;max-width:100%;height:auto;"> CONEXÕES QUE CRIAM ALGO A MAIS.
                </td>
                <td class="top-strip-cell" style="width:45%;padding:9px 18px;color:#fff8f1;font-size:11px;line-height:16px;text-align:right;box-sizing:border-box;">
                  <a href="${U.sinergias}" style="color:#f4d3b3;text-decoration:underline;font-weight:bold;">Conheça a Coleção Sinergia →</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- 2. CABEÇALHO / LOGO -->
        <tr>
          <td align="center" style="padding:24px 20px 18px 20px;background-color:#fffaf5;">
            <a href="${U.home}" style="text-decoration:none;color:#17261c;">
              <span style="display:block;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:31px;letter-spacing:5px;color:#17261c;">ESSÊNCIA</span>
              <span style="display:block;font-family:Georgia,'Times New Roman',serif;font-size:13px;line-height:18px;letter-spacing:4px;color:#17261c;">DO BRASIL</span>
            </a>
          </td>
        </tr>

        <!-- 3. MENU 6 COLUNAS -->
        <tr>
          <td style="padding:0 18px 0 18px;background-color:#fffaf5;border-bottom:1px solid #d9c0ad;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
              <tr>
                <td class="nav-cell" style="width:16.66%;padding:12px 6px;text-align:center;font-size:9px;line-height:13px;font-weight:bold;box-sizing:border-box;"><a href="${U.perfumesMasculinos}" style="color:#191919;text-decoration:none;">PERFUMES MASCULINOS</a></td>
                <td class="nav-cell" style="width:16.66%;padding:12px 6px;text-align:center;font-size:9px;line-height:13px;font-weight:bold;border-left:1px solid #eadbcf;box-sizing:border-box;"><a href="${U.perfumesFemininos}" style="color:#191919;text-decoration:none;">PERFUMES FEMININOS</a></td>
                <td class="nav-cell" style="width:16.66%;padding:12px 6px;text-align:center;font-size:9px;line-height:13px;font-weight:bold;border-left:1px solid #eadbcf;box-sizing:border-box;"><a href="${U.oleosEssenciais}" style="color:#191919;text-decoration:none;">ÓLEOS ESSENCIAIS</a></td>
                <td class="nav-cell" style="width:16.66%;padding:12px 6px;text-align:center;font-size:9px;line-height:13px;font-weight:bold;border-left:1px solid #eadbcf;box-sizing:border-box;"><a href="${U.essencias}" style="color:#191919;text-decoration:none;">ESSÊNCIAS</a></td>
                <td class="nav-cell" style="width:16.66%;padding:12px 6px;text-align:center;font-size:9px;line-height:13px;font-weight:bold;border-left:1px solid #eadbcf;box-sizing:border-box;"><a href="${U.colecoes}" style="color:#191919;text-decoration:none;">COLEÇÕES</a></td>
                <td class="nav-cell" style="width:16.66%;padding:12px 6px;text-align:center;font-size:9px;line-height:13px;font-weight:bold;border-left:1px solid #eadbcf;box-sizing:border-box;"><a href="${U.serunsCremes}" style="color:#191919;text-decoration:none;">CREMES E SÉRUNS</a></td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- 4. HERO PRINCIPAL -->
        <tr>
          <td style="padding:0;background-color:#fffaf5;">
            <div class="desktop-hero" style="display:block;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" background="${U.hero}" style="width:100%;table-layout:fixed;background-color:#f5eee6;background-image:url('${U.hero}');background-repeat:no-repeat;background-position:center center;background-size:cover;">
                <tr>
                  <td class="hero-copy" valign="middle" style="width:43%;padding:34px 24px 34px 34px;box-sizing:border-box;vertical-align:middle;">
                    <div class="hero-kicker" style="font-size:14px;line-height:18px;letter-spacing:2px;font-weight:bold;color:#4a2c1c;margin:0 0 10px 0;">DUAS PERSONALIDADES. UMA CONEXÃO.</div>
                    <div class="hero-title" style="font-family:Georgia,'Times New Roman',serif;font-size:58px;line-height:54px;font-weight:bold;color:#342017;margin:0;">FELIZ</div>
                    <div class="hero-script" style="font-family:'Palatino Linotype','Book Antiqua',Georgia,'Times New Roman',serif;font-size:62px;line-height:56px;font-style:italic;color:#6b412b;margin:0 0 8px 0;">Dia do Irmão</div>
                    <div class="hero-formula" style="font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:34px;font-weight:bold;color:#8a5736;margin:0 0 16px 0;">1 + 1 = 3</div>
                    <div class="hero-body" style="font-size:14px;line-height:22px;color:#3c2b23;margin:0 0 13px 0;">Entre irmãos, a soma nunca termina em dois. Há memórias, contrastes e histórias que só existem porque duas pessoas se encontraram.</div>
                    <div class="hero-products" style="font-size:10px;line-height:15px;color:#4a2c1c;margin:0 0 14px 0;">
                      <a class="hero-product-link" href="${U.sinergia1}" style="color:#4a2c1c;text-decoration:underline;font-weight:bold;">Sinergia 1</a> · Lavanda, Bergamota &amp; Ylang-ylang<br>
                      <a class="hero-product-link" href="${U.sinergia3}" style="color:#4a2c1c;text-decoration:underline;font-weight:bold;">Sinergia 3</a> · Cedro, Sândalo &amp; Patchouli
                    </div>
                    <a class="hero-button" href="${U.sinergias}" style="display:inline-block;background-color:#3a2114;color:#ffffff;text-decoration:none;font-size:11px;line-height:15px;font-weight:bold;padding:13px 16px;border-radius:3px;">CONHEÇA A COLEÇÃO SINERGIA</a>
                  </td>
                  <td class="hero-art" style="width:57%;padding:0;font-size:0;line-height:0;box-sizing:border-box;">&nbsp;</td>
                </tr>
              </table>
            </div>
            <div class="mobile-hero" style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#fffaf5;">
                <tr>
                  <td class="hero-copy" valign="top" style="padding:24px 22px 18px 22px;box-sizing:border-box;background-color:#fffaf5;">
                    <div class="hero-kicker" style="font-size:14px;line-height:18px;letter-spacing:2px;font-weight:bold;color:#4a2c1c;margin:0 0 10px 0;">DUAS PERSONALIDADES. UMA CONEXÃO.</div>
                    <div class="hero-title" style="font-family:Georgia,'Times New Roman',serif;font-size:58px;line-height:54px;font-weight:bold;color:#342017;margin:0;">FELIZ</div>
                    <div class="hero-script" style="font-family:'Palatino Linotype','Book Antiqua',Georgia,'Times New Roman',serif;font-size:62px;line-height:56px;font-style:italic;color:#6b412b;margin:0 0 8px 0;">Dia do Irmão</div>
                    <div class="hero-formula" style="font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:34px;font-weight:bold;color:#8a5736;margin:0 0 16px 0;">1 + 1 = 3</div>
                    <div class="hero-body" style="font-size:16px;line-height:24px;color:#3c2b23;margin:0 0 13px 0;">Entre irmãos, a soma nunca termina em dois. Há memórias, contrastes e histórias que só existem porque duas pessoas se encontraram.</div>
                    <div class="hero-products" style="font-size:13px;line-height:19px;color:#4a2c1c;margin:0 0 14px 0;">
                      <a class="hero-product-link" href="${U.sinergia1}" style="color:#4a2c1c;text-decoration:underline;font-weight:bold;">Sinergia 1</a> · Lavanda, Bergamota &amp; Ylang-ylang<br>
                      <a class="hero-product-link" href="${U.sinergia3}" style="color:#4a2c1c;text-decoration:underline;font-weight:bold;">Sinergia 3</a> · Cedro, Sândalo &amp; Patchouli
                    </div>
                    <a class="hero-button" href="${U.sinergias}" style="display:inline-block;background-color:#3a2114;color:#ffffff;text-decoration:none;font-size:13px;line-height:18px;font-weight:bold;padding:14px 16px;border-radius:3px;">CONHEÇA A COLEÇÃO SINERGIA</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0;background-color:#fffaf5;">
                    <img src="${U.hero}" width="900" height="506" alt="Perfumes Sinergia 1 e Sinergia 3 em composição de presente" style="display:block;width:100%;height:auto;max-width:100%;border:0;">
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>

        <!-- 5. FAIXA DE BENEFÍCIOS / 6 COLUNAS -->
        <tr>
          <td style="padding:0 20px 18px 20px;background-color:#fffaf5;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border:1px solid #eadbcf;border-radius:8px;background-color:#fffdf9;">
              <tr>
                <td class="benefit-cell" style="width:16.66%;padding:14px 8px;text-align:center;vertical-align:top;box-sizing:border-box;">
                  <img src="cid:iconBook" width="27" height="27" alt="Sinergias oficiais" style="display:block;margin:0 auto 6px auto;max-width:100%;height:auto;">
                  <div style="font-size:9px;line-height:12px;font-weight:bold;color:#2f241e;">SINERGIAS OFICIAIS</div>
                  <div style="font-size:8px;line-height:11px;color:#6c5a50;margin-top:3px;">Inspiradas no livro</div>
                </td>
                <td class="benefit-cell" style="width:16.66%;padding:14px 8px;text-align:center;vertical-align:top;border-left:1px solid #eadbcf;box-sizing:border-box;">
                  <img src="cid:iconDroplet" width="27" height="27" alt="Óleos essenciais" style="display:block;margin:0 auto 6px auto;max-width:100%;height:auto;">
                  <div style="font-size:9px;line-height:12px;font-weight:bold;color:#2f241e;">ÓLEOS ESSENCIAIS</div>
                  <div style="font-size:8px;line-height:11px;color:#6c5a50;margin-top:3px;">Harmonia olfativa</div>
                </td>
                <td class="benefit-cell" style="width:16.66%;padding:14px 8px;text-align:center;vertical-align:top;border-left:1px solid #eadbcf;box-sizing:border-box;">
                  <img src="cid:iconLeaf" width="27" height="27" alt="Perfumes veganos" style="display:block;margin:0 auto 6px auto;max-width:100%;height:auto;">
                  <div style="font-size:9px;line-height:12px;font-weight:bold;color:#2f241e;">PERFUMES VEGANOS</div>
                  <div style="font-size:8px;line-height:11px;color:#6c5a50;margin-top:3px;">Encontros naturais</div>
                </td>
                <td class="benefit-cell" style="width:16.66%;padding:14px 8px;text-align:center;vertical-align:top;border-left:1px solid #eadbcf;box-sizing:border-box;">
                  <img src="cid:iconGift" width="27" height="27" alt="Compre quatro e pague três" style="display:block;margin:0 auto 6px auto;max-width:100%;height:auto;">
                  <div style="font-size:9px;line-height:12px;font-weight:bold;color:#2f241e;">COMPRE 4, PAGUE 3</div>
                  <div style="font-size:8px;line-height:11px;color:#6c5a50;margin-top:3px;">Escolha suas sinergias</div>
                </td>
                <td class="benefit-cell" style="width:16.66%;padding:14px 8px;text-align:center;vertical-align:top;border-left:1px solid #eadbcf;box-sizing:border-box;">
                  <img src="cid:iconCard" width="27" height="27" alt="Desconto no Pix" style="display:block;margin:0 auto 6px auto;max-width:100%;height:auto;">
                  <div style="font-size:9px;line-height:12px;font-weight:bold;color:#2f241e;">3% NO PIX</div>
                  <div style="font-size:8px;line-height:11px;color:#6c5a50;margin-top:3px;">Desconto no pagamento</div>
                </td>
                <td class="benefit-cell" style="width:16.66%;padding:14px 8px;text-align:center;vertical-align:top;border-left:1px solid #eadbcf;box-sizing:border-box;">
                  <img src="cid:iconTruck" width="27" height="27" alt="Frete grátis" style="display:block;margin:0 auto 6px auto;max-width:100%;height:auto;">
                  <div style="font-size:9px;line-height:12px;font-weight:bold;color:#2f241e;">FRETE GRÁTIS</div>
                  <div style="font-size:8px;line-height:11px;color:#6c5a50;margin-top:3px;">Disponível na coleção</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- 6. TÍTULO DA VITRINE -->
        <tr>
          <td align="center" style="padding:5px 24px 14px 24px;background-color:#fffaf5;">
            <img src="cid:iconHeart" width="20" height="20" alt="" style="display:inline-block;vertical-align:middle;margin-right:7px;max-width:100%;height:auto;">
            <span class="section-title" style="font-family:Georgia,'Times New Roman',serif;font-size:23px;line-height:28px;color:#33241c;vertical-align:middle;">SEIS PERSONALIDADES. UMA MESMA IDEIA DE ENCONTRO.</span>
            <div class="section-subtitle" style="font-size:13px;line-height:19px;color:#5c4b41;margin-top:5px;">Escolha a sinergia que lembra seu irmão — ou justamente aquela diferença que faz vocês se completarem.</div>
          </td>
        </tr>

        <!-- 7. GRADE DE 6 PRODUTOS -->
        <tr>
          <td style="padding:0 14px 20px 14px;background-color:#fffaf5;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
              <tr>
                ${cardProduto_(U.sinergia1,U.foto1,'SINERGIA 1','Lavanda · Bergamota · Ylang-ylang','R$149,90','Delicada, luminosa e elegante.','ESCOLHER SINERGIA 1')}
                ${cardProduto_(U.sinergia2,U.foto2,'SINERGIA 2','Manjerona · Laranja Doce · Vetiver','R$39,90','Herbal, cítrica e terrosa.','ESCOLHER SINERGIA 2')}
                ${cardProduto_(U.sinergia3,U.foto3,'SINERGIA 3','Cedro · Sândalo · Patchouli','R$39,90','Madeira, cremosidade e terra.','ESCOLHER SINERGIA 3')}
                ${cardProduto_(U.sinergia4,U.foto4,'SINERGIA 4','Capim-limão · Manjericão · Olíbano','R$149,90','Cítrico, herbal e resinoso.','ESCOLHER SINERGIA 4')}
                ${cardProduto_(U.sinergia5,U.foto5,'SINERGIA 5','Vetiver · Cipreste · Sálvia sclarea','R$149,90','Terrosa, amadeirada e aromática.','ESCOLHER SINERGIA 5')}
                ${cardProduto_(U.sinergia6,U.foto6,'SINERGIA 6','Palmarosa · Laranja Amarga · Ho Wood','R$39,90','Floral suave, cítrico e amadeirado.','ESCOLHER SINERGIA 6')}
              </tr>
            </table>
          </td>
        </tr>

        <!-- 8. BANNER SECUNDÁRIO / HISTÓRIA EM 3 COLUNAS -->
        <tr>
          <td style="padding:0 20px 22px 20px;background-color:#fffaf5;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#f5eee7;border-radius:8px;overflow:hidden;">
              <tr>
                <td class="story-col" valign="middle" style="width:34%;padding:0;vertical-align:middle;box-sizing:border-box;">
                  <img class="story-image" src="${U.historia}" width="292" height="195" alt="Dois irmãos em um momento de cumplicidade" style="display:block;width:100%;height:auto;max-width:100%;border:0;">
                </td>
                <td class="story-col" valign="middle" style="width:43%;padding:22px 18px;vertical-align:middle;box-sizing:border-box;border-left:1px solid #eadbcf;">
                  <div class="story-title" style="font-family:Georgia,'Times New Roman',serif;font-size:25px;line-height:30px;color:#3b291f;margin:0 0 10px 0;">“Algumas histórias só existem porque foram vividas a dois.”</div>
                  <div class="story-body" style="font-size:13px;line-height:19px;color:#5d4a40;margin:0 0 14px 0;">Irmãos podem ter gostos diferentes, caminhos diferentes e até maneiras opostas de olhar o mundo. Ainda assim, há uma parte da história que pertence aos dois.</div>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;margin:0 0 14px 0;">
                    <tr>
                      <td style="width:33.33%;padding:4px;text-align:center;vertical-align:top;box-sizing:border-box;">
                        <img src="cid:iconPeople" width="24" height="24" alt="Personalidades" style="display:block;margin:0 auto 5px auto;max-width:100%;height:auto;">
                        <div style="font-size:8px;line-height:11px;font-weight:bold;color:#4a372c;">PERSONALIDADES QUE SE ENCONTRAM</div>
                      </td>
                      <td style="width:33.33%;padding:4px;text-align:center;vertical-align:top;box-sizing:border-box;">
                        <img src="cid:iconStar" width="24" height="24" alt="Memórias" style="display:block;margin:0 auto 5px auto;max-width:100%;height:auto;">
                        <div style="font-size:8px;line-height:11px;font-weight:bold;color:#4a372c;">MEMÓRIAS QUE FICAM</div>
                      </td>
                      <td style="width:33.33%;padding:4px;text-align:center;vertical-align:top;box-sizing:border-box;">
                        <img src="cid:iconLink" width="24" height="24" alt="Conexões" style="display:block;margin:0 auto 5px auto;max-width:100%;height:auto;">
                        <div style="font-size:8px;line-height:11px;font-weight:bold;color:#4a372c;">ALGO QUE NASCE ENTRE OS DOIS</div>
                      </td>
                    </tr>
                  </table>
                  <a href="${U.sinergias}" style="display:inline-block;background-color:#3a2114;color:#ffffff;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;padding:11px 14px;border-radius:3px;">VER TODA A COLEÇÃO SINERGIA</a>
                </td>
                <td class="story-col" valign="middle" align="center" style="width:23%;padding:18px 12px;vertical-align:middle;text-align:center;box-sizing:border-box;border-left:1px solid #eadbcf;">
                  <div class="circle-box" style="width:170px;height:170px;max-width:170px;border:1px solid #9f7255;border-radius:999px;box-sizing:border-box;margin:0 auto;padding:37px 16px;text-align:center;">
                    <div style="font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:30px;font-weight:bold;color:#70452e;">1 + 1 = 3</div>
                    <div style="font-size:11px;line-height:16px;color:#5d4a40;margin-top:8px;">Quando o encontro cria algo que não existiria separado.</div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- 9. RODAPÉ INSTITUCIONAL / 4 COLUNAS -->
        <tr>
          <td style="padding:0;background-color:#fffdf9;border-top:1px solid #eadbcf;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
              <tr>
                <td class="footer-col" valign="top" style="width:25%;padding:22px 18px;vertical-align:top;box-sizing:border-box;">
                  <div style="font-family:Georgia,'Times New Roman',serif;font-size:17px;line-height:21px;letter-spacing:2px;color:#17261c;">ESSÊNCIA DO BRASIL</div>
                  <div style="font-size:10px;line-height:15px;color:#6a5a50;margin-top:7px;">A natureza inspira.<br>A essência transforma.</div>
                </td>
                <td class="footer-col" valign="top" style="width:25%;padding:22px 18px;vertical-align:top;border-left:1px solid #eadbcf;box-sizing:border-box;">
                  <div style="font-size:10px;line-height:14px;font-weight:bold;color:#2f241e;margin-bottom:8px;">ATENDIMENTO</div>
                  <div style="font-size:10px;line-height:16px;color:#5e4d43;word-break:break-word;">contato@essenciadobrasil.com.br<br>essenciadobrasil.com.br</div>
                </td>
                <td class="footer-col" valign="top" style="width:25%;padding:22px 18px;vertical-align:top;border-left:1px solid #eadbcf;box-sizing:border-box;">
                  <div style="font-size:10px;line-height:14px;font-weight:bold;color:#2f241e;margin-bottom:8px;">SIGA-NOS</div>
                  <div style="font-size:10px;line-height:17px;color:#5e4d43;">Instagram · Facebook<br>TikTok · WhatsApp</div>
                </td>
                <td class="footer-col" valign="top" style="width:25%;padding:22px 18px;vertical-align:top;border-left:1px solid #eadbcf;box-sizing:border-box;">
                  <div style="font-size:10px;line-height:14px;font-weight:bold;color:#2f241e;margin-bottom:8px;">FORMAS DE PAGAMENTO</div>
                  <div style="font-size:10px;line-height:17px;color:#5e4d43;font-weight:bold;">PIX · VISA · MASTERCARD<br>AMEX · BOLETO</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- 10. FAIXA FINAL / DESCADASTRO -->
        <tr>
          <td align="center" style="padding:16px 28px;background-color:#3a2114;color:#f9eee4;font-size:10px;line-height:16px;text-align:center;">
            <img src="cid:iconSparkle" width="18" height="18" alt="" style="display:inline-block;vertical-align:middle;margin-right:8px;max-width:100%;height:auto;">
            Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>

</body>
</html>`;

  return html;
}

function cardProduto_(url, foto, nome, notas, preco, descricao, botao) {
  return `
    <td class="product-cell" valign="top" style="width:16.66%;padding:6px;vertical-align:top;box-sizing:border-box;">
      <div style="background-color:#fbf6f0;border:1px solid #eee1d6;border-radius:6px;padding:8px 7px 10px 7px;text-align:center;box-sizing:border-box;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#ffffff;border:1px solid #efe4d8;border-radius:4px;margin:0 0 8px 0;">
          <tr>
            <td align="center" valign="middle" style="height:118px;padding:6px;background-color:#ffffff;box-sizing:border-box;">
              <a href="${url}" style="text-decoration:none;color:#2f241e;">
                <img class="product-image" src="${foto}" width="112" height="112" alt="${nome}" style="display:block;width:112px;height:112px;max-width:100%;margin:0 auto;border:0;background-color:#ffffff;">
              </a>
            </td>
          </tr>
        </table>
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:11px;line-height:14px;font-weight:bold;color:#2f241e;min-height:28px;">${nome}</div>
        <div style="font-size:8px;line-height:11px;color:#6a574c;min-height:33px;margin-top:4px;">${notas}</div>
        <div style="font-size:8px;line-height:12px;color:#5c4b41;min-height:28px;margin-top:5px;">${descricao}</div>
        <div style="font-size:11px;line-height:15px;color:#3a2114;font-weight:bold;margin:6px 0;">${preco}</div>
        <a href="${url}" style="display:block;border:1px solid #9f7255;color:#3a2114;text-decoration:none;font-size:8px;line-height:11px;font-weight:bold;padding:8px 3px;border-radius:3px;box-sizing:border-box;">${botao}</a>
      </div>
    </td>`;
}

function criarIconesDiaDoIrmao_() {
  var B64 = {
    heart: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABwklEQVR4nO2a3XEDMQiEFU9qSRmpxyW5npThZpynm8ncHBI/u3Dx8b3aLBKWEEIeo2mapmmaq/KBErp/f72kzx4/T7cflu5GSGA2OAnNoFm6R9w8RmP4BqmxY+lKuALgdbayZ+nOMC8byclsCWpsWLorTAE4cmhxJtmzdDW2KU5WOixdjY4qB6Amr7FD6mqC7UqC0fNXsmfpzlAFAFFwVKAZd9nEkNsqgrsQehc6ANUDqKYDYDWI1usZWMZoCsAmfOYgWMf4aRH9b2zjnh2v6f0AJp7aIpQE0c2LSFCpDRHPndz7fc9EIn0B9QpAlKnaJYrYXvB+wMalO0IrxxZYv7ykLfFW/QCPhvsUOFtHyGtLSWx7WC9DCB+qStADqrmx10EXYOHboDRRRqWIyPp7INfhyp5h1DesH8A81iQtRODpDRFEEJgXL2gAMrcCyhd8BaC3Art9ntYTRN7ykFACgDgaGUfeEbQVwMgHDE3qFvDmg8xns5J3gVkQsnuN9ABY8kHWvv9LygrIvuJaSNsCq3xQ9VxOuw5rqX5fSE2Cll80q6xOPwU0E8u8U5Qcg7MJZvcWLv//gFJWp0DTNE3TNA2TX7OmOqDNNPbsAAAAAElFTkSuQmCC',
    leaf: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABiklEQVR4nO2a0Y3DIBBE96KrxWWknpSUeq6Mayb5smQhYwwzs1jyvN+EhRkvCwZHGGOMMcaYe/Izo9PXc/nUfnv//aeOKa2zI9E1Wma8nssHNUxuwIjwkj2R27iICTIDGMJLVqF7sUdNkBjQEn80WMVUOYJuQE1AzyB7TEBrwANpXMIQ3wMjLtWAPdBB1tqzTKUZwCxM2/a1rGIVWYoBTPE9whgmSKYAKz1LgYpaAhugWO/3qIlH+6dngHovz44vXwUYKE2FDGCn/2gxRcZBzQDkSfWIZ2bEJaaAYg9xlukGzBQfkfQu0PP/7BOhX3ZApCBli4+4wBRYmSE+gpwBo0vWLPERyTWAJZ65/4AMQE95WE8eiZNSA66W9lvoBpxJT/aOEQE24MzlRc//2f23kEyBVTRbvOLsgWJA6+aGgaqO0DKgNZisN8VeUlaBKxW9kmnLINKOWUhpgVjXWci94giS42sVis2TJAO2A1V9H8CCGvjoi43sa++z3P4bIWOMMcYYY4wxxpjb8QUqeutNWoft9wAAAABJRU5ErkJggg==',
    truck: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA8klEQVR4nO3Y0RGCMAyAYfCcxTGcx5GYhzFYRl85hbZJk6bY/3vjPE1I01iYJgAAAAAAAAAA0LPX8/FOXUvM0mAtLev2k98+n2Xd5u9raYybPr32ciuvWaxLFcDDZQpwtLq5LVJCPAM0+6zUWazczZcW50j3HaAdwqXfu2t+vJXUTaQ+k3Rp9x3gjQJEJxCt6xmwl9rXNafV4TuAAkQnEG34ApgMwZqjqEWsGl2/D9DiJChAAaITiKYeVKn3BNbvEDxjDd8BZs8CLf8tLGOpO6C01SzOA56xqrZALqDlYcgrVvUMOAvscRJsGQsAAAAA8M8+wPxwORVGaL8AAAAASUVORK5CYII=',
    card: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAyUlEQVR4nO3YwQ3CMBBEUYOohTKoh5JST8qgGXLyhYtnI4fJZv87R9F4sFcOrQEAAAAAgGpukYffr+f3qCCzLetHWttdfWGmxbem55UKyLb4Tsk9LCDr4rtR/kf0herZcor8aPIMuCoKcAdwC8+A7EPxV/kdQAHuAG7cA44MkgEFuAO4UYA7gBsFuAO4he8B3YxvgjPcKcrvgPIF7D4CZ9i+M5TfARTgDuDGX2KjB7IPu1F+6QhkLUHJLc+AbCVkywsAAAAAAPA3G+1ZLhUN2NMDAAAAAElFTkSuQmCC',
    gift: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABBklEQVR4nO2Y0RHCIBBE0bEWy7AeS7Iey7AZ/coPgxNYDtfMvfeZcGTZ3HEMpQAAAKTltHLy++36rp89nq/db6pxCksmbS2gprUgNW6Gc+RkpfQtojVOjZsl1IBRcdt4NS6CsHTqrdvI8ogoh/AS2Pgmbk+0GqcSYkD9d1Ytsn4fUQrLMuAopDcAAHLT3Vujj6C/oOfskL4LYIBbgJuLGrjqbD6Dsk+RAWrgEbtCi/QZgAFuAW6knfyf63+0O8mb4MxHN0ZvknrmGCV9CWCAW4AbDHALcIMBbgFuMMAtwA0GuAW4wQC3ADcY4BbgBgPcAtxggFuAm/SXoukzAAPcAgAAAADAxAceUlm6WgFoGgAAAABJRU5ErkJggg==',
    sparkle: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABNUlEQVR4nO2a2w3CMAxFDWIWxmAeRmIexmAZ+KpUIZqYpLknUu/5AkRj+9Z2Hm2EMcYYc1hOpPH77fpePj+eL8SXM2F0JjAB1nf/13cVzgDaARoLQBjd6v5EH3AG0A7QoAIs6U8tgiIAAWp1ru4DLgHaARqpAKXNDzUdOgNoB2gsgMpQ5vCD6AOXkYP3BqE4Mdp90FrQmUD2GCNL90AKZ0faaLpQeYdG2079mQy4Rq9vzU2QDHpN78zRLMAMZ/rffrTgHtDnzkFngRKHWweU2AqkFEDLNT0MXQr3dmhFc5Vthv4NRjWz4A9GMr+PxOcBtAM0UgGyda1cWfoFCcLoTFgAtcFafat3lmgGLHVP1X+ES8ACIAJkHoyowDOArP+ICQSgsQCU4dILEkqcAbQDxhhjjDEUH7QcoGI8aEYuAAAAAElFTkSuQmCC',
    people: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABN0lEQVR4nO2ZyxXCIBAA0WctlmE9lmQ9lmEzevLCS2C/QHTmaAizWZcNaCkAAAAAAPCPnLwT3G/Xd/3Z4/lyzzvKZ75xK5CayERk+c5ZwWjGzfSpE6CVeJOQ7VOVjHT9Ra3TET7TEuhJsppghk+cgDrLPWl93VvKWT5XBfwCJGB2ALMhAdKB2iajbWKzfK4K2Asqagc4wheyOenheU9n+9QV4C3l1XymJSCVRO0IM33mHqDdmXnJ8plu0qzLiERk+tynQSlRp8Fon/kwpGXV3xFEWWpNJj2ft8bP9JmD8TxI697RvktvUksg9dhRvcPia/aAI21pLb5SlPsA6ytt5ft2E+A9zfWCqucf7fui7gFaWuUnvZb5T9NmBWStxdlsPZeoB2R+A5kcNW4AAAAAAAAAAAAAgCQ+dWT0N+32yOkAAAAASUVORK5CYII=',
    star: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABjElEQVR4nO2a3Q3CMAyEU8QsjME8jNR5OkaXgadKUZW0TvxzlrjvCVCJnbMdJ4FSCCGEEPKvLEjjn/fre7xetx3iywNhNBMwAerot95HwQxAGEVFuwU8A+rFDyEMXAA04QJkaH01KTIAWQahAmSLfilJMgBJGgFQZRAmQMb0LyVRBqAIEUAafUQZPCUPobauWruSUgstAYlD0evDrbFWFDItYjUzvoom0kvFLEJo/BOVQG+gDMdabXCGI5ipJCx8GV4EWwYQmWAViKkugBbBMgun2yBKBOsSVNduVIfwsqPeCEV0CE+R3aOkddK765huhSPaobUN87OApwgeY5sLYH3x4X1E5oUI2gE0pgJ43ft5lgE0A47JIE+Voisxa+oJn0WIPlm6ZMDVJO6iHX35YiaAZGLSXV3vWamtEdzXgKvJHJNH3ji5rgEj6Xx81vvvkFcJmAx6bn/aOr76vnWrNRegx4yzd+NaCOC+Bqzbvsw6GtESeSOk+XIPj8hl+RGmC/pWmBBCCCGEEDLED2SaAVz5POX3AAAAAElFTkSuQmCC',
    link: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABHUlEQVR4nO3Z0RGCMBBF0ehYC2VQDyVZj2XYDH4xwzgksMtbkug9v46btwkGgikBAAAAAAAA+Cc3VaFpHObcZ8/XWzaO2qlgpaZzlJOxHt9b1/UlT+PfFBOxlcNa964Y1ENV52xd02x5f+eKlVLmWTscQtXENA5zxKbozXcoSNQKqnly7u4BvTSf0nauvT3BvAm22vxCeheI2qmvVurDdAW0vvoLS85HZJCU2nloyjHvAb+GCagdoLbib6unZ4A1S+7iFdBDs0eU+qh2Goxizbc7AZ7Hy1pCzgK5IhGTMI3D7K0behosDWIZzFPf+p7Bmsd1nj8zoLWuhyWL5DSoWH3VHcdaR7Jq6tvllW+bm7/P9/p/AwAAAAAAANCoDzXwnl/0LXD6AAAAAElFTkSuQmCC',
    book: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAwElEQVR4nO3auw2EQBAE0eVELIRBPBcS8RAGyYCLMEC7SFOLpp6HgabVDB+DUiRJkiRlNJDD//O0n4+XdQvP84se2JvHxq9X6YvuNiv9BlgAHYA21p7w5kld8zyJmpN+A9IXUH0LlNL2amxZ6Yg56TcgfQFNt0DUN3vEnPQbYAF0AJoF0AFoFkAHoFkAHYBmAXQAmgXQAWgWQAegWQAdgGYBdACaBdABaOkL8AeJyCA9sgA6AM3f5KIHSpIkSerCAauEJL9RPXFeAAAAAElFTkSuQmCC',
    droplet: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABWklEQVR4nO2b243CUAxEA9paKIN6KIl6toxtBr4iIQR57cyZSJnzw09i+05s5z7CMJRSSiklwe16ebz+JjilHH8a9P33D4/nTDvcGxEBvqV8ohRwAeYGSYvQEiCdLW18ZBZgAkwNPikCIsDWwRAixHrA+1NPzAGGARBgzYQnUQpWAVTBO0XAS2Au1elSsAnwn7k+WQoWAVzBOuxiJbA2talSkAugXOYSpSAVwLHGd4sgE4Bexan8WXuAqo6d/UAiALG95SqF7gc4jLpS1mG3GZAOIE0FSAeQpgKkA0hTAdIBpKkA6QDSdEtMYSR1qKHwi+4K78neiEwAOgtU/toEncYPdzRGlYHST+R0mLx/DrkAys1LYrM1+omM8vqt/BBORsZBTT1F+oDF2rTmBvMqxJprlURPhpZ+LO18u2Czty2pTbxW8UXMEiHIafXhvxGKsoc/TJRSSikH5gklvLZNdSsrswAAAABJRU5ErkJggg=='
  };

  return {
    iconHeart: Utilities.newBlob(Utilities.base64Decode(B64.heart), 'image/png', 'heart.png'),
    iconLeaf: Utilities.newBlob(Utilities.base64Decode(B64.leaf), 'image/png', 'leaf.png'),
    iconTruck: Utilities.newBlob(Utilities.base64Decode(B64.truck), 'image/png', 'truck.png'),
    iconCard: Utilities.newBlob(Utilities.base64Decode(B64.card), 'image/png', 'card.png'),
    iconGift: Utilities.newBlob(Utilities.base64Decode(B64.gift), 'image/png', 'gift.png'),
    iconSparkle: Utilities.newBlob(Utilities.base64Decode(B64.sparkle), 'image/png', 'sparkle.png'),
    iconPeople: Utilities.newBlob(Utilities.base64Decode(B64.people), 'image/png', 'people.png'),
    iconStar: Utilities.newBlob(Utilities.base64Decode(B64.star), 'image/png', 'star.png'),
    iconLink: Utilities.newBlob(Utilities.base64Decode(B64.link), 'image/png', 'link.png'),
    iconBook: Utilities.newBlob(Utilities.base64Decode(B64.book), 'image/png', 'book.png'),
    iconDroplet: Utilities.newBlob(Utilities.base64Decode(B64.droplet), 'image/png', 'droplet.png')
  };
}

function validarTemplateDiaDoIrmao_(html, inlineImages) {
  if (!html || typeof html !== 'string') {
    throw new Error('HTML vazio ou inválido.');
  }

  // 1) Breakpoint obrigatório = 900 + 20.
  if (html.indexOf('@media only screen and (max-width:920px)') === -1) {
    throw new Error('Breakpoint mobile incorreto: esperado 920px.');
  }

  // 2) Tabela principal fluida e limitada a 900px.
  if (html.indexOf('max-width:900px') === -1 || html.indexOf('width="100%"') === -1) {
    throw new Error('Envelope principal não está fluido com max-width de 900px.');
  }

  // 3) Proíbe o padrão de separador que impede quebra de linha.
  if (html.indexOf('&nbsp;•&nbsp;') !== -1) {
    throw new Error('Foi encontrado separador não quebrável proibido.');
  }

  // 4) Descadastro exato.
  var descadastro = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';
  if (html.indexOf(descadastro) === -1) {
    throw new Error('Texto de descadastro não confere com o padrão obrigatório.');
  }

  // 5) Todas as fotos/banners usam URL pública HTTPS e aparecem no HTML.
  var fotos = [
    DIA_IRMAO_URLS.hero,
    DIA_IRMAO_URLS.historia,
    DIA_IRMAO_URLS.foto1,
    DIA_IRMAO_URLS.foto2,
    DIA_IRMAO_URLS.foto3,
    DIA_IRMAO_URLS.foto4,
    DIA_IRMAO_URLS.foto5,
    DIA_IRMAO_URLS.foto6
  ];
  fotos.forEach(function(url) {
    if (url.indexOf('https://') !== 0) {
      throw new Error('Imagem fotográfica sem HTTPS: ' + url);
    }
    if (html.indexOf(url) === -1) {
      throw new Error('Imagem fotográfica aprovada não usada no HTML: ' + url);
    }
  });

  // 6) Todo <img> deve ter width, height e max-width:100%.
  var tagsImg = html.match(/<img\b[^>]*>/gi) || [];
  tagsImg.forEach(function(tag) {
    if (!/\bwidth="\d+"/i.test(tag)) {
      throw new Error('Imagem sem atributo HTML width: ' + tag);
    }
    if (!/\bheight="\d+"/i.test(tag)) {
      throw new Error('Imagem sem atributo HTML height: ' + tag);
    }
    if (!/max-width\s*:\s*100%/i.test(tag)) {
      throw new Error('Imagem sem max-width:100%: ' + tag);
    }
  });

  // 7) Toda tabela deve declarar width no HTML e também no style.
  var tagsTable = html.match(/<table\b[^>]*>/gi) || [];
  tagsTable.forEach(function(tag) {
    if (!/\bwidth="[^"]+"/i.test(tag)) {
      throw new Error('Tabela sem atributo HTML width: ' + tag);
    }
    if (!/style="[^"]*\bwidth\s*:/i.test(tag)) {
      throw new Error('Tabela sem width no style inline: ' + tag);
    }
  });

  // 8) Células que mudam width/display no mobile não podem ter width= como atributo HTML.
  var classesMoveis = ['stack100','top-strip-cell','nav-cell','benefit-cell','product-cell','story-col','footer-col','hero-copy','hero-art'];
  classesMoveis.forEach(function(classe) {
    var re1 = new RegExp('<td[^>]*class="[^"]*\\b' + classe + '\\b[^"]*"[^>]*\\bwidth=', 'i');
    var re2 = new RegExp('<td[^>]*\\bwidth=[^>]*class="[^"]*\\b' + classe + '\\b[^"]*"', 'i');
    if (re1.test(html) || re2.test(html)) {
      throw new Error('Célula responsiva com atributo width= proibido: .' + classe);
    }
  });

  // 9) Textos do hero precisam de classes próprias e ajustes mobile.
  ['hero-kicker','hero-title','hero-script','hero-formula','hero-body','hero-products'].forEach(function(classe) {
    if (html.indexOf('class="' + classe + '"') === -1) {
      throw new Error('Classe de texto do hero ausente: ' + classe);
    }
    var blocoMedia = html.substring(html.indexOf('@media only screen and (max-width:920px)'), html.indexOf('</style>'));
    var reClasse = new RegExp('\\.' + classe + '\\{[^}]*font-size:[^}]*line-height:[^}]*color:', 'i');
    if (!reClasse.test(blocoMedia)) {
      throw new Error('Classe do hero sem font-size/line-height/color mobile: ' + classe);
    }
  });


  if (html.indexOf('class="hero-product-link"') === -1 || html.indexOf('.hero-product-link{color:#2b1a12!important;}') === -1) {
    throw new Error('Links de produto do hero sem cor mobile própria.');
  }
  // Valida que o botão do hero possui cor de texto e fundo próprios no mobile,
  // sem amarrar a validação a um tamanho/padding específico.
  var blocoMediaHero = html.substring(html.indexOf('@media only screen and (max-width:920px)'), html.indexOf('</style>'));
  var reHeroButtonMobile = /\.hero-button\{[^}]*color:#ffffff!important;[^}]*background-color:#3a2114!important;[^}]*\}/i;
  if (!reHeroButtonMobile.test(blocoMediaHero)) {
    throw new Error('Botão do hero sem cor mobile própria.');
  }

  // 10) Conferência 1:1 entre inlineImages e cid: usados no HTML.
  var chavesInline = Object.keys(inlineImages).sort();
  var cids = [];
  var reCid = /cid:([A-Za-z0-9_-]+)/g;
  var m;
  while ((m = reCid.exec(html)) !== null) {
    if (cids.indexOf(m[1]) === -1) cids.push(m[1]);
  }
  cids.sort();

  if (JSON.stringify(chavesInline) !== JSON.stringify(cids)) {
    throw new Error(
      'Mismatch inlineImages x cid. inlineImages=' + JSON.stringify(chavesInline) +
      ' | cids=' + JSON.stringify(cids)
    );
  }

  // 11) Nenhuma foto/banner pode estar em cid:.
  ['hero','historia','foto1','foto2','foto3','foto4','foto5','foto6'].forEach(function(nome) {
    if (html.indexOf('cid:' + nome) !== -1) {
      throw new Error('Foto/banner não pode usar cid: ' + nome);
    }
  });

  return true;
}
