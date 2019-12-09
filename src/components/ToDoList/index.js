import React, {Component} from 'react';
import ToDoElement from '../ToDoElement';
import ToDoInput from '../ToDoInput';
import './style.css';

class ToDoList extends Component {
  constructor() {
    super();
    this.title = 'Lista zakupów';
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
    const {tasks, draft} = this.state;
    return (
      <div>
        <h1>{this.title}</h1>
        <ol>{tasks.map(task => <ToDoElement task={task}/>)}</ol>
        <ToDoInput 
          onSubmit = {this.addTask} 
          onChange = {this.updateDraft}
          draft = {draft}
        />
      </div>
    );
  }
}

export default ToDoList;
