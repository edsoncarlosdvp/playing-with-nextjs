import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core';

import styled from '../styles/login'
export default function Login() {

    const alterName = () => {
        const nameInput = useSelector((state) => state.alterName)
    }

    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const handleName = () => {
        //changeLabel({ name: inputRef.current.})
    }

    return (

        <div className={styled.LoginContainer}>
            <h2>Login</h2>
            <input ref={inputRef} />
            <input type="password" />
            <Button>Logar</Button>
            <Button>Alterar Nome</Button>
        </div>
    )
}