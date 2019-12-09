import React, {Component} from 'react';  
//import './style.css';
import styled from 'styled-components';

const ListContainer = styled.div`
    display: inline-block;
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
            <ListContainer><button className='delete'>Usuń</button></ListContainer>      
        </div>
        );
    }
}

export default ToDoElement;