import React, {Component} from 'react';

let myTasks = [];

class Todo extends Component {
  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  isEmpty = str => {
    return (!str || 0 === str.length);    
  }

  updateDraft = event => {
    this.setState({draft: event.target.value})
  }

  addTask = () => {
    if(!this.isEmpty(this.state.draft)) {
      myTasks.push(this.state.draft);
      this.setState({tasks: this.props.tasks, draft: ''})
    }
  }

  render() {
    const {title} = this.props;
    const {tasks, draft} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <ol>{tasks.map(task =><li>{task}</li>)}</ol>
        <input type="text" value={draft} onChange={this.updateDraft}></input>
        <button onClick={this.addTask}>Dodaj</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Todo title="Lista zakupów" tasks={myTasks}/>
    </div>
  );
}

export default App;
