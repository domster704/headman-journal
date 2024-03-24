import React from 'react';
import {TableCellsResult} from "../TableCellsResult/TableCellsResult";

/**
 * Используется только для заголовков таблицы
 * @param props
 * @returns {JSX.Element|null}
 * @constructor
 */
export const TableHeaderSecondRow = (props) => {
    if (props.isHeader) {
        return (
            <tr>
                <TableCellsResult props={props}
                                  isHeader={props.isHeader}>
                    {["Неуваж", "Уваж", "Неуваж", "Уваж"]}
                </TableCellsResult>
            </tr>
        );
    }
    return null;
}