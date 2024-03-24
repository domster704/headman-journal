import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    table: null
}

const envSlice = createSlice({
    name: 'env',
    initialState,
    reducers: {
        setTable: (state, action) => {
            state.table = action.payload;
        }
    }
});