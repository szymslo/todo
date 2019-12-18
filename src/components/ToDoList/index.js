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

class ToDoList extends Component {
  constructor() {
    super();
    this.title = 'Lista zakupów';
    this.state = {
      tasks: [],
      item: {text:'', key:''},
      draft: ''
    };
  }

  isEmpty = str => {
    return (!str || 0 === str.length || /^\s*$/.test(str));
  }

  updateDraft = event => {
    this.setState({
      draft: event.target.value,
      item: {text:event.target.value, key: Date.now()}
    });
  }

  // updateCurrentItem = () => {
  //   this.setState({
  //     item: {text:this.state.draft, key: Date.now()},
  //   });
  // }

  addTask = () => {
    const {draft,item,tasks} = this.state;    
    if(!this.isEmpty(draft)) {
      this.setState({
        tasks:[...tasks, item],
        draft:''
      });
    }
  }

  render() {
    const {tasks, draft} = this.state;
    return (
      <ListContainer>
        <h1>{this.title}</h1>
        <ol>{tasks.map(task => <ToDoElement task={task.text}/>)}</ol>
        <ToDoInput 
          // onSubmit = {() => { this.updateCurrentItem(); this.addTask() } }
          onSubmit={this.addTask}
          onChange = {this.updateDraft}
          draft = {draft}
        />
      </ListContainer>
    );
  }
}

export default ToDoList;
