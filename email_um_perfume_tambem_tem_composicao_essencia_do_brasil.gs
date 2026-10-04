/**
 * Essência do Brasil — Um perfume também tem composição
 * Assunto aprovado: Quem compôs o que você sente agora? 🤍
 * Template GmailApp.sendEmail — HTML baseado em tabelas, estilos inline.
 * Fotos e banner hero: links públicos (regra 23). Ícones: PNG inline via cid (regra 8).
 * Toda foto fica dentro de um link, para o Gmail não mostrar o atalho de download.
 */

const COMPOSICAO = {
  subject: 'Quem compôs o que você sente agora? 🤍',
  preheader: 'Saída, coração e fundo: quatro perfumes naturais contados como música.',
  maxWidth: 900,
  breakpoint: 920, // maxWidth + 20 (regra 12)
  cores: {
    escuro: '#17120E',
    dourado: '#C9A15B',
    douradoEscuro: '#A8803F',
    creme: '#F6F0E6',
    creme2: '#EFE6D8',
    titulo: '#2B241D',
    texto: '#5A5048',
    suave: '#857868',
    claro: '#EDE3D3',
    claroSuave: '#BDAE99',
    linhaClara: '#E0D4C1',
    linhaEscura: '#3A3027'
  },
  img: {
    heroDesktop: 'https://i.ibb.co/35cZVQgr/hero-composicao-desktop.jpg',
    heroMobile: 'https://i.ibb.co/Dfmxg10y/hero-composicao-mobile.jpg',
    tangerina: 'https://i.ibb.co/PZrrgY81/produto-tangerina-radiante.jpg',
    limao: 'https://i.ibb.co/0P1mcTv/produto-limao-siciliano-radiante.jpg',
    capim: 'https://i.ibb.co/1G83jf62/produto-capim-limao.jpg',
    olibano: 'https://i.ibb.co/Vb6fdH3/produto-olibano-sagrado.jpg',
    historia: 'https://i.ibb.co/pv2bkzSL/banner-historia-tangerina-maos.jpg',
    fechamento: 'https://i.ibb.co/Kj1jLWPn/banner-fechamento-tangerina-rotulo.jpg'
  },
  links: {
    home: 'https://essenciadobrasil.com.br/',
    masculinos: 'https://essenciadobrasil.com.br/perfumes-masculinos/',
    quemSomos: 'https://essenciadobrasil.com.br/quem-somos/',
    contato: 'https://essenciadobrasil.com.br/contato/',
    oleos: 'https://essenciadobrasil.com.br/oleos-essenciais/',
    botanica: 'https://essenciadobrasil.com.br/colecoes/botanica-imperial/',
    instagram: 'https://instagram.com/essenciadobrasil.com.br',
    tangerina: 'https://essenciadobrasil.com.br/produtos/perfume-tangerina-radiante-masculino-100ml-natural-e-vegano/',
    limao: 'https://essenciadobrasil.com.br/produtos/perfume-limao-siciliano-radiante-masculino-100ml-natural/',
    capim: 'https://essenciadobrasil.com.br/produtos/perfume-capim-limao-masculino-100ml-natural-e-vegano/',
    olibano: 'https://essenciadobrasil.com.br/produtos/perfume-olibano-sagrado-masculino-100ml-natural-e-vegano/'
  }
};

