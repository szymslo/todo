import React, {Component} from 'react';  
import styled from 'styled-components';

const ListContainer = styled.div`
    display: inline-block;
`
const Button = styled.button`
    background: tomato;
    border: 2px solid tomato;
    border-radius: 3px;
    color: white;
    font-size:.5em;
    font-weight:500;
    width: 2em;
    height: 2em;
    margin: 0.5em 1em;
    padding: 0.1em 0.1em;
`

class ToDoElement extends Component {
    constructor() {
        super();
        this.state = {
            isDone: false
        };
    }

    toggleDone = () => {
        this.setState({isDone: !this.state.isDone})
    }
    
    render() {
        return (
        <div>
            <ListContainer><li onClick={this.toggleDone} className={this.state.isDone ? 'elDone' : ''}>{this.props.task}</li></ListContainer>
            <ListContainer><Button className='delete'>-</Button></ListContainer>      
        </div>
        );
    }
}

export default ToDoElement;