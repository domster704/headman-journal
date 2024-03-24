import React from 'react';
import {TableCell} from "../TableCell/TableCell";
import {TableCellsResult} from "../TableCellsResult/TableCellsResult";
import {TableHeaderSecondRow} from "./TableHeaderSecondRow";
import {Type} from "../../../features/student";
import {Button} from "../../Button/Button";
import exportToExcel from "../../../features/exportToExcel";

/**
 * cellsResult - массив с значениями для результирующих клеток
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const TableRow = (props) => {
    let studentName = props.student?.name || <Button onClick={() => exportToExcel(props.table.current)}>Экспортировать в Excel</Button>;
    let nameCell = props.isHeader ? <th rowSpan={2}>{studentName}</th> : <td>{studentName}</td>;
    let isHeader = props.isHeader || false;

    let listValueForCellsOrHeader = props.list?.length > 0 ? props.list : props.student.getHoursListByDate(new Date(2024, 3, 4));

    return (
        <>
            <tr>
                {nameCell}
                {listValueForCellsOrHeader.map((element, index) => {
                    return (<TableCell studentID={props.student?.id || 0}
                                       pairIndex={index}
                                       key={index}
                                       isHeader={isHeader}
                                       rowSpan={2}>
                        {element}
                    </TableCell>);
                })}
                <TableCellsResult props={props} isHeader={isHeader}>
                    {props.cellsResult?.length > 0 ? props.cellsResult : [
                        props.student.getHoursByDate(new Date(2024, 3, 4), Type.BAD),
                        props.student.getHoursByDate(new Date(2024, 3, 4), Type.GOOD),
                        props.student.getHoursByAllTime(Type.BAD),
                        props.student.getHoursByAllTime(Type.GOOD)
                    ]}
                </TableCellsResult>
            </tr>
            <TableHeaderSecondRow isHeader={isHeader}/>
        </>
    );
}

