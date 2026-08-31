/**
 * TESTE DOS PEQUENOS ÍCONES — ESSÊNCIA DO BRASIL
 * Execute a função enviarTesteIcones().
 * O e-mail será enviado uma única vez para o usuário que executar o script.
 */

function enviarTesteIcones() {
  var destinatario = Session.getEffectiveUser().getEmail();

  MailApp.sendEmail({
    to: destinatario,
    subject: 'Teste — Ícones do e-mail Essência do Brasil',
    htmlBody: criarEmailIcones(),
    body: 'Teste dos pequenos ícones do template Essência do Brasil.'
  });

  Logger.log('E-mail enviado para: ' + destinatario);
}

function criarEmailIcones() {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Teste de Ícones</title>
</head>

<body style="margin:0;padding:0;background:#e8e2d7;font-family:Arial,Helvetica,sans-serif;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#e8e2d7;">
<tr><td align="center">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
       style="max-width:700px;background:#f7f3eb;">

<tr><td align="center" style="background:#20351f;padding:28px 20px;color:#fff;">
<div style="font-family:Georgia,serif;font-size:25px;letter-spacing:5px;">ESSÊNCIA</div>
<div style="margin-top:4px;font-family:Georgia,serif;font-size:11px;letter-spacing:3px;">— DO BRASIL —</div>
</td></tr>

<tr><td align="center" style="padding:35px 20px 15px;">
<div style="font-family:Georgia,serif;font-size:25px;color:#20351f;">TESTE DOS ELEMENTOS</div>
<div style="margin-top:8px;font-size:12px;line-height:18px;color:#666158;">
Estes são os pequenos desenhos que podem ser utilizados no e-mail marketing.
</div>
</td></tr>

<!-- ÍCONES DESENHADOS COM HTML/CSS -->

<tr><td style="padding:20px;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>

<td width="25%" align="center" valign="top" style="padding:15px 5px;">
<div style="width:30px;height:42px;margin:0 auto;position:relative;">
<div style="width:23px;height:34px;border:2px solid #385637;border-radius:3px 22px 3px 22px;transform:rotate(-35deg);margin-left:3px;"></div>
<div style="width:2px;height:30px;background:#b58a43;transform:rotate(28deg);margin:-25px auto 0;"></div>
</div>
<div style="margin-top:12px;font-size:10px;color:#20351f;">FOLHA</div>
</td>

<td width="25%" align="center" valign="top" style="padding:15px 5px;">
<div style="width:42px;height:42px;margin:0 auto;position:relative;">
<div style="position:absolute;width:14px;height:14px;border:2px solid #b58a43;border-radius:50%;left:12px;top:1px;"></div>
<div style="position:absolute;width:14px;height:14px;border:2px solid #b58a43;border-radius:50%;left:1px;top:12px;"></div>
<div style="position:absolute;width:14px;height:14px;border:2px solid #b58a43;border-radius:50%;right:1px;top:12px;"></div>
<div style="position:absolute;width:14px;height:14px;border:2px solid #b58a43;border-radius:50%;left:12px;bottom:1px;"></div>
<div style="position:absolute;width:8px;height:8px;background:#385637;border-radius:50%;left:17px;top:17px;"></div>
</div>
<div style="margin-top:12px;font-size:10px;color:#20351f;">FLOR</div>
</td>

<td width="25%" align="center" valign="top" style="padding:15px 5px;">
<div style="font-size:38px;line-height:42px;color:#b58a43;font-family:Arial,sans-serif;">♡</div>
<div style="margin-top:12px;font-size:10px;color:#20351f;">CORAÇÃO</div>
</td>

<td width="25%" align="center" valign="top" style="padding:15px 5px;">
<div style="font-size:38px;line-height:42px;color:#b58a43;font-family:Georgia,serif;">✦</div>
<div style="margin-top:12px;font-size:10px;color:#20351f;">ESTRELA</div>
</td>

</tr>

<tr>

<td width="25%" align="center" valign="top" style="padding:15px 5px;">
<div style="width:38px;height:42px;margin:0 auto;position:relative;">
<div style="width:22px;height:22px;background:#385637;border-radius:50%;position:absolute;top:0;left:8px;"></div>
<div style="width:27px;height:20px;background:#385637;border-radius:50%;position:absolute;top:10px;left:4px;"></div>
<div style="width:7px;height:16px;background:#b58a43;position:absolute;bottom:0;left:16px;"></div>
</div>
<div style="margin-top:12px;font-size:10px;color:#20351f;">ÁRVORE</div>
</td>

<td width="25%" align="center" valign="top" style="padding:15px 5px;">
<div style="width:30px;height:38px;margin:0 auto;border:2px solid #385637;border-radius:50% 50% 55% 55%;transform:rotate(45deg);"></div>
<div style="margin-top:12px;font-size:10px;color:#20351f;">GOTA</div>
</td>

<td width="25%" align="center" valign="top" style="padding:15px 5px;">
<div style="width:40px;height:32px;margin:7px auto 0;border:2px solid #b58a43;position:relative;">
<div style="position:absolute;width:2px;height:32px;background:#385637;left:18px;top:0;"></div>
<div style="position:absolute;width:40px;height:2px;background:#385637;left:0;top:10px;"></div>
<div style="position:absolute;width:2px;height:10px;background:#b58a43;left:18px;top:-8px;"></div>
</div>
<div style="margin-top:12px;font-size:10px;color:#20351f;">PRESENTE</div>
</td>

<td width="25%" align="center" valign="top" style="padding:15px 5px;">
<div style="width:40px;height:42px;margin:0 auto;position:relative;">
<div style="width:2px;height:42px;background:#385637;transform:rotate(28deg);margin:auto;"></div>
<div style="position:absolute;width:15px;height:8px;border:2px solid #385637;border-radius:15px 2px;transform:rotate(-30deg);left:0;top:10px;"></div>
<div style="position:absolute;width:15px;height:8px;border:2px solid #385637;border-radius:2px 15px;transform:rotate(30deg);right:0;top:20px;"></div>
<div style="position:absolute;width:15px;height:8px;border:2px solid #385637;border-radius:15px 2px;transform:rotate(-30deg);left:5px;bottom:3px;"></div>
</div>
<div style="margin-top:12px;font-size:10px;color:#20351f;">RAMO</div>
</td>

</tr>
</table>
</td></tr>

<!-- ÍCONES DA FAIXA DE BENEFÍCIOS -->

<tr><td style="background:#20351f;padding:24px 10px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>

<td width="25%" align="center" style="color:#fff;">
<div style="font-size:25px;color:#d3b16c;">✦</div>
<div style="margin-top:7px;font-size:10px;line-height:15px;letter-spacing:1px;">ALTA FIXAÇÃO</div>
</td>

<td width="25%" align="center" style="color:#fff;">
<div style="font-size:25px;color:#d3b16c;">❧</div>
<div style="margin-top:7px;font-size:10px;line-height:15px;letter-spacing:1px;">FRAGRÂNCIAS</div>
</td>

<td width="25%" align="center" style="color:#fff;">
<div style="font-size:25px;color:#d3b16c;">♡</div>
<div style="margin-top:7px;font-size:10px;line-height:15px;letter-spacing:1px;">FEITO COM AMOR</div>
</td>

<td width="25%" align="center" style="color:#fff;">
<div style="font-size:25px;color:#d3b16c;">♧</div>
<div style="margin-top:7px;font-size:10px;line-height:15px;letter-spacing:1px;">PRESENTEAR</div>
</td>

</tr>
</table>
</td></tr>

<tr><td align="center" style="padding:30px 25px;background:#e9dfce;font-size:11px;line-height:18px;color:#55534b;">
Os quatro primeiros desenhos foram construídos com HTML/CSS, sem fontes externas.
<br><br>
Isso evita depender de uma biblioteca de ícones que pode não carregar no Gmail ou Outlook.
</td></tr>

<tr><td align="center" style="background:#20351f;color:#fff;padding:25px;font-size:10px;line-height:17px;">
ESSÊNCIA DO BRASIL
<br>
<span style="color:#d3b16c;">Pequenos detalhes fazem parte da nossa essência.</span>
</td></tr>

</table>
</td></tr>
</table>

</body>
</html>
`;
}
