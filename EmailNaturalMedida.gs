/**
 * Essência do Brasil — Campanha "Natural não significa que podemos usar de qualquer jeito."
 *
 * Como usar:
 *   1. Rode validarTemplateNaturalMedida() para conferir o template.
 *   2. Rode enviarTesteNaturalMedida() — o teste vai para o e-mail da conta que executa o script.
 *
 * Fotos/banners: link público (https). Ícones: inline via cid (inlineImages).
 * Nenhuma imagem vai em "attachments".
 */

var NM_ASSUNTO = '🌿 Toda força natural precisa de medida.';
var NM_REMETENTE = 'Essência do Brasil';

var NM_LARGURA_MAX = 900;              // max-width da tabela principal
var NM_BREAKPOINT = NM_LARGURA_MAX + 20; // regra fixa: max-width + 20px

var NM_LINKS = {
  home: 'https://essenciadobrasil.com.br/',
  oleosEssenciais: 'https://essenciadobrasil.com.br/oleos-essenciais/',
  oleosVegetais: 'https://essenciadobrasil.com.br/oleos-vegetais/',
  aromaterapia: 'https://essenciadobrasil.com.br/aromaterapia-funciona/',
  produtos: 'https://essenciadobrasil.com.br/produtos/',
  contato: 'https://essenciadobrasil.com.br/contato/',
  instagram: 'https://instagram.com/essenciadobrasil.com.br'
};

var NM_BANNERS = {
  heroDesktop: 'https://i.ibb.co/BKnN5Lj4/hero-desktop.jpg', // 900x277
  heroMobile: 'https://i.ibb.co/s9jkgSQY/hero-mobile.jpg'    // 600x875
};

var NM_DESCADASTRO = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. ' +
  'Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';

