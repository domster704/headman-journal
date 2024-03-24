import React from 'react';
import {TableRow} from "../TableRow/TableRow";
import {Type} from "../../../features/student";

export const TableDay = (props) => {
    let pairsList = props.store.days.filter(data => {
        return data.date.getTime() === props.now.getTime();
    })[0].pairs;

    return (
        <table>
            <thead>
            {/*2 строчки (tr) для заголовка таблицы*/}
            <TableRow list={pairsList} isHeader={true}
                      cellsResult={["Итоги за неделю", "Итоги за все время"]}/>
            </thead>
            <tbody>
            {props.store.students.map((student, index) => {
                return <TableRow student={student}
                                 key={index}
                />;
            })}
            </tbody>
        </table>
    );
}