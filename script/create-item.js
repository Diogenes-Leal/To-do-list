// Pegar todos os elementos que estão no HTML necessários para executar a função
const taskList = document.getElementById('list-tasks-section');
const textItemDescription = document.getElementById('item-description');
const divClass = 'list-item';
const labelClass = 'lbl-list-item';

var mouseOver = false;
var id = 0;

function createTask(){
    // Elementos para colocar na lista de tarefa
    const itemDescription = textItemDescription.value != '' ? textItemDescription.value:null;

    if(itemDescription != null){
        const newTask = document.createElement('div');
        const idForNewCheckbox = `(${id})_${itemDescription}`
        id++;
        
        newTask.className = divClass;
        newTask.innerHTML = `
            <input type="checkbox" name="${itemDescription}" id="${idForNewCheckbox}">
            <label for="${idForNewCheckbox}" class="lbl-list-item">${itemDescription}</label>
            <div class="edit-remove-item">
                <i class="fa fa-pencil" aria-hidden="true" onmouseover="setMouseOver()" onmouseleave="setMouseOver()"></i>
                <i class="fa fa-eraser" aria-hidden="true" onmouseover="setMouseOver()" onmouseleave="setMouseOver()" onclick="deleteTask(this)"></i>
            </div>
        `;

        newTask.onclick = () => {
            if (!mouseOver) newTask.children[0].checked = !newTask.children[0].checked;
        }
        newTask.onmouseover = () => {
            newTask.children[2].style.display = 'contents';
        }
        newTask.onmouseout = () => {
            newTask.children[2].style.display = 'none';
        }

        taskList.appendChild(newTask);
        resetInputItemDescription();
    }
}

function resetInputItemDescription(){
    textItemDescription.value = '';
}

function setMouseOver() {
    mouseOver = !mouseOver;
}

function deleteTask(e){
    const taskDiv = e.parentElement.parentElement;
    const divParent = taskDiv.parentElement;
    divParent.removeChild(taskDiv);
}

function createAnIcon(iconElement, className){
    iconElement.className = className;
    iconElement.ariaHidden = 'true';
}

function editTask(tag) {

    console.log(tag.parentElement);
    console.log(tag.parentElement.parentElement);

    /*
    const newInputText = document.createElement('input');
    const newDivConfirmDecline = document.createElement('div');
    const newConfirm = document.createElement('i');
    const newDecline = document.createElement('i');

    newInputText.type = 'text';
    newInputText.className = 'edit-item-description';

    newDivConfirmDecline.className = 'confirm-decline-edit-item';

    createAnIcon(newConfirm, 'fa fa-check');
    createAnIcon(newDecline, 'fa fa-times');

    newDivConfirmDecline.appendChild(newConfirm);
    newDivConfirmDecline.appendChild(newDecline);
    */
}