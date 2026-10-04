/**
 * Essência do Brasil — Nem todo cuidado é visível.
 * Assunto aprovado: Quem cuida de quem cuida de tudo?
 * Campanha institucional + educativa, sem produtos e sem alegações terapêuticas.
 * Template GmailApp.sendEmail — HTML baseado em tabelas, estilos inline.
 * Fotos e banner hero: links públicos (regra 23). Ícone: PNG inline via cid (regra 8).
 */

const NEM_TODO_CUIDADO = {
  subject: 'Quem cuida de quem cuida de tudo?',
  preheader: 'Às vezes, o cuidado começa quando você decide parar por alguns minutos.',
  maxWidth: 800,
  breakpoint: 820, // maxWidth + 20 (regra 12)
  cores: {
    creme: '#F7F3EC',
    bege: '#ECE9E2',
    verde: '#23382B',
    dourado: '#B08A5A',
    texto: '#3F3B35',
    suave: '#5E584F',
    pessego: '#F3D3B5',
    linha: '#DCD3C4',
    textoClaro: '#EFE8DA'
  },
  img: {
    heroDesktop: 'https://i.ibb.co/MDHhKNdD/hero-desktop.jpg',
    heroMobile: 'https://i.ibb.co/B5VRWT23/hero-mobile.jpg',
    ilustracao: 'https://i.ibb.co/rR8XTDCR/ilustracao-folhas.png',
    respirar: 'https://i.ibb.co/yF5t54kW/card-respirar.jpg',
    pausar: 'https://i.ibb.co/670F8vfg/card-pausar.jpg',
    // Os nomes dos dois arquivos hospedados ficaram trocados: "card-pedir-ajuda.jpg" é a foto das mãos
    // com água (CUIDAR) e "card-cuidar.jpg" é a foto da janela ao nascer do sol (PEDIR AJUDA).
    cuidar: 'https://i.ibb.co/kV0nH2zs/card-pedir-ajuda.jpg',
    pedirAjuda: 'https://i.ibb.co/KccQ6p5V/card-cuidar.jpg',
    institucional: 'https://i.ibb.co/zWQ65Z2T/bloco-institucional.jpg',
    fechamento: 'https://i.ibb.co/fz6wJXsW/banner-fechamento.jpg'
  },
  links: {
    home: 'https://essenciadobrasil.com.br/',
    quemSomos: 'https://essenciadobrasil.com.br/quem-somos/',
    contato: 'https://essenciadobrasil.com.br/contato/',
    instagram: 'https://instagram.com/essenciadobrasil.com.br',
    cvv: 'https://cvv.org.br/'
  }
};