// Ícones PNG (fundo transparente), em base64. Chave = nome usado no cid:.
var NM_ICONES = {
  logoVerde: 'iVBORw0KGgoAAAANSUhEUgAAADwAAABICAMAAACdkWaXAAAAYFBMVEUiLiMbLx8AfwAcLx8AAAAcMSAbLyAAVQADPAMaLh4aLSAbLx8bMCAbMCAbMB8FOTUbMCAbLB0bLiAWKiMbMB8bKhscMB0bMB8bLx8bLx8cMB8bMCAdLyAbLyAcLyAbMB++5zjcAAAAIHRSTlMaYwLaAPz7AwVEKvnNtvYIjShwFJETKdCph7BVUKbQcszcu88AAAOZSURBVHjapZeJlqowDECrNrRK2URAHR3//y9fkgp0A3Eex+NSe5s0SdNEyP94xPJfWrZ13eLHH2Ate8CnX6FXJJ8B8hzg/LVkJeUFxWYZvl3453ZYy64gll9QdAuqizR7MpCVkD+fOZQZmFOaFkn2iNsFGHC754G/HpO0WGAzyIyQWkthMtI9SYsFNoOhkhU+shrYbilaxOyDTWW0nY0fhs32iGkR+ehkWTFHmLD0KfJYJLlhnQ1DB4ADL2JY8+aTZM3zTEc6HKEsca8or7OjehVW8k4aIksankh/ghXR+P0eKC58Y515d72dNMH46tkSO99owpMr6BxNXplh6z98hCfbhffd4C3vwDi0I6WGbp+GNR4kjMTntLgL4/uTAvXiKu5K5sMP7fTbg6VswSaHNHwlf5znpX2YrZnBNQUr+UObOjirBZI5aDL4cQbmub+08M4xZwArslkGv7FkG9NQuK4IJStJ6cWJ8RHeozHD8A1hG/jojn2oNo6Decn9GryXLwzTWYKYTcnZRq3ByuanySGTZIOjhX9oYrUl7joHExqs8ZZcgt8KNh5Mgxi4zWfJDYb/JERM6kCodRL2Jr7hNmetq09wxXrnrQefaMthdk3AdK5zipMZ9ofW1XbFCKtMTXC7BW4Jru0G35JvUEb2SsNosRJujmRrw3obXM/mFvNy1/A+ScEaU0YZwHdc7hXKSMFKvnDq3YN/cblL4OYkXGGWLMeE4MC3bfAtgu9hVl3eM+Xne2SwehtcRwYrvvNz4YUnWcFsgw3b1g1PskIptsCinG0rxoQP2w8GjIl/TIAlzrttOZI3HCuDBDjE+W8pk+QwBDnsZRObWoeVTZSvIIdVNHj9DF9JSOXnsPdo8ynpN54M4Vlx0OuwHjyvzLfkhe5P72SFcDXOUdH93IG9uvUSrO31D12qMuByx82/YVlxfNdiicqAbJbxXTL+68KKGxbIPI848awE3ZTYkFQyrgBlRQ0L3pBCLZSPHdFYoB7ZsrYOQJimH6lszrmiXSpc2wK4KSh23SiZ/NLtCm4coGhXS2bMyjntHO6PnuGf/kGpFbI8zuxRsU5NQs48TQcoc/6ac6PwsU1oa55dsnyWWfJa2DF8bBNwQlO/qekN0SbRFIpkH1ntagOTZFPvqmQ/udAOUg0szhxQp34a2trFahvt1lX6qy7WLtBzkKg/Nd/UcSTy9iaY0wb8Eba1rNcWfANTrNZr//8D0QBdmjk2STUAAAAASUVORK5CYII=',
  logoCreme: 'iVBORw0KGgoAAAANSUhEUgAAADQAAAA+CAMAAABTPci/AAAAYFBMVEXZ0Kv48dj/AP//5eUAAADx59L////88t3u5M/u4tH//7Xt49Du5NHu48/s48/w5tL/v7//qqr/9uDm2sr//3+8vLzm18mqqqr/f3///wB/f3/yzMzp3sz//9TMzMzb19ONaRpIAAAAIHRSTlMHSQEKAPgB/bgSAzBxjE/SBAP/KAIEEwMCAQIHRwYFDAKh0icAAAL8SURBVHjapZeLdqMgEEDpLg4IKInVPNvm//9yZ2AKqGiSs542TQiXeQ9TIesPpJfKI+qIkZ/a9xLgdQj3ukapxm1QNcjIqVMNPqqb8MNLEKrmkVH06z9rlKi4wDa4f9B6QKqxFXeItZwv0qzppOzCm6+1LLFi+rC1l6Z4uw8deKOV3xJ/LFOHPWhi3cj8R0suYQ2nbejImywuo0SXZH3iVxsQXE4+MgYkef0kfyLlTxeoQ1eQWoVjJ3Qz4a2EKQhXWsK1CoEMedDTGvIRiopibpThEoVBNjs4Q79BsIVZIidp60NM73IO4QJF2bc5eUWOKiqn/ANgCQE80CuooFlCZ7DsOLmEcCl+B+cFdCTP5dNmEGuhk1UMmSiohVsNukEbRZkZFAQNLiXZHMJlNxSiRKohclCK+wKCS3Dtb20JVtopyrWDrEMkCiPs2GSR93ibI7GEACyK0qWkqJ0uMmUJ8QLrJ1g4aQd7EET9DoWk4pgtSYUyIiyEMLT7ULFHVE1aQzNtxG8HUqVJNQjI7lg4IrYglYzcgoKzVGxMIoW2L5vHGjpGdZKkkMSpKjagUB9cBlG9CD1xRIQO/wMFm7x9ZhNm39Im1T+zqVelTabw5o7LY1xmcRrcM0lUvGWcyEZ93Zd01SkuBN1CMvr5HbqEJHf3W1EadMp+Pdl4D6R6ip7o9kujS36I0MjFMl62oMvI5TSW3UjPRa0aC/dYs+p7TZ40FhBfvvO+RycNdEvKcw06S7pXh6QJQ2PQWfk7J+AMOso73cBo8zi/NUJqodYC7+YF9CMFRaRITpFzixRU+oRvIUOAaXIiZuhybopi8CAKeyaeB98QIEN3rqNVZKbKRX3l21151+JHOh2R1gVzKBzX6khArSzsaLTrKdN6p3mhp3lka8xpeVcYLPkvntFujzlhPO4jlh5E+uXcvBjdAE+0nWdR+Oo7ixrAk8nyTBvshyOb3Ielg84vDL6xrMh7f9KnV4b5EUyIE5g3/gPIo9v70N/3IBPH0WP9238ea0ktr5XRcAAAAABJRU5ErkJggg==',
  folhaOuro: 'iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAYFBMVEX/qlUA/wCZZjO2bUi/vz++lFO2kFEAAACyi0+6klOviU6wik+wik6qqlWviU7//wCuiU2/fz+viE6xi09/f3//f3+rfU//AADFmljMmWaZmTN/fwCqVVV/fz+ZmWa2kUgt32q/AAAAIHRSTlMDAQUHBDdqAPj+bpCtAzEBTQQU1AICCwH+BQUCAwQFB4FORJgAAAITSURBVHjarZXrcqMwDIXT7m7li3w3EJK0ff+3rCR7M0vi0HRm+QEMfCMfSUf2AX5wHf4/fKlPwsvk6B6egS+Jbu9/stC7cEiEzN4WrfJSd+HAy0dblFZKe3B7MP3MBpnka97TzKhVWjdWWwHHcDjDbAS1KLCoGMP0I1JSWplsmorH1UiQkZe3GQw9kVWkB5qThKW1I7PaWK2ains4VOCli7dHL2xWusC43WECiqQxA2rKTRuKTrc0gikuyzVQk2UpBjJJmuFlBDthI7hf8oI+Wk7PjSyaWAOx64mFU52PHF58cQcnKVWEU3tBi1Zku4H5HUTF7EdqNaNPnj6sNdzD55C5Zr/dqbOfay5cbTcYq5ac9lNn1wRUPIRpMIMkQmvEo+/s6yrCM5nqDg7TzGFN7xukU8/ADaabk9JIpStSgA9hr73bwlWyy860vpEjo7q67RZ2FJP+SVPQe//JLIJbBnCliuoi/pW+iRgqRBjtSAcOaYS10Rhsc1fDaPsKMLNrr31DEX7LdjgtVIrYWY88qZuabeAJii7NNDN5UsyfHuyikxhGljY81SXCIG6HmyNpnCMZh/aK+bYM28jYdylG/Thsh0PNGzQtOzt/U0EkGtr/3HnvmHAtPXzz3Pa6e6ZUyNyuzNpd2D+AwrIWtgG8p/rtaXWZqBIlB/fU0RaP6u/G9y28eJ6d9NyhuYD3/wzw7vUFtmhC5zxECRAAAAAASUVORK5CYII=',
  ramoOuro: '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',
  icoBroto: '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',
  icoFrasco: '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',
  icoLivro: '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',
  folhaGrande: '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',
  setaCreme: 'iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAMAAAClZq98AAAAYFBMVEUAAAD78dvw5tLu49Du5ND//73/v7/////y6NPt49Dy59P//3/t4c//9uDr3c1/f3+qqqrm3MjRyMj99+K/v7/dzLvf37/d3cz/f3//qqrh4cMAAAAAAAAAAAAAAAAAAABBuM1KAAAAIHRSTlMA//qXeQMEAq5J0wIw/xYCAycJsQQPCA8CAxEAAAAAAAyiHkwAAAC3SURBVHjajZNJEoMwDATHko28sASy5/8PjU0IhwQL+kRRU2qXFqCCQEdgzwGNGjuhNYZs+aiT0BKR4QlOTQUyZOIIEe1Ro+9ytax8aqmBi9JfNWWSRdnCZWXjNpl69F+l3jI7K18As2X7T/nNNpZUDDAa9OFYKFet4D3POgrqw0POdH7MLdjG3ZYW8IBLpcYjzy+aWSWpvnF2VvX1sciBbqd1bjLsLJ2/axuwrq/bPwTZu5efk3oD8nwG+4g+aHEAAAAASUVORK5CYII=',
  instagramCreme: 'iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAYFBMVEUAAADw5tL//v79893x4tHw5NHv5ND//7Xu5dDv5NDv5dH/9+Ho28r//3//qqru5dD//tH/v7+qqqp/f3//f3/o28r/AAD/zMz//wC/v3+/v7/dzLvf37/d3cwAAAAAAACHkhGQAAAAIHRSTlMA+QH+ECvSA22qi/8WAgNSBgQDAgIqAQUBBAQPCA8AAOgsBhkAAAJhSURBVHjarVbZltsgDBVix46XLJ1pZ/r/v1kkwEsCTutTPeQ4xhct94IE8GRYMTiyy9xYt7YFREu/CtWTTT2vXqsYAO28ERUz3mmA4cXbLUK8kFJULb73mvfdu/kZRAORcSJ8gd1jetOlpQYiWmceMKyY+2dv+L1xWlVMO5OgjzVCxA/CSDO22Rh5V6MW0iyEGJv0vwHnK7bYDRHV+ZLWFTX59gBzg0BwxjhGyTEHaMHLnedXTAykc0CJGbizdoAciXHnBwcbLdGJ/LUwHJDQXEELjhxtmbusNbqsoDtFJANnhfzsNsRFSKxyNK3ozxIejmX3H8Ab6QUUN9eBlEOaCjq6zYWwoMhjz/v05TGTBm4VhhQOcoE+Aaa0PYHUFhRJ8UlQMqm384koXn4CqQICxkRVh+DZYyR0qUsdZDlpIVwqtmNfa5GqoEviwvR0jumI91xtTZVvgmZWYUxwSp4mrlIXCvE1UHqO+ppKEhMQN0vGNZBNippwc2omsWGxBppJUdJvFVX0Mh94Cou61rO2efXfQCfDO1GIUyU/Re45GZ0S7D8ejeND+AbUPu60VkDLxTI0L5aF5y05b66wYvN6hb2/LPeKKpdlvm6xcS1nu5bvOKQhNQDE29G4gB/5s3tWP7eakGeCBgY5i6XVRFfc1MINLF4q/QZv+AvApSa21HJQqX3qtiftmTu1Vgbhkbj0o/5+7m3xSKkxKWrDJgeouRETn+bF0ntu7rusB+j94exB+fRgXyaj0bRnFiloXrCVmkbNmTrGBA1QbeQ80yldMZVjqdq1NQviPByqBf9iHv0D0N8YSOWRGagAAAAASUVORK5CYII=',
  chatCreme: 'iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAYFBMVEX07dNqamr/AAD/f3/p38v69eK/f3///wAAAADx59P78Nv//v7u5NDt48//v7///7bv4tHv5dHv5dHw5tL/+ePMzMzu49Cqqqq/v7/a2rf//3/329Xq383/qqr/zMzm3srgwvOTAAAAIHRSTlMGAgECTLoEAQD4/gGSaQQDEahO0P8FNQMEBwIOYgMFJ4h3Zp4AAAGXSURBVHjalVRZdsMgDCRN2goGAhi8Z7n/LSvAWY37Wn3E4Xk8koaRBP0hxD9AgD2uwgLPIGxx2AfI0q7RlWhaOt9Alg5BqkrI0GQuBvV0kLIOksoklGDCjjFSm1Xo9G3iEjR9BCmDq5XtPL8Z8SGQiWYSw7sCgyCXqQZhySjp6VIXUSulqRVt+mPA5dn0w7JmCfPhiEYpT5ZBJqFtjem4vFuYyE50+jyxHM57x490mDLIP0AzNYqLBHyMHsgHGtegKGNDCEoFLId3EPYXrXRrqQuhI9vy4bLHC6gUXgQdxyLkrfAH07dNfkFxTXkggdYSYPHf3WIWiwRcJF9QjwGrsKCQfAABCL4gXTem4Wt1DGJeE6X0nVtFx16JmgFsujP5KDeChe0zCBO0VFWM8i71IUo/na9Agm9Kl2Wkesp9zNeQMiwlJY6ixzJ3SPZ0Xc4w35uDfR7OJK0MJg8E0XQT6nXMQX6pnH2w29wFITccrlWLikKUR0/pLxo2t0qeGJVSYXv1sG9iToXf9hMmY8Z6qrdNt7mk6AdbFTZnVi35vwAAAABJRU5ErkJggg==',
  pagPix: 'iVBORw0KGgoAAAANSUhEUgAAAFwAAAA6CAMAAAAKnM4tAAAAkFBMVEX+/v4pvK3o6OinqarX2NjHyMhNxLgct6iU2tPa8e7///+r4tx50smeoKK0tbbQ6ugAAACcnqD////////////f3+BszcS65uKg39k8wLO+wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADtSu0WAAAAMHRSTlP+////////////Bf//////AP9ot83///////8AAAAAAAAAAAAAAAAAAAAAAAAAAACCD1rgAAAB0ElEQVR42u2YiY6DIBRFH09AELfunfn/Dx120HbUNJJMJl4aNvWUPi7YAM04nq+wu67ncWygaS5QRJdGwwuxDR3OUExnuJaDF0QfOnTo/6qV5dj3mn/ymLwT3q7eNXD1AXsgNSGfDWsD22lOx75y6hGA6VIX6JvxWX0PW4oJIW/pt445CrKO6lzzQzPSaUcRN4zb0jM7YEIAnmy98j30FCodLgdFtQl+f6T+Pv+1rM/hcHN02q34RKhBcs8epHrGK9VkUNW0y9JZt8EnAhxdqtwzi3BNp+tso9rRDTub1WW4tk2/EhMfDkv37EhfgdOqWp7Mtk50CGzbWIVrO0bPvBePNqk5zzzzCscZ3FoeF42YgF9KpUb7Cp9ZMSynpbE/Q1iIfKj0VY8XuF8socuzV+gh6Hoy62BIIuKEohPtPdUUg2lmy5hRigv02hnF0OvENiTm962wVpnduCZLF777iv46dsK5N4qm33lkw4rTNm64UsSZlNnGtQtcZLsiUTvDIdsVBewNTwtVwAyO6DIjMHXGkOrkPjpRU6Fb6BN2bkXEm4VToEwnm6EptG6M4YbIiNkbdL93tBDD8afv0KFDf/TE5Vr2GKroAVrZo7+Ch5Y/puQOfMthPBMAAAAASUVORK5CYII=',
  pagVisa: 'iVBORw0KGgoAAAANSUhEUgAAAFwAAAA6CAMAAAAKnM4tAAAAkFBMVEX+6dAqZJtpptOOkYb3x3n/1pZ4gGa7kTC2l0Hdnx/8q0X+/v4AV5sBXqAHYqJ1p8sreK9Ki7qNuNXU5fC51Ob///9Skr7F2+kATJWsy+FjnMRZlsH+mhf/yogAAADi7fX///////////8cc6w6grX+oy2mx93/qxWcwtv/2qsEYZ39nSWJhFuAq83+tVb/vGdtNiNGAAAAMHRSTlP///////////////7///////////8F//////////8A/2i3zf////////////////+XUAQ+AAACyElEQVR42u1YyVbjMBA022yWWpLteIU4ZAcG+P+/m14kxcwj8QVfZtwHvESqri5VSzwni+VytU6/PNar5XKRLBaP6STxuEDwibAJPVmlk8UqWU8Hvk7SCWMGn8Fn8Bl8YvC7h9sHiaf4bm8omrTna+bfNsZZgI0z+zgw4wH9WfDk6X13L/Ee3kGtMIq0oEvdSUKrQuhchuXyqj5elOXp7bDDuPev9woAlENifMPMDWKChAY/zSh+VmZE85ufh5fdixfGKVBaNTxba6xAcPBWwoUClcYAtR0Bv1Y/Drv7B6mWJikrWbQCFKFiGGVbYzqrOi84pdZIA0bAC61/H17eQrVaxLAhS8sltH5sIVdLqWkEVCNWRJxvh1/hFif0UgJrn26jPqdoCNtulCdyCbxUz8g98ZOAWRZAil5HcJsPZ6BmUGev+DeUdBZ8T4v4/Y7TkJS5F1VotSIvmBN8xfXlGfMfAUcJnvXV7VALb5ZKfuUqED5M6IjyFluB1jQfaX9cnmd94z1APpQa2CxpelTMHeFtFS1FVfVsrWYEnGle8XKCr3MTzEL62wAv3jCcuPfjzQg41QeqkEt2IlfG7EC+Cz3Dv7W+vWJbnQPvyVR1I4yC9z+Qyo20JFlSGqjyq84lXNxyWWE3qFLUH3q4AK7rGHrBWru1nK8aAc+IlnScLH4b2X0gAGqPvcCQskfqvyh8Bp5riaigCwodg72ZOeV27Ey/Serhypw7iazy4N5Y0SxlDc5kx6wTVVzYx8L2Hu11Adx4r9lTJcA74FbpAQ4KJftYx8eQKQdKngdv/N6fBW+Gg8AqCIEwDXoUJYlkqXthuKl9Ct4Lv3jO0FlXY6YqCoDUXR5+iR619fDp3OlvXFl2Lix85krnSiq3yDq7ATqbX9k7raOIQmT0ZP6x/1tm8Bl8Bv/PwCf9mDPpZ6hJP6BN++lvwo+WfwBPbPy7NdssmwAAAABJRU5ErkJggg==',
  pagMastercard: 'iVBORw0KGgoAAAANSUhEUgAAAFwAAAA6CAMAAAAKnM4tAAAAkFBMVEX2o6T3YmX+nij+sFL/2qj8xMgZGBj5Ng3ovsL/xntgXl/1PUCAf3/5foD+/v7zAAn+mgf+WADJyclJSEjr5ubW1db/ZQH9ogr+6M9qaWn////+jASHhoaXlpepqKg3NjZWVVXzFhR3dnb+SgH92NgAAAD///////////8nJib5Kgb+dQP+y4z/27C3t7f0OTq1dr9UAAAAMHRSTlP///////////////////7//////////////wX/////////////AGi3zf/////////DE87sAAACTElEQVR42u2YC4+iMBDHK6Cr9yjQh0el0ILoyp6P7//tbty9GLWFs2CTTW7/CUFh+DGZTqdD0Wqz2e7w07XbbjYrtFq9Yi96XQHcE/tMR1vsTVu08wffIexRX/CB8GY6R/Npc30py7Ioy0bDm8mpis+qvk/+8qMwSN4VhPsx8GYSX+uMz8LkWovBcFTFt6rQIr9hJ3lwGAafxIbefv9K7pRHQ+AW9nq5ttD37nBksl+WaWqjH1zhU0tMgA1KDHrgCj+Z8PRDSwOehG5w1Ol4muYmPXOCTzodt7q+cIE3JrtaXugGuyvqyCVVXONih/+05fgFbmZjcnCA2yZQ2hf0aBw87YXvfcKjp4VlZMz7s+X58LfeVHTJc1aZkyjtmUTh2Om/7o5KV0lHrhXX5njiWHK7XV8+vhZ1wZuqq3TZIp6NX+bOgVlbq5Yr3J7r68dXiv7WwuZ7bpbybFhTNL1fSE/TKLjF5+HwXhG9XKPfbffB9VAeRnW5CDrRKq6gD71YHj46UehD/9XoPtCfs6xh7O7aIw30p/myKDrvfOOOcEaKI5fwVFESjKVk5axguIA3kIJjCWcJN8AIDChxhB9ntaK1YoKKGddC8qIV/IcQgs8EoeJ86JYpTYQGA0d4ScFdrAuKsSZSS8bgV1vXlFBcang5/KWcYqbAYAC8lpiWtCQt4UcqWEsYhVAQhYkiZK5I2XLFmDqS1hVOaggmrgmhWnBJYcykIlzTktUwDoqyUuma1QwjBQb86wv6/4B73czxug3ldQPN79afx03LP9QOPd2YtSMfAAAAAElFTkSuQmCC',
  pagAmex: 'iVBORw0KGgoAAAANSUhEUgAAAFwAAAA6CAMAAAAKnM4tAAAAkFBMVEX+/v4DkuEAiN4AjuDJ5/a94/ZDrOdMs+gxo+Sr2vKJy+5ovep0wuwlm+KY0vD///8AfNrb8PkAAAD///////////8OkN8hj98+sOkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD384KXAAAAMHRSTlP+//////////////////8F//8AaLfN////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuc1yKAAAC10lEQVR42u1Ya2/bMAwUqRdJPWL3ke3//9Id4xTo9iWzWw8YkEMiUbJypiny6ipcXl5e38O34/315eUSLpe3cAreLiA/idvZw2s4Da/h/TzyE6mf+Fuk/AWkB+TC8TBYHpAXpsPg+iR/kn83eWTkOzO78Rk+jPe5SPcFcSd57V1Kb428uQNWEfQkZhULCmEKK1uJe8jjSKYpqaWep6GfaKeZ5ZAshWxdw5yprpZnmpp5Dzl3WzgHRj1P5jbw+EvzILD1pSWMhsGeaNLKpLs8Z5XILcAKLcYuUaFnRGosnZtwT6kylzBjLCvJLnIemQuN5HcpzF0YIcYoTa4dVwjrSISDMrHtJW9z0caK9YXgpyAvcCtPkgTnnVwRlEXVB3vJ4W8VxFoqU3fPIdTwfFauxnVgCAsf5WYcd5FHyp66cFeMiy0gF5EGhzNivvS+4IGwgAl3Cli1h5ybXrFlZYyShukPq2MQNSk6R7FhoXkhYE9HHy1gbhd5TTlJR/MHzG5zffqg1tugWUoz7qvQa9x+8FH29Hu3XbhuNn8IwF7hknKDbMa9G8hD7wliIKi0ht3fTx5pi0e+fxNKXzWndc0+EdR07TObBuMD5LrFQcIWkJpvSogigAQUv0jrdDUILl67ySNBryiKR9VLlcgqAsF1mgpPQxbx7Gzu+iHyrByhVCVstQ9t6KgmwztOgUYOLjPpOOI5in4pCAqq0fOibyLQPSyaIJdXzcMDdSwsA7vYkGvVU0dXryZu0EZMr0hzpuASiWc5FJbaKhqkeAk6IbwhecyRhR2631kmW3O1PEB+vaVJCwM/nUwZSpwJggYM9Wt5RS0RnD+S51t+o/Az5NzzXvGXY5sNbltHux7Ic6IhN0DPRcY2Ruxlm4Z8oTZ51EMVCt/vuBmfxh8vzTdtPqotz9e5f0COfT/6LxHxzwfklb6AR54/8b/j1MOcU4+hTj1AO/fo78RDy18l4CTZBoWU7wAAAABJRU5ErkJggg==',
  pagBoleto: 'iVBORw0KGgoAAAANSUhEUgAAAFwAAAA6CAMAAAAKnM4tAAAAkFBMVEX+/v4FBATJyMjU1NRYV1dkZGSXlZWop6cYFRU4Nze4t7eIh4egn5/n5+dKSEgpKCh3d3cgHBz///8AAAD///////////9APj5gXl6/wMDAv78AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHsz/LAAAAMHRSTlP+//////////////////////8FAGi3zf////8AAAAAAAAAAAAAAAAAAAAAAAAAAAD9m7uCAAACDklEQVR42u2Ya2+rMAyGHV9ybS5ru7Y7//+HHgdQ1X3byCJtEhZIxKAHJxi/SeB8uVxv8ON2u14uZzif32GKvZ8VPond6XCFaXaF2zz4RPRh37eM66mGSABEyzXlrb3cyOv5bbMGwZnYEd4wQODFLQnIm7KyzQnIpB3w0wvcd7g84W+eN7hTuB2EmwN+wA/4Af9r8JlV0bzUc36p5/8UvB8ea5ciCqEptS3uZnt77QXWkci/YAPDItwyENeCgKJiaYUFRZoI5MU7AOcQfcu+pmqyM6rKxbeGrRhuVH0K+sh+uBS8YzMZsmmxw/VtGm1UT+rNtzIC98UjB21VXuG+atL0TohXb6kD8AdDKT0fo7Fb5P1WhzvNcTQyMuaedVpSTDFBadVbMSGgTmn6e0wwNQ/A0dr+F1lRADlnEU/WKtD2WZaTlOG35jmlpAOgyaKHdsEqJ/ds15CdHmORJ24CSfMtEAX9tkKgDqyNoaINEkbG3N3ZgTDmGpLE2ue+wkT3ZCF86JctaQBuH5Y1QCamWshHDbywUClRI+9/6VDJDcXKKbLTUpJ6C9lFjorPBXMJaSxb8rxsQe5LCBJViF7IlzWB6+O+TviJ408oUenV5alEZlOiuFuJ3BOumvn4pKF1WEO/vCbaFXkliH7V0KpRlxcNrZuGeo287oEf9jdt6mbO1G2oqRtoc7f+Jm5a/gcYxhw+u7XOkAAAAABJRU5ErkJggg=='
};

