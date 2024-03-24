import React from 'react';
import {TableRow} from "../TableRow/TableRow";
import {useSelector} from "react-redux";

export const TableDay = (props) => {
    const students = useSelector((state) => state.students);

    let pairsList = props.store.days.filter(data => {
        return data.date.getTime() === props.now.getTime();
    })[0].pairs;

    console.log(students)
    return (
        <table>
            <thead>
            {/*2 строчки (tr) для заголовка таблицы*/}
            <TableRow list={pairsList} isHeader={true}
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