function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteButton = document.getElementById('delete');
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
    checkbox.className = "checkbox";
    //set the title of the li
    newLi.textContent = title;
    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    //attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = '';
  });

  deleteButton.addEventListener('click',function(event){
    event.preventDefault();
    let checkboxes = document.getElementsByClassName('checkbox');
    for(let i=0;i<=checkboxes.length;i++){
      let checkbox = checkboxes[i];
      if(checkbox.checked){
        let parent = checkbox.parentElement;
        toDoList.removeChild(parent);
      }
    }
  })
}
window.onload = function(){
  onReady();
};