var NM_COR = {
  fundo: '#e9e2d4',
  creme: '#f4ede1',
  painel: '#f9f5ee',
  dourado: '#eadbbf',
  verde: '#1c3020',
  verdeEscuro: '#14241a',
  ouro: '#a9824a',
  ouroClaro: '#d8b77c',
  texto: '#2b2a24',
  texto2: '#4d4a40',
  cremeTexto: '#eee4d0',
  cinzaRodape: '#a9a28f'
};

var NM_SERIF = "Georgia,'Times New Roman',Times,serif";
var NM_SANS = 'Arial,Helvetica,sans-serif';

/* ------------------------------------------------------------------ */
/* Envio                                                               */
/* ------------------------------------------------------------------ */

function enviarTesteNaturalMedida() {
  validarTemplateNaturalMedida();
  var destinatario = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(destinatario, montarAssuntoNaturalMedida_(), montarTextoNaturalMedida_(), montarOpcoesNaturalMedida_());
  Logger.log('Teste enviado para ' + destinatario);
}

// GmailApp corrompe emoji (caractere de 4 bytes) no assunto. O assunto vai
// codificado como "encoded-word" (RFC 2047), que os clientes decodificam.
function montarAssuntoNaturalMedida_() {
  return '=?UTF-8?B?' + Utilities.base64Encode(NM_ASSUNTO, Utilities.Charset.UTF_8) + '?=';
}

