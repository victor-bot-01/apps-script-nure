/**
 * Essência do Brasil — Perfumes em Óleo / Sem Álcool
 * Template baseado na hierarquia visual da referência aprovada.
 */

var ASSUNTO_PERFUMES_EM_OLEO = 'E se a memória começasse pela pele?';

function criarInlineImagesPerfumesEmOleo_() {
  var base64 = {
    hdrQuality: 'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABJUlEQVR4nO2Y3Q3CMAyEDWKK7tAFur9YgB1YozxViqo4yfkuoAp/Eg8IYt/lx6lrliRJkvwztxlBl23dvd/ez5c0pyxYS7SHwsydDWAWE1+Oi443E6xALXlrZtXbizJwFoMI8IygJsJbiBHvEYkRMsCK92Y/chZgAzXxSOLef1ETVBUqxY8k9g48s/3oMjqaHK1Wo0AGShG15MjePo8vvyPbSHKRtZIzl9QIEgNmdROtmV+2dT8+TN5w+fP2L3rTsheabAV6eIJ+XoVGGBEYNSE1MKtUtoAMoNUm+nCHjJvWD8ye+YMHM1j1SMyUUngFeuJY8V/pB1olEYmj6Ckk/YAiRvTMhA9atLdVH3i6J0YbmjNstbr8e6HLv5lLkiRJkiRJLswHLGLGMMsSj90AAAAASUVORK5CYII=',
    hdrExclusive: 'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAw0lEQVR4nO2Y0Q2AIAxE1TiFO7iA+8cF3ME19EcTQ8AAd6Sp3vs1lB5XLNB1QvybvkXQaZmP1Ld93ahzDsxgFrgX4B5qPb7VfghrL7gvIfcCxlaBYyVSUmK5yIEULVY7hnsHaAJKV5zlEEVAbTIMEbAANAl0PNQNw8lLuisy9gltD5QmoKPEhQRYIwHWSIA11NOorpQVUB1gP1rl4N4BCbBGAqyRgBurSz3832YkgvQP2AG0eaHjKSVUm4RF5xZCCPEtTus+O0s5G0EQAAAAAElFTkSuQmCC',
    hdrPurpose: 'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABLklEQVR4nO2Y3Q3CMBCDDWKK7tAF2F8swA6sUZ4qVVXJ2Tn3R+K+FyR0dc5NojoBiqIoin/mphQPz3GKaj6vd6jp0gGAO1PEDsrUuXRmKAOsWFTv0lnyUARntqZ3PdjwHKdl3VYzjE5EOANrwV9rs9UM2/zW/5GhpgH1bbBvlN2gTB/0JmYHjmocGktoA4qossyy40kzoDA3sP51s5sBYP/mgZ0NHEEZOJsycDb2NOrCmkZV0SzKOE0DjrSoomancAaONNET/KgldISJ3tSaCnMuE5nInY7TWRPZ84L8HXCacBx2uj5kDhOO5oHElzhjwtU8kIwSPSaczQOGLKSYcDcPmMIce0/EPKdiS6OueyEV+1nVeXHLYD8POO6FFHY50DjuhS5Baw8URVEUl+ALtvLSwXbQXrsAAAAASUVORK5CYII=',
    benefitNoAlcohol: 'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABQklEQVR4nO1ZwRGDMAwzXYkJugqDdRUm6EztK3c5Lk5iWwrQRp9eeySVbNnBIDIxMUHD+/X85J8MLKyNS6TXbYf/3wO94WhQBGiWYVgJLqBFEi2CbiGG73NABRyjm8gfRSCzMIs4QYu+9h2VBYgALxmECIqFtMK95EHWss4RaCuFBKB8HNkHaqFeiyCt5BZgtU5trfZbD4afA5e4lfBGP1+3bvuCKGizAETPrwm27h+2UE/0a+SjBW0S4LFOT+QjVqIWca9tInALaBGykvcKpI+UtxpoRMaSFyFOZCPIi5AGmlHkRQgDzUjyIuB5YDR5EaOAnGAirj15sMIbCIiFzoh8gllAKQtRRGz4n8+FkFmINoHbZwDWORKst9iWdSWEu4dmoRIhy7W9gLY/Sz2gWi+lf9eEnHlmuMB8QzkxMfED+AKzAcryzcWlWgAAAABJRU5ErkJggg==',
    benefitNatural: 'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABJUlEQVR4nO2Y3Q3CMAyEDWIjJugqDNZVmKAzladKURUnOZ8DqrhP4gFB7Lv8OHXNhBBC/DO3GUG3ddm9356vd2rOtGAt0R4ZZu5sALOY+HJcdLxZwgrUkrdmNnt7UQbOYhABnhHURHgLMeI9IjFCBljx3uxHzgJsoCYeSdz7L2qCqkKl+JHE3oFnth9dRkeTo9VqFMhAKaKWHNnb5/Hld2QbpVxkreTMJTVCigGzuonWzG/rsh8fJm+4/Hn7F71p2QstbQV6eIJ+XoVGGBEYNZFqYFapbAEZQKtN9OEOGTetH5g98wcPZnDWIzFTSuEV6IljxX+lH2iVRCRORk+R0g9kxIiemfBBi/a22Qee7onRhuYMW60u/17o8m/mhBBCCCHEhfkABnLK3JCXxp8AAAAASUVORK5CYII=',
    benefitVitamin: 'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABOElEQVR4nO2Z2Q0CMQxEA6IjKqAVCttWqICa4CvSKsrhY8ZByO8HCYjjSRzb2S0lSZJkxvt4fJj2LwyjM6fvzxd0TqgxzWqjhLiNjJzuOaj5rxTzQI8zSCGqAYwV9NoUT9ybCHkgrfZvlsnQmeRsU5t2r2hHokkBuxELOMc9qz0425Wes607gFiIbQKq814RWwS0TntEhAtAF8RQAYxqHiaA1YrABGjjGNWOqASMasEqo7Tfr+4KGnHuHVhlFPad2C1gtprsFrwU0BmQXh8ZbbhLgCZuZ7//TCEbOclY+YpaQOvMKMO0nyMkGWoGZAdWIqTjLJgEsELCYte8A6tQWuENnQr0EEtFIIubSwAqlLa209pQQoVOhdJOS5s6BGGtBKu1yPcDPSLf0FDOwI6eiALq2U+SJH/MF8y90u+WGKzGAAAAAElFTkSuQmCC',
    benefitOils: 'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABTElEQVR4nO2Z2Q0CMRBDB0RHVEArFEYrVEBN8BVphbLJ2OPsBJT3hdAeYzv3mi1yOWUX8Hrc3uX39f6E6zlry+FhijdLFrB1n2WKBFj3zRIFKNw3myCBiPtmSaNQy31UUEgAOwR6mo/3eZImpC4euY5OgHH/u6jafZ5rtoQTUBZf+7+XBCUgOgT2RCNNMpQA6z767Nb9sIDR7qPQCagLYYEEqKZ/JVQCs7hvBghQuc9MZC3D4AQY99GxHTHLJUDhvlcEOhND47ii7SNmeN7XTUA98nhN8F53iZXDUYqrmYOmnCKgoGiStACFewpgAa0+oezsXoYsJY5ccnSd2itGsZtS0E2gVoRqN6VAvpQ4uiNDExkzCY1OIf1kLsoSkM3/C2A6ZPSzEYL8WOXojb9LwKjdlALoBerdlAKoCal3Uwokx+uFmc6LFovFj/ABcjfFp0xQkHoAAAAASUVORK5CYII=',
    security: 'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAz0lEQVR4nO2Z0Q2DMAxEDepGTNBVGIxVmKAzla9KVRQpcX3mEvXeZwTGZ5+jRJgJIQSTJSvw63i+y7VtP+HfgwesJV6CFLKiApn1Je95rgdYJVqWybLUIxqgRi2xzxqy+mYgC30n1apqqyteoDPAICwgWsXo+9AO9A7lsNsog5AA1I4SiQPrgNcWKBv9t4VGYHoBsKME+ojQy0+DlJmsd7int5C7A56D2x1xp++ABLCRADYSwEYC2EgAGwlgM70AXWjYhC4kyE5k/H4SQoh8LkkvSZwQ4lNVAAAAAElFTkSuQmCC',
  };
  var inlineImages = {};
  Object.keys(base64).forEach(function(chave) {
    inlineImages[chave] = Utilities.newBlob(
      Utilities.base64Decode(base64[chave]),
      'image/png',
      chave + '.png'
    );
  });
  return inlineImages;
}

