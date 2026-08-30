/**
 * Apps Script - Newsletter por Templates (Essência do Brasil)
 *
 * ARQUITETURA (planilha com 4 abas):
 * 1. "Links Produtos"          - catálogo de produtos (Link do produto | Link
 *                                 da foto | Nome | Link da foto (fundo
 *                                 branco) - sem coluna de preço: o preço
 *                                 sempre vem da pesquisa mais recente,
 *                                 colada dentro do bloco copiado da
 *                                 "Templade"). A 4ª coluna, "Link da foto
 *                                 (fundo branco)", é opcional e vai sendo
 *                                 preenchida aos poucos: quando tem link ali,
 *                                 o e-mail usa ele (fundo já sólido, sem
 *                                 risco); quando está vazia, o script ainda
 *                                 usa a foto transparente da 2ª coluna pra
 *                                 exibição, mas BLOQUEIA o envio se esse
 *                                 produto estiver na campanha (fotos
 *                                 transparentes em .webp podem sair com
 *                                 fundo preto em alguns e-mails). Já existente.
 * 2. "Links Padrão"            - links fixos do site (Início, Contato,
 *                                 Instagram, categorias...). Já existente.
 * 3. "Templade"                - catálogo de ESTRUTURAS de e-mail. Cada
 *                                 template (ex: "Template A") tem sua seção
 *                                 de "Estrutura" (cores, quantidade de
 *                                 produtos/banners, textos prontos de
 *                                 pedido) e sua "Ficha técnica" (campos de
 *                                 texto separados por etiqueta, incluindo
 *                                 os nomes dos produtos pesquisados e os
 *                                 links dos banners gerados por IA - tudo
 *                                 que muda a cada campanha fica aqui, já
 *                                 que a quantidade de cada coisa depende do
 *                                 template). A célula "Texto pronto pra
 *                                 copiar" é preenchida pelo PRÓPRIO SCRIPT
 *                                 (não é fórmula do Sheets - isso evita
 *                                 erro de separador de fórmula por causa do
 *                                 idioma da planilha).
 * 4. "Marketing em Preparação" - estrutura FIXA (serve pra qualquer
 *                                 template): 1 campo de texto único, onde
 *                                 se cola o bloco inteiro copiado da
 *                                 "Templade" (ficha técnica + produtos +
 *                                 links de banner, tudo junto).
 *
 * FLUXO DE UMA CAMPANHA:
 * 1. Você me dá o tema.
 * 2. Eu olho a aba "Templade" e digo qual template combina melhor.
 * 3. Eu preencho a "Ficha técnica" daquele template com os textos, os
 *    nomes dos produtos pesquisados e os links dos banners gerados por IA.
 * 4. Você roda "🔄 Atualizar 'Texto pronto pra copiar'" (recalcula o bloco
 *    de texto a partir dos valores atuais), copia essa célula e cola no
 *    campo de texto único da aba "Marketing em Preparação".
 * 5. Você roda "✉️ Enviar - Template" (item ÚNICO de menu, serve pra
 *    qualquer template). O script lê o nome do template dentro do texto
 *    colado, escolhe sozinho a função de montagem certa, separa o bloco de
 *    produtos do resto do texto, busca cada produto na aba "Links
 *    Produtos", monta o HTML (com os banners e o assunto do e-mail) e
 *    envia.
 *
 * CADA TEMPLATE NOVO = 1 função de montagem (ex: montarHtmlTemplateA) +
 * 1 entrada no REGISTRO_TEMPLATES abaixo. Não precisa de item de menu novo
 * nem função de envio nova - o "✉️ Enviar - Template" já serve pra todos.
 * Quando você criar um "Template B" na aba "Templade", é só pedir que eu
 * adiciono o código dele aqui do mesmo jeito.
 *
 * COMO INSTALAR (mesmo processo de sempre):
 * 1. Abra a planilha no Google Sheets.
 * 2. Menu Extensões > Apps Script.
 * 3. Apague todo o código antigo (Code.gs) e cole todo o conteúdo deste
 *    arquivo no lugar.
 * 4. Salve (ícone de disquete).
 * 5. Feche a aba do Apps Script e volte pra planilha - aparece o menu
 *    "📧 Newsletter - Essência do Brasil". Na primeira execução o Google
 *    vai pedir autorização pra enviar e-mail em seu nome - é normal, aceite.
 * 6. Como a estrutura da "Templade" e da "Marketing em Preparação" mudou
 *    bastante nessa versão (novos campos de ficha técnica, produtos e
 *    banners entraram no Templade, "Marketing em Preparação" virou 1 campo
 *    só), o mais seguro é excluir as duas abas antigas (clique com o botão
 *    direito na aba lá embaixo > Excluir) e recriar as duas pelo menu.
 */

const EMAIL_DESTINO_TESTE = 'victor@gigaimports.com';

const ABA_PRODUTOS = 'Links Produtos';
const ABA_LINKS_PADRAO = 'Links Padrão';
const ABA_TEMPLADE = 'Templade';
const ABA_PREPARACAO = 'Marketing em Preparação';

const NOME_LINHA_PRODUTOS_FICHA = 'PRODUTOS';

const NOME_LINHA_TEXTO_PEDIR_PRODUTOS = 'Texto pronto pra pedir produtos';

// Texto padrão pra pedir produtos pro Template A (5 produtos) - pronto pra
// copiar e usar em qualquer pesquisa (não referencia nenhuma aba da
// planilha, porque quem for pesquisar os produtos pode não ter acesso a
// ela - só ao site).
const TEXTO_PADRAO_PEDIR_PRODUTOS =
  'Preciso de 5 produtos do site https://essenciadobrasil.com.br/ que combinem\n' +
  'com o tema que vou te passar.\n' +
  '\n' +
  'Critérios pra escolher os 5:\n' +
  '- IMPORTANTE: o "Nome do produto" precisa ser copiado EXATAMENTE igual\n' +
  '  ao título que aparece na página do produto no site - letra por letra,\n' +
  '  incluindo tudo que vem depois do hífen (ex: "- Natural e Vegano"),\n' +
  '  tamanho/ml etc. Não resuma, não abrevie, não invente uma versão\n' +
  '  simplificada. O sistema busca esse nome numa lista pra achar o link do\n' +
  '  produto - se o nome vier diferente (mesmo que só um pouco), o produto\n' +
  '  não é encontrado e a campanha inteira trava.\n' +
  '- No máximo 2 podem ser do tipo "Kit" (kits reúnem vários frascos numa\n' +
  '  embalagem só) - os outros pelo menos 3 precisam ser produtos\n' +
  '  individuais, senão trava a montagem do banner do hero depois (que\n' +
  '  precisa de produto individual).\n' +
  '- Priorize nessa ordem de tipo de produto: primeiro perfumes, depois\n' +
  '  óleos essenciais, depois os demais tipos.\n' +
  '- Quando der pra perceber, priorize os produtos mais relevantes/em\n' +
  '  destaque no site (mais vendidos, recomendados etc.).\n' +
  '\n' +
  'Para cada produto, devolva EXATAMENTE nesse formato, com essas 4 etiquetas\n' +
  '(uma por linha, sempre com dois-pontos), e uma linha em branco separando\n' +
  'um produto do outro. Exemplo de UM produto entregue corretamente:\n' +
  '\n' +
  'Nome do produto: Perfume Copaíba Amazônica Masculino 100ml - Natural e Vegano\n' +
  'Preço original: R$149,90\n' +
  'Preço com desconto: \n' +
  'Observação: Compre 4, pague 3\n' +
  '\n' +
  'Repita esse mesmo formato pros outros 4 produtos. Não resuma, não numere,\n' +
  'não use markdown nem comentários - só os blocos de texto, um após o outro.';

const NOME_LINHA_TEXTO_PEDIR_TEXTOS = 'Texto pronto pra pedir textos';

// Texto padrão pra pedir os textos da Ficha técnica do Template A - já com
// o limite de caracteres de cada campo embutido no pedido, pra quem
// escrever não estourar o espaço do layout. Não pede "Nome do Template"
// (isso é fixo, quem já sabe qual template está usando preenche por
// conta própria - não é algo que precise ser gerado pelo texto).
const TEXTO_PADRAO_PEDIR_TEXTOS =
  'Preciso dos textos de uma campanha de e-mail marketing pro tema dessa\n' +
  'campanha, pra Essência do Brasil (perfumaria natural, óleos essenciais).\n' +
  '\n' +
  'Escreva um texto curto e persuasivo pra cada campo abaixo, respeitando o\n' +
  'limite de caracteres de cada um (contando espaços):\n' +
  '\n' +
  'ASSUNTO DO E-MAIL (até 60 caracteres) - formato de pergunta ou frase de\n' +
  'curiosidade, com tom poético; sempre mantendo o nome do tema da campanha\n' +
  'reconhecível dentro do texto (ex: "Semana do Brasil"); nunca apelativo\n' +
  'nem prometendo algo que não esteja de fato no e-mail\n' +
  'TÍTULO HERO (até 35 caracteres)\n' +
  'LEGENDA HERO (até 50 caracteres)\n' +
  'TEXTO HERO (até 150 caracteres)\n' +
  'TEXTO BOTÃO HERO (até 25 caracteres)\n' +
  'TÍTULO SEÇÃO PRODUTOS (até 35 caracteres)\n' +
  'TÍTULO BENEFÍCIOS (até 40 caracteres)\n' +
  'BENEFÍCIO 1 (até 80 caracteres)\n' +
  'BENEFÍCIO 2 (até 80 caracteres)\n' +
  'BENEFÍCIO 3 (até 80 caracteres)\n' +
  'TÍTULO SOBRE (até 35 caracteres)\n' +
  'TEXTO SOBRE (até 150 caracteres)\n' +
  'RODAPÉ TEXTO (até 90 caracteres) - frase curta com tom poético, relacionada ao tema\n' +
  'da campanha\n' +
  '\n' +
  'Formato de entrega: uma linha por campo, no formato "ETIQUETA: texto" (com\n' +
  'dois-pontos), na mesma ordem acima, pronta pra eu copiar e colar - sem\n' +
  'numeração, sem comentários, sem markdown, e sem repetir o limite de\n' +
  'caracteres na resposta.';

const NOME_LINHA_TEXTO_PEDIR_BANNER_HERO = 'Texto pronto pra pedir banner (hero)';

