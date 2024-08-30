document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    addButton.addEventListener('click', () => {
        const text = todoInput.value.trim();
        if (text) {
            const newTodo = createTodoItem(text);
            todoList.appendChild(newTodo);
            todoInput.value = '';
        } else {
            alert('Please enter a to-do item.');
        }
    });


    function createTodoItem(text) {
        const li = document.createElement('li');
        li.className = 'bg-white border border-gray-300 rounded mb-2 p-2 flex justify-between items-center';

        const span = document.createElement('span');
        span.textContent = text;
        span.className = 'flex-grow';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'bg-yellow-400 text-white p-1 rounded mr-2 hover:bg-yellow-600';
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit to-do item:', span.textContent);
            if (newText) {
                span.textContent = newText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'bg-red-500 text-white p-1 rounded hover:bg-red-600';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        return li;
    }

    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
