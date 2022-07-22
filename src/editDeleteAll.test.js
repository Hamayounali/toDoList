const Todos = require('./mokes/editDeleteAll.js');

const editTodos = new Todos();

describe('To test edit, update status and delete all functions', () => {
  test('to check if data is edited successfully ', () => {
    expect(editTodos.editTodo()).toBe('to complete microverse test projects updated');
  });

  test('to check if to do is completed successfully ', () => {
    expect(editTodos.changed()).toBe(true);
  });

  test('to check if all completed to dos removed successfully ', () => {
    expect(editTodos.clearCompleted()).toBe('All completed do dos removed');
  });
});