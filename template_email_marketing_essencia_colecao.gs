/**
 * TEMPLATE DE E-MAIL MARKETING — ESSÊNCIA DO BRASIL
 * ------------------------------------------------
 * Teste visual: envia um único e-mail para o endereço
 * da conta que executa o Apps Script.
 *
 * Antes de usar:
 * 1. Cole este arquivo no Apps Script.
 * 2. Salve.
 * 3. Execute a função enviarEmailTeste().
 * 4. Autorize o acesso ao Gmail quando solicitado.
 *
 * IMPORTANTE:
 * Este template foi construído como HTML de e-mail,
 * usando tabelas e CSS inline/compatível para melhorar
 * a visualização em Gmail, Outlook e celulares.
 *
 * Os produtos ainda não estão preenchidos.
 */

function enviarEmailTeste() {
  var destinatario = Session.getEffectiveUser().getEmail();

  var assunto = 'Coleção Essência — Prévia do novo e-mail';

  var html = criarEmailColecao();

  MailApp.sendEmail({
    to: destinatario,
    subject: assunto,
    htmlBody: html,
    body: 'Prévia da estrutura do e-mail da Coleção Essência. Abra este e-mail em um cliente de e-mail para visualizar a versão HTML.'
  });

  Logger.log('E-mail enviado para: ' + destinatario);
}


/**
 * Cria o HTML completo do e-mail.
 */