function getInlineImagesComposicao_() {
  // PNGs transparentes, traço linear plano, paleta reduzida, exportados em 1,5x–2x o tamanho de exibição:
  // folha (logo, 30px), saida (fatia cítrica, 88px), coracao (ramo herbáceo, 88px),
  // fundo (madeira em corte + gota de resina, 88px), onda (ondas sonoras, 120x36),
  // pauta (pauta com clave de sol, 150x72), seloCoelho / seloFolha / seloGota / seloBrasil (selos, 34px),
  // instagram (rede social, 22px).
  const b64 = {
    folha: 'iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEWkhiyrgECngD6nfz7//wCofz6qf0CnezSnfz0AAACngD6ngD2ngD6ngD6ngD6rhDZ0nq7cAAAAEHRSTlMeGLLnAXc8F6IA/EhxjNARjQueNgAAAnxJREFUeNrd1U9o03AUwPFvfu26dH8wgjh3kYrCvOiKOBDnIdcNhDLBw5gjqODR6kX0sAWHipcZ/+AQPRTUs0OF4kDIRRHdIbKLk6FBNzpFJTrbxK1JPbSri5qexdweH17y+73fe/lJN2j0CP4TPnc9HMfD4b6Bzw2yE5lAa8A+WA34GHQ04LxIvWjA6WI6Fs2uued2ORvJ7ajfw2sL7duP66iVyOysC3Y+ki0Balvky7V7G95dE1HZiaz9eLpS1iO4jAoBuQiWcCCOEsElcrCMFsFtHoBuRvBQK8Dk0whOVQCcr2EWu2pbyVW5Jt7WFAg4/vbylUkAVgBoBXA7O78UQIADo0c1QFkGyAAk+j1YBwLusBv/wSSwDsCRYGWbxRh7QUCF3gE1mACluLqiM4V4xxEciO0HWS68lhc2OVs+eut/uC9bSuIg7XPNsucgoESW4ABLOC6AVqGbHhuBBgJk9RncSgZq9dsQt6UpOOTp1bJYrcAbZqoFUSo7GAasZK1qmgDkTKBIAJpkNxmwkirW+Gw5BUxgtwBkAgYB2XxU4yKLgKwgAShIBjBMrsay0gbwnhKAxmYAW1pl5v0UsFRtUj1uAcIaqR/oEotA0ipr4PENYBS7znIqqQHzmNBCH5AwJONXO8zQBfikwcMCRtm5pltcfVyDgDycwgZv2jPXcNOrcgGw28EKgIvmSKjXxvXnaTjtg3UJYob3IcTJk8xq3AS4jzdOlxHuVF+RH2YrpD0ct08/b/3eyAtp/243ZjOfBq3YbH2u6reB27+aEhsy/pzv5JPeql+dM/42Jcv5w9vV+NjG6TUDLoWvmhM9g41+2BemwrH0715UPwFyeNM/sHZqXgAAAABJRU5ErkJggg==',
    saida: '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',
    coracao: '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',
    fundo: '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',
    onda: 'iVBORw0KGgoAAAANSUhEUgAAAPAAAABIBAMAAAA64mW5AAAAMFBMVEXOpVbIoFm4oU7WkijIn1n//wCqgCrIn1kAAADIoVfIoFrHnVfIoFrIoFrIoFrGnFZ4DOyXAAAAEHRSTlMTZQcEkwEG0AAt9C3Qso8Z5xtnngAAAwlJREFUeNrtmT1v2kAYx/+YxJhWUXE+QWS2DhVSMnbIQLeqytLMTGT1ZrbeaG9e48lj1S7sZcjSLVX5AiA+QBUThYjDVKbDJbyYM37BdlvJzwIW9v2e/93zcmdKOv6OCSjABbgA/yNg2iQA5hM1S7ABAPNmd/2yNKwBkN7YANDLBly+VgF4wxETWr5uAJBAVje0G2mD2wDg4QbACxAm1MPId5fHPrT0wOXehpR5U2VC2QL7zP0Rab0PotzkEycOf7EvbIF9VhnepqCYfiQ7fl1f4JSj+qXT3bjmxe0qzrdSIDnYN8ncuGVx7g+Lb42k4A7XD+6E2/6nDHgYcUcIB1cGdqgf23NLv5ClXHpLkoBdmOswNuIOK10TAFWYywV6CdNt2ziNBe5g6bL7fTXiTuOEWNUxy0otMlgDHRDmMoDKJzNxzngBYcEH0yGJoC+mGWFgr02qvEnbq3W2SWlQCwFXM+j5VccUoe4Ed5CNnWyPvwK7hk3v7Aw3Ox24MuGAKwP1FUbZcemdfTQYc8AiWpnu7nyqBACwMDe6yMdOAesZTB17n84ayyqXhDo2AAEdAP0DnOe1oR4DfXQguHJek7zegeSucIR+/uAj9IuzUwHODjxZto4cbYIT4dBp5Q8+dFoCdAio5bu6NegQAIgymeRVMmefTVEmz6fFNg61vPT+fDpt5xfVD0Hp9FBvPGQJFo/Jfb3BOZiLGnCc5btcHZKjBRSQrN8h68GV6z6DejKVL8JLpmS1prhIFyxZZFYn4bVaUsgUasqqtShNwoBUJwAeoQJI34ld3UkHAOmMAJB6JDF+JquLs3G8tjjD+XoQSpch+9/FVd/n3yNU0WoFvegLBIt1M16maSv/Fu/GywmLvxHQ98hULXyEeLV6YXH2wq7CUcZEJwdP5c2YavK6eu8iSv7EA0tfszpTJWmL0+ddw1Th5JiomKmBF82NBZOGT0OzFPfn4WkrPcXWlmgluJ4YaU81KxFUsZnW31c3UWI+yEp7tmD6/i0B6OsPZswHS8X/xwW4AP/34D9F2enfbXsakAAAAABJRU5ErkJggg==',
    pauta: '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',
    seloCoelho: 'iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAAMFBMVEWmhDWngD6pgECnfz7//wCofz6qfzuofz2qf0AAAACngD6ngD6ngD6ngD6qhTangD2kqlswAAAAEHRSTlMnbx7nAXcejTwA+suwjxBRJ0AznwAAA7lJREFUeNqdll1oHFUUx39zd2fXmG13WoMkYOkGKaamNlUb8AMltQRsm5BF2lIraqoPKaLpxgcVW3CtQpRKOmkRTCMYUkSEUjaUKG0J2RcrPmUIaJSIWWilKm0ya7rObvMxPsxsdr5CxXm6c+c359xz7vmfe6UB7vSIOxKEXW+Hp+dmWL9u58fOScnhKPKk1i/1x6/rRqhtKBDZOyZ19VrGLurbL6/Mh9orxKYt91nDtsKBsad+8yGHH7138ufy7PLEiU1HWj0RyRcjvzjX+MahQdUT0eujf7pD7UsWSi4rxeHXvOk4+2DaiciPP5TyIgvHT6uOoJ/7phiQ1h3XpitWZt4Jyvy3sxVH4atp1zf5fhXgrq0tK8iLUffv87NfgtHKIz+VEWOk2Y3czQycnuBUtWojZ0IZN3JEWlKN3qXUQqrXRvQ9nnUqBpkY6HTlLUTuH/IgOVI/dIdIEKpLggCz4I9XMbPzgNyig4D2zT5gTU8slyEHwz+CgFyLF1GXiybjKHDLBGlAXnvTi4Ti+Wj07/gsUN+UEUj+pRTMZFTqEwCdCoLlNT7EpAlJnwfQcgiWqn1IVSIBiTqAEY1Qe08x4WN2KaXQYweeBYzQkkDJ+NOyCxAqgCkhyKp+5CuifGj5jCHIBxSTJu1TjpaXLtD9RETvPnPV7AQgThjJ9fUtsXbuxKKU3i9d0qzNIOxyFGkcBIznR7n20tcvd1pWXP2lWJ1DUqjKmJQ+JxXQgkqbaX5vdubpBNU0vZquNI+aG+XxoUztFICxe+MQcmyjBrBjPEy8jEQy8pSVi3FgmW0aQB5BvGzkBQ46nG4VVrn2IA08ccXWV6xoVMS2JVczDUDNDUF0pQK6HP0tF2qsNNWEHVy7cGxWvnTM2l1DINAVu6ZvOdtx1N4XyUQwYheDVuVAomRt7VYj+Od3W1/bghpIRycCs7yPzuKTsZWj6EgD3HPTitnz/6cHAR6eQMADScBTE0A3gDwFYVB0gNu/ukQp1Tf3AstKEWmAYry06kHTE08jwIytfhZlFBBQ1d25GhEppKySyo+uhuyR7arrXVKDCVnbZyPRjsFg5HxBLZ8kZ5VgpM/8q1zeixuyQcTiZLaigPq9QUjreodILmyo8xOnJhsdyMIHJd95ZJxsyDil1tbRkPQEvLvwnVuNn1VdcbWihWPaux7BRi8sdDmRt9UGn6bP7bxdq60I7fgX27/33zzOvVJ6ZswaftJwsvZy4LXio+Hr/e+vi8/9YYg3jwbfPP7D5eT/34L+BYftHUVLAzEnAAAAAElFTkSuQmCC',
    seloFolha: 'iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAAMFBMVEWqgECnfz7//wCakQ2ofz6qfzuofz0AAACngD6ngD6ngD6ngD6ngD2rhTangD6ogTzqFF5rAAAAEHRSTlMZ4wEDdx6PAPrOj69QEHAt8ftDdwAAA/hJREFUeNqdlm1MW2UUx3/3ube3hTDCHAqL29xiCF0krFPMyOhgU4kuImES40aYEjf1A8bUadTNKP00mEGpY1kicVlNjHEakfiSIImMGZ0LJnCjyOaMoYaAItkoEQeFlvrh9uXp5ZIl9tPtub+c85zznPO/R3mFm/3ETQlUr/yvddYdztqw/fHvZKMiBXKUhN4RZ2f10LzY1WPr5dDvs/uXSscmx/9pGfm1dMLGy6HustuDiWe99puiwRVefoju6DOS1thoe8nhQUtGekNBr3zG5174MGDx8sbI1cxUz+8tnsvw4uxstpbjy60+2YteoW+2IrFT4nh52kvjqLGyqjUbT0uBxg7YVX70ejqQOnveDokVF/6V9FLrsr/AzolkINeFanvkvpxAAjmhBe2RRV97AgntXPlWPw7w8pJ5XP3ysOW9q77g2sX9BiwU1hkIiOkWon593zB4AIfHAAFPuDMAx57+MMo9hAG+mAQBod0ZxAaDk9XXL5AHoMVAoP/sl4n3wqL64MdgelnIbUIjrsqJVOTo565JhroxNJbjkqXxs9NTPjluOIRgOVsKU6V87YPOklQ3vh9C4JfmocS3KQh69xRR87g4XAjCacQZ0gyg3dCIK2Y8JY5gIJ3QMeVhQO9QHmRBMU0LUQRrU0QkoAeB38L5QVqTh1EQhFLIu5QDLo/aBUayFLkISRvG9B7gKO7dEG5LGDcjmEnFCWYBroB4CSJGst9nZH3JxQOcYGMdZJv1t0pQn9IELr8wgLdF0A7pUetgLweBpR5VFrJU0oYOjgE9ALiMhqR1LYJNKeRWqOEAQK2alAWeQvVmTSca1uG54pjU+gHXhPZvEtkzL3AmZ488aqgAOMqxDDnct828JDV3xpGjTQOxfG06NQxrpgV5iQrMqwkn+gOmLwDiCqr3J6d5S1pWdFIbAr25ty0njeSHBY7RlKBQAXpzUJ1PH+TJOlSvQ79hVih7TBuKttCr7MpLI1s2D2gs5KRSKqvsO4VS2SO3tx8BtzWZ/QWX3jRQn5cJfRQ08Eg6p9x5lzx4LMdB9XI1Ngcguhoey/9xMlMXW4ouoXqJZN8AULb9+f2IVWb+eKgc1Yt4tvDKKl8rhyg1+2XfxdU+aI16oqV2RAP2hD7wdAJxVn1ij3TP+QEN4PM8e+T1+HSyd2Olhq16jxvp9t5yvx1Sdos0AR+Url9JnBzfKSGLRyJ+K+HqKAjKc/RIVXGTJeGtc79kjtpHi1/JN8xSc+g1yzQ6v42+mrEaBAt91oE98+hUcUpqIkc6ii6vnOkzL/5995D5+Jb7rHvQbmfo73hmTVf99nXuSOXS4XP2mwe0fpo7zLo77m1bbTn5/1vQf4OjJhgMTnFIAAAAAElFTkSuQmCC',
    seloGota: 'iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAAMFBMVEWmgECnfz6hmhD//wCnfz6qfzsAAACngD6ngD6ngD6ngD6rhTengD6ogT2ogD2tgEAzB+1CAAAAEHRSTlMn5gMBeB4A+s6OsBBvMFQOFSuHKwAAA55JREFUeNqdVm1IVFkYfubcuXecBBlxKX9EDW6bWhQ3JPOHxrQsLa1gF0YI2iAt2g3KHIqEIEKKKCJsXGkh9svdhWVZiB0xK1kQizAhokutlFF4wTL7dCSccq733n7cmfOeGa+07Py55zw88573fc/znHN83+BjP/ZRBvw5s7aBojsoWb7iggj6hIUKKo1f2bnpgJFiLe0ES1V8GH0yvSW9cmxi/O2Bx9fWTHjkEh3YsPEPd3jmyaFH6+dHGZKr+x9kUXvgx88a7+ZFkb9e3C/muKP5cjyPsj8wmltqR+xULkX5fW9+O06sahJzkWuV7nyKfSn9vUoU7fbj+V1dXF73hhaa+sqr8yNTtJA0fdOLYpWXTmajHFvkvYFdk9mFAp20C7heS+NNwe4M5YyUILj1Po3N9qMZir6P0IBhx2i2J+2mK49dIdBhkpHks3Rp5AEYYMtChjsLtZQglSYDYEBDJWFBTWk2NWEXngIMSKoEpZsaa2AIYWyAQb4XJ+gAiyvqQ5rPFmlgkEQTJBRAKxCAiAoG0yFASX4JHHYEbScTYLALCaj3xYBU6DwhPQYYYoMEGO9VwK/5BJ8FwJCkbINGNQB0mQT5HDDoNJ+BKzPoVJIFhmKKGpXiADCr9gl2BRMbFZLcryokUwQmng2DQffbOUdYGAxTJIRkJFOGQ36Yyjlf5pDZLQfxBY4gR8qoyVSTC1C28kl4JodCRYe9KMVgWEY1+9DmJqEXcfAgGJ7TDqXwg5uEoLudYFBooSDg2sXIPVQ1bgrdRMiNkrB4r2Qw6LzAHnsw8lYHMGdwDTkWGHoMOoO7t9tfaMAiRHg7C8HgH+H/QF+DaoWAevDIWyNg8EncwjHn1NCnIQSTAW5yNQSpyirg9rsh338+MYyWq0snuVz+hB9YUpv9j0/Va+rKXnVI4azs5BHAD4R5vubxhtFRAKV8HccBGPDPM96lut0AUP0vB1rqAQakLOrk2ZNlZY3CMZ5Q3cumeXn7ArdVQWjS1Uvz+YUutC1yRlI1Vrc3Q9ajGYrS+pM35c67ePbik0KvPSnrHD2rXWut4cWwx3WSd3GVF6WqWHBA79rK+YzvxlcL95Hd+8m3w3mMwEjJddFHa1o3a3kFr3p3L9dqR8xhPeei2WGcznOj8tvsNpFyOFHRlG/Yi5+/WMnlmN71y4qb8z19cffLsjF3+HP535W3vN4MQx3P/H/VryupSK83oz3eL4//8Dj5/6+gD6hvFJ/lK1LyAAAAAElFTkSuQmCC',
    seloBrasil: 'iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAAMFBMVEWtgECVjhL//wCofj6ofz6qfzsAAACngD6ngD6ngD6ngD6qhDaogTyngD6ngD2nfz78RxahAAAAEHRSTlMWAwFyzh4A+s6wjxEucVLwZlmSnAAABC1JREFUeNqtVl1MHFUU/uYOMwsFwvbHKhVwlShBYrN0FyWGEtZSgw3EtW0ixkK3aUOjpbriC5U2rlVM0yeKqcSQputPLKkkQjHaSIprQigqhrEJiNrIPihraIUhYenuwMz4MH93l2n64j7d8+2Xc+495zvnDNOCe/3IPRnISLGO3lycxaaNz5y9m5dM3+XnB4t3ZMd7t4QomLHusv8a0/ih5uxb0Tts42X/tZJqjYGP/mqb2G3+wXr0wzc5j/4wY6DKd72Fh39K88K9et+P9B2bXrgUTvNyMPZb6lMnT3DxFC+OK+3p6Xj3wSDthSsrcqZTlC+kHrdF8U9Prc/qQ5UVC1ag2ZfsMj+2YAXKkEbsKHKlK2p4OZVpX8C2GSMQf85rT9mbFdYpveyAPWU11KFThGMUzPkpo2VNo3Af06VvHaeM+AY/QACVltVoOFlFCS4gAgRo2EaFOZ4Z+pUKdXoKIEDUbUEN0dxfFCrTrAqwHi5x3UT4v5n3kgULjYKZvftrZghY6iodyA/w3bhqIX43CNYUK+Nd/BTQEEgGTSgaAYGcbZiSF68AQA8+NXM5KIAgYJqNUS50pLT72YRf6TSfyIP1+Gr0y/HxZNXJ3OXI3M4rW2Mv6iCbFScQDBm/LBZfPoXN5fi5d4f6tRFcBsGS0YsDbMcGMcc3ck4N97lXjaKoYD1Zi9p55z/N4sHoynT2Mf7PRIybWNHg/EUCRjsOCY4uRBKAMvGAgmRQLtNwpxmIew11QJAcfdOFcQXoREwrVZ7ZjYq4JQzgiTMnJ9+ACkg+VUhrWBUAEAKAt4IAwMCZRmGdt8OASwSQcZoA/IjsMil5mky70Q445wCgmQE6UKhlfcmkoMGdDMIlA0BkBY4uVlfNIAhydH/X8dnA50oFsE9sWX0arTpcDgJWPyf8cuey86Z3VzVT0yhwIWpKHXLpr5veGttTMLsYi3iz48l6o7bZywSC8TipXB3r3+d8p2L4gFhs1JaRwbSQ7UaOpKeir4cAZGaRC0YXkKIo6+GlFSPoIjcZB3BcaBZN7VaOE6isebFkUHocGAo7ukzILYL1yI471tDh4z0VuxP1ZpNg6SoI8KTVfZJPff+AVlBdunMAAZyi1TZ9rltuUkbNRAVgWuDIm7ewr5pQNmqZh/K6QIBlmZoM9QEHxUDErc2XZnq+nK+j18+dgKYX33kKlcKU8VyGLqk6OWw/6zihVp+7bHvBvC3l+8dGja2W4bxtS/GpEUO7a4WC7fS+EbHk/XCtHaV2E9UBQ4Xb1jM+uVFGUVY/SATSGfzbpQP04itqL+FmUh9cFZtObbUT0niEZqy1CmfS1ieb80f1vxTlSF/p5vRV3r/rVompCqntS+/Y+m3fv3f+kUnteKHkYv7w+m0PTF5syj37e3HpRud26fCg7WfF3T5OmP/lK+g/Q7Rc2j8V1ycAAAAASUVORK5CYII=',
    instagram: 'iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAMFBMVEUAAAA5LiQ5LiQ5LiQ5LiQ5LiQ4LSM4KyI3KSQ5HBw0KhsxMSQ4MCBAAAAzMw0AAAB2Vi8zAAAAEHRSTlMA/bDIhmVOLhUJFBUgBAcA2HqG2QAAAXdJREFUeNq1kz0sQ1EUx3/vVt9LCOmpryY1tKIkGNpRQlKjSKQYOpXqaOrSyWYwSiMGY00mCbWYxGQwGcQiEVZTJ4kKNdx7X98TRme59/zyv+fkfFz4P3P0cXLa0u7cbgCvX/m6zC2AAjjoUh6XrNqbfmbc0CdUqa6vEYlXrdhLS9ZcF6XcDeLKkA7i9UZfLRwoJl/ONusASlK+tkcSSlKgoEPBx534V5QYAOcCQC0dL6ImRvslAcDWIEBTRGTZzeXJjQCwGgdcERGRMpAeNlUCOzjFWoxLm9qcDVaOcPvaxjVqrxVtQLvQqYbwF70AxzyH8Cd5HfIuhDu6BodWCP80ZWfXCjzyseJap0iFcIQ3gA2yIfye/SiDexaph1PmaW7vJf2i/25VzAHaFYCZBsaHYz2GtdxgBgAzBkeqwUo8iYECxzbCtkfjKA9BXLIT/2V9FLBGs7tsScb+Xk0H4H4hEHv+whY/W+nSyYvAJ7nZN59k6pD/tm8tb0qgvFTcvAAAAABJRU5ErkJggg=='
  };
  const out = {};
  Object.keys(b64).forEach(function (k) {
    out[k] = Utilities.newBlob(Utilities.base64Decode(b64[k]), 'image/png', k + '.png');
  });
  return out;
}

