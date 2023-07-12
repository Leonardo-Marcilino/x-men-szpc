const personagens = document.querySelectorAll('.personagem')

// OBJETIVO 1 - SELECIONAR O PERSONAGEM COM O MOUSE
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        
        //EXTRA: MELHOR AUTOMOCAO PARA O MOBILE
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    // OBJETIVO 2 - REMOVER E ADICIONAR AS BORDAS NO PEROSNAGEM
        removerSelacaoPersonagem();

        personagem.classList.add('selecionado');

    // OBJETIVO 3 - PART 1: TROCAR IMAGEM DO PERSONAGEM
        const personagemGrande = document.querySelector('personagem-selecionado');

        alterarImagemPersonagemSelecionado(personagem);

    // PART 2: TROCAR NOME DO PERSONAGEM
        alterarNomePersonagemSelecionado(personagem);

    // Part 3: ALTERAR A DESCRICAO DO PERSONAGEM
        alterarDescricaoPeronagem(personagem);
    })
})


function alterarDescricaoPeronagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelacaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

