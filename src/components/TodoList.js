import React, {Component} from 'react';
import TodoElement from './TodoElement';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      draft: ''
    };
  }

  isEmpty = str => {
    return (!str || 0 === str.length || /^\s*$/.test(str));
  }

  updateDraft = event => {
    this.setState({draft: event.target.value});
  }

  addTask = () => {
    const {draft,tasks} = this.state;
      if(!this.isEmpty(draft)) {
        this.setState({
          tasks: [...tasks, draft], // rest operator - zbiera on do tablicy o podanej nazwie wszystkie pozostałe przekazane do funkcji argumenty, które nie zostały wymienione przed nim
          draft: ''
      });
    }
  }

  render() {
    const {title} = this.props;
    const {tasks, draft} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <ol>{tasks.map(task => <TodoElement task={task}/>)}</ol>
        <input type="text" value={draft} onChange={this.updateDraft}></input>
        <button onClick={this.addTask}>Dodaj</button>
      </div>
    );
  }
}

export default TodoList;
