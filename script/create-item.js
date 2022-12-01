import { setCheck } from './modules/set-check.js';

// Pegar todos os elementos que estão no HTML necessários para executar a função
const taskList = document.getElementById('list-tasks-section');
const textItemDescription = document.getElementById('item-description');
const divClass = 'list-item';
const labelClass = 'lbl-list-item';

function createTask(){
    // Elementos para colocar na lista de tarefa
    const itemDescription = textItemDescription.value != '' ? textItemDescription.value:null;

    if(itemDescription != null){
        const newDiv = document.createElement('div');
        const newCheck = document.createElement('input');
        const newLabel = document.createElement('label');
        
        newDiv.className = divClass;
        newDiv.onclick = setCheck(newDiv);
        
        newCheck.type = 'checkbox';
        newCheck.name = itemDescription;
        newCheck.id = itemDescription;
        
        newLabel.htmlFor = itemDescription;
        newLabel.className = labelClass;
        newLabel.appendChild(document.createTextNode(itemDescription));
        
        newDiv.appendChild(newCheck);
        newDiv.appendChild(newLabel);
        
        taskList.appendChild(newDiv);
        resetInputItemDescription();
    }
}

function resetInputItemDescription(){
    textItemDescription.value = '';
}