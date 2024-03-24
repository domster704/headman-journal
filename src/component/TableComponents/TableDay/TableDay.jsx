import React from 'react';
import {TableRow} from "../TableRow/TableRow";
import {useSelector} from "react-redux";

import s from './TableDay.module.css';

export const TableDay = (props) => {
    const students = useSelector((state) => state.students);

    let pairsList = props.store.days.filter(data => {
        return data.date.getTime() === props.now.getTime();
    })[0].pairs;

    return (
        <table ref={props.table} className={s.table}>
            <thead>
            {/*2 строчки (tr) для заголовка таблицы*/}
            <TableRow table={props.table} list={pairsList} isHeader={true}
                      cellsResult={["Итоги за неделю", "Итоги за все время"]}/>
            </thead>
            <tbody>
            {Object.keys(students).map((studentKey, index) => {
                return <TableRow student={students[studentKey]}
                                 key={index}
                />;
            })}
            </tbody>
        </table>
    );
}