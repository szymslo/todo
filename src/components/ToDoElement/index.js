import React, {Component} from 'react';  
import styled from 'styled-components';


const Button = styled.button`
    background: rgb(235, 64, 52);
    border: 2px solid rgb(235, 64, 52);
    border-radius: 3px;
    color: white;
    font-size:.5em;
    font-weight:500;
    width: 2em;
    height: 2em;
    margin: 0.5em 1em;
    padding: 0.1em 0.1em;
    &:hover {
        background: rgb(191, 57, 48);
        border: 2px solid rgb(191, 57, 48);
    }
`

const ListElement = styled.li`
    text-decoration: ${props => props.done ? 'line-through' : 'none'};
`

const ListContainer = styled.div`
    display:inline-block;
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
            <ListContainer><ListElement onClick={this.toggleDone} done={this.state.isDone}>{this.props.task}</ListElement></ListContainer>
            <ListContainer><Button className='delete'>-</Button></ListContainer>
        </div>     

        );
    }
}

export default ToDoElement;