module.exports = class Todos {
    todoArr = [];

    input = () => {
      const description = "to do some work";
      const completed = false;
      this.todoArr.push({ description, completed });
      if(this.todoArr.length > 0){
        return "to do added successfully";
      }
      
    };

  

}
