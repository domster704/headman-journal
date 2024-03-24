import React from 'react';
import {TableDay} from "./component/TableComponents/TableDay/TableDay";

let store = {
    days: [{
        date: new Date(2024, 3, 4),
        pairs: ["Математика", "БЖД", "Экономика", "Сети"]
    }]
}

let currentDay = new Date(2024, 3, 4);

const App = () => {
    return (
        <TableDay now={currentDay} store={store}/>
    );
}

export default App;