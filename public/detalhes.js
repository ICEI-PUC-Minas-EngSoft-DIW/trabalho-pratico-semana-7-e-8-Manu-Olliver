
function carregarDetalhes() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (!id) {
        document.getElementById('detalhes-container').innerHTML = `
            <div class="alert alert-danger">
                Personagem não encontrado!
            </div>
        `;
        return;
    }


    const personagem = personagens.find(p => p.id == id);
    
    if (!personagem) {
        document.getElementById('detalhes-container').innerHTML = `
            <div class="alert alert-danger">
                Personagem não encontrado!
            </div>
        `;
        return;
    }

 
    const detalhesHTML = `
        <div class="text-center mb-4">
            <h1>${personagem.nome}</h1>
        </div>

        <div class="card mb-4">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${personagem.imagem}" class="img-fluid rounded-start" alt="${personagem.nome}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${personagem.nome}</h5>
                        <p class="card-text">${personagem.descricao}</p>
                        <div class="mt-3">
                            <p><strong>Sobre:</strong></p>
                            <p>${personagem.conteudo}</p>
                        </div>
                        <div class="mt-3">
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('detalhes-container').innerHTML = detalhesHTML;
}


document.addEventListener('DOMContentLoaded', function() {
    carregarDetalhes();
});