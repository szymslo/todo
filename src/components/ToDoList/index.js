import React, {Component} from 'react';
import ToDoElement from '../ToDoElement';
import ToDoInput from '../ToDoInput';
import styled from 'styled-components';

const ListContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 3em;
  margin-bottom: 3em;
  padding:1em 1em;
  width: 80%;
  max-width: 600px;
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);
  word-break:break-all;
`

class Item {
  constructor(text, key) {
    this.text = text;
    this.key = key;
  };
}

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
    this.setState({
      draft: event.target.value,
    });
  }

  addTask = () => {
    const {draft,tasks} = this.state;    
    if(!this.isEmpty(draft)) {
      const newItem = new Item(this.state.draft, Date.now());
      this.setState({
        tasks:[...tasks, newItem], //rest parameter
        draft:''
      });
    }
  }

  delete = id => {
    const ntasks = this.state.tasks.filter(task => task.key !== id)
    this.setState({
      tasks: ntasks
    });
    console.log('delete triggered');
  }

  render() {
    const {tasks, draft} = this.state;
    return (
      <ListContainer>
        <h1>{this.title}</h1>
        <ol>{tasks.map(task => <ToDoElement task={task} _handleDelete={this.delete}/>)}</ol>
        <ToDoInput 
          onSubmit={this.addTask}
          onChange = {this.updateDraft}
          draft = {draft}
        />
      </ListContainer>
    );
  }
}

export default ToDoList;
