/**
 * Essência do Brasil — O Nordeste também tem cheiro.
 * Assunto aprovado: O que a seca guarda que a chuva não conta?
 * Template GmailApp.sendEmail — HTML baseado em tabelas, estilos inline.
 * Fotos e banner hero: links públicos (regra 23). Ícones: PNG inline via cid (regra 8).
 * Toda foto <img> fica dentro de um link, para o Gmail não mostrar o atalho de download.
 *
 * Mapa de seções (ETAPA 1):
 *  1. Cabeçalho: logo central + menu à direita (HTML, acima do hero)
 *  2. Hero (desktop e mobile, regra 24)
 *  3. "Uma paisagem feita de aromas" — 4 colunas
 *  4. Banner secundário "Nossa essência" — 2 colunas (texto | foto)
 *  5. "Quatro aromas, uma paisagem" — vitrine de 4 colunas
 *  6. Banner secundário de fechamento — 1 coluna, texto sobre foto
 *  7. Rodapé — logo | 3 selos | redes e links (5 colunas visuais)
 *  8. Faixa de descadastro
 */

const NORDESTE = {
  subject: 'O que a seca guarda que a chuva não conta?',
  preheader: 'Fruta ao sol, verde ao amanhecer, especiaria no fim da tarde.',
  maxWidth: 700,
  breakpoint: 720, // maxWidth + 20 (regra 12)
  cores: {
    creme: '#F6EFE3',
    branco: '#FFFFFF',
    titulo: '#2E2A1C',
    texto: '#5A5040',
    suave: '#8A7C66',
    dourado: '#A7803E',
    douradoClaro: '#C9A15B',
    marrom: '#2F1C10', // igual à borda esquerda da foto "Nossa essência"
    claro: '#F6EFE3',
    claroSuave: '#D9C8AC',
    botao: '#2B3326',
    linhaClara: '#E2D6C2',
    fechamentoFallback: '#5A3418'
  },
  img: {
    heroDesktop: 'https://i.ibb.co/3yrRg4kg/hero-nordeste-desktop.jpg',
    heroMobile: 'https://i.ibb.co/CpmbFwPr/hero-nordeste-mobile.jpg',
    laranja: 'https://i.ibb.co/dsSLtKYX/produto-laranja-amarga-solar.jpg',
    limao: 'https://i.ibb.co/YFw8pk2x/produto-limao-siciliano-radiante.jpg',
    capim: 'https://i.ibb.co/WvDwqMZp/produto-capim-limao.jpg',
    cravo: 'https://i.ibb.co/Z6Ksvt6k/produto-cravo-intenso.jpg',
    aromaFrutas: 'https://i.ibb.co/LdDBZsFy/aroma-frutas-laranja.jpg',
    aromaCitricos: 'https://i.ibb.co/0RbJr8f4/aroma-citricos-limao.jpg',
    aromaVegetacao: 'https://i.ibb.co/kvvdq74/aroma-vegetacao-capim-limao.jpg',
    aromaEspeciarias: 'https://i.ibb.co/0ytXfNRD/aroma-especiarias-cravo.jpg',
    essencia: 'https://i.ibb.co/8vw9GLy/banner-nossa-essencia-flor.jpg',
    fechamento: 'https://i.ibb.co/wFzfzF8K/banner-fechamento-sertao.jpg'
  },
  links: {
    home: 'https://essenciadobrasil.com.br/',
    citricos: 'https://essenciadobrasil.com.br/perfumes-masculinos/citricos/',
    herbais: 'https://essenciadobrasil.com.br/perfumes-masculinos/herbais/',
    amadeirados: 'https://essenciadobrasil.com.br/perfumes-masculinos/amadeirados/',
    botanica: 'https://essenciadobrasil.com.br/colecoes/botanica-imperial/',
    colecoes: 'https://essenciadobrasil.com.br/colecoes/',
    contato: 'https://essenciadobrasil.com.br/contato/',
    aromaterapia: 'https://essenciadobrasil.com.br/aromaterapia-funciona/',
    instagram: 'https://instagram.com/essenciadobrasil.com.br',
    laranja: 'https://essenciadobrasil.com.br/produtos/perfume-laranja-amarga-solar-masculino-100ml-natural-vegano/',
    limao: 'https://essenciadobrasil.com.br/produtos/perfume-spray-limao-siciliano-radiante-homem-10ml-natural/',
    capim: 'https://essenciadobrasil.com.br/produtos/perfume-capim-limao-masculino-100ml-natural-e-vegano/',
    cravo: 'https://essenciadobrasil.com.br/produtos/perfume-cravo-intenso-masculino-50ml-natural-e-vegano/'
  }
};