// Texto padrão pra pedir, de uma IA, o PROMPT de geração de imagem do
// banner do hero - não é o prompt em si, é a instrução que documenta as
// regras fixas (fidelidade, posicionamento, composição) pra quem for
// montar o prompt final não precisar reinventar isso a cada campanha. Só a
// CENA muda por tema.
const TEXTO_PADRAO_PEDIR_BANNER_HERO =
  'Preciso que você monte, pra mim, o prompt pronto de geração de imagem do\n' +
  'banner do hero da campanha (tema já informado), pra Essência do Brasil\n' +
  '(perfumaria natural, óleos essenciais). Vou colar abaixo os produtos\n' +
  'sugeridos pra essa campanha - escolha, entre eles, os 3 que melhor\n' +
  'representem e realcem visualmente essa campanha, e monte o prompt final\n' +
  'usando esses 3 (as fotos de referência de cada produto escolhido já vão\n' +
  'estar prontas em outro campo da planilha). IMPORTANTE: escolha só\n' +
  'produtos INDIVIDUAIS - nunca escolha um produto do tipo "Kit" (kits têm\n' +
  'vários frascos numa embalagem só, o que não encaixa no banner).\n' +
  '\n' +
  'O prompt final deve ser em inglês, pronto pra eu copiar e colar direto\n' +
  'numa IA de geração de imagem (tipo Bing Image Creator), e precisa seguir\n' +
  'SEMPRE essas regras fixas (não mudam de campanha pra campanha):\n' +
  '\n' +
  'FIDELIDADE: o prompt precisa dizer explicitamente que a(s) foto(s) do(s)\n' +
  'produto(s) estão sendo enviadas como referência, e que a IA deve\n' +
  'preservar fidelidade máxima ao formato do frasco, ao rótulo e à cor do\n' +
  'líquido de cada produto, sem alterar nada deles.\n' +
  '\n' +
  'POSICIONAMENTO DOS PRODUTOS:\n' +
  '- 1 produto: fica como âncora central, posicionado do meio pra direita\n' +
  '  do quadro.\n' +
  '- 2 produtos: o maior como âncora central-direita; o menor ao lado,\n' +
  '  ligeiramente à frente.\n' +
  '- 3 produtos: os três formam um cluster compacto do meio pra direita do\n' +
  '  quadro - o maior/mais alto como âncora central, o menor à frente/ao\n' +
  '  lado dele, e o terceiro ligeiramente atrás e mais afastado da câmera,\n' +
  '  criando profundidade (não alinhados em fileira reta).\n' +
  '- Em qualquer caso, o conjunto de produtos não pode invadir o terço\n' +
  '  esquerdo do quadro.\n' +
  '\n' +
  'COMPOSIÇÃO: banner horizontal largo (proporção 2:1). O terço esquerdo da\n' +
  'imagem precisa ficar comparativamente aberto, suavemente desfocado e com\n' +
  'menos detalhe (sem produto, sem folhagem chamativa, sem realces claros\n' +
  'ali) - porque essa área vai receber texto por cima na versão final do\n' +
  'e-mail.\n' +
  '\n' +
  'CENA: a única parte que muda a cada campanha - crie uma ambientação que\n' +
  'combine com o tema que eu passar, no estilo fotografia de produto\n' +
  'elegante e editorial, iluminação natural quente, fundo suavemente\n' +
  'desfocado, atmosfera luxuosa e natural.\n' +
  '\n' +
  'EXEMPLO de prompt final entregue corretamente (teste real já aprovado,\n' +
  'tema "Semana do Brasil", 3 produtos):\n' +
  '\n' +
  'Using the attached product photo(s) as reference (Reference 1: Perfume\n' +
  'Copaíba Amazônica Masculino 50ml; Reference 2: Perfume Spray Copaíba\n' +
  'Amazônica Masculino 10ml; Reference 3: Perfume Capim Limão Masculino\n' +
  '100ml), place these exact perfume bottles into a new photorealistic\n' +
  'scene - preserve maximum fidelity to each product\'s real details (bottle\n' +
  'shape, label design, text, and liquid color) exactly as shown in its own\n' +
  'reference image, with no alterations to any of them.\n' +
  '\n' +
  'Scene: elegant editorial product photography, set beside a small\n' +
  'waterfall in a lush Amazon rainforest, warm golden sunlight filtering\n' +
  'through green leaves, water droplets on nearby foliage, soft blurred\n' +
  'background, warm and green color palette, luxurious and natural mood.\n' +
  '\n' +
  'Positioning of the three bottles (important - keep them organized, not\n' +
  'scattered):\n' +
  '- Arrange all three bottles together as a single compact cluster,\n' +
  '  resting on the same moss-covered rock, positioned in the right\n' +
  '  two-thirds of the frame.\n' +
  '- Reference 1 (the tallest bottle) stands as the central/front anchor of\n' +
  '  the cluster.\n' +
  '- Reference 2 (the smallest bottle) is placed just to the right of\n' +
  '  Reference 1, slightly in front of it, since it is shorter.\n' +
  '- Reference 3 is placed slightly behind and to the left of Reference 1,\n' +
  '  a bit further from the camera, so all three are visible with subtle\n' +
  '  depth - not lined up flat in a row.\n' +
  '- Keep the whole cluster compact so it does not spread into the left\n' +
  '  third of the frame.\n' +
  '\n' +
  'Composition: wide horizontal banner (2:1 aspect ratio). Keep the LEFT\n' +
  'THIRD of the image comparatively open, softly blurred, and less detailed\n' +
  '- no bottles, no busy foliage, no bright highlights there - since that\n' +
  'area will have text overlaid on top of it in the final design.\n' +
  '\n' +
  'Formato de entrega: me devolva só o prompt final pronto (sem explicações\n' +
  'extras antes ou depois).';

const NOME_LINHA_TEXTO_PEDIR_BANNER_FAIXA = 'Texto pronto pra pedir banner (faixa larga)';

// Texto padrão pra pedir o prompt de geração de imagem da faixa larga -
// sem produto e sem texto, só ambientação/ingredientes. Só a CENA
// (ingredientes escolhidos) muda por tema.
const TEXTO_PADRAO_PEDIR_BANNER_FAIXA =
  'Preciso que você monte, pra mim, o prompt pronto de geração de imagem da\n' +
  'faixa larga (banner decorativo, sem produto e sem texto) da campanha\n' +
  '(tema já informado), pra Essência do Brasil (perfumaria natural, óleos\n' +
  'essenciais). Vou colar abaixo os produtos dessa campanha - use como\n' +
  'referência pra escolher ingredientes/elementos que combinem de verdade\n' +
  'com o que está sendo vendido (sem mostrar produto nenhum na cena).\n' +
  '\n' +
  'O prompt final deve ser em inglês, pronto pra eu copiar e colar direto\n' +
  'numa IA de geração de imagem (tipo Bing Image Creator) - aqui NÃO precisa\n' +
  'anexar foto de nenhum produto como referência, é só geração livre a\n' +
  'partir do texto.\n' +
  '\n' +
  'Precisa seguir SEMPRE essas regras fixas (não mudam de campanha pra\n' +
  'campanha):\n' +
  '\n' +
  'CONTEÚDO: nunca incluir frasco de produto, nunca incluir texto/palavras/\n' +
  'logotipos na imagem - é uma imagem só de ambientação/ingredientes, sem\n' +
  'elementos de marca.\n' +
  '\n' +
  'CENA: a única parte que muda a cada campanha - escolha 2 ou 3 ingredientes\n' +
  'naturais brutos que representem o tema (ex: resina, folhas, flores,\n' +
  'frutas - o que fizer sentido pro tema), dispostos de forma natural sobre\n' +
  'uma superfície (madeira, pedra, tecido), com boa luz natural e clima\n' +
  'quente e orgânico.\n' +
  '\n' +
  'COMPOSIÇÃO: banner horizontal bem largo (proporção 4:1), foco em detalhe/\n' +
  'close-up dos ingredientes, profundidade de campo rasa (fundo desfocado),\n' +
  'estilo fotografia editorial de produto natural, luxuoso e orgânico.\n' +
  '\n' +
  'EXEMPLO de prompt final entregue corretamente (teste real já aprovado,\n' +
  'tema "Semana do Brasil"):\n' +
  '\n' +
  'Elegant editorial nature photography, no product bottles, no text, no\n' +
  'logos - close-up scene of raw natural Brazilian rainforest ingredients:\n' +
  'copaíba resin dripping from tree bark, fresh lemongrass (capim-limão)\n' +
  'leaves, and lush green tropical foliage, arranged naturally on a\n' +
  'weathered wood surface, soft warm golden natural light, gentle shadows,\n' +
  'shallow depth of field, warm earthy green and amber tones, luxurious and\n' +
  'organic mood, wide horizontal banner composition (4:1 aspect ratio), high\n' +
  'detail, photorealistic\n' +
  '\n' +
  'Formato de entrega: me devolva só o prompt final pronto (sem explicações\n' +
  'extras antes ou depois).';

const NOME_LINHA_TEXTO_PEDIR_BANNER_SOBRE = 'Texto pronto pra pedir banner (sobre)';

// Texto padrão pra pedir o prompt de geração de imagem da foto da seção
// "Sobre" - processo/artesania, sem produto de marca e sem texto. Só a
// CENA (elementos de fundo) muda por tema.
const TEXTO_PADRAO_PEDIR_BANNER_SOBRE =
  'Preciso que você monte, pra mim, o prompt pronto de geração de imagem da\n' +
  'foto da seção "Sobre" (representa processo/artesania, sem produto de\n' +
  'marca específico e sem texto) da campanha (tema já informado), pra\n' +
  'Essência do Brasil (perfumaria natural, óleos essenciais). Vou colar\n' +
  'abaixo os produtos dessa campanha - use como referência pra escolher\n' +
  'elementos/ingredientes que combinem de verdade com o que está sendo\n' +
  'vendido (sem mostrar produto nenhum na cena).\n' +
  '\n' +
  'O prompt final deve ser em inglês, pronto pra eu copiar e colar direto\n' +
  'numa IA de geração de imagem (tipo Bing Image Creator) - aqui NÃO precisa\n' +
  'anexar foto de nenhum produto como referência, o frasco é genérico (não\n' +
  'precisa ser fiel a nenhum produto real da marca).\n' +
  '\n' +
  'Precisa seguir SEMPRE essas regras fixas (não mudam de campanha pra\n' +
  'campanha):\n' +
  '\n' +
  'CONTEÚDO: uma cena de processo/artesania - o óleo/essência sendo\n' +
  'manipulado (gotejando de um conta-gotas pra dentro de um frasco de vidro\n' +
  'âmbar, por exemplo), nunca com rótulo de marca visível, nunca com\n' +
  'texto/palavras/logotipos na imagem.\n' +
  '\n' +
  'CENA: a única parte que muda a cada campanha - use folhagem/elementos\n' +
  'naturais de fundo que combinem com o tema (desfocados, só de apoio), com\n' +
  'luz dourada natural pegando o líquido.\n' +
  '\n' +
  'COMPOSIÇÃO: fotografia macro/close-up editorial, profundidade de campo\n' +
  'rasa (fundo bem desfocado), estilo artesanal e luxuoso, composição\n' +
  'horizontal larga (proporção 2:1), alto nível de detalhe, fotorrealista.\n' +
  '\n' +
  'EXEMPLO de prompt final entregue corretamente (teste real já aprovado,\n' +
  'tema "Semana do Brasil"):\n' +
  '\n' +
  'Elegant editorial macro photography, no readable text, no logos - close-up\n' +
  'of golden essential oil being poured/dripping from a glass dropper into a\n' +
  'small amber glass bottle, warm golden natural light catching the liquid,\n' +
  'soft blurred natural background with hints of green foliage, water\n' +
  'droplets, warm amber and green color palette, artisanal and luxurious\n' +
  'mood, shallow depth of field, wide horizontal composition (2:1 aspect\n' +
  'ratio), high detail, photorealistic\n' +
  '\n' +
  'Formato de entrega: me devolva só o prompt final pronto (sem explicações\n' +
  'extras antes ou depois).';

// Limite de caracteres sugerido por campo da Ficha técnica do Template A -
// margem de segurança pra o texto não estourar o espaço do layout (título
// Nomes das linhas "derivadas" (calculadas pelo botão "🔄 Atualizar textos
// com produtos") - cada uma junta o texto pronto de base com os produtos
// que estiverem no campo "PRODUTOS" no momento, pra não precisar colar os
// produtos manualmente em cada mensagem.
const NOME_LINHA_TEXTO_PEDIR_TEXTOS_COM_PRODUTOS = 'Texto pronto pra pedir textos (com produtos desta campanha)';
const NOME_LINHA_TEXTO_PEDIR_BANNER_HERO_COM_PRODUTOS = 'Texto pronto pra pedir banner - hero (com produtos desta campanha)';
const NOME_LINHA_TEXTO_PEDIR_BANNER_FAIXA_COM_PRODUTOS = 'Texto pronto pra pedir banner - faixa larga (com produtos desta campanha)';
const NOME_LINHA_TEXTO_PEDIR_BANNER_SOBRE_COM_PRODUTOS = 'Texto pronto pra pedir banner - sobre (com produtos desta campanha)';
const NOME_LINHA_LINKS_FOTOS_PRODUTOS = 'LINKS DAS FOTOS DOS PRODUTOS';

// Campos de apoio pro problema de fundo preto em fotos transparentes: entre
// os produtos escolhidos pra campanha, quais ainda não têm uma versão com
// fundo branco preenchida na aba "Links Produtos" (coluna D), e o texto
// pronto pra pedir essa correção pra uma IA - ambos são derivados, escritos
// pelo mesmo botão "🔄 Atualizar textos com produtos".
const NOME_LINHA_LINKS_FUNDO_TRANSPARENTE = 'LINKS COM FUNDO TRANSPARENTE (risco de fundo preto)';
const NOME_LINHA_TEXTO_PEDIR_FUNDO_BRANCO = 'Texto pronto pra pedir fundo branco';

