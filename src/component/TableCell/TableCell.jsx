import React from 'react';
import s from './TableCell.module.css';

/**
 *
 * @param props
 * - isHeader
 * - isResult
 * @returns {JSX.Element}
 * @constructor
 */
export const TableCell = (props) => {
    // value: number
    let [value, setValue] = React.useState(props.children);

    if (props.isHeader) {
        return (<th colSpan={props.colSpan} rowSpan={props.rowSpan} className={`${s.cell} ${props.className}`}>{props.children}</th>);
    }
    return (
        <td className={`${s.cell} ${props.className}`}>
            <input type={"text"} value={value}
                   onFocus={(event) => event.target.select()}
                   onChange={(event) => setValue(event.target.value)}
                   maxLength={1}/>
        </td>
    );
}