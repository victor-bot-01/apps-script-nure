/**
 * Essência do Brasil — Por que as flores têm perfume?
 * Assunto aprovado: A primeira nota nunca foi escrita por mãos humanas. ✨
 * Template GmailApp.sendEmail — HTML baseado em tabelas, estilos inline.
 * Fotos e banner hero: links públicos (regra 23). Ícones: PNG inline via cid (regra 8).
 */

const FLORES_PERFUME = {
  subject: 'A primeira nota nunca foi escrita por mãos humanas. ✨',
  preheader: 'Antes de existir em um frasco, o perfume já existia no ar.',
  maxWidth: 900,
  breakpoint: 920, // maxWidth + 20 (regra 12)
  cores: {
    verde: '#1F3A2B',
    verdeEscuro: '#15241A',
    dourado: '#B8944F',
    creme: '#F7F2EA',
    creme2: '#F1E9DC',
    branco: '#FFFFFF',
    titulo: '#2A2F2B',
    texto: '#4D524E',
    suave: '#6B706C',
    textoClaro: '#EFE8DA'
  },
  img: {
    heroDesktop: 'https://i.ibb.co/kFcF9xP/hero-desktop-900x338.jpg',
    heroMobile: 'https://i.ibb.co/DfvG3kcV/hero-mobile-600x900.jpg',
    secao3: 'https://i.ibb.co/ZRCMfgtH/secao3-geranio-315x295.jpg',
    secao5: 'https://i.ibb.co/3ygsnFsn/secao5-ylang-detalhe-450x300.jpg',
    secao6: 'https://i.ibb.co/Lzgqmc3z/secao6-ylang-ylang-420x420.jpg',
    secao8: 'https://i.ibb.co/twbVqYp4/secao8-lavanda-258x410.jpg',
    ylang: 'https://i.ibb.co/XfQKTkyv/produto-ylang-ylang-300x300.jpg',
    geranio: 'https://i.ibb.co/WWVkNn9C/produto-geranio-300x300.jpg',
    lavanda: 'https://i.ibb.co/VcmCdwpR/produto-lavanda-franca-300x300.jpg',
    lavandim: 'https://i.ibb.co/8gcvYfsG/produto-lavandim-300x300.jpg'
  },
  links: {
    home: 'https://essenciadobrasil.com.br/',
    femininos: 'https://essenciadobrasil.com.br/perfumes-femininos/',
    oleos: 'https://essenciadobrasil.com.br/oleos-essenciais/',
    essencias: 'https://essenciadobrasil.com.br/essencias/',
    oleosVegetais: 'https://essenciadobrasil.com.br/oleos-vegetais/',
    cremes: 'https://essenciadobrasil.com.br/seruns-e-cremes/',
    quemSomos: 'https://essenciadobrasil.com.br/quem-somos/',
    contato: 'https://essenciadobrasil.com.br/contato/',
    instagram: 'https://instagram.com/essenciadobrasil.com.br',
    botanica: 'https://essenciadobrasil.com.br/colecoes/botanica-imperial/',
    blog: 'https://blog.essenciadobrasil.com.br/2026/09/por-que-as-flores-cheiram-mais-na.html',
    ylang: 'https://essenciadobrasil.com.br/produtos/perfume-ylang-ylang-exuberante-feminino-100ml-natural-vegano/',
    geranio: 'https://essenciadobrasil.com.br/produtos/perfume-geranio-elegante-feminino-100ml-natural-e-vegano/',
    lavanda: 'https://essenciadobrasil.com.br/produtos/perfume-lavanda-da-franca-feminino-100ml-natural-e-vegano/',
    lavandim: 'https://essenciadobrasil.com.br/produtos/perfume-lavandim-energia-feminino-100ml-natural-e-vegano/'
  }
};

