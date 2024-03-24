import React from 'react';
import {TableCell} from "../TableCell/TableCell";
import {TableCellsResult} from "../TableCellsResult/TableCellsResult";
import {TableHeaderSecondRow} from "./TableHeaderSecondRow";
import {Type} from "../../../features/student";

/**
 * cellsResult - массив с значениями для результирующих клеток
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const TableRow = (props) => {
    let studentName = props.student?.name || "";
    let nameCell = props.isHeader ? <th rowSpan={2}>{studentName}</th> : <td>{studentName}</td>;
    let isHeader = props.isHeader || false;

    let [listValueForCellsOrHeader, setListValueForCellsOrHeader] = React.useState(props.list?.length > 0 ? props.list : props.student.getHoursListByDate(new Date(2024, 3, 4)));

    const onChangeHour = (event, cellProps) => {
        let pairObject = cellProps.student?.daysList[0].pairs[cellProps.pairIndex];
        pairObject.hour = parseInt(event.target.value);
        cellProps.student.recalculate();
        console.log(listValueForCellsOrHeader, pairObject.hour)
        setListValueForCellsOrHeader(cellProps.student.getHoursListByDate(new Date(2024, 3, 4)));
        console.log(listValueForCellsOrHeader)
    }

    return (
        <>
            <tr>
                {nameCell}
                {listValueForCellsOrHeader.map((element, index) => {
                    return (<TableCell student={props.student}
                                       pairIndex={index}
                                       key={index}
                                       isHeader={isHeader}
                                       rowSpan={2}
                                       onChangeHour={onChangeHour}>
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

