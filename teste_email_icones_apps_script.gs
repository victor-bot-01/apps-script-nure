/**
 * Teste visual de bloco de benefícios para e-mail.
 *
 * Como usar:
 * 1) Acesse https://script.google.com
 * 2) Crie um novo projeto.
 * 3) Cole este arquivo no Code.gs.
 * 4) Se quiser, preencha EMAIL_DESTINO. Se deixar vazio,
 *    o script tentará enviar para a conta Google que o executa.
 * 5) Execute enviarTesteVisualEmail().
 * 6) Na primeira execução, autorize o envio de e-mail.
 */

const EMAIL_DESTINO = ''; // Ex.: 'seuemail@gmail.com'. Pode deixar vazio.

function enviarTesteVisualEmail() {
  const email = EMAIL_DESTINO || Session.getActiveUser().getEmail();

  if (!email) {
    throw new Error(
      'Não foi possível identificar seu e-mail automaticamente. ' +
      'Preencha a constante EMAIL_DESTINO no início do código.'
    );
  }

  // Ícones PNG transparentes incorporados no próprio script.
  // Assim, o teste não depende de hospedagem externa.
  const folha = blobDeBase64_(
    'iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAC10lEQVR42u3cTY6rMBBF4ReULbD/BbII3igSaikJMbYpu74zaakHUYd7XC7/0I993/8hL4tHQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABEAR67ru67re+mLGUwz9Q4/09xDghuC3bXtEkYEAHUf7K3gVQOgEEDoBppzXR4MAiUY7AYROAKETYPp5nQAXRnqW4AmQOPQjDoOSk1qAV/nPOvpVABCgd4NJgCRBv34XXQICVAr/+HOkvQTLwEojf9u2x4ibSEv28EqDmiF8U0DikU+ASg3f6GcHeoAKy7qRN5JUgMThpxfgbHgtwo+yP7AYzfeO/LsriB7gx/BrBBZpd1APcGP4EfoHAnQMP2Lz+Kz5wGY4V295GTTiwdCz9ciJNlI+ydrrJnCkgfKs9YVqV4Hj6VqPB9Y6/KhVMmwPcHxQrUtnr/AjEroJ7CHB36685QiN2CMttb9c7aCOodT+lyo9lmRuBAWtBr3Dj7pCWlqE9C2g0gCvSnDXW0CRl8fdt4KvdvfHFUeNFcIIN3enmgJqlPKSz7gr6OibY49935uN8k9fvsb8ePYzsr3xO0QTWKsS/LJCEH6wVUCtzv7T53j/7wYBftkTaClB9gZvmH2A2mv80a9qD98ElpbfK6HNemkzRQW4WgmEP4kAJRK8qxrCDyBA6QFRSSVocSdBD1CxDygpz996AqV/AAHOSvEutHcSCH9gAb4J8TfET2/jCn8CAc5Uh+PJX/Z/7ji1AGfneeEnEeDX6QKD7wMY7QS4tDTExAIIP7EAwlcBhJ9VAHv8iQVwqyexAOb9xAIIP7EAwlcBhJ9VAB1/YgF0/IkFMO8nFkD4iQUQvgog/KwC6PgTC6DjTyyAeT+5AK/QhX8/w90KxqSrABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABMBZ/gOadyfPmEwTtgAAAABJRU5ErkJggg==',
    'folha.png'
  );

  const perfume = blobDeBase64_(
    'iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAB9ElEQVR42u3d0W3CMBSGUWKxQvYfMEOkT31BQapUcPzfe84CpfEXxyEGtvM8H/Q1HAIBIAAEgAAQAAJAAAgAASAABIAAEAACQAAIgFqelf6Zfd+nbW86jmOrcMy2ClvCZg58tRBKzQAzB+PO6KwBLgZi9pn4+/fSQ7AIdBeAABAAAkAACAABIAAEgAAQAAJAAOu666ncXU8hP82OoOa2Sl8SZUtY8wBmhFBl4EteAr45WFUvL+4C3AUgAASAABAA3cS/D7DC7VnyewORAax8T54WQ1wAr4N/dcBnvxP4l9ckgA8P/ooHefXXFx1A0uPXpNc6DP73LhMJzw+Gwe8dwUgY/HQr/x8j6WxKYw3AQwDNrv1pawEzgBkAASAAeiq3K3jGYqvS1vCnge97h1JyBpgxKJU+IzAqnf2zzsgqXxNrEYgABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEsKDZW7RsCl2Y3wxoGsDMWcDnAgJCwCIQASAABIAAEAACICeAKp/AXf1tYzOAGSDnLEo9+wXwz8tAupX/j5Fy8NJmgZRHxlFfFp0SQdJ+AT8Z0+j1xQdwNQuscKD9aJTVdezC1Q9HNr9biQ+ABncBCAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAA7/wA3T34G+xRC6AAAAAASUVORK5CYII=',
    'perfume.png'
  );

  const coracao = blobDeBase64_(
    'iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAC10lEQVR42u2cW26EQAwEA9or7P0PyCHI72qVgHiNu91Vv9ESxi48HmCY1nX9gVxmQoAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgADgxsvhJN/v9+YGxmVZJs7rHJPq5tC94O5xd/DVzqe1AH8Fey+AZ37jej4tBbgzYN/HUjuOkgwSAtwV6K3jHj3mld+OHqe1AE8E+krQRyTp6TFbLgOfCsSyLNPnsbeaue/EPHlO9AAfAR8VkP+u7qrSPHr8UhXg6rLqjmpw9O+dYlFaARTmQJWGrDoWpT2AylxYeR5xTaDCvPf9/ytL8FYvErUKqAy8wz37VgIoBTx9GhoqQHWpdWB0jHgfIBwEQABAAEAAyFwJIED4SgABwisBAgTfA0AAQAAEAAQABGi7zmUFIFgBeCqoExOmAKYAQAD6gMj5v7QC0AdoxCL+ncDkq7+8B6AK1MdgTjOeq19sFZBcBRTGLrE1LFEClR1SM1dD9ljLBVDaozc6+Qp9kEQFSGwIVcY8E5Dssco9C+g8DSiObVa8MjpKoNL1y1eAjpVAeSxyAnRbFah1/RYVoGNDqDqmWT1gzlVAdd63EMC9H3A5Z2kBXPsB9XnfqgK4SeCUfJspwEUCt+TbCOAggWPyrQRQlsA1+XYCKErgnHxLAZQkcE++rQAKEnRIvrUAlRJ0Sb69ANUJ6PDMosXm0JHPDRzu7x/h9dOMpxLU9U2lNgKMqgLdHlW3+z7AEyJ0K/utBbi7bHffq9BSgLuWh52We3EV4KoECclvPwWclSAl+e0FOCNBUvIjBDgiQVryYwQ4mtCkfYpR3wncukfQea2PADvlPvkzNXECbPUDid8pmNZ1ja8AqcmPngL4TF14BYDwCgAIAAgACIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgADQgF+6vuwG0HRPBwAAAABJRU5ErkJggg==',
    'coracao.png'
  );

  const html = `
<!doctype html>
<html>
  <body style="margin:0; padding:0; background:#ffffff;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
      <tr>
        <td align="center" style="padding:24px 12px;">

          <table role="presentation"
                 width="600"
                 cellspacing="0"
                 cellpadding="0"
                 border="0"
                 style="width:100%; max-width:600px; background:#f4efe7;">
            <tr>
              <td width="33.33%" align="center" valign="top"
                  style="padding:19px 5px 22px 5px; font-family:Arial, Helvetica, sans-serif;">
                <img src="cid:folha"
                     width="32"
                     alt=""
                     style="display:block; width:32px; height:auto; border:0; margin:0 auto 8px auto;">
                <div style="
                  margin:0;
                  font-family:Arial, Helvetica, sans-serif;
                  font-size:12px;
                  line-height:15px;
                  font-weight:700;
                  color:#111111;
                  text-align:center;
                  letter-spacing:0;
                ">
                  PRODUTOS<br>DE QUALIDADE
                </div>
              </td>

              <td width="33.33%" align="center" valign="top"
                  style="padding:19px 5px 22px 5px; font-family:Arial, Helvetica, sans-serif;">
                <img src="cid:perfume"
                     width="32"
                     alt=""
                     style="display:block; width:32px; height:auto; border:0; margin:0 auto 8px auto;">
                <div style="
                  margin:0;
                  font-family:Arial, Helvetica, sans-serif;
                  font-size:12px;
                  line-height:15px;
                  font-weight:700;
                  color:#111111;
                  text-align:center;
                  letter-spacing:0;
                ">
                  FRAGRÂNCIAS<br>EXCLUSIVAS
                </div>
              </td>

              <td width="33.33%" align="center" valign="top"
                  style="padding:19px 5px 22px 5px; font-family:Arial, Helvetica, sans-serif;">
                <img src="cid:coracao"
                     width="32"
                     alt=""
                     style="display:block; width:32px; height:auto; border:0; margin:0 auto 8px auto;">
                <div style="
                  margin:0;
                  font-family:Arial, Helvetica, sans-serif;
                  font-size:12px;
                  line-height:15px;
                  font-weight:700;
                  color:#111111;
                  text-align:center;
                  letter-spacing:0;
                ">
                  FEITO COM<br>PROPÓSITO
                </div>
              </td>
            </tr>
          </table>

          <div style="
            max-width:600px;
            margin:14px auto 0 auto;
            font-family:Arial, Helvetica, sans-serif;
            font-size:11px;
            line-height:16px;
            color:#777777;
            text-align:center;
          ">
            Teste de renderização do bloco no seu cliente de e-mail.
          </div>

        </td>
      </tr>
    </table>
  </body>
</html>`;

  GmailApp.sendEmail(
    email,
    'Teste visual — bloco de benefícios',
    'Seu cliente de e-mail não exibiu a versão HTML.',
    {
      htmlBody: html,
      inlineImages: {
        folha: folha,
        perfume: perfume,
        coracao: coracao
      },
      name: 'Teste de HTML'
    }
  );

  Logger.log('E-mail enviado para: ' + email);
}


function blobDeBase64_(base64, nomeArquivo) {
  return Utilities.newBlob(
    Utilities.base64Decode(base64),
    'image/png',
    nomeArquivo
  );
}