function montarHtmlComposicao_() {
  const C = COMPOSICAO;
  const K = C.cores;
  const L = C.links;
  const I = C.img;
  const SERIF = "Georgia,'Times New Roman',serif";
  const SANS = 'Arial,Helvetica,sans-serif';

  const linha = (cor) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;"><tr><td height="1" style="height:1px;line-height:1px;font-size:0;background:${cor};">&nbsp;</td></tr></table>`;
  const ornamento = (cor, alinhar) => `
<table role="presentation" width="120" cellpadding="0" cellspacing="0" border="0" align="${alinhar}" style="width:120px;table-layout:fixed;${alinhar === 'center' ? 'margin:0 auto;' : ''}">
  <tr>
    <td width="54" valign="middle" style="width:54px;">${linha(cor)}</td>
    <td width="12" valign="middle" align="center" style="width:12px;"><table role="presentation" width="6" cellpadding="0" cellspacing="0" border="0" align="center" style="width:6px;"><tr><td width="6" height="6" style="width:6px;height:6px;line-height:6px;font-size:0;background:${cor};border-radius:3px;">&nbsp;</td></tr></table></td>
    <td width="54" valign="middle" style="width:54px;">${linha(cor)}</td>
  </tr>
</table>`;
  const navLink = (href, txt, cor) => `<a href="${href}" style="color:${cor};text-decoration:none;">${txt}</a>`;
  const sep = ` <span style="color:${K.douradoEscuro};">|</span> `;

  const botao = (href, txt, cor, largura) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="width:100%;max-width:${largura}px;table-layout:fixed;margin:0 auto;">
  <tr><td bgcolor="${cor}" style="background:${cor};border-radius:22px;padding:11px 8px;text-align:center;">
    <a href="${href}" class="btnm" style="display:block;font-family:${SANS};font-size:11px;line-height:15px;font-weight:bold;letter-spacing:1.5px;color:#FFFFFF;text-decoration:none;">${txt}</a>
  </td></tr>
</table>`;

  // ---------- Seção 4: três movimentos ----------
  const traco = (visivel) => visivel
    ? `<td class="hide-mobile" valign="middle" style="width:30%;">${linha(K.dourado)}</td>`
    : `<td class="hide-mobile" valign="middle" style="width:30%;font-size:0;line-height:0;">&nbsp;</td>`;
  const movimento = (cid, alt, num, titulo, frase, apoio, esq, dir, primeiro) => `
<td class="stack100 colsep" valign="top" style="width:33.33%;padding:0 18px;text-align:center;${primeiro ? '' : `border-left:1px solid ${K.linhaEscura};`}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>${traco(esq)}<td class="stack100" valign="middle" align="center" style="width:40%;text-align:center;"><img src="cid:${cid}" width="88" height="88" alt="${alt}" style="display:block;width:88px;height:88px;max-width:100%;margin:0 auto;border:0;"></td>${traco(dir)}</tr>
  </table>
  <table role="presentation" width="32" cellpadding="0" cellspacing="0" border="0" align="center" style="width:32px;margin:16px auto 12px auto;">
    <tr><td width="30" height="30" align="center" valign="middle" style="width:30px;height:30px;border:1px solid ${K.dourado};border-radius:16px;font-family:${SERIF};font-size:15px;line-height:30px;color:${K.dourado};text-align:center;">${num}</td></tr>
  </table>
  <div style="font-family:${SERIF};font-size:15px;line-height:20px;letter-spacing:2.5px;color:${K.dourado};">${titulo}</div>
  <div class="movm" style="font-family:${SERIF};font-size:17px;line-height:24px;color:${K.claro};margin-top:10px;">${frase}</div>
  <div style="font-family:${SANS};font-size:13px;line-height:19px;color:${K.claroSuave};margin-top:10px;">${apoio}</div>
</td>`;

  // ---------- Seção 6: produtos ----------
  const P = [
    {
      chave: 'tangerina', nome: 'TANGERINA RADIANTE', cor: '#B5562A',
      alt: 'Perfume Tangerina Radiante Masculino 100ml com tangerinas',
      desc: 'A tangerina abre a composição com brilho e vivacidade, em concentração dobrada de óleo essencial. O citronelal suaviza o cítrico com um toque herbáceo, como uma melodia que encontra seu equilíbrio, e a cumarina com o cedrol fecha em um fundo amadeirado, suavemente adocicado.',
      notas: ['tangerina', 'citronelal, herbáceo', 'cumarina e cedrol']
    },
    {
      chave: 'limao', nome: 'LIMÃO SICILIANO RADIANTE', cor: '#7A6318',
      alt: 'Perfume Limão Siciliano Radiante Masculino 100ml com limões',
      desc: 'Limão siciliano em concentração dobrada, com uma transição floral suave e um fundo de madeira leve. O frescor que continua soando.',
      notas: ['limão siciliano', 'linalol, floral e herbáceo', 'bisabolol de candeia e cedrol']
    },
    {
      chave: 'capim', nome: 'CAPIM LIMÃO', cor: '#3E6B37',
      alt: 'Perfume Capim Limão Masculino 100ml com folhas de capim-limão',
      desc: 'O verde do capim-limão em concentração dobrada, com um coração herbáceo e um fundo terroso. Ritmo fresco, base firme.',
      notas: ['capim-limão', 'citronelal, herbáceo', 'cedrol e beta-mirceno']
    },
    {
      chave: 'olibano', nome: 'OLÍBANO SAGRADO', cor: '#24332B',
      alt: 'Perfume Olíbano Sagrado Masculino 100ml com resina de olíbano',
      desc: 'Frescor cítrico que se aprofunda na resina do olíbano, até um fundo amadeirado com toque de baunilha. A nota que permanece.',
      notas: ['frescor cítrico', 'linalol, floral e herbal', 'vanilina, cedrol e a resina do olíbano']
    }
  ];
  const notasHtml = (n) => ['Saída', 'Coração', 'Fundo'].map((rot, i) =>
    `<div style="font-family:${SANS};font-size:12px;line-height:17px;color:${K.texto};${i ? 'margin-top:5px;' : ''}"><span style="font-family:${SERIF};font-size:11px;letter-spacing:1.5px;color:${K.douradoEscuro};">${rot.toUpperCase()}</span><br>${n[i]}</div>`).join('');
  const fotoProduto = (p, max) => `<a href="${L[p.chave]}" style="text-decoration:none;"><div style="max-width:${max}px;margin:0 auto;"><img src="${I[p.chave]}" width="400" height="400" alt="${p.alt}" style="display:block;width:100%;max-width:100%;height:auto;margin:0 auto;border:0;"></div></a>`;
  const nomeProduto = (p) => `<a href="${L[p.chave]}" style="text-decoration:none;"><span class="cardname" style="font-family:${SERIF};font-size:15px;line-height:20px;letter-spacing:1.5px;color:${K.titulo};">${p.nome}</span></a>`;

  // Desktop: grade 4 colunas montada em linhas, para nome, notas, texto e botões ficarem alinhados.
  const celulaGrade = (i, conteudo, estilo) => `<td width="25%" valign="top" align="center" style="width:25%;text-align:center;${i ? `border-left:1px solid ${K.linhaClara};` : ''}${estilo}">${conteudo}</td>`;
  const linhaGrade = (fn, estilo) => `<tr>${P.map((p, i) => celulaGrade(i, fn(p), estilo)).join('')}</tr>`;
  const gradeDesktop = `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
  ${linhaGrade((p) => fotoProduto(p, 200), 'padding:0 12px;')}
  ${linhaGrade((p) => nomeProduto(p), 'padding:14px 12px 0 12px;')}
  ${linhaGrade((p) => notasHtml(p.notas), 'padding:12px 12px 0 12px;')}
  ${linhaGrade((p) => `<div style="font-family:${SANS};font-size:12.5px;line-height:18px;color:${K.texto};">${p.desc}</div>`, 'padding:14px 14px 0 14px;')}
  ${linhaGrade((p) => botao(L[p.chave], 'CONHECER&nbsp;&rsaquo;', p.cor, 170), 'padding:18px 12px 4px 12px;')}
</table>`;

  // Celular: um card por linha (mostrado só pela media query; oculto por padrão e no Outlook).
  const gradeMobile = P.map((p, i) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
  <tr><td style="padding:${i ? '26px' : '6px'} 22px 0 22px;text-align:center;${i ? `border-top:1px solid ${K.linhaClara};` : ''}">
    ${fotoProduto(p, 240)}
    <div style="padding-top:12px;">${nomeProduto(p)}</div>
    <div style="margin-top:12px;">${notasHtml(p.notas)}</div>
    <div style="font-family:${SANS};font-size:14px;line-height:21px;color:${K.texto};margin-top:14px;">${p.desc}</div>
    <div style="padding:18px 0 4px 0;">${botao(L[p.chave], 'CONHECER&nbsp;&rsaquo;', p.cor, 240)}</div>
  </td></tr>
</table>`).join('');

  // ---------- Rodapé ----------
  const selo = (cid, txt) => `<td width="50%" valign="top" align="center" style="width:50%;padding:0 6px;text-align:center;"><img src="cid:${cid}" width="34" height="34" alt="" style="display:block;width:34px;height:34px;max-width:100%;margin:0 auto 8px auto;border:0;"><div style="font-family:${SANS};font-size:10px;line-height:14px;letter-spacing:1px;color:${K.texto};">${txt}</div></td>`;
  const parSelos = (a, b) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;"><tr>${a}${b}</tr></table>`;

  const compliance = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Um perfume também tem composição</title>