function getInlineImagesNordeste_() {
  // PNGs transparentes, traço linear plano, exportados em 2x o tamanho de exibição:
  // folha (símbolo do logo, 30px / 26px, ~0,8KB), seloFolha (ingredientes naturais, 34px, ~1,1KB),
  // seloCoracao (fabricado no Brasil, com amor, 34px, ~1,2KB), seloGota (óleos essenciais puros, 34px, ~1,0KB),
  // instagram (rede social, 22px, ~0,5KB), seta (seta dos botões, 7x12px, ~0,4KB).
  const b64 = {
    folha: 'iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEWkhiyrgECngD6nfz7//wCofz6qf0CnezSnfz0AAACngD6ngD2ngD6ngD6ngD6rhDZ0nq7cAAAAEHRSTlMeGLLnAXc8F6IA/EhxjNARjQueNgAAAnxJREFUeNrd1U9o03AUwPFvfu26dH8wgjh3kYrCvOiKOBDnIdcNhDLBw5gjqODR6kX0sAWHipcZ/+AQPRTUs0OF4kDIRRHdIbKLk6FBNzpFJTrbxK1JPbSri5qexdweH17y+73fe/lJN2j0CP4TPnc9HMfD4b6Bzw2yE5lAa8A+WA34GHQ04LxIvWjA6WI6Fs2uued2ORvJ7ajfw2sL7duP66iVyOysC3Y+ki0Balvky7V7G95dE1HZiaz9eLpS1iO4jAoBuQiWcCCOEsElcrCMFsFtHoBuRvBQK8Dk0whOVQCcr2EWu2pbyVW5Jt7WFAg4/vbylUkAVgBoBXA7O78UQIADo0c1QFkGyAAk+j1YBwLusBv/wSSwDsCRYGWbxRh7QUCF3gE1mACluLqiM4V4xxEciO0HWS68lhc2OVs+eut/uC9bSuIg7XPNsucgoESW4ABLOC6AVqGbHhuBBgJk9RncSgZq9dsQt6UpOOTp1bJYrcAbZqoFUSo7GAasZK1qmgDkTKBIAJpkNxmwkirW+Gw5BUxgtwBkAgYB2XxU4yKLgKwgAShIBjBMrsay0gbwnhKAxmYAW1pl5v0UsFRtUj1uAcIaqR/oEotA0ipr4PENYBS7znIqqQHzmNBCH5AwJONXO8zQBfikwcMCRtm5pltcfVyDgDycwgZv2jPXcNOrcgGw28EKgIvmSKjXxvXnaTjtg3UJYob3IcTJk8xq3AS4jzdOlxHuVF+RH2YrpD0ct08/b/3eyAtp/243ZjOfBq3YbH2u6reB27+aEhsy/pzv5JPeql+dM/42Jcv5w9vV+NjG6TUDLoWvmhM9g41+2BemwrH0715UPwFyeNM/sHZqXgAAAABJRU5ErkJggg==',
    seloFolha: 'iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAAMFBMVEWqgECnfz7//wCakQ2ofz6qfzuofz0AAACngD6ngD6ngD6ngD6ngD2rhTangD6ogTzqFF5rAAAAEHRSTlMZ4wEDdx6PAPrOj69QEHAt8ftDdwAAA/hJREFUeNqdlm1MW2UUx3/3ube3hTDCHAqL29xiCF0krFPMyOhgU4kuImES40aYEjf1A8bUadTNKP00mEGpY1kicVlNjHEakfiSIImMGZ0LJnCjyOaMoYaAItkoEQeFlvrh9uXp5ZIl9tPtub+c85zznPO/R3mFm/3ETQlUr/yvddYdztqw/fHvZKMiBXKUhN4RZ2f10LzY1WPr5dDvs/uXSscmx/9pGfm1dMLGy6HustuDiWe99puiwRVefoju6DOS1thoe8nhQUtGekNBr3zG5174MGDx8sbI1cxUz+8tnsvw4uxstpbjy60+2YteoW+2IrFT4nh52kvjqLGyqjUbT0uBxg7YVX70ejqQOnveDokVF/6V9FLrsr/AzolkINeFanvkvpxAAjmhBe2RRV97AgntXPlWPw7w8pJ5XP3ysOW9q77g2sX9BiwU1hkIiOkWon593zB4AIfHAAFPuDMAx57+MMo9hAG+mAQBod0ZxAaDk9XXL5AHoMVAoP/sl4n3wqL64MdgelnIbUIjrsqJVOTo565JhroxNJbjkqXxs9NTPjluOIRgOVsKU6V87YPOklQ3vh9C4JfmocS3KQh69xRR87g4XAjCacQZ0gyg3dCIK2Y8JY5gIJ3QMeVhQO9QHmRBMU0LUQRrU0QkoAeB38L5QVqTh1EQhFLIu5QDLo/aBUayFLkISRvG9B7gKO7dEG5LGDcjmEnFCWYBroB4CSJGst9nZH3JxQOcYGMdZJv1t0pQn9IELr8wgLdF0A7pUetgLweBpR5VFrJU0oYOjgE9ALiMhqR1LYJNKeRWqOEAQK2alAWeQvVmTSca1uG54pjU+gHXhPZvEtkzL3AmZ488aqgAOMqxDDnct828JDV3xpGjTQOxfG06NQxrpgV5iQrMqwkn+gOmLwDiCqr3J6d5S1pWdFIbAr25ty0njeSHBY7RlKBQAXpzUJ1PH+TJOlSvQ79hVih7TBuKttCr7MpLI1s2D2gs5KRSKqvsO4VS2SO3tx8BtzWZ/QWX3jRQn5cJfRQ08Eg6p9x5lzx4LMdB9XI1Ngcguhoey/9xMlMXW4ouoXqJZN8AULb9+f2IVWb+eKgc1Yt4tvDKKl8rhyg1+2XfxdU+aI16oqV2RAP2hD7wdAJxVn1ij3TP+QEN4PM8e+T1+HSyd2Olhq16jxvp9t5yvx1Sdos0AR+Url9JnBzfKSGLRyJ+K+HqKAjKc/RIVXGTJeGtc79kjtpHi1/JN8xSc+g1yzQ6v42+mrEaBAt91oE98+hUcUpqIkc6ii6vnOkzL/5995D5+Jb7rHvQbmfo73hmTVf99nXuSOXS4XP2mwe0fpo7zLo77m1bbTn5/1vQf4OjJhgMTnFIAAAAAElFTkSuQmCC',
    seloCoracao: 'iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAEpklEQVR42uWc7XGjMBCG10xKES7jfgt6AbdwLQBFXAcWtQR6ufsRbfyejEGClTBEM54knoiPh/3Wisuf379o56Gcv8c9L+Yj4bk0EeVEVACEfOb/BwvH2N/7MwCpLIACvjP2M9obnRq5hZYTUetA6mD+IYAoexMFAKgDb6KfOCaDbeG4rbTkZMIqcbdPUVkIORGV9qlueaKjPUZJRBd7bGWhfNpzvw0QZUEYeJJXAQhzo7PnyMHO3CcMdHIgFUgEg0hi/EBySjDUAxE1ewG5Wx1udwAxZXOuVpVqq0YqFRAFJyyI6EbvMzpw5cMa2xIKREN8sLdUzKnRFdx7FQuIBldX0vuPElTaG8rHChg3Os64WYlpQaU2A1EHhYF2hYPFxRTgwwMGxxhHhIGSwtFtPhcfLdmQFvTx6ONmJeS+1qhyYlbTeUZpJaQJBaLAQvcnAjJC8KZDgLAButH5RgdOwguIPqGquIMz8coHSE0JK1Q7qo7xAfITpMOVEj0H5CdIhysl7SsgnL12kS5AwSfmnJDR0qN++wQEa6CSEBpbLhjg82m/V0JzttRRBrQlLhDJajZX02p6Xm7IQT2rFXMaQSgGhGESiBSM1jlhTl8F4tw5F6fnOGdYmFMLQjGoNhe7cqd9Ep/AUgF5ZMjVRIAUMqcWsnl/+VgZiCMJqUsN5Jci3c4BEjqnEpISLpR/q4yUuijQR99YppuA6TNnmIojNrjgAoFwCX/rKID4GHgxReCc0ZHurXbkyahKLiqFSlu/Ihgc4GFKqExORCoTpHyKkQHhQfC4KQBLnoO1Q2XCF2nAlqjIQFSEyJqkgWDPRxERBjffhBjvXYCgG60iAsFYRxzIGAEIW+0mAowKpK8TVr8xi2SkOniSWlhVMGwX7z/J3NBVEAgmd0roKeIxJes2uSshYwRXeQMPsLW7h1cQcygPSHusASXEUBw3WYM9WQvFhVFGUJXvXC5zQ9cIbrh0oOg3g0FY9sggl4gVO7hQjCcUnQiGxgAvc6LMWMEUQzFwrmrBtZoEMFgIBldCYgNBKOwpWppeiW8cb3KluP3vxav03ySIMNn71HAx3MDHzXw1AIvdhqFBjYnoUVMlxz1eE2SrHGTljmFnUCkWy57u181l+AJ1govpHbuSA5QUMCYX5rKJi4wR+CzZlZoeDcCp9svwGtB/QD5eBFPsGlOt8XaUdvDmhNon/e9ppqHkJKOdko65esjLhpITjNmWj2xGt7nHTJ0IBvbc9iFAOF5YbGM8qKrcluohr0YJSdnRR0Me3VFLQHBVrTkwjAq8Sr8FCHsdPlh1UBgteXYK+O6G6EAHFR2nf7UC5+AV64RsU0UodAAoDUi2d+AXum+Xlxi4VBCzTrE1aStoRUPNmoWq3slQ38muaPrqBuJd4cEpwdqVO97X1kKhZ88ADvf1bCoqbV3KvNGjOD3sAIZbOHHv8KaiksTaLktL4YDRkVXjDqWKmoR2iUoudvcOGGP1uRGCo+nR0Gsghb9Ilg9ivB2CwSh63pXlvhOEJnQd3y3CaoBG3MT0bpdEb5hRIDl4g0uDAYwU8Z0hsSXklZ3pnIBOOT/JkZhd4pt/kgFvjsnu/SIAAAAASUVORK5CYII=',
    seloGota: 'iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAAMFBMVEWmgECnfz6hmhD//wCnfz6qfzsAAACngD6ngD6ngD6ngD6rhTengD6ogT2ogD2tgEAzB+1CAAAAEHRSTlMn5gMBeB4A+s6OsBBvMFQOFSuHKwAAA55JREFUeNqdVm1IVFkYfubcuXecBBlxKX9EDW6bWhQ3JPOHxrQsLa1gF0YI2iAt2g3KHIqEIEKKKCJsXGkh9svdhWVZiB0xK1kQizAhokutlFF4wTL7dCSccq733n7cmfOeGa+07Py55zw88573fc/znHN83+BjP/ZRBvw5s7aBojsoWb7iggj6hIUKKo1f2bnpgJFiLe0ES1V8GH0yvSW9cmxi/O2Bx9fWTHjkEh3YsPEPd3jmyaFH6+dHGZKr+x9kUXvgx88a7+ZFkb9e3C/muKP5cjyPsj8wmltqR+xULkX5fW9+O06sahJzkWuV7nyKfSn9vUoU7fbj+V1dXF73hhaa+sqr8yNTtJA0fdOLYpWXTmajHFvkvYFdk9mFAp20C7heS+NNwe4M5YyUILj1Po3N9qMZir6P0IBhx2i2J+2mK49dIdBhkpHks3Rp5AEYYMtChjsLtZQglSYDYEBDJWFBTWk2NWEXngIMSKoEpZsaa2AIYWyAQb4XJ+gAiyvqQ5rPFmlgkEQTJBRAKxCAiAoG0yFASX4JHHYEbScTYLALCaj3xYBU6DwhPQYYYoMEGO9VwK/5BJ8FwJCkbINGNQB0mQT5HDDoNJ+BKzPoVJIFhmKKGpXiADCr9gl2BRMbFZLcryokUwQmng2DQffbOUdYGAxTJIRkJFOGQ36Yyjlf5pDZLQfxBY4gR8qoyVSTC1C28kl4JodCRYe9KMVgWEY1+9DmJqEXcfAgGJ7TDqXwg5uEoLudYFBooSDg2sXIPVQ1bgrdRMiNkrB4r2Qw6LzAHnsw8lYHMGdwDTkWGHoMOoO7t9tfaMAiRHg7C8HgH+H/QF+DaoWAevDIWyNg8EncwjHn1NCnIQSTAW5yNQSpyirg9rsh338+MYyWq0snuVz+hB9YUpv9j0/Va+rKXnVI4azs5BHAD4R5vubxhtFRAKV8HccBGPDPM96lut0AUP0vB1rqAQakLOrk2ZNlZY3CMZ5Q3cumeXn7ArdVQWjS1Uvz+YUutC1yRlI1Vrc3Q9ajGYrS+pM35c67ePbik0KvPSnrHD2rXWut4cWwx3WSd3GVF6WqWHBA79rK+YzvxlcL95Hd+8m3w3mMwEjJddFHa1o3a3kFr3p3L9dqR8xhPeei2WGcznOj8tvsNpFyOFHRlG/Yi5+/WMnlmN71y4qb8z19cffLsjF3+HP535W3vN4MQx3P/H/VryupSK83oz3eL4//8Dj5/6+gD6hvFJ/lK1LyAAAAAElFTkSuQmCC',
    instagram: 'iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAMFBMVEUAAAA5LiQ5LiQ5LiQ5LiQ5LiQ4LSM4KyI3KSQ5HBw0KhsxMSQ4MCBAAAAzMw0AAAB2Vi8zAAAAEHRSTlMA/bDIhmVOLhUJFBUgBAcA2HqG2QAAAXdJREFUeNq1kz0sQ1EUx3/vVt9LCOmpryY1tKIkGNpRQlKjSKQYOpXqaOrSyWYwSiMGY00mCbWYxGQwGcQiEVZTJ4kKNdx7X98TRme59/zyv+fkfFz4P3P0cXLa0u7cbgCvX/m6zC2AAjjoUh6XrNqbfmbc0CdUqa6vEYlXrdhLS9ZcF6XcDeLKkA7i9UZfLRwoJl/ONusASlK+tkcSSlKgoEPBx534V5QYAOcCQC0dL6ImRvslAcDWIEBTRGTZzeXJjQCwGgdcERGRMpAeNlUCOzjFWoxLm9qcDVaOcPvaxjVqrxVtQLvQqYbwF70AxzyH8Cd5HfIuhDu6BodWCP80ZWfXCjzyseJap0iFcIQ3gA2yIfye/SiDexaph1PmaW7vJf2i/25VzAHaFYCZBsaHYz2GtdxgBgAzBkeqwUo8iYECxzbCtkfjKA9BXLIT/2V9FLBGs7tsScb+Xk0H4H4hEHv+whY/W+nSyYvAJ7nZN59k6pD/tm8tb0qgvFTcvAAAAABJRU5ErkJggg==',
    seta: 'iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAABc0lEQVQ4y43UPY9NYRAH8N95kSiExicQKoUOtVaolIjYVkE0XlqytaxKZENCxBdQilJEo5atlkpEotiEPedezf9JHvfe45pm5jxz5v0/0+z92BVq0GOG0RrqK3mO/chtHExSm0hwBJu4HKNuXcQOA27jTt5HvIp+mIpYaCd8wBOcitxNGQ7hz/E0UQ7hZdIfq3KWIs7Db+B95JNxtJjZkmGLX2nOtzToEu4naj9V4yzKHVyryniAC5F7EykU5RvcqwCxjRNVP5Zzrzq5idf55yhe4GAcNe3EfAtqruNj5NNJG7p2Dar28LN6OzxVY6EuUbdwLm+fcbcgq5+A4YCNzHXE74zpe1mAdkWkAWfwOEZdHHyouvzXUNv8WHdQ0t1eBPyqGp/heOR3uBWsjquQUxb3Ic4Hgl9xpQL5fNGwdPBi0LKf76v4UumXOlhW5mz4AdzE238tcl/lvoVj+IRHFchXUlNducUSZv975ZrqTAzrzuMftiBfcPJ17+0AAAAASUVORK5CYII='
  };
  const out = {};
  Object.keys(b64).forEach(function (k) {
    out[k] = Utilities.newBlob(Utilities.base64Decode(b64[k]), 'image/png', k + '.png');
  });
  return out;
}

