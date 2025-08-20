let amigos = [];
let amigo = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let amigoSorteado = null;

function adicionarAmigo() {
    if (amigo.value === '' || 
        amigo.value === null || 
        amigo.value === undefined || 
        amigo.value.trim() === '' || 
        amigo.value.length < 3 ||
        !isNaN(parseInt(amigo.value))) {
        alert('Por favor, insira um nome válido.');
    } else if (amigos.includes(formatarNome(amigo.value))) {
        alert('Este amigo já foi adicionado.');
    } else {
        amigos.push(formatarNome(amigo.value));
        let item = document.createElement('li');
        item.textContent = amigos[amigos.length - 1];
        lista.appendChild(item);
    }
    amigo.value = '';
    amigo.focus();
}

function formatarNome(str) {
    // Função para transformar a string com a primeira letra maiúscula e o restante minúsculo
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str
        .split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join(' ');
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, adicione amigos antes de sortear.');
    } else if (amigoSorteado !== null) {
        alert('O sorteio já foi realizado. Atualize a página para sortear novamente.');
    } else {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let itemResultado = document.createElement('li');
        itemResultado.textContent = `O amigo sorteado é: ${amigoSorteado}`;
        resultado.appendChild(itemResultado);
    }
}