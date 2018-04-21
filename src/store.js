import { observable, autorun, computed, action } from 'mobx';

class ObservableTodoStore {

  @observable todos = [];
  @observable pendingRequest = 0;
  constructor() {
    autorun(() => console.log(this.report));
  }

  @computed get report() {
    if (this.todos.length === 0) {
      return '<none>';
    } else {
      return `Next todo: "${this.todos[0].task}".
      Progress: ${this.completedTodoCount}/${this.todos.length}
      `
    }
  }

  @computed get completedTodoCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  @action addTodo = (task) => {
    this.todos.push({
      completed: false,
      task: task,
      assingee: null
    });
  }
}

export default ObservableTodoStore