// Parte fixa do pedido de correção de fundo - a lista de fotos que ainda
// precisam da correção (dinâmica, por campanha) é anexada depois dela pelo
// botão "🔄 Atualizar textos com produtos".
const TEXTO_BASE_PEDIR_FUNDO_BRANCO =
  'Preciso corrigir o fundo de fotos de produto que estão com fundo transparente - isso\n' +
  'está causando fundo preto em alguns clientes de e-mail, mesmo a foto original sendo\n' +
  'transparente de verdade (não é fundo preto de propósito). Vou anexar cada foto\n' +
  'listada abaixo, uma de cada vez - pra cada uma, gere a mesma imagem, exatamente\n' +
  'igual, só trocando a transparência por um fundo branco sólido (#FFFFFF).\n' +
  '\n' +
  'IMPORTANTE: preserve fidelidade máxima ao produto (formato do frasco, rótulo, texto\n' +
  'e cor do líquido) - não altere nada do produto em si, não adicione sombra, textura\n' +
  'nem qualquer elemento novo, só o fundo branco liso.\n' +
  '\n' +
  'Formato de entrega: me devolva a imagem final em PNG ou JPG (não use WebP), uma por\n' +
  'vez, pronta pra eu salvar e subir na coluna "Link da foto (fundo branco)".\n' +
  '\n' +
  'Fotos desta campanha que ainda precisam dessa correção:';

// Campo "rascunho" onde se cola a resposta da IA (do "Texto pronto pra
// pedir textos") pra distribuir sozinho em cada linha da Ficha técnica -
// evita colar a resposta direto em "Texto pronto pra copiar" por engano
// (isso pula o script inteiro, que é quem junta produtos e banners).
const NOME_LINHA_COLAR_RESPOSTA_TEXTOS = 'Colar aqui a resposta da IA (pra distribuir na Ficha técnica)';

// Limite de caracteres sugerido por campo da Ficha técnica do Template A -
// margem de segurança pra o texto não estourar o espaço do layout (título
// grande cabe pouco, botão cabe bem menos, parágrafo cabe mais). Campos
// como links de banner e a lista de produtos não têm limite (ficam de
// fora deste mapa de propósito).
const LIMITES_CARACTERES_TEMPLATE_A = {
  'ASSUNTO DO E-MAIL': 60,
  'TÍTULO HERO': 35,
  'LEGENDA HERO': 50,
  'TEXTO HERO': 150,
  'TEXTO BOTÃO HERO': 25,
  'TÍTULO SEÇÃO PRODUTOS': 35,
  'TÍTULO BENEFÍCIOS': 40,
  'BENEFÍCIO 1': 80,
  'BENEFÍCIO 2': 80,
  'BENEFÍCIO 3': 80,
  'TÍTULO SOBRE': 35,
  'TEXTO SOBRE': 150,
  'RODAPÉ TEXTO': 90,
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📧 Newsletter - Essência do Brasil')
    .addItem('🧩 Criar aba "Templade"', 'criarAbaTemplade')
    .addItem('📥 Distribuir resposta da IA na Ficha técnica (Templade)', 'distribuirTextoNaFichaTecnica')
    .addItem('🔄 Atualizar "Texto pronto pra copiar" (Templade)', 'atualizarTextoParaCopiar')
    .addItem('🧹 Limpar Ficha técnica (Templade)', 'limparFichaTecnicaTemplade')
    .addSeparator()
    .addItem('🔗 Adicionar "Texto pronto pra pedir produtos" (Templade)', 'adicionarTextoParaPedirProdutos')
    .addItem('🔗 Adicionar "Texto pronto pra pedir textos" (Templade)', 'adicionarTextoParaPedirTextos')
    .addItem('🔗 Adicionar "Texto pronto pra pedir banner - hero" (Templade)', 'adicionarTextoParaPedirBannerHero')
    .addItem('🔗 Adicionar "Texto pronto pra pedir banner - faixa larga" (Templade)', 'adicionarTextoParaPedirBannerFaixa')
    .addItem('🔗 Adicionar "Texto pronto pra pedir banner - sobre" (Templade)', 'adicionarTextoParaPedirBannerSobre')
    .addItem('📏 Adicionar limites de caracteres (Templade)', 'adicionarLimitesCaracteres')
    .addItem('🔗 Adicionar campos de fundo branco (Templade)', 'adicionarCamposFundoBranco')
    .addSeparator()
    .addItem('🔄 Atualizar textos com produtos (Templade)', 'atualizarTextosComProdutos')
    .addSeparator()
    .addItem('📋 Copiar texto pra pedir produtos', 'copiarTextoPedirProdutos')
    .addItem('📋 Copiar texto pra pedir textos', 'copiarTextoPedirTextos')
    .addItem('📋 Copiar texto pra pedir textos (com produtos)', 'copiarTextoPedirTextosComProdutos')
    .addItem('📋 Copiar texto pra pedir banner - hero', 'copiarTextoPedirBannerHero')
    .addItem('📋 Copiar texto pra pedir banner - hero (com produtos)', 'copiarTextoPedirBannerHeroComProdutos')
    .addItem('📋 Copiar texto pra pedir banner - faixa larga', 'copiarTextoPedirBannerFaixa')
    .addItem('📋 Copiar texto pra pedir banner - faixa larga (com produtos)', 'copiarTextoPedirBannerFaixaComProdutos')
    .addItem('📋 Copiar texto pra pedir banner - sobre', 'copiarTextoPedirBannerSobre')
    .addItem('📋 Copiar texto pra pedir banner - sobre (com produtos)', 'copiarTextoPedirBannerSobreComProdutos')
    .addItem('📋 Copiar links das fotos dos produtos', 'copiarLinksFotosProdutos')
    .addItem('📋 Copiar links com fundo transparente', 'copiarLinksFundoTransparente')
    .addItem('📋 Copiar texto pra pedir fundo branco', 'copiarTextoPedirFundoBranco')
    .addItem('📋 Copiar ficha técnica preenchida (pronta pra colar em "Marketing em Preparação")', 'copiarFichaTecnica')
    .addSeparator()
    .addItem('📝 Criar aba "Marketing em Preparação"', 'criarAbaMarketingPreparacao')
    .addItem('🧹 Limpar "Marketing em Preparação" (nova campanha)', 'limparMarketingPreparacao')
    .addItem('🔗 Criar aba "Links Padrão"', 'criarAbaLinksPadrao')
    .addSeparator()
    .addItem('✉️ Enviar - Template', 'enviarTemplate')
    .addToUi();
}

// ======================= ABA "TEMPLADE" =======================

/**
 * Cria (se ainda não existir) a aba "Templade", já com o bloco do
 * "Template A" (a estrutura que já testamos: cabeçalho + destaque (hero,
 * com banner de fundo gerado por IA) + 3 produtos + benefícios + banner
 * largo + sobre (com foto) + 2 produtos + rodapé). Não sobrescreve se a
 * aba já existir, pra não perder edições suas.
 */
function criarAbaTemplade() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (ss.getSheetByName(ABA_TEMPLADE)) {
    SpreadsheetApp.getUi().alert('A aba "' + ABA_TEMPLADE + '" já existe - não mexi pra não sobrescrever o que você já tenha preenchido.');
    return;
  }

  const sheet = ss.insertSheet(ABA_TEMPLADE);

  const linhas = [
    ['TEMPLATE A', ''],
    ['— Estrutura —', ''],
    ['Nome do template', 'Template A'],
    ['Cor de fundo', '#151a12 (verde escuro)'],
    ['Cor de destaque (dourado)', '#c9a227'],
    ['Cor de texto claro', '#f4ecdb'],
    ['Cor de texto escuro', '#2a2823'],
    ['Quantidade de produtos', '5 (3 + 2)'],
    ['Quantidade de banners/fotos padrão', '3 (destaque, faixa larga, sobre)'],
    ['Seções', 'Cabeçalho, destaque (hero), 3 produtos, benefícios, banner largo, sobre, 2 produtos, rodapé'],
    ['Função de envio', 'Enviar - Template A (menu)'],
    [NOME_LINHA_TEXTO_PEDIR_PRODUTOS, TEXTO_PADRAO_PEDIR_PRODUTOS],
    [NOME_LINHA_TEXTO_PEDIR_TEXTOS, TEXTO_PADRAO_PEDIR_TEXTOS],
    [NOME_LINHA_TEXTO_PEDIR_TEXTOS_COM_PRODUTOS, ''],
    [NOME_LINHA_TEXTO_PEDIR_BANNER_HERO, TEXTO_PADRAO_PEDIR_BANNER_HERO],
    [NOME_LINHA_TEXTO_PEDIR_BANNER_HERO_COM_PRODUTOS, ''],
    [NOME_LINHA_LINKS_FOTOS_PRODUTOS, ''],
    [NOME_LINHA_LINKS_FUNDO_TRANSPARENTE, ''],
    [NOME_LINHA_TEXTO_PEDIR_FUNDO_BRANCO, ''],
    [NOME_LINHA_TEXTO_PEDIR_BANNER_FAIXA, TEXTO_PADRAO_PEDIR_BANNER_FAIXA],
    [NOME_LINHA_TEXTO_PEDIR_BANNER_FAIXA_COM_PRODUTOS, ''],
    [NOME_LINHA_TEXTO_PEDIR_BANNER_SOBRE, TEXTO_PADRAO_PEDIR_BANNER_SOBRE],
    [NOME_LINHA_TEXTO_PEDIR_BANNER_SOBRE_COM_PRODUTOS, ''],
    [NOME_LINHA_COLAR_RESPOSTA_TEXTOS, ''],
    ['', ''],
    ['— Ficha técnica (preencha os valores; a célula "Texto pronto pra copiar" abaixo já junta tudo automaticamente; a coluna C mostra o limite de caracteres sugerido pra cada campo, pra não estourar o espaço do layout) —', ''],
    ['NOME DO TEMPLATE', 'Template A'],
    ['ASSUNTO DO E-MAIL', 'E se a floresta coubesse num frasco? Semana do Brasil'],
    ['TÍTULO HERO', 'Semana do Brasil'],
    ['LEGENDA HERO', 'Uma celebração brasileira'],
    ['TEXTO HERO', 'Descontos exclusivos em essências e perfumes com óleos essenciais puros, só até domingo.'],
    ['TEXTO BOTÃO HERO', 'Aproveite as ofertas'],
    ['LINK BANNER HERO', ''],
    ['TÍTULO SEÇÃO PRODUTOS', 'Selecionados pra você'],
    [NOME_LINHA_PRODUTOS_FICHA, ''],
    ['TÍTULO BENEFÍCIOS', 'Por que aproveitar essa semana'],
    ['BENEFÍCIO 1', 'Até 30% de desconto em produtos selecionados'],
    ['BENEFÍCIO 2', 'Frete grátis a partir de R$ 150'],
    ['BENEFÍCIO 3', 'Estoque limitado, promoção só até domingo'],
    ['LINK BANNER FAIXA LARGA', ''],
    ['TÍTULO SOBRE', 'Sobre a Essência do Brasil'],
    ['TEXTO SOBRE', 'Perfumaria natural feita com óleos essenciais puros, celebrando a biodiversidade brasileira em cada frasco.'],
    ['LINK BANNER SOBRE', ''],
    ['RODAPÉ TEXTO', 'Essência do Brasil · e-mail de campanha'],
    ['', ''],
    ['Texto pronto pra copiar (cole isso no campo de texto da aba "Marketing em Preparação")', ''],
  ];

  const linhasComLimite = linhas.map(function(linha) {
    return [linha[0], linha[1], LIMITES_CARACTERES_TEMPLATE_A[linha[0]] || ''];
  });

  sheet.getRange(1, 1, linhasComLimite.length, 3).setValues(linhasComLimite);

  sheet.getRange('A1').setFontWeight('bold').setFontSize(13);
  sheet.getRange('A2').setFontWeight('bold');
  sheet.getRange('A26').setFontWeight('bold');
  sheet.getRange('A46').setFontWeight('bold');
  sheet.getRange(1, 1, linhasComLimite.length, 2).setWrap(true);
  sheet.setColumnWidth(1, 320);
  sheet.setColumnWidth(2, 420);
  sheet.setColumnWidth(3, 150);
  sheet.setRowHeight(12, 170);
  sheet.setRowHeight(13, 300);
  sheet.setRowHeight(14, 300);
  sheet.setRowHeight(15, 780);
  sheet.setRowHeight(16, 780);
  sheet.setRowHeight(17, 150);
  sheet.setRowHeight(18, 150);
  sheet.setRowHeight(19, 300);
  sheet.setRowHeight(20, 460);
  sheet.setRowHeight(21, 460);
  sheet.setRowHeight(22, 460);
  sheet.setRowHeight(23, 460);
  sheet.setRowHeight(24, 200);
  sheet.setRowHeight(35, 260);

  // Junta as linhas "NOME DO TEMPLATE" até "RODAPÉ TEXTO" em um bloco de
  // texto único, pronto pra copiar - feito pelo script (não por fórmula do
  // Sheets, pra não depender do separador de fórmula da língua da planilha).
  atualizarTextoParaCopiar();

  SpreadsheetApp.getUi().alert('Aba "' + ABA_TEMPLADE + '" criada com o bloco do Template A. Quando você criar um Template B, é só duplicar esse padrão de bloco mais abaixo na mesma aba e me avisar pra eu adicionar o código dele.');
}

