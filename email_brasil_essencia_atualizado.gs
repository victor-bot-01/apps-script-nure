/**
 * Essência do Brasil — "O Brasil tem muitos jeitos de ser"
 * Template responsivo Gmail / Google Apps Script
 *
 * Imagens fotográficas: URLs públicas.
 * inlineImages: reservado apenas a ícones CID (nenhum usado nesta versão).
 */

const EDB_EMAIL_CONFIG = {
  subject: 'O Brasil tem muitos jeitos de ser',
  senderName: 'Essência do Brasil'
};

function montarHtmlBrasil() {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>O Brasil tem muitos jeitos de ser</title>
<style>
@media only screen and (max-width:920px){
  .hero-desktop,.products-desktop{display:none!important;max-height:0!important;overflow:hidden!important;}
  .hero-mobile,.products-mobile{display:block!important;max-height:none!important;width:100%!important;height:auto!important;}
  .editorial-wrap{padding:22px 22px 18px!important;box-sizing:border-box!important;}
  .editorial-left,.editorial-right{display:block!important;width:100%!important;box-sizing:border-box!important;border-right:0!important;padding-left:0!important;padding-right:0!important;}
  .editorial-right{padding-top:18px!important;margin-top:18px!important;border-top:1px solid #c7b486!important;}
  .editorial-left{font-size:17px!important;line-height:25px!important;}
  .editorial-right{font-size:14px!important;line-height:21px!important;}
  .editorial-title{font-size:17px!important;line-height:23px!important;letter-spacing:1.6px!important;}
  .section-head{padding:8px 20px 14px!important;}
  .section-title{font-size:13px!important;line-height:18px!important;letter-spacing:2px!important;}
  .section-sub{font-size:9px!important;line-height:14px!important;letter-spacing:1.5px!important;}
  .mobile-card{
    display:block!important;
    width:100%!important;
    box-sizing:border-box!important;
    padding:0 0 22px!important;
    vertical-align:top!important;
  }
  .mobile-card .product-cat{font-size:8px!important;line-height:11px!important;letter-spacing:.8px!important;}
  .mobile-card .product-name{font-size:18px!important;line-height:22px!important;}
  .mobile-card .product-desc{font-size:12px!important;line-height:18px!important;}
  .mobile-card .product-btn{font-size:10px!important;line-height:14px!important;padding:10px 8px!important;border-radius:18px!important;}
  .banner2-left,.banner2-right{
    display:block!important;
    width:100%!important;
    box-sizing:border-box!important;
  }
  .banner2-left{padding:24px 20px!important;}
  .banner2-right{padding:24px 20px!important;}
  .b2-script{font-size:24px!important;line-height:30px!important;}
  .b2-title{font-size:17px!important;line-height:23px!important;letter-spacing:1.4px!important;}
  .b2-copy{font-size:9px!important;line-height:14px!important;letter-spacing:.9px!important;}
  .cta-wrap{padding:14px 20px 16px!important;box-sizing:border-box!important;}
  .cta-line{display:none!important;}
  .cta-cell{width:100%!important;padding:0!important;}
  .cta-btn{font-size:10px!important;line-height:14px!important;padding:12px 12px!important;border-radius:22px!important;}
  .footer-cell{display:inline-block!important;width:33.33%!important;box-sizing:border-box!important;vertical-align:top!important;border-left:0!important;padding:6px 6px!important;}
.footer-wrap{padding:12px 12px 9px!important;box-sizing:border-box!important;}
.footer-small{font-size:7px!important;line-height:11px!important;}
.footer-logo{font-size:15px!important;line-height:17px!important;}
  .footer-wrap{padding:18px 18px 14px!important;}
  .footer-small{font-size:9px!important;line-height:14px!important;}
  .footer-logo{font-size:18px!important;line-height:20px!important;}
  .signature{font-size:8px!important;line-height:13px!important;letter-spacing:1.4px!important;padding:11px 12px!important;}
  .unsubscribe{font-size:8px!important;line-height:13px!important;padding:10px 14px 13px!important;}
}

@media only screen and (max-width:480px){
  .editorial-wrap{padding:18px 16px 16px!important;}
  .editorial-left{font-size:15px!important;line-height:22px!important;}
  .editorial-right{font-size:13px!important;line-height:19px!important;}
  .editorial-title{font-size:15px!important;line-height:21px!important;letter-spacing:1.3px!important;}

  .section-head{padding:7px 14px 12px!important;}
  .section-title{font-size:11px!important;line-height:16px!important;letter-spacing:1.6px!important;}
  .section-sub{font-size:8px!important;line-height:12px!important;letter-spacing:1.1px!important;}

  .mobile-card{
    display:block!important;
    width:100%!important;
    box-sizing:border-box!important;
    padding:0 0 22px!important;
  }
  .mobile-card .product-name{font-size:18px!important;line-height:22px!important;}
  .mobile-card .product-desc{font-size:12px!important;line-height:18px!important;}
  .mobile-card .product-btn{font-size:10px!important;line-height:14px!important;padding:10px 8px!important;border-radius:18px!important;}
  .mobile-card .product-cat{font-size:8px!important;line-height:11px!important;}
  .products-mobile{padding:0 18px 4px!important;box-sizing:border-box!important;}

  .banner2-left,.banner2-right{
    display:block!important;
    width:100%!important;
    box-sizing:border-box!important;
  }
  .banner2-left{padding:22px 16px!important;}
  .banner2-right{padding:22px 16px!important;}
  .b2-script{font-size:23px!important;line-height:29px!important;}
  .b2-title{font-size:16px!important;line-height:22px!important;letter-spacing:1.2px!important;}
  .b2-copy{font-size:9px!important;line-height:14px!important;letter-spacing:.8px!important;}

  .cta-wrap{padding:11px 14px 12px!important;}
  .cta-btn{font-size:8px!important;line-height:11px!important;padding:10px 8px!important;}

  .footer-wrap{padding:10px 10px 8px!important;}
  .footer-cell{width:33.33%!important;padding:4px!important;}
  .footer-logo{font-size:13px!important;line-height:15px!important;}
  .footer-small{font-size:6px!important;line-height:9px!important;}
  .signature{font-size:6.5px!important;line-height:10px!important;letter-spacing:1px!important;padding:9px 8px!important;}
  .unsubscribe{font-size:6.5px!important;line-height:10px!important;padding:8px 10px 10px!important;}
}


@media only screen and (max-width:920px){
  .banner2-left{
    background:#D95B45!important;
    background-image:linear-gradient(110deg,#F2C94C 0%,#E9A33A 38%,#D95B45 72%,#B94E3D 100%)!important;
  }
}


@media only screen and (max-width:920px){
  html,body{margin:0!important;padding:0!important;width:100%!important;max-width:100%!important;overflow-x:hidden!important;}
  table{max-width:100%!important;}
  .products-mobile{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:0 16px 2px!important;overflow:hidden!important;}
  .products-mobile > table{width:100%!important;max-width:100%!important;table-layout:auto!important;}
  .products-mobile tr{display:block!important;width:100%!important;}
  .mobile-card{
    display:block!important;
    width:100%!important;
    max-width:100%!important;
    box-sizing:border-box!important;
    padding:0 0 24px!important;
    overflow:hidden!important;
  }
  .mobile-card img{
    display:block!important;
    width:76%!important;
    max-width:76%!important;
    height:auto!important;
    margin:0 auto!important;
  }
  .mobile-card .product-cat{
    font-size:10px!important;
    line-height:14px!important;
    letter-spacing:1px!important;
    margin-top:10px!important;
  }
  .mobile-card .product-name{
    font-size:22px!important;
    line-height:27px!important;
    margin-top:2px!important;
  }
  .mobile-card .product-desc{
    font-size:14px!important;
    line-height:21px!important;
    margin-top:7px!important;
  }
  .mobile-card .product-btn{
    font-size:11px!important;
    line-height:15px!important;
    padding:11px 10px!important;
    margin-top:12px!important;
    border-radius:20px!important;
  }

  .banner2-left,.banner2-right{
    display:block!important;
    width:100%!important;
    max-width:100%!important;
    box-sizing:border-box!important;
  }
  .cta-wrap,.footer-wrap{width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
}
@media only screen and (max-width:480px){
  .products-mobile{padding:0 14px 2px!important;}
  .mobile-card img{width:72%!important;max-width:72%!important;}
  .mobile-card .product-name{font-size:21px!important;line-height:25px!important;}
  .mobile-card .product-desc{font-size:14px!important;line-height:20px!important;}
}


@media only screen and (max-width:920px){
  .editorial-wrap{border-top:3px solid #E7B84B!important;}
  .editorial-title{border-left:3px solid #B94E3D!important;padding-left:12px!important;}
}

</style>
</head>
<body style="margin:0;padding:0;background:#ebe4d7;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;background:#ebe4d7;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:900px;border-collapse:collapse;background:#f7f1e6;">

<tr><td style="padding:0;">
<img class="hero-desktop" src="https://i.ibb.co/4LLGgHy/banner-hero-brasil-desktop-otimizado.jpg" width="900" height="408" alt="O Brasil tem muitos jeitos de ser" style="display:block;width:100%;max-width:100%;height:auto;border:0;">
<img class="hero-mobile" src="https://i.ibb.co/RTGDrFnH/banner-hero-brasil-mobile-otimizado.jpg" width="600" height="1066" alt="O Brasil tem muitos jeitos de ser" style="display:none;width:100%;max-width:100%;height:auto;border:0;max-height:0;overflow:hidden;">
</td></tr>

<tr><td class="editorial-wrap" style="padding:22px 56px 19px;background:#f7f1e6;border-top:3px solid #E7B84B;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
<tr>
<td class="editorial-left" style="width:42%;vertical-align:top;padding:0 28px 0 0;border-right:1px solid #c7b486;font-family:Georgia,serif;font-size:13px;line-height:20px;color:#263b32;">
Do Norte ao Sul, o Brasil muda de sotaque, de ritmo, de paisagem e de sabor. São festas, músicas, ingredientes, costumes e histórias diferentes convivendo dentro de um mesmo país.
<div style="margin-top:8px;">O Brasil tem muitos jeitos de ser.</div>
</td>
<td class="editorial-right" style="width:58%;vertical-align:top;padding:0 0 0 28px;font-family:Arial,sans-serif;font-size:10px;line-height:16px;color:#44514a;">
<div class="editorial-title" style="font-family:Georgia,serif;font-size:12px;line-height:17px;letter-spacing:2px;color:#17382f;border-left:3px solid #B94E3D;padding-left:12px;">E É TAMBÉM ESSA DIVERSIDADE<br>QUE INSPIRA NOSSOS AROMAS.</div>
<div style="margin-top:7px;">Se existe algo que define o Brasil, é a diversidade. E foi justamente dela que nasceu a nossa inspiração.</div>
<div style="margin-top:4px;">Na Essência do Brasil, encontramos na natureza e em suas diferentes origens uma maneira de traduzir essa pluralidade em fragrâncias.</div>
<div style="font-family:Georgia,serif;font-style:italic;margin-top:7px;color:#2d463b;">Mais do que aromas, diferentes formas de sentir o Brasil.</div>
</td>
</tr></table>
</td></tr>

<tr><td style="padding:0 32px 8px;background:#f7f1e6;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
<tr>
<td style="width:50%;height:3px;background:#E7B84B;font-size:1px;line-height:1px;">&nbsp;</td>
<td style="width:50%;height:3px;background:#B94E3D;font-size:1px;line-height:1px;">&nbsp;</td>
</tr>
</table>
</td></tr>
<tr><td class="section-head" style="padding:5px 32px 14px;text-align:center;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
<tr>
<td style="width:28%;"><div style="height:1px;background:#b9a786;font-size:1px;">&nbsp;</div></td>
<td class="section-title" style="width:44%;font-family:Georgia,serif;font-size:12px;line-height:17px;letter-spacing:3px;color:#17382f;">CONHEÇA NOSSOS AROMAS</td>
<td style="width:28%;"><div style="height:1px;background:#b9a786;font-size:1px;">&nbsp;</div></td>
</tr></table>
<div class="section-sub" style="font-family:Arial,sans-serif;font-size:8px;line-height:13px;letter-spacing:2.3px;color:#59655e;margin-top:6px;">QUATRO FRAGRÂNCIAS, QUATRO FORMAS DE SENTIR O BRASIL.</div>
</td></tr>

<!-- DESKTOP 4 COLUNAS -->
<tr class="products-desktop"><td style="padding:0 24px 18px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;table-layout:fixed;"><tr>
<td style="width:25%;vertical-align:top;padding:0 10px;">
<img src="https://i.ibb.co/BKK9q0j2/copaiba-amazonica-email.jpg" width="500" height="500" alt="Copaíba Amazônica" style="display:block;width:100%;max-width:100%;height:auto;">
<div class="product-cat" style="font:8px/12px Arial,sans-serif;letter-spacing:1.4px;color:#58685f;margin-top:8px;">PERFUME NATURAL</div>
<div class="product-name" style="font:17px/20px Georgia,serif;color:#17382f;">Copaíba Amazônica</div>
<div class="product-desc" style="font:10px/15px Arial,sans-serif;color:#404a45;margin-top:5px;">Da floresta vem uma fragrância de contrastes: o frescor da bergamota e do limão-tahiti encontra a profundidade amadeirada e resinosa da copaíba.</div>
<a class="product-btn" href="https://essenciadobrasil.com.br/produtos/perfume-copaiba-amazonica-masculino-100ml-natural-e-vegano/" style="display:block;background:#07513a;border-radius:17px;color:#fff;text-decoration:none;text-align:center;font:8px/12px Arial,sans-serif;padding:8px 4px;margin-top:9px;">CONHEÇA A COPAÍBA →</a>
</td>
<td style="width:25%;vertical-align:top;padding:0 10px;border-left:1px solid #cbb993;">
<img src="https://i.ibb.co/yc40VWMk/tangerina-radiante-email.jpg" width="500" height="500" alt="Tangerina Radiante" style="display:block;width:100%;max-width:100%;height:auto;">
<div class="product-cat" style="font:8px/12px Arial,sans-serif;letter-spacing:1.4px;color:#58685f;margin-top:8px;">PERFUME NATURAL</div>
<div class="product-name" style="font:17px/20px Georgia,serif;color:#17382f;">Tangerina Radiante</div>
<div class="product-desc" style="font:10px/15px Arial,sans-serif;color:#404a45;margin-top:5px;">Luminoso e vibrante, parte do frescor dos cítricos e encontra nuances herbais, amadeiradas e suavemente adocicadas.</div>
<a class="product-btn" href="https://essenciadobrasil.com.br/produtos/perfume-tangerina-radiante-masculino-100ml-natural-e-vegano/" style="display:block;background:#07513a;border-radius:17px;color:#fff;text-decoration:none;text-align:center;font:8px/12px Arial,sans-serif;padding:8px 4px;margin-top:9px;">QUERO CONHECER →</a>
</td>
<td style="width:25%;vertical-align:top;padding:0 10px;border-left:1px solid #cbb993;">
<img src="https://i.ibb.co/HfNj8yNM/laranja-doce-brilhante-email.jpg" width="500" height="500" alt="Laranja Doce Brilhante" style="display:block;width:100%;max-width:100%;height:auto;">
<div class="product-cat" style="font:8px/12px Arial,sans-serif;letter-spacing:1.4px;color:#58685f;margin-top:8px;">PERFUME NATURAL</div>
<div class="product-name" style="font:17px/20px Georgia,serif;color:#17382f;">Laranja Doce Brilhante</div>
<div class="product-desc" style="font:10px/15px Arial,sans-serif;color:#404a45;margin-top:5px;">A vivacidade da laranja-doce ganha uma expressão delicadamente floral, envolvida por nuances amadeiradas e terrosas.</div>
<a class="product-btn" href="https://essenciadobrasil.com.br/produtos/perfume-laranja-doce-brilhante-feminino-100ml-natural-vegano/" style="display:block;background:#07513a;border-radius:17px;color:#fff;text-decoration:none;text-align:center;font:8px/12px Arial,sans-serif;padding:8px 4px;margin-top:9px;">QUERO CONHECER →</a>
</td>
<td style="width:25%;vertical-align:top;padding:0 10px;border-left:1px solid #cbb993;">
<img src="https://i.ibb.co/tTmjgYj5/limao-siciliano-radiante-email.jpg" width="500" height="500" alt="Limão Siciliano Radiante" style="display:block;width:100%;max-width:100%;height:auto;">
<div class="product-cat" style="font:8px/12px Arial,sans-serif;letter-spacing:1.4px;color:#58685f;margin-top:8px;">PERFUME NATURAL</div>
<div class="product-name" style="font:17px/20px Georgia,serif;color:#17382f;">Limão Siciliano Radiante</div>
<div class="product-desc" style="font:10px/15px Arial,sans-serif;color:#404a45;margin-top:5px;">Cítrico e luminoso, revela o frescor do limão antes de encontrar um coração floral leve e um fundo suavemente amadeirado.</div>
<a class="product-btn" href="https://essenciadobrasil.com.br/produtos/perfume-limao-siciliano-radiante-feminino-100ml-natural/" style="display:block;background:#07513a;border-radius:17px;color:#fff;text-decoration:none;text-align:center;font:8px/12px Arial,sans-serif;padding:8px 4px;margin-top:9px;">QUERO CONHECER →</a>
</td>
</tr></table>
</td></tr>

<!-- MOBILE PRODUTOS EMPILHADOS -->
<tr><td class="products-mobile" style="display:none;padding:0 16px 2px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">

<tr><td class="mobile-card" style="width:100%;vertical-align:top;padding:0 0 24px;">
<img src="https://i.ibb.co/BKK9q0j2/copaiba-amazonica-email.jpg" width="500" height="500" alt="Copaíba Amazônica" style="display:block;width:76%;max-width:76%;height:auto;margin:0 auto;border:0;border-bottom:3px solid #E7B84B;">
<div class="product-cat" style="font:10px/14px Arial,sans-serif;letter-spacing:1px;color:#58685f;margin-top:10px;padding-top:7px;border-top:2px solid #B94E3D;">PERFUME NATURAL</div>
<div class="product-name" style="font:22px/27px Georgia,serif;color:#17382f;margin-top:2px;">Copaíba Amazônica</div>
<div class="product-desc" style="font:14px/21px Arial,sans-serif;color:#404a45;margin-top:7px;">Frescor cítrico com profundidade amadeirada e resinosa da copaíba.</div>
<a class="product-btn" href="https://essenciadobrasil.com.br/produtos/perfume-copaiba-amazonica-masculino-100ml-natural-e-vegano/" style="display:block;background:#07513a;border-radius:20px;color:#fff;text-decoration:none;text-align:center;font:11px/15px Arial,sans-serif;padding:11px 10px;margin-top:12px;">CONHEÇA →</a>
</td></tr>

<tr><td class="mobile-card" style="width:100%;vertical-align:top;padding:0 0 24px;">
<img src="https://i.ibb.co/yc40VWMk/tangerina-radiante-email.jpg" width="500" height="500" alt="Tangerina Radiante" style="display:block;width:76%;max-width:76%;height:auto;margin:0 auto;border:0;border-bottom:3px solid #E7B84B;">
<div class="product-cat" style="font:10px/14px Arial,sans-serif;letter-spacing:1px;color:#58685f;margin-top:10px;padding-top:7px;border-top:2px solid #B94E3D;">PERFUME NATURAL</div>
<div class="product-name" style="font:22px/27px Georgia,serif;color:#17382f;margin-top:2px;">Tangerina Radiante</div>
<div class="product-desc" style="font:14px/21px Arial,sans-serif;color:#404a45;margin-top:7px;">Cítricos luminosos com nuances herbais, amadeiradas e suavemente adocicadas.</div>
<a class="product-btn" href="https://essenciadobrasil.com.br/produtos/perfume-tangerina-radiante-masculino-100ml-natural-e-vegano/" style="display:block;background:#07513a;border-radius:20px;color:#fff;text-decoration:none;text-align:center;font:11px/15px Arial,sans-serif;padding:11px 10px;margin-top:12px;">CONHEÇA →</a>
</td></tr>

<tr><td class="mobile-card" style="width:100%;vertical-align:top;padding:0 0 24px;">
<img src="https://i.ibb.co/HfNj8yNM/laranja-doce-brilhante-email.jpg" width="500" height="500" alt="Laranja Doce Brilhante" style="display:block;width:76%;max-width:76%;height:auto;margin:0 auto;border:0;border-bottom:3px solid #E7B84B;">
<div class="product-cat" style="font:10px/14px Arial,sans-serif;letter-spacing:1px;color:#58685f;margin-top:10px;padding-top:7px;border-top:2px solid #B94E3D;">PERFUME NATURAL</div>
<div class="product-name" style="font:22px/27px Georgia,serif;color:#17382f;margin-top:2px;">Laranja Doce Brilhante</div>
<div class="product-desc" style="font:14px/21px Arial,sans-serif;color:#404a45;margin-top:7px;">Laranja-doce delicadamente floral, com nuances amadeiradas e terrosas.</div>
<a class="product-btn" href="https://essenciadobrasil.com.br/produtos/perfume-laranja-doce-brilhante-feminino-100ml-natural-vegano/" style="display:block;background:#07513a;border-radius:20px;color:#fff;text-decoration:none;text-align:center;font:11px/15px Arial,sans-serif;padding:11px 10px;margin-top:12px;">CONHEÇA →</a>
</td></tr>

<tr><td class="mobile-card" style="width:100%;vertical-align:top;padding:0 0 24px;">
<img src="https://i.ibb.co/tTmjgYj5/limao-siciliano-radiante-email.jpg" width="500" height="500" alt="Limão Siciliano Radiante" style="display:block;width:76%;max-width:76%;height:auto;margin:0 auto;border:0;border-bottom:3px solid #E7B84B;">
<div class="product-cat" style="font:10px/14px Arial,sans-serif;letter-spacing:1px;color:#58685f;margin-top:10px;padding-top:7px;border-top:2px solid #B94E3D;">PERFUME NATURAL</div>
<div class="product-name" style="font:22px/27px Georgia,serif;color:#17382f;margin-top:2px;">Limão Siciliano Radiante</div>
<div class="product-desc" style="font:14px/21px Arial,sans-serif;color:#404a45;margin-top:7px;">Limão luminoso, coração floral leve e fundo suavemente amadeirado.</div>
<a class="product-btn" href="https://essenciadobrasil.com.br/produtos/perfume-limao-siciliano-radiante-feminino-100ml-natural/" style="display:block;background:#07513a;border-radius:20px;color:#fff;text-decoration:none;text-align:center;font:11px/15px Arial,sans-serif;padding:11px 10px;margin-top:12px;">CONHEÇA →</a>
</td></tr>

</table>
</td></tr>

<!-- BANNER 2 MOBILE INTEGRADO / ASSIMÉTRICO -->
<tr><td style="padding:0;background:#f7f1e6;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
<tr>
<td class="banner2-left" style="vertical-align:middle;background:#D95B45;background-image:linear-gradient(110deg,#F2C94C 0%,#E9A33A 38%,#D95B45 72%,#B94E3D 100%);padding:22px 20px;text-align:center;color:#fff7ed;">
  <div style="font-family:Georgia,serif;font-size:9px;line-height:13px;letter-spacing:2.2px;color:#fff4e8;">DO NOSSO SOLO</div>
  <div class="b2-script" style="font-family:Georgia,serif;font-style:italic;font-size:24px;line-height:30px;color:#fffaf1;margin-top:7px;">nascem aromas<br>que contam histórias.</div>
  
  
</td>
<td class="banner2-right" style="vertical-align:middle;background:#103F31;padding:20px 24px;color:#fff;">
  <div class="b2-title" style="font-family:Georgia,serif;font-size:14px;line-height:19px;letter-spacing:1.4px;color:#fff;">BRASIL É NATUREZA.<br>BRASIL É CULTURA.<br>BRASIL É DIVERSIDADE.</div>
  
  <div class="b2-copy" style="font-family:Arial,sans-serif;font-size:7px;line-height:10px;letter-spacing:1px;color:#eef2ef;">DESCUBRA OUTRAS FRAGRÂNCIAS<br>INSPIRADAS PELA RIQUEZA DA NATUREZA.</div>
</td>
</tr></table>
</td></tr>

<!-- CTA MAIS COMPACTO -->
<tr><td class="cta-wrap" style="padding:12px 42px 13px;background:#f7f1e6;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
<tr>
<td class="cta-line" style="width:25%;"><div style="height:1px;background:#b9a786;font-size:1px;">&nbsp;</div></td>
<td class="cta-cell" style="width:50%;padding:0 12px;">
<a class="cta-btn" href="https://www.essenciadobrasil.com.br/colecoes/botanica-imperial/" style="display:block;background:#07513a;border-radius:17px;color:#fff;text-decoration:none;text-align:center;font-family:Arial,sans-serif;font-size:8px;line-height:12px;letter-spacing:.9px;padding:8px 10px;">EXPLORE O UNIVERSO ESSÊNCIA DO BRASIL →</a>
</td>
<td class="cta-line" style="width:25%;"><div style="height:1px;background:#b9a786;font-size:1px;">&nbsp;</div></td>
</tr>
</table>
</td></tr>

<!-- FOOTER BAIXO / 2 FAIXAS -->
<tr><td class="footer-wrap" style="padding:14px 24px 10px;background:#073c2d;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
<tr>
<td class="footer-cell" style="width:33.33%;vertical-align:top;color:#fff;padding-right:14px;">
  <div class="footer-logo" style="font-family:Georgia,serif;font-size:16px;line-height:18px;letter-spacing:1.8px;">ESSÊNCIA</div>
  <div style="font-family:Georgia,serif;font-size:7px;line-height:10px;letter-spacing:1.4px;">— DO BRASIL —</div>
  <div class="footer-small" style="font-family:Arial,sans-serif;font-size:7px;line-height:11px;margin-top:5px;color:#edf0ee;">A natureza inspira.<br>A essência transforma.</div>
</td>
<td class="footer-cell" style="width:33.33%;vertical-align:top;padding-left:14px;border-left:1px solid rgba(255,255,255,.28);color:#fff;font-family:Arial,sans-serif;">
  <div class="footer-small" style="font-size:7px;line-height:12px;">
    <div style="color:#d4b86e;letter-spacing:.9px;margin-bottom:4px;">CONTATO</div>
    essenciadobrasil.com.br<br>contato@essenciadobrasil.com.br<br>@essenciadobrasil
  </div>
</td>
<td class="footer-cell" style="width:33.33%;vertical-align:top;padding-left:14px;border-left:1px solid rgba(255,255,255,.28);color:#fff;font-family:Arial,sans-serif;">
  <div class="footer-small" style="font-size:7px;line-height:12px;">
    <div style="color:#d4b86e;letter-spacing:.9px;margin-bottom:4px;">SIGA-NOS</div>
    Instagram&nbsp;&nbsp; Facebook&nbsp;&nbsp; TikTok
  </div>
</td>
</tr>
<tr>
<td colspan="3" style="padding-top:10px;">
  <div style="height:1px;background:rgba(255,255,255,.18);font-size:1px;">&nbsp;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;margin-top:8px;">
    <tr>
      <td style="width:32%;font-family:Arial,sans-serif;font-size:7px;line-height:11px;color:#d4b86e;letter-spacing:.9px;">PAGAMENTO</td>
      <td style="width:68%;text-align:right;font-family:Arial,sans-serif;font-size:7px;line-height:11px;color:#fff;">Pix · Visa · Mastercard · Amex · Boleto</td>
    </tr>
  </table>
</td>
</tr>
</table>
</td></tr>

<tr><td class="signature" style="padding:10px 20px;background:#063528;border-top:1px solid rgba(208,179,110,.45);text-align:center;color:#d4b86e;font-family:Arial,sans-serif;font-size:7px;line-height:11px;letter-spacing:2px;">BRASIL. MUITOS JEITOS DE SER. INFINITOS AROMAS.</td></tr>
<tr><td class="unsubscribe" style="padding:9px 22px 12px;text-align:center;color:#8c8477;font-family:Arial,sans-serif;font-size:7px;line-height:11px;background:#f7f1e6;">Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.</td></tr>

</table>
</td></tr></table>
</body>
</html>`;
}

function montarTextoBrasil() {
  return [
    'O Brasil tem muitos jeitos de ser',
    '',
    'Do Norte ao Sul, o Brasil muda de sotaque, de ritmo, de paisagem e de sabor.',
    'São festas, músicas, ingredientes, costumes e histórias diferentes convivendo dentro de um mesmo país.',
    '',
    'Conheça nossos aromas:',
    '• Copaíba Amazônica',
    '• Tangerina Radiante',
    '• Laranja Doce Brilhante',
    '• Limão Siciliano Radiante',
    '',
    'Explore o universo Essência do Brasil:',
    'https://www.essenciadobrasil.com.br/colecoes/botanica-imperial/',
    '',
    'Você recebeu este e-mail porque está em nossa lista de relacionamento.',
    'Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.'
  ].join('\n');
}

/**
 * Nesta versão não há ícones CID.
 * Mantido como função para permitir inclusão futura sem alterar o fluxo de envio.
 */
function montarInlineImagesBrasil() {
  return {};
}

/**
 * Valida a correspondência 1:1 entre referências cid: do HTML
 * e as chaves declaradas em inlineImages.
 */
function validarTemplateBrasil() {
  const html = montarHtmlBrasil();
  const inlineImages = montarInlineImagesBrasil();

  const refs = [];
  const regex = /cid:([A-Za-z0-9._-]+)/g;
  let match;

  while ((match = regex.exec(html)) !== null) {
    refs.push(match[1]);
  }

  const refsUnicas = [...new Set(refs)].sort();
  const chaves = Object.keys(inlineImages).sort();

  if (refsUnicas.length !== chaves.length ||
      refsUnicas.some((ref, i) => ref !== chaves[i])) {
    throw new Error(
      'Falha na validação CID. HTML=' +
      JSON.stringify(refsUnicas) +
      ' | inlineImages=' +
      JSON.stringify(chaves)
    );
  }

  return true;
}

/**
 * Envia o e-mail para um destinatário informado.
 */
function enviarEmailBrasil(destinatario) {
  if (!destinatario) {
    throw new Error('Informe um destinatário.');
  }

  validarTemplateBrasil();

  const inlineImages = montarInlineImagesBrasil();

  const opcoes = {
    htmlBody: montarHtmlBrasil(),
    name: EDB_EMAIL_CONFIG.senderName
  };

  if (Object.keys(inlineImages).length > 0) {
    opcoes.inlineImages = inlineImages;
  }

  GmailApp.sendEmail(
    destinatario,
    EDB_EMAIL_CONFIG.subject,
    montarTextoBrasil(),
    opcoes
  );
}

/**
 * Envia automaticamente um teste para o e-mail do usuário ativo.
 */
function enviarTesteBrasil() {
  const email = Session.getActiveUser().getEmail();

  if (!email) {
    throw new Error(
      'Não foi possível identificar o e-mail do usuário ativo. ' +
      'Execute o script em uma conta Google autorizada.'
    );
  }

  enviarEmailBrasil(email);
}
