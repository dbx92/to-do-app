function onReady(){
  let toDos = [];
  let id = 0; //is this being called 2 times in line 12
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  function createNewToDo(){
    if (!newToDoText.value){return;}
    toDos.push({
      title:newToDoText.value,
      complete:false,
      id:id.value;

    }

  );
    id = id + 1;
    renderTheUI();
  }

  function renderTheUI(){


    const toDoList = document.getElementById('toDoList');

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);


      });
      newLi.checkbox.addEventListener('change',function(){
        if(this.checked){
          deleteToDo();
        }else{
          continue;
        }renderTheUI();
      }; 
      function deleteToDo(id){
        toDos = toDos.filter(item => item.id !== id);
      }
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });


  renderTheUI();
}
window.onload = function(){
  onReady();
};
