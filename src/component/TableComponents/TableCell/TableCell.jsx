import React from 'react';
import s from './TableCell.module.css';

/**
 * @param {object} props
 *
 * @type {boolean} isHeader
 * @type {boolean} isResult
 * @type {number} pairIndex
 * @returns {JSX.Element}
 * @constructor
 */
export const TableCell = (props) => {
    if (props.isHeader) {
        return (
            <th colSpan={props.colSpan}
                rowSpan={props.rowSpan}
                className={`${s.cell} ${props.className}`}>
                {props.children}
            </th>
        );
    }
    return (
        <td className={`${s.cell} ${props.className}`}>
            <input type={"text"}
                   value={props.children}
                   onFocus={(event) => event.target.select()}
                   onChange={(event) => {
                       props.onChangeHour(event, props);
                   }}
                   maxLength={1}/>
        </td>
    );
}