function getInlineImagesFloresPerfume_() {
  // PNGs transparentes, traço linear plano, exportados em ~2x o tamanho de exibição:
  // flor (etapa 1 – a flor), moleculas (etapa 2 – moléculas voláteis), ar (etapa 3 – no ar),
  // olfato (etapa 4 – perfil recebendo o aroma), seta (chevron entre etapas),
  // folha (marca da Essência do Brasil – logo e divisor), instagram (rede social).
  const b64 = {
    flor: 'iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAASFBMVEUmQzMXWh00PTklQTK2k1ElQjEAWFhZWVnDnFUePjAiPTB0dD9JVjq2klYZOi9SWjttakEA/wB8dEaNcVW5lFK9mFTkrl0AAABizC87AAAAGHRSTlP3FQxi/KECAvz+RQXzGp6s6wGVCXy/JgCe2kh8AAAFAklEQVR42u1ZiW4jIQy1TYCk17Z78f9/uhye4bJnaJtdaaUiVUkD4we2sZ89EP7ygC+A/wrAUfkk91cAslSMY//nrgBRLBkLeVhD+Yd7AlBAA80wLtA9AXxAGAYuqgnW1M/bt3nwIdYQYEk/RaZlvSP/u6QlWJGf92+TOIojfdhyBroHgAsPRVoVF79kzIcFLZ0DIAm75VMRfh7AZwPY0e+Rf/afBcCQDzBHB1d+P71wsORBgjmLks496VRFpOka+QifA3D5Cov+WI5weqFh5Q6QfrjTuwBnNk56CG/S3FuZww8COJefRN2Sxf5llXPvAfCuGvJADay+6gDOrwCUjIV5UNBtXK0cqKyuTx8BxM3jlrmS7CTDoKgAl3OQqYnIGpyTKUziLSzmFjdnoRzRnQ5AkngO1JKOxMXYKxTmEJkzl0ljS14pVrtJlfpikgE8P2JNY3KzH8L18rftm8asbDzTxlgY5WfxjsjFvxRDt311CK6EqHxHQl7o8mKGaBFgMJntWRXR7iRNZMZdPhiinpvZwS2gD5sm9C5ZRBX10hBi869DQojX3/Rr4TS85/Vd+uIkl1FOEwh0m0LluprQqJaNxRPzjrKq/XAC1GNCXo/YHJzqL6hHEOwA9LjvWXf7frcz2dEhg7hXaNV6SFuqxncFabSlNRg0LMSKyYN90vDBeYNG5xS9LJBQJSUVr/ePj77+p61vtbEAUMl1voahxhwXlgFQt0ETBW/wLY74cUJ9YVZRk1+VAifNv14u1+vl8lqinyq/y+PQakHfVFTGw9MlCk/jenl60OvAzY2dcJMPuOxj+H1l+ekYv+MPh2yZ5lhkdcKP6P3zZZefzvDsPaJeTtgpFrktJMz8qHz+bORHhJ/9bLuZPl7DWAfQXH1nWnIZBtOa0RY01g0wQJs+cW3V9w1GgOKsuSZ305VpFAFhTmk0c5jb0wjwdJuZCs0JrU36TTXpu7x+DLAzAi9WnxJtycduOEyObJOKUsRrmEpW5zFtaYhR4iJmp0T5mwCwz+VvaCRaNFBHqnSEKQ7xc7fX3k1fOSAhb3unXQOxG8mvD2RAGuZHf9F+KMtoDAYg9YVETttc5XiRRWYq9ZFAiCUDRGHlPjz/KtHoev31nIuUluezeL9S4WC5cjbS2ehA+c6wF34vB/i++XFaa/Ky4v5SdAKdR4y9wMfwUrb6soXSpv7XOIZYo3HYw9S7aXsIycNeXnp64/IiVFlSADVhyJSNycX6QyCnVEGGawGcfOyVEzhOqV7mFogyn/Cc1N0pAAUrU6pjAOb5s45A4WVaUZkB5LJT5oaw3OLA1ga43DaBY2686kUV4CxUOD6B10itRpI9A7hTAKPRl5otpPMVumIWAURei1vrQDKB+iCI7qbYIBSA8BkbBM2fq46MMmmXvGirkFBvr8i3AIMcK+CkSOyrbLaBaiCzdJO1Nt3W5T+YxJWbjEH0lLjtPUHa4FD0MOHcoFVkNLbbi3yinl92dAeXAILjVkTl5unLxgorv2ynuZnhFvumCFvOSWkT61uVaEQq7yvK+5Z9GrSMKedk5neZm4fmBRqVVgKCOC2X5SCXQZVB7m+d9sKSKudqp0kuv0Bruk+8rTYGm4Zgy/3ce3rXYwPVmtEvO1ZnUS1rj7rvWFqVtkj3A78cpt/f3u/uEk4JyGN/Cz/0/oB9kLy4RfQ8TXd4G/vx8QXwBfAF8A8A/gAFcWsEKE31zgAAAABJRU5ErkJggg==',
    moleculas: 'iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAASFBMVEUlQTIkRi0lQjIdPTAgOzJVVVXCmVRMVzqIeUejiE1ybUIjPy8Af38A/wA/UDdVVQAAAAAnQzO4lFI5PTsAVVUAfwAlQjIlQjGcJRpIAAAAGHRSTlNeHq/+HQP//////0ACAf8DAPv/BwMC0I2zEPFzAAAEpklEQVR42u1Z23bjKgwV2I7dtDPHRFz+/08HBNiAL+AmOU/hpV2Jo40kJLa2YX7zgg/AB+AtAAMiqvcBSP9HqfcAWLMM7GIL0pVlXZfnAGpGI2jx/jKCrHugZqZFXHAZgXnX1QkAimSxmV2wrmbvO2fHHgwzt09oYAj0T3/JPl83pvYB1Nw7s34HnIKEzemdYfGcHwH4h8AFBmdGTw6tAH9mlzxAymEa2xzA0LdLtPSFALnsGZfowvMcYDVKYFcAmHeA9QSEJx6gdBHsnct6bi5nOn/cGTzxQNK3hnqR/5dhc47RBZ8DHVU8rANKEX0EIua7zX6/FqjdojwA8C4IbUw4099txfyTnFHrxg879ECGakzaRT0Ndg/0K+2rE06b3bDuxXth+rLYyj5uw0NPcvtcz1i9XffGnR/D5sHviyUIsRlL3ITfGpJyp6fCXs+lffQh02tX9V/ZNax2fvKHVMuViXGvvl/EREjXjjntVnNA+mAJf3/YtaByunm4fCwgZgfAxlAm4cffsYplhyzEqwsrOLaG/9e05U+MsSHzYrxP030UBAHQcPNBvUhZjEo3To8brcckuvDhSfgbiVcMtBD3x+0R1u1x9whn4W9ldjER02KeIAjBVNlNC3Wky6e7Z/YDgqleqk0egIt/Yd+usSsu+F8CeK7xtbF/m1pcaAkR7jtALuj/ng6RdOe0m3YAKAt9JUYtxxR2IxRiVLuTngF4fDWQsxYA824A+B8AusMcsKdzQKRtU8cE4CvtBa1C2zrYC5FtqfwFlUxZ3ikEKgN4QSXT2NCJ3RSLKrds66bOhXGv10F1gmia9KXjrBYhidKN7Av2inYd57tu/Lrdovl4Z/av6KZuvnP0wV75E9XD1zR23cJe8fkkE6nVgVaM419PKjQE0vLzbKHRnc88BxORFREt9vz4lIHvA0j0g9Rq/9s9yzNi52Jjwujt24UaqlrFwk3jP4t9dNtEMNwuE7USFSYW4i64nOo6uw56y4yJ/UjPw2Mqm7/9YSKtotBpYGMfIYxb2mEk9r1WJZUNxJDSsnCYWPydyTSO7YSj0wmqsL9PLekXRotdnQa2TaFc3+cnXS7UMp0zh4Mp09u3SewhbqnaL9Uct2V/x2JxyMNBnE6gl5f8ZlhDqehEKIJM0sk8YGGccJl0cx5s1J+jIAkSNtzvMOoFuAEI8sG6YxalhSbesTRWnLVYr9LUAzcQ6eQIevlFNOgVmXDiNxo1RSj0riylUaGqSWuYSTgq04ygsFawENYkrGH2VL7TLcDG+fqQkYtQMmxLbgDMTsC1k5mwoaFrVEXO1YEH6ji6p+QyiktIP9J2AC4A5EYNW5ytniP0HXUm2b7PFFEoHuP5KTJNlRZEIOgX1UyznV40lGIshgqtK4PSt3VtTOhg69wDZcXbNKNKlSBoUmcZzxuw3FcdTfSOZC1ylrdKm4m03B/dBwr93eGuPWS+Bzer1/Yq5EErO1QdZ69+OsWJ6x0lvfp6gm2F1vIFRX47XXsN4nNXEJfNK5bkUnYK5ZVXFG3Ei94SOfIDT9s+f821pVCvAiDi6MiPfJMHL14fgA/AB+AD8AF4xfoHTkoz7LLYMDUAAAAASUVORK5CYII=',
    ar: 'iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAASFBMVEUmQzMWXBwzPTgmQjImQjIAVla5lVJiYmKwnlbEnle4lFL/f3+5lVL//wC/fz//AABxcQD2qlUlPjAA/wCqVVXBm1X///8AAAC5e4+sAAAAGHRSTlP2FgtdnwL0AhP+XgKhAQQBAgZGAQO7AQBYw7qqAAAED0lEQVR42u1ZC2/cIAzGBodccne9dt34//90QCA8YpJ0CtI2FVVV7+r4A/vziwjTeYlvgG+AvwhgfD51TwCv/LPrCaZpNLoXgH7eb3ZNZu4D8DTTbbDrNpqxC8DbOPh1u1usDgAPEwGGjY0uOsE83HqewLwHHwxjpxNYet6H223oxiLvhq5xYBZ6Bo4+3ufn9ZGsn++P4PLO2fRlxvvPaX68dQL48RgtZy1h504AMW0Ej/81AIjkf0MXEwHVleVSJzvtIJUSQijpToBHmelrNLUqwSmPy2HQQVh/IdDsbqWoloWgP+gqgLdO2r1S65+ycQhoAwAyj5DBsH0FsEitnxvbQRYAjN0b1t6znz5yddpzNEJYO5V8IjBo1QADAAaiGp2zMVjHfU+QvsZgqULcCfjtqGqbi4kw7Mr+j5CIUGdbreyNBbKLQNJOp1RBXHM+iK6UER6isXHrOlqZtboCooKPJosiGZV0SyW68JEb7bTIrx/AQANArybJlt0+NjtRVnxLRZFzTB7LF3ZShTiwSUQUu8J0WIkHSYcyTy1JCuCofUfPN5AAZ3Lawl0rLgFNxuTdrkJHrfpctoni1CwUTLKzcdAuO27VxYLgmhGK2D+vmtFg8amtO9IXHYJrASoSSzx9CnFWvaqCCk5CiEIPNfSjElzctsRp5wSwUzRtNCHYziVGo+RiBdoneClXRbBpnRSoAE07ofOVejEAetlnmVAopVnpng51s/yWylpRFYUs2ck1xfkuzkZnUlQlPkr52gOv8hirDnE+yJTFb4KWLStpLYNKboqEbCY7tXoTrD+l2HFm3jE558Pqe4UtmnJNFl80I184+lbbEfUzchtQuJNL6wCU9W7E1rRZoTqM1zLGFZNCBHfvY83vluMjHCQ19/9MfNsicPUgCZ2YN/JukatSfLIjV1eaGZnqkgSL/CV3dmm/eG3ByR3kyvzpovMVAMp6zKVRoSsBwNTNX9mOnwXQDeawYd6Ok1WN2G8fmICqumM88PYGQHK5x059dX+/ZtqPLaF83xoabVGxRIZ0BZV1VEp8bkIpakVlp1gsgDkBhocgTfeQhqZSE/F1LSGjP4LgB4tldAlNsGyUhcwxMualXBx4J8uM59lsZK2zTXwUanC4APB5T6wjYotFyI3eLT5Sxt4knU2O4tzlQTv1wLboeAPvnMDXtewZX0Zgd0Yob0uK2UjsXeC45W2rD5MUBfml9T7ORVnR8UQ9O+ls83g72dlx3zUv+nShsNMdbe/c/rfXXI++AKN7V9IRQLsXDUZ3A9BmGoZhuhpBJPu4G2H3KmzsA+AvhId0JXw1wPqmaujlAz3HE3x284G7NB/Gt7kTi15mug/30bx6xsGvnnFgrTS7n3872X0D/JcAvwHiTLfG3IwHOQAAAABJRU5ErkJggg==',
    olfato: 'iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAASFBMVEUAAAAmQzMRYRW6lVKxnVIlQTElQTHDnVdmZma5lVK5lVL//wAAWFj/e3u/fz+nZFP/AADrpVkkPjB/fyqlpTcA/wDBmlb//3+GMjFpAAAAGHRSTlMA9A7sFmOf/gKfYgECAgQEAQVLAwQBQALf7eHgAAAC90lEQVR42u1a227jIBAd8IC5+JYmbf//TxcGnDjJphvbOZUiLUqrPFQzMOfCACV6ZmjCDnB8bZWFJjBKKU3d2ybQZFMCaIlSfIvDWZOWBGCMDRJjKxjTf4wfm4RAABsdHuOiY41NAETYZRJZNEstfaJZ6rAJDD4BoXXm3lbIZTf4hRK9LwZwFlHFwGGtwkB7R6vwjSMywS+0RZlGeC2rD/S2j9VCbr0UobtHBTxJuZoBeAYRKlkklX7OwAOnz37Te0Cl8ZxnV4aPBxmmFJaD9+GL6TvuznBHpBQ+NE2bRxOI+qvCTeu71Ns+2BH7po629bwo04Y95D5DJG7apvWBOeQUTcpQyhRHCoFp3Rq0ZOiu5p+nHmTaY5DvREOMcYgU0orosEHS9rL2b+I2z5q47/Nv387ZaEyVW53gXg5pnqnqp6niLRlSikOiVY7PMb5CDv1CEKFpZ8RztTa4kim7wxkIPi3YEvtMqsJZf8Z7C5UeOutAhbeetwtbnNXph2ucV7O9l7L3vueY3UXAkeI+61M3R+dDqfVhopeM2gbozwWJOA26dqLdZ2dbl3AUtxMRjze4bvVWrfWFSdnt2rYyn2mhrLjJ78h1M85VbkVavniqv5RpB0+L54mtHsUcfEiWM3BxBxryvN0p+2y47HbPFD4Pa0QGlUZJrG0R1SH/nBUmzpfdewXsWl0POTPEKNMsteBaLrFTkfOqFZir8Pa87YwLYI+y/eSS+bwNZcxXqqsEN4aWfaRbbtDZ64qb5mKtQKC2wImiN0End+PcgnXBol9n1DM1u59aSGli+Cvrmqe18ipL+Nff9YX9vLGpeKbFjsmY4laPe+d7Eecs9IKzqxsZKr77a2f68nMa9CCIvYSvzwjwO2zkxY6eD8vAIinsYw6hH3PqPTzyph972O/Q948O/NZS2kWLvHBR0FdlXRtqB9WA0hozefm3ATlbOkj0uZs2KPoYBYuva22KhDuQO8zT7yDw1naakOw3etvt1RqSAluJF4T+A/6OEqHhjq0UAAAAAElFTkSuQmCC',
    seta: 'iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUBAMAAABL3sEiAAAAGFBMVEUAAACtm1K4lFHNpVv//wC0kVCoYVK9mFQ3zF+IAAAACHRSTlMAEqH8AWYF1WcKorgAAABqSURBVHjaVcExCoJQAADQ5/8f53JqjLxB0BoeQTqBg13Z1aaMWhxKCNKae49/pwzacotw6QtIeVkTlzkPV0F+P9aiedWFIfJ+babAVyXSDGMf6c6fG4oDITXrB4R9RmzH6bmQdqkCCVTwAyjUG8xP3nrnAAAAAElFTkSuQmCC',
    folha: 'iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAASFBMVEUAAAAmQzM1PTklQjIlQTImQjIlQTImQTEmQjElRTIAVVVVVVUAfwAlPi8AVQAlPzAdOjcqVSofPx8ZTDMqKiolPzIAAAAAAAA4M2m9AAAAGHRSTlMA/AmQr9ExblEUAwMCJQNICgYICgZgAAAwButeAAABr0lEQVR42u1V7Y7jIAw0tsEmH9vu3e37v+oa0gC5VYFd3Z+Taimqkno0nrExAK/4P2NFi++CFvwJ1YGKKkQa52GYQeRdDoK3STZ7Aim5R/hJP4xMjCtIAuk+CVwTWeaJ6SdAcI7T16G2cFa4sfM7JFoBHGqLjTDHd8ivcegJiivBaGbyYSoO6PSwXzSnI4TjPcDWVYdnlbse6aBEzJ661iygpcik02xR0RD2GAYKG3WRTWD50CcEqji/WXXA5yt2BG73R1o2g38rYMFpl/CRRnsGLnCr9B3cWsr6CCnV7AyqIjJoxVr1BWPyEewIiqhqLhSf9yGUunYxD1ufuDMz2y9f8pAJ7lxxDp8XipcGBth9g7vlI/0MWTN9W/ZguN+aVJuyBWPcw2O2ewLtr2IF/wHynpnp+OTvS3dRcK2rtSW1pXeYthMoV1uSod2VeAJvzZTN4EwjH4MlF5jHXiOaNvIVxzixuqP7EgJdX770o57AbWZz/81oyw2nFj45XwV6iTCypZ4pzReaDY3oO4xvidJGhvfrvThVqB7LAdd8By/zN28kmizun8UCr3jFdHwCyLAKqBPPmUcAAAAASUVORK5CYII=',
    instagram: 'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEUAAAAmQzMAVVUAfwAlQTImQTM5PTkmQjIlQTElQTElQjImPjInRi5VVVUXOhcXOjoqVSoAVQAAf38qKiomPy8zZjMAAAAAAADRQWjdAAAAGHRSTlMA+wMCRCkGy5F2rSYNAwgIBgMCBlAFAABrI/w1AAABw0lEQVR42q1WiY6EIAytQMupzuzx/7+6nIoIJO5uk5lQ7aP0tbYA/FV4I1Nb6j+nAYr5n7PYiHVhq745Krl0RCpMuzX2Vi1DMdgiCMQyFQ371V6nnbS4iTbxlYK1Ps9XdtwVVMnHgeBA6QkwYq3Qp7eI5z3jWMFE+wHfLiNkYZcDhvPAdz9rZpFIoCoXSbN1dhh5YYdz+Y6HNjkKDjIop/1aLyJFvmb8prKUDqUIDgqAhFZKCyreTc4Txl05WL8WhQIGmz6ytQGRksbBFo1SEFeAL5GqoKSFmhiRAec6K8E0w9Cfhs0AezCUwnPvRFzufOYh1ZShIwWFjaEHihlNjPk/mSgdAlgkTxSGKavjGBLrriqjWNc0B1Q556Ew/h/w5EiPg35M6y8S97Q0esXXAUzLm8Ec0H5ArGTE1l1g/InySys9GoU8O8KtCUDVWbZacd02c86aqs18xIAUvMaz6RXzU8Vpovoa24ct5THwMvnCn47xm6w+drw2Y7+ITCrXd+B00+5L3B4i0F7GotdEfgXUG0GTkcXaoYhmbC4FvDtjVxjZn6GiM3ZTFRBiOxMRd+jah6fr4IrAJveN21Bkf73t/AAbHxBOtSwkQgAAAABJRU5ErkJggg=='
  };
  const out = {};
  Object.keys(b64).forEach(function (k) {
    out[k] = Utilities.newBlob(Utilities.base64Decode(b64[k]), 'image/png', k + '.png');
  });
  return out;
}