<style>
@media only screen and (max-width:${C.breakpoint}px){
  .stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
  .footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;text-align:center!important;padding:10px 20px!important;}
  .hide-mobile{display:none!important;max-height:0!important;overflow:hidden!important;}
  .banner-desktop{display:none!important;max-height:0!important;overflow:hidden!important;}
  .banner-mobile{display:block!important;max-height:none!important;}
  .grid-desk{display:none!important;max-height:0!important;overflow:hidden!important;}
  .grid-mob{display:block!important;max-height:none!important;overflow:visible!important;}
  .colsep{border-left:0!important;padding:30px 24px 0 24px!important;box-sizing:border-box!important;}
  .mob-pad{padding:34px 24px!important;box-sizing:border-box!important;}
  .mob-pad-top{padding-top:14px!important;box-sizing:border-box!important;}
  .tagline{text-align:center!important;padding:0 20px 18px 20px!important;box-sizing:border-box!important;}
  .h1m{font-size:25px!important;line-height:32px!important;}
  .h2m{font-size:18px!important;line-height:25px!important;letter-spacing:2px!important;}
  .quotem{font-size:21px!important;line-height:30px!important;}
  .txtm{font-size:15px!important;line-height:23px!important;}
  .movm{font-size:17px!important;line-height:24px!important;}
  .cardname{font-size:16px!important;line-height:21px!important;}
  .btnm{font-size:12px!important;line-height:16px!important;}
}
</style>
</head>
<body style="margin:0;padding:0;background:${K.creme};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:${K.creme};mso-hide:all;">${C.preheader}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${K.creme}" style="width:100%;background:${K.creme};table-layout:fixed;">
<tr><td align="center" style="padding:0;">
<!--[if mso]><table role="presentation" width="${C.maxWidth}" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="width:100%;max-width:${C.maxWidth}px;table-layout:fixed;margin:0 auto;">

