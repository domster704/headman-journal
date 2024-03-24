import {createSlice} from '@reduxjs/toolkit'
import {Days, Student, Weeks} from "../features/student";

const initialState = {
    1: new Student(1, "Акперов Эмиль Бахтиярович",
        [new Days(new Date(2024, 3, 4), [{
            pairName: "Математика",
            hours: 1
        }, {
            pairName: "БЖД",
            hours: 1
        }, {
            pairName: "Экономика",
            hours: 2
        }, {
            pairName: "Сети",
            hours: 0
        }]), new Days(new Date(2024, 3, 5), [{
            pairName: "Математика",
            hours: 0
        }, {
            pairName: "БЖД",
            hours: 2
        }, {
            pairName: "Экономика",
            hours: 2
        }, {
            pairName: "Сети",
            hours: 0
        }])],
        [new Weeks(new Date(2024, 3, 4), 0, 0)]),
    2: new Student(2, "Исупов Григорий Сергеевич",
        [new Days(new Date(2024, 3, 4), [{
            pairName: "Математика",
            hours: 0
        }, {
            pairName: "БЖД",
            hours: 2
        }, {
            pairName: "Экономика",
            hours: 2
        }, {
            pairName: "Сети",
            hours: 0
        }])],
        [new Weeks(new Date(2024, 3, 4), 0, 0)])
}

const hoursSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        /**
         * @param state
         * @param {{payload: {id: number, date: Date, pairIndex: number, hours: number}}} action
         */
        setHoursOnPair: (state, action) => {
            let newState = {...state};
            let student = newState[action.payload.id];
            let day = student.days.filter(day => day.date.getTime() === action.payload.date.getTime())[0];
            day.pairs[action.payload.pairIndex].hours = action.payload.hours;
            student.recalculate();
            return newState;
        }
    }
});

export const {setHoursOnPair} = hoursSlice.actions;
export default hoursSlice.reducer;