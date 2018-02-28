function onReady(){

    let id = 0;
    let todos = [];
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    function deleteToDo(id) {
      todos = todos.filter(item => item.id !== id);
      renderTheUI();
    }

    function createNewToDo(){
      if(!newToDoText.value){return;}

      todos.push({
        title:newToDoText.value,
        complete:false,
        id:id
      });
      newToDoText.value = ' ';
      id++;
      renderTheUI();
      console.log(JSON.stringify(todos));
    }
    function renderTheUI(){
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = ' ';

      todos.forEach(function(toDo){
        const newToDo = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";

       const title = document.createElement('span');
       title.textContent = toDo.title;
       newToDo.appendChild(title);
       newToDo.appendChild(deleteBtn);
       toDoList.appendChild(newToDo);
       newToDo.appendChild(checkbox);

       deleteBtn.addEventListener('click', event => {
         console.log('delete button clicked');
         event.preventDefault();
         deleteToDo(toDo.id);
       })
      });


  }
    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
      newToDoText.value = ' ';
    });
}
window.onload = function(){
  onReady();
};
