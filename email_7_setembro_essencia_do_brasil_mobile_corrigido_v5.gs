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

const IMAGEM_BLOCO_INSTITUCIONAL_SETEMBRO_2026 = 'https://i.ibb.co/v6DS5XTY/Chat-GPT-Image-5-de-set-de-2026-17-40-24.png';


const ICONES_BASE64_SETEMBRO_2026 = {
  icoPerfumeDark: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA5klEQVR4nO2a0Q2CUBAE0ViCTViFtVuFTdiD/htNMO4yITdTwLJOjgfmWBYRERERmcmhfYHz9fL8N+Nxu9d6HlvBe2G8gNOWF/tllBO3zhrGT4AC6AI04wXUnq+NQ6zxPlCZgNYJ3siNC2g/vtL50ZF6L5cc2VZ2bAKaP/5TXmoSKmdA68/Lbg7BPaEAugCNAugCNAqgC9AogC5AowC6AI0C6AI0CqAL0CiALkCjALoAjQLoAjQKoAvQKIAuQKOARujI9XhrefktL7UnjC8bt/i8Lbkkjd8Czc9aG/nj1+MiIiIiY3kB7HpAWeEDOyYAAAAASUVORK5CYII=',
  icoDropDark: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABbUlEQVR4nO2a0Q2DMAxE3c7QJZiC2ZmiS3SH9gspojUt4e4M1T2p6g848cVODDjCGGOMMcbouY3Ds/2v4FI18CenH9NdPp+resCjUSJAFvIVqeAIUA+4XOVl3qujQCpA5nylCE4B1UDfQr8qCiQC9DqjEKEkBbKC5y8LoW+hv0SdCt4Emca3rn52HTMKaAL0Op9dzxLBKcAwunf1s/sYUeAIYA+w92xn1waOALTBNk9Rq9faQe8DjoDqCVQDFaDy9XYvp4wApNCnFAAJTQD0+c2qB2ACqPMfNZ5ToHoC1UAFYFZsjAozAijAY7pfVPvAbRyeKBHgKcCIAtbqR3gPsABw2raX+bfXXmvHj8NgJKUw4tvg4Uvhmew43CpCZgMtBO2F45rDa0703tdLydNgT5PUaVKgJWuBiXh3dq1vkPlqXPI9fs7dLfvAfD37u4CsIaHnJFA0TMg7Mn4RQtkpUtYrHKE5540xxhhjTMILR2XLksEEUJIAAAAASUVORK5CYII=',
  icoAromaDark: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAx0lEQVR4nO3U2xFEMBQAULYGTahC7arQhB7sl5kdIyRy42fP+cTcV250HQAAAAD/pX8z2TCNW+6367y8UlvzJCVNp7QcRpPAEU2nRA8jNFjLxo+iBvGJCNJ17zYfmS9kAJE/t5KTjRhC9QCORaQa2J/fFb2/v4uTyl+q6h79Jk81mNv4mZKYT/8JjwdQ2/xZwVfftRrCoytwVmhu8+u89FfrnVrxnNV/smXVG3B1ErWnkxtzmMbt9SuQo8UAAAAAAAAAAACgzBczYY8H+T/IuQAAAABJRU5ErkJggg==',
  icoSerumDark: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA80lEQVR4nO2awRHCQAwDD4YSaIIqqJ0qaIIe4MWHV3JY1mW0+8enUeSzM2QMAAAAAMjk1HHI9X57z/729XhKNZ6VxY9AvAGX7gO3RPqfltlLfALiDWhvgc54byE+AdIZW/m0VfuALAHVUVe1jsQAlVhF3fJY/YqsiK6i5hfpJVglVPk+ED8F4g1oW4RmLjD1q/AYJAAD2lqgI84zxCcAA9wC3DAG1QesTrwBjEG3ADcY4BbgZqkx6Lgn4hMQbwBj0C3ADQa4BbjBALcANxigLF71Z6byowrJbFYKrt4nJAlQLT2KurIWqBa76iYJAAAAAHBQPh81RW0o0LYLAAAAAElFTkSuQmCC',
  icoTagDark: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABF0lEQVR4nO2Z0Q3CMAwFA2IElmAKZmcKlmAH+EWIUqjfc2xx94la1z6SNHXGAAAAAAAAAPg7dpkPO55Pd0fc2+W6uY69MpFPuIqPxk4R4Cw+ysH9gHfFR4bsWuxfsY4AZ/EqbAI6FD+GaQpsLf75vixZ8hGgKH4pjgOpAFXxa78rkQlQzfnsdUIiQLngZe8ZwgIUxS9dnzEaQgKU//zrfVlTQfoajCY9Y58gWwQrbnK+Ie1rsCoImJ3AbBAwO4HZIGB2AltRbZlbClB+L7QToO40tRLgaLO1EeDqMbYQ4Gywlhfg7i6XFpDRWi8rIOtcoaSAzEOVcgKyT5RCgTM6uO5OU7kR8Ez5rrAzwa49RgAAAAAAAOjAAztzhEuE4dasAAAAAElFTkSuQmCC',
  icoSparkLight: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABMElEQVR4nO2ZwQ2CQBBFv1ZhFdZmKdZmFXahJxJCCCHLfzur/HfyIjPzgGV3RgohhBBCCOfkUhn8/Xp+pt+3+6Mkl2tF0JGIgOoEqomA6gSqiQDnxeafNRJnHJuAKSlagjuORcAyGUoCEcciYG0X55awdj3H7tH2CpASqOIl8yJISCCLl4DPoFMCXbwE7QMcEnoUL8HH4dYiehUvwTvBZdJ7i2j937A414AQgpXdi8uR9/HIIkbHTT+gOoEQwv8z8k4QXwRbe3i9eoyogNYeXq8eowQeh/ccabemw72OxMgT4Ei+R6NVAgQ471wPCfhk6OhjS0uwT4bmuN5ZUgIyGZL8CxYlAZkMUT08Io59MkQ3MN1x8MkQwdCToV8jAqoTqCYCqhOo5vQCQgghhBBOyxc60MKPv6NDZQAAAABJRU5ErkJggg==',
  icoGiftLight: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA8UlEQVR4nO3Z0Q3CMAxFUYMYgimYjVE6G1OwBfxWoVXkxNYL8j2faWidV5dUqhkAAACAii7ZF3i/tk87dn88T6/rnT/rmnVis+PFRI5HSAugV3R73Ds/SkprtcXuW/jomHd+ZK2pj4DZb8G9BXjnzwoPwNuq2fN7Ujvg7O5FjUdIfwRWVz4AoLiQf9fMV9We2R1i6sfKhbdGgyi/Cwx3wP7uj6a/wjnKdwABqAtQIwB1AWohu8Aq2AUGlA/gFnGSVV6ERpTvAAJQF6BGAOoC1AhAXYAaAagLUCMAdQFqBKAuQI0PI9GF/Jvy3wYBAACAor5yBGoiXh3h4AAAAABJRU5ErkJggg==',
  icoCareLight: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABZUlEQVR4nO2a2w3CMAxFU8QQTMFsjMJsnaJblC+kyIpD0vpRiXM+Q3HsGzdxDKUAAAAAAAAAQDTb+t4z51+yJm4F/ni+wv25RU9Yir7qGdkQqvhMgFHZEDKJDPwbXD3eGqvHvXB9Bbb1vc8GJD9v2bDETYBW4KOr2XrWSwRzAbQVmw1As2EthJkA0rnWao8EoD1T27MUwkQA7T3XUn72GNTsWYhgssOOFDVHnB2xcfaUcN0Ef70SPbxSXmIugNzBa+dnTgH53ZZtC+6Wxmoez9dSOy9F6KVz5D3BtRDqnedyvFcJelaDbhlQI4MbqROi7gIhAnzppbh8JoqU67AW5N/0A0rR94Bo0gS4CgiQ7UA2CJDtQDYIYG3Qu7V9yY5QVP/Oo1w2Lz5mnBztF3jeE9yqrxGnR3qIv2ycxW0TPNPfP/J7wlHS+gEa0f0AfhuMmERCP+BC/YB0sv8hAgAAAAAAAP/IBz/7Gpg2tH3mAAAAAElFTkSuQmCC',
  icoLeafLight: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABW0lEQVR4nO2Z0Q3DIAxESdUhMkVm6yidrVN0i/YrUoSA4ODzEenebwr4zk6gJiUhhBBCCCGEEHy+n/cvcr0lcrEWNeHr9oLGSDfAknGEGTQDzoSv22tp/cbLjHADSqJ2McdnuUCUGWEGtITnz88Enc1l4XllkAXPYPPxHjsGtALyAGvCLdkfGVMCVgFeAaJ5sANgGwUxAC3Kc35qBbCznxLAgBlEWaBVwFWjvA12NeBu2U/J0YCrJzm2UfRt0ALCOBcDIrKPapTcogKQXaJhAxjvs+c6oRUw+qfHMq6XIQMij7yoNcIqwGpWVHd4yIBaR2cURBOlRkgFsNpdPQwbgKqC0vwI4BUwkv2IbdXFAI8qYIhPCVwBvdmPvg88Qj8KR3/0clwXslxwsi5Dc+AXIznsjOeEHV9nE74DN6DEDMJ3IIHM8n73EPINmFE4HObeLoQQQgghhBBCtPkDKDHqILju0fgAAAAASUVORK5CYII=',
  icoBrazilDark: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABr0lEQVR4nO2a0Q3DIAxEadURskSmyOyZokt0h/QrUoQCBftsTHXvO3HswxhDSIkQQgghhNixbOuxbOsx2o87HtYfKAX+2d+ib5/2pO/nmArQOuq1YGo2ECK8tAZ6OB3Ogxo5PcwyIA+qNFq/gs/fa7XbiokAUieXbT1+PXsnmEaEp/TFEpp0bgnk7hnNN6ECoEenBNImTACv4Eu2pVmgXgXQRckbsbNRAr/6IfFBNAWiBI9AJMA14JHBa0c/JUARjLrJaUUswMxpfwWyDM6cBSoB/iELTBshSxAFMCWAALNngflewIMwm6GRSEWA9gGe0wG1LZ46A0oi9AgBE2BUMfzs74cmG1QCRGqApCJMPQVychFaslIswKji14NbBkSZCpJzCthuMIoIvUBSN8IJkdQHqKOWJ8O1nyaaAYCuAuifFrmNs8lBTrdQv8Za7dXo/ZZJH4AskPlyW+r8pLjeD5A43nIhQnNpwrUT7M2EngsWw47Fa6BS1XJZNc8AaT3waqxcpoCmKFo3Va53hK7UNlOebbVry9obmEdLHWIbi75LOD2z7iwJIYQQQggh8/AFDrELxIzR3g0AAAAASUVORK5CYII=',
  icoBottleDark: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA8klEQVR4nO2ZwRHCMBADDUMJNEEV1E4VNJEewj/DI9jSaZjb/dvWyHJi340BAAAA0JRLxSL352OfHbu93laNV+fk/0B7A27VC56J9MqR+RUSUL1g5e6eoX0C7Aas7rg7MVYDVOKdJtgMUIt2mWC5ZR3FrtzmlHN9Q54AteDjeHUSrN8A1W453wP8BtMC0mBAWkAaDEgLSNPegLLn8MwFxl0PHIMEYEDZEaiI8wztE4ABaQFpMCAtIA0GpAWkwYC0gDQYkBaQBgPSAtJgQFpAGtrj6gnVzUx3d9hWpXHsmqOqZDsCarGuklr79jgAAAAAQFM+bQJHVKfYScMAAAAASUVORK5CYII=',
  icoSproutDark: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABQ0lEQVR4nO2X0Y3DQAhEyelKSBOpIrWnimsiPeS+VrIs27t4B7CU974sOUYww7LEDAAAAAAAAACuzP35+Khj3tQBo1gX/379SXL/UQRZo3YqwvmGtAPULvUKV3RBSAc0ZpyLdH2JrAOOEvY6tRVrGWP5frYLQjug4XGzV7waiQBrR7YSHhEhu3izwA7wiHB/Pj6e4veOwxlCj0BPhL3C976NYFqA3kDyHoe9I3QUd6YLUobgqAge11XXpGxRGUlecVWqB6WsA0YcmUl0a16MHpcjpgfNGUc830RfjaGb4FGivf8NWTuBPOBZd9tvspehX3XArULas7eQjF1ALkBjRoisJcgsYQ/wTurM4s2SFiEzzZUVQZoAjauJkC7A1UCA6gSqQYDqBKpBgOoEqkGA6gSqQYDqBKr5egEAAAAAAAAAvpB/k0HBSufqSwQAAAAASUVORK5CYII=',
  icoPeopleDark: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABOklEQVR4nO2Y0Q3CMAxEA2IElmAKZu8UXYId4KtSVTXJ2bEDEu99oTa5OE7OSSkFAAAAAAD+kcu3Br4/H+/js9eyTo/nOnvAUs4n33qeyfQE9CY5OwlTt9xxcvst33qXyS1KyOrp47vXsl5aq59VM0IsoHh6/7sWeG1HZNaM4QRkezpbf2gLWTxda9fTVPW9dnAnQAkgsqIr+p4khNQAxdO/qv+Vi9AvEXYMelBrRiZhNUChd9Zb2531s/ZxW8A62Na+109tNxrPhqvTyHbdAm3d7CL0VcwJiPCq9x4QoX/ElADrxcd6ccnWPyOsBqje9uqPjl9D7qR8zOzb1trUdBT9lq4nzlLEHWD1pboam66qb11lRddsgdHrZ7RVRvtLCcj6d8Z75lv1AQAAAAAAAAAAAAAAAADg3/kA7mfr3wlKgBQAAAAASUVORK5CYII=',
  icoContactLight: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABLElEQVR4nO3YwQ3CMAyFYRcxRKfobB2F2ZiCLeAUqYqSqrUdOxL/d+FCG/vhpIAIAAAAAAAA/stiufjzfn29CrFat13Vy0O74EzNi+jrUQUwW/OFpq7bY3O2iHYMNbzqUG+BlqjJ8FzHFEAr6dEhtO5vmTzzBESG4N28iNMW6IXgFUTvXh5njtsZ0CvGGkLveq8D1/UQXLd98dwSvU/d82njGkBh3RIjR742JAAR/ZYYPfK1YQGI3N8SESNfGxpAcSWEqJGvPUcvUKzbvlxp+vj+8VUFTUBxtanI3xRhE1CU5rJGvhY6AUel2fo1WloAIvnNiyQHMAMCyC4gGwFkF5CNACwXz/L3uKUO1fN3lsZb7n6nUE1A5heXM5q61FtgthBmqwcAAAAAAGBaPy4NlxjY6z5cAAAAAElFTkSuQmCC',
  icoSocialLight: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABRUlEQVR4nO2a2w3CMAxFATEEUzAbo3S2TtEtylelykpp1NzrAD3nsw/Hvk5ck3C5AAAAAAAAAMDZuDqNT+Mwq2w9ni+LrxajysAjaiGkxpyBR1RCyAQoBa/Mlsv+vdVACcd6XWyqZ5nE0bVT6uBLtpXj3VpedhOz7agxzQI4s7/FepxWUSw1oAZ30awlfQlM4zBvZS3ei4I4BEqdAbXTdRqHeQnWPSvSBIjBlwJbP7MWwUnKEqgJvnQ9o7NMrwF7Wc0uhHYBjnwmlZ+5Pb66EcoAAXo70BsEcA9wpKBl/r7o0gq33FeTIkBtg1PbMClJa4Ufz9c1trp7z/u9Sl4CRxohN+n7AZ/29nrsB3TbEOkRbInmJZDZt5fG+etN0QwkAmTOAnWTZKkBi5PukyEFnA0qjEROezoc+YX/BwAAAAAAAACckDeed7OUL1GXEQAAAABJRU5ErkJggg==',
  icoPaymentLight: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA3UlEQVR4nO3YwQ3CMAyFYRcxBFMwG6MwG1OwBT1Vqqpc8l4kW/j/7m1sy4nbRAAAAAAAAKCXzX3B9/P+rQjE8Xi+5DxuzsIVko/w4pALUCX5gxqP1DrXxZwWdLmxTHdApeRH6892gnUGZCd/SDsE/wEFyA4g2915uNooVLTvgPYFsLZAlTEYoW/H9h1AAbIDyEYBsgPI1r4A1hg8mxlDo/GpjLEVY7h9B7QvwLIt4LZj1ldl+w7gWnz2AfcScjX3klbed9mJjyjniLwFKv0KR+jxtL8WBwAAAAAAaGcHCsJI9350sroAAAAASUVORK5CYII='
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
    if (chave === 'icoBrazilDark' && IMAGEM_BLOCO_INSTITUCIONAL_SETEMBRO_2026) {
      return;
    }
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
      .menu-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:12px 18px!important;text-align:center!important;}
      .benefit-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:12px 18px!important;}
      .institution-cell{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:16px 22px!important;border-left:0!important;border-top:1px solid #d9ccb4!important;}
      .institution-main{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:22px!important;}
      .institution-art{width:82px!important;max-width:82px!important;height:auto!important;}
      .footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:18px 24px!important;border-left:0!important;border-top:1px solid #4a6a58!important;text-align:left!important;}
      .hero-surface{height:470px!important;background-size:cover!important;background-position:left center!important;}
      .hero-overlay{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding:26px 24px 22px 28px!important;}
      .hero-panel{display:block!important;width:58%!important;max-width:58%!important;box-sizing:border-box!important;padding:0!important;margin:0!important;background:transparent!important;}
      .hero-spacer{display:none!important;width:0!important;max-width:0!important;padding:0!important;font-size:0!important;line-height:0!important;}
      .hero-eyebrow{font-size:15px!important;line-height:19px!important;color:#123f29!important;}
      .hero-title{font-size:29px!important;line-height:33px!important;color:#123f29!important;}
      .hero-body{font-size:14px!important;line-height:21px!important;color:#1d392b!important;}
      .hero-body-secondary{font-size:12px!important;line-height:18px!important;color:#2f4e3e!important;}
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
                      <img src="cid:icoPerfumeDark" width="24" height="24" alt="" style="display:block;margin:0 auto 6px;max-width:100%;border:0;">PERFUMES<br>MASCULINOS
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:13px 5px;text-align:center;vertical-align:middle;border-left:1px solid #eadfc9;">
                    <a href="${U.perfumesFemininos}" style="color:#111111;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;">
                      <img src="cid:icoPerfumeDark" width="24" height="24" alt="" style="display:block;margin:0 auto 6px;max-width:100%;border:0;">PERFUMES<br>FEMININOS
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:13px 5px;text-align:center;vertical-align:middle;border-left:1px solid #eadfc9;">
                    <a href="${U.oleosEssenciais}" style="color:#111111;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;">
                      <img src="cid:icoDropDark" width="24" height="24" alt="" style="display:block;margin:0 auto 6px;max-width:100%;border:0;">ÓLEOS<br>ESSENCIAIS
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:13px 5px;text-align:center;vertical-align:middle;border-left:1px solid #eadfc9;">
                    <a href="${U.essencias}" style="color:#111111;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;">
                      <img src="cid:icoAromaDark" width="24" height="24" alt="" style="display:block;margin:0 auto 6px;max-width:100%;border:0;">ESSÊNCIAS
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:13px 5px;text-align:center;vertical-align:middle;border-left:1px solid #eadfc9;">
                    <a href="${U.cremesSeruns}" style="color:#111111;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;">
                      <img src="cid:icoSerumDark" width="24" height="24" alt="" style="display:block;margin:0 auto 6px;max-width:100%;border:0;">CREMES E<br>SÉRUNS
                    </a>
                  </td>
                  <td class="menu-cell" style="width:16.66%;padding:13px 5px;text-align:center;vertical-align:middle;border-left:1px solid #eadfc9;">
                    <a href="${U.ofertas}" style="color:#111111;text-decoration:none;font-size:10px;line-height:14px;font-weight:bold;">
                      <img src="cid:icoTagDark" width="24" height="24" alt="" style="display:block;margin:0 auto 6px;max-width:100%;border:0;">OFERTAS
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 4. Hero principal -->
          <tr>
            <td style="padding:0;background-color:#f7f1e7;">
              <!--[if gte mso 9]>
              <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:900px;height:495px;">
                <v:fill type="frame" src="${F.hero}" color="#f7f1e7" aspect="atmost" />
                <v:textbox inset="0,0,0,0">
              <![endif]-->
              <table width="100%" data-layout="fluid-exception" role="presentation" cellspacing="0" cellpadding="0" border="0" background="${F.hero}" class="hero-surface" style="width:100%;height:495px;border-collapse:collapse;background-image:url('${F.hero}');background-repeat:no-repeat;background-position:center top;background-size:cover;background-color:#f7f1e7;">
                <tr>
                  <td style="padding:28px 0 24px;vertical-align:top;">
                    <table width="100%" data-layout="fluid-exception" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;table-layout:fixed;">
                      <tr>
                        <td class="hero-overlay" style="width:43%;padding:32px 0 0 34px;vertical-align:top;box-sizing:border-box;">
                          <div class="hero-panel" style="padding:0;box-sizing:border-box;background:transparent;">
                            <div class="hero-eyebrow" style="font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:22px;color:#0f432b;font-style:italic;margin-bottom:10px;text-shadow:0 1px 0 rgba(255,255,255,0.55);">7 DE SETEMBRO</div>
                            <div class="hero-title" style="font-family:Georgia,'Times New Roman',serif;font-size:39px;line-height:43px;color:#0b3a25;font-weight:bold;margin-bottom:16px;max-width:300px;text-shadow:0 1px 0 rgba(255,255,255,0.55);">
                              O Brasil também se revela pelo aroma
                            </div>
                            <div class="hero-body" style="font-size:16px;line-height:24px;color:#253d31;margin-bottom:14px;max-width:315px;text-shadow:0 1px 0 rgba(255,255,255,0.45);">
                              Neste 7 de Setembro, celebramos o Brasil por aquilo que ele tem de mais inspirador: a natureza exuberante, a luminosidade dos cítricos e a riqueza de aromas que fazem parte da nossa identidade.
                            </div>
                            <div class="hero-body-secondary" style="font-size:13px;line-height:19px;color:#375444;margin-bottom:20px;max-width:315px;text-shadow:0 1px 0 rgba(255,255,255,0.42);">
                              Selecionamos 4 fragrâncias para traduzir essa essência em forma de perfume: o verde profundo da floresta, o brilho dourado dos frutos e a energia vibrante de um país que inspira todos os dias.
                            </div>
                            <a class="hero-cta" href="${U.colecoes}" style="display:inline-block;background-color:#0f432b;color:#ffffff;text-decoration:none;font-size:14px;line-height:18px;font-weight:bold;padding:13px 18px;border-radius:4px;">CELEBRE NOSSA ESSÊNCIA</a>
                          </div>
                        </td>
                        <td class="hero-spacer" style="width:57%;padding:0;">&nbsp;</td>
                      </tr>
                    </table>
                  </td>
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
                    <img src="cid:icoLeafLight" width="26" height="26" alt="" style="display:inline-block;vertical-align:middle;max-width:100%;border:0;margin-right:9px;">
                    <span style="font-size:11px;line-height:16px;font-weight:bold;">FEITO COM NATUREZA<br>E PROPÓSITO</span>
                  </td>
                  <td class="benefit-cell" style="width:25%;padding:15px 12px;vertical-align:middle;text-align:center;color:#ffffff;border-left:1px solid #436653;">
                    <img src="cid:icoSparkLight" width="26" height="26" alt="" style="display:inline-block;vertical-align:middle;max-width:100%;border:0;margin-right:9px;">
                    <span style="font-size:11px;line-height:16px;font-weight:bold;">FRAGRÂNCIAS NATURAIS<br>E SOFISTICADAS</span>
                  </td>
                  <td class="benefit-cell" style="width:25%;padding:15px 12px;vertical-align:middle;text-align:center;color:#ffffff;border-left:1px solid #436653;">
                    <img src="cid:icoGiftLight" width="26" height="26" alt="" style="display:inline-block;vertical-align:middle;max-width:100%;border:0;margin-right:9px;">
                    <span style="font-size:11px;line-height:16px;font-weight:bold;">COMPRE 4<br>E PAGUE 3</span>
                  </td>
                  <td class="benefit-cell" style="width:25%;padding:15px 12px;vertical-align:middle;text-align:center;color:#ffffff;border-left:1px solid #436653;">
                    <img src="cid:icoCareLight" width="26" height="26" alt="" style="display:inline-block;vertical-align:middle;max-width:100%;border:0;margin-right:9px;">
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
                          ${IMAGEM_BLOCO_INSTITUCIONAL_SETEMBRO_2026 ? `<img class="institution-art" src="${IMAGEM_BLOCO_INSTITUCIONAL_SETEMBRO_2026}" width="82" height="82" alt="" style="display:block;width:82px;height:auto;margin:0 auto;max-width:100%;border:0;">` : `<img src="cid:icoBrazilDark" width="56" height="56" alt="" style="display:block;margin:0 auto;max-width:100%;border:0;">`}
                        </td>
                        <td width="72%" style="width:72%;padding:0;vertical-align:middle;">
                          <div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:20px;color:#173e2c;font-weight:bold;margin-bottom:5px;">SOMOS FEITOS DE NATUREZA, LUZ E IDENTIDADE</div>
                          <div style="font-size:10px;line-height:15px;color:#263a2f;">Neste 7 de Setembro, celebramos um Brasil que inspira pela biodiversidade, pela energia e pela capacidade de transformar natureza em beleza, cuidado e expressão.</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td class="institution-cell" style="width:20%;padding:18px 10px;vertical-align:middle;text-align:center;border-left:1px solid #d9ccb4;">
                    <img src="cid:icoBottleDark" width="38" height="38" alt="" style="display:block;margin:0 auto 8px;max-width:100%;border:0;">
                    <div style="font-size:10px;line-height:14px;color:#1d3026;font-weight:bold;">PERFUMARIA NATURAL<br>COM IDENTIDADE</div>
                  </td>
                  <td class="institution-cell" style="width:20%;padding:18px 10px;vertical-align:middle;text-align:center;border-left:1px solid #d9ccb4;">
                    <img src="cid:icoSproutDark" width="38" height="38" alt="" style="display:block;margin:0 auto 8px;max-width:100%;border:0;">
                    <div style="font-size:10px;line-height:14px;color:#1d3026;font-weight:bold;">SOFISTICAÇÃO INSPIRADA<br>NA NATUREZA</div>
                  </td>
                  <td class="institution-cell" style="width:20%;padding:18px 10px;vertical-align:middle;text-align:center;border-left:1px solid #d9ccb4;">
                    <img src="cid:icoPeopleDark" width="38" height="38" alt="" style="display:block;margin:0 auto 8px;max-width:100%;border:0;">
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
                    <div class="footer-brand" style="font-family:Georgia,'Times New Roman',serif;font-size:20px;line-height:25px;letter-spacing:3px;">ESSÊNCIA</div>
                    <div style="font-family:Georgia,'Times New Roman',serif;font-size:11px;line-height:16px;letter-spacing:2px;">— DO BRASIL —</div>
                    <div style="font-size:11px;line-height:16px;margin-top:8px;">A natureza inspira.<br>A essência transforma.</div>
                  </td>
                  <td class="footer-col" style="width:25%;padding:22px 18px;vertical-align:top;color:#ffffff;border-left:1px solid #4a6a58;">
                    <img src="cid:icoContactLight" width="28" height="28" alt="" style="display:block;margin-bottom:8px;max-width:100%;border:0;">
                    <div style="font-size:11px;line-height:16px;font-weight:bold;margin-bottom:7px;">ATENDIMENTO</div>
                    <div style="font-size:11px;line-height:17px;"><a href="${U.contato}" style="color:#ffffff;text-decoration:underline;">Fale conosco</a></div>
                    <div style="font-size:10px;line-height:16px;margin-top:5px;">essenciadobrasil.com.br</div>
                  </td>
                  <td class="footer-col" style="width:25%;padding:22px 18px;vertical-align:top;color:#ffffff;border-left:1px solid #4a6a58;">
                    <img src="cid:icoSocialLight" width="28" height="28" alt="" style="display:block;margin-bottom:8px;max-width:100%;border:0;">
                    <div style="font-size:11px;line-height:16px;font-weight:bold;margin-bottom:7px;">SIGA-NOS</div>
                    <div style="font-size:11px;line-height:17px;">Instagram</div>
                    <div style="font-size:10px;line-height:16px;margin-top:5px;">Essência do Brasil</div>
                  </td>
                  <td class="footer-col" style="width:25%;padding:22px 18px;vertical-align:top;color:#ffffff;border-left:1px solid #4a6a58;">
                    <img src="cid:icoPaymentLight" width="28" height="28" alt="" style="display:block;margin-bottom:8px;max-width:100%;border:0;">
                    <div style="font-size:11px;line-height:16px;font-weight:bold;margin-bottom:7px;">FORMAS DE PAGAMENTO</div>
                    <div style="font-size:10px;line-height:17px;">PIX · VISA · MASTERCARD<br>AMEX · BOLETO</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 10. Faixa final de descadastro -->
          <tr>
            <td style="padding:0;background-color:#e1b43c;">
              <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;">
                <tr>
                  <td class="unsubscribe-main" style="padding:12px 18px;text-align:center;vertical-align:middle;font-size:10px;line-height:15px;color:#183425;">
                    Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.
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
    'institution-main', 'footer-col', 'hero-overlay', 'unsubscribe-main'
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
    '.institution-main', '.footer-col', '.hero-overlay', '.hero-panel', '.unsubscribe-main'
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
