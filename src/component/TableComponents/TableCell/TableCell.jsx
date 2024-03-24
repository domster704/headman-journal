import React from 'react';
import s from './TableCell.module.css';
import {useDispatch} from 'react-redux';
import {setHoursOnPair} from "../../../store/hoursSlice";

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
    let dispatch = useDispatch();

    if (props.isHeader) {
        return (
            <th colSpan={props.colSpan}
                rowSpan={props.rowSpan}
                className={`${s.cell} ${props.className}`}>
                {props.children}
            </th>
        );
    }

    const onChange = (event) => {
        dispatch(setHoursOnPair({
            id: props.studentID,
            date: new Date(2024, 3, 4),
            pairIndex: props.pairIndex,
            hours: parseInt(event.target.value)
        }));
    }

    return (
        <td className={`${s.cell} ${props.className}`}>
            <input type={"text"}
                   value={props.children}
                   onFocus={(event) => event.target.select()}
                   onChange={onChange}
                   maxLength={1}/>
        </td>
    );
}