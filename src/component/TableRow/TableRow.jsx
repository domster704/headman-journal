import React from 'react';
import {TableCell} from "../TableCell/TableCell";

export let TableRow = (props) => {
    return (
        <tr>
            <td>{props.student}</td>
            {
                props.hoursList.map((hour, index) => {
                    return <TableCell key={index}>{hour}</TableCell>
                })
            }
        </tr>
    );
}