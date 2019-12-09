import React from 'react';
import './style.css';

//komponent funkcyjny
const ToDoInput = ({onChange, onSubmit, draft}) => (
        <>
            <input type='text' onChange={onChange} value={draft}/>
            <button onClick={onSubmit}>Dodaj</button>
        </>
)

export default ToDoInput;