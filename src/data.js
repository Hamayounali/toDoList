import Todos from './todo';

const todo = new Todos();
document.querySelector('#newBook').addEventListener('click', todo.input);

const display = () => {
  let html = '<div>';
  html += '<table class="center">';
  const st = JSON.parse(localStorage.getItem('todoLocal'));
  for (let i = 0; i < st.length; i += 1) {
    todo.todoArr.push({ description: st[i].description, completed: st[i].completed, index: st[i].index });
    html += '<tr>';
    html += `<td class='test3'> 
    <form>
      <input type='checkbox' name='todoForm' value='true'>
      </form>
    </td>`;
    html += `<td class='test2'> ${todo.todoArr[i].description} </td>`;
    html += `<td class="test"><button onclick="editTodo(${i}, '${todo.todoArr[i].description}')" class="btn"> <i class="fa fa-edit" style="font-size:20px"></i> </button> </td>`;
    html += `<td class="test"><button onclick="deleteTodo(${i})" class="btn"> <i class="fa fa-trash" style="font-size:20px"></i> </button> </td>`;
    html += '</tr>';
  }
  html += '<tr>';
  html += '<td colspan="4" class="clearButton"> <b> Clear all completed </b> </td>';
  html += '</tr>';
  html += '</table>';
  document.getElementById('data').innerHTML = html;
};

export default display;

window.deleteTodo = (i) => {
  todo.todoArr.splice(i, 1);
  localStorage.setItem('todoLocal', JSON.stringify(todo.todoArr));
  window.location.reload();
};

function myFunction(i, data) {
  let updated = prompt('You can update the to do:', data);
  if (updated === null || updated === "") {
    return true;
  } else {
    todo.todoArr[i].description = updated;
    localStorage.setItem('todoLocal', JSON.stringify(todo.todoArr));
  }
  return true;
}

window.editTodo = (i, b) => {
  const toUpdate = JSON.parse(localStorage.getItem('todoLocal'));
  for (let i = 0; i < toUpdate.length; i += 1) {
    if (todo.todoArr[i].description === b) {
      const data = todo.todoArr[i].description;
      myFunction(i, data);
    }
  }
  window.location.reload();
};
