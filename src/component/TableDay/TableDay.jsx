import React from 'react';
import {TableRow} from "../TableRow/TableRow";

export const TableDay = (props) => {
    let pairsList = ["Математика", "БЖД", "Экономика", "Сети"]
    let hoursList = [];
    for (let i = 0; i < pairsList.length; i++) {
        hoursList.push([]);
        for (let j = 0; j < props.students.length; j++) {
            hoursList.at(-1).push(0);
        }
    }

    return (
        <table>
            <thead>
            {/*2 строчки для заголовка таблицы*/}
            <TableRow name={""} list={pairsList} isHeader={true}
                      cellsResult={["Итоги за неделю", "Итоги за все время"]}></TableRow>
            </thead>
            <tbody>
            {
                props.students.map((student, index) => {
                    return <TableRow key={index} name={student} list={hoursList.map((value, index, array) => {
                        return value.at(index);
                    })} cellsResult={[0, 0, 0, 0]}/>
                })
            }
            </tbody>
        </table>
    )
}