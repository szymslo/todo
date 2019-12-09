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
        <div>
            <div className='listEl'><li onClick={this.toggleDone} className={this.state.isDone ? 'elDone' : ''}>{this.props.task}</li></div>
            <div className='listEl'><button className='delete'>Usuń</button></div>       
        </div>
        );
    }
}

export default TodoElement;