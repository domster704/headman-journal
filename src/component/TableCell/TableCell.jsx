import React from 'react';
import s from './TableCell.module.css';

/**
 *
 * @param props
 * - isHeader
 * @returns {JSX.Element}
 * @constructor
 */
export const TableCell = (props) => {
    // value: number
    let [value, setValue] = React.useState(props.children);

    if (props.isHeader) {
        return (<th className={s.cell}>{props.children}</th>);
    }
    return (<td className={s.cell}>
            <input type={"number"} value={value}
                   onFocus={(event) => event.target.select()}
                   onChange={(event) => setValue(event.target.value)}/>
        </td>
    );
}