<!-- 1. CABEÇALHO (3 colunas: vazio | logo | frase) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="hide-mobile" style="width:30%;font-size:0;line-height:0;">&nbsp;</td>
      <td class="stack100" valign="middle" align="center" style="width:40%;padding:24px 10px 20px 10px;text-align:center;">
        <a href="${L.home}" style="text-decoration:none;">
          <img src="cid:folha" width="30" height="30" alt="" style="display:block;width:30px;height:30px;max-width:100%;margin:0 auto 6px auto;border:0;">
          <div style="font-family:${SERIF};font-size:26px;line-height:30px;letter-spacing:5px;color:${K.titulo};">ESSÊNCIA</div>
          <div style="font-family:${SERIF};font-size:10px;line-height:16px;letter-spacing:5px;color:${K.douradoEscuro};">DO BRASIL</div>
        </a>
      </td>
      <td class="stack100 tagline" valign="middle" style="width:30%;padding:0 26px 0 0;text-align:right;">
        <div style="font-family:${SANS};font-size:10px;line-height:15px;letter-spacing:2px;color:${K.suave};">PERFUMARIA NATURAL<br>COMPOSTA NOTA A NOTA</div>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 2. HERO (duas versões, regra 24) -->
<tr><td bgcolor="${K.escuro}" style="background:${K.escuro};padding:0;line-height:0;font-size:0;">
  <a href="${L.tangerina}" style="text-decoration:none;">
    <img src="${I.heroDesktop}" class="banner-desktop" width="900" height="358" alt="Um perfume também tem composição. Perfumes naturais Essência do Brasil." style="display:block;width:100%;max-width:100%;height:auto;border:0;">
    <!--[if !mso]><!-->
    <img src="${I.heroMobile}" class="banner-mobile" width="600" height="1066" alt="Um perfume também tem composição. Perfumes naturais Essência do Brasil." style="display:none;width:100%;max-width:100%;height:auto;max-height:0;overflow:hidden;border:0;">
    <!--<![endif]-->
  </a>