/**
 * Recalcula a célula "Texto pronto pra copiar" a partir dos valores atuais
 * da ficha técnica (da linha "NOME DO TEMPLATE" até a linha "RODAPÉ TEXTO"
 * na aba "Templade") e escreve o resultado como texto puro (não fórmula).
 * A linha "PRODUTOS" é tratada de forma especial - em vez de virar
 * "PRODUTOS: <valor>", fica cercada por marcadores "=== PRODUTOS ==="
 * / "=== FIM PRODUTOS ===", porque o valor dela já é, por si só, um bloco
 * de várias linhas "ETIQUETA: valor" (um grupo por produto) - se fosse
 * juntado como as outras, essas etiquetas internas se misturariam com as
 * da ficha técnica na hora de separar tudo de novo no envio.
 * Rode isso de novo sempre que editar algum valor da ficha técnica.
 */
function atualizarTextoParaCopiar() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_TEMPLADE);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_TEMPLADE + '". Crie primeiro pelo menu "🧩 Criar aba \'Templade\'".');
    return;
  }

  const dados = sheet.getRange(1, 1, sheet.getLastRow(), 2).getValues();
  // Comparação com o texto EXATO (sem forçar maiúsculo) de propósito: a
  // seção "Estrutura" usa "Nome do template" (frase normal) e a "Ficha
  // técnica" usa "NOME DO TEMPLATE" (tudo maiúsculo) - são rótulos
  // diferentes, e comparar sem diferenciar caixa fazia a busca cair na
  // linha errada (a da seção "Estrutura", que vem antes).
  const inicio = dados.findIndex(function(linha) { return String(linha[0]).trim() === 'NOME DO TEMPLATE'; });
  const fim = dados.findIndex(function(linha) { return String(linha[0]).trim() === 'RODAPÉ TEXTO'; });
  // startsWith (índice 0), não "contém em qualquer lugar": o texto de
  // instrução da seção "Ficha técnica" também MENCIONA "Texto pronto pra
  // copiar" no meio da frase - só a linha certa começa exatamente com isso.
  const linhaAlvo = dados.findIndex(function(linha) { return String(linha[0]).trim().toLowerCase().indexOf('texto pronto pra copiar') === 0; });
  // linha de instrução da "Ficha técnica" - limpa qualquer lixo que uma
  // versão anterior do script possa ter escrito ali por engano.
  const linhaInstrucao = dados.findIndex(function(linha) { return String(linha[0]).trim().toLowerCase().indexOf('— ficha técnica') === 0; });

  if (inicio === -1 || fim === -1 || fim < inicio || linhaAlvo === -1) {
    ui.alert('Não encontrei as linhas esperadas ("NOME DO TEMPLATE", "RODAPÉ TEXTO" e "Texto pronto pra copiar") na aba "' + ABA_TEMPLADE + '". Se você mudou a estrutura dessa aba, me avisa pra eu ajustar o script.');
    return;
  }

  const textoFinal = dados.slice(inicio, fim + 1)
    .map(function(linha) {
      const rotulo = String(linha[0]).trim();
      const valor = String(linha[1] || '').trim();
      if (rotulo === NOME_LINHA_PRODUTOS_FICHA) {
        return '=== PRODUTOS ===\n' + valor + '\n=== FIM PRODUTOS ===';
      }
      return rotulo + ': ' + valor;
    })
    .join('\n');

  sheet.getRange(linhaAlvo + 1, 2).setValue(textoFinal);
  if (linhaInstrucao !== -1) {
    sheet.getRange(linhaInstrucao + 1, 2).clearContent();
  }
  ui.alert('"Texto pronto pra copiar" atualizado. Copie a célula e cole no campo de texto da aba "' + ABA_PREPARACAO + '".');
}

/**
 * Abre uma janela com o texto já pronto pra copiar (Ctrl+C, ou o botão
 * "Copiar" tenta colocar direto na área de transferência) - evita ter que
 * caçar a célula certa e arriscar copiar a coisa errada.
 */
function mostrarDialogoCopiar(texto, titulo) {
  const textoJs = JSON.stringify(String(texto || '')).replace(/</g, '\\u003c');
  const html = HtmlService.createHtmlOutput(
    '<textarea id="txt" readonly style="width:100%;height:280px;font-family:monospace;font-size:12px;box-sizing:border-box;padding:8px;"></textarea>' +
    '<div style="margin-top:10px;text-align:right;">' +
      '<button onclick="copiar()" style="padding:8px 16px;font-size:13px;cursor:pointer;">📋 Copiar</button>' +
    '</div>' +
    '<div id="status" style="margin-top:6px;font-family:Arial,sans-serif;font-size:12px;color:#2a7a2a;"></div>' +
    '<script>' +
      'var texto = ' + textoJs + ';' +
      'document.getElementById("txt").value = texto;' +
      'function selecionarTudo() {' +
        'var el = document.getElementById("txt");' +
        'el.focus();' +
        'el.select();' +
      '}' +
      'function marcarCopiado() {' +
        'document.getElementById("status").innerText = "Copiado! Já pode colar (Ctrl+V).";' +
      '}' +
      'function copiar() {' +
        'selecionarTudo();' +
        'if (navigator.clipboard && navigator.clipboard.writeText) {' +
          'navigator.clipboard.writeText(texto).then(marcarCopiado).catch(function() {' +
            'document.execCommand("copy");' +
            'marcarCopiado();' +
          '});' +
        '} else {' +
          'document.execCommand("copy");' +
          'marcarCopiado();' +
        '}' +
      '}' +
      'window.onload = function() { copiar(); };' +
    '</script>'
  ).setWidth(480).setHeight(420);

  SpreadsheetApp.getUi().showModalDialog(html, titulo);
}

/**
 * Abre em janela pronta pra copiar o valor da linha nomeLinha na seção
 * "Estrutura" da aba "Templade".
 */
function copiarLinhaEstrutura(nomeLinha, tituloJanela) {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_TEMPLADE);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_TEMPLADE + '". Crie primeiro pelo menu "🧩 Criar aba \'Templade\'".');
    return;
  }

  const dados = sheet.getRange(1, 1, sheet.getLastRow(), 2).getValues();
  const linhaIdx = dados.findIndex(function(linha) { return String(linha[0]).trim() === nomeLinha; });
  if (linhaIdx === -1) {
    ui.alert('Não encontrei a linha "' + nomeLinha + '" na aba "' + ABA_TEMPLADE + '".');
    return;
  }

  mostrarDialogoCopiar(dados[linhaIdx][1], tituloJanela);
}

function copiarTextoPedirProdutos() {
  copiarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_PRODUTOS, 'Texto pronto pra pedir produtos');
}

function copiarTextoPedirTextos() {
  copiarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_TEXTOS, 'Texto pronto pra pedir textos');
}

function copiarTextoPedirBannerHero() {
  copiarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_BANNER_HERO, 'Texto pronto pra pedir banner (hero)');
}

function copiarTextoPedirBannerFaixa() {
  copiarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_BANNER_FAIXA, 'Texto pronto pra pedir banner (faixa larga)');
}

function copiarTextoPedirBannerSobre() {
  copiarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_BANNER_SOBRE, 'Texto pronto pra pedir banner (sobre)');
}

function copiarTextoPedirTextosComProdutos() {
  copiarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_TEXTOS_COM_PRODUTOS, 'Texto pronto pra pedir textos (com produtos)');
}

function copiarTextoPedirBannerHeroComProdutos() {
  copiarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_BANNER_HERO_COM_PRODUTOS, 'Texto pronto pra pedir banner - hero (com produtos)');
}

function copiarTextoPedirBannerFaixaComProdutos() {
  copiarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_BANNER_FAIXA_COM_PRODUTOS, 'Texto pronto pra pedir banner - faixa larga (com produtos)');
}

function copiarTextoPedirBannerSobreComProdutos() {
  copiarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_BANNER_SOBRE_COM_PRODUTOS, 'Texto pronto pra pedir banner - sobre (com produtos)');
}

function copiarLinksFotosProdutos() {
  copiarLinhaEstrutura(NOME_LINHA_LINKS_FOTOS_PRODUTOS, 'Links das fotos dos produtos');
}

function copiarLinksFundoTransparente() {
  copiarLinhaEstrutura(NOME_LINHA_LINKS_FUNDO_TRANSPARENTE, 'Links com fundo transparente');
}

function copiarTextoPedirFundoBranco() {
  copiarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_FUNDO_BRANCO, 'Texto pronto pra pedir fundo branco');
}

/**
 * Lê o campo "PRODUTOS" da Ficha técnica (o bloco colado com o resultado
 * da pesquisa) e usa ele pra atualizar, de uma vez, todos os textos
 * "(com produtos desta campanha)" - textos, banner hero, banner faixa
 * larga, banner sobre - e o campo "LINKS DAS FOTOS DOS PRODUTOS" (busca a
 * foto de cada produto na aba "Links Produtos"). Os textos de base
 * (sem "com produtos") não são alterados - continuam só com as regras
 * fixas, sem produto nenhum.
 */
function atualizarTextosComProdutos() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_TEMPLADE);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_TEMPLADE + '". Crie primeiro pelo menu "🧩 Criar aba \'Templade\'".');
    return;
  }

  const dados = sheet.getRange(1, 1, sheet.getLastRow(), 2).getValues();
  const buscar = function(nomeLinha) {
    return dados.findIndex(function(linha) { return String(linha[0]).trim() === nomeLinha; });
  };

  const idxProdutos = buscar(NOME_LINHA_PRODUTOS_FICHA);
  if (idxProdutos === -1) {
    ui.alert('Não encontrei a linha "' + NOME_LINHA_PRODUTOS_FICHA + '" na aba "' + ABA_TEMPLADE + '".');
    return;
  }
  const produtosTexto = String(dados[idxProdutos][1] || '').trim();
  if (!produtosTexto) {
    ui.alert('O campo "' + NOME_LINHA_PRODUTOS_FICHA + '" está vazio. Cole ali o resultado da pesquisa de produtos antes de atualizar.');
    return;
  }

  const blocos = produtosTexto.split(/\n\s*\n/).map(function(bloco) { return bloco.trim(); }).filter(function(bloco) { return bloco; });
  const nomesProdutos = blocos
    .map(function(bloco) { return (parseTextoColado(bloco)['NOME DO PRODUTO'] || '').trim(); })
    .filter(function(nome) { return nome; });

  const atualizarSePresente = function(nomeLinhaBase, nomeLinhaDestino, cabecalho, corpoProdutos) {
    const idxBase = buscar(nomeLinhaBase);
    const idxDestino = buscar(nomeLinhaDestino);
    if (idxBase === -1 || idxDestino === -1) return;
    const base = String(dados[idxBase][1] || '');
    const secao = cabecalho + '\n\n' + corpoProdutos + '\n\n';
    sheet.getRange(idxDestino + 1, 2).setValue(secao + base);
  };

  atualizarSePresente(
    NOME_LINHA_TEXTO_PEDIR_TEXTOS,
    NOME_LINHA_TEXTO_PEDIR_TEXTOS_COM_PRODUTOS,
    'Produtos escolhidos pra essa campanha (considere as características e\ncondições deles, especialmente nos campos BENEFÍCIO e TEXTO HERO):',
    produtosTexto
  );

  atualizarSePresente(
    NOME_LINHA_TEXTO_PEDIR_BANNER_HERO,
    NOME_LINHA_TEXTO_PEDIR_BANNER_HERO_COM_PRODUTOS,
    'Produtos sugeridos pra essa campanha:',
    nomesProdutos.join('\n')
  );

  atualizarSePresente(
    NOME_LINHA_TEXTO_PEDIR_BANNER_FAIXA,
    NOME_LINHA_TEXTO_PEDIR_BANNER_FAIXA_COM_PRODUTOS,
    'Produtos dessa campanha (pra referência de ingredientes coerentes):',
    nomesProdutos.join('\n')
  );

  atualizarSePresente(
    NOME_LINHA_TEXTO_PEDIR_BANNER_SOBRE,
    NOME_LINHA_TEXTO_PEDIR_BANNER_SOBRE_COM_PRODUTOS,
    'Produtos dessa campanha (pra referência de elementos/ingredientes coerentes):',
    nomesProdutos.join('\n')
  );

  // Busca cada produto uma vez só e reaproveita pra montar tanto a lista de
  // links normal quanto a lista de quem ainda está com fundo transparente
  // (sem versão com fundo branco na coluna D de "Links Produtos") e o
  // texto pronto pra pedir essa correção.
  const linhasLinks = [];
  const linhasTransparentes = [];
  nomesProdutos.forEach(function(nome) {
    const produto = buscarProdutoPorNome(nome);
    if (!produto) {
      linhasLinks.push(nome + ': (foto não encontrada em "' + ABA_PRODUTOS + '")');
      return;
    }
    linhasLinks.push(nome + ': ' + (produto.foto || '(sem link de foto)'));
    if (!produto.fotoTemFundoBranco && produto.fotoTransparente) {
      linhasTransparentes.push(nome + ': ' + produto.fotoTransparente);
    }
  });

  const idxLinks = buscar(NOME_LINHA_LINKS_FOTOS_PRODUTOS);
  if (idxLinks !== -1) {
    sheet.getRange(idxLinks + 1, 2).setValue(linhasLinks.join('\n'));
  }

  const idxTransparentes = buscar(NOME_LINHA_LINKS_FUNDO_TRANSPARENTE);
  if (idxTransparentes !== -1) {
    sheet.getRange(idxTransparentes + 1, 2).setValue(
      linhasTransparentes.length > 0
        ? linhasTransparentes.join('\n')
        : 'Nenhuma - todos os produtos escolhidos já têm foto com fundo branco.'
    );
  }

  const idxPedirFundoBranco = buscar(NOME_LINHA_TEXTO_PEDIR_FUNDO_BRANCO);
  if (idxPedirFundoBranco !== -1) {
    sheet.getRange(idxPedirFundoBranco + 1, 2).setValue(
      linhasTransparentes.length > 0
        ? TEXTO_BASE_PEDIR_FUNDO_BRANCO + '\n\n' + linhasTransparentes.join('\n')
        : ''
    );
  }

  const avisoFundoPreto = linhasTransparentes.length > 0
    ? '\n\n⚠️ ' + linhasTransparentes.length + ' produto(s) ainda sem foto com fundo branco (risco de fundo preto) - veja "' + NOME_LINHA_LINKS_FUNDO_TRANSPARENTE + '" e o "' + NOME_LINHA_TEXTO_PEDIR_FUNDO_BRANCO + '". O envio fica bloqueado até isso ser corrigido.'
    : '';
  ui.alert('Textos e links atualizados com os produtos do campo "' + NOME_LINHA_PRODUTOS_FICHA + '". Confira as linhas na aba "' + ABA_TEMPLADE + '".' + avisoFundoPreto);
}

