import React, {Component} from 'react'  

class TodoElement extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (<li>{this.props.task}</li>);
    }
}

export default TodoElement;