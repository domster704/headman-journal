import React from 'react';
import s from './Button.module.css'

export const Button = (props) => {
    return (
        <button onClick={props.onClick} className={s.button}>{props.children}</button>
    );
}