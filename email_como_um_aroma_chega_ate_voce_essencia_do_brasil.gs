/**
 * Essência do Brasil — Como um aroma chega até você?
 * Assunto aprovado: E se o mais bonito fosse o caminho?
 * Template GmailApp.sendEmail — HTML baseado em tabelas, estilos inline.
 * Fotos e banner hero: links públicos (regra 23). Ícones: PNG inline via cid (regra 8).
 * Toda foto fica dentro de um link, para o Gmail não mostrar o atalho de download.
 */

const CAMINHO = {
  subject: 'E se o mais bonito fosse o caminho?',
  preheader: 'Existe uma história inteira antes do primeiro borrifo.',
  maxWidth: 900,
  breakpoint: 920, // maxWidth + 20 (regra 12)
  cores: {
    creme: '#F5EFE4',
    titulo: '#2B241D',
    texto: '#5A5048',
    suave: '#857868',
    dourado: '#C9A45C',
    douradoEscuro: '#A8803F',
    verde: '#1F2A1C',
    verdeLinha: '#3A4634',
    marrom: '#3D2A1E',
    claro: '#F5EFE4',
    claroSuave: '#D8CCB6',
    botao: '#2E2A22',
    fundoFechamento: '#E8B46E'
  },
  img: {
    heroDesktop: 'https://i.ibb.co/RRyPjPk/hero-desktop-essencia-1200x583.jpg',
    heroMobile: 'https://i.ibb.co/PzQDfGZw/hero-mobile-essencia-750x1334.jpg',
    etapa1: 'https://i.ibb.co/cXtynrsj/jornada-01-materia-prima-280.jpg',
    etapa2: 'https://i.ibb.co/9kgY18hm/jornada-02-criacao-280.jpg',
    etapa3: 'https://i.ibb.co/ZRZD94GD/jornada-03-producao-280.jpg',
    etapa4: 'https://i.ibb.co/q3wBC9DP/jornada-04-cuidado-280.jpg',
    etapa5: 'https://i.ibb.co/Z1Kp1hDc/jornada-05-caminho-280.jpg',
    etapa6: 'https://i.ibb.co/h1ysLzMV/jornada-06-chegada-280.jpg',
    folhagem: 'https://i.ibb.co/JfpfTdr/secao4-folhagem-escurecida-1200x600.jpg',
    unboxing: 'https://i.ibb.co/3Y5yBkg4/secao5-bergamota-unboxing-600x600.jpg',
    paisagem: 'https://i.ibb.co/bgCCDb1q/secao7-paisagem-1200x600.jpg',
    bergamota: 'https://i.ibb.co/Xrpwf900/card-1-bergamota-da-italia-440.jpg',
    anis: 'https://i.ibb.co/XxtcKXw3/card-2-anis-estrelado-440.jpg',
    olibano: 'https://i.ibb.co/XvJyQB5/card-3-olibano-sagrado-440.jpg',
    patchouli: 'https://i.ibb.co/93ZpbMNy/card-4-patchouli-dark-misterioso-440.jpg'
  },
  links: {
    home: 'https://essenciadobrasil.com.br/',
    produtos: 'https://essenciadobrasil.com.br/produtos/',
    botanica: 'https://essenciadobrasil.com.br/colecoes/botanica-imperial/',
    femininos: 'https://essenciadobrasil.com.br/perfumes-femininos/',
    masculinos: 'https://essenciadobrasil.com.br/perfumes-masculinos/',
    contato: 'https://essenciadobrasil.com.br/contato/',
    instagram: 'https://instagram.com/essenciadobrasil.com.br',
    bergamota: 'https://essenciadobrasil.com.br/produtos/perfume-bergamota-da-italia-masculino-100ml-natural-e-vegano/',
    anis: 'https://essenciadobrasil.com.br/produtos/perfume-anis-estrelado-feminino-100ml-natural-e-vegano/',
    olibano: 'https://essenciadobrasil.com.br/produtos/perfume-olibano-sagrado-masculino-100ml-natural-e-vegano/',
    patchouli: 'https://essenciadobrasil.com.br/produtos/perfume-patchouli-dark-misterioso-feminino-100ml-natural/'
  }
};

