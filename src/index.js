import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import TodoListComponent from './TodoList.component';
import ObservableTodoStore from './store';
import { Provider } from 'mobx-react';

const stores = {
  todoStore: new ObservableTodoStore(),
};

ReactDOM.render(
  <Provider {...stores}> 
    <TodoListComponent/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();