</td></tr>

<!-- 3. BANNER SECUNDÁRIO "HISTÓRIA" (texto | foto) -->
<tr><td bgcolor="${K.creme2}" style="background:${K.creme2};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100 mob-pad" valign="middle" style="width:55%;padding:40px 36px 40px 52px;">
        <div class="h1m" style="font-family:${SERIF};font-size:30px;line-height:38px;color:${K.titulo};">Uma fragrância não se revela de uma vez.</div>
        <div style="padding:18px 0;">${ornamento(K.douradoEscuro, 'left')}</div>
        <div class="txtm" style="font-family:${SANS};font-size:15px;line-height:24px;color:${K.texto};">Como uma música, ela tem começo, desenvolvimento e final. Primeiro chega o frescor, depois o caráter se mostra aos poucos, e por fim fica o que é mais profundo. Cada nota tem seu tempo e seu lugar na pele.</div>
      </td>
      <td class="stack100" valign="middle" align="center" style="width:45%;padding:0;line-height:0;font-size:0;text-align:center;">
        <a href="${L.tangerina}" style="text-decoration:none;"><img src="${I.historia}" width="600" height="600" alt="Mãos segurando o perfume Tangerina Radiante" style="display:block;width:100%;max-width:100%;height:auto;margin:0 auto;border:0;"></a>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 4. A COMPOSIÇÃO DE UMA FRAGRÂNCIA (3 colunas) -->
