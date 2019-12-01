import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';

import './index.css';

function App() {
    return (
      <div className="TodoList">
        <TodoList title="Lista zakupów" />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));


