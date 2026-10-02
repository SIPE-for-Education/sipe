const botoes = document.querySelectorAll(".nav-item");
const secoes = document.querySelectorAll("main section[id]");
const header = document.querySelector(".header");
const logo = document.querySelector(".logo");
const formulario = document.querySelector("#contactForm");

function atualizarBotaoAtivo() {
    const alturaNavbar = header.offsetHeight;
    const posicaoAtual = window.scrollY + alturaNavbar + 20;
    let secaoAtual = "";

    secoes.forEach((secao) => {
        if (posicaoAtual >= secao.offsetTop) {
            secaoAtual = secao.getAttribute("id");
        }
    });

    botoes.forEach((botao) => {
        botao.classList.remove("active");

        if (botao.getAttribute("href") === "#" + secaoAtual) {
            botao.classList.add("active");
        }
    });
}

botoes.forEach((botao) => {
    botao.addEventListener("click", function(evento) {
        evento.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (!destino) {
            return;
        }

        const posicao = destino.getBoundingClientRect().top + window.scrollY - header.offsetHeight;

        window.scrollTo({
            top: posicao,
            behavior: "smooth"
        });
    });
});

logo.addEventListener("click", function(evento) {
    evento.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    alert("Mensagem enviada com sucesso!");
    formulario.reset();
});

window.addEventListener("scroll", atualizarBotaoAtivo);
window.addEventListener("load", atualizarBotaoAtivo);
window.addEventListener("resize", atualizarBotaoAtivo);