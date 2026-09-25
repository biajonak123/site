// ========================================
// ELEMENTOS DA AVENTURA
// ========================================

const botoes = document.querySelectorAll("[data-proximo]");
const passos = document.querySelectorAll(".passo");


// ========================================
// MOSTRAR UM PASSO
// ========================================

function mostrarPasso(numero) {

    const proximo = document.getElementById(`passo-${numero}`);

    // Verifica se o passo existe
    if (!proximo) {
        console.error(
            `O passo "passo-${numero}" não foi encontrado.`
        );

        return;
    }


    // Esconde todos os passos
    passos.forEach(passo => {
        passo.classList.remove("ativo");
    });


    // Mostra o passo escolhido
    proximo.classList.add("ativo");


    // Volta suavemente para o topo
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// CLIQUES DOS BOTÕES
// ========================================

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const proximo = botao.dataset.proximo;


        // Verifica se o botão possui destino
        if (!proximo) {

            console.warn(
                "Este botão não possui o atributo data-proximo."
            );

            return;
        }


        // Vai para o próximo passo
        mostrarPasso(proximo);

    });

});
