// Pegar todos os elementos que estão no HTML necessários para executar a função
const taskList = document.getElementById('list-tasks-section');
const textItemDescription = document.getElementById('item-description');
const divClass = 'list-item';
const labelClass = 'lbl-list-item';

var mouseOver = false;

function createTask(){
    // Elementos para colocar na lista de tarefa
    const itemDescription = textItemDescription.value != '' ? textItemDescription.value:null;

    if(itemDescription != null){
        const newDiv = document.createElement('div');
        const newCheck = document.createElement('input');
        const newLabel = document.createElement('label');
        const newEdit = document.createElement('i');
        const newDelete = document.createElement('i');
        const newDivEditDelete = document.createElement('div');
        
        newDiv.className = divClass;
        
        newCheck.type = 'checkbox';
        newCheck.name = itemDescription;
        newCheck.id = itemDescription;
        
        newLabel.htmlFor = itemDescription;
        newLabel.className = labelClass;
        newLabel.appendChild(document.createTextNode(itemDescription));

        createAnIcon(newEdit, 'fa fa-pencil');
        newEdit.onclick = () => {
            // Vai editar o texto do item
            console.log('Editar');
        }
        newEdit.onmouseover = setMouseOver;
        newEdit.onmouseleave = setMouseOver;

        createAnIcon(newDelete, 'fa fa-eraser');
        newDelete.className = 'fa fa-eraser';
        newDelete.onclick = () => {
            const divParent = newDiv.parentElement;
            divParent.removeChild(newDiv);
        }
        newDelete.onmouseover = setMouseOver;
        newDelete.onmouseleave = setMouseOver;

        newDivEditDelete.className = 'edit-remove-item';
        newDivEditDelete.appendChild(newEdit);
        newDivEditDelete.appendChild(newDelete);
        
        newDiv.appendChild(newCheck);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newDivEditDelete);

        newDiv.onclick = () => {
            if (!mouseOver) newDiv.children[0].checked = !newDiv.children[0].checked;
        }
        newDiv.onmouseover = () => {
            newDiv.children[2].style.display = 'contents';
        }
        newDiv.onmouseout = () => {
            newDiv.children[2].style.display = 'none';
        }
        
        taskList.appendChild(newDiv);
        resetInputItemDescription();
    }
}

function resetInputItemDescription(){
    textItemDescription.value = '';
}

function setMouseOver() {
    mouseOver = !mouseOver;
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