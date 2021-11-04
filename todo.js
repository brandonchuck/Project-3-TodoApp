// Grab reference to unordered list for adding li's to it later
var list = document.querySelector('.items'); 

// Grab reference to input button for adding todos in ul
var newTodoBtn = document.querySelector('#input-btn');
newTodoBtn.addEventListener('click', addTodo);


// Event handler for adding new todos
function addTodo(){

  // grab user input
  var userInput = document.querySelector('.user-input');  
  var userInputValue = userInput.value;

  if (userInputValue == ''){
    alert('enter a todo pls!');
  } else {
    // create li 
    var li = document.createElement('li');
    li.id = 'list-item';
    li.textContent = userInputValue;

    // create delete btn
    var deleteBtn = document.createElement('button');
    deleteBtn.id = 'delBtn';
    deleteBtn.textContent = 'X';

    // append delete button to li & append li to ul
    li.appendChild(deleteBtn);
    list.appendChild(li);

    var items = document.querySelectorAll('#list-item');

    // Every time an item is added to the list, loop through the ul element
    // and add the even listener to it  
    items.forEach((item) => {
      item.addEventListener('click', addStrikethrough);
    })


    // Add event listener to all Delete buttons
    var delBtns = document.querySelectorAll('#delBtn');
    
    // Every time an item is added to the list, loop through the  element
    // and add the even listener to it  
    delBtns.forEach((btn) => {
      btn.addEventListener('click', removeTodo);
    })

    // Reset input field to nothing
    userInput.value = '';
  }
}

/* 
        ul
     /      \
   li       li   (listItems)
  /  \     /  \
 del txt  del  txt  

*/

// Event handler for delete button on each li
function removeTodo(e){
  
  // Grab reference to the ul
  var list = document.querySelector('.items');
  
  // Grab reference to delBtn's parent element which is the li
  var listItem = e.target.parentElement;

  // Validation for removing an li
  if (list.contains(listItem) && listItem.classList.contains('strikeThrough')){
    list.removeChild(listItem);
  } else {
    alert('Complete todo first!');
  }
}


// sets the style of the target element to strike-through
function addStrikethrough(e){

  // Grab reference to li
  var item = e.target;
  
  // why does this not work????
  // item.toggle('strikeThrough');

  // This is working, but they both have a reference to e.target which is the li
  // e.target.toggle('strikeThrough');
  if (item.classList.contains('strikeThrough')){
    item.classList.remove('strikeThrough');
  } else {
    item.classList.add('strikeThrough');
  }

}