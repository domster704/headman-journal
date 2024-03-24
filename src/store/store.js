import {configureStore} from '@reduxjs/toolkit'
import hoursSlice from "./hoursSlice";

const store = configureStore({
    reducer: {
        students: hoursSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;