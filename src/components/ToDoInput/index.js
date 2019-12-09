import React from 'react';
import './style.css';

//komponent funkcyjny
const ToDoInput = (props) => {
    return (
        <>
            <input type='text' onChange={props.onChange} draft={props.value} />
            <button onClick={props.onSubmit}>Dodaj</button>
        </>
    );
}

export default ToDoInput;