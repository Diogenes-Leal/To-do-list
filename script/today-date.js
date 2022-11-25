const todayDate = new Date().toLocaleDateString('pt-BR');
const dateForList = document.getElementById('list-date');

dateForList.textContent = `- ${todayDate} -`;