<tr><td bgcolor="${K.escuro}" style="background:${K.escuro};padding:40px 20px 42px 20px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="hide-mobile" valign="middle" align="center" style="width:20%;text-align:center;"><img src="cid:onda" width="120" height="36" alt="" style="display:block;width:120px;height:36px;max-width:100%;margin:0 auto;border:0;"></td>
      <td class="stack100" valign="middle" style="width:60%;padding:0 10px;text-align:center;">
        <div class="h2m" style="font-family:${SERIF};font-size:22px;line-height:30px;letter-spacing:3px;color:${K.dourado};">A COMPOSIÇÃO DE UMA FRAGRÂNCIA</div>
        <div class="txtm" style="font-family:${SERIF};font-size:16px;line-height:24px;font-style:italic;color:${K.claro};margin-top:8px;">Três movimentos, uma só peça.</div>
      </td>
      <td class="hide-mobile" valign="middle" align="center" style="width:20%;text-align:center;"><img src="cid:onda" width="120" height="36" alt="" style="display:block;width:120px;height:36px;max-width:100%;margin:0 auto;border:0;"></td>
    </tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;margin-top:30px;">
    <tr>
      ${movimento('saida', 'Notas de saída', '1', 'NOTAS DE SAÍDA', 'O primeiro acorde: luminoso, imediato.', 'São as notas mais leves, que chegam primeiro e convidam a continuar.', false, true, true)}
      ${movimento('coracao', 'Notas de coração', '2', 'NOTAS DE CORAÇÃO', 'O tema que se desenvolve e dá identidade à composição.', 'Aparecem depois da abertura e revelam o caráter da fragrância.', true, true, false)}
      ${movimento('fundo', 'Notas de fundo', '3', 'NOTAS DE FUNDO', 'O que permanece quando a música termina.', 'Notas mais densas, que dão base, profundidade e fixação ao perfume.', true, false, false)}
    </tr>
  </table>
</td></tr>

<!-- 5. FRASE DE TRANSIÇÃO -->
<tr><td bgcolor="${K.creme2}" style="background:${K.creme2};padding:40px 60px 36px 60px;text-align:center;" class="mob-pad">
  <div class="quotem" style="font-family:${SERIF};font-size:26px;line-height:37px;color:${K.titulo};">É o encontro dessas notas que transforma matérias-primas da natureza em uma composição própria.</div>
  <div style="padding-top:20px;">${ornamento(K.douradoEscuro, 'center')}</div>
</td></tr>

<!-- 6. GRADE DE PRODUTOS (4 colunas) -->
<tr><td bgcolor="#FFFFFF" style="background:#FFFFFF;padding:38px 14px 36px 14px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr><td style="padding:0 20px 28px 20px;text-align:center;">
      <div class="h2m" style="font-family:${SERIF};font-size:21px;line-height:29px;letter-spacing:3px;color:${K.titulo};">QUATRO FRAGRÂNCIAS, QUATRO COMPOSIÇÕES.</div>
      <div class="txtm" style="font-family:${SANS};font-size:15px;line-height:23px;color:${K.texto};margin-top:10px;">As quatro abrem com o mesmo acorde cítrico e seguem caminhos diferentes até o fundo.</div>
      <div style="font-family:${SERIF};font-size:15px;line-height:22px;color:${K.douradoEscuro};margin-top:12px;">Leve as quatro composições: compre 4, pague 3 em qualquer produto da loja.</div>
      <div style="font-family:${SANS};font-size:11px;line-height:16px;color:${K.suave};margin-top:3px;">Não acumulável com algumas promoções.</div>
    </td></tr>
    <tr><td class="grid-desk" style="padding:0;">${gradeDesktop}</td></tr>
    <tr><td style="padding:0;">
      <!--[if !mso]><!-->
      <div class="grid-mob" style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${gradeMobile}</div>
      <!--<![endif]-->
    </td></tr>
  </table>
</td></tr>

<!-- 7. BANNER SECUNDÁRIO DE FECHAMENTO (foto | texto) -->
<tr><td bgcolor="${K.escuro}" style="background:${K.escuro};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100" valign="middle" align="center" style="width:42%;padding:0;line-height:0;font-size:0;text-align:center;">
        <a href="${L.tangerina}" style="text-decoration:none;"><img src="${I.fechamento}" width="600" height="600" alt="Detalhe do rótulo do perfume Tangerina Radiante" style="display:block;width:100%;max-width:100%;height:auto;margin:0 auto;border:0;"></a>
      </td>
      <td class="stack100 mob-pad" valign="middle" style="width:58%;padding:36px 52px 36px 44px;">
        <div class="quotem" style="font-family:${SERIF};font-size:24px;line-height:35px;color:${K.claro};">Assim como uma boa composição musical, um bom perfume está nos detalhes, nos contrastes e na harmonia entre suas notas.</div>
        <div style="padding:20px 0;">${ornamento(K.dourado, 'left')}</div>
        <div class="txtm" style="font-family:${SERIF};font-size:16px;line-height:25px;font-style:italic;color:${K.dourado};">Por isso, cada frasco da coleção Botânica Imperial é embalado ao som de música clássica.</div>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 8. CHAMADA PARA A COLEÇÃO (pauta | conteúdo | pauta) -->
<tr><td bgcolor="${K.creme2}" style="background:${K.creme2};padding:38px 10px 40px 10px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="hide-mobile" valign="middle" align="center" style="width:20%;text-align:center;"><img src="cid:pauta" width="150" height="72" alt="" style="display:block;width:150px;height:72px;max-width:100%;margin:0 auto;border:0;"></td>
      <td class="stack100" valign="middle" style="width:60%;padding:0 18px;text-align:center;">
        <div class="h2m" style="font-family:${SERIF};font-size:21px;line-height:29px;letter-spacing:3px;color:${K.titulo};">CONHEÇA TODA A COLEÇÃO<br>BOTÂNICA IMPERIAL</div>
        <div class="txtm" style="font-family:${SANS};font-size:15px;line-height:23px;color:${K.texto};margin-top:12px;">Perfumes 100% naturais e veganos, compostos com óleos essenciais puros e livres de sintéticos. Encontre a composição que soa como você.</div>
        <div style="padding-top:22px;">${botao(L.botanica, 'CONHECER A COLEÇÃO&nbsp;&rsaquo;', K.douradoEscuro, 280)}</div>
      </td>
      <td class="hide-mobile" valign="middle" align="center" style="width:20%;text-align:center;"><img src="cid:pauta" width="150" height="72" alt="" style="display:block;width:150px;height:72px;max-width:100%;margin:0 auto;border:0;"></td>
    </tr>
  </table>