/**
 * Item de menu: abre o "Texto pronto pra copiar" (ficha técnica já
 * montada, aba "Templade") pronto pra copiar.
 */
function copiarFichaTecnica() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_TEMPLADE);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_TEMPLADE + '". Crie primeiro pelo menu "🧩 Criar aba \'Templade\'".');
    return;
  }

  const dados = sheet.getRange(1, 1, sheet.getLastRow(), 2).getValues();
  const linhaIdx = dados.findIndex(function(linha) { return String(linha[0]).trim().toLowerCase().indexOf('texto pronto pra copiar') === 0; });
  if (linhaIdx === -1) {
    ui.alert('Não encontrei a linha "Texto pronto pra copiar" na aba "' + ABA_TEMPLADE + '".');
    return;
  }

  const texto = String(dados[linhaIdx][1] || '');
  if (!texto.trim()) {
    ui.alert('A célula "Texto pronto pra copiar" está vazia. Rode "🔄 Atualizar \'Texto pronto pra copiar\'" primeiro.');
    return;
  }

  mostrarDialogoCopiar(texto, 'Texto pronto pra copiar (ficha técnica)');
}

/**
 * Lê a célula "Colar aqui a resposta da IA (pra distribuir na Ficha
 * técnica)" e distribui cada campo encontrado ("ETIQUETA: valor") na linha
 * correspondente da Ficha técnica, batendo pelo nome exato da etiqueta.
 * Campos que não têm uma linha correspondente ficam de fora (avisado no
 * final). Depois de distribuir, limpa a célula de rascunho e lembra de
 * rodar "🔄 Atualizar 'Texto pronto pra copiar'" em seguida.
 *
 * Existe pra evitar o erro mais comum: colar a resposta da IA direto na
 * célula "Texto pronto pra copiar" (formato parece igual, mas aquela
 * célula é gerada pelo script - colar ali by-passa o script inteiro, que é
 * quem junta produtos e links de banner no texto final).
 */
function distribuirTextoNaFichaTecnica() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_TEMPLADE);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_TEMPLADE + '". Crie primeiro pelo menu "🧩 Criar aba \'Templade\'".');
    return;
  }

  const dados = sheet.getRange(1, 1, sheet.getLastRow(), 2).getValues();
  const buscar = function(nomeLinha) {
    return dados.findIndex(function(linha) { return String(linha[0]).trim() === nomeLinha; });
  };

  const idxColar = buscar(NOME_LINHA_COLAR_RESPOSTA_TEXTOS);
  if (idxColar === -1) {
    ui.alert('Não encontrei a linha "' + NOME_LINHA_COLAR_RESPOSTA_TEXTOS + '" na aba "' + ABA_TEMPLADE + '".');
    return;
  }

  const textoColado = String(dados[idxColar][1] || '').trim();
  if (!textoColado) {
    ui.alert('A célula "' + NOME_LINHA_COLAR_RESPOSTA_TEXTOS + '" está vazia. Cole ali a resposta da IA antes de distribuir.');
    return;
  }

  const campos = parseTextoColado(textoColado);
  const chavesEncontradas = Object.keys(campos);
  if (chavesEncontradas.length === 0) {
    ui.alert('Não consegui identificar nenhum campo no texto colado. Confira se cada linha está no formato "ETIQUETA: valor".');
    return;
  }

  const inicioFicha = buscar('NOME DO TEMPLATE');
  const fimFicha = buscar('RODAPÉ TEXTO');
  if (inicioFicha === -1 || fimFicha === -1) {
    ui.alert('Não encontrei os limites da Ficha técnica na aba "' + ABA_TEMPLADE + '".');
    return;
  }

  let distribuidos = 0;
  const naoReconhecidos = [];
  chavesEncontradas.forEach(function(chave) {
    let idxCampo = -1;
    for (let i = inicioFicha; i <= fimFicha; i++) {
      if (String(dados[i][0]).trim() === chave) {
        idxCampo = i;
        break;
      }
    }
    if (idxCampo === -1) {
      naoReconhecidos.push(chave);
      return;
    }
    sheet.getRange(idxCampo + 1, 2).setValue(campos[chave]);
    distribuidos++;
  });

  sheet.getRange(idxColar + 1, 2).clearContent();

  let mensagem = distribuidos + ' campo(s) distribuído(s) na Ficha técnica.';
  if (naoReconhecidos.length > 0) {
    mensagem += '\n\nNão reconheci (ficaram de fora): ' + naoReconhecidos.join(', ');
  }
  mensagem += '\n\nAgora rode "🔄 Atualizar \'Texto pronto pra copiar\'" pra juntar tudo.';
  ui.alert(mensagem);
}

/**
 * Apaga só os VALORES da Ficha técnica do Template A (da linha "NOME DO
 * TEMPLATE" até "RODAPÉ TEXTO", coluna B - inclui assunto, textos, links
 * de banner e produtos) e a célula "Texto pronto pra copiar" - mantém os
 * rótulos e a seção "Estrutura" intactos. Use antes de preencher os dados
 * de um tema novo, pra não sobrar nada do tema anterior misturado.
 */
function limparFichaTecnicaTemplade() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_TEMPLADE);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_TEMPLADE + '". Crie primeiro pelo menu "🧩 Criar aba \'Templade\'".');
    return;
  }

  const resp = ui.alert(
    'Isso vai apagar os valores da Ficha técnica do Template A (assunto, título, textos, benefícios, produtos, links de banner...) na aba "Templade" - os rótulos e a seção "Estrutura" continuam lá. Confirma?',
    ui.ButtonSet.YES_NO
  );
  if (resp !== ui.Button.YES) return;

  const dados = sheet.getRange(1, 1, sheet.getLastRow(), 2).getValues();
  const inicio = dados.findIndex(function(linha) { return String(linha[0]).trim() === 'NOME DO TEMPLATE'; });
  const fim = dados.findIndex(function(linha) { return String(linha[0]).trim() === 'RODAPÉ TEXTO'; });
  const linhaAlvo = dados.findIndex(function(linha) { return String(linha[0]).trim().toLowerCase().indexOf('texto pronto pra copiar') === 0; });

  if (inicio === -1 || fim === -1) {
    ui.alert('Não encontrei as linhas da Ficha técnica na aba "' + ABA_TEMPLADE + '".');
    return;
  }

  sheet.getRange(inicio + 1, 2, fim - inicio + 1, 1).clearContent();
  if (linhaAlvo !== -1) {
    sheet.getRange(linhaAlvo + 1, 2).clearContent();
  }

  ui.alert('Ficha técnica limpa. Pode preencher os dados do novo tema.');
}

/**
 * Insere uma linha [nomeLinha, texto] na seção "Estrutura" da aba
 * "Templade" (que já precisa existir), logo depois da linha ancorada por
 * nomeLinhaAncora. Não faz nada (retorna false) se a linha já existir.
 * Versão "silenciosa" (sem alert) - usada tanto por adicionarLinhaEstrutura
 * (que alerta pra um item de menu só) quanto por funções que adicionam
 * várias linhas de uma vez e preferem um único alert combinado no final.
 */
function inserirLinhaEstruturaSeNaoExistir(sheet, nomeLinha, texto, alturaLinha, nomeLinhaAncora) {
  const dados = sheet.getRange(1, 1, sheet.getLastRow(), 1).getValues();
  const jaExiste = dados.some(function(linha) { return String(linha[0]).trim() === nomeLinha; });
  if (jaExiste) return false;

  const linhaAncoraIdx = dados.findIndex(function(linha) { return String(linha[0]).trim() === nomeLinhaAncora; });
  const linhaSheetInsercao = linhaAncoraIdx === -1 ? sheet.getLastRow() : linhaAncoraIdx + 1;

  sheet.insertRowAfter(linhaSheetInsercao);
  const novaLinha = linhaSheetInsercao + 1;
  sheet.getRange(novaLinha, 1).setValue(nomeLinha).setWrap(true);
  sheet.getRange(novaLinha, 2).setValue(texto).setWrap(true);
  sheet.setRowHeight(novaLinha, alturaLinha);
  return true;
}

/**
 * Insere uma linha [nomeLinha, texto] na seção "Estrutura" da aba
 * "Templade", logo depois da linha ancorada por nomeLinhaAncora - usado
 * pra adicionar linhas novas (como os textos prontos) em abas que já
 * existiam antes dessas linhas serem criadas. Não faz nada se a linha já
 * existir.
 */
function adicionarLinhaEstrutura(nomeLinha, texto, alturaLinha, nomeLinhaAncora) {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_TEMPLADE);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_TEMPLADE + '". Crie primeiro pelo menu "🧩 Criar aba \'Templade\'".');
    return;
  }

  const inserida = inserirLinhaEstruturaSeNaoExistir(sheet, nomeLinha, texto, alturaLinha, nomeLinhaAncora);
  if (!inserida) {
    ui.alert('Já existe uma linha "' + nomeLinha + '" na aba "' + ABA_TEMPLADE + '".');
    return;
  }

  ui.alert('Pronto! Veja a linha "' + nomeLinha + '" na aba "' + ABA_TEMPLADE + '".');
}

/**
 * Adiciona (se ainda não existirem) as duas linhas de apoio ao problema de
 * fundo preto em fotos transparentes - "LINKS COM FUNDO TRANSPARENTE" e
 * "Texto pronto pra pedir fundo branco" - em abas "Templade" que já
 * existiam antes delas serem criadas. As duas ficam vazias até você rodar
 * "🔄 Atualizar textos com produtos" pela primeira vez.
 */
