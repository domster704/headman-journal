import React from 'react';
import {TableHeader} from "../TableColumn/TableHeader";
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
            <TableHeader pairsList={pairsList}/>
            </thead>
            <tbody>
            {
                props.students.map((student, index) => {
                    return <TableRow key={index} student={student} hoursList={hoursList.map((value, index, array) => {
                        return value.at(index);
                    })}/>
                })
            }
            </tbody>
        </table>
        // <>
        //     <TableColumn hoursList={hoursList}/>
        //     <div className={s.container}>
        //         <TableStudentsName students={props.students}/>
        //         <div className={s.grid} style={{gridTemplateColumns: `repeat(${pairsCount}, 1fr)`}}>
        //             {
        //                 hoursList.map((value, index, array) => {
        //                     return value.map((v, i, a) => {
        //                         return <TableCell key={i}>i</TableCell>
        //                     });
        //                 })
        //             }
        //         </div>
        //     </div>
        // </>

    )
}