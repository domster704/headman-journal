import React from 'react';
import {TableCell} from "../TableCell/TableCell";
import {TableCellsResult} from "../TableCellsResult/TableCellsResult";

/**
 * cellsResult - массив с значениями для результирующих клеток
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export let TableRow = (props) => {
    let nameCell = props.isHeader ? <th rowSpan={2}>{props.name}</th> : <td>{props.name}</td>;
    let isHeader = props.isHeader || false;

    return (
        <>
            <tr>
                {nameCell}
                {
                    props.list.map((hour, index) => {
                        return <TableCell key={index} isHeader={isHeader} rowSpan={2}>{hour}</TableCell>
                    })
                }
                <TableCellsResult props={props}
                                  isHeader={isHeader}>{props.cellsResult}</TableCellsResult>
            </tr>
            {
                props.isHeader ?
                    <tr>
                        <TableCellsResult props={props} isHeader={isHeader}>{["Неуваж", "Уваж", "Неуваж", "Уваж"]}</TableCellsResult>
                    </tr>
                    : null
            }
        </>

    );
}