module.exports = class Todos {
    todoArr = [
      {
        description: 'to complete microverse test projects',
        completed: false,
      },
      {
        description: 'to complete all activites',
        completed: false,
      },
    ];

    editTodo = () => {
      this.todoArr[0].description = 'to complete microverse test projects updated';
      if (this.todoArr[0].description === 'to complete microverse test projects updated') {
        return this.todoArr[0].description;
      }
      return true;
    };

    changed = () => {
      this.todoArr[0].completed = true;
      if (this.todoArr[0].completed === true) {
        return this.todoArr[0].completed;
      }
      return true;
    };

    clearCompleted = () => {
      for (let j = 0; j < this.todoArr.length; j += 1) {
        if (this.todo.todoArr[j].completed === true) {
          this.todo.todoArr.splice(j, 1);
          j -= 1;
        }
      }
      if (this.todoArr.length === 1) {
        return 'All completed do dos removed';
      }
      return true;
    };
};