function getInlineImagesCaminho_() {
  // PNGs transparentes, traço plano, cor única com 16 níveis de alfa, exportados em 2x o tamanho de exibição:
  // folha (folhinha dourada da logo em HTML, 56px para exibir em 24–28px, ~0,4 KB),
  // instagram (rede social, traço creme, 48px para exibir em 24px, ~0,4 KB).
  const b64 = {
    folha: 'iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAM1BMVEXJpFzJpFzJpFzJpFzJpFzJpFzJpFzJpFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhIOYfAAAAEXRSTlMA/tduSimOsgAAAAAAAAAAANGD9+sAAAEGSURBVHja7ZVLDoMwDEQdf+9/4zalCEjCxLCoVInZwILB9otjEz36U5nadY8El6rQCy79mhZlnep7V42ZsknjqrppK8Wu2tZKZ7W10Zzs82SMP9oEhSi+P0BZtjZWMp4eRx+OjXR9Bb6OZexykHMqHf93VT4/xa68DQtE451PD7lbGqcdcvdsfdH86ySgQSwAKSMs4AwFYgFNwwgLICMQC2g2RljAESrCgm6FIyzoGsYBC5f0bOPdN6MOmhp91LE0N8rghuD5FCu70eBA8uWTfnDwbCGNuiy1K4JPBsdMXNwH8zThK3fCVZbcrBnPLEJf2n+zhuQWL6/tr+LucmHTs9CjRz/QC9umBey6hiUbAAAAAElFTkSuQmCC',
    instagram: 'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEX17+T17+T17+T17+T17+T17+T17+T17+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJRLX+AAAAEXRSTlMA/kUnaLHSjAAAAAAAAAAAACFg1gsAAAEbSURBVHjavVVbDsMwCEsJhvvfeFqTLg8gUaSp/tpazMsUUnoZ2UFsrHK5EPVIGdcCMBS6NuDRnmtsdlAzVeMfFFaHKUY2HmbcGbQ6sLMvDOkDSNxtiFanT87a/baQEv7rFe1RHODuh5QQj9WygrshqFXk36NRFlKIQOkpV3INRS6hDUkZiEy/3FwCBwMREeqQADIxAkLuUsEgb0BA/4e73geEXp5Kz0uCDjN2v9IlAZPo0gL6BJlE1+bgT4TjlI6LPm7rsXDno3E8fOfjbT+gLWH6RC0h7ddYGpbAes0MmvjyxusGvrw+hvUIezC8BSjjduOdfb9/2b9j7VyaA6JFKCYHXISEd+QWMEqRrMzFux+EiLM4l14NOb2LD+/AB3OGTBxmAAAAAElFTkSuQmCC'
  };
  const out = {};
  Object.keys(b64).forEach(function (k) {
    out[k] = Utilities.newBlob(Utilities.base64Decode(b64[k]), 'image/png', k + '.png');
  });
  return out;
}

