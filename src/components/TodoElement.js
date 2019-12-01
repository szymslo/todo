import React, {Component} from 'react'  
import './TodoElement.css'

class TodoElement extends Component {
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
        <div onClick={this.toggleDone} className={this.state.isDone ? 'doneTodo' : ''}> 
            <li>{this.props.task}</li>
        </div>
        );
    }
}

export default TodoElement;