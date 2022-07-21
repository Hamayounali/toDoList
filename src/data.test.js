const Todos = require('./mokes/todo.js');

const mytodo = new Todos();

describe('to add and remove tests', () => {
  test('to check if data is added successfully ', () => {
    expect(mytodo.input()).toBe('to do added successfully');
  });

  test('to check if data is deleted successfully ', () => {
    expect(mytodo.deleteTodo()).toBe('to do deleted successfully');
  });
});