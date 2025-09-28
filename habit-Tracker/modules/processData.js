import { addDataToLS } from "./addDataToLS";
import { globalDataHolder } from "./globalDataHolder";

let habit_title = document.getElementById('habitText');
let habit_date = document.getElementById('habitDate');

export const processData = () => {
    if(habit_title.value == '' && habit_date.value == '') {
        alert('cannot be empty!');
    } else {
        let user_data_holder = {
            HABIT_TITLE : habit_title.value,
            HABIT_DATE : habit_date.value,
            "CHECKBOX" : false,
            "STREAK_COUNTER" : 0,
            "CHECK_STATUS" : "enabled",
            "TIME" : 24,
        };
        globalDataHolder.push(user_data_holder);
        addDataToLS(globalDataHolder);
    }
}