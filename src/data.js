const ToDos = [
  {
    description: 'Complete to do list project ',
    completed: true,
    index: 1,
  },
  {
    description: 'Wash the dieshes ',
    completed: true,
    index: 1,
  },
  {
    description: 'Study all other todays activites ',
    completed: true,
    index: 1,
  },
  {
    description: 'Attend morning session meeting ',
    completed: true,
    index: 1,
  },
  {
    description: 'Attend Pair programming meeting ',
    completed: true,
    index: 1,
  },
  {
    description: 'Participate Standup meeting',
    completed: true,
    index: 1,
  },
];
const display = () => {
  let html = '<div>';
  html += '<table class="center">';
  html += '<tr>';
  html += '<td colspan="3"> <b> Today To Do </b> </td>';
  html += '</tr>';
  html += '<tr>';
  html += `<td colspan="3"> 
  <form>
    <input type='text' placeholder='Add to your list' class='todoinput'>
    </form>
  </td>`;
  html += '</tr>';
  for (let i = 0; i < ToDos.length; i += 1) {
    html += '<tr>';
    html += `<td class='test3'> 
    <form>
      <input type='checkbox' name='todoForm' value='true'>
      </form>
    </td>`;
    html += `<td class='test2'> ${ToDos[i].description} </td>`;
    html += '<td class="test"><button class="btn"> &#10247; </button> </td>';
    html += '</tr>';
  }
  html += '<tr>';
  html += '<td colspan="3" class="clearButton"> <b> Clear all completed </b> </td>';
  html += '</tr>';
  html += '</table>';
  document.getElementById('data').innerHTML = html;
};

export default display;
