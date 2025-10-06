const personagens = [
    {
        id: 1,
        nome: "Loid Forger",
        descricao: "O papis é um mentiroso, porque ele é um incrível espião e está numa missão contra o chefão do mal. Ele quer que eu me torne uma ridícula imperial.",
        imagem: "assets/loid.png",
        conteudo: "O papis também conhecido como Twilight, é um espião de elite trabalhando para prevenir a guerra. Ele criou a família Forger como parte de sua missão, mas Anya acha que o papai gosta muito da gente. Ele é extremamente habilidoso em disfarces e combate, mas tem dificuldade em expressar seus verdadeiros sentimentos.",
        categoria: "Família Forger",
    },
    {
        id: 2,
        nome: "Yor Forger",
        descricao: "A mamis é a Rosa Vermelha, uma assassina brutal! Mas quando está com a gente ela é muito carinhosa e desastrada. Quero ser forte como ela! Mas comida da mamis é horrivel...",
        imagem: "assets/yor.png",
        conteudo: "A mamis casou com o papis para manter seu disfarce. Apesar de ser mortal em missões, ela é extremamente desastrada nas tarefas domésticas e tem um coração muito bonzinho. Ela se preocupa profundamente com Anya e faria qualquer coisa para proteger sua nova família.",
        categoria: "Família Forger",
       
      
    },
    {
        id: 3,
        nome: "Anya Forger",
        descricao: "Vou ajudar o papis a derrotar o chefão do mal! Vai ser legal dimais! Mas pra isso preciso ser amiga do segundo filho... A Anya não gosta muito dele.",
        imagem: "assets/anya.png",
        conteudo: "Eu sou uma telepata, mas niguem pode saber. Fui adotada pelo papis para ajudar ele na missão, mas espero que mesmo quando a missão acabar, a gente fique juntinhos",
        categoria: "Família Forger",
    },
    {
        id: 4,
        nome: "Bond Forger",
        descricao: "Esse é o Bond! Ele é meu amigo que sempre trabalha junto ao Sr. Pinguim para cuidar da nossa casa. Ele também sempre adivinha qual comida gostosa vamos ter no jantar.",
        imagem: "assets/Captura de tela 2025-08-31 190400.png",
        conteudo: "O Bond é o cachorro mais esperto do mundo. A gente adotou ele depois que ele ajudou a salvar a Anya e achar os caras maus",
        categoria: "Família Forger",
       
    }
];


function carregarCards() {
    const container = document.getElementById('cards-container');
    
    if (!container) {
        console.error('Container não encontrado!');
        return;
    }


    container.innerHTML = '';

   
    personagens.forEach(personagem => {
        const cardHTML = `
            <div class="col-md-6 mb-4">
                <article class="card h-100">
                    <a href="detalhes.html?id=${personagem.id}" style="text-decoration: none; color: inherit;">
                        <div class="row g-0 h-100">
                            <div class="col-md-4">
                                <img src="${personagem.imagem}" class="img-fluid rounded-start h-100" alt="${personagem.nome}" style="object-fit: cover;">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${personagem.nome}</h5>
                                    <p class="card-text">${personagem.descricao}</p>
                                    <small class="text-muted">Clique para ver mais detalhes!</small>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}


document.addEventListener('DOMContentLoaded', function() {
    carregarCards();
});