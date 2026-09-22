const botoes = document.querySelectorAll(".items");
const secoes = document.querySelectorAll("main section[id]");

function atualizarBotaoAtivo() {

    const alturaNavbar = document.querySelector("header").offsetHeight;
    const posicaoAtual = window.scrollY + alturaNavbar + 5;

    let secaoAtual = "";

    secoes.forEach((secao) => {

        const topo = secao.offsetTop;

        if (posicaoAtual >= topo) {
            secaoAtual = secao.getAttribute("id");
        }

    });

    botoes.forEach((botao) => {

        botao.classList.remove("active");

        const destino = botao.getAttribute("href");

        if (destino === "#" + secaoAtual) {
            botao.classList.add("active");
        }

    });

}

botoes.forEach((botao) => {

    botao.addEventListener("click", function (evento) {

        evento.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (!destino) {
            return;
        }

        const alturaNavbar = document.querySelector("header").offsetHeight;

        const posicao = destino.getBoundingClientRect().top + window.scrollY - alturaNavbar;

        window.scrollTo({
            top: posicao,
            behavior: "smooth"
        });

        botoes.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

window.addEventListener("scroll", atualizarBotaoAtivo);

window.addEventListener("load", atualizarBotaoAtivo);

window.addEventListener("resize", atualizarBotaoAtivo);