import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoViewComponent extends React.Component {

  onRename = () => {
    this.props.todo.task = prompt(`task name`, this.props.todo.task) || this.props.todo.task;
  }

  onToggleCompleted = () => {
    this.props.todo.completed = !this.props.todo.completed;
  }

  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={ this.onRename }>
        <input
          type='checkbox'
          checked={ todo.completed }
          onChange={ this.onToggleCompleted }
        />
        { todo.task }
        { todo.assignee
          ? <small>{ todo.assignee.name }</small>
          : null
        }
      </li>
    );
  }
}
