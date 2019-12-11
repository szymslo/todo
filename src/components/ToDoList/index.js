import React, {Component} from 'react';
import ToDoElement from '../ToDoElement';
import ToDoInput from '../ToDoInput';
import styled from 'styled-components';

const ListContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 3em;
  padding:1em 1em;
  width: 80%;
  max-width: 600px;
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);
`

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
      <ListContainer>
        <h1>{this.title}</h1>
        <ol>{tasks.map(task => <ToDoElement task={task}/>)}</ol>
        <ToDoInput 
          onSubmit = {this.addTask} 
          onChange = {this.updateDraft}
          draft = {draft}
        />
      </ListContainer>
    );
  }
}

export default ToDoList;