function montarOpcoesNaturalMedida_() {
  return {
    htmlBody: montarHtmlNaturalMedida_(),
    name: NM_REMETENTE,
    inlineImages: montarInlineImagesNaturalMedida_()
  };
}

function montarInlineImagesNaturalMedida_() {
  var imagens = {};
  Object.keys(NM_ICONES).forEach(function (chave) {
    imagens[chave] = Utilities.newBlob(Utilities.base64Decode(NM_ICONES[chave]), 'image/png', chave + '.png');
  });
  return imagens;
}

/* ------------------------------------------------------------------ */
/* Validação                                                           */
/* ------------------------------------------------------------------ */

function validarTemplateNaturalMedida() {
  var html = montarHtmlNaturalMedida_();
  var opcoes = montarOpcoesNaturalMedida_();
  var erros = [];

  // Regra 17: nada em attachments.
  if (opcoes.hasOwnProperty('attachments')) erros.push('Opções contêm "attachments".');

  // Assunto com emoji precisa sair codificado (senão aparece como "�").
  if (!/^=\?UTF-8\?B\?[A-Za-z0-9+\/=]+\?=$/.test(montarAssuntoNaturalMedida_())) erros.push('Assunto não está codificado em UTF-8 (encoded-word).');

  // Regra 19: chaves de inlineImages x cid: usados no HTML (1 para 1).
  var chaves = Object.keys(opcoes.inlineImages).sort();
  var cids = unicos_((html.match(/cid:([A-Za-z0-9_]+)/g) || []).map(function (c) { return c.slice(4); })).sort();
  chaves.forEach(function (k) { if (cids.indexOf(k) < 0) erros.push('Imagem órfã em inlineImages: ' + k); });
  cids.forEach(function (c) { if (chaves.indexOf(c) < 0) erros.push('cid sem imagem em inlineImages: ' + c); });

  // Regras 7, 8 e 23: toda <img> com width/height HTML, max-width:100% e src válido.
  (html.match(/<img\b[^>]*>/g) || []).forEach(function (tag) {
    if (!/\swidth="\d+"/.test(tag) || !/\sheight="\d+"/.test(tag)) erros.push('<img> sem width/height HTML: ' + tag.slice(0, 90));
    if (!/max-width:100%/.test(tag)) erros.push('<img> sem max-width:100%: ' + tag.slice(0, 90));
    var src = (tag.match(/\ssrc="([^"]*)"/) || [])[1] || '';
    if (!/^cid:/.test(src) && !/^https:\/\//.test(src)) erros.push('<img> com src inválido: ' + src);
    if (/^cid:/.test(src) && /banner-/.test(tag)) erros.push('Banner usando cid (deve ser link público): ' + src);
  });
  [NM_BANNERS.heroDesktop, NM_BANNERS.heroMobile].forEach(function (url) {
    if (html.indexOf(url) < 0) erros.push('Banner ausente no HTML: ' + url);
  });

  // Regra 24: as duas versões do banner presentes e alternadas na media query.
  if (!/class="banner-desktop"/.test(html) || !/class="banner-mobile"/.test(html)) erros.push('Faltam as versões desktop/mobile do banner.');
  if (html.indexOf('.banner-desktop{display:none!important') < 0 || html.indexOf('.banner-mobile{display:block!important') < 0) erros.push('Media query não alterna os banners.');

  // Regras 2 e 4: toda tabela com width HTML e width no style.
  (html.match(/<table\b[^>]*>/g) || []).forEach(function (tag) {
    if (!/\swidth="[^"]+"/.test(tag) || !/style="[^"]*width:/.test(tag)) erros.push('<table> sem width explícito: ' + tag.slice(0, 90));
  });

  // Regra 21: <td> alvo de media query não pode ter atributo width=.
  (html.match(/<td\b[^>]*>/g) || []).forEach(function (tag) {
    if (/class="[^"]*\b(stack100|mhide)\b/.test(tag) && /\swidth="/.test(tag)) erros.push('<td> com classe mobile e atributo width=: ' + tag.slice(0, 90));
  });

  // Regra 12: breakpoint = max-width + 20.
  if (html.indexOf('max-width:' + NM_LARGURA_MAX + 'px') < 0) erros.push('Tabela principal sem max-width:' + NM_LARGURA_MAX + 'px.');
  if (html.indexOf('@media only screen and (max-width:' + NM_BREAKPOINT + 'px)') < 0) erros.push('Breakpoint diferente de ' + NM_BREAKPOINT + 'px.');

  // Regra 14: links só para destinos confirmados.
  var permitidos = Object.keys(NM_LINKS).map(function (k) { return NM_LINKS[k]; });
  (html.match(/href="([^"]*)"/g) || []).forEach(function (h) {
    var url = h.slice(6, -1);
    if (permitidos.indexOf(url) < 0) erros.push('Link fora da lista confirmada: ' + url);
  });

  // Regra 15: texto de descadastro exato.
  if (html.indexOf(NM_DESCADASTRO) < 0) erros.push('Texto de descadastro ausente ou alterado.');

  if (erros.length) throw new Error('Template com problemas:\n- ' + erros.join('\n- '));
  Logger.log('Template OK: ' + chaves.length + ' ícones inline, todos referenciados; banners por link público.');
  return true;
}

