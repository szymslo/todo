import React from 'react';
import styled from'styled-components'

const Button = styled.button`
    background: rgb(48, 191, 77);
    border: 2px solid rgb(48, 191, 77);
    border-radius: 3px;
    color: white;
    font-size:.9em;
    font-weight:500;
    width: 5em;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    &:hover {
        background: rgb(44, 145, 64);
        border: 2px solid rgb(44, 145, 64);
    }
`
const Input = styled.input`
    background: transparent;
    border: 2px solid gray;
    border-radius: 3px;
    font-size:.9em;
    width: 15em;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    &:focus {
        background:dimgray;
        color:white;
    }
`

//komponent funkcyjny
const ToDoInput = ({onChange, onSubmit, draft}) => (
        <>
            <Input type='text' onChange={onChange} value={draft}/>
            <Button onClick={onSubmit}>Dodaj</Button>
        </>
)

export default ToDoInput;