</td></tr>

<!-- 9a. RODAPÉ: LOGO + SELOS (logo | 2 selos | 2 selos) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:30px 20px 24px 20px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100" valign="middle" align="center" style="width:20%;padding:0 6px;text-align:center;">
        <a href="${L.home}" style="text-decoration:none;">
          <img src="cid:folha" width="26" height="26" alt="" style="display:block;width:26px;height:26px;max-width:100%;margin:0 auto 4px auto;border:0;">
          <div style="font-family:${SERIF};font-size:18px;line-height:22px;letter-spacing:3px;color:${K.titulo};">ESSÊNCIA</div>
          <div style="font-family:${SERIF};font-size:9px;line-height:14px;letter-spacing:4px;color:${K.douradoEscuro};">DO BRASIL</div>
        </a>
      </td>
      <td class="stack100 mob-pad-top" valign="top" style="width:40%;padding:0;">${parSelos(selo('seloCoelho', 'LIVRE DE CRUELDADE<br>ANIMAL'), selo('seloFolha', 'FEITO COM INGREDIENTES<br>NATURAIS'))}</td>
      <td class="stack100 mob-pad-top" valign="top" style="width:40%;padding:0;">${parSelos(selo('seloGota', 'COM ÓLEOS ESSENCIAIS<br>PUROS'), selo('seloBrasil', 'FABRICADO NO BRASIL,<br>COM AMOR'))}</td>
    </tr>
  </table>
</td></tr>

<!-- 9b. RODAPÉ: LINKS + REDE SOCIAL (links | instagram) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:0 20px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-top:1px solid ${K.linhaClara};">
    <tr>
      <td class="footer-col" valign="middle" style="width:80%;padding:18px 10px;text-align:left;">
        <div style="font-family:${SANS};font-size:10px;line-height:22px;letter-spacing:1.5px;color:${K.texto};">
          ${navLink(L.masculinos, 'PERFUMES MASCULINOS', K.texto)}${sep}${navLink(L.quemSomos, 'SOBRE A MARCA', K.texto)}${sep}${navLink(L.contato, 'ATENDIMENTO', K.texto)}${sep}${navLink(L.oleos, 'ÓLEOS ESSENCIAIS', K.texto)}
        </div>
      </td>
      <td class="footer-col" valign="middle" style="width:20%;padding:18px 10px;text-align:right;">
        <a href="${L.instagram}" style="text-decoration:none;display:inline-block;"><img src="cid:instagram" width="22" height="22" alt="Instagram" style="display:inline-block;width:22px;height:22px;max-width:100%;border:0;"></a>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 10. FAIXA LEGAL / DESCADASTRO -->
<tr><td bgcolor="${K.escuro}" style="background:${K.escuro};padding:0 20px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="footer-col" valign="middle" style="width:70%;padding:18px 10px;text-align:left;">
        <div style="font-family:${SANS};font-size:11px;line-height:17px;color:${K.claroSuave};">${compliance}</div>
      </td>
      <td class="footer-col" valign="middle" style="width:30%;padding:18px 10px;text-align:right;">
        <div style="font-family:${SANS};font-size:11px;line-height:17px;color:${K.claroSuave};">&copy; Essência do Brasil. Todos os direitos reservados.</div>
      </td>
    </tr>
  </table>
</td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;
}

function validarTemplateComposicao_() {
  const C = COMPOSICAO;
  const html = montarHtmlComposicao_();
  const inlineImages = getInlineImagesComposicao_();
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

  // Regra 7 e 8: toda imagem com max-width:100% e width/height no HTML.
  (html.match(/<img\b[^>]*>/gi) || []).forEach(function (t) {
    if (!/max-width:100%/i.test(t) || !/\swidth="\d+"/.test(t) || !/\sheight="\d+"/.test(t)) erros.push('Regra 7/8: img sem max-width:100% ou width/height: ' + t.slice(0, 80));
  });

  // Regra 13: classes da media query com width e padding precisam de box-sizing.
  const css = (html.match(/<style>([\s\S]*?)<\/style>/) || [])[1] || '';
  (css.match(/\.[a-z0-9-]+\{[^}]*\}/gi) || []).forEach(function (r) {
    if ((/width:100%/.test(r) || /padding/.test(r)) && !/box-sizing:border-box/.test(r)) erros.push('Regra 13: ' + r);
  });

  // Regra 21: td que muda na media query não pode ter atributo width=.
  (html.match(/<td\b[^>]*>/gi) || []).forEach(function (t) {
    if (/class="[^"]*\b(stack100|footer-col|hide-mobile|colsep|grid-desk|tagline|mob-pad)\b/.test(t) && /\swidth="/.test(t)) erros.push('Regra 21: td com classe de media query e atributo width=: ' + t.slice(0, 80));
  });

  // Regra 24: duas versões do hero alternando.
  if (!html.includes(C.img.heroDesktop) || !html.includes(C.img.heroMobile)) erros.push('Regra 24: hero desktop e mobile precisam estar presentes.');
  if (!/class="banner-desktop"[^>]*style="display:block/.test(html) || !/class="banner-mobile"[^>]*style="display:none/.test(html)) erros.push('Regra 24: estado padrão do hero incorreto.');
  if (!css.includes('.banner-desktop{display:none!important') || !css.includes('.banner-mobile{display:block!important')) erros.push('Regra 24: alternância do hero ausente na media query.');

  // Regra 23: todas as fotos com link https público, nenhuma via cid; e toda foto dentro de um link.
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

function enviarTesteComposicao() {
  validarTemplateComposicao_();
  const destinatario = Session.getActiveUser().getEmail();
  if (!destinatario) throw new Error('Não foi possível obter o e-mail do usuário ativo via Session.getActiveUser().getEmail().');

  GmailApp.sendEmail(
    destinatario,
    COMPOSICAO.subject,
    'Um perfume também tem composição. Abra este e-mail em um cliente compatível com HTML para ver a versão completa.',
    {
      htmlBody: montarHtmlComposicao_(),
      inlineImages: getInlineImagesComposicao_(),
      name: 'Essência do Brasil'
    }
  );
}
