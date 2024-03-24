import React from 'react';
import {TableCell} from "../TableCell/TableCell";
import s from "./TableCellsResult.module.css";

/**
 * В загаловке должно выглядеть так^
 * |   За неделю    |  За все время  |
 * | неуваж | уваж  | неуваж | уваж  |
 *
 * То есть сверху 2 стобца, снизу 4 стобца
 *
 * props.children - array of text strings
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */


export const TableCellsResult = (props) => {
    const countOfSubheaders = 4;

    if (props.isHeader) {
        return (
            <>
                {props.children.map((child, index) => {
                    return <TableCell className={index === 0 ? s.result : ''} key={index} isHeader={true}
                                      colSpan={countOfSubheaders / props.children.length}>{child}</TableCell>
                })}
            </>
        );
    }

    return (
        <>
            {props.children.map((child, index) => {
                return <TableCell className={index === 0 ? s.result : ''} key={index}
                                  isResult={true}>{child}</TableCell>
            })}
        </>
    )
}