function adicionarCamposFundoBranco() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_TEMPLADE);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_TEMPLADE + '". Crie primeiro pelo menu "🧩 Criar aba \'Templade\'".');
    return;
  }

  inserirLinhaEstruturaSeNaoExistir(sheet, NOME_LINHA_LINKS_FUNDO_TRANSPARENTE, '', 150, NOME_LINHA_LINKS_FOTOS_PRODUTOS);
  inserirLinhaEstruturaSeNaoExistir(sheet, NOME_LINHA_TEXTO_PEDIR_FUNDO_BRANCO, '', 300, NOME_LINHA_LINKS_FUNDO_TRANSPARENTE);

  ui.alert(
    'Campos de fundo branco adicionados (ou já existiam) na aba "' + ABA_TEMPLADE + '". Lembre de também adicionar a ' +
    'coluna "Link da foto (fundo branco)" na aba "' + ABA_PRODUTOS + '" (coluna D) e ir preenchendo aos poucos. ' +
    'Depois, rode "🔄 Atualizar textos com produtos" pra atualizar esses campos.'
  );
}

function adicionarTextoParaPedirProdutos() {
  adicionarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_PRODUTOS, TEXTO_PADRAO_PEDIR_PRODUTOS, 170, 'Função de envio');
}

function adicionarTextoParaPedirTextos() {
  adicionarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_TEXTOS, TEXTO_PADRAO_PEDIR_TEXTOS, 300, NOME_LINHA_TEXTO_PEDIR_PRODUTOS);
}

function adicionarTextoParaPedirBannerHero() {
  adicionarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_BANNER_HERO, TEXTO_PADRAO_PEDIR_BANNER_HERO, 780, NOME_LINHA_TEXTO_PEDIR_TEXTOS);
}

function adicionarTextoParaPedirBannerFaixa() {
  adicionarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_BANNER_FAIXA, TEXTO_PADRAO_PEDIR_BANNER_FAIXA, 460, NOME_LINHA_TEXTO_PEDIR_BANNER_HERO);
}

function adicionarTextoParaPedirBannerSobre() {
  adicionarLinhaEstrutura(NOME_LINHA_TEXTO_PEDIR_BANNER_SOBRE, TEXTO_PADRAO_PEDIR_BANNER_SOBRE, 460, NOME_LINHA_TEXTO_PEDIR_BANNER_FAIXA);
}

/**
 * Preenche a coluna C (Limite de caracteres) das linhas da Ficha técnica
 * do Template A, pra quem já criou a aba "Templade" antes dessa coluna
 * existir. Se já tiver algum valor preenchido ali, pede confirmação antes
 * de sobrescrever.
 */
function adicionarLimitesCaracteres() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_TEMPLADE);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_TEMPLADE + '". Crie primeiro pelo menu "🧩 Criar aba \'Templade\'".');
    return;
  }

  const dados = sheet.getRange(1, 1, sheet.getLastRow(), 3).getValues();
  const inicio = dados.findIndex(function(linha) { return String(linha[0]).trim() === 'NOME DO TEMPLATE'; });
  const fim = dados.findIndex(function(linha) { return String(linha[0]).trim() === 'RODAPÉ TEXTO'; });

  if (inicio === -1 || fim === -1) {
    ui.alert('Não encontrei as linhas da Ficha técnica na aba "' + ABA_TEMPLADE + '".');
    return;
  }

  const jaTemAlgo = dados.slice(inicio, fim + 1).some(function(linha) { return linha[2] !== '' && linha[2] !== null && linha[2] !== undefined; });
  if (jaTemAlgo) {
    const resp = ui.alert('Já existe algum valor na coluna de limite de caracteres. Sobrescrever com os limites padrão do Template A?', ui.ButtonSet.YES_NO);
    if (resp !== ui.Button.YES) return;
  }

  for (let i = inicio; i <= fim; i++) {
    const rotulo = String(dados[i][0]).trim();
    const limite = LIMITES_CARACTERES_TEMPLATE_A[rotulo];
    if (limite !== undefined) {
      sheet.getRange(i + 1, 3).setValue(limite);
    }
  }
  sheet.setColumnWidth(3, 150);

  ui.alert('Limites de caracteres adicionados na coluna C da aba "' + ABA_TEMPLADE + '".');
}

// ======================= ABA "MARKETING EM PREPARAÇÃO" =======================

/**
 * Cria (se ainda não existir) a aba "Marketing em Preparação": estrutura
 * fixa, reaproveitada a cada campanha - 1 campo de texto único, onde se
 * cola o bloco inteiro copiado da aba "Templade" (ficha técnica + produtos
 * + links de banner, tudo junto).
 */
function criarAbaMarketingPreparacao() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (ss.getSheetByName(ABA_PREPARACAO)) {
    SpreadsheetApp.getUi().alert('A aba "' + ABA_PREPARACAO + '" já existe - não mexi pra não sobrescrever a campanha que você esteja preparando.');
    return;
  }

  const sheet = ss.insertSheet(ABA_PREPARACAO);

  const linhas = [
    ['Campo', 'Valor'],
    ['Texto (colar aqui o bloco copiado da aba "Templade")', ''],
  ];

  sheet.getRange(1, 1, linhas.length, 2).setValues(linhas);
  sheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  sheet.getRange(2, 1, 1, 2).setWrap(true);
  sheet.setRowHeight(2, 420);
  sheet.setColumnWidth(1, 320);
  sheet.setColumnWidth(2, 480);
  sheet.setFrozenRows(1);

  SpreadsheetApp.getUi().alert('Aba "' + ABA_PREPARACAO + '" criada. Cole o bloco copiado da aba "Templade" na linha 2, depois rode o envio do template correspondente no menu.');
}

/**
 * Apaga o texto preenchido na aba "Marketing em Preparação", pra deixar
 * pronta pra próxima campanha (ela guarda uma campanha por vez).
 */
function limparMarketingPreparacao() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_PREPARACAO);
  if (!sheet) {
    ui.alert('Não encontrei a aba "' + ABA_PREPARACAO + '". Crie primeiro pelo menu "📝 Criar aba \'Marketing em Preparação\'".');
    return;
  }

  const resp = ui.alert(
    'Isso vai apagar o texto preenchido na aba "Marketing em Preparação", pra começar uma campanha nova. Confirma?',
    ui.ButtonSet.YES_NO
  );
  if (resp !== ui.Button.YES) return;

  sheet.getRange(2, 2).clearContent();

  ui.alert('Aba "' + ABA_PREPARACAO + '" limpa. Pronta pra próxima campanha.');
}

/**
 * Cria (se ainda não existir) a aba "Links Padrão" - já preenchida com
 * toda a estrutura de categorias/filtros do menu do site.
 */
function criarAbaLinksPadrao() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const NOME_ABA = ABA_LINKS_PADRAO;

  if (ss.getSheetByName(NOME_ABA)) {
    SpreadsheetApp.getUi().alert('A aba "' + NOME_ABA + '" já existe - não mexi pra não sobrescrever links que você já tenha colado.');
    return;
  }

  const sheet = ss.insertSheet(NOME_ABA);

  // [Categoria, Subcategoria, Nome para o e-mail, Link]
  const linhas = [
    ['Categoria', 'Subcategoria', 'Nome para o e-mail', 'Link'],

    ['—', '—', 'Início', ''],
    ['—', '—', 'Contato', ''],
    ['—', '—', 'Instagram', ''],
    ['—', '—', 'Descadastro', ''],

    ['Ofertas', '—', 'Ver tudo em Ofertas', ''],
    ['Ofertas', 'Elas', 'Ofertas - Elas', ''],
    ['Ofertas', 'Eles', 'Ofertas - Eles', ''],

    ['Perfumes Masculinos', '—', 'Ver tudo em Perfumes Masculinos', ''],
    ['Perfumes Masculinos', 'Até R$79,90', 'Perfumes Masc. até R$79,90', ''],
    ['Perfumes Masculinos', 'Amadeirados', 'Perfumes Masc. Amadeirados', ''],
    ['Perfumes Masculinos', 'Cítricos', 'Perfumes Masc. Cítricos', ''],
    ['Perfumes Masculinos', 'com Almíscar', 'Perfumes Masc. com Almíscar', ''],
    ['Perfumes Masculinos', 'com Patchouli', 'Perfumes Masc. com Patchouli', ''],
    ['Perfumes Masculinos', 'Florais', 'Perfumes Masc. Florais', ''],
    ['Perfumes Masculinos', 'Herbais', 'Perfumes Masc. Herbais', ''],
    ['Perfumes Masculinos', 'Refrescantes', 'Perfumes Masc. Refrescantes', ''],
    ['Perfumes Masculinos', 'Extrait de Parfum', 'Perfumes Masc. Extrait de Parfum', ''],
    ['Perfumes Masculinos', 'Kits', 'Perfumes Masc. Kits', ''],
    ['Perfumes Masculinos', 'Perfumes Roll On', 'Perfumes Masc. Roll On', ''],
    ['Perfumes Masculinos', 'Mais Vendidos e Recomendados', 'Perfumes Masc. Mais Vendidos', ''],

    ['Perfumes Femininos', '—', 'Ver tudo em Perfumes Femininos', ''],
    ['Perfumes Femininos', 'Amadeirados', 'Perfumes Fem. Amadeirados', ''],
    ['Perfumes Femininos', 'Florais', 'Perfumes Fem. Florais', ''],
    ['Perfumes Femininos', 'Frutais', 'Perfumes Fem. Frutais', ''],
    ['Perfumes Femininos', 'Cítricos', 'Perfumes Fem. Cítricos', ''],
    ['Perfumes Femininos', 'Gourmand', 'Perfumes Fem. Gourmand', ''],
    ['Perfumes Femininos', 'Herbais/Refrescantes', 'Perfumes Fem. Herbais/Refrescantes', ''],
    ['Perfumes Femininos', 'Orientais', 'Perfumes Fem. Orientais', ''],
    ['Perfumes Femininos', 'Kits', 'Perfumes Fem. Kits', ''],
    ['Perfumes Femininos', 'Até R$79,90', 'Perfumes Fem. até R$79,90', ''],
    ['Perfumes Femininos', 'Extrait de Parfum', 'Perfumes Fem. Extrait de Parfum', ''],
    ['Perfumes Femininos', 'Perfumes Roll On', 'Perfumes Fem. Roll On', ''],

    ['Óleos Essenciais', '—', 'Ver tudo em Óleos Essenciais', ''],
    ['Óleos Essenciais', 'Prontos para Massagem', 'Óleos Essenciais p/ Massagem', ''],
    ['Óleos Essenciais', 'Óleos em roll on', 'Óleos Essenciais Roll On', ''],
    ['Óleos Essenciais', 'Kits', 'Óleos Essenciais Kits', ''],
    ['Óleos Essenciais', '10ml a 100ml', 'Óleos Essenciais 10ml a 100ml', ''],
    ['Óleos Essenciais', 'Blends/Sinergias', 'Óleos Essenciais Blends/Sinergias', ''],

    ['Óleos Vegetais', '—', 'Óleos Vegetais', ''],

    ['Essências', '—', 'Ver tudo em Essências', ''],
    ['Essências', 'Individuais', 'Essências Individuais', ''],
    ['Essências', 'Kits de Essências', 'Kits de Essências', ''],

    ['Cremes e Séruns', '—', 'Cremes e Séruns', ''],

    ['Coleções', '—', 'Ver tudo em Coleções', ''],
    ['Coleções', 'Absolu / Elixir - Extrait de Parfum', 'Coleção Absolu / Elixir', ''],
    ['Coleções', 'Botânica Imperial', 'Coleção Botânica Imperial', ''],
    ['Coleções', 'Com Feromônios', 'Coleção Com Feromônios', ''],
    ['Coleções', 'Dia dos Namorados', 'Coleção Dia dos Namorados', ''],
    ['Coleções', 'Dia dos Pais', 'Coleção Dia dos Pais', ''],
    ['Coleções', 'Fougères', 'Coleção Fougères', ''],
    ['Coleções', 'Mol', 'Coleção Mol', ''],
    ['Coleções', 'Profumo', 'Coleção Profumo', ''],
    ['Coleções', 'Sinergias Oficiais do Livro', 'Coleção Sinergias Oficiais do Livro', ''],
    ['Coleções', 'Vegano e Cruelty Free', 'Coleção Vegano e Cruelty Free', ''],

    ['Blog / Conteúdo', '—', 'Aromaterapia Funciona?', ''],
  ];

  sheet.getRange(1, 1, linhas.length, 4).setValues(linhas);
  sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, 4);

  SpreadsheetApp.getUi().alert('Aba "' + NOME_ABA + '" criada com ' + (linhas.length - 1) + ' links (categorias/subcategorias). Agora é só colar o link de cada um na coluna D.');
}

