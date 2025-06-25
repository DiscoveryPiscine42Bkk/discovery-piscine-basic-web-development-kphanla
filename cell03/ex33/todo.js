const list = document.getElementById('ft_list');
const btn = document.getElementById('newBtn');

function saveTodos() {
  const todos = [];
  list.querySelectorAll('.todo').forEach(todo => {
    todos.push(todo.textContent);
  });
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
}

function loadTodos() {
  const match = document.cookie.match(/(?:^|;) *todos=([^;]*)/);
  if (match) {
    const todos = JSON.parse(decodeURIComponent(match[1]));
    todos.forEach(text => addTodo(text));
  }
}

function addTodo(text) {
  const div = document.createElement('div');
  div.className = 'todo';
  div.textContent = text;
  div.onclick = () => {
    if (confirm("Do you want to delete this TO DO?")) {
      div.remove();
      saveTodos();
    }
  };
  list.appendChild(div);
}

btn.onclick = () => {
  const text = prompt("Enter a new TO DO:");
  if (text && text.trim() !== "") {
    addTodo(text.trim());
    saveTodos();
  }
};

window.onload = loadTodos;