// grab the selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// attach to event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', strikeDelete);
// function (callback function to be called on click event)

function addTodo(event) {
	// prevents button from submitting
	event.preventDefault();
	//  todo div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	// create li
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	// check mark button
	const doneButton = document.createElement('button');
	doneButton.innerHTML = `<i class="fas fa-check"></i>`;
	doneButton.classList.add('done-btn');
	todoDiv.appendChild(doneButton);
	// check trash button
	const trashButton = document.createElement('button');
	doneButton.innerHTML = `<i class="fas fa-trash"></i>`;
	trashButton.classList.add('trash-btn');
	todoDiv.appendChild(trashButton);
	// append to list
	todoList.appendChild(todoDiv);
	// clear input value after adding
	// see the difference if we were to try this with return instead...no d
	todoInput.value = '';
}

function strikeDelete(event) {
	const item = event.target;
	// console.log(item);
	// to delete TODO
	if (item.classList[0] === 'trash-btn') {
		const todo = item.parentElement;
		todo.remove();
		// console.log(todo.remove());
	}

	//put the check mark
	if (item.classList[0] === 'done-btn') {
		const todo = item.parentElement;
		todo.classList.toggle('done');
	}
}
