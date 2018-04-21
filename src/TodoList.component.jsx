import React from 'react';
import { observer, inject } from 'mobx-react';
import TodoViewComponent from './TodoView.component';

@inject('todoStore')
@observer
export default class TodoListComponent extends React.Component {
  onNewTodo = () => {
    this.props.todoStore.addTodo(prompt('enter task name'));
  }

  render = () => {
    const store = this.props.todoStore;
    return (
      <div>
      {store.report}
      <ul>
        {
          store.todos.map((todo, index) => {
            return <TodoViewComponent todo={todo} key={index}/>
          })
        }
      </ul>
      { store.pendingRequets > 0 ? <marquee>Loading...</marquee> : null }
      <button onClick= {this.onNewTodo }> Create Todo </button>
      <small>double click todo edite</small>
      </div>
    );
  }
}
