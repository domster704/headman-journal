import React from 'react';
import {TableCell} from "../TableCell/TableCell";

import s from './TableStudentsName.module.css';

export const TableStudentsName = (props) => {
    return (
        <div className={s.table_students_name}>
            {
                props.students.map(student => {
                    return <TableCell key={student} isLeftCell={true}>{student}</TableCell>
                })
            }
        </div>
    )
}