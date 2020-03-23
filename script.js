const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete"
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function newTodo() {
  const text = prompt("Please Enter an item");
  if (text) {
    const item = document.createElement("li");
    item.setAttribute("class", classNames.TODO_TEXT);
    item.innerHTML = text;
    list.appendChild(item);
    let checkbox = createCheckBox();
    item.prepend(checkbox);
    let deleteButton = createDeleteButton();
    item.appendChild(deleteButton);
    item.setAttribute("id", "text-" + itemCountSpan.innerHTML);
    deleteButton.setAttribute("id", itemCountSpan.innerHTML)
    checkbox.setAttribute("id", "check-"+itemCountSpan.innerHTML)
    itemCountSpan.innerHTML++;
  }
}

function createCheckBox() {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("class", classNames.TODO_CHECKBOX);
  checkbox.type = "checkbox";
  uncheckedCountSpan.innerHTML++;
  checkbox.setAttribute("onclick", 'checkBoxClicked(event)') 
  return checkbox;
}
function checkBoxClicked(event){
  unCheckedCount = uncheckedCountSpan.innerHTML;
  event.target.checked ? unCheckedCount-- : unCheckedCount++;
  uncheckedCountSpan.innerHTML=unCheckedCount;
};

function createDeleteButton(){
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", classNames.TODO_DELETE);
  deleteButton.innerHTML = "Delete";
  deleteButton.setAttribute ("onclick", 'deleteItem(event)');
  return deleteButton;
}

function deleteItem(event){
  elem = document.getElementById("text-"+event.target.id);
  let isChecked = document.getElementById("check-"+event.target.id).checked;
  elem.parentNode.removeChild(elem);
itemCountSpan.innerHTML--;
  removeUncheckedItems(isChecked);
}

function removeUncheckedItems(isChecked){
  let itemCount = uncheckedCountSpan.innerHTML;
  isChecked?uncheckedCountSpan.innerHTML= itemCount:uncheckedCountSpan.innerHTML=itemCount-1;

}