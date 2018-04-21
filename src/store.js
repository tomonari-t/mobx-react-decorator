import { observable, action } from 'mobx';
export default class TodoStore {

  @observable todos = [];
  constructor() {
  }

  get completedTodoCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  report() {
    if (this.todos.length === 0) {
      return '<none>';
    } else {
      return `Next todo: "${this.todos[0].task}".
      Progress: ${this.completedTodoCount}/${this.todos.length}
      `
    }
  }

  addTodo(task) {
    this.todos.push({
      completed: false,
      task: task,
      assingee: null
    });
  }
}

const todoStore = new TodoStore();

todoStore.addTodo("read MobX tutorial");
console.log(todoStore.report());

todoStore.addTodo("try MobX");
console.log(todoStore.report());

todoStore.todos[0].completed = true;
console.log(todoStore.report());

todoStore.todos[1].task = "try MobX in own project";
console.log(todoStore.report());

todoStore.todos[0].task = "grok MobX tutorial";
console.log(todoStore.report());
