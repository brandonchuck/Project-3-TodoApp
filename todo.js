document.querySelector('#input-btn')
  .addEventListener('click', displayTodo);


document.querySelector('#clear-btn')
  .addEventListener('click', clearTodos);


function displayTodo(){
  const userInput = document.querySelector('.user-input');  
  const userInputValue = userInput.value;

  if (userInputValue === ''){
    alert('Enter a todo please!!!');
    return;
  } 

  const todo = createTodo(userInputValue);
  const deleteButton = createDeleteButton(todo);

  todo.appendChild(deleteButton);
  document.querySelector('.items').appendChild(todo);
  
  userInput.value = '';
}


function createTodo(todoText){
  const todo = document.createElement('li');
  todo.className = 'list-item';
  todo.textContent = todoText;
  todo.addEventListener('click', addStrikethrough);
  return todo;
}


function createDeleteButton(todo){
  const deleteButton = document.createElement('button');
  deleteButton.className = 'del-btn';
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    removeTodo(todo);
  });
  return deleteButton;
}


function removeTodo(todo){
  if (todo.classList.contains('strikeThrough')){
    todo.remove();
  } else {
    alert('Complete todo first!');
  }
}


function addStrikethrough(e){
  const item = e.target;

  if (item.classList.contains('list-item')){
    item.classList.toggle('strikeThrough');
  }

}


function clearTodos(){
  document.querySelector('.items').textContent = '';
}