function montarHtmlPerfumesEmOleo_() {
  return `<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type="text/css">
@media only screen and (max-width:920px){
  .stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
  .header-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
  .menu-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:9px 16px!important;border-left:0!important;border-top:1px solid #4c604f!important;}
  .benefit-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:12px 22px!important;border-left:0!important;border-top:1px solid #455b4a!important;}
  .product-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:6px 18px!important;}
  .secondary-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
  .offer-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:16px 20px!important;}
  .footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:16px 24px!important;text-align:center!important;border-left:0!important;border-top:1px solid #ddd3c2!important;}
  .bottom-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:12px 22px!important;text-align:center!important;border-left:0!important;}
  .hero-bg{background-image:none!important;background-color:#193c2f!important;}
  .hero-copy{display:block!important;width:100%!important;max-width:100%!important;background-color:#193c2f!important;padding:28px 24px!important;box-sizing:border-box!important;}
  .hero-spacer{display:block!important;width:100%!important;max-width:100%!important;padding:0!important;box-sizing:border-box!important;font-size:0!important;line-height:0!important;}
  .hero-mobile-image{display:block!important;width:100%!important;height:auto!important;max-width:100%!important;}
  .hero-kicker{font-size:11px!important;line-height:15px!important;color:#e6c77d!important;}
  .hero-title{font-size:31px!important;line-height:33px!important;color:#fff8e8!important;}
  .hero-subtitle{font-size:16px!important;line-height:20px!important;color:#f1dfae!important;}
  .hero-body{font-size:13px!important;line-height:19px!important;color:#ffffff!important;}
  .hero-button{font-size:12px!important;line-height:15px!important;color:#193c2f!important;background-color:#d5a84b!important;padding:11px 16px!important;}
  .section-line-cell{display:none!important;}
  .section-title-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:0!important;}
  .section-title{font-size:20px!important;line-height:25px!important;white-space:normal!important;word-break:normal!important;overflow-wrap:normal!important;}
  .product-img{width:320px!important;height:auto!important;max-width:88%!important;}
  .secondary-title{font-size:22px!important;line-height:27px!important;}
  .mobile-pad-24{padding-left:24px!important;padding-right:24px!important;}
}
</style>
</head>
<body style="margin:0;padding:0;background-color:#f2ede4;font-family:Arial,Helvetica,sans-serif;color:#20251f;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">Perfumes em óleo sem álcool, com 91% de ingredientes naturais, vitamina E e seis composições para viver na pele.</div>
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;background-color:#f2ede4;border-collapse:collapse;margin:0;padding:0;">
<tr><td align="center" style="padding:0;margin:0;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:900px;table-layout:fixed;border-collapse:collapse;background-color:#fbf7ef;margin:0 auto;">

<!-- utility -->
<tr><td style="padding:0;background-color:#e6d3aa;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
<tr>
<td width="50%" style="width:50%;padding:9px 24px;font-size:11px;line-height:14px;color:#172a21;letter-spacing:.2px;">PERFUMES EM ÓLEO SEM ÁLCOOL</td>
<td width="50%" align="right" style="width:50%;padding:9px 24px;font-size:11px;line-height:14px;color:#172a21;"><a href="https://essenciadobrasil.com.br/colecoes/perfumes-em-oleo-sem-alcool/" style="color:#172a21;text-decoration:underline;">Conheça a coleção</a></td>
</tr></table>
</td></tr>

<!-- brand header -->
<tr><td style="padding:0;background-color:#fbf8f1;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
<tr>
<td class="header-col stack100" valign="middle" style="width:40%;padding:20px 28px 18px 48px;text-align:left;">
<a href="https://essenciadobrasil.com.br/" style="text-decoration:none;color:#18382d;display:inline-block;">
<div style="font-family:Georgia,'Times New Roman',serif;font-size:27px;line-height:29px;letter-spacing:4px;color:#18382d;white-space:nowrap;">ESSÊNCIA</div>
<div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:18px;letter-spacing:5px;color:#18382d;padding-left:18px;">DO BRASIL</div>
</a>
</td>
<td class="header-col stack100" valign="middle" style="width:60%;padding:12px 24px 12px 8px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
<tr>
<td width="33.33%" align="center" valign="top" style="width:33.33%;padding:8px 6px;"><img src="cid:hdrQuality" width="28" height="28" alt="" style="display:block;width:28px;height:28px;max-width:100%;margin:0 auto 6px;border:0;"><div style="font-size:10px;line-height:13px;font-weight:bold;color:#1b2e25;">PRODUTOS<br>DE QUALIDADE</div></td>
<td width="33.33%" align="center" valign="top" style="width:33.33%;padding:8px 6px;"><img src="cid:hdrExclusive" width="28" height="28" alt="" style="display:block;width:28px;height:28px;max-width:100%;margin:0 auto 6px;border:0;"><div style="font-size:10px;line-height:13px;font-weight:bold;color:#1b2e25;">FRAGRÂNCIAS<br>EXCLUSIVAS</div></td>
<td width="33.33%" align="center" valign="top" style="width:33.33%;padding:8px 6px;"><img src="cid:hdrPurpose" width="28" height="28" alt="" style="display:block;width:28px;height:28px;max-width:100%;margin:0 auto 6px;border:0;"><div style="font-size:10px;line-height:13px;font-weight:bold;color:#1b2e25;">FEITO COM<br>PROPÓSITO</div></td>
</tr></table>
</td>
</tr></table>
</td></tr>

<!-- menu -->
<tr><td style="padding:0;background-color:#173a2d;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
<tr>
<td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;"><a href="https://essenciadobrasil.com.br/perfumes-masculinos/" style="font-size:10px;line-height:13px;color:#f0dfb2;text-decoration:none;font-weight:bold;letter-spacing:.3px;">MASCULINOS</a></td>
<td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;border-left:1px solid #53664f;"><a href="https://essenciadobrasil.com.br/perfumes-femininos/" style="font-size:10px;line-height:13px;color:#f0dfb2;text-decoration:none;font-weight:bold;letter-spacing:.3px;">FEMININOS</a></td>
<td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;border-left:1px solid #53664f;"><a href="https://essenciadobrasil.com.br/oleos-essenciais/" style="font-size:10px;line-height:13px;color:#f0dfb2;text-decoration:none;font-weight:bold;letter-spacing:.3px;">ÓLEOS ESSENCIAIS</a></td>
<td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;border-left:1px solid #53664f;"><a href="https://essenciadobrasil.com.br/essencias/" style="font-size:10px;line-height:13px;color:#f0dfb2;text-decoration:none;font-weight:bold;letter-spacing:.3px;">ESSÊNCIAS</a></td>
<td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;border-left:1px solid #53664f;"><a href="https://essenciadobrasil.com.br/colecoes/perfumes-em-oleo-sem-alcool/" style="font-size:10px;line-height:13px;color:#f0dfb2;text-decoration:none;font-weight:bold;letter-spacing:.3px;">PERFUMES EM ÓLEO</a></td>
<td class="menu-cell" style="width:16.66%;padding:12px 6px;text-align:center;border-left:1px solid #53664f;"><a href="https://essenciadobrasil.com.br/black-essencia-do-brasil/" style="font-size:10px;line-height:13px;color:#f0dfb2;text-decoration:none;font-weight:bold;letter-spacing:.3px;">OFERTAS</a></td>
</tr></table>
</td></tr>

<!-- hero -->
<tr><td class="hero-bg" background="https://i.ibb.co/XkMZQmwD/Chat-GPT-Image-3-de-set-de-2026-18-59-39.png" bgcolor="#e7ddcb" valign="middle" style="padding:0;background-color:#e7ddcb;background-image:url('https://i.ibb.co/XkMZQmwD/Chat-GPT-Image-3-de-set-de-2026-18-59-39.png');background-repeat:no-repeat;background-position:center center;background-size:cover;">
<!--[if gte mso 9]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:900px;height:382px;"><v:fill type="frame" src="https://i.ibb.co/XkMZQmwD/Chat-GPT-Image-3-de-set-de-2026-18-59-39.png" color="#e7ddcb"/><v:textbox inset="0,0,0,0"><![endif]-->
<table class="hero-split" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
<tr>
<td class="hero-copy" valign="middle" style="width:40%;padding:42px 0 42px 42px;">
<div class="hero-kicker" style="font-size:11px;line-height:15px;color:#845d1c;font-weight:bold;letter-spacing:1px;margin:0 0 10px;">NOVA COLEÇÃO</div>
<div class="hero-title" style="font-family:Georgia,'Times New Roman',serif;font-size:38px;line-height:39px;color:#173a2d;letter-spacing:.3px;margin:0 0 14px;">PERFUMES EM ÓLEO<br><span style="color:#9a6825;">SEM ÁLCOOL</span></div>
<div class="hero-subtitle" style="font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:22px;color:#28342c;font-weight:bold;margin:0 0 12px;">6 composições. 6 atmosferas.<br>Uma nova forma de perfumar.</div>
<div class="hero-body" style="font-size:13px;line-height:19px;color:#27322c;margin:0 0 20px;">Fragrância e cuidado no mesmo gesto. Uma coleção em óleo, com 91% de ingredientes naturais, vitamina E e uma presença mais próxima da pele.</div>
<a class="hero-button" href="https://essenciadobrasil.com.br/colecoes/perfumes-em-oleo-sem-alcool/" style="display:inline-block;background-color:#173a2d;color:#fff4d3;text-decoration:none;font-size:11px;line-height:14px;font-weight:bold;letter-spacing:.4px;padding:12px 20px;border-radius:3px;">CONHECER A COLEÇÃO</a>
</td>
<td class="hero-spacer" style="width:60%;padding:0;font-size:0;line-height:0;"><img class="hero-mobile-image" src="https://i.ibb.co/XkMZQmwD/Chat-GPT-Image-3-de-set-de-2026-18-59-39.png" width="900" height="506" alt="Perfumes em Óleo Sem Álcool — Essência do Brasil" style="display:none;width:100%;height:auto;max-width:100%;border:0;"></td>
</tr></table>
<!--[if gte mso 9]></v:textbox></v:rect><![endif]-->
</td></tr>

<!-- benefit strip -->
<tr><td style="padding:0;background-color:#173a2d;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
<tr>
<td class="benefit-cell stack100" valign="middle" style="width:25%;padding:14px 16px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;"><tr><td width="28%" style="width:28%;padding:0 8px 0 0;"><img src="cid:benefitNoAlcohol" width="27" height="27" alt="" style="display:block;width:27px;height:27px;max-width:100%;margin:0 auto;border:0;"></td><td width="72%" style="width:72%;padding:0;font-size:10px;line-height:14px;color:#f2d88d;font-weight:bold;">SEM ÁLCOOL<br><span style="font-weight:normal;color:#fff5d8;">mais próximo da pele</span></td></tr></table>
</td>
<td class="benefit-cell stack100" valign="middle" style="width:25%;padding:14px 16px;border-left:1px solid #53664f;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;"><tr><td width="28%" style="width:28%;padding:0 8px 0 0;"><img src="cid:benefitNatural" width="27" height="27" alt="" style="display:block;width:27px;height:27px;max-width:100%;margin:0 auto;border:0;"></td><td width="72%" style="width:72%;padding:0;font-size:10px;line-height:14px;color:#f2d88d;font-weight:bold;">91% NATURAIS<br><span style="font-weight:normal;color:#fff5d8;">ingredientes de origem natural</span></td></tr></table>
</td>
<td class="benefit-cell stack100" valign="middle" style="width:25%;padding:14px 16px;border-left:1px solid #53664f;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;"><tr><td width="28%" style="width:28%;padding:0 8px 0 0;"><img src="cid:benefitVitamin" width="27" height="27" alt="" style="display:block;width:27px;height:27px;max-width:100%;margin:0 auto;border:0;"></td><td width="72%" style="width:72%;padding:0;font-size:10px;line-height:14px;color:#f2d88d;font-weight:bold;">COM VITAMINA E<br><span style="font-weight:normal;color:#fff5d8;">cuidado em cada aplicação</span></td></tr></table>
</td>
<td class="benefit-cell stack100" valign="middle" style="width:25%;padding:14px 16px;border-left:1px solid #53664f;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;"><tr><td width="28%" style="width:28%;padding:0 8px 0 0;"><img src="cid:benefitOils" width="27" height="27" alt="" style="display:block;width:27px;height:27px;max-width:100%;margin:0 auto;border:0;"></td><td width="72%" style="width:72%;padding:0;font-size:10px;line-height:14px;color:#f2d88d;font-weight:bold;">MACADÂMIA + JOJOBA<br><span style="font-weight:normal;color:#fff5d8;">base em óleos vegetais</span></td></tr></table>
</td>
</tr></table>
</td></tr>

<!-- section heading -->
<tr><td style="padding:24px 42px 14px;background-color:#fbf7ef;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
<tr><td class="section-line-cell" valign="middle" style="width:26%;padding:0 12px;"><div style="height:1px;background-color:#9d927d;font-size:1px;line-height:1px;">&nbsp;</div></td><td class="section-title-cell" align="center" style="width:48%;padding:0 6px;"><div class="section-title" style="font-family:Georgia,'Times New Roman',serif;font-size:20px;line-height:25px;color:#1b2e25;letter-spacing:1px;white-space:nowrap;">CONHEÇA AS 6 COMPOSIÇÕES</div></td><td class="section-line-cell" valign="middle" style="width:26%;padding:0 12px;"><div style="height:1px;background-color:#9d927d;font-size:1px;line-height:1px;">&nbsp;</div></td></tr>
</table>
</td></tr>

<!-- six products -->
<tr><td style="padding:0 40px 18px;background-color:#fbf7ef;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
<tr>
<td class="product-cell stack100" valign="top" style="width:16.66%;padding:0 4px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:separate;background-color:#f1eadf;border-radius:5px;">
<tr><td align="center" style="padding:8px 6px 4px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-01-patchouli-20ml-sem-alcool-6mjd6/" style="text-decoration:none;"><img class="product-img" src="https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-1d1b780c5021877f0017873248514639-1024-1024.webp" width="150" height="150" alt="PATCHOULI" style="display:block;width:150px;height:auto;max-width:100%;margin:0 auto;border:0;"></a></td></tr>
<tr><td align="center" style="padding:6px 7px 0;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-01-patchouli-20ml-sem-alcool-6mjd6/" style="text-decoration:none;color:#1b2e25;"><div style="font-size:9px;line-height:12px;color:#8b6a32;letter-spacing:.5px;font-weight:bold;">COMPOSIÇÃO 01</div><div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:18px;color:#1b2e25;font-weight:bold;margin-top:2px;">PATCHOULI</div></a></td></tr>
<tr><td align="center" style="padding:7px 9px 4px;font-size:10px;line-height:14px;color:#343b35;">Terroso, profundo e envolvente.</td></tr>
<tr><td align="center" style="padding:5px 9px 3px;font-size:9px;line-height:12px;color:#5d5b54;"><strong style="color:#28382f;">NOTAS</strong><br>Patchouli, âmbar doce,<br>açafrão, madeiras</td></tr>
<tr><td align="center" style="padding:8px 7px 10px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-01-patchouli-20ml-sem-alcool-6mjd6/" style="display:inline-block;background-color:#173a2d;color:#fff4d3;text-decoration:none;font-size:9px;line-height:12px;font-weight:bold;letter-spacing:.35px;padding:8px 9px;border-radius:3px;">VER PRODUTO</a></td></tr>
</table></td><td class="product-cell stack100" valign="top" style="width:16.66%;padding:0 4px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:separate;background-color:#f1eadf;border-radius:5px;">
<tr><td align="center" style="padding:8px 6px 4px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-02-lavanda-20ml-sem-alcool-1y4ho/" style="text-decoration:none;"><img class="product-img" src="https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-fa6f64e1c38aa03cbc17873248536000-1024-1024.webp" width="150" height="150" alt="LAVANDA" style="display:block;width:150px;height:auto;max-width:100%;margin:0 auto;border:0;"></a></td></tr>
<tr><td align="center" style="padding:6px 7px 0;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-02-lavanda-20ml-sem-alcool-1y4ho/" style="text-decoration:none;color:#1b2e25;"><div style="font-size:9px;line-height:12px;color:#8b6a32;letter-spacing:.5px;font-weight:bold;">COMPOSIÇÃO 02</div><div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:18px;color:#1b2e25;font-weight:bold;margin-top:2px;">LAVANDA</div></a></td></tr>
<tr><td align="center" style="padding:7px 9px 4px;font-size:10px;line-height:14px;color:#343b35;">Serena, aromática e refinada.</td></tr>
<tr><td align="center" style="padding:5px 9px 3px;font-size:9px;line-height:12px;color:#5d5b54;"><strong style="color:#28382f;">NOTAS</strong><br>Lavanda, flores brancas,<br>baunilha, madeiras</td></tr>
<tr><td align="center" style="padding:8px 7px 10px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-02-lavanda-20ml-sem-alcool-1y4ho/" style="display:inline-block;background-color:#173a2d;color:#fff4d3;text-decoration:none;font-size:9px;line-height:12px;font-weight:bold;letter-spacing:.35px;padding:8px 9px;border-radius:3px;">VER PRODUTO</a></td></tr>
</table></td><td class="product-cell stack100" valign="top" style="width:16.66%;padding:0 4px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:separate;background-color:#f1eadf;border-radius:5px;">
<tr><td align="center" style="padding:8px 6px 4px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-03-capim-limao-20ml-sem-alcool-1izak/" style="text-decoration:none;"><img class="product-img" src="https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-b2fc0794e172cb497f17873248600646-1024-1024.webp" width="150" height="150" alt="CAPIM LIMÃO" style="display:block;width:150px;height:auto;max-width:100%;margin:0 auto;border:0;"></a></td></tr>
<tr><td align="center" style="padding:6px 7px 0;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-03-capim-limao-20ml-sem-alcool-1izak/" style="text-decoration:none;color:#1b2e25;"><div style="font-size:9px;line-height:12px;color:#8b6a32;letter-spacing:.5px;font-weight:bold;">COMPOSIÇÃO 03</div><div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:18px;color:#1b2e25;font-weight:bold;margin-top:2px;">CAPIM LIMÃO</div></a></td></tr>
<tr><td align="center" style="padding:7px 9px 4px;font-size:10px;line-height:14px;color:#343b35;">Vibrante, luminoso e fresco.</td></tr>
<tr><td align="center" style="padding:5px 9px 3px;font-size:9px;line-height:12px;color:#5d5b54;"><strong style="color:#28382f;">NOTAS</strong><br>Capim-limão, verdes,<br>vetiver, madeiras</td></tr>
<tr><td align="center" style="padding:8px 7px 10px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-03-capim-limao-20ml-sem-alcool-1izak/" style="display:inline-block;background-color:#173a2d;color:#fff4d3;text-decoration:none;font-size:9px;line-height:12px;font-weight:bold;letter-spacing:.35px;padding:8px 9px;border-radius:3px;">VER PRODUTO</a></td></tr>
</table></td><td class="product-cell stack100" valign="top" style="width:16.66%;padding:0 4px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:separate;background-color:#f1eadf;border-radius:5px;">
<tr><td align="center" style="padding:8px 6px 4px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-04-ylang-ylang-20ml-sem-alcool-1vdt3/" style="text-decoration:none;"><img class="product-img" src="https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-b00b34d74aed021cd317873248620297-1024-1024.webp" width="150" height="150" alt="YLANG YLANG" style="display:block;width:150px;height:auto;max-width:100%;margin:0 auto;border:0;"></a></td></tr>
<tr><td align="center" style="padding:6px 7px 0;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-04-ylang-ylang-20ml-sem-alcool-1vdt3/" style="text-decoration:none;color:#1b2e25;"><div style="font-size:9px;line-height:12px;color:#8b6a32;letter-spacing:.5px;font-weight:bold;">COMPOSIÇÃO 04</div><div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:18px;color:#1b2e25;font-weight:bold;margin-top:2px;">YLANG YLANG</div></a></td></tr>
<tr><td align="center" style="padding:7px 9px 4px;font-size:10px;line-height:14px;color:#343b35;">Floral, luminoso e opulento.</td></tr>
<tr><td align="center" style="padding:5px 9px 3px;font-size:9px;line-height:12px;color:#5d5b54;"><strong style="color:#28382f;">NOTAS</strong><br>Ylang-ylang, flores brancas,<br>rosa, jasmim</td></tr>
<tr><td align="center" style="padding:8px 7px 10px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-04-ylang-ylang-20ml-sem-alcool-1vdt3/" style="display:inline-block;background-color:#173a2d;color:#fff4d3;text-decoration:none;font-size:9px;line-height:12px;font-weight:bold;letter-spacing:.35px;padding:8px 9px;border-radius:3px;">VER PRODUTO</a></td></tr>
</table></td><td class="product-cell stack100" valign="top" style="width:16.66%;padding:0 4px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:separate;background-color:#f1eadf;border-radius:5px;">
<tr><td align="center" style="padding:8px 6px 4px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-05-geranio-20ml-sem-alcool-hn6y3/" style="text-decoration:none;"><img class="product-img" src="https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-443bed0fbcffb5d60117873248663218-1024-1024.webp" width="150" height="150" alt="GERÂNIO" style="display:block;width:150px;height:auto;max-width:100%;margin:0 auto;border:0;"></a></td></tr>
<tr><td align="center" style="padding:6px 7px 0;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-05-geranio-20ml-sem-alcool-hn6y3/" style="text-decoration:none;color:#1b2e25;"><div style="font-size:9px;line-height:12px;color:#8b6a32;letter-spacing:.5px;font-weight:bold;">COMPOSIÇÃO 05</div><div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:18px;color:#1b2e25;font-weight:bold;margin-top:2px;">GERÂNIO</div></a></td></tr>
<tr><td align="center" style="padding:7px 9px 4px;font-size:10px;line-height:14px;color:#343b35;">Verde, rosado e revigorante.</td></tr>
<tr><td align="center" style="padding:5px 9px 3px;font-size:9px;line-height:12px;color:#5d5b54;"><strong style="color:#28382f;">NOTAS</strong><br>Gerânio, notas verdes,<br>aquático, madeiras</td></tr>
<tr><td align="center" style="padding:8px 7px 10px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-05-geranio-20ml-sem-alcool-hn6y3/" style="display:inline-block;background-color:#173a2d;color:#fff4d3;text-decoration:none;font-size:9px;line-height:12px;font-weight:bold;letter-spacing:.35px;padding:8px 9px;border-radius:3px;">VER PRODUTO</a></td></tr>
</table></td><td class="product-cell stack100" valign="top" style="width:16.66%;padding:0 4px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:separate;background-color:#f1eadf;border-radius:5px;">
<tr><td align="center" style="padding:8px 6px 4px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-06-sandalo-20ml-sem-alcool-3a884/" style="text-decoration:none;"><img class="product-img" src="https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-bf6bc046c99bf92c5a17873248682753-1024-1024.webp" width="150" height="150" alt="SÂNDALO" style="display:block;width:150px;height:auto;max-width:100%;margin:0 auto;border:0;"></a></td></tr>
<tr><td align="center" style="padding:6px 7px 0;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-06-sandalo-20ml-sem-alcool-3a884/" style="text-decoration:none;color:#1b2e25;"><div style="font-size:9px;line-height:12px;color:#8b6a32;letter-spacing:.5px;font-weight:bold;">COMPOSIÇÃO 06</div><div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:18px;color:#1b2e25;font-weight:bold;margin-top:2px;">SÂNDALO</div></a></td></tr>
<tr><td align="center" style="padding:7px 9px 4px;font-size:10px;line-height:14px;color:#343b35;">Quente, cremoso e reconfortante.</td></tr>
<tr><td align="center" style="padding:5px 9px 3px;font-size:9px;line-height:12px;color:#5d5b54;"><strong style="color:#28382f;">NOTAS</strong><br>Sândalo, tabaco,<br>baunilha, especiarias</td></tr>
<tr><td align="center" style="padding:8px 7px 10px;"><a href="https://essenciadobrasil.com.br/produtos/perfume-em-oleo-composicao-06-sandalo-20ml-sem-alcool-3a884/" style="display:inline-block;background-color:#173a2d;color:#fff4d3;text-decoration:none;font-size:9px;line-height:12px;font-weight:bold;letter-spacing:.35px;padding:8px 9px;border-radius:3px;">VER PRODUTO</a></td></tr>
</table></td>
</tr></table>
</td></tr>

<!-- secondary reference block -->
<tr><td style="padding:0 40px 18px;background-color:#fbf7ef;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:separate;background-color:#173a2d;border-radius:6px;overflow:hidden;">
<tr>
<td class="secondary-col stack100" valign="middle" style="width:36%;padding:0;background-color:#173a2d;"><img src="https://i.ibb.co/V0hRJSxL/Chat-GPT-Image-3-de-set-de-2026-18-59-03.png" width="324" height="216" alt="Perfumes em Óleo Essência do Brasil" style="display:block;width:100%;height:auto;max-width:100%;border:0;"></td>
<td class="secondary-col stack100" valign="middle" style="width:64%;padding:0;background-color:#173a2d;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
<tr>
<td class="offer-cell stack100" valign="middle" style="width:65%;padding:22px 20px 20px 26px;">
<div style="font-size:10px;line-height:14px;color:#e6bd63;font-weight:bold;letter-spacing:.7px;margin-bottom:8px;">UM RITUAL MAIS PRÓXIMO</div>
<div class="secondary-title" style="font-family:Georgia,'Times New Roman',serif;font-size:21px;line-height:25px;color:#fff6dd;margin-bottom:9px;">O perfume como um gesto íntimo</div>
<div style="font-size:11px;line-height:16px;color:#f5efdf;margin-bottom:14px;">Mais do que perfumar, esta coleção foi criada para acompanhar a pele de perto. Macadâmia, jojoba e vitamina E transformam a aplicação em um ritual delicado, enquanto o aroma evolui com o calor do corpo.</div>
<a href="https://essenciadobrasil.com.br/colecoes/perfumes-em-oleo-sem-alcool/" style="display:inline-block;background-color:#c89b45;color:#fffaf0;text-decoration:none;font-size:10px;line-height:13px;font-weight:bold;letter-spacing:.3px;padding:10px 16px;border-radius:3px;">ESCOLHER MINHA COMPOSIÇÃO</a>
</td>
<td class="offer-cell stack100" valign="middle" style="width:35%;padding:16px 16px 16px 6px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;border:1px solid #caa64f;border-radius:6px;">
<tr><td style="padding:15px 14px 13px;color:#fff5d8;"><div style="font-size:10px;line-height:13px;color:#e9c36a;font-weight:bold;">COMPRE 4 E PAGUE 3</div><div style="font-size:10px;line-height:14px;margin-top:4px;color:#fff5e4;">Em produtos participantes da loja</div></td></tr>
<tr><td style="padding:0 14px;"><div style="height:1px;background-color:#b79449;font-size:1px;line-height:1px;">&nbsp;</div></td></tr>
<tr><td style="padding:13px 14px 15px;color:#fff5d8;"><div style="font-size:10px;line-height:13px;color:#e9c36a;font-weight:bold;">3% DE DESCONTO NO PIX</div><div style="font-size:10px;line-height:14px;margin-top:4px;color:#fff5e4;">Condição no pagamento via Pix</div></td></tr>
</table>
</td>
</tr></table>
</td>
</tr></table>
</td></tr>

<!-- footer -->
<tr><td style="padding:0;background-color:#f8f4ec;border-top:1px solid #e2d9ca;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
<tr>
<td class="footer-col stack100" valign="middle" style="width:33.33%;padding:16px 28px;text-align:left;"><div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:21px;font-style:italic;color:#334238;">A sua essência,<br>nosso propósito.</div></td>
<td class="footer-col stack100" valign="middle" align="center" style="width:33.33%;padding:16px 20px;border-left:1px solid #ddd3c2;"><div style="font-family:Georgia,'Times New Roman',serif;font-size:10px;line-height:13px;color:#2f3b34;letter-spacing:1px;margin-bottom:6px;">SIGA-NOS</div><div style="font-size:10px;line-height:15px;color:#37433c;">Instagram | Facebook | TikTok</div></td>
<td class="footer-col stack100" valign="middle" align="center" style="width:33.33%;padding:16px 20px;border-left:1px solid #ddd3c2;"><div style="font-family:Georgia,'Times New Roman',serif;font-size:10px;line-height:13px;color:#2f3b34;letter-spacing:1px;margin-bottom:6px;">ATENDIMENTO</div><div style="font-size:10px;line-height:15px;color:#37433c;"><a href="https://essenciadobrasil.com.br/" style="color:#37433c;text-decoration:none;">essenciadobrasil.com.br</a></div></td>
</tr></table>
</td></tr>

<!-- compliance -->
<tr><td style="padding:0;background-color:#173a2d;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
<tr>
<td class="bottom-col stack100" valign="middle" style="width:23%;padding:14px 20px;text-align:center;"><div style="font-family:Georgia,'Times New Roman',serif;font-size:13px;line-height:16px;letter-spacing:2px;color:#f3e6bd;">ESSÊNCIA</div><div style="font-family:Georgia,'Times New Roman',serif;font-size:9px;line-height:12px;letter-spacing:2px;color:#f3e6bd;">DO BRASIL</div></td>
<td class="bottom-col stack100" valign="middle" style="width:54%;padding:14px 18px;text-align:center;border-left:1px solid #53664f;"><div style="font-size:9px;line-height:14px;color:#f5f1e6;">Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.</div></td>
<td class="bottom-col stack100" valign="middle" style="width:23%;padding:12px 14px;text-align:center;border-left:1px solid #53664f;"><img src="cid:security" width="24" height="24" alt="" style="display:block;width:24px;height:24px;max-width:100%;margin:0 auto 4px;border:0;"><div style="font-size:9px;line-height:12px;color:#e8c66c;font-weight:bold;">100% SEGURO</div><div style="font-size:9px;line-height:12px;color:#f5f1e6;">Seus dados protegidos</div></td>
</tr></table>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function enviarTestePerfumesEmOleo() {
  validarTemplatePerfumesEmOleo();
  var destinatario = Session.getActiveUser().getEmail();
  if (!destinatario) {
    throw new Error('Não foi possível identificar o e-mail da conta ativa.');
  }
  GmailApp.sendEmail(
    destinatario,
    ASSUNTO_PERFUMES_EM_OLEO,
    'Perfumes em Óleo — Sem Álcool | Essência do Brasil',
    {
      htmlBody: montarHtmlPerfumesEmOleo_(),
      inlineImages: criarInlineImagesPerfumesEmOleo_(),
      name: 'Essência do Brasil'
    }
  );
}

function validarTemplatePerfumesEmOleo() {
  var html = montarHtmlPerfumesEmOleo_();
  var inlineImages = criarInlineImagesPerfumesEmOleo_();

  if (ASSUNTO_PERFUMES_EM_OLEO !== 'E se a memória começasse pela pele?') {
    throw new Error('Assunto do e-mail foi alterado.');
  }

  var textoDescadastro = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';
  if (html.indexOf(textoDescadastro) === -1) {
    throw new Error('Texto obrigatório de descadastro ausente ou alterado.');
  }
  if (html.indexOf('@media only screen and (max-width:920px)') === -1) {
    throw new Error('Breakpoint obrigatório de 920px ausente.');
  }
  if (html.indexOf('max-width:900px') === -1) {
    throw new Error('Max-width principal de 900px ausente.');
  }

  var fotos = [
'https://i.ibb.co/XkMZQmwD/Chat-GPT-Image-3-de-set-de-2026-18-59-39.png',
    'https://i.ibb.co/V0hRJSxL/Chat-GPT-Image-3-de-set-de-2026-18-59-03.png',
    'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-1d1b780c5021877f0017873248514639-1024-1024.webp',
    'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-fa6f64e1c38aa03cbc17873248536000-1024-1024.webp',
    'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-b2fc0794e172cb497f17873248600646-1024-1024.webp',
    'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-b00b34d74aed021cd317873248620297-1024-1024.webp',
    'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-443bed0fbcffb5d60117873248663218-1024-1024.webp',
    'https://acdn-us.mitiendanube.com/stores/006/291/372/products/1-bf6bc046c99bf92c5a17873248682753-1024-1024.webp'
  ];
  fotos.forEach(function(url) {
    if (url.indexOf('https://') !== 0 || html.indexOf(url) === -1) {
      throw new Error('Imagem fotográfica pública ausente ou inválida: ' + url);
    }
  });

  var cidUsados = {};
  var reCid = /cid:([A-Za-z0-9_-]+)/g;
  var m;
  while ((m = reCid.exec(html)) !== null) {
    cidUsados[m[1]] = true;
  }
  var cids = Object.keys(cidUsados).sort();
  var chaves = Object.keys(inlineImages).sort();
  if (cids.join('|') !== chaves.join('|')) {
    throw new Error('As chaves de inlineImages e os cid: usados no HTML não são idênticos. CIDs=' + cids.join(',') + ' | inlineImages=' + chaves.join(','));
  }

  var tagsTd = html.match(/<td\b[^>]*>/gi) || [];
  var classesResponsivas = ['stack100','header-col','menu-cell','benefit-cell','product-cell','secondary-col','offer-cell','footer-col','bottom-col','hero-copy','hero-spacer','section-title-cell'];
  tagsTd.forEach(function(tag) {
    var cm = tag.match(/class="([^"]*)"/i);
    if (!cm) return;
    var lista = cm[1].split(/\s+/);
    var mudaLargura = lista.some(function(c) { return classesResponsivas.indexOf(c) !== -1; });
    if (mudaLargura && /\swidth="/i.test(tag)) {
      throw new Error('TD responsiva contém atributo HTML width=: ' + tag);
    }
  });

  var tabelas = html.match(/<table\b[^>]*>/gi) || [];
  tabelas.forEach(function(tag) {
    if (!/\swidth="[^"]+"/i.test(tag)) {
      throw new Error('Tabela sem atributo width explícito: ' + tag);
    }
    if (!/style="[^"]*width:/i.test(tag)) {
      throw new Error('Tabela sem width explícito no style: ' + tag);
    }
    var eh100 = /width="100%"/i.test(tag) && /style="[^"]*width:100%/i.test(tag);
    var heroSplit = /class="[^"]*hero-split/i.test(tag);
    if (eh100 && !heroSplit && !/table-layout:fixed/i.test(tag)) {
      throw new Error('Tabela width=100% sem table-layout:fixed: ' + tag);
    }
  });

  var imgs = html.match(/<img\b[^>]*>/gi) || [];
  imgs.forEach(function(tag) {
    if (!/\swidth="\d+"/i.test(tag) || !/\sheight="\d+"/i.test(tag)) {
      throw new Error('Imagem sem width e height HTML em pixel: ' + tag);
    }
    if (!/style="[^"]*max-width:100%/i.test(tag)) {
      throw new Error('Imagem sem max-width:100%: ' + tag);
    }
  });

  if (!/class="hero-title"[^>]*style="[^"]*font-size:38px/i.test(html)) {
    throw new Error('Título do hero sem classe/tamanho desktop esperado.');
  }
  if (html.indexOf('.hero-title{font-size:31px!important;line-height:33px!important;color:#fff8e8!important;}') === -1) {
    throw new Error('Título do hero sem redução e cor mobile próprias.');
  }
  if (html.indexOf('.hero-body{font-size:13px!important;line-height:19px!important;color:#ffffff!important;}') === -1) {
    throw new Error('Cor/tamanho mobile do corpo do hero ausentes.');
  }

  if (html.indexOf('.hero-mobile-image{display:block!important;width:100%!important;height:auto!important;max-width:100%!important;}') === -1) {
    throw new Error('Imagem hero mobile integral/sem corte ausente.');
  }
  if (html.indexOf('.product-img{width:320px!important;height:auto!important;max-width:88%!important;}') === -1) {
    throw new Error('Ampliação mobile das fotos de produto ausente.');
  }
  if (html.indexOf('VER PRODUTO') === -1) {
    throw new Error('Botões VER PRODUTO ausentes dos cards.');
  }
  if (html.indexOf('white-space:nowrap;">CONHEÇA AS 6 COMPOSIÇÕES') === -1) {
    throw new Error('Título desktop da seção foi alterado inesperadamente.');
  }

  Logger.log('Template validado com sucesso. CIDs: ' + chaves.join(', '));
  return true;
}