function montarHtmlNordeste_() {
  const C = NORDESTE;
  const K = C.cores;
  const L = C.links;
  const I = C.img;
  const SERIF = "Georgia,'Times New Roman',serif";
  const SANS = 'Arial,Helvetica,sans-serif';

  // Fio curto centralizado (abaixo de títulos e entre blocos de texto).
  const fio = (largura, cor, alinhar) => `<table role="presentation" width="${largura}" cellpadding="0" cellspacing="0" border="0" align="${alinhar}" style="width:${largura}px;${alinhar === 'center' ? 'margin:0 auto;' : ''}"><tr><td height="1" style="height:1px;line-height:1px;font-size:0;background:${cor};">&nbsp;</td></tr></table>`;

  const tituloSecao = (txt) => `
    <div class="h2m" style="font-family:${SANS};font-size:13px;line-height:20px;letter-spacing:5px;color:${K.titulo};text-align:center;">${txt}</div>
    <div style="padding-top:14px;">${fio(56, K.dourado, 'center')}</div>`;

  const botao = (href, txt, larguraMax) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="width:100%;max-width:${larguraMax}px;table-layout:fixed;margin:0 auto;">
  <tr><td bgcolor="${K.botao}" style="background:${K.botao};border:1px solid ${K.botao};border-radius:3px;padding:10px 6px;text-align:center;">
    <a href="${href}" class="btnm" style="display:block;font-family:${SANS};font-size:10px;line-height:14px;font-weight:bold;letter-spacing:2px;color:${K.claro};text-decoration:none;">${txt}<img src="cid:seta" width="7" height="12" alt="" style="display:inline-block;width:7px;height:12px;max-width:100%;border:0;vertical-align:-2px;margin-left:8px;"></a>
  </td></tr>
</table>`;

  // Grade de 4 itens: 2 células externas (stack100) com 2 células internas cada.
  // Desktop: 4 colunas de 25% visuais. Celular: as externas empilham e vira 2 x 2.
  const grade4 = (itens, celula) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
  <tr>
    ${[0, 2].map((i) => `<td class="stack100" valign="top" style="width:50%;padding:0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
        <tr>${celula(itens[i])}${celula(itens[i + 1])}</tr>
      </table>
    </td>`).join('')}
  </tr>
</table>`;

  // ---------- Seção 3: famílias aromáticas ----------
  const AROMAS = [
    { titulo: 'FRUTAS', legenda: 'A casca aquecida pelo sol, doce e amarga ao mesmo tempo.', img: I.aromaFrutas, link: L.laranja, alt: 'Laranjas maduras com flores de laranjeira ao entardecer' },
    { titulo: 'CÍTRICOS', legenda: 'Luz em estado líquido, viva e cortante.', img: I.aromaCitricos, link: L.limao, alt: 'Limões sicilianos no pé, um deles cortado ao meio' },
    { titulo: 'VEGETAÇÃO', legenda: 'Folhas verdes que despertam com o amanhecer.', img: I.aromaVegetacao, link: L.capim, alt: 'Folhas de capim-limão com gotas de orvalho' },
    { titulo: 'ESPECIARIAS<br>E MADEIRAS', legenda: 'Um calor que pousa na pele, profundo e terroso.', img: I.aromaEspeciarias, link: L.cravo, alt: 'Cravos-da-índia secos em uma cuia de madeira e botões em flor' }
  ];
  const celulaAroma = (a) => `<td width="50%" valign="top" align="center" style="width:50%;padding:0 9px 6px 9px;text-align:center;">
    <a href="${a.link}" style="text-decoration:none;"><img src="${a.img}" width="157" height="157" alt="${a.alt}" style="display:block;width:100%;max-width:100%;height:auto;margin:0 auto;border:0;"></a>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
      <tr><td height="40" valign="middle" align="center" style="height:40px;padding-top:12px;text-align:center;font-family:${SANS};font-size:11px;line-height:15px;font-weight:bold;letter-spacing:2.5px;color:${K.titulo};">${a.titulo}</td></tr>
      <tr><td valign="top" align="center" class="legm" style="padding-top:6px;text-align:center;font-family:${SANS};font-size:13px;line-height:19px;color:${K.texto};">${a.legenda}</td></tr>
      <tr><td align="center" style="padding:12px 0 20px 0;">${fio(30, K.dourado, 'center')}</td></tr>
    </table>
  </td>`;

  // ---------- Seção 5: produtos ----------
  const PRODUTOS = [
    { chave: 'laranja', nome: 'LARANJA AMARGA SOLAR', cat: 'EAU DE PARFUM<br>100ML', f1: 'A luz do meio-dia guardada na casca da fruta.', f2: 'Cítrico na abertura, com um fundo levemente adocicado e amadeirado que aquece devagar.', alt: 'Perfume Laranja Amarga Solar com laranja e flor de laranjeira' },
    { chave: 'limao', nome: 'LIMÃO SICILIANO RADIANTE', cat: 'EAU DE PARFUM<br>SPRAY 10ML', f1: 'Um brilho cortante, como a primeira luz sobre a água.', f2: 'Frescor cítrico que repousa em madeira leve, num frasco feito para acompanhar o dia.', alt: 'Perfume Limão Siciliano Radiante com fatia de limão' },
    { chave: 'capim', nome: 'CAPIM LIMÃO', cat: 'EAU DE PARFUM<br>100ML', f1: 'O verde cortante que acorda com o dia.', f2: 'Herbal e vibrante, com um fundo terroso que permanece.', alt: 'Perfume Capim Limão com folhas de capim-limão' },
    { chave: 'cravo', nome: 'CRAVO INTENSO', cat: 'EAU DE PARFUM<br>50ML', f1: 'Inspirado na especiaria que floresce no litoral baiano.', f2: 'Especiado e quente, com doçura discreta e madeira ao fundo.', alt: 'Perfume Cravo Intenso com cravos-da-índia' }
  ];
  // Alturas fixas nas linhas de texto (funcionam como altura mínima) para os botões ficarem alinhados.
  const celulaProduto = (p) => `<td width="50%" valign="top" style="width:50%;padding:0 5px 10px 5px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${K.branco}" style="width:100%;table-layout:fixed;background:${K.branco};border:1px solid ${K.linhaClara};">
      <tr><td align="center" style="padding:6px 6px 0 6px;text-align:center;">
        <a href="${L[p.chave]}" style="text-decoration:none;"><img src="${I[p.chave]}" width="151" height="151" alt="${p.alt}" style="display:block;width:100%;max-width:100%;height:auto;margin:0 auto;border:0;font-family:${SANS};font-size:12px;line-height:16px;color:${K.texto};"></a>
      </td></tr>
      <tr><td height="40" valign="middle" align="center" style="height:40px;padding:8px 8px 0 8px;text-align:center;">
        <a href="${L[p.chave]}" style="font-family:${SANS};font-size:11.5px;line-height:15px;font-weight:bold;letter-spacing:1.5px;color:${K.titulo};text-decoration:none;">${p.nome}</a>
      </td></tr>
      <tr><td align="center" style="padding:4px 8px 0 8px;text-align:center;font-family:${SANS};font-size:9px;line-height:13px;letter-spacing:2px;color:${K.suave};">${p.cat}</td></tr>
      <tr><td height="60" valign="top" align="center" class="txtcard" style="height:60px;padding:10px 10px 0 10px;text-align:center;font-family:${SERIF};font-size:13.5px;line-height:19px;color:${K.titulo};">${p.f1}</td></tr>
      <tr><td height="72" valign="top" align="center" class="txtcard2" style="height:72px;padding:8px 10px 0 10px;text-align:center;font-family:${SANS};font-size:12px;line-height:17px;color:${K.texto};">${p.f2}</td></tr>
      <tr><td align="center" style="padding:12px 0 14px 0;">${fio(30, K.dourado, 'center')}</td></tr>
      <tr><td style="padding:0 10px 14px 10px;">${botao(L[p.chave], 'CONHECER', 150)}</td></tr>
    </table>
  </td>`;

  // ---------- Rodapé ----------
  const selo = (cid, txt) => `<td width="33.33%" valign="top" align="center" style="width:33.33%;padding:0 4px;text-align:center;"><img src="cid:${cid}" width="34" height="34" alt="" style="display:block;width:34px;height:34px;max-width:100%;margin:0 auto 8px auto;border:0;"><div style="font-family:${SANS};font-size:9px;line-height:14px;letter-spacing:1.2px;color:${K.texto};">${txt}</div></td>`;
  const linkRodape = (href, txt) => `<div style="padding-top:5px;"><a href="${href}" style="font-family:${SANS};font-size:9px;line-height:14px;letter-spacing:2px;color:${K.texto};text-decoration:none;">${txt}</a></div>`;
  const navDesk = (href, txt) => `<div style="padding:2px 0;"><a href="${href}" style="font-family:${SANS};font-size:9px;line-height:14px;letter-spacing:2.5px;color:${K.titulo};text-decoration:none;">${txt}</a></div>`;
  const navMob = (href, txt) => `<a href="${href}" style="color:${K.titulo};text-decoration:none;">${txt}</a>`;
  const sep = ` <span style="color:${K.dourado};">|</span> `;

  const compliance = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';
  const preheaderFiller = Array(60).fill('&#847;&zwnj;&nbsp;').join('');

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>O Nordeste também tem cheiro.</title>
<style>
@media only screen and (max-width:${C.breakpoint}px){
  .stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
  .footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;text-align:center!important;padding:14px 20px!important;}
  .hide-mobile{display:none!important;max-height:0!important;overflow:hidden!important;}
  .show-mob{display:block!important;max-height:none!important;overflow:visible!important;}
  .banner-desktop{display:none!important;max-height:0!important;overflow:hidden!important;}
  .banner-mobile{display:block!important;max-height:none!important;}
  .sec-pad{padding:32px 10px 22px 10px!important;box-sizing:border-box!important;}
  .mob-pad{padding:36px 24px 32px 24px!important;box-sizing:border-box!important;}
  .ban-pad{padding:46px 14px!important;box-sizing:border-box!important;}
  .ov{width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
  .ov-pad{padding:30px 20px!important;box-sizing:border-box!important;}
  .h2m{font-size:12px!important;line-height:19px!important;letter-spacing:3.5px!important;}
  .ess-tit{font-size:24px!important;line-height:31px!important;color:${K.claro}!important;}
  .ess-txt{font-size:15px!important;line-height:24px!important;color:${K.claroSuave}!important;}
  .ess-eye{color:${K.douradoClaro}!important;}
  .fech-tit{font-size:22px!important;line-height:30px!important;color:${K.claro}!important;}
  .fech-txt{font-size:10px!important;line-height:17px!important;letter-spacing:2px!important;color:${K.claroSuave}!important;}
  .legm{font-size:13px!important;line-height:19px!important;}
  .txtcard{font-size:14px!important;line-height:20px!important;height:64px!important;}
  .txtcard2{font-size:12.5px!important;line-height:18px!important;height:94px!important;}
  .tagm{letter-spacing:2.5px!important;}
  .btnm{font-size:10.5px!important;line-height:15px!important;}
}
</style>
</head>
<body style="margin:0;padding:0;background:${K.creme};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:${K.creme};mso-hide:all;">${C.preheader}${preheaderFiller}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${K.creme}" style="width:100%;background:${K.creme};table-layout:fixed;">
<tr><td align="center" style="padding:0;">
<!--[if mso]><table role="presentation" width="${C.maxWidth}" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="width:100%;max-width:${C.maxWidth}px;table-layout:fixed;margin:0 auto;">

<!-- 1. CABEÇALHO (3 colunas: vazio | logo | menu) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="hide-mobile" style="width:25%;font-size:0;line-height:0;">&nbsp;</td>
      <td class="stack100" valign="middle" align="center" style="width:50%;padding:22px 10px 18px 10px;text-align:center;">
        <a href="${L.home}" style="text-decoration:none;">
          <img src="cid:folha" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 6px auto;border:0;">
          <div style="font-family:${SERIF};font-size:22px;line-height:26px;letter-spacing:4px;color:${K.titulo};">ESSÊNCIA</div>
          <div style="font-family:${SERIF};font-size:22px;line-height:26px;letter-spacing:4px;color:${K.titulo};">DO BRASIL</div>
          <div style="font-family:${SANS};font-size:8px;line-height:14px;letter-spacing:3px;color:${K.suave};padding-top:6px;">PERFUMARIA NATURAL BRASILEIRA</div>
        </a>
      </td>
      <td class="hide-mobile" valign="middle" style="width:25%;padding:0 10px 0 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
          <tr><td style="border-left:1px solid ${K.dourado};padding:2px 0 2px 16px;text-align:left;">
            ${navDesk(L.citricos, 'CÍTRICOS')}${navDesk(L.herbais, 'HERBAIS')}${navDesk(L.amadeirados, 'AMADEIRADOS')}${navDesk(L.botanica, 'BOTÂNICA IMPERIAL')}
          </td></tr>
        </table>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 1b. MENU NO CELULAR (só aparece pela media query; oculto no desktop e no Outlook) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:0;">
  <!--[if !mso]><!-->
  <div class="show-mob" style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    <div style="border-top:1px solid ${K.linhaClara};padding:12px 14px 14px 14px;text-align:center;font-family:${SANS};font-size:9.5px;line-height:20px;letter-spacing:2px;color:${K.titulo};">
      ${navMob(L.citricos, 'CÍTRICOS')}${sep}${navMob(L.herbais, 'HERBAIS')}<br>${navMob(L.amadeirados, 'AMADEIRADOS')}${sep}${navMob(L.botanica, 'BOTÂNICA IMPERIAL')}
    </div>
  </div>
  <!--<![endif]-->
</td></tr>

<!-- 2. HERO (duas versões, regra 24) -->
<tr><td bgcolor="#E9C48A" style="background:#E9C48A;padding:0;line-height:0;font-size:0;">
  <a href="${L.botanica}" style="text-decoration:none;">
    <img src="${I.heroDesktop}" class="banner-desktop" width="700" height="292" alt="O Nordeste também tem cheiro. Se você pudesse sentir essa paisagem antes mesmo de chegar, qual seria o aroma?" style="display:block;width:100%;max-width:100%;height:auto;border:0;font-family:${SANS};font-size:12px;line-height:16px;color:${K.texto};">
    <!--[if !mso]><!-->
    <img src="${I.heroMobile}" class="banner-mobile" width="375" height="666" alt="O Nordeste também tem cheiro. Se você pudesse sentir essa paisagem antes mesmo de chegar, qual seria o aroma?" style="display:none;width:100%;max-width:100%;height:auto;max-height:0;overflow:hidden;border:0;font-family:${SANS};font-size:12px;line-height:16px;color:${K.texto};">
    <!--<![endif]-->
  </a>
</td></tr>

<!-- 3. UMA PAISAGEM FEITA DE AROMAS (4 colunas) -->
<tr><td class="sec-pad" bgcolor="${K.creme}" style="background:${K.creme};padding:38px 16px 18px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr><td style="padding:0 10px 28px 10px;">${tituloSecao('UMA PAISAGEM FEITA DE AROMAS')}</td></tr>
    <tr><td style="padding:0;">${grade4(AROMAS, celulaAroma)}</td></tr>
  </table>
</td></tr>

<!-- 4. BANNER SECUNDÁRIO "NOSSA ESSÊNCIA" (texto | foto) -->
<tr><td bgcolor="${K.marrom}" style="background:${K.marrom};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100 mob-pad" valign="middle" bgcolor="${K.marrom}" style="width:45%;padding:36px 22px 36px 40px;background:${K.marrom};">
        <div class="ess-eye" style="font-family:${SANS};font-size:10px;line-height:16px;letter-spacing:4px;color:${K.douradoClaro};">NOSSA ESSÊNCIA</div>
        <div style="padding:12px 0 18px 0;">${fio(40, K.douradoClaro, 'left')}</div>
        <div class="ess-tit" style="font-family:${SERIF};font-size:27px;line-height:34px;color:${K.claro};">Toda paisagem tem uma assinatura que não se vê.</div>
        <div class="ess-txt" style="font-family:${SANS};font-size:13.5px;line-height:22px;color:${K.claroSuave};padding-top:18px;">Na Essência do Brasil, a flora é o ponto de partida. Óleos essenciais puros e ingredientes naturais, combinados aqui no Brasil, traduzem em perfume o que uma paisagem diz ao ar: o sol na fruta, o verde ao amanhecer, a especiaria no calor da tarde.</div>
      </td>
      <td class="stack100" valign="middle" align="center" bgcolor="${K.marrom}" style="width:55%;padding:0;line-height:0;font-size:0;text-align:center;background:${K.marrom};">
        <a href="${L.botanica}" style="text-decoration:none;"><img src="${I.essencia}" width="385" height="366" alt="Flor branca da caatinga com folhas verde-escuras à luz do entardecer" style="display:block;width:100%;max-width:100%;height:auto;margin:0 auto;border:0;font-family:${SANS};font-size:12px;line-height:16px;color:${K.texto};"></a>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 5. QUATRO AROMAS, UMA PAISAGEM (vitrine, 4 colunas) -->
<tr><td class="sec-pad" bgcolor="${K.creme}" style="background:${K.creme};padding:38px 14px 28px 14px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr><td style="padding:0 10px 28px 10px;">${tituloSecao('QUATRO AROMAS, UMA PAISAGEM')}</td></tr>
    <tr><td style="padding:0;">${grade4(PRODUTOS, celulaProduto)}</td></tr>
  </table>
</td></tr>

<!-- 6. BANNER SECUNDÁRIO DE FECHAMENTO (texto centralizado sobre foto) -->
<tr><td class="ban-pad" bgcolor="${K.fechamentoFallback}" background="${I.fechamento}" style="background-color:${K.fechamentoFallback};background-image:url('${I.fechamento}');background-size:cover;background-position:center center;background-repeat:no-repeat;padding:64px 40px;">
  <table role="presentation" class="ov" width="84%" cellpadding="0" cellspacing="0" border="0" align="center" style="width:84%;max-width:84%;margin:0 auto;">
    <tr><td class="ov-pad" align="center" bgcolor="#3A2212" style="background-color:#3A2212;background-color:rgba(36,20,9,0.62);padding:34px 34px 32px 34px;text-align:center;">
      <div class="fech-tit" style="font-family:${SERIF};font-size:27px;line-height:36px;color:${K.claro};">Há lugares que se veem com os olhos. Outros, também se respiram.</div>
      <div style="padding:18px 0;">${fio(40, K.douradoClaro, 'center')}</div>
      <div class="fech-txt" style="font-family:${SANS};font-size:10.5px;line-height:18px;letter-spacing:2.5px;color:${K.claroSuave};">O BRASIL É IMENSO EM PAISAGENS, E CADA UMA GUARDA UM AROMA QUE É SÓ DELA.</div>
      <div style="padding-top:24px;">${botao(L.botanica, 'CONHEÇA A BOTÂNICA IMPERIAL', 300)}</div>
    </td></tr>
  </table>
</td></tr>

<!-- 7. RODAPÉ (logo | 3 selos | redes e links) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:32px 16px 8px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="footer-col" valign="middle" align="center" style="width:20%;padding:0 4px;text-align:center;">
        <a href="${L.home}" style="text-decoration:none;">
          <img src="cid:folha" width="26" height="26" alt="" style="display:block;width:26px;height:26px;max-width:100%;margin:0 auto 4px auto;border:0;">
          <div style="font-family:${SERIF};font-size:15px;line-height:19px;letter-spacing:2.5px;color:${K.titulo};">ESSÊNCIA<br>DO BRASIL</div>
          <div style="font-family:${SANS};font-size:7px;line-height:12px;letter-spacing:2px;color:${K.suave};padding-top:5px;">PERFUMARIA NATURAL<br>BRASILEIRA</div>
        </a>
      </td>
      <td class="footer-col" valign="top" style="width:60%;padding:0 6px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
          <tr>
            ${selo('seloFolha', 'FEITO COM<br>INGREDIENTES<br>NATURAIS')}
            ${selo('seloCoracao', 'FABRICADO<br>NO BRASIL,<br>COM AMOR')}
            ${selo('seloGota', 'COM ÓLEOS<br>ESSENCIAIS<br>PUROS')}
          </tr>
        </table>
      </td>
      <td class="footer-col" valign="middle" style="width:20%;padding:0 4px 0 12px;text-align:left;">
        <a href="${L.instagram}" style="text-decoration:none;display:inline-block;"><img src="cid:instagram" width="22" height="22" alt="Instagram" style="display:inline-block;width:22px;height:22px;max-width:100%;border:0;"></a>
        ${linkRodape(L.contato, 'FALE CONOSCO')}${linkRodape(L.colecoes, 'COLEÇÕES')}${linkRodape(L.aromaterapia, 'AROMATERAPIA<br>FUNCIONA?')}
      </td>
    </tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;margin-top:26px;">
    <tr><td class="tagm" style="border-top:1px solid ${K.linhaClara};padding:16px 10px 18px 10px;text-align:center;font-family:${SANS};font-size:9.5px;line-height:15px;letter-spacing:4px;color:${K.suave};">MAIS QUE AROMAS. ESSÊNCIA DO BRASIL.</td></tr>
  </table>
</td></tr>

<!-- 8. FAIXA DE DESCADASTRO -->
<tr><td bgcolor="${K.marrom}" style="background:${K.marrom};padding:18px 24px;text-align:center;">
  <div style="font-family:${SANS};font-size:11px;line-height:17px;color:${K.claroSuave};">${compliance}</div>
  <div style="font-family:${SANS};font-size:10px;line-height:16px;color:${K.claroSuave};padding-top:6px;">&copy; Essência do Brasil. Todos os direitos reservados.</div>
</td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;
}