function unicos_(lista) {
  return lista.filter(function (v, i) { return lista.indexOf(v) === i; });
}

/* ------------------------------------------------------------------ */
/* Texto simples (fallback)                                            */
/* ------------------------------------------------------------------ */

function montarTextoNaturalMedida_() {
  return [
    'ESSÊNCIA DO BRASIL',
    '',
    'Natural não significa que podemos usar de qualquer jeito.',
    '',
    'O que vem da natureza é valioso, mas isso não quer dizer que seja livre de cuidados. Entender como usar cada ingrediente é essencial para aproveitar todos os seus benefícios com segurança e bem-estar.',
    '',
    'Ser natural é uma origem. Saber usar é conhecimento.',
    'A segurança de um produto não depende só da sua origem. Ela depende da substância, da concentração, da forma de utilização e da finalidade, entre outros fatores.',
    '',
    'TRÊS COISAS PARA LEMBRAR',
    '1. Natural não significa uso ilimitado. A origem de uma substância não determina, sozinha, como ela deve ser utilizada.',
    '2. Cada produto tem uma finalidade. Óleo essencial, óleo vegetal, perfume: cada um tem características próprias e uma forma certa de ser usado.',
    '3. Informação também é cuidado. Ler as orientações e respeitar a forma indicada de uso é parte de aproveitar melhor cada produto.',
    '',
    'Natural pode ser maravilhoso. Conhecer aquilo que usamos torna essa experiência ainda melhor.',
    '',
    'Conheça mais sobre nossos produtos: ' + NM_LINKS.produtos,
    '',
    'Instagram: ' + NM_LINKS.instagram,
    'Fale conosco: ' + NM_LINKS.contato,
    '',
    NM_DESCADASTRO
  ].join('\n');
}

