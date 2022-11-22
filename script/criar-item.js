// Pegar todos os elementos que estão no HTML necessários para executar a função
const listaDeTarefas = document.getElementById('lista-de-tarefas');
const textDescricaoItem = document.getElementById('descrever-item');
const classeDaDiv = 'list-item';
const classeDoLabel = 'lbl-list-item'


function criarItem(){
    // Elementos para colocar na lista de tarefa
    const descricaoItem = textDescricaoItem.value != '' ? textDescricaoItem.value:null;

    if(descricaoItem != null){
        const novaDiv = document.createElement('div');
        const novoCheck = document.createElement('input');
        const novoLabel = document.createElement('label');
        
        novaDiv.className = classeDaDiv;

        novoCheck.type = 'checkbox';
        novoCheck.name = descricaoItem;
        novoCheck.id = descricaoItem;
        
        novoLabel.htmlFor = descricaoItem;
        novoLabel.className = classeDoLabel;
        novoLabel.appendChild(document.createTextNode(descricaoItem));
        
        novaDiv.appendChild(novoCheck);
        novaDiv.appendChild(novoLabel);
        
        listaDeTarefas.appendChild(novaDiv);
        limparInputDescricaoItem();
    }
}

function limparInputDescricaoItem(){
    textDescricaoItem.value = '';
}