// ======================= LEITURA DE DADOS =======================

/**
 * Procura um produto pelo nome exato (sem diferenciar maiúsculas/minúsculas
 * nem espaços nas pontas) na aba "Links Produtos" (colunas: Link do
 * produto | Link da foto | Nome | Link da foto (fundo branco) - sem coluna
 * de preço, o preço vem sempre do texto colado em "Marketing em
 * Preparação", que é mais atualizado). Retorna null se não encontrar.
 *
 * A foto retornada em ".foto" prioriza a versão com fundo branco (coluna
 * D) quando ela estiver preenchida - só cai pra foto transparente (coluna
 * B) quando a de fundo branco ainda não existir. ".fotoTemFundoBranco"
 * indica se a versão segura está disponível; é isso que enviarTemplate usa
 * pra bloquear o envio quando algum produto da campanha ainda só tem a
 * foto transparente (risco de fundo preto em alguns clientes de e-mail).
 */
function buscarProdutoPorNome(nome) {
  if (!nome) return null;
  const alvo = String(nome).trim().toLowerCase();
  if (!alvo) return null;

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_PRODUTOS);
  if (!sheet) throw new Error('Não encontrei a aba "' + ABA_PRODUTOS + '".');

  const ultimaLinha = sheet.getLastRow();
  if (ultimaLinha < 2) return null;

  const dados = sheet.getRange(2, 1, ultimaLinha - 1, 4).getValues();
  for (let i = 0; i < dados.length; i++) {
    const [link, fotoTransparente, nomeProduto, fotoFundoBranco] = dados[i];
    if (String(nomeProduto).trim().toLowerCase() === alvo) {
      const fotoBranca = String(fotoFundoBranco || '').trim();
      const fotoTransp = String(fotoTransparente || '').trim();
      return {
        link: link || '#',
        foto: fotoBranca || fotoTransp,
        fotoTransparente: fotoTransp,
        fotoTemFundoBranco: !!fotoBranca,
        nome: nomeProduto,
      };
    }
  }
  return null;
}

/**
 * Procura um link fixo pelo "Nome para o e-mail" na aba "Links Padrão".
 * Retorna string vazia se não encontrar ou se o valor não for um link de
 * verdade (ex: a linha de "Descadastro" tem só uma observação, não uma URL).
 */
function buscarLinkPadrao(nomeParaEmail) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_LINKS_PADRAO);
  if (!sheet) return '';

  const ultimaLinha = sheet.getLastRow();
  if (ultimaLinha < 2) return '';

  const dados = sheet.getRange(2, 1, ultimaLinha - 1, 4).getValues();
  const alvo = String(nomeParaEmail).trim().toLowerCase();
  for (let i = 0; i < dados.length; i++) {
    const nome = String(dados[i][2]).trim().toLowerCase();
    if (nome === alvo) {
      const link = String(dados[i][3] || '').trim();
      return /^https?:\/\//i.test(link) ? link : '';
    }
  }
  return '';
}

function hrefOuAlmofada(link) {
  return link ? link : '#';
}

/**
 * Converte um valor de preço (número, ou texto tipo "R$ 39,90") pra número.
 * Retorna null se estiver vazio ou não for possível interpretar.
 */
function paraNumero(valor) {
  if (valor === '' || valor === null || valor === undefined) return null;
  if (typeof valor === 'number') return valor;
  const limpo = String(valor).replace('R$', '').trim().replace(',', '.');
  if (!limpo) return null;
  const numero = parseFloat(limpo);
  return isNaN(numero) ? null : numero;
}

function formatarPreco(numero) {
  return 'R$ ' + numero.toFixed(2).replace('.', ',');
}

/**
 * Separa o bloco de produtos (delimitado por "=== PRODUTOS ===" /
 * "=== FIM PRODUTOS ===") do resto do texto colado. Retorna o bloco de
 * produtos (cru, sem os marcadores) e o restante do texto (sem essa
 * seção) - assim o restante pode ser lido normalmente pela
 * parseTextoColado sem as etiquetas internas dos produtos ("Nome do
 * produto:", etc.) atrapalharem os campos da ficha técnica.
 */
function extrairBlocoProdutos(textoCompleto) {
  const regex = /=== PRODUTOS ===\n([\s\S]*?)\n=== FIM PRODUTOS ===/;
  const match = regex.exec(textoCompleto);
  if (!match) {
    return { produtosTexto: '', restante: textoCompleto };
  }
  const produtosTexto = match[1].trim();
  const restante = (textoCompleto.slice(0, match.index) + textoCompleto.slice(match.index + match[0].length)).trim();
  return { produtosTexto: produtosTexto, restante: restante };
}

/**
 * Lê a aba "Marketing em Preparação": o único campo de texto colado (linha
 * 2, coluna B). Separa dele o bloco de produtos (formato: um grupo de
 * linhas "ETIQUETA: valor" por produto - Nome do produto / Preço original
 * / Preço com desconto / Observação -, com uma linha em branco separando
 * um produto do outro, exatamente como a pesquisa devolve) e retorna, à
 * parte, o restante do texto (ficha técnica + links de banner) pronto pra
 * ser lido por parseTextoColado.
 */
function lerPreparacao() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_PREPARACAO);
  if (!sheet) throw new Error('Não encontrei a aba "' + ABA_PREPARACAO + '". Crie primeiro pelo menu "📝 Criar aba \'Marketing em Preparação\'".');

  const textoCompleto = String(sheet.getRange(2, 2).getValue() || '').trim();
  const extraido = extrairBlocoProdutos(textoCompleto);

  const blocos = extraido.produtosTexto
    ? extraido.produtosTexto.split(/\n\s*\n/).map(function(bloco) { return bloco.trim(); }).filter(function(bloco) { return bloco; })
    : [];

  const produtos = [];
  for (let i = 0; i < 5; i++) {
    if (!blocos[i]) {
      produtos.push({ nome: '', precoPesquisado: '', precoComDesconto: '', observacao: '' });
      continue;
    }
    const campos = parseTextoColado(blocos[i]);
    produtos.push({
      nome: (campos['NOME DO PRODUTO'] || '').trim(),
      precoPesquisado: campos['PREÇO ORIGINAL'] || '',
      precoComDesconto: campos['PREÇO COM DESCONTO'] || '',
      observacao: campos['OBSERVAÇÃO'] || '',
    });
  }

  return { produtos: produtos, texto: extraido.restante };
}

/**
 * Separa o texto único colado em campos, a partir de linhas no formato
 * "ETIQUETA: valor" (uma por linha). Etiquetas viram maiúsculas/sem espaço
 * nas pontas, pra comparar sem depender de acentuação de digitação exata.
 */
function parseTextoColado(texto) {
  const mapa = {};
  if (!texto) return mapa;

  String(texto).split('\n').forEach(function(linha) {
    const idx = linha.indexOf(':');
    if (idx === -1) return;
    const chave = linha.substring(0, idx).trim().toUpperCase();
    const valor = linha.substring(idx + 1).trim();
    if (chave) mapa[chave] = valor;
  });

  return mapa;
}

// ======================= ENVIO (ÚNICO PARA QUALQUER TEMPLATE) =======================

/**
 * Registro de templates conhecidos: chave = nome do template em minúsculo
 * (tem que bater com o valor de "NOME DO TEMPLATE" no texto colado), valor
 * = função de montagem do HTML. Pra adicionar um Template B, basta somar
 * uma linha aqui: 'template b': montarHtmlTemplateB.
 */
const REGISTRO_TEMPLATES = {
  'template a': montarHtmlTemplateA,
};

/**
 * Item de menu ÚNICO pra enviar qualquer template. Lê o texto colado na
 * aba "Marketing em Preparação", descobre pelo "NOME DO TEMPLATE" qual
 * função de montagem usar (via REGISTRO_TEMPLATES) e segue o envio.
 */
function enviarTemplate() {
  const ui = SpreadsheetApp.getUi();

  let preparacao;
  try {
    preparacao = lerPreparacao();
  } catch (e) {
    ui.alert(e.message);
    return;
  }

  if (!preparacao.texto.trim()) {
    ui.alert('O campo de texto da aba "' + ABA_PREPARACAO + '" está vazio. Copie o "Texto pronto pra copiar" da aba "Templade" e cole ali antes de enviar.');
    return;
  }

  const campos = parseTextoColado(preparacao.texto);
  const nomeTemplateNoTexto = (campos['NOME DO TEMPLATE'] || '').trim().toLowerCase();
  const montar = REGISTRO_TEMPLATES[nomeTemplateNoTexto];

  if (!montar) {
    const disponiveis = Object.keys(REGISTRO_TEMPLATES).join(', ');
    ui.alert('Não reconheci o template "' + (campos['NOME DO TEMPLATE'] || '(vazio)') + '". Templates disponíveis: ' + disponiveis + '. Confira se o texto colado na aba "' + ABA_PREPARACAO + '" tem a linha "NOME DO TEMPLATE:" certa (e se cada linha usa o formato "ETIQUETA: valor").');
    return;
  }

  const produtos = [];
  for (let i = 0; i < preparacao.produtos.length; i++) {
    const entrada = preparacao.produtos[i];
    if (!entrada.nome) {
      produtos.push(null);
      continue;
    }

    const produtoCatalogo = buscarProdutoPorNome(entrada.nome);
    if (!produtoCatalogo) {
      ui.alert('Não encontrei o produto "' + entrada.nome + '" na aba "' + ABA_PRODUTOS + '" (Produto ' + (i + 1) + '). Confira se o nome está exatamente igual e tente de novo.');
      return;
    }

    // Bloqueia o envio se esse produto só tiver a foto transparente (sem
    // "Link da foto (fundo branco)" preenchido na aba "Links Produtos") -
    // fotos transparentes em .webp podem sair com fundo preto em alguns
    // clientes de e-mail. Produto sem foto nenhuma não é bloqueado aqui
    // (cai no placeholder, é um problema à parte).
    if (produtoCatalogo.fotoTransparente && !produtoCatalogo.fotoTemFundoBranco) {
      ui.alert(
        'O produto "' + entrada.nome + '" (Produto ' + (i + 1) + ') ainda só tem a foto transparente na aba "' +
        ABA_PRODUTOS + '" (risco de fundo preto no e-mail). Preencha a coluna "Link da foto (fundo branco)" ' +
        'pra esse produto antes de enviar - use o menu "🔄 Atualizar textos com produtos" (Templade) pra ver a ' +
        'lista completa e "📋 Copiar texto pra pedir fundo branco" pra pedir a correção pra uma IA.'
      );
      return;
    }

    const precoPesquisado = paraNumero(entrada.precoPesquisado);
    if (precoPesquisado === null) {
      ui.alert('Falta o "Preço original" do Produto ' + (i + 1) + ' ("' + entrada.nome + '") no texto colado. Preencha antes de enviar.');
      return;
    }

    produtos.push({
      link: produtoCatalogo.link,
      foto: produtoCatalogo.foto,
      nome: produtoCatalogo.nome,
      preco: precoPesquisado,
      precoComDesconto: paraNumero(entrada.precoComDesconto),
      observacao: entrada.observacao,
    });
  }

  const html = montar(produtos, campos);
  const assunto = campos['ASSUNTO DO E-MAIL'] || campos['TÍTULO HERO'] || 'Essência do Brasil';
  const textoAlternativo = assunto + ' - Essência do Brasil. Abra este e-mail num cliente que suporte HTML pra ver o conteúdo completo.';

  GmailApp.sendEmail(EMAIL_DESTINO_TESTE, assunto, textoAlternativo, {
    htmlBody: html,
    name: 'Essência do Brasil',
  });

  ui.alert('E-mail (' + (campos['NOME DO TEMPLATE'] || '') + ') enviado para ' + EMAIL_DESTINO_TESTE + '. Confira sua caixa de entrada.');
}

// ======================= MONTAGEM DO HTML - TEMPLATE A =======================
// Tudo com tabelas + estilo inline, de propósito - é o único jeito que
// funciona de forma confiável em e-mail.