function getInlineImagesNemTodoCuidado_() {
  // PNG transparente, traço linear plano em verde da marca, 44px de arquivo para exibição em 22px (~0,7 KB).
  const b64 = {
    instagram: 'iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAMFBMVEUHYgciNyogMClVVVUAf38fNysAAAAjOSs6PTsiNyoAVVUhOSwYOy8iNioiOCoiOCpyHQmeAAAAEHRSTlMDrxYDAkAA+wZnAykPRs+OAGyHBwAAAkFJREFUeNpt001IFGEYwPH/vPM6M4gHO0QfBxkW6qAW0lqXpAYiKOggFBhRMEUuFSkLgQUFbaciDBYiyUssakKhsZARBsYkhRFSgZdCWubQ56EYEHN23B27zG4z4HP88fDwfLyvkmG9EABs/Q8jAEgAy/mei7SCrNR4tu1GPmL9aZ8LKBnQ2txYWUM3HQRwJq74va9BgrYF/WohQu1QfvBIEYlM5fXjffXk+Wv5PUUk8zt48DNV0xbnlnG3qgp2uXqjXarF3MWVgn8Udbeiq5s+1KebbDx22LU/iVWf8yEAqRTVBrv88TGeK9RJmk0ASiUeAhgMIZimAGA1XEp3n13O6q2SNSRgFUG+mWji2wVvpGVCiXbiAPOnm6D86HfwRar1xSLTLnoW//Z2M7Zvul5idI7luFly4+x49EwtDqB0xa9Dg20MwrBZbrZiLARLY2B7uIkiFfpt4Ad2oghoAEvJywNDAONJDgVqAIU8bqLv1aw/AL0uHU6cLY9RU7SjnUrUnrlP6F93GT6QYHUuRzmP0e0kO2kdyILeU+tE1toeDjtPfI6e3Apq2l/OvvWgVfn6/J3lAmu6XBEs4LmAFqRSlgOs+vQjhME9CaCVSg6AmqHZFOEa6t9C7Gma3TiO5P2r3FCjaUYYtozawZSpZIKdv4KDxXpy5Zmt/EHJUNlI0G7VdJ/N/iJKBmvzdOKXhcsVBLx4kotrsOEkqGnU6sydmbpe0WYXouH3ntvWEWn1cqDVduKYi4v1c43b0QdcJ/4B4mXFaXRimwsAAAAASUVORK5CYII='
  };
  const out = {};
  Object.keys(b64).forEach(function (k) {
    out[k] = Utilities.newBlob(Utilities.base64Decode(b64[k]), 'image/png', k + '.png');
  });
  return out;
}

