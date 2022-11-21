const dataAtual = new Date().toLocaleDateString('pt-BR');
const dataLista = document.getElementById('data-da-lista');

dataLista.textContent = `- ${dataAtual} -`;