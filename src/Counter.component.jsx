import React from 'react';
import { connect } from 'react-redux';
import { ACTION_INCREMENT, ACTION_DEREMENT } from './App.component';

function mapStateToProps(state) {
  return {
    count: state.count
  }
}


export class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: ACTION_INCREMENT });
  }
  
  decrement = () => {
    this.props.dispatch({ type: ACTION_DEREMENT });
  }
  
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);
