export class Student {
    /**
     * @param {number} id
     * @param {string} name
     * @param {Array<Days>} daysList
     * @param {Array<Weeks>} weeksList
     */
    constructor(id, name, daysList, weeksList) {
        this.id = id;
        this.name = name;
        this.days = daysList;
        this.weeks = weeksList;
    }

    /**
     * @param {Date} date
     * @return {Array<number>}
     */
    getHoursListByDate(date) {
        let dayListWith1Size = this.days.filter(day => {
            return day.date.getTime() === date.getTime();
        })
        if (dayListWith1Size.length === 0) {
            throw new Error("Day not found");
        }
        return dayListWith1Size[0].pairs.map(pair => {
            return pair.hours;
        });
    }

    /**
     * @param {Date} date
     * @return {Days}
     */
    getDayByDate(date) {
        let dayListWith1Size = this.days.filter(day => {
            return day.date.getTime() === date.getTime();
        });
        if (dayListWith1Size.length === 0) {
            throw new Error("Day not found");
        }
        return dayListWith1Size[0];
    }

    /**
     * @param {Date} date
     * @return {Weeks}
     */
    getWeekByDate(date) {
        let weekListWith1Size = this.weeks.filter(week => {
            return week.date.getTime() === date.getTime();
        });
        if (weekListWith1Size.length === 0) {
            throw new Error("Day not found");
        }
        return weekListWith1Size[0];
    }

    /**
     * @param {Date} date
     * @param {number} type - Type.GOOD | Type.BAD
     * @return {number}
     */
    getHoursByDate(date, type) {
        let dayListWith1Size = this.days.filter(day => {
            return day.date.getTime() === date.getTime();
        });
        if (dayListWith1Size.length === 0) {
            throw new Error("Day not found");
        }
        return type === Type.GOOD ? dayListWith1Size[0].goodHours : dayListWith1Size[0].badHours;
    }

    /**
     * @param {number} type - Type.GOOD | Type.BAD
     * @return {number}
     */
    getHoursByAllTime(type) {
        let query = type === Type.GOOD ? "goodHours" : "badHours";
        return this.days.reduce((acc, day) => {
            return acc + day[query];
        }, 0)
    }

    recalculate() {
        this.days.forEach(day => {
            day.recalculate();
        });
        this.weeks.forEach(week => {
            week.recalculate();
        });
    }
}

export class Days {
    /**
     * @param {Date} date
     * @param {Array.<{pairName: string, hours: number}>} pairs
     */
    constructor(date, pairs) {
        this.date = date;
        this.pairs = pairs;
        this.goodHours = this.#countHours(Type.GOOD);
        this.badHours = this.#countHours(Type.BAD);
    }

    /**
     * @param {number} type - Type.GOOD | Type.BAD
     * @return {number}
     */
    #countHours(type) {
        if (type !== Type.BAD && type !== Type.GOOD) {
            throw new Error("Invalid type");
        }

        let query = type === Type.GOOD ? 1 : 2;
        return this.pairs.reduce((sum, pair) => {
            return sum + (pair.hours === query ? pair.hours : 0);
        }, 0);
    }

    recalculate() {
        this.goodHours = this.#countHours(Type.GOOD);
        this.badHours = this.#countHours(Type.BAD);
    }
}

export class Weeks {
    /**
     * @param {Date} date
     * @param {number} goodHours
     * @param {number} badHours
     */
    constructor(date, goodHours, badHours) {
        this.date = date;
        this.goodHours = goodHours;
        this.badHours = badHours;
    }

    recalculate() {
    }
}

export class Type {
    static GOOD = 1;
    static BAD = 2;
}