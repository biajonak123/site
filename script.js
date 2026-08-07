const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const atual = document.querySelector(".ativo");

        atual.classList.remove("ativo");

        const proximo = botao.dataset.proximo;

        document
            .getElementById(`passo-${proximo}`)
            .classList.add("ativo");

    });

});