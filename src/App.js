import React, {Component} from 'react';

let myTasks = [];

class Todo extends Component {
  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = event => {
    this.setState({draft: event.target.value})
  }

  addTask = () => {
    myTasks.push(this.state.draft);
    this.setState({tasks: this.props.tasks, draft: ''});
  }

  render() {
    const {title} = this.props;
    const {tasks, draft} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        {tasks.map(task => <ol><ul>{task}</ul></ol>)}
        <input type="text" value={draft} onChange={this.updateDraft}></input>
        <button onClick={this.addTask}>Add</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Todo title="To do List" tasks={myTasks}/>
    </div>
  );
}

export default App;