/* ------------------------------------------------------------------ */
/* HTML                                                                */
/* ------------------------------------------------------------------ */

function nmIcone_(chave, largura, altura, alt, estiloExtra) {
  return '<img src="cid:' + chave + '" width="' + largura + '" height="' + altura + '" alt="' + (alt || '') + '"' +
    ' style="display:inline-block;width:' + largura + 'px;height:' + altura + 'px;max-width:100%;border:0;outline:none;text-decoration:none;' + (estiloExtra || '') + '">';
}

function montarHtmlNaturalMedida_() {
  var C = NM_COR;
  var h = [];

  h.push('<!DOCTYPE html><html lang="pt-BR"><head>');
  h.push('<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">');
  h.push('<meta name="x-apple-disable-message-reformatting"><title>Essência do Brasil</title>');
  h.push('<style>');
  h.push('@media only screen and (max-width:' + NM_BREAKPOINT + 'px){');
  h.push('.stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}');
  h.push('.stackgap{display:block!important;height:20px!important;max-height:none!important;line-height:20px!important;font-size:20px!important;}');
  h.push('.mpad{padding:24px 24px!important;}');
  h.push('.mpadtop0{padding-top:0!important;}');
  h.push('.mcenter{text-align:center!important;}');
  h.push('.mhide{display:none!important;max-height:0!important;overflow:hidden!important;}');
  h.push('.nodiv{border-left:0!important;padding-left:0!important;}');
  h.push('.banner-desktop{display:none!important;max-height:0!important;overflow:hidden!important;}');
  h.push('.banner-mobile{display:block!important;max-height:none!important;width:100%!important;height:auto!important;}');
  h.push('.t-afirm{font-size:16px!important;line-height:27px!important;letter-spacing:2px!important;}');
  h.push('.t-titulo{font-size:28px!important;line-height:34px!important;}');
  h.push('.t-titulo2{font-size:24px!important;line-height:30px!important;}');
  h.push('.t-corpo{font-size:15px!important;line-height:24px!important;}');
  h.push('.t-cita{font-size:20px!important;line-height:28px!important;}');
  h.push('.t-menu{font-size:11px!important;letter-spacing:2px!important;line-height:20px!important;}');
  h.push('}');
  h.push('</style></head>');

  h.push('<body style="margin:0;padding:0;background-color:' + C.fundo + ';-webkit-text-size-adjust:100%;">');

  // Envelope fluido (regra 2)
  h.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="' + C.fundo + '" style="width:100%;table-layout:fixed;background-color:' + C.fundo + ';"><tr><td align="center" style="padding:0;">');
  h.push('<!--[if mso]><table role="presentation" width="900" cellpadding="0" cellspacing="0" border="0" style="width:900px;"><tr><td><![endif]-->');
  h.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="' + C.creme + '" style="width:100%;max-width:' + NM_LARGURA_MAX + 'px;table-layout:fixed;background-color:' + C.creme + ';margin:0 auto;">');

  /* 1. Cabeçalho — 3 colunas */
  h.push('<tr><td style="padding:0;">');
  h.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;"><tr>');
  h.push('<td class="stack100 mhide" valign="middle" style="width:33.33%;padding:30px 20px 26px 40px;font-family:' + NM_SANS + ';font-size:10px;line-height:17px;letter-spacing:2.5px;color:' + C.texto + ';text-transform:uppercase;">Natureza, ciência e emoções em cada aroma.</td>');
  h.push('<td class="stack100 mpad" valign="middle" align="center" style="width:33.33%;padding:26px 10px 22px 10px;text-align:center;">');
  h.push('<a href="' + NM_LINKS.home + '" style="text-decoration:none;color:' + C.verde + ';">' + nmIcone_('logoVerde', 26, 31, 'Essência do Brasil', 'display:block;margin:0 auto 8px auto;'));
  h.push('<span style="display:block;font-family:' + NM_SERIF + ';font-size:28px;line-height:32px;letter-spacing:5px;color:' + C.verde + ';">ESSÊNCIA</span>');
  h.push('<span style="display:block;font-family:' + NM_SERIF + ';font-size:11px;line-height:18px;letter-spacing:5px;color:' + C.verde + ';">— DO BRASIL —</span></a></td>');
  h.push('<td class="stack100 mcenter mpad mpadtop0" valign="middle" align="right" style="width:33.33%;padding:30px 40px 26px 20px;text-align:right;">');
  h.push('<span class="t-menu" style="font-family:' + NM_SANS + ';font-size:10px;line-height:20px;letter-spacing:2.5px;">');
  h.push('<a href="' + NM_LINKS.oleosEssenciais + '" style="color:' + C.texto + ';text-decoration:none;white-space:nowrap;">ÓLEOS ESSENCIAIS</a> <span style="color:' + C.ouro + ';">•</span> ');
  h.push('<a href="' + NM_LINKS.oleosVegetais + '" style="color:' + C.texto + ';text-decoration:none;white-space:nowrap;">ÓLEOS VEGETAIS</a> <span style="color:' + C.ouro + ';">•</span> ');
  h.push('<a href="' + NM_LINKS.aromaterapia + '" style="color:' + C.texto + ';text-decoration:none;white-space:nowrap;">AROMATERAPIA</a>');
  h.push('</span></td></tr></table></td></tr>');

  /* 2. Hero — banner desktop + mobile (regra 24) */
  h.push('<tr><td style="padding:0;font-size:0;line-height:0;">');
  h.push('<img src="' + NM_BANNERS.heroDesktop + '" class="banner-desktop" width="900" height="277" alt="Natural não significa que podemos usar de qualquer jeito. O que vem da natureza é valioso, mas isso não quer dizer que seja livre de cuidados." style="display:block;width:100%;max-width:100%;height:auto;border:0;">');
  h.push('<!--[if !mso]><!-->');
  h.push('<img src="' + NM_BANNERS.heroMobile + '" class="banner-mobile" width="600" height="875" alt="Natural não significa que podemos usar de qualquer jeito. O que vem da natureza é valioso, mas isso não quer dizer que seja livre de cuidados." style="display:none;width:100%;max-width:100%;height:auto;max-height:0;overflow:hidden;border:0;">');
  h.push('<!--<![endif]-->');
  h.push('</td></tr>');

  /* 3. Abertura — 4 colunas */
  var div = 'border-left:1px solid ' + C.ouroClaro + ';padding-left:18px;';
  h.push('<tr><td style="padding:24px 22px 24px 22px;">');
  h.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;"><tr>');
  h.push('<td class="stack100 mpad mcenter" valign="middle" style="width:25%;padding:22px 16px 22px 18px;">');
  h.push('<p class="t-afirm" style="margin:0;font-family:' + NM_SERIF + ';font-size:16px;line-height:29px;letter-spacing:2.5px;color:' + C.texto + ';">SER NATURAL É UMA ORIGEM. SABER USAR É <span style="color:' + C.ouro + ';">CONHECIMENTO.</span></p></td>');
  h.push('<td class="stack100 mpad mpadtop0 mcenter" valign="middle" style="width:25%;padding:22px 14px;">');
  h.push('<div class="nodiv" style="' + div + '">');
  h.push('<p class="t-corpo" style="margin:0 0 12px 0;font-family:' + NM_SANS + ';font-size:13px;line-height:21px;color:' + C.texto2 + ';">Quando vemos a palavra “natural”, é comum pensar que algo pode ser usado sem preocupação. Mas a natureza é muito mais complexa do que isso.</p>');
  h.push('<p class="t-corpo" style="margin:0;font-family:' + NM_SANS + ';font-size:13px;line-height:21px;color:' + C.texto2 + ';">A segurança de um produto não depende só da sua origem. Ela depende da substância, da concentração, da forma de utilização e da finalidade, entre outros fatores.</p>');
  h.push('</div></td>');
  h.push('<td class="stack100 mpadtop0" valign="middle" align="center" style="width:25%;padding:10px 10px;text-align:center;">' + nmIcone_('ramoOuro', 96, 128, '', 'display:block;margin:0 auto;') + '</td>');
  h.push('<td class="stack100 mpad mcenter" valign="middle" style="width:25%;padding:22px 18px 22px 14px;">');
  h.push('<div class="nodiv" style="' + div + '">');
  h.push('<p class="t-cita" style="margin:0 0 10px 0;font-family:' + NM_SERIF + ';font-style:italic;font-size:21px;line-height:30px;color:' + C.verde + ';">A natureza tem força. E também tem medida.</p>');
  h.push(nmIcone_('folhaOuro', 22, 22, '', 'display:inline-block;'));
  h.push('</div></td>');
  h.push('</tr></table></td></tr>');

  /* 4. Três coisas para lembrar — título + 3 colunas */
  var pontos = [
    { ico: 'icoBroto', titulo: '1. NATURAL NÃO SIGNIFICA USO ILIMITADO.', texto: 'A origem de uma substância não determina, sozinha, como ela deve ser utilizada.' },
    { ico: 'icoFrasco', titulo: '2. CADA PRODUTO TEM UMA FINALIDADE.', texto: 'Óleo essencial, óleo vegetal, perfume: cada um tem características próprias e uma forma certa de ser usado.' },
    { ico: 'icoLivro', titulo: '3. INFORMAÇÃO TAMBÉM É CUIDADO.', texto: 'Ler as orientações e respeitar a forma indicada de uso é parte de aproveitar melhor cada produto.' }
  ];
  h.push('<tr><td style="padding:0 20px 28px 20px;">');
  h.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="' + C.painel + '" style="width:100%;table-layout:fixed;background-color:' + C.painel + ';border:1px solid #e7dcc8;">');
  h.push('<tr><td align="center" class="mpad" style="padding:30px 30px 6px 30px;text-align:center;font-family:' + NM_SERIF + ';font-size:15px;line-height:24px;letter-spacing:4px;font-weight:bold;color:' + C.texto + ';">TRÊS COISAS PARA LEMBRAR:</td></tr>');
  h.push('<tr><td style="padding:0 10px 26px 10px;">');
  h.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;"><tr>');
  pontos.forEach(function (p, i) {
    var borda = i > 0 ? 'border-left:1px solid ' + C.ouroClaro + ';padding-left:22px;' : 'padding-left:4px;';
    h.push('<td class="stack100 mpad" valign="top" style="width:33.33%;padding:22px 18px 6px 18px;">');
    h.push('<div class="nodiv mcenter" style="' + borda + '">');
    h.push(nmIcone_(p.ico, 56, 56, '', 'display:inline-block;margin:0 0 14px 0;'));
    h.push('<p style="margin:0 0 8px 0;font-family:' + NM_SERIF + ';font-size:13px;line-height:20px;letter-spacing:1.5px;font-weight:bold;color:' + C.verde + ';">' + p.titulo + '</p>');
    h.push('<p class="t-corpo" style="margin:0;font-family:' + NM_SANS + ';font-size:13px;line-height:21px;color:' + C.texto2 + ';">' + p.texto + '</p>');
    h.push('</div></td>');
  });
  h.push('</tr></table></td></tr></table></td></tr>');

  /* 5. Faixa de destaque — 3 colunas, fundo verde */
  h.push('<tr><td style="padding:0 20px 28px 20px;">');
  h.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="' + C.verde + '" style="width:100%;table-layout:fixed;background-color:' + C.verde + ';border-radius:6px;"><tr>');
  h.push('<td class="stack100 mpad" valign="middle" align="center" style="width:33.33%;padding:34px 20px;text-align:center;">' + nmIcone_('folhaGrande', 100, 100, '', 'display:block;margin:0 auto;') + '</td>');
  h.push('<td class="stack100 mpad mpadtop0" valign="middle" align="center" style="width:33.33%;padding:34px 16px;text-align:center;">');
  h.push('<p class="t-titulo" style="margin:0 0 12px 0;font-family:' + NM_SERIF + ';font-size:33px;line-height:40px;color:' + C.cremeTexto + ';">Natural pode ser <em style="font-style:italic;color:' + C.ouroClaro + ';">maravilhoso.</em></p>');
  h.push(nmIcone_('folhaOuro', 22, 22, '', 'display:inline-block;'));
  h.push('</td>');
  h.push('<td class="stack100 mpad mpadtop0 mcenter" valign="middle" style="width:33.33%;padding:34px 34px 34px 16px;">');
  h.push('<div class="nodiv" style="border-left:1px solid ' + C.ouroClaro + ';padding-left:22px;">');
  h.push('<p class="t-corpo" style="margin:0;font-family:' + NM_SANS + ';font-size:16px;line-height:26px;color:' + C.cremeTexto + ';">Conhecer aquilo que usamos torna essa experiência ainda melhor.</p>');
  h.push('</div></td>');
  h.push('</tr></table></td></tr>');

  /* 6. Bloco da marca — 3 colunas */
  h.push('<tr><td style="padding:0 22px 26px 22px;">');
  h.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;"><tr>');
  h.push('<td class="stack100 mpad mcenter" valign="middle" style="width:33.33%;padding:22px 18px;">');
  h.push('<p class="t-afirm" style="margin:0;font-family:' + NM_SERIF + ';font-size:16px;line-height:29px;letter-spacing:2.5px;color:' + C.texto + ';">NA ESSÊNCIA DO BRASIL, A INFORMAÇÃO TAMBÉM FAZ PARTE DA <span style="color:' + C.ouro + ';">EXPERIÊNCIA.</span></p></td>');
  h.push('<td class="stack100 mpad mpadtop0 mcenter" valign="middle" style="width:33.33%;padding:22px 16px;">');
  h.push('<div class="nodiv" style="' + div + '">');
  h.push('<p class="t-corpo" style="margin:0 0 12px 0;font-family:' + NM_SANS + ';font-size:13px;line-height:21px;color:' + C.texto2 + ';">Muitos dos produtos que fazem parte do nosso catálogo têm origem natural. Por isso, informação é parte importante da experiência de usar cada um deles.</p>');
  h.push('<p class="t-corpo" style="margin:0;font-family:' + NM_SANS + ';font-size:13px;line-height:21px;color:' + C.texto2 + ';">Cuidar de quem usa também é explicar: para que cada produto serve, como deve ser aplicado e o que o torna diferente dos demais.</p>');
  h.push('</div></td>');
  h.push('<td class="stack100 mpad mpadtop0 mcenter" valign="middle" style="width:33.33%;padding:22px 18px 22px 14px;">');
  h.push('<div class="nodiv" style="' + div + '">');
  h.push('<p class="t-cita" style="margin:0 0 10px 0;font-family:' + NM_SERIF + ';font-style:italic;font-size:21px;line-height:30px;color:' + C.verde + ';">Mais do que aromas, queremos compartilhar conhecimento.</p>');
  h.push(nmIcone_('folhaOuro', 22, 22, '', 'display:inline-block;'));
  h.push('</div></td>');
  h.push('</tr></table></td></tr>');

  /* 7. Fechamento + CTA — 2 colunas */
  h.push('<tr><td style="padding:0;">');
  h.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="' + C.dourado + '" style="width:100%;table-layout:fixed;background-color:' + C.dourado + ';"><tr>');
  h.push('<td class="stack100 mpad mcenter" valign="middle" style="width:50%;padding:40px 24px 40px 44px;">');
  h.push('<p class="t-titulo2" style="margin:0 0 12px 0;font-family:' + NM_SERIF + ';font-size:27px;line-height:34px;color:' + C.verde + ';">Conhecer é a forma mais bonita de cuidar.</p>');
  h.push('<p class="t-corpo" style="margin:0;font-family:' + NM_SANS + ';font-size:14px;line-height:22px;color:' + C.texto2 + ';">Respeitar a natureza começa no gesto de entender o que ela nos oferece e de usar cada aroma com a atenção que ele merece.</p>');
  h.push('<div class="stackgap" style="display:none;height:0;max-height:0;overflow:hidden;line-height:0;font-size:0;">&nbsp;</div>');
  h.push('</td>');
  h.push('<td class="stack100 mpad mpadtop0" valign="middle" align="center" style="width:50%;padding:30px 44px 30px 24px;text-align:center;">');
  h.push(nmIcone_('ramoOuro', 63, 84, '', 'display:block;margin:0 auto 14px auto;'));
  h.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="width:100%;max-width:330px;table-layout:fixed;margin:0 auto;"><tr>');
  h.push('<td align="center" bgcolor="' + C.verde + '" style="background-color:' + C.verde + ';border-radius:40px;text-align:center;">');
  h.push('<a href="' + NM_LINKS.produtos + '" style="display:block;padding:16px 20px;font-family:' + NM_SANS + ';font-size:12px;line-height:18px;letter-spacing:1.5px;font-weight:bold;color:' + C.cremeTexto + ';text-decoration:none;border-radius:40px;">CONHEÇA MAIS SOBRE NOSSOS PRODUTOS ' + nmIcone_('setaCreme', 18, 12, '', 'vertical-align:middle;margin-left:4px;') + '</a>');
  h.push('</td></tr></table></td>');
  h.push('</tr></table></td></tr>');

  /* 8. Rodapé — 4 colunas */
  var rotulo = 'margin:0 0 12px 0;font-family:' + NM_SANS + ';font-size:10px;line-height:16px;letter-spacing:2px;font-weight:bold;color:' + C.ouroClaro + ';';
  var divR = 'border-left:1px solid #3a4d3d;padding-left:16px;';
  h.push('<tr><td style="padding:0;">');
  h.push('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="' + C.verde + '" style="width:100%;table-layout:fixed;background-color:' + C.verde + ';"><tr>');
  h.push('<td class="stack100 mpad mcenter" valign="middle" align="center" style="width:25%;padding:30px 12px 30px 20px;text-align:center;">');
  h.push('<a href="' + NM_LINKS.home + '" style="text-decoration:none;color:' + C.cremeTexto + ';">' + nmIcone_('logoCreme', 22, 26, 'Essência do Brasil', 'display:block;margin:0 auto 6px auto;'));
  h.push('<span style="display:block;font-family:' + NM_SERIF + ';font-size:19px;line-height:24px;letter-spacing:3px;color:' + C.cremeTexto + ';">ESSÊNCIA</span>');
  h.push('<span style="display:block;font-family:' + NM_SERIF + ';font-size:9px;line-height:16px;letter-spacing:3px;color:' + C.cremeTexto + ';">— DO BRASIL —</span></a>');
  h.push('<p style="margin:8px 0 0 0;font-family:' + NM_SERIF + ';font-style:italic;font-size:11px;line-height:16px;color:' + C.cinzaRodape + ';">A natureza inspira. A essência transforma.</p></td>');
  h.push('<td class="stack100 mpad mpadtop0 mcenter" valign="middle" style="width:25%;padding:30px 10px;">');
  h.push('<div class="nodiv" style="' + divR + '"><p style="' + rotulo + '">CONTATO</p>');
  h.push('<p style="margin:0 0 10px 0;font-family:' + NM_SANS + ';font-size:12px;line-height:18px;"><a href="' + NM_LINKS.instagram + '" style="color:' + C.cremeTexto + ';text-decoration:none;">' + nmIcone_('instagramCreme', 15, 15, '', 'vertical-align:middle;margin-right:6px;') + '@essenciadobrasil.com.br</a></p>');
  h.push('<p style="margin:0;font-family:' + NM_SANS + ';font-size:12px;line-height:18px;"><a href="' + NM_LINKS.contato + '" style="color:' + C.cremeTexto + ';text-decoration:none;">' + nmIcone_('chatCreme', 15, 15, '', 'vertical-align:middle;margin-right:6px;') + 'Fale conosco</a></p>');
  h.push('</div></td>');
  h.push('<td class="stack100 mpad mpadtop0 mcenter" valign="middle" style="width:25%;padding:30px 10px;">');
  h.push('<div class="nodiv" style="' + divR + '"><p style="' + rotulo + '">SIGA-NOS</p>');
  h.push('<a href="' + NM_LINKS.instagram + '" style="text-decoration:none;">' + nmIcone_('instagramCreme', 26, 26, 'Instagram', 'display:inline-block;') + '</a>');
  h.push('</div></td>');
  h.push('<td class="stack100 mpad mpadtop0 mcenter" valign="middle" style="width:25%;padding:30px 20px 30px 10px;">');
  h.push('<div class="nodiv" style="' + divR + '"><p style="' + rotulo + '">FORMAS DE PAGAMENTO</p>');
  h.push('<p style="margin:0;font-size:0;line-height:0;">');
  ['pagPix', 'pagVisa', 'pagMastercard', 'pagAmex', 'pagBoleto'].forEach(function (k, i) {
    h.push(nmIcone_(k, 31, 20, k.replace('pag', ''), 'display:inline-block;margin:0 ' + (i < 4 ? '3px' : '0') + ' 3px 0;'));
  });
  h.push('</p></div></td>');
  h.push('</tr></table></td></tr>');

  /* 9. Assinatura */
  h.push('<tr><td align="center" bgcolor="' + C.verdeEscuro + '" style="padding:18px 20px;background-color:' + C.verdeEscuro + ';text-align:center;font-family:' + NM_SANS + ';font-size:10px;line-height:20px;letter-spacing:4px;color:' + C.ouroClaro + ';">');
  h.push(nmIcone_('folhaOuro', 16, 16, '', 'vertical-align:middle;margin-right:12px;') + 'BRASIL. MUITOS JEITOS DE SER. INFINITOS AROMAS.' + nmIcone_('folhaOuro', 16, 16, '', 'vertical-align:middle;margin-left:12px;'));
  h.push('</td></tr>');

  /* 10. Descadastro (regra 15) */
  h.push('<tr><td align="center" bgcolor="' + C.verdeEscuro + '" style="padding:4px 40px 26px 40px;background-color:' + C.verdeEscuro + ';text-align:center;font-family:' + NM_SANS + ';font-size:11px;line-height:17px;color:' + C.cinzaRodape + ';">');
  h.push(NM_DESCADASTRO);
  h.push('</td></tr>');

  h.push('</table>');
  h.push('<!--[if mso]></td></tr></table><![endif]-->');
  h.push('</td></tr></table></body></html>');
  return h.join('\n');
}
