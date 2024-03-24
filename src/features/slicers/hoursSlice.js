import {createSlice} from '@reduxjs/toolkit'

const initialState = {}

const hoursSlice = createSlice({
    name: 'hours',
    initialState,
    reducers: {
        setHours: (state, action) => {
            state.hours = action.payload
        }
    }
});