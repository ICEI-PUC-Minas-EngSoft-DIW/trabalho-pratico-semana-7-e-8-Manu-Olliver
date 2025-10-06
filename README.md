# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome:Emanuelly Oliveira
- Matricula:905208
- Proposta de projeto escolhida:Blog da Anya
- Breve descrição sobre seu projeto:

## Print da Home-Page

![alt text](<Captura de tela 2025-10-05 220421.png>)

## Print da página de detalhes do item

![alt text](<Captura de tela 2025-10-05 220444.png>)

## Cole aqui abaixo a estrutura JSON utilizada no app.js
const personagens = [
    {
        id: 1,
        nome: "Loid Forger",
        descricao: "O papis é um mentiroso, porque ele é um incrível espião e está numa missão contra o chefão do mal. Ele quer que eu me torne uma ridícula imperial.",
        imagem: "assets/loid.png",
        conteudo: "O papis também conhecido como Twilight, é um espião de elite trabalhando para prevenir a guerra. Ele criou a família Forger como parte de sua missão, mas Anya acha que o papai gosta muito da gente. Ele é extremamente habilidoso em disfarces e combate, mas tem dificuldade em expressar seus verdadeiros sentimentos.",
        categoria: "Família Forger",
        autor: "Anya Forger",
        data: "2025-03-30"
    },
    {
        id: 2,
        nome: "Yor Forger",
        descricao: "A mamis é a Rosa Vermelha, uma assassina brutal! Mas quando está com a gente ela é muito carinhosa e desastrada. Quero ser forte como ela! Mas comida da mamis é horrivel...",
        imagem: "assets/yor.png",
        conteudo: "A mamis casou com o papis para manter seu disfarce. Apesar de ser mortal em missões, ela é extremamente desastrada nas tarefas domésticas e tem um coração muito bonzinho. Ela se preocupa profundamente com Anya e faria qualquer coisa para proteger sua nova família.",
        categoria: "Família Forger",
        autor: "Anya Forger",
        data: "2025-03-28"
    },
    {
        id: 3,
        nome: "Anya Forger",
        descricao: "Vou ajudar o papis a derrotar o chefão do mal! Vai ser legal dimais! Mas pra isso preciso ser amiga do segundo filho... A Anya não gosta muito dele.",
        imagem: "assets/anya.png",
        conteudo: "Eu sou uma telepata, mas niguem pode saber. Fui adotada pelo papis para ajudar ele na missão, mas espero que mesmo quando a missão acabar, a gente fique juntinhos",
        categoria: "Família Forger",
        autor: "Anya Forger",
        data: "2025-03-27"
    },
    {
        id: 4,
        nome: "Bond Forger",
        descricao: "Esse é o Bond! Ele é meu amigo que sempre trabalha junto ao Sr. Pinguim para cuidar da nossa casa. Ele também sempre adivinha qual comida gostosa vamos ter no jantar.",
        imagem: "assets/Captura de tela 2025-08-31 190400.png",
        conteudo: "O Bond é o cachorro mais esperto do mundo. A gente adotou ele depois que ele ajudou a salvar a Anya e achar os caras maus",
        categoria: "Família Forger",
        autor: "Anya Forger",
        data: "2025-03-26"
    }
];