function validarTemplateNordeste_() {
  const C = NORDESTE;
  const html = montarHtmlNordeste_();
  const inlineImages = getInlineImagesNordeste_();
  const erros = [];

  // Regras 2 e 12: tabela fluida com max-width e breakpoint = max-width + 20.
  if (C.breakpoint !== C.maxWidth + 20) erros.push('Regra 12: breakpoint deve ser maxWidth + 20.');
  if (!html.includes(`width:100%;max-width:${C.maxWidth}px;table-layout:fixed`)) erros.push('Regra 2: tabela principal sem width 100% + max-width.');
  if (!html.includes(`@media only screen and (max-width:${C.breakpoint}px)`)) erros.push('Regra 12: media query com breakpoint incorreto.');

  // Regras 4 e 5: toda tabela com width explícito; tabelas 100% com table-layout:fixed (fora do wrapper do Outlook).
  const semMso = html.replace(/<!--\[if mso\]>[\s\S]*?<!\[endif\]-->/g, '');
  (semMso.match(/<table\b[^>]*>/gi) || []).forEach(function (t) {
    if (!/\swidth="/i.test(t) || !/style="[^"]*width:/i.test(t)) erros.push('Regra 4: tabela sem width: ' + t.slice(0, 80));
    if (/\swidth="100%"/i.test(t) && !/table-layout:fixed/i.test(t)) erros.push('Regra 5: tabela 100% sem table-layout:fixed: ' + t.slice(0, 80));
  });

  // Regra 3: colunas lado a lado em porcentagem (nenhuma td com largura fixa acima de 60px).
  (html.match(/<td\b[^>]*>/gi) || []).forEach(function (t) {
    const m = t.match(/width:(\d+)px/);
    if (m && Number(m[1]) > 60) erros.push('Regra 3: td com largura fixa em px: ' + t.slice(0, 80));
  });

  // Regras 7 e 8: toda imagem com max-width:100% e width/height no HTML.
  (html.match(/<img\b[^>]*>/gi) || []).forEach(function (t) {
    if (!/max-width:100%/i.test(t) || !/\swidth="\d+"/.test(t) || !/\sheight="\d+"/.test(t)) erros.push('Regra 7/8: img sem max-width:100% ou width/height: ' + t.slice(0, 80));
  });

  // Regra 13: classes da media query com width 100% ou padding precisam de box-sizing.
  const css = (html.match(/<style>([\s\S]*?)<\/style>/) || [])[1] || '';
  (css.match(/\.[a-z0-9-]+\{[^}]*\}/gi) || []).forEach(function (r) {
    if ((/width:100%/.test(r) || /padding/.test(r)) && !/box-sizing:border-box/.test(r)) erros.push('Regra 13: ' + r);
  });

  // Regra 20: título de banner acima de 28px precisa de classe com font-size menor no mobile.
  ['ess-tit', 'fech-tit'].forEach(function (cl) {
    if (!new RegExp('\\.' + cl + '\\{font-size:').test(css)) erros.push('Regra 20: classe ' + cl + ' sem font-size mobile.');
  });

  // Regra 21: td que muda na media query não pode ter atributo width=.
  (html.match(/<td\b[^>]*>/gi) || []).forEach(function (t) {
    if (/class="[^"]*\b(stack100|footer-col|hide-mobile|mob-pad|sec-pad|ban-pad|ov-pad)\b/.test(t) && /\swidth="/.test(t)) erros.push('Regra 21: td com classe de media query e atributo width=: ' + t.slice(0, 80));
  });

  // Regra 22: textos sobre os banners secundários com cor própria no mobile.
  ['ess-tit', 'ess-txt', 'fech-tit', 'fech-txt'].forEach(function (cl) {
    if (!new RegExp('\\.' + cl + '\\{[^}]*color:').test(css)) erros.push('Regra 22: classe ' + cl + ' sem cor mobile.');
  });

  // Regra 24: duas versões do hero alternando.
  if (!html.includes(C.img.heroDesktop) || !html.includes(C.img.heroMobile)) erros.push('Regra 24: hero desktop e mobile precisam estar presentes.');
  if (!/class="banner-desktop"[^>]*style="display:block/.test(html) || !/class="banner-mobile"[^>]*style="display:none/.test(html)) erros.push('Regra 24: estado padrão do hero incorreto.');
  if (!css.includes('.banner-desktop{display:none!important') || !css.includes('.banner-mobile{display:block!important')) erros.push('Regra 24: alternância do hero ausente na media query.');

  // Regra 23: todas as fotos com link https público, nenhuma via cid; e toda foto <img> dentro de um link.
  Object.keys(C.img).forEach(function (k) {
    if (!/^https:\/\//.test(C.img[k])) erros.push('Regra 23: imagem sem link público: ' + k);
    if (!html.includes(C.img[k])) erros.push('Regra 23: foto não usada no HTML: ' + k);
  });
  (html.match(/<img\b[^>]*src="https:[^>]*>/gi) || []).forEach(function (t) {
    const pos = html.indexOf(t);
    const antes = html.slice(0, pos);
    if (antes.lastIndexOf('<a ') < antes.lastIndexOf('</a>')) erros.push('Foto fora de link: ' + t.slice(0, 80));
  });

  // Regra 19: chaves de inlineImages x cid usados no HTML, 1 para 1.
  const cids = Array.from(new Set((html.match(/cid:([A-Za-z0-9_-]+)/g) || []).map(function (s) { return s.slice(4); }))).sort();
  const keys = Object.keys(inlineImages).sort();
  if (JSON.stringify(cids) !== JSON.stringify(keys)) erros.push('Regra 19: cid no HTML=' + cids.join(',') + ' | inlineImages=' + keys.join(','));

  // Regra 14: todo link aponta para https real (sem # nem placeholders).
  (html.match(/href="([^"]*)"/g) || []).forEach(function (h) {
    const u = h.slice(6, -1);
    if (!/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}\//i.test(u + '/')) erros.push('Regra 14: link inválido: ' + u);
  });

  // Regra 6: nada de &nbsp; dos dois lados de separadores.
  if (/&nbsp;\s*(<span[^>]*>)?\s*(\||•)\s*(<\/span>)?\s*&nbsp;/.test(html)) erros.push('Regra 6: separador entre &nbsp;.');

  // Regra 15: texto de descadastro literal.
  const compliance = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';
  if (!html.includes(compliance)) erros.push('Regra 15: texto de descadastro alterado.');

  // Gmail corta mensagens com HTML acima de ~102 KB.
  if (Utilities.newBlob(html).getBytes().length > 100000) erros.push('HTML acima de 100 KB: risco de corte no Gmail.');

  if (erros.length) throw new Error('Template inválido:\n- ' + erros.join('\n- '));
  return true;
}

function enviarTesteNordeste() {
  validarTemplateNordeste_();
  const destinatario = Session.getActiveUser().getEmail();
  if (!destinatario) throw new Error('Não foi possível obter o e-mail do usuário ativo via Session.getActiveUser().getEmail().');

  GmailApp.sendEmail(
    destinatario,
    NORDESTE.subject,
    'O Nordeste também tem cheiro. Abra este e-mail em um cliente compatível com HTML para ver a versão completa.',
    {
      htmlBody: montarHtmlNordeste_(),
      inlineImages: getInlineImagesNordeste_(),
      name: 'Essência do Brasil'
    }
  );
}
