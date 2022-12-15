// Pegar todos os elementos que estão no HTML necessários para executar a função
const taskList = document.getElementById('list-tasks-section');
const textItemDescription = document.getElementById('item-description');
const divClass = 'list-item';
const labelClass = 'lbl-list-item';

var mouseOver = false;
var id = 0;
var editedTaskDescription = "";

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
            <label class="lbl-list-item" contenteditable onmouseover="setMouseOver()" onmouseleave="setMouseOver()" oninput="editTask(this)" onblur="checkTaskDescription(this)">${itemDescription}</label>
            <div class="edit-remove-item">
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
    const taskText = e.parentElement.parentElement.children[1].innerText;

    if(confirm(`Deseja deletar "${taskText}"`)){
        const taskDiv = e.parentElement.parentElement;
        const divParent = taskDiv.parentElement;
        divParent.removeChild(taskDiv);
    }
}

function createAnIcon(iconElement, className){
    iconElement.className = className;
    iconElement.ariaHidden = 'true';
}

function editTask(tag) {
    editedTaskDescription = tag.innerHTML;

    if(tag.innerHTML.indexOf("<br>") != -1){
        editedTaskDescription = tag.innerHTML = tag.innerHTML.replace("<br>", "");
        tag.blur();
    }
}

function checkTaskDescription(tag){
    console.log(tag.innerHTML.search(/ /))
}