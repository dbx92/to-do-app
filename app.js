function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit',() => {
    event.preventDefault();
    //get the text
    let title = newToDoText.value;
    //create new li
    let newLi = document.createElement('li');
    //create a new input
    let checkbox = document.createElement('input');
    //set the inputs type to a checkbox
    checkbox.type = "checkbox";
    //set the title of the li
    newLi.textContent = title;
    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    //hopefully delete items using checkbox
    //attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = '';
  });
}
window.onload = function(){
  onReady();
};
