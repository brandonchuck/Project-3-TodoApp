// Grab reference to unordered list for adding li's
var list = document.querySelector('.items'); 

// Grab reference to input button for adding todos in ul
var newTodoBtn = document.querySelector('#input-btn');
newTodoBtn.addEventListener('click', addTodo);

var clearAll = document.querySelector('#clear-btn');
clearAll.addEventListener('click', clearAllTodos);

// ----- CREATE NEW TODO ----- 
function addTodo(){

  // grab user input
  var userInput = document.querySelector('.user-input');  
  var userInputValue = userInput.value;

  if (userInputValue == ''){
    alert('enter a todo pls!');
  } else {

    // create li 
    var li = document.createElement('li');
    li.className = 'list-item';
    li.textContent = userInputValue;

    // create delete btn
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delBtn';
    deleteBtn.textContent = 'X';

    // append delete button to li & append li to ul
    li.appendChild(deleteBtn);
    list.appendChild(li);

    var items = document.querySelectorAll('.list-item');

    // Every time an item is added to the list, loop through the ul element
    // and add the even listener to it  
    items.forEach((item) => {
      item.addEventListener('click', addStrikethrough);
    })


    // Add event listener to all Delete buttons
    var delBtns = document.querySelectorAll('.delBtn');
    
    // Every time an item is added to the list, loop through the  element
    // and add the even listener to it  
    delBtns.forEach((btn) => {
      btn.addEventListener('click', removeTodo);
    })

    // Reset input field to nothing
    userInput.value = '';
  }
}

// ----- DELETE TODO ----- 
function removeTodo(e){
  
  // Grab reference to the ul
  var list = document.querySelector('.items');
  
  // Grab reference to delBtn's parent element which is the li
  var listItem = e.target.parentElement;

  // Validation for removing an li
  if (listItem.classList.contains('strikeThrough')){
    list.removeChild(listItem);
  } else {
    alert('Complete todo first!');
  }
}


// ----- MARK TODO AS COMPLETE ----- 
// sets the style of the target element to strike-through
function addStrikethrough(e){
  // Grab reference to li
  var item = e.target;

  // // if event is a li, then toggle on/off the strikeThrough class
  if (item.classList.contains('list-item')){
    item.classList.toggle('strikeThrough');
  }

}

// ----- CLEAR ALL TODOS -----
function clearAllTodos(e){

  var list = document.querySelector('.items');
  var listItems = document.querySelectorAll('.list-item');

  // Clears all lis from ul
  listItems.forEach((item) => {
    list.removeChild(item);
  })

}