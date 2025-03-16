const nomeAmigoInput = document.getElementById("amigo");
const listaAmigosUl = document.getElementById("listaAmigos");
const resultadoUl = document.getElementById("resultado");

const amigos = [];

function adicionarAmigo() {
    const nomeAmigo = nomeAmigoInput.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nomeAmigo);
    const novoItemLista = document.createElement("li");
    novoItemLista.textContent = nomeAmigo;
    listaAmigosUl.appendChild(novoItemLista);
    nomeAmigoInput.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    resultadoUl.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}