function montarHtmlFloresPerfume_() {
  const C = FLORES_PERFUME;
  const K = C.cores;
  const L = C.links;
  const I = C.img;
  const SERIF = "Georgia,'Times New Roman',serif";
  const SANS = 'Arial,Helvetica,sans-serif';

  const navLink = (href, txt) => `<a href="${href}" style="color:${K.verde};text-decoration:none;">${txt}</a>`;
  const sep = ` <span style="color:${K.dourado};">|</span> `;
  const filete = `<table role="presentation" width="48" cellpadding="0" cellspacing="0" border="0" style="width:48px;"><tr><td height="2" style="height:2px;line-height:2px;font-size:0;background:${K.dourado};">&nbsp;</td></tr></table>`;

  const step = (cid, alt, num, titulo, legenda) => `
<td width="44%" valign="top" align="center" style="width:44%;padding:0 4px;text-align:center;">
  <img src="cid:${cid}" width="64" height="64" alt="${alt}" style="display:block;width:64px;height:64px;max-width:100%;margin:0 auto 12px auto;border:0;">
  <div class="steptitle" style="font-family:${SANS};font-size:12px;line-height:17px;font-weight:bold;letter-spacing:1px;color:${K.titulo};">${num}. ${titulo}</div>
  <div class="steptxt" style="font-family:${SANS};font-size:13px;line-height:19px;color:${K.texto};margin-top:6px;">${legenda}</div>
</td>`;
  const seta = (attrs) => `<td ${attrs} valign="top" align="center" style="width:12%;padding-top:22px;text-align:center;"><img src="cid:seta" width="12" height="20" alt="" style="display:block;width:12px;height:20px;max-width:100%;margin:0 auto;border:0;"></td>`;

  const btn = (href, txt) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
  <tr><td bgcolor="${K.verde}" style="background:${K.verde};border-radius:3px;padding:11px 4px;text-align:center;">
    <a href="${href}" class="cardbtn" style="display:block;font-family:${SANS};font-size:10.5px;line-height:15px;font-weight:bold;letter-spacing:0.3px;color:#FFFFFF;text-decoration:none;">${txt}</a>
  </td></tr>
</table>`;

  const card = {
    img: (href, src, alt) => `<td width="48%" valign="bottom" bgcolor="${K.branco}" style="width:48%;background:${K.branco};padding:14px 14px 0 14px;text-align:center;"><a href="${href}" style="text-decoration:none;"><img src="${src}" width="300" height="300" alt="${alt}" style="display:block;width:100%;max-width:300px;height:auto;margin:0 auto;border:0;"></a></td>`,
    nome: (txt) => `<td width="48%" valign="top" bgcolor="${K.branco}" style="width:48%;background:${K.branco};padding:14px 12px 6px 12px;text-align:center;"><div class="cardname" style="font-family:${SERIF};font-size:18px;line-height:23px;color:${K.titulo};">${txt}</div></td>`,
    desc: (txt) => `<td width="48%" height="92" valign="top" bgcolor="${K.branco}" style="width:48%;height:92px;background:${K.branco};padding:0 12px 14px 12px;text-align:center;"><div class="cardtxt" style="font-family:${SANS};font-size:12.5px;line-height:18px;color:${K.texto};">${txt}</div></td>`,
    botao: (href, txt) => `<td width="48%" valign="top" bgcolor="${K.branco}" style="width:48%;background:${K.branco};padding:0 12px 18px 12px;">${btn(href, txt)}</td>`,
    gap: () => `<td width="4%" style="width:4%;font-size:0;line-height:0;">&nbsp;</td>`
  };
  const parCards = (a, b) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
  <tr>${card.img(a.href, a.img, a.alt)}${card.gap()}${card.img(b.href, b.img, b.alt)}</tr>
  <tr>${card.nome(a.nome)}${card.gap()}${card.nome(b.nome)}</tr>
  <tr>${card.desc(a.desc)}${card.gap()}${card.desc(b.desc)}</tr>
  <tr>${card.botao(a.href, a.btn)}${card.gap()}${card.botao(b.href, b.btn)}</tr>
</table>`;

  const P = {
    ylang: { href: L.ylang, img: I.ylang, alt: 'Perfume Ylang Ylang Exuberante Feminino 100ml', nome: 'Ylang Ylang Exuberante', desc: 'Floral intenso e envolvente, com abertura luminosa de bergamota e um fundo quente de vanilina e cedrol.', btn: 'CONHECER YLANG YLANG&nbsp;&rarr;' },
    geranio: { href: L.geranio, img: I.geranio, alt: 'Perfume Gerânio Elegante Feminino 100ml', nome: 'Gerânio Elegante', desc: 'O gerânio encontra o óxido de rosa num floral delicado e refinado, aberto pelo frescor do limão siciliano.', btn: 'CONHECER GERÂNIO&nbsp;&rarr;' },
    lavanda: { href: L.lavanda, img: I.lavanda, alt: 'Perfume Lavanda da França Feminino 100ml', nome: 'Lavanda da França', desc: 'Os campos da Provença em um floral herbáceo e sereno, com bergamota e um fundo suave e amadeirado.', btn: 'CONHECER LAVANDA&nbsp;&rarr;' },
    lavandim: { href: L.lavandim, img: I.lavandim, alt: 'Perfume Lavandim Energia Feminino 100ml', nome: 'Lavandim Energia', desc: 'Híbrido da lavanda, o lavandim se revela vibrante: frescor cítrico, floral leve e base amadeirada de candeia.', btn: 'CONHECER LAVANDIM&nbsp;&rarr;' }
  };

  const compliance = 'Você recebeu este e-mail porque está em nossa lista de relacionamento. Para solicitar o descadastramento, responda a esta mensagem com o assunto DESCADASTRAR.';

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Por que as flores têm perfume?</title>
<style>
@media only screen and (max-width:${C.breakpoint}px){
  .stack100{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;}
  .footer-col{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;text-align:center!important;padding:10px 20px!important;}
  .hide-mobile{display:none!important;max-height:0!important;overflow:hidden!important;}
  .banner-desktop{display:none!important;max-height:0!important;overflow:hidden!important;}
  .banner-mobile{display:block!important;max-height:none!important;}
  .mob-pad{padding:30px 22px!important;box-sizing:border-box!important;}
  .mob-pad-img{padding:0 22px 30px 22px!important;box-sizing:border-box!important;}
  .mob-gap{padding-top:26px!important;box-sizing:border-box!important;}
  .group-pad{padding:0 6px!important;box-sizing:border-box!important;}
  .h2m{font-size:23px!important;line-height:29px!important;}
  .h3m{font-size:20px!important;line-height:26px!important;}
  .txtm{font-size:15px!important;line-height:23px!important;}
  .navm{font-size:10px!important;line-height:20px!important;letter-spacing:1px!important;}
  .cardname{font-size:16px!important;line-height:21px!important;}
  .cardtxt{font-size:13px!important;line-height:18px!important;}
  .cardbtn{font-size:10px!important;letter-spacing:0.3px!important;}
  .steptxt{font-size:13px!important;line-height:18px!important;}
}
</style>
</head>
<body style="margin:0;padding:0;background:${K.creme};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:${K.creme};mso-hide:all;">${C.preheader}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${K.creme}" style="width:100%;background:${K.creme};table-layout:fixed;">
<tr><td align="center" style="padding:0;">
<!--[if mso]><table role="presentation" width="${C.maxWidth}" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="width:100%;max-width:${C.maxWidth}px;table-layout:fixed;margin:0 auto;">

<!-- 1. CABEÇALHO -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:26px 20px 18px 20px;text-align:center;">
  <img src="cid:folha" width="28" height="28" alt="" style="display:block;width:28px;height:28px;max-width:100%;margin:0 auto 6px auto;border:0;">
  <a href="${L.home}" style="text-decoration:none;">
    <div style="font-family:${SERIF};font-size:24px;line-height:28px;letter-spacing:3px;color:${K.verde};">ESSÊNCIA</div>
    <div style="font-family:${SERIF};font-size:14px;line-height:18px;letter-spacing:3px;color:${K.verde};"><span style="font-size:10px;letter-spacing:1px;">do</span> BRASIL</div>
  </a>
  <div class="navm" style="font-family:${SANS};font-size:11px;line-height:20px;letter-spacing:1.5px;color:${K.verde};margin-top:16px;">
    ${navLink(L.femininos, 'PERFUMES FEMININOS')}${sep}${navLink(L.oleos, 'ÓLEOS ESSENCIAIS')}${sep}${navLink(L.essencias, 'ESSÊNCIAS')}${sep}${navLink(L.quemSomos, 'CONHEÇA A ESSÊNCIA DO BRASIL')}
  </div>
</td></tr>

<!-- 2. HERO (duas versões, regra 24) -->
<tr><td bgcolor="${K.verdeEscuro}" style="background:${K.verdeEscuro};padding:0;line-height:0;font-size:0;">
  <a href="${L.botanica}" style="text-decoration:none;">
    <img src="${I.heroDesktop}" class="banner-desktop" width="900" height="338" alt="Por que as flores têm perfume? Uma história que começa na natureza e chega até o nosso olfato." style="display:block;width:100%;max-width:100%;height:auto;border:0;">
    <!--[if !mso]><!-->
    <img src="${I.heroMobile}" class="banner-mobile" width="600" height="900" alt="Por que as flores têm perfume? Uma história que começa na natureza e chega até o nosso olfato." style="display:none;width:100%;max-width:100%;height:auto;max-height:0;overflow:hidden;border:0;">
    <!--<![endif]-->
  </a>
</td></tr>

<!-- 3. INTRODUÇÃO (texto | foto) -->
<tr><td bgcolor="${K.branco}" style="background:${K.branco};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100 mob-pad" valign="middle" style="width:56%;padding:44px 24px 44px 48px;">
        <div class="h2m" style="font-family:${SERIF};font-size:27px;line-height:34px;color:${K.titulo};">Você já parou para pensar por que uma flor tem cheiro?</div>
        <div style="padding:18px 0;">${filete}</div>
        <div class="txtm" style="font-family:${SANS};font-size:15px;line-height:24px;color:${K.texto};">O perfume que sentimos ao nos aproximar de uma flor não está ali por acaso. Ele nasce dentro da própria planta, que produz pequenas substâncias aromáticas. Algumas são tão leves que se desprendem das pétalas, flutuam pelo ar e encontram o caminho até nós.</div>
        <div class="txtm" style="font-family:${SERIF};font-size:17px;line-height:26px;font-weight:bold;color:${K.titulo};margin-top:14px;">E é aí que começa o perfume.</div>
      </td>
      <td class="stack100 mob-pad-img" valign="middle" align="center" style="width:44%;padding:30px 40px 30px 16px;text-align:center;">
        <img src="${I.secao3}" width="315" height="295" alt="Flores de gerânio rosa em close" style="display:block;width:315px;max-width:100%;height:auto;margin:0 auto;border:0;">
      </td>
    </tr>
  </table>
</td></tr>

<!-- 4. INFOGRÁFICO: DA FLOR AO NOSSO OLFATO -->
<tr><td bgcolor="${K.creme2}" style="background:${K.creme2};padding:40px 20px 38px 20px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr><td style="text-align:center;padding:0 10px 30px 10px;">
      <div style="font-family:${SANS};font-size:13px;line-height:18px;letter-spacing:2.5px;color:${K.titulo};">DA FLOR AO NOSSO OLFATO</div>
      <div class="h3m" style="font-family:${SERIF};font-size:19px;line-height:26px;color:${K.titulo};margin-top:6px;">Como o aroma de uma flor chega até você?</div>
    </td></tr>
    <tr><td style="padding:0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
        <tr>
          <td class="stack100" valign="top" style="width:47%;padding:0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
              <tr>
                ${step('flor', 'Flor', '1', 'A FLOR', 'Nas pétalas, a planta produz seus compostos aromáticos.')}
                ${seta('width="12%"')}
                ${step('moleculas', 'Moléculas voláteis', '2', 'MOLÉCULAS VOLÁTEIS', 'Leves, algumas delas se desprendem e ganham o ar.')}
              </tr>
            </table>
          </td>
          <td class="hide-mobile" valign="top" align="center" style="width:6%;padding-top:22px;text-align:center;"><img src="cid:seta" width="12" height="20" alt="" style="display:block;width:12px;height:20px;max-width:100%;margin:0 auto;border:0;"></td>
          <td class="stack100 mob-gap" valign="top" style="width:47%;padding:0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
              <tr>
                ${step('ar', 'Ar', '3', 'NO AR', 'Invisíveis, viajam pelo ambiente ao nosso redor.')}
                ${seta('width="12%"')}
                ${step('olfato', 'Olfato', '4', 'NO OLFATO', 'Ao chegar até nós, o sistema olfativo as percebe como cheiro.')}
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td></tr>
    <tr><td style="text-align:center;padding:30px 40px 0 40px;" class="mob-gap">
      <div class="txtm" style="font-family:${SANS};font-size:14px;line-height:22px;color:${K.texto};">Cada flor tem sua própria combinação dessas moléculas, e é essa proporção que desenha a assinatura aromática de cada uma. O linalol, presente na lavanda, é uma delas.</div>
    </td></tr>
  </table>
</td></tr>

<!-- 5. BANNER SECUNDÁRIO: UMA LINGUAGEM INVISÍVEL (foto | texto, fundo sólido) -->
<tr><td bgcolor="${K.verdeEscuro}" style="background:${K.verdeEscuro};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100" valign="middle" align="center" style="width:50%;padding:0;line-height:0;font-size:0;text-align:center;">
        <img src="${I.secao5}" width="450" height="300" alt="Pétalas de ylang-ylang com gotas de orvalho" style="display:block;width:100%;max-width:450px;height:auto;margin:0 auto;border:0;">
      </td>
      <td class="stack100" valign="middle" style="width:50%;padding:0;">
        <div class="mob-pad" style="padding:24px 44px 24px 40px;">
        <div class="h2m" style="font-family:${SERIF};font-size:28px;line-height:35px;color:${K.textoClaro};">Uma linguagem invisível da natureza.</div>
        <div style="padding:16px 0;">${filete}</div>
        <div class="txtm" style="font-family:${SANS};font-size:15px;line-height:24px;color:${K.textoClaro};">Para a planta, o aroma é uma forma de conversar com o mundo ao redor: atrair polinizadores, marcar presença, existir no ar. Cada espécie fala à sua maneira. Há flores de voz doce e intensa, outras verdes e herbais, outras frescas como uma manhã de campo. A perfumaria nasceu de aprender a escutar.</div>
        </div>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 6. PONTE COM A PERFUMARIA + PRODUTO PRINCIPAL (texto | foto) -->
<tr><td bgcolor="${K.branco}" style="background:${K.branco};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100 mob-pad" valign="middle" style="width:56%;padding:44px 20px 44px 48px;">
        <div class="h2m" style="font-family:${SERIF};font-size:27px;line-height:34px;color:${K.titulo};">A natureza é uma das maiores fontes de inspiração da perfumaria.</div>
        <div style="padding:18px 0;">${filete}</div>
        <div class="txtm" style="font-family:${SANS};font-size:15px;line-height:24px;color:${K.texto};">Flores, folhas, madeiras e frutos guardam uma diversidade aromática extraordinária. A perfumaria natural nasce de ouvir essa diversidade com atenção e de combinar seus óleos essenciais em novas composições.</div>
        <div class="txtm" style="font-family:${SANS};font-size:15px;line-height:24px;color:${K.texto};margin-top:14px;">A flor amarela do ylang-ylang, de perfume intenso e envolvente, é o coração do <b style="color:${K.titulo};">Ylang Ylang Exuberante</b>. Com concentração dobrada do óleo essencial, ele se abre luminoso com bergamota e citral. No centro, revela o floral exuberante do ylang-ylang, suavizado pelo linalol, e repousa sobre uma base quente de vanilina e cedrol. Um perfume feminino e sensual, 100% natural e vegano.</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;margin-top:22px;">
          <tr><td bgcolor="${K.creme}" style="background:${K.creme};border-left:3px solid ${K.dourado};padding:14px 18px;">
            <div class="txtm" style="font-family:${SERIF};font-size:17px;line-height:25px;color:${K.verde};">A natureza produz aromas.<br>A perfumaria aprende a combiná-los.</div>
          </td></tr>
        </table>
        <div style="margin-top:18px;"><a href="${L.ylang}" style="font-family:${SANS};font-size:13px;line-height:20px;font-weight:bold;letter-spacing:0.5px;color:${K.dourado};text-decoration:underline;">Conhecer Ylang Ylang Exuberante&nbsp;&rarr;</a></div>
      </td>
      <td class="stack100 mob-pad-img" valign="middle" align="center" style="width:44%;padding:30px 40px 30px 10px;text-align:center;">
        <a href="${L.ylang}" style="text-decoration:none;"><img src="${I.secao6}" width="360" height="360" alt="Perfume Ylang Ylang Exuberante Feminino 100ml com flores de ylang-ylang" style="display:block;width:360px;max-width:100%;height:auto;margin:0 auto;border:0;"></a>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 7. VITRINE: QUATRO INTERPRETAÇÕES DO UNIVERSO FLORAL -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:40px 14px 34px 14px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr><td style="text-align:center;padding:0 16px 26px 16px;">
      <div class="h2m" style="font-family:${SERIF};font-size:26px;line-height:32px;color:${K.titulo};">Quatro interpretações do universo floral</div>
      <div class="txtm" style="font-family:${SANS};font-size:14px;line-height:21px;color:${K.texto};margin-top:8px;">Da flor ao frasco: quatro maneiras de levar o perfume da natureza com você.</div>
    </td></tr>
    <tr><td style="padding:0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
        <tr>
          <td class="stack100 group-pad" valign="top" style="width:50%;padding:0 8px;">${parCards(P.ylang, P.geranio)}</td>
          <td class="stack100 group-pad mob-gap" valign="top" style="width:50%;padding:0 8px;">${parCards(P.lavanda, P.lavandim)}</td>
        </tr>
      </table>
    </td></tr>
    <tr><td style="padding:24px 8px 0 8px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
        <tr><td bgcolor="${K.branco}" style="background:${K.branco};border:1px solid ${K.dourado};padding:14px 18px;text-align:center;">
          <div style="font-family:${SERIF};font-size:16px;line-height:23px;color:${K.verde};"><b>Compre 4 e pague 3</b>, válido em qualquer produto da loja.</div>
          <div style="font-family:${SANS};font-size:12px;line-height:18px;color:${K.suave};margin-top:4px;">Não acumulável com algumas promoções. Pagando com Pix, 3% de desconto.</div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</td></tr>

<!-- 8. TUDO COMEÇA COM UM AROMA (foto | texto) -->
<tr><td bgcolor="${K.branco}" style="background:${K.branco};padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="stack100 mob-pad" valign="middle" align="center" style="width:38%;padding:30px 10px 30px 40px;text-align:center;">
        <img src="${I.secao8}" width="230" height="366" alt="Ramos de lavanda" style="display:block;width:230px;max-width:100%;height:auto;margin:0 auto;border:0;">
      </td>
      <td class="stack100 mob-pad" valign="middle" style="width:62%;padding:40px 48px 40px 28px;">
        <div class="h2m" style="font-family:${SERIF};font-size:28px;line-height:35px;color:${K.titulo};">Tudo começa com um aroma.</div>
        <div style="padding:16px 0;">${filete}</div>
        <div class="txtm" style="font-family:${SANS};font-size:15px;line-height:24px;color:${K.texto};">Muito antes de existir em um frasco, o perfume já existia no mundo: nas pétalas que se abrem ao sol, nas folhas que guardam frescor, nas madeiras que aquecem o fim do dia. A perfumaria natural não inventa esse perfume. Ela o reencontra.</div>
        <div class="txtm" style="font-family:${SERIF};font-size:16px;line-height:24px;color:#8A6A2E;margin-top:14px;">Alguns dos aromas que hoje reconhecemos em um perfume começaram muito antes, em uma flor.</div>
        <div style="font-family:${SANS};font-size:13px;line-height:20px;color:${K.texto};margin-top:18px;">Quer ir além? Leia no blog: <a href="${L.blog}" style="color:${K.verde};font-weight:bold;text-decoration:underline;">Por que as flores cheiram mais na primavera?&nbsp;&rarr;</a></div>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 9. CTA FINAL -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:40px 24px 30px 24px;text-align:center;">
  <div class="h2m" style="font-family:${SERIF};font-size:26px;line-height:32px;color:${K.titulo};">Descubra a natureza através da perfumaria.</div>
  <table role="presentation" width="300" cellpadding="0" cellspacing="0" border="0" align="center" style="width:300px;max-width:100%;margin:22px auto 0 auto;">
    <tr><td bgcolor="${K.verde}" style="background:${K.verde};border-radius:3px;padding:15px 12px;text-align:center;">
      <a href="${L.botanica}" style="display:block;font-family:${SANS};font-size:13px;line-height:18px;font-weight:bold;letter-spacing:1px;color:#FFFFFF;text-decoration:none;">CONHECER A BOTÂNICA IMPERIAL&nbsp;&rarr;</a>
    </td></tr>
  </table>
  <table role="presentation" width="220" cellpadding="0" cellspacing="0" border="0" align="center" style="width:220px;max-width:100%;margin:26px auto 0 auto;table-layout:fixed;">
    <tr>
      <td width="40%" valign="middle" style="width:40%;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;"><tr><td height="1" style="height:1px;line-height:1px;font-size:0;background:${K.dourado};">&nbsp;</td></tr></table></td>
      <td width="20%" valign="middle" align="center" style="width:20%;text-align:center;"><img src="cid:folha" width="24" height="24" alt="" style="display:block;width:24px;height:24px;max-width:100%;margin:0 auto;border:0;"></td>
      <td width="40%" valign="middle" style="width:40%;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;"><tr><td height="1" style="height:1px;line-height:1px;font-size:0;background:${K.dourado};">&nbsp;</td></tr></table></td>
    </tr>
  </table>
</td></tr>

<!-- 10. RODAPÉ (3 colunas) -->
<tr><td bgcolor="${K.creme}" style="background:${K.creme};padding:0 20px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-top:1px solid #DDD3C2;">
    <tr>
      <td class="footer-col" valign="middle" style="width:26%;padding:24px 10px;text-align:center;">
        <img src="cid:folha" width="24" height="24" alt="" style="display:block;width:24px;height:24px;max-width:100%;margin:0 auto 4px auto;border:0;">
        <a href="${L.home}" style="text-decoration:none;">
          <div style="font-family:${SERIF};font-size:17px;line-height:20px;letter-spacing:2px;color:${K.verde};">ESSÊNCIA</div>
          <div style="font-family:${SERIF};font-size:11px;line-height:15px;letter-spacing:2px;color:${K.verde};"><span style="font-size:9px;letter-spacing:1px;">do</span> BRASIL</div>
        </a>
      </td>
      <td class="footer-col" valign="middle" style="width:48%;padding:24px 10px;text-align:center;">
        <div style="font-family:${SANS};font-size:12px;line-height:22px;color:${K.verde};">
          ${navLink(L.femininos, 'Perfumes Femininos')}${sep}${navLink(L.oleos, 'Óleos Essenciais')}${sep}${navLink(L.essencias, 'Essências')}${sep}${navLink(L.oleosVegetais, 'Óleos Vegetais')}${sep}${navLink(L.cremes, 'Cremes e Séruns')}
        </div>
        <div style="font-family:${SERIF};font-size:13px;line-height:20px;font-style:italic;color:${K.suave};margin-top:8px;">Embalamos seu produto com todo cuidado, ao som de música clássica.</div>
      </td>
      <td class="footer-col" valign="middle" style="width:26%;padding:24px 10px;text-align:center;">
        <a href="${L.instagram}" style="text-decoration:none;"><img src="cid:instagram" width="24" height="24" alt="Instagram" style="display:block;width:24px;height:24px;max-width:100%;margin:0 auto 8px auto;border:0;"></a>
        <div style="font-family:${SANS};font-size:12px;line-height:18px;color:${K.verde};">${navLink(L.contato, 'Atendimento')}${sep}${navLink(L.home, 'Site')}</div>
      </td>
    </tr>
  </table>
</td></tr>

<!-- 11. FAIXA LEGAL / DESCADASTRO -->
<tr><td bgcolor="${K.verde}" style="background:${K.verde};padding:0 20px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;">
    <tr>
      <td class="footer-col" valign="middle" style="width:70%;padding:18px 10px;text-align:left;">
        <div style="font-family:${SANS};font-size:11px;line-height:17px;color:${K.textoClaro};">${compliance}</div>
      </td>
      <td class="footer-col" valign="middle" style="width:30%;padding:18px 10px;text-align:right;">
        <div style="font-family:${SANS};font-size:11px;line-height:17px;color:${K.textoClaro};">&copy; Essência do Brasil. Todos os direitos reservados.</div>
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

function validarTemplateFloresPerfume_() {
  const C = FLORES_PERFUME;
  const html = montarHtmlFloresPerfume_();
  const inlineImages = getInlineImagesFloresPerfume_();
  const erros = [];

  // Regras 2 e 12: tabela fluida com max-width e breakpoint = max-width + 20.
  if (C.breakpoint !== C.maxWidth + 20) erros.push('Regra 12: breakpoint deve ser maxWidth + 20.');
  if (!html.includes(`max-width:${C.maxWidth}px;table-layout:fixed`)) erros.push('Regra 2: tabela principal sem width 100% + max-width.');
  if (!html.includes(`@media only screen and (max-width:${C.breakpoint}px)`)) erros.push('Regra 12: media query com breakpoint incorreto.');

  // Regra 4: toda tabela com width explícito (fora do wrapper condicional do Outlook).
  const semMso = html.replace(/<!--\[if mso\]>[\s\S]*?<!\[endif\]-->/g, '');
  (semMso.match(/<table\b[^>]*>/gi) || []).forEach(function (t) {
    if (!/\swidth="/i.test(t) || !/style="[^"]*width:/i.test(t)) erros.push('Regra 4: tabela sem width: ' + t.slice(0, 80));
    if (/\swidth="100%"/i.test(t) && !/table-layout:fixed/i.test(t)) erros.push('Regra 5: tabela 100% sem table-layout:fixed: ' + t.slice(0, 80));
  });

  // Regra 7: toda imagem com max-width:100% e width/height em HTML.
  (html.match(/<img\b[^>]*>/gi) || []).forEach(function (t) {
    if (!/max-width:(100%|\d+px)/i.test(t) || !/\swidth="\d+"/.test(t) || !/\sheight="\d+"/.test(t)) erros.push('Regra 7/8: img sem max-width ou width/height: ' + t.slice(0, 80));
    if (/max-width:\d+px/i.test(t) && !/width:100%/i.test(t)) erros.push('Regra 7: img com max-width em px precisa de width:100%: ' + t.slice(0, 80));
  });

  // Regra 13: classes da media query com width e padding precisam de box-sizing.
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

  // Regra 24: duas versões do hero alternando.
  if (!html.includes(C.img.heroDesktop) || !html.includes(C.img.heroMobile)) erros.push('Regra 24: hero desktop e mobile precisam estar presentes.');
  if (!/class="banner-desktop"[^>]*style="display:block/.test(html) || !/class="banner-mobile"[^>]*style="display:none/.test(html)) erros.push('Regra 24: estado padrão do hero incorreto.');
  if (!css.includes('.banner-desktop{display:none!important') || !css.includes('.banner-mobile{display:block!important')) erros.push('Regra 24: alternância do hero ausente na media query.');

  // Regra 23: todas as fotos com link https público, nenhuma via cid.
  Object.keys(C.img).forEach(function (k) {
    if (!/^https:\/\//.test(C.img[k])) erros.push('Regra 23: imagem sem link público: ' + k);
    if (!html.includes(C.img[k])) erros.push('Regra 23: foto não usada no HTML: ' + k);
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

function enviarTesteFloresPerfume() {
  validarTemplateFloresPerfume_();
  const destinatario = Session.getActiveUser().getEmail();
  if (!destinatario) throw new Error('Não foi possível obter o e-mail do usuário ativo via Session.getActiveUser().getEmail().');

  GmailApp.sendEmail(
    destinatario,
    FLORES_PERFUME.subject,
    'Por que as flores têm perfume? Abra este e-mail em um cliente compatível com HTML para ver a versão completa.',
    {
      htmlBody: montarHtmlFloresPerfume_(),
      inlineImages: getInlineImagesFloresPerfume_(),
      name: 'Essência do Brasil'
    }
  );
}
