import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/ToDoList'

import './index.css';

function App() {
    return (
      <div className="TodoList">
        <TodoList/>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));


