import React from 'react'
import {TableCell} from "../TableCell/TableCell";
import s from './TableHeader.module.css'

export const TableHeader = (props) => {
    return (
        <tr>
            <th></th>
            {
                props.pairsList.map((value, index, array) => {
                    return <TableCell key={index} value={value} isHeader={true}>{value}</TableCell>
                })
            }
        </tr>
    );
}