function montarHtmlNemTodoCuidado_() {
  const C = NEM_TODO_CUIDADO;
  const K = C.cores;
  const L = C.links;
  const I = C.img;
  const SERIF = "Georgia,'Times New Roman',serif";
  const SANS = 'Arial,Helvetica,sans-serif';

  const filete = (largura, alinhamento) => `<table role="presentation" width="${largura}" cellpadding="0" cellspacing="0" border="0" align="${alinhamento}" style="width:${largura}px;${alinhamento === 'center' ? 'margin:0 auto;' : ''}"><tr><td height="1" style="height:1px;line-height:1px;font-size:0;background:${K.dourado};">&nbsp;</td></tr></table>`;

  const card = (c) => `
<td width="50%" valign="top" align="center" style="width:50%;padding:0 8px;text-align:center;">
  <a href="${L.quemSomos}" style="text-decoration:none;"><img src="${c.img}" width="184" height="184" alt="${c.alt}" style="display:block;width:100%;max-width:100%;height:auto;margin:0 auto;border:0;"></a>
  <div style="font-family:${SERIF};font-size:13px;line-height:18px;letter-spacing:2.5px;color:${K.verde};margin-top:14px;">${c.nome}</div>
  <div class="cardtxt" style="font-family:${SERIF};font-size:14px;line-height:20px;color:${K.suave};margin-top:6px;">${c.txt}</div>
</td>`;
  const parCards = (a, b) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
  <tr>${card(a)}${card(b)}</tr>
</table>`;

  const G = {
    respirar: { img: I.respirar, alt: 'Mulher de olhos fechados respirando ao sol', nome: 'RESPIRAR', txt: 'Abrir a janela e deixar o ar entrar devagar.' },
    pausar: { img: I.pausar, alt: 'Xícara de chá e livro sobre mesa de madeira', nome: 'PAUSAR', txt: 'Alguns minutos longe das telas e dos avisos.' },
    cuidar: { img: I.cuidar, alt: 'Mãos recolhendo água com pétalas', nome: 'CUIDAR', txt: 'Um banho sem pressa, um canto em ordem.' },
    pedirAjuda: { img: I.pedirAjuda, alt: 'Janela aberta para o nascer do sol', nome: 'PEDIR AJUDA', txt: 'Reconhecer quando é hora de buscar apoio profissional.' }
  };

  const heroAlt = 'Nem todo cuidado é visível. Às vezes, ele começa quando você decide parar por alguns minutos.';
  const compliance = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Nem todo cuidado é visível.</title>
<style>
@media only screen and (max-width:${C.breakpoint}px){
  .stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
  .footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;text-align:center!important;padding:12px 16px!important;border-left:none!important;}
  .hide-mobile{display:none!important;max-height:0!important;overflow:hidden!important;}
  .banner-desktop{display:none!important;max-height:0!important;overflow:hidden!important;}
  .banner-mobile{display:block!important;max-height:none!important;}
  .head-pad{padding:24px 16px 20px 16px!important;box-sizing:border-box!important;}
  .sec-pad{padding:32px 16px 28px 16px!important;box-sizing:border-box!important;}
  .mob-pad{padding:32px 24px!important;box-sizing:border-box!important;}
  .mob-pad-img{padding:0 24px 32px 24px!important;box-sizing:border-box!important;}
  .mob-gap{padding-top:24px!important;box-sizing:border-box!important;}
  .lembrete-pad{padding:30px 24px!important;box-sizing:border-box!important;}
  .lembrete-ico{padding:0 0 14px 0!important;text-align:center!important;box-sizing:border-box!important;}
  .lembrete-txt{padding:0!important;text-align:center!important;box-sizing:border-box!important;}
  .logo-main{font-size:26px!important;line-height:30px!important;letter-spacing:5px!important;}
  .ilu-m{width:150px!important;height:auto!important;}
  .ico-m{width:64px!important;height:auto!important;}
  .txtm{font-size:16px!important;line-height:26px!important;}
  .h3m{font-size:19px!important;line-height:27px!important;}
  .cardtxt{font-size:14px!important;line-height:20px!important;}
  .banner-fecho{padding:40px 24px 64px 24px!important;background-position:center top!important;box-sizing:border-box!important;}
  .banner-title{font-size:20px!important;line-height:29px!important;color:${K.verde}!important;}
}
</style>
</head>
<body style="margin:0;padding:0;background:${K.creme};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:${K.creme};mso-hide:all;">${C.preheader}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${K.creme}" style="width:100%;background:${K.creme};table-layout:fixed;">
<tr><td align="center" style="padding:0;">
<!--[if mso]><table role="presentation" width="${C.maxWidth}" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="width:100%;max-width:${C.maxWidth}px;table-layout:fixed;margin:0 auto;">

<!-- 1. CABEÇALHO (3 colunas: respiro | logo | tagline) -->
<tr><td class="head-pad" bgcolor="${K.creme}" style="background:${K.creme};padding:30px 32px 26px 32px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="hide-mobile" style="width:25%;font-size:0;line-height:0;">&nbsp;</td>
      <td class="stack100" valign="middle" align="center" style="width:50%;text-align:center;">
        <a href="${L.home}" style="text-decoration:none;">
          <div class="logo-main" style="font-family:${SERIF};font-size:30px;line-height:34px;letter-spacing:6px;color:${K.verde};">ESSÊNCIA</div>
          <div style="font-family:${SERIF};font-size:11px;line-height:16px;letter-spacing:5px;color:${K.dourado};margin-top:6px;">DO BRASIL</div>
        </a>
      </td>
      <td class="hide-mobile" valign="middle" style="width:25%;padding-left:28px;text-align:left;">
        <div style="font-family:${SERIF};font-size:10px;line-height:17px;letter-spacing:2.5px;color:${K.suave};">NATUREZA<br>SENTIDOS<br>PRESENÇA<br>EM CADA PAUSA</div>
        <div style="padding-top:8px;">${filete(28, 'left')}</div>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 2. HERO (duas versões, regra 24) -->
<tr><td bgcolor="#E9DFCF" style="background:#E9DFCF;padding:0;line-height:0;font-size:0;">
  <a href="${L.quemSomos}" style="text-decoration:none;">
    <img src="${I.heroDesktop}" class="banner-desktop" width="800" height="365" alt="${heroAlt}" style="display:block;width:100%;max-width:100%;height:auto;border:0;">
    <!--[if !mso]><!-->
    <img src="${I.heroMobile}" class="banner-mobile" width="600" height="900" alt="${heroAlt}" style="display:none;width:100%;max-width:100%;height:auto;max-height:0;overflow:hidden;border:0;">
    <!--<![endif]-->
  </a>
</td></tr>

<!-- 3. TEXTO DE ABERTURA (texto | ilustração) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100 mob-pad" valign="middle" style="width:62%;padding:44px 16px 44px 56px;">
        <div class="txtm" style="font-family:${SERIF};font-size:17px;line-height:28px;color:${K.texto};">Há dias em que tudo pede pressa: mensagens, compromissos, expectativas que se acumulam antes mesmo de o café esfriar. Em meio a esse ritmo, existe um tipo de cuidado que quase ninguém vê, e que ainda assim merece espaço.</div>
        <div class="txtm" style="font-family:${SERIF};font-size:17px;line-height:28px;color:${K.texto};margin-top:16px;">Não se trata de fazer mais. Às vezes, é o contrário: abrir a janela, deixar a água correr devagar, respirar sem pressa. Pequenos gestos que devolvem um pouco de presença ao dia e um pouco de gentileza consigo mesmo.</div>
      </td>
      <td class="stack100 mob-pad-img" valign="middle" align="center" style="width:38%;padding:24px 40px 24px 8px;text-align:center;">
        <a href="${L.quemSomos}" style="text-decoration:none;"><img src="${I.ilustracao}" class="ilu-m" width="220" height="220" alt="" style="display:block;width:220px;max-width:100%;height:auto;margin:0 auto;border:0;"></a>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 4. PEQUENAS PAUSAS (título + grade de 4 colunas; 2x2 no celular) -->
<tr><td class="sec-pad" bgcolor="${K.bege}" style="background:${K.bege};padding:40px 24px 38px 24px;text-align:center;">
  <div style="font-family:${SERIF};font-size:22px;line-height:28px;letter-spacing:6px;color:${K.verde};">PEQUENAS PAUSAS</div>
  <div style="padding:14px 0 14px 0;">${filete(56, 'center')}</div>
  <div style="font-family:${SERIF};font-size:11px;line-height:17px;letter-spacing:2.5px;color:${K.suave};padding:0 8px 26px 8px;">QUATRO GESTOS SIMPLES QUE PODEM CABER NA SUA ROTINA</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100" valign="top" style="width:50%;padding:0;">${parCards(G.respirar, G.pausar)}</td>
      <td class="stack100 mob-gap" valign="top" style="width:50%;padding:0;">${parCards(G.cuidar, G.pedirAjuda)}</td>
    </tr>
  </table>
</td></tr>

<!-- 5. BLOCO INSTITUCIONAL (foto | texto) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100" valign="middle" style="width:50%;padding:0;line-height:0;font-size:0;">
        <a href="${L.quemSomos}" style="text-decoration:none;"><img src="${I.institucional}" width="400" height="320" alt="Sombras de folhas sobre parede clara" style="display:block;width:100%;max-width:100%;height:auto;border:0;"></a>
      </td>
      <td class="stack100 mob-pad" valign="middle" style="width:50%;padding:32px 44px 32px 40px;">
        <div class="h3m" style="font-family:${SERIF};font-size:21px;line-height:30px;color:${K.verde};">Uma luz que atravessa a janela, uma textura, um aroma: os sentidos também fazem parte dos momentos que escolhemos viver com calma.</div>
        <div style="padding:18px 0;">${filete(48, 'left')}</div>
        <div style="font-family:${SERIF};font-size:15px;line-height:24px;color:${K.texto};">Na Essência do Brasil, valorizamos o que é natural, artesanal e feito com respeito à nossa terra. Criamos produtos para experiências sensoriais que podem fazer parte desses pequenos momentos, no tempo e do jeito de cada um.</div>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 6. UM LEMBRETE IMPORTANTE (ícone | divisória | texto) -->
<tr><td class="lembrete-pad" bgcolor="${K.bege}" style="background:${K.bege};padding:34px 48px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100 lembrete-ico" valign="middle" align="center" style="width:20%;text-align:center;">
        <img src="${I.ilustracao}" class="ico-m" width="84" height="84" alt="" style="display:block;width:84px;max-width:100%;height:auto;margin:0 auto;border:0;">
      </td>
      <td class="hide-mobile" valign="middle" align="center" style="width:4%;text-align:center;">
        <table role="presentation" width="1" cellpadding="0" cellspacing="0" border="0" align="center" style="width:1px;margin:0 auto;"><tr><td height="140" bgcolor="${K.dourado}" style="height:140px;line-height:140px;font-size:0;background:${K.dourado};">&nbsp;</td></tr></table>
      </td>
      <td class="stack100 lembrete-txt" valign="middle" style="width:76%;padding-left:24px;text-align:left;">
        <div style="font-family:${SERIF};font-size:13px;line-height:18px;letter-spacing:3px;color:${K.verde};">UM LEMBRETE IMPORTANTE</div>
        <div style="font-family:${SERIF};font-size:14px;line-height:22px;color:${K.texto};margin-top:10px;">Momentos de autocuidado podem fazer parte da rotina, mas não substituem o acompanhamento profissional quando ele é necessário. Cuidar da saúde mental também envolve contar com quem sabe ouvir, e está tudo bem pedir ajuda.</div>
        <div style="font-family:${SERIF};font-size:14px;line-height:22px;color:${K.texto};margin-top:10px;">Se precisar conversar, o CVV atende gratuitamente pelo <strong style="color:${K.verde};">188</strong>, 24 horas por dia, e também pelo site <a href="${L.cvv}" style="color:${K.verde};font-weight:bold;text-decoration:underline;">cvv.org.br</a>.</div>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 7. BANNER DE FECHAMENTO (HTML sobre foto de fundo; cor de reserva pêssego) -->
<tr><td class="banner-fecho" background="${I.fechamento}" bgcolor="${K.pessego}" valign="top" align="center" style="background-color:${K.pessego};background-image:url('${I.fechamento}');background-size:cover;background-position:center center;background-repeat:no-repeat;padding:52px 48px 96px 48px;text-align:center;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="width:100%;max-width:560px;table-layout:fixed;margin:0 auto;">
    <tr><td align="center" style="text-align:center;">
      <div class="banner-title" style="font-family:${SERIF};font-size:26px;line-height:36px;color:${K.verde};">Talvez cuidar de si também seja perceber quando é hora de diminuir o ritmo.</div>
      <div style="padding:18px 0 24px 0;">${filete(64, 'center')}</div>
      <table role="presentation" width="300" cellpadding="0" cellspacing="0" border="0" align="center" style="width:300px;max-width:100%;table-layout:fixed;margin:0 auto;">
        <tr><td bgcolor="${K.verde}" style="background:${K.verde};border-radius:30px;padding:15px 12px;text-align:center;">
          <a href="${L.quemSomos}" style="display:block;font-family:${SERIF};font-size:15px;line-height:20px;color:#FFFFFF;text-decoration:none;">Descubra a Essência do Brasil &rarr;</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</td></tr>

<!-- 8. RODAPÉ (3 colunas com divisórias: logo | assinatura | Instagram) -->
<tr><td class="sec-pad" bgcolor="${K.creme}" style="background:${K.creme};padding:34px 24px 18px 24px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="footer-col" valign="middle" style="width:33%;padding:6px 12px;text-align:center;">
        <a href="${L.home}" style="text-decoration:none;">
          <div style="font-family:${SERIF};font-size:21px;line-height:25px;letter-spacing:4px;color:${K.verde};">ESSÊNCIA</div>
          <div style="font-family:${SERIF};font-size:9px;line-height:14px;letter-spacing:4px;color:${K.dourado};margin-top:4px;">DO BRASIL</div>
        </a>
      </td>
      <td class="footer-col" valign="middle" style="width:34%;padding:6px 12px;text-align:center;border-left:1px solid ${K.linha};">
        <div style="font-family:${SERIF};font-size:11px;line-height:18px;letter-spacing:3px;color:${K.suave};">SINTA ESSA ORIGEM.</div>
      </td>
      <td class="footer-col" valign="middle" style="width:33%;padding:6px 12px;text-align:center;border-left:1px solid ${K.linha};">
        <a href="${L.instagram}" style="text-decoration:none;"><img src="cid:instagram" width="22" height="22" alt="Instagram" style="display:block;width:22px;height:22px;max-width:100%;margin:0 auto 6px auto;border:0;"></a>
        <a href="${L.instagram}" style="font-family:${SANS};font-size:11px;line-height:16px;color:${K.verde};text-decoration:none;overflow-wrap:anywhere;word-break:break-word;">@essenciadobrasil.com.br</a>
      </td>
    </tr>
  </table>
  <div style="font-family:${SANS};font-size:11px;line-height:18px;color:${K.suave};text-align:center;padding-top:24px;">&copy; 2026 Essência do Brasil. Todos os direitos reservados. <span style="color:${K.dourado};">|</span> <a href="${L.contato}" style="color:${K.suave};text-decoration:underline;">Contato</a></div>
</td></tr>

<!-- 9. FAIXA DE DESCADASTRO (regra 15) -->
<tr><td bgcolor="${K.verde}" style="background:${K.verde};padding:18px 32px;text-align:center;">
  <div style="font-family:${SANS};font-size:11px;line-height:17px;color:${K.textoClaro};">${compliance}</div>
</td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;
}

function validarTemplateNemTodoCuidado_() {
  const C = NEM_TODO_CUIDADO;
  const html = montarHtmlNemTodoCuidado_();
  const inlineImages = getInlineImagesNemTodoCuidado_();
  const erros = [];

  // Assunto aprovado na ETAPA 5, sem alteração.
  if (C.subject !== 'Quem cuida de quem cuida de tudo?') erros.push('Assunto diferente do aprovado.');

  // Regras 2 e 12: tabela fluida com max-width e breakpoint = max-width + 20.
  if (C.breakpoint !== C.maxWidth + 20) erros.push('Regra 12: breakpoint deve ser maxWidth + 20.');
  if (!html.includes(`max-width:${C.maxWidth}px;table-layout:fixed`)) erros.push('Regra 2: tabela principal sem width 100% + max-width.');
  if (!html.includes(`@media only screen and (max-width:${C.breakpoint}px)`)) erros.push('Regra 12: media query com breakpoint incorreto.');

  // Regras 4 e 5: toda tabela com width explícito; as de 100% com table-layout:fixed.
  const semMso = html.replace(/<!--\[if mso\]>[\s\S]*?<!\[endif\]-->/g, '');
  (semMso.match(/<table\b[^>]*>/gi) || []).forEach(function (t) {
    if (!/\swidth="/i.test(t) || !/style="[^"]*width:/i.test(t)) erros.push('Regra 4: tabela sem width: ' + t.slice(0, 80));
    if (/\swidth="100%"/i.test(t) && !/table-layout:fixed/i.test(t)) erros.push('Regra 5: tabela 100% sem table-layout:fixed: ' + t.slice(0, 80));
  });

  // Regras 7 e 8: toda imagem com max-width:100% e width/height em HTML.
  (html.match(/<img\b[^>]*>/gi) || []).forEach(function (t) {
    if (!/max-width:100%/i.test(t) || !/\swidth="\d+"/.test(t) || !/\sheight="\d+"/.test(t)) erros.push('Regra 7/8: img sem max-width ou width/height: ' + t.slice(0, 80));
  });

  // Regra 13: classes da media query com width 100% precisam de box-sizing.
  const css = (html.match(/<style>([\s\S]*?)<\/style>/) || [])[1] || '';
  (css.match(/\.[a-z0-9-]+\{[^}]*\}/gi) || []).forEach(function (r) {
    if (/width:100%/.test(r) && !/box-sizing:border-box/.test(r)) erros.push('Regra 13: ' + r);
  });

  // Regra 21: td que muda na media query não pode ter atributo width=.
  ['stack100', 'footer-col', 'hide-mobile'].forEach(function (cls) {
    const re = new RegExp(`<td[^>]*class=["'][^"']*\\b${cls}\\b[^"']*["'][^>]*\\swidth=`, 'i');
    const re2 = new RegExp(`<td[^>]*\\swidth=[^>]*class=["'][^"']*\\b${cls}\\b`, 'i');
    if (re.test(html) || re2.test(html)) erros.push('Regra 21: <td class="' + cls + '"> com atributo width=.');
  });

  // Regras 20 e 22: título do banner secundário com classe própria, fonte e cor definidas no mobile.
  if (!/\.banner-title\{font-size:\d+px!important;line-height:\d+px!important;color:#[0-9A-F]{6}!important;\}/i.test(css)) erros.push('Regras 20/22: .banner-title sem fonte e cor mobile.');

  // Regra 24: duas versões do hero alternando.
  if (!html.includes(C.img.heroDesktop) || !html.includes(C.img.heroMobile)) erros.push('Regra 24: hero desktop e mobile precisam estar presentes.');
  if (!/class="banner-desktop"[^>]*style="display:block/.test(html) || !/class="banner-mobile"[^>]*style="display:none/.test(html)) erros.push('Regra 24: estado padrão do hero incorreto.');
  if (!css.includes('.banner-desktop{display:none!important') || !css.includes('.banner-mobile{display:block!important')) erros.push('Regra 24: alternância do hero ausente na media query.');

  // Regra 23: todas as fotos com link https público, nenhuma via cid.
  Object.keys(C.img).forEach(function (k) {
    if (!/^https:\/\//.test(C.img[k])) erros.push('Regra 23: imagem sem link público: ' + k);
    if (!html.includes(C.img[k])) erros.push('Regra 23: foto não usada no HTML: ' + k);
  });

  // Fotos clicáveis: toda foto exibida como <img> (exceto ícones e o detalhe do lembrete) dentro de um <a>.
  [C.img.heroDesktop, C.img.heroMobile, C.img.respirar, C.img.pausar, C.img.cuidar, C.img.pedirAjuda, C.img.institucional].forEach(function (src) {
    const re = new RegExp('<a\\b[^>]*>\\s*(<!--[\\s\\S]*?-->\\s*|<img\\b[^>]*>\\s*)*<img src="' + src.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&') + '"');
    if (!re.test(html)) erros.push('Foto sem link: ' + src);
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

  if (erros.length) throw new Error('Template inválido:\n- ' + erros.join('\n- '));
  return true;
}

function enviarTesteNemTodoCuidado() {
  validarTemplateNemTodoCuidado_();
  const destinatario = Session.getActiveUser().getEmail();
  if (!destinatario) throw new Error('Não foi possível obter o e-mail do usuário ativo via Session.getActiveUser().getEmail().');

  GmailApp.sendEmail(
    destinatario,
    NEM_TODO_CUIDADO.subject,
    'Nem todo cuidado é visível. Às vezes, ele começa quando você decide parar por alguns minutos. Abra este e-mail em um cliente compatível com HTML para ver a versão completa.',
    {
      htmlBody: montarHtmlNemTodoCuidado_(),
      inlineImages: getInlineImagesNemTodoCuidado_(),
      name: 'Essência do Brasil'
    }
  );
}