function montarHtmlTemplateA(produtos, campos) {
  const corFundoPagina = '#f4f4f4';
  const corFaixaEscura = '#151a12';
  const corDourado = '#c9a227';
  const corTextoClaro = '#f4ecdb';
  const corTextoEscuro = '#2a2823';
  const corPlaceholder = '#d9d4c7';
  const corPlaceholderTexto = '#8a8574';

  const texto = function(chave, padrao) {
    return campos[chave] || padrao;
  };

  const placeholderImagem = function(altura, textoDentro) {
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:' + corPlaceholder + ';border:1px dashed #b5af9d;">' +
        '<tr><td align="center" style="height:' + altura + 'px;font-family:Arial,sans-serif;font-size:12px;color:' + corPlaceholderTexto + ';">' + textoDentro + '</td></tr>' +
      '</table>'
    );
  };

  // Usa a foto real (link vindo da ficha técnica) se for uma URL válida,
  // senão cai no placeholder cinza - mesmo padrão usado nos cards de
  // produto.
  const imagemOuPlaceholder = function(link, largura, altura, textoPlaceholder) {
    return /^https?:\/\//i.test(link || '')
      ? '<img src="' + link + '" width="' + largura + '" alt="" style="display:block;width:100%;max-width:' + largura + 'px;height:auto;border:0;">'
      : placeholderImagem(altura, textoPlaceholder);
  };

  const cardReal = function(produto) {
    const precoFormatado = 'R$ ' + Number(produto.preco).toFixed(2).replace('.', ',');
    const temDesconto = produto.precoComDesconto !== null && produto.precoComDesconto !== undefined;
    const precoHtml = temDesconto
      ? '<span style="text-decoration:line-through;color:#8a8574;font-size:12px;font-weight:normal;">' + precoFormatado + '</span>&nbsp; ' +
        '<span style="color:' + corDourado + ';">' + formatarPreco(produto.precoComDesconto) + '</span>'
      : '<span style="color:' + corDourado + ';">' + precoFormatado + '</span>';
    const observacaoHtml = produto.observacao
      ? '<tr><td align="center" style="padding:0 8px 8px;font-family:Arial,sans-serif;font-size:10px;color:#8a8574;">' + produto.observacao + '</td></tr>'
      : '';
    // Fundo branco explícito atrás da foto (no <img> e na célula) - evita
    // que uma foto com transparência apareça com fundo preto em alguns
    // clientes de e-mail.
    const fotoHtml = produto.foto
      ? '<img src="' + produto.foto + '" width="150" alt="' + produto.nome + '" style="display:block;width:100%;max-width:150px;height:auto;border:0;background-color:#ffffff;">'
      : placeholderImagem(90, '[ sem link de foto na planilha ]');
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +
        '<tr><td align="center" style="background-color:#ffffff;">' + fotoHtml + '</td></tr>' +
        '<tr><td align="center" style="padding-top:6px;font-family:Georgia,serif;font-size:15px;font-weight:bold;color:' + corTextoEscuro + ';">' + produto.nome + '</td></tr>' +
        '<tr><td align="center" style="padding:6px 0 4px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;">' + precoHtml + '</td></tr>' +
        observacaoHtml +
        '<tr><td align="center" style="padding-bottom:14px;">' +
          '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="border:1px solid ' + corDourado + ';border-radius:16px;padding:6px 18px;">' +
            '<a href="' + hrefOuAlmofada(produto.link) + '" style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.06em;color:' + corDourado + ';text-decoration:none;text-transform:uppercase;">Saiba mais</a>' +
          '</td></tr></table>' +
        '</td></tr>' +
      '</table>'
    );
  };

  const cardVazio = function(numero) {
    return (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +
        '<tr><td align="center">' + placeholderImagem(140, '[ produto ' + numero + ' não preenchido em "' + ABA_PREPARACAO + '" ]') + '</td></tr>' +
      '</table>'
    );
  };

  const card = function(indice) {
    const produto = produtos[indice];
    return produto ? cardReal(produto) : cardVazio(indice + 1);
  };

  const linkOfertas = hrefOuAlmofada(buscarLinkPadrao('Ver tudo em Ofertas'));
  const linkContato = hrefOuAlmofada(buscarLinkPadrao('Contato'));
  const linkInstagram = hrefOuAlmofada(buscarLinkPadrao('Instagram'));
  const linkInicio = hrefOuAlmofada(buscarLinkPadrao('Início'));

  // Regra de e-mail responsivo: em telas até 600px de largura, as colunas
  // que estavam lado a lado (cards de produto, seção "sobre") passam a
  // empilhar uma embaixo da outra, ocupando 100% da largura - e as colunas
  // de "respiro" entre elas somem. Funciona no Gmail (app e navegador),
  // Apple Mail, Outlook.com e Yahoo. O Outlook de desktop (Windows) ignora
  // essa regra e sempre mostra a versão "de computador" - não quebra, só
  // não se adapta ali. O hero não usa essa regra porque virou uma imagem
  // de fundo única com texto por cima, não duas colunas separadas.
  const estiloResponsivo =
    '<style>' +
      '@media only screen and (max-width:600px) {' +
        '.stack100 { display:block !important; width:100% !important; padding-right:0 !important; padding-bottom:16px !important; }' +
        '.stackgap { display:none !important; }' +
      '}' +
    '</style>';

  // --- Hero: fundo = banner gerado por IA (se tiver link), texto real por
  // cima. Usa a técnica de "background" de tabela (funciona em Gmail,
  // Apple Mail etc.) + VML pro Outlook de desktop reconhecer o fundo -
  // sem isso, o Outlook simplesmente não mostra a imagem de fundo.
  const linkBannerHero = campos['LINK BANNER HERO'] || '';
  const temBannerHero = /^https?:\/\//i.test(linkBannerHero);
  const sombraTexto = 'text-shadow:0 2px 6px rgba(0,0,0,0.6);';

  const heroConteudo =
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="55%" valign="middle" style="padding:44px 24px 44px 32px;">' +
        '<div style="font-family:Georgia,serif;font-style:italic;font-size:13px;color:' + corDourado + ';' + sombraTexto + '">' + texto('LEGENDA HERO', 'Uma celebração brasileira') + '</div>' +
        '<div style="font-family:Arial,sans-serif;font-weight:bold;font-size:30px;line-height:1.1;color:' + corTextoClaro + ';padding:8px 0;' + sombraTexto + '">' + texto('TÍTULO HERO', 'Essência do Brasil') + '</div>' +
        '<div style="font-family:Georgia,serif;font-size:14px;color:#f0ece0;padding-bottom:14px;' + sombraTexto + '">' + texto('TEXTO HERO', '') + '</div>' +
        '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:' + corDourado + ';border-radius:18px;padding:10px 22px;">' +
          '<a href="' + linkOfertas + '" style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.06em;color:' + corFaixaEscura + ';text-decoration:none;font-weight:bold;">' + texto('TEXTO BOTÃO HERO', 'Aproveite as ofertas').toUpperCase() + ' →</a>' +
        '</td></tr></table>' +
      '</td>' +
      '<td width="45%"></td>' +
    '</tr></table>';

  const heroHtml = temBannerHero
    ? (
      '<!--[if gte mso 9]>' +
      '<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:300px;">' +
      '<v:fill type="frame" src="' + linkBannerHero + '" color="' + corFaixaEscura + '" />' +
      '<v:textbox inset="0,0,0,0">' +
      '<![endif]-->' +
      '<div>' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" background="' + linkBannerHero + '" style="background-image:url(\'' + linkBannerHero + '\');background-repeat:no-repeat;background-size:cover;background-position:center;background-color:' + corFaixaEscura + ';">' +
      '<tr><td>' + heroConteudo + '</td></tr>' +
      '</table>' +
      '</div>' +
      '<!--[if gte mso 9]>' +
      '</v:textbox>' +
      '</v:rect>' +
      '<![endif]-->'
    )
    : (
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:' + corFaixaEscura + ';">' +
        '<tr><td>' + heroConteudo + '</td></tr>' +
      '</table>'
    );

  return (
estiloResponsivo +
'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:' + corFundoPagina + ';">' +
'<tr><td align="center">' +
'<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#ffffff;">' +

  // Cabeçalho: marca + links de texto (vindos de "Links Padrão") - fica
  // exatamente como já estava, o hero abaixo é que mudou.
  '<tr><td style="background-color:' + corFaixaEscura + ';padding:16px 24px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td><a href="' + linkInicio + '" style="font-family:Georgia,serif;font-size:16px;color:' + corTextoClaro + ';text-decoration:none;">Essência do Brasil</a></td>' +
      '<td align="right" style="font-family:Arial,sans-serif;font-size:11px;color:' + corDourado + ';">' +
        '<a href="' + linkOfertas + '" style="color:' + corDourado + ';text-decoration:none;">OFERTAS</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
        '<a href="' + linkInstagram + '" style="color:' + corDourado + ';text-decoration:none;">INSTAGRAM</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
        '<a href="' + linkContato + '" style="color:' + corDourado + ';text-decoration:none;">CONTATO</a>' +
      '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // Seção de destaque (hero): fundo = banner IA (ou cor sólida se não
  // tiver link ainda), texto real por cima.
  '<tr><td style="padding:0;">' + heroHtml + '</td></tr>' +

  // Fileira de 3 produtos
  '<tr><td style="padding:28px 24px 8px;">' +
    '<div style="font-family:Georgia,serif;font-size:18px;color:' + corTextoEscuro + ';padding-bottom:16px;">' + texto('TÍTULO SEÇÃO PRODUTOS', 'Selecionados pra você') + ' &#x2728;</div>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="33%" valign="top" class="stack100">' + card(0) + '</td>' +
      '<td width="4%" class="stackgap"></td>' +
      '<td width="33%" valign="top" class="stack100">' + card(1) + '</td>' +
      '<td width="4%" class="stackgap"></td>' +
      '<td width="30%" valign="top" class="stack100">' + card(2) + '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // Seção de texto com marcadores
  '<tr><td style="padding:20px 24px;">' +
    '<div style="font-family:Georgia,serif;font-size:20px;color:' + corTextoEscuro + ';padding-bottom:10px;">' + texto('TÍTULO BENEFÍCIOS', 'Por que aproveitar essa semana') + '</div>' +
    '<div style="font-family:Arial,sans-serif;font-size:13px;line-height:1.7;color:#5a5648;">' +
      '&#x2705; ' + texto('BENEFÍCIO 1', '') + '<br>' +
      '&#x2705; ' + texto('BENEFÍCIO 2', '') + '<br>' +
      '&#x2705; ' + texto('BENEFÍCIO 3', '') +
    '</div>' +
  '</td></tr>' +

  // Faixa larga de foto (banner IA de ambientação, ou placeholder)
  '<tr><td style="padding:8px 24px 24px;">' + imagemOuPlaceholder(campos['LINK BANNER FAIXA LARGA'], 552, 140, '[ foto em faixa larga ]') + '</td></tr>' +

  // Seção "sobre" + mais 2 produtos
  '<tr><td style="padding:8px 24px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="55%" valign="top" class="stack100" style="padding-right:16px;">' +
        '<div style="font-family:Georgia,serif;font-size:18px;color:' + corTextoEscuro + ';padding-bottom:8px;">' + texto('TÍTULO SOBRE', 'Sobre a Essência do Brasil') + '</div>' +
        '<div style="font-family:Arial,sans-serif;font-size:13px;line-height:1.6;color:#5a5648;">' + texto('TEXTO SOBRE', '') + '</div>' +
      '</td>' +
      '<td width="45%" valign="top" class="stack100">' + imagemOuPlaceholder(campos['LINK BANNER SOBRE'], 248, 110, '[ foto ]') + '</td>' +
    '</tr></table>' +
  '</td></tr>' +
  '<tr><td style="padding:16px 24px 28px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
      '<td width="48%" valign="top" class="stack100">' + card(3) + '</td>' +
      '<td width="4%" class="stackgap"></td>' +
      '<td width="48%" valign="top" class="stack100">' + card(4) + '</td>' +
    '</tr></table>' +
  '</td></tr>' +

  // Rodapé
  '<tr><td align="center" style="background-color:' + corFaixaEscura + ';padding:20px 24px;">' +
    '<div style="font-family:Arial,sans-serif;font-size:14px;color:' + corDourado + ';padding-bottom:10px;">● ○ ○ ○</div>' +
    '<div style="font-family:Arial,sans-serif;font-size:11px;color:#8a8574;">' + texto('RODAPÉ TEXTO', 'Essência do Brasil') + '</div>' +
  '</td></tr>' +

'</table>' +
'</td></tr>' +
'</table>'
  );
}