function criarEmailColecao() {

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Coleção Essência — Essência do Brasil</title>
</head>

<body style="
  margin:0;
  padding:0;
  background-color:#e8e2d7;
  font-family:Arial,Helvetica,sans-serif;
  color:#1d211b;
">

<!-- =========================================================
     CONTAINER PRINCIPAL
========================================================= -->

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="background-color:#e8e2d7;">

<tr>
<td align="center">

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="
         max-width:720px;
         margin:0 auto;
         background-color:#f7f3eb;
       ">


<!-- =========================================================
     BARRA SUPERIOR
========================================================= -->

<tr>
<td style="
  background-color:#e9dfce;
  padding:11px 24px;
  font-size:11px;
  color:#34372f;
">

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0">

<tr>

<td align="left"
    style="font-size:11px; line-height:16px;">

🌿 A natureza inspira. A Essência transforma.

</td>

<td align="right"
    style="font-size:11px; line-height:16px;">

Não consegue ver este e-mail?
<a href="#"
   style="color:#34372f;text-decoration:underline;font-weight:bold;">
Clique aqui
</a>

</td>

</tr>

</table>

</td>
</tr>


<!-- =========================================================
     LOGO
========================================================= -->

<tr>
<td align="center"
    style="
      background-color:#f7f3eb;
      padding:30px 20px 24px;
    ">

<div style="
  font-family:Georgia,'Times New Roman',serif;
  font-size:31px;
  line-height:34px;
  letter-spacing:6px;
  color:#171a15;
">
ESSÊNCIA
</div>

<div style="
  font-family:Georgia,'Times New Roman',serif;
  font-size:13px;
  line-height:20px;
  letter-spacing:4px;
  color:#171a15;
">
— DO BRASIL —
</div>

</td>
</tr>


<!-- =========================================================
     MENU
========================================================= -->

<tr>
<td align="center"
    style="
      background-color:#20351f;
      padding:15px 8px;
    ">

<a href="#"
   style="
     color:#ffffff;
     text-decoration:none;
     font-size:11px;
     letter-spacing:1px;
     margin:0 9px;
   ">
PERFUMES
</a>

<span style="color:#b58a43;">|</span>

<a href="#"
   style="
     color:#ffffff;
     text-decoration:none;
     font-size:11px;
     letter-spacing:1px;
     margin:0 9px;
   ">
ÓLEOS ESSENCIAIS
</a>

<span style="color:#b58a43;">|</span>

<a href="#"
   style="
     color:#ffffff;
     text-decoration:none;
     font-size:11px;
     letter-spacing:1px;
     margin:0 9px;
   ">
ESSÊNCIAS
</a>

<span style="color:#b58a43;">|</span>

<a href="#"
   style="
     color:#ffffff;
     text-decoration:none;
     font-size:11px;
     letter-spacing:1px;
     margin:0 9px;
   ">
KITS
</a>

<span style="color:#b58a43;">|</span>

<a href="#"
   style="
     color:#ffffff;
     text-decoration:none;
     font-size:11px;
     letter-spacing:1px;
     margin:0 9px;
   ">
JOIAS
</a>

<span style="color:#b58a43;">|</span>

<a href="#"
   style="
     color:#ffffff;
     text-decoration:none;
     font-size:11px;
     letter-spacing:1px;
     margin:0 9px;
   ">
PROMOÇÕES
</a>

</td>
</tr>


<!-- =========================================================
     HERO / BANNER PRINCIPAL
========================================================= -->

<tr>
<td style="
  background-color:#d9d0bf;
  min-height:390px;
">

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="
         background-color:#d9d0bf;
       ">

<tr>

<!-- TEXTO DO HERO -->

<td width="48%"
    valign="middle"
    style="
      padding:58px 20px 58px 48px;
      background-color:#f2ecdf;
    ">

<div style="
  font-size:11px;
  letter-spacing:2px;
  color:#20351f;
  margin-bottom:14px;
">
✦ &nbsp; LANÇAMENTO
</div>

<div style="
  font-family:Georgia,'Times New Roman',serif;
  font-size:40px;
  line-height:43px;
  color:#20351f;
">
COLEÇÃO
</div>

<div style="
  font-family:Georgia,'Times New Roman',serif;
  font-size:40px;
  line-height:43px;
  color:#b58a43;
">
ESSÊNCIA
</div>

<div style="
  margin-top:20px;
  font-family:Georgia,'Times New Roman',serif;
  font-size:18px;
  line-height:25px;
  color:#252820;
">
6 perfumes.<br>
6 histórias.<br>
<strong>1 essência: você.</strong>
</div>

<p style="
  font-size:13px;
  line-height:21px;
  color:#4c4c43;
  margin:18px 0;
">
Uma coleção criada para revelar diferentes
facetas da sua personalidade através dos aromas.
</p>

<a href="#"
   style="
     display:inline-block;
     background-color:#20351f;
     color:#ffffff;
     text-decoration:none;
     padding:14px 22px;
     font-size:11px;
     letter-spacing:1px;
   ">
CONHEÇA A COLEÇÃO →
</a>

</td>


<!-- ESPAÇO RESERVADO PARA O BANNER -->

<td width="52%"
    valign="middle"
    align="center"
    style="
      background-color:#d7cfbf;
      padding:25px;
    ">

<div style="
  border:1px dashed #8d8069;
  padding:95px 15px;
  color:#766c5b;
  font-size:12px;
  letter-spacing:1px;
">
ESPAÇO RESERVADO<br>
PARA A IMAGEM DO BANNER
</div>

</td>

</tr>

</table>

</td>
</tr>


<!-- =========================================================
     INTRODUÇÃO
========================================================= -->

<tr>
<td align="center"
    style="
      padding:35px 30px 27px;
      background-color:#f7f3eb;
    ">

<div style="
  font-family:Georgia,'Times New Roman',serif;
  font-size:25px;
  line-height:32px;
  color:#20351f;
">
Seis fragrâncias. Seis histórias.
</div>

<div style="
  margin-top:10px;
  font-size:13px;
  line-height:21px;
  color:#5b5a52;
">
Uma coleção criada para acompanhar diferentes
momentos, estilos e personalidades.
</div>

</td>
</tr>


<!-- =========================================================
     FAIXA DE BENEFÍCIOS
========================================================= -->

<tr>
<td style="
  background-color:#20351f;
  padding:20px 10px;
">

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0">

<tr>

<td width="25%"
    align="center"
    valign="top"
    style="color:#ffffff;padding:4px 8px;">

<div style="
  color:#d3b16c;
  font-size:22px;
">
✦
</div>

<div style="
  margin-top:6px;
  font-size:10px;
  line-height:15px;
  letter-spacing:1px;
">
ALTA FIXAÇÃO<br>
E LONGA DURAÇÃO
</div>

</td>


<td width="25%"
    align="center"
    valign="top"
    style="color:#ffffff;padding:4px 8px;">

<div style="
  color:#d3b16c;
  font-size:22px;
">
❧
</div>

<div style="
  margin-top:6px;
  font-size:10px;
  line-height:15px;
  letter-spacing:1px;
">
FRAGRÂNCIAS<br>
EXCLUSIVAS
</div>

</td>


<td width="25%"
    align="center"
    valign="top"
    style="color:#ffffff;padding:4px 8px;">

<div style="
  color:#d3b16c;
  font-size:22px;
">
♡
</div>

<div style="
  margin-top:6px;
  font-size:10px;
  line-height:15px;
  letter-spacing:1px;
">
FEITO COM<br>
PROPÓSITO
</div>

</td>


<td width="25%"
    align="center"
    valign="top"
    style="color:#ffffff;padding:4px 8px;">

<div style="
  color:#d3b16c;
  font-size:22px;
">
♧
</div>

<div style="
  margin-top:6px;
  font-size:10px;
  line-height:15px;
  letter-spacing:1px;
">
PERFEITOS PARA<br>
PRESENTEAR
</div>

</td>

</tr>

</table>

</td>
</tr>


<!-- =========================================================
     SEÇÃO DOS 6 PERFUMES
========================================================= -->

<tr>
<td style="
  padding:35px 18px;
  background-color:#f7f3eb;
">

<div align="center"
     style="
       font-family:Georgia,'Times New Roman',serif;
       font-size:24px;
       line-height:30px;
       color:#20351f;
     ">
CONHEÇA AS 6 FRAGRÂNCIAS
</div>

<div align="center"
     style="
       margin:9px 0 22px;
       font-size:12px;
       line-height:19px;
       color:#66645b;
     ">
Os produtos serão adicionados aqui posteriormente.
</div>


<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0">

<tr>


<!-- PERFUME 01 -->

<td width="33.33%"
    valign="top"
    style="padding:6px;">

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="
         background-color:#eee7da;
         border:1px solid #e0d7c7;
       ">

<tr>
<td align="center"
    style="padding:12px 10px 8px;">

<div style="
  height:145px;
  background-color:#e4dccd;
  border:1px dashed #b6aa96;
  color:#7c7466;
  font-size:10px;
  display:flex;
  align-items:center;
  justify-content:center;
">
IMAGEM<br>PERFUME 01
</div>

<div style="
  margin-top:13px;
  font-family:Georgia,'Times New Roman',serif;
  font-size:15px;
  color:#20351f;
">
PERFUME 01
</div>

<div style="
  margin-top:7px;
  font-size:10px;
  line-height:15px;
  color:#5d5b53;
">
Descrição e notas<br>
serão adicionadas aqui.
</div>

</td>
</tr>

</table>

</td>


<!-- PERFUME 02 -->

<td width="33.33%"
    valign="top"
    style="padding:6px;">

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="
         background-color:#eee7da;
         border:1px solid #e0d7c7;
       ">

<tr>
<td align="center"
    style="padding:12px 10px 8px;">

<div style="
  height:145px;
  background-color:#e4dccd;
  border:1px dashed #b6aa96;
  color:#7c7466;
  font-size:10px;
">
<br><br><br>
IMAGEM PERFUME 02
</div>

<div style="
  margin-top:13px;
  font-family:Georgia,'Times New Roman',serif;
  font-size:15px;
  color:#20351f;
">
PERFUME 02
</div>

<div style="
  margin-top:7px;
  font-size:10px;
  line-height:15px;
  color:#5d5b53;
">
Descrição e notas<br>
serão adicionadas aqui.
</div>

</td>
</tr>

</table>

</td>


<!-- PERFUME 03 -->

<td width="33.33%"
    valign="top"
    style="padding:6px;">

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="
         background-color:#eee7da;
         border:1px solid #e0d7c7;
       ">

<tr>
<td align="center"
    style="padding:12px 10px 8px;">

<div style="
  height:145px;
  background-color:#e4dccd;
  border:1px dashed #b6aa96;
  color:#7c7466;
  font-size:10px;
">
<br><br><br>
IMAGEM PERFUME 03
</div>

<div style="
  margin-top:13px;
  font-family:Georgia,'Times New Roman',serif;
  font-size:15px;
  color:#20351f;
">
PERFUME 03
</div>

<div style="
  margin-top:7px;
  font-size:10px;
  line-height:15px;
  color:#5d5b53;
">
Descrição e notas<br>
serão adicionadas aqui.
</div>

</td>
</tr>

</table>

</td>

</tr>


<tr>


<!-- PERFUME 04 -->

<td width="33.33%"
    valign="top"
    style="padding:6px;">

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="
         background-color:#eee7da;
         border:1px solid #e0d7c7;
       ">

<tr>
<td align="center"
    style="padding:12px 10px 8px;">

<div style="
  height:145px;
  background-color:#e4dccd;
  border:1px dashed #b6aa96;
  color:#7c7466;
  font-size:10px;
">
<br><br><br>
IMAGEM PERFUME 04
</div>

<div style="
  margin-top:13px;
  font-family:Georgia,'Times New Roman',serif;
  font-size:15px;
  color:#20351f;
">
PERFUME 04
</div>

<div style="
  margin-top:7px;
  font-size:10px;
  line-height:15px;
  color:#5d5b53;
">
Descrição e notas<br>
serão adicionadas aqui.
</div>

</td>
</tr>

</table>

</td>


<!-- PERFUME 05 -->

<td width="33.33%"
    valign="top"
    style="padding:6px;">

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="
         background-color:#eee7da;
         border:1px solid #e0d7c7;
       ">

<tr>
<td align="center"
    style="padding:12px 10px 8px;">

<div style="
  height:145px;
  background-color:#e4dccd;
  border:1px dashed #b6aa96;
  color:#7c7466;
  font-size:10px;
">
<br><br><br>
IMAGEM PERFUME 05
</div>

<div style="
  margin-top:13px;
  font-family:Georgia,'Times New Roman',serif;
  font-size:15px;
  color:#20351f;
">
PERFUME 05
</div>

<div style="
  margin-top:7px;
  font-size:10px;
  line-height:15px;
  color:#5d5b53;
">
Descrição e notas<br>
serão adicionadas aqui.
</div>

</td>
</tr>

</table>

</td>


<!-- PERFUME 06 -->

<td width="33.33%"
    valign="top"
    style="padding:6px;">

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="
         background-color:#eee7da;
         border:1px solid #e0d7c7;
       ">

<tr>
<td align="center"
    style="padding:12px 10px 8px;">

<div style="
  height:145px;
  background-color:#e4dccd;
  border:1px dashed #b6aa96;
  color:#7c7466;
  font-size:10px;
">
<br><br><br>
IMAGEM PERFUME 06
</div>

<div style="
  margin-top:13px;
  font-family:Georgia,'Times New Roman',serif;
  font-size:15px;
  color:#20351f;
">
PERFUME 06
</div>

<div style="
  margin-top:7px;
  font-size:10px;
  line-height:15px;
  color:#5d5b53;
">
Descrição e notas<br>
serão adicionadas aqui.
</div>

</td>
</tr>

</table>

</td>

</tr>

</table>

</td>
</tr>


<!-- =========================================================
     BLOCO PROMOCIONAL
========================================================= -->

<tr>
<td style="
  padding:0 20px 35px;
  background-color:#f7f3eb;
">

<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="
         background-color:#20351f;
       ">

<tr>

<td width="45%"
    align="center"
    valign="middle"
    style="
      padding:25px;
      background-color:#2a4028;
    ">

<div style="
  border:1px dashed #b58a43;
  padding:60px 10px;
  color:#d3b16c;
  font-size:10px;
  letter-spacing:1px;
">
ESPAÇO PARA<br>
IMAGEM DA COLEÇÃO
</div>

</td>


<td width="55%"
    valign="middle"
    style="
      padding:30px;
      color:#ffffff;
    ">

<div style="
  font-family:Georgia,'Times New Roman',serif;
  font-size:24px;
  line-height:30px;
  color:#ffffff;
">
Presenteie com significado.
</div>

<p style="
  margin:12px 0;
  font-size:12px;
  line-height:19px;
  color:#e9e5da;
">
A Coleção Essência reúne fragrâncias
para diferentes momentos e personalidades.
</p>

<a href="#"
   style="
     display:inline-block;
     background-color:#b58a43;
     color:#ffffff;
     text-decoration:none;
     padding:12px 18px;
     font-size:10px;
     letter-spacing:1px;
   ">
QUERO CONHECER →
</a>

</td>

</tr>

</table>

</td>
</tr>


<!-- =========================================================
     CTA FINAL
========================================================= -->

<tr>
<td align="center"
    style="
      background-color:#e9dfce;
      padding:35px 25px;
    ">

<div style="
  font-family:Georgia,'Times New Roman',serif;
  font-size:26px;
  line-height:32px;
  color:#20351f;
">
Qual fragrância conta a sua história?
</div>

<div style="
  margin:10px 0 17px;
  font-size:13px;
  line-height:20px;
  color:#4e4d45;
">
Descubra a Coleção Essência e encontre
o perfume que combina com sua essência.
</div>

<a href="#"
   style="
     display:inline-block;
     background-color:#20351f;
     color:#ffffff;
     text-decoration:none;
     padding:14px 22px;
     font-size:11px;
     letter-spacing:1px;
   ">
CONHEÇA OS PERFUMES →
</a>

</td>
</tr>


<!-- =========================================================
     RODAPÉ
========================================================= -->

<tr>
<td style="
  background-color:#20351f;
  padding:30px 25px;
  color:#ffffff;
">

<div align="center"
     style="
       font-family:Georgia,'Times New Roman',serif;
       font-size:22px;
       line-height:27px;
       letter-spacing:4px;
     ">
ESSÊNCIA
</div>

<div align="center"
     style="
       margin-bottom:25px;
       font-family:Georgia,'Times New Roman',serif;
       font-size:11px;
       letter-spacing:3px;
       color:#ffffff;
     ">
— DO BRASIL —
</div>


<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0">

<tr>


<td width="33.33%"
    valign="top"
    style="padding:5px 12px;">

<div style="
  color:#d3b16c;
  font-size:10px;
  letter-spacing:1px;
  margin-bottom:8px;
">
ATENDIMENTO
</div>

<div style="
  font-size:10px;
  line-height:17px;
  color:#e5e3db;
">
WhatsApp<br>
(21) 99999-9999<br>
contato@essenciadobrasil.com.br
</div>

</td>


<td width="33.33%"
    valign="top"
    style="padding:5px 12px;">

<div style="
  color:#d3b16c;
  font-size:10px;
  letter-spacing:1px;
  margin-bottom:8px;
">
SIGA-NOS
</div>

<div style="
  font-size:10px;
  line-height:17px;
  color:#e5e3db;
">
Instagram<br>
Facebook<br>
TikTok<br>
WhatsApp
</div>

</td>


<td width="33.33%"
    valign="top"
    style="padding:5px 12px;">

<div style="
  color:#d3b16c;
  font-size:10px;
  letter-spacing:1px;
  margin-bottom:8px;
">
PAGAMENTO
</div>

<div style="
  font-size:10px;
  line-height:17px;
  color:#e5e3db;
">
Pix<br>
Visa<br>
Mastercard<br>
American Express<br>
Boleto
</div>

</td>

</tr>

</table>


<div style="
  border-top:1px solid rgba(255,255,255,0.2);
  margin-top:24px;
  padding-top:15px;
  text-align:center;
  font-size:9px;
  line-height:15px;
  color:#c9c8c0;
">

Você recebeu este e-mail porque está
cadastrado em nossa lista.

<br>

Se não deseja mais receber nossos e-mails,
<a href="#"
   style="color:#d3b16c;text-decoration:underline;">
clique aqui para descadastrar.
</a>

</div>

</td>
</tr>


</table>

</td>
</tr>

</table>

</body>
</html>
`;
}
