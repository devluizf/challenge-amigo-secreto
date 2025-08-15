let amigos = [];
let amigo = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');

function adicionarAmigo() {
    console.log(typeof amigo.value);
    if (amigo.value === '' || amigo.value === null || amigo.value === undefined || amigo.value.trim() === '' || amigo.value.length < 3) {
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
