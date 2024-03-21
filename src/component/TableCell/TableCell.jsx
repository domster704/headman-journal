import React from 'react';
import s from './TableCell.module.css';

export const TableCell = (props) => {
    return (
        <td className={s.cell + " " + (props.isLeftCell ? s.cellStudents : "")}>
            {props.children}
        </td>
    );
}