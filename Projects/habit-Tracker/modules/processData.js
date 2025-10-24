import { addDataToLS } from "./addDataToLS";
import { globalDataHolder } from "./globalDataHolder";
import { customToast } from "./toast";

let habit_title = document.getElementById('habitText');
let habit_date = document.getElementById('habitDate');

export const processData = (e) => {
    // e.preventDefault();
    if(habit_title.value === " " && habit_date.value === " ") {
        customToast('empty');
    } else {
        let user_data_holder = {    
            HABIT_TITLE : habit_title.value,
            HABIT_DATE : habit_date.value,
            "CHECKBOX" : false,
            "Check_Status_Messg" : "Unchecked",
            "STREAK_COUNTER" : 0,
            "lastCheckedTime" : 0,
            "date" : "Not Checked yet!",
        };
        globalDataHolder.push(user_data_holder);
        customToast('add');
        addDataToLS(globalDataHolder);
    }
}