function montarHtmlCaminho_() {
  const C = CAMINHO;
  const K = C.cores;
  const L = C.links;
  const I = C.img;
  const SERIF = "Georgia,'Times New Roman',serif";
  const SANS = 'Arial,Helvetica,sans-serif';

  const linha = (cor) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;"><tr><td height="1" style="height:1px;line-height:1px;font-size:0;background:${cor};">&nbsp;</td></tr></table>`;
  const traco = (cor, alinhar) => `<table role="presentation" width="48" cellpadding="0" cellspacing="0" border="0" align="${alinhar}" style="width:48px;${alinhar === 'center' ? 'margin:0 auto;' : ''}"><tr><td height="2" style="height:2px;line-height:2px;font-size:0;background:${cor};">&nbsp;</td></tr></table>`;
  const navLink = (href, txt, cor) => `<a href="${href}" style="color:${cor};text-decoration:none;white-space:nowrap;">${txt}</a>`;
  const sep = (cor) => ` <span style="color:${cor};">|</span> `;
  const menu = (cor, corSep) => [
    navLink(L.produtos, 'NOSSOS PRODUTOS', cor),
    navLink(L.botanica, 'BOTÂNICA IMPERIAL', cor),
    navLink(L.femininos, 'PERFUMES FEMININOS', cor),
    navLink(L.masculinos, 'PERFUMES MASCULINOS', cor)
  ].join(sep(corSep));

  const botao = (href, txt, fundo, borda, largura) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="width:100%;max-width:${largura}px;table-layout:fixed;margin:0 auto;">
  <tr><td bgcolor="${fundo}" style="background:${fundo};border:1px solid ${borda};padding:11px 8px;text-align:center;">
    <a href="${href}" class="btnm" style="display:block;font-family:${SANS};font-size:11px;line-height:15px;font-weight:bold;letter-spacing:2px;color:${K.claro};text-decoration:none;">${txt}</a>
  </td></tr>
</table>`;

  // Logo em HTML: folha (ícone) + ESSÊNCIA + DO BRASIL.
  const logo = (corNome, corSub, folha, nome, sub) => `
<a href="${L.home}" style="text-decoration:none;">
  <img src="cid:folha" width="${folha}" height="${folha}" alt="" style="display:block;width:${folha}px;height:${folha}px;max-width:100%;margin:0 auto 4px auto;border:0;">
  <div style="font-family:${SERIF};font-size:${nome}px;line-height:${nome + 4}px;letter-spacing:5px;color:${corNome};text-align:center;">ESSÊNCIA</div>
  <div style="font-family:${SERIF};font-size:${sub}px;line-height:${sub + 6}px;letter-spacing:5px;color:${corSub};text-align:center;">DO BRASIL</div>
</a>`;

  // ---------- Seção 3: jornada (6 etapas) ----------
  const E = [
    { img: 'etapa1', num: '01', rot: 'MATÉRIA-PRIMA', txt: 'Tudo começa na planta: uma fruta, uma flor, uma resina.', alt: 'Folha com uma gota de óleo dourado' },
    { img: 'etapa2', num: '02', rot: 'CRIAÇÃO', txt: 'Óleos essenciais puros encontram sua composição.', alt: 'Conta-gotas pingando óleo em um frasco âmbar' },
    { img: 'etapa3', num: '03', rot: 'PRODUÇÃO', txt: 'Em concentração dobrada, o óleo essencial vira perfume.', alt: 'Frascos de vidro âmbar sobre a bancada' },
    { img: 'etapa4', num: '04', rot: 'CUIDADO', txt: 'Cada frasco é embalado ao som de música clássica.', alt: 'Mãos fechando a caixa Essência do Brasil' },
    { img: 'etapa5', num: '05', rot: 'CAMINHO', txt: 'A encomenda deixa nossas mãos e começa sua jornada.', alt: 'Estrada sinuosa ao pôr do sol' },
    { img: 'etapa6', num: '06', rot: 'CHEGADA', txt: 'Até que, finalmente, a caixa chega até você.', alt: 'Caixa Essência do Brasil diante da porta de casa' }
  ];
  const fotoEtapa = (e, px) => `<a href="${L.botanica}" style="text-decoration:none;"><img src="${I[e.img]}" width="${px}" height="${px}" alt="${e.alt}" style="display:block;width:${px}px;max-width:100%;height:auto;margin:0 auto;border:0;"></a>`;
  const textoEtapa = (e, tam) => `
<div style="font-family:${SERIF};font-size:${tam + 2}px;line-height:${tam + 6}px;color:${K.douradoEscuro};">${e.num}</div>
<div style="font-family:${SERIF};font-size:${tam - 1}px;line-height:${tam + 4}px;letter-spacing:1.5px;color:${K.titulo};margin-top:4px;">${e.rot}</div>
<div style="font-family:${SANS};font-size:${tam}px;line-height:${tam + 6}px;color:${K.texto};margin-top:6px;">${e.txt}</div>`;
  // Desktop: as fotos ficam na mesma altura, ligadas por um fio dourado (o "caminho");
  // os textos alternam a altura, ecoando o ziguezague do modelo.
  const fio = (visivel) => visivel
    ? `<td valign="middle" style="width:12%;">${linha(K.dourado)}</td>`
    : `<td style="width:12%;font-size:0;line-height:0;">&nbsp;</td>`;
  const jornadaDesktop = `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
  <tr>${E.map((e, i) => `<td width="16.66%" valign="middle" style="width:16.66%;padding:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;"><tr>${fio(i > 0)}<td valign="middle" align="center" style="width:76%;text-align:center;">${fotoEtapa(e, 120)}</td>${fio(i < E.length - 1)}</tr></table>
  </td>`).join('')}</tr>
  <tr>${E.map((e, i) => `<td width="16.66%" valign="top" align="center" style="width:16.66%;padding:${i % 2 ? '30px' : '12px'} 8px 0 8px;text-align:center;">${textoEtapa(e, 12)}</td>`).join('')}</tr>
</table>`;
  // Celular: grade 2 x 3 (mostrada só pela media query; oculta por padrão e no Outlook).
  const jornadaMobile = [0, 2, 4].map((n) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
  <tr>${[E[n], E[n + 1]].map((e) => `<td width="50%" valign="top" align="center" style="width:50%;padding:${n ? '24px' : '0'} 12px 0 12px;text-align:center;">${fotoEtapa(e, 110)}<div style="padding-top:10px;">${textoEtapa(e, 13)}</div></td>`).join('')}</tr>
</table>`).join('');

  // ---------- Seção 6: vitrine (4 produtos) ----------
  const P = [
    { chave: 'bergamota', nome: 'Bergamota da Itália', linhaProd: 'MASCULINO · 100ML', alt: 'Perfume Bergamota da Itália Masculino 100ml com bergamota', desc: 'A luz cítrica dos campos italianos, repousando sobre vanilina e cedrol.' },
    { chave: 'anis', nome: 'Anis Estrelado', linhaProd: 'FEMININO · 100ML', alt: 'Perfume Anis Estrelado Feminino 100ml com anis estrelado', desc: 'Fresco e exótico: uma saída cítrica que se abre em flor e especiaria, sobre madeira suave.' },
    { chave: 'olibano', nome: 'Olíbano Sagrado', linhaProd: 'MASCULINO · 100ML', alt: 'Perfume Olíbano Sagrado Masculino 100ml com resina de olíbano', desc: 'A profundidade resinosa do olíbano, aberta em notas cítricas e acalmada por um fundo amadeirado.' },
    { chave: 'patchouli', nome: 'Patchouli Dark Misterioso', linhaProd: 'FEMININO · 100ML', alt: 'Perfume Patchouli Dark Misterioso Feminino 100ml com folhas de patchouli', desc: 'Terroso e enigmático: começa luminoso e se aprofunda num rastro amadeirado, levemente doce.' }
  ];
  const fotoProduto = (p, max) => `<a href="${L[p.chave]}" style="text-decoration:none;"><div style="max-width:${max}px;margin:0 auto;"><img src="${I[p.chave]}" width="440" height="440" alt="${p.alt}" style="display:block;width:100%;max-width:100%;height:auto;margin:0 auto;border:0;"></div></a>`;
  const nomeProduto = (p, tam) => `<a href="${L[p.chave]}" style="text-decoration:none;"><span style="font-family:${SERIF};font-size:${tam}px;line-height:${tam + 5}px;color:${K.titulo};">${p.nome}</span></a>`;
  const linhaProduto = (p) => `<div style="font-family:${SANS};font-size:10px;line-height:14px;letter-spacing:1.5px;color:${K.douradoEscuro};">${p.linhaProd}</div>`;
  const descProduto = (p, tam) => `<div style="font-family:${SANS};font-size:${tam}px;line-height:${tam + 6}px;color:${K.texto};">${p.desc}</div>`;

  // Desktop: grade 4 colunas montada em linhas, para nome, texto e botões ficarem alinhados.
  const linhaGrade = (fn, estilo) => `<tr>${P.map((p) => `<td width="25%" valign="top" align="center" style="width:25%;text-align:center;${estilo}">${fn(p)}</td>`).join('')}</tr>`;
  const vitrineDesktop = `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
  ${linhaGrade((p) => fotoProduto(p, 200), 'padding:0 10px;')}
  ${linhaGrade((p) => nomeProduto(p, 18), 'padding:16px 10px 0 10px;')}
  ${linhaGrade((p) => linhaProduto(p), 'padding:6px 10px 0 10px;')}
  ${linhaGrade((p) => descProduto(p, 12.5), 'padding:10px 14px 0 14px;')}
  ${linhaGrade((p) => botao(L[p.chave], 'CONHECER', K.botao, K.botao, 160), 'padding:18px 12px 0 12px;')}
</table>`;
  // Celular: grade 2 x 2, também montada em linhas para os botões ficarem alinhados.
  const linhaPar = (par, fn, estilo) => `<tr>${par.map((p) => `<td width="50%" valign="top" align="center" style="width:50%;text-align:center;${estilo}">${fn(p)}</td>`).join('')}</tr>`;
  const vitrineMobile = [0, 2].map((n) => {
    const par = [P[n], P[n + 1]];
    return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
  ${linhaPar(par, (p) => fotoProduto(p, 220), `padding:${n ? '30px' : '0'} 8px 0 8px;`)}
  ${linhaPar(par, (p) => nomeProduto(p, 17), 'padding:12px 8px 0 8px;')}
  ${linhaPar(par, (p) => linhaProduto(p), 'padding:5px 8px 0 8px;')}
  ${linhaPar(par, (p) => descProduto(p, 13), 'padding:8px 8px 0 8px;')}
  ${linhaPar(par, (p) => botao(L[p.chave], 'CONHECER', K.botao, K.botao, 160), 'padding:14px 8px 0 8px;')}
</table>`;
  }).join('');

  const compliance = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Como um aroma chega até você?</title>
<style>
@media only screen and (max-width:${C.breakpoint}px){
  .stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
  .footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;text-align:center!important;padding:12px 20px!important;border-left:0!important;border-right:0!important;}
  .banner-desktop{display:none!important;max-height:0!important;overflow:hidden!important;}
  .banner-mobile{display:block!important;max-height:none!important;}
  .grid-desk{display:none!important;max-height:0!important;overflow:hidden!important;}
  .grid-mob{display:block!important;max-height:none!important;overflow:visible!important;}
  .hdr-logo{padding:22px 16px 8px 16px!important;box-sizing:border-box!important;}
  .hdr-nav{text-align:center!important;padding:6px 16px 20px 16px!important;box-sizing:border-box!important;}
  .mob-pad{padding:34px 24px!important;box-sizing:border-box!important;}
  .palavras{text-align:center!important;padding:6px 24px 36px 24px!important;box-sizing:border-box!important;}
  .h1m{font-size:24px!important;line-height:31px!important;}
  .txtm{font-size:14px!important;line-height:22px!important;}
  .s4-titulo{font-size:22px!important;line-height:29px!important;color:${K.claro}!important;}
  .s4-sub{font-size:16px!important;line-height:24px!important;color:${K.claroSuave}!important;}
  .s4-txt{font-size:14px!important;line-height:22px!important;color:${K.claro}!important;}
  .s4-palavra{color:${K.claro}!important;}
  .s4-veu{background-color:rgba(14,19,11,0.62)!important;}
  .s7-titulo{font-size:22px!important;line-height:29px!important;color:${K.titulo}!important;}
  .s7-titulo2{font-size:22px!important;line-height:29px!important;color:#6B4A16!important;}
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

<!-- 1. CABEÇALHO (2 colunas: logo | menu) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100 hdr-logo" valign="middle" align="center" style="width:28%;padding:22px 10px 18px 30px;text-align:center;">
        ${logo(K.titulo, K.douradoEscuro, 24, 22, 9)}
      </td>
      <td class="stack100 hdr-nav" valign="middle" style="width:72%;padding:18px 30px 18px 10px;text-align:right;">
        <div style="font-family:${SANS};font-size:10px;line-height:22px;letter-spacing:1.5px;color:${K.douradoEscuro};">${menu(K.douradoEscuro, K.dourado)}</div>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 2. HERO (duas versões, regra 24) -->
<tr><td bgcolor="${K.marrom}" style="background:${K.marrom};padding:0;line-height:0;font-size:0;">
  <a href="${L.botanica}" style="text-decoration:none;">
    <img src="${I.heroDesktop}" class="banner-desktop" width="900" height="437" alt="Como um aroma chega até você? Antes de você abrir uma caixa, existe uma história inteira acontecendo." style="display:block;width:100%;max-width:100%;height:auto;border:0;">
    <!--[if !mso]><!-->
    <img src="${I.heroMobile}" class="banner-mobile" width="600" height="1067" alt="Como um aroma chega até você? Antes de você abrir uma caixa, existe uma história inteira acontecendo." style="display:none;width:100%;max-width:100%;height:auto;max-height:0;overflow:hidden;border:0;">
    <!--<![endif]-->
  </a>
</td></tr>

<!-- 3. JORNADA (6 colunas) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:40px 14px 40px 14px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr><td style="padding:0 20px 30px 20px;text-align:center;">
      <div class="h1m" style="font-family:${SERIF};font-size:28px;line-height:36px;color:${K.titulo};">Antes de chegar até você,</div>
      <div class="h1m" style="font-family:${SERIF};font-size:28px;line-height:36px;font-style:italic;color:${K.douradoEscuro};">cada perfume percorre um caminho.</div>
    </td></tr>
    <tr><td class="grid-desk" style="padding:0;">${jornadaDesktop}</td></tr>
    <tr><td style="padding:0;">
      <!--[if !mso]><!-->
      <div class="grid-mob" style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${jornadaMobile}</div>
      <!--<![endif]-->
    </td></tr>
  </table>
</td></tr>

<!-- 4. BANNER SECUNDÁRIO "CADA DETALHE" (texto | palavras, sobre foto de folhagem) -->
<tr><td bgcolor="${K.verde}" style="background-color:${K.verde};background-image:url('${I.folhagem}');background-size:cover;background-position:center center;background-repeat:no-repeat;padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="s4-veu" style="width:100%;table-layout:fixed;background-color:rgba(14,19,11,0.45);">
    <tr>
      <td class="stack100 mob-pad" valign="middle" style="width:64%;padding:54px 30px 54px 52px;">
        <div class="s4-titulo" style="text-shadow:0 1px 3px rgba(0,0,0,0.65);font-family:${SERIF};font-size:30px;line-height:38px;color:${K.claro};">Cada detalhe faz parte do caminho:</div>
        <div class="s4-sub" style="text-shadow:0 1px 3px rgba(0,0,0,0.65);font-family:${SERIF};font-size:19px;line-height:27px;color:${K.claroSuave};margin-top:6px;">da planta escolhida ao instante em que você abre a caixa.</div>
        <div style="padding:22px 0;">${traco(K.dourado, 'left')}</div>
        <div class="s4-txt" style="text-shadow:0 1px 3px rgba(0,0,0,0.65);font-family:${SANS};font-size:14px;line-height:23px;color:${K.claro};">Na Essência do Brasil, um perfume é mais do que aquilo que cabe no frasco. É a planta que lhe dá nome, o óleo essencial em concentração dobrada, uma composição 100% natural e vegana, e o cuidado com que tudo isso chega até você.</div>
      </td>
      <td class="stack100 palavras" valign="middle" style="width:36%;padding:54px 52px 54px 20px;text-align:left;">
        ${['NATUREZA', 'COMPOSIÇÃO', 'CUIDADO', 'CAMINHO', 'VOCÊ'].map((w) => `<div class="s4-palavra" style="text-shadow:0 1px 3px rgba(0,0,0,0.65);font-family:${SERIF};font-size:12px;line-height:30px;letter-spacing:4px;color:${K.claro};">${w}</div>`).join('')}
      </td>
    </tr>
  </table>
</td></tr>

<!-- 5. BANNER DO PRODUTO PRINCIPAL (texto | foto; no celular a foto vem primeiro) -->
<tr><td bgcolor="${K.marrom}" style="background:${K.marrom};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" dir="rtl" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100" dir="ltr" valign="middle" align="center" style="width:45%;padding:0;line-height:0;font-size:0;text-align:center;">
        <a href="${L.bergamota}" style="text-decoration:none;"><img src="${I.unboxing}" width="600" height="600" alt="Perfume Bergamota da Itália Masculino 100ml dentro da caixa Essência do Brasil" style="display:block;width:100%;max-width:100%;height:auto;margin:0 auto;border:0;"></a>
      </td>
      <td class="stack100 mob-pad" dir="ltr" valign="middle" style="width:55%;padding:30px 36px 30px 52px;text-align:left;">
        <div class="h1m" style="font-family:${SERIF};font-size:30px;line-height:38px;color:${K.claro};">E então,<br>o caminho termina<br>onde o aroma começa.</div>
        <div style="padding:18px 0;">${traco(K.dourado, 'left')}</div>
        <div class="txtm" style="font-family:${SERIF};font-size:17px;line-height:26px;font-style:italic;color:${K.dourado};">A caixa chega. Você abre. E toda essa história se transforma em aroma.</div>
        <div class="txtm" style="font-family:${SANS};font-size:14px;line-height:23px;color:${K.claroSuave};margin-top:14px;">Inspirada nos campos ensolarados da Itália, a <span style="color:${K.claro};">Bergamota da Itália</span> se abre em luz cítrica, fresca como a fruta recém-cortada. No coração, um toque floral e herbáceo suaviza o brilho. No fundo, vanilina e cedrol deixam um rastro quente e amadeirado, que acompanha o dia inteiro.</div>
        <div style="font-family:${SANS};font-size:10px;line-height:14px;letter-spacing:2px;color:${K.dourado};margin-top:18px;">BERGAMOTA DA ITÁLIA · MASCULINO 100ML</div>
        <div style="margin-top:12px;"><a href="${L.bergamota}" style="font-family:${SERIF};font-size:15px;line-height:22px;color:${K.claro};text-decoration:underline;">Conhecer a Bergamota da Itália</a></div>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 6. VITRINE (4 colunas) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:40px 14px 40px 14px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr><td style="padding:0 20px 28px 20px;text-align:center;">
      <div style="font-family:${SANS};font-size:10px;line-height:16px;letter-spacing:4px;color:${K.suave};">QUATRO AROMAS QUE PERCORREM ESSE CAMINHO</div>
      <div class="h1m" style="font-family:${SERIF};font-size:28px;line-height:36px;color:${K.titulo};margin-top:10px;">Da planta ao frasco, do frasco até você.</div>
    </td></tr>
    <tr><td class="grid-desk" style="padding:0;">${vitrineDesktop}</td></tr>
    <tr><td style="padding:0;">
      <!--[if !mso]><!-->
      <div class="grid-mob" style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${vitrineMobile}</div>
      <!--<![endif]-->
    </td></tr>
  </table>
</td></tr>

<!-- 7. BANNER DE FECHAMENTO (sobre foto de paisagem; texto no céu) -->
<tr><td bgcolor="${K.fundoFechamento}" style="background-color:${K.fundoFechamento};background-image:url('${I.paisagem}');background-size:cover;background-position:center center;background-repeat:no-repeat;padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr><td class="mob-pad" style="padding:48px 40px 64px 40px;text-align:center;">
      <div class="s7-titulo" style="font-family:${SERIF};font-size:30px;line-height:38px;color:${K.titulo};">Da natureza até as suas mãos,</div>
      <div class="s7-titulo2" style="font-family:${SERIF};font-size:30px;line-height:38px;font-style:italic;color:#6B4A16;">cada perfume carrega uma história.</div>
      <div style="padding:20px 0 26px 0;">${traco(K.douradoEscuro, 'center')}</div>
      ${botao(L.produtos, 'CONHECER TODOS OS PRODUTOS', K.verde, K.dourado, 300)}
    </td></tr>
  </table>
</td></tr>

<!-- 8a. RODAPÉ (3 colunas: logo | frase | rede social) -->
<tr><td bgcolor="${K.verde}" style="background:${K.verde};padding:34px 20px 26px 20px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="footer-col" valign="middle" align="center" style="width:32%;padding:0 10px;text-align:center;">
        ${logo(K.claro, K.dourado, 24, 20, 9)}
      </td>
      <td class="footer-col" valign="middle" style="width:40%;padding:4px 24px;text-align:left;border-left:1px solid ${K.verdeLinha};border-right:1px solid ${K.verdeLinha};">
        <div style="font-family:${SERIF};font-size:14px;line-height:22px;color:${K.claroSuave};">A natureza inspira.<br>O cuidado transforma.<br>E nós levamos essa essência até você.</div>
      </td>
      <td class="footer-col" valign="middle" align="center" style="width:28%;padding:0 10px;text-align:center;">
        <a href="${L.instagram}" style="text-decoration:none;display:inline-block;"><img src="cid:instagram" width="24" height="24" alt="Instagram" style="display:inline-block;width:24px;height:24px;max-width:100%;border:0;"></a>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 8b. RODAPÉ: MENU -->
<tr><td bgcolor="${K.verde}" style="background:${K.verde};padding:0 40px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-top:1px solid ${K.verdeLinha};">
    <tr><td style="padding:16px 0;text-align:center;">
      <div style="font-family:${SANS};font-size:10px;line-height:22px;letter-spacing:1.5px;color:${K.claroSuave};">${menu(K.claroSuave, K.dourado)}</div>
    </td></tr>
  </table>
</td></tr>

<!-- 8c. RODAPÉ: LINHA FINAL -->
<tr><td bgcolor="${K.verde}" style="background:${K.verde};padding:0 40px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-top:1px solid ${K.verdeLinha};">
    <tr><td style="padding:14px 0 18px 0;text-align:center;">
      <div style="font-family:${SANS};font-size:11px;line-height:20px;color:${K.claroSuave};">Essência do Brasil${sep(K.dourado)}Perfumes naturais e veganos${sep(K.dourado)}${navLink(L.contato, 'Contato', K.claro)}</div>
    </td></tr>
  </table>
</td></tr>

<!-- 9. FAIXA DE DESCADASTRO -->
<tr><td bgcolor="#172014" style="background:#172014;padding:0 40px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr><td style="padding:16px 0 20px 0;text-align:center;">
      <div style="font-family:${SANS};font-size:11px;line-height:17px;color:${K.claroSuave};">${compliance}</div>
    </td></tr>
  </table>
</td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;
}

function validarTemplateCaminho_() {
  const C = CAMINHO;
  const html = montarHtmlCaminho_();
  const inlineImages = getInlineImagesCaminho_();
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

  // Regra 13: classes da media query com width e padding precisam de box-sizing.
  const css = (html.match(/<style>([\s\S]*?)<\/style>/) || [])[1] || '';
  (css.match(/\.[a-z0-9-]+\{[^}]*\}/gi) || []).forEach(function (r) {
    if ((/width:100%/.test(r) || /padding/.test(r)) && !/box-sizing:border-box/.test(r)) erros.push('Regra 13: ' + r);
  });

  // Regra 20: títulos grandes sobre imagem de fundo com fonte reduzida no celular; regra 22: cor própria no celular.
  ['s4-titulo', 's4-sub', 's4-txt', 's7-titulo', 's7-titulo2'].forEach(function (c) {
    const r = (css.match(new RegExp('\\.' + c + '\\{[^}]*\\}')) || [])[0] || '';
    if (!/font-size/.test(r) || !/color/.test(r)) erros.push('Regras 20/22: classe .' + c + ' sem font-size ou cor no celular.');
  });
  if (!/\.s4-palavra\{[^}]*color/.test(css)) erros.push('Regra 22: .s4-palavra sem cor no celular.');

  // Regra 21: td que muda na media query não pode ter atributo width=.
  (html.match(/<td\b[^>]*>/gi) || []).forEach(function (t) {
    if (/class="[^"]*\b(stack100|footer-col|grid-desk|hdr-logo|hdr-nav|mob-pad|palavras)\b/.test(t) && /\swidth="/.test(t)) erros.push('Regra 21: td com classe de media query e atributo width=: ' + t.slice(0, 80));
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
    const antes = html.slice(0, html.indexOf(t));
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
  if (/&nbsp;\s*(<span[^>]*>)?\s*(\||•|·)\s*(<\/span>)?\s*&nbsp;/.test(html)) erros.push('Regra 6: separador entre &nbsp;.');

  // Regra 15: texto de descadastro literal.
  const compliance = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';
  if (!html.includes(compliance)) erros.push('Regra 15: texto de descadastro alterado.');

  // Gmail corta mensagens com HTML acima de ~102 KB.
  if (Utilities.newBlob(html).getBytes().length > 100000) erros.push('HTML acima de 100 KB: risco de corte no Gmail.');

  if (erros.length) throw new Error('Template inválido:\n- ' + erros.join('\n- '));
  return true;
}

function enviarTesteCaminho() {
  validarTemplateCaminho_();
  const destinatario = Session.getActiveUser().getEmail();
  if (!destinatario) throw new Error('Não foi possível obter o e-mail do usuário ativo via Session.getActiveUser().getEmail().');

  GmailApp.sendEmail(
    destinatario,
    CAMINHO.subject,
    'Como um aroma chega até você? Abra este e-mail em um cliente compatível com HTML para ver a versão completa.',
    {
      htmlBody: montarHtmlCaminho_(),
      inlineImages: getInlineImagesCaminho_(),
      name: 'Essência do Brasil'
    }
  );
}
