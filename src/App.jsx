import React from 'react';
import {TableDay} from "./component/TableDay/TableDay";

let students = [
    "Акперов Эмиль Бахтиярович",
    "Амелин Кирилл Сергеевич",
    "Амирова Зарина Азатовна",
    "Воеводин Егор Олегович",
    "Гаврилюк Александр Валерьевич",
    "Гарипова Эллина Ильгизовна",
    "Гончаровский Максим Николаевич",
    "Гришин Семён Евгеньевич",
    "Иванова Ксения Анатольевна",
    "Исупов Григорий Сергеевич",
    "Князев Артём Павлович",
    "Коновалов Егор Александрович",
    "Максимов Иван Дмитриевич",
    "Макуров Михаил Павлович",
    "Нейман Алексей Дмитриевич",
    "Николайчук Алёна Сергеевна",
    "Оркин Родион Родионович",
    "Останина Татьяна Олеговна",
    "Позоян Рафаэль Овакимович",
    "Решетняк Степан Алексеевич",
    "Рид Екатерина Романовна",
    "Ромадова Ирина Олеговна",
    "Хандусь Максим Васильевич",
    "Хапков Михаил Евгеньевич",
    "Чвиков Матвей Евгеньевич",
    "Шумкарбеков Илим Мадиярович",
    "Юлдашева Эмилия Дамировна",
    "Ямщиков Артём Владиславович"
]

const App = () => {
    return (
        <TableDay students={students}/>
    );
}

export default App;