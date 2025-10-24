import { customToast } from "./toast";
import { getDataFromLS } from "./getDataFromLS";
import { addDataToLS } from "./addDataToLS";

export const streakChecker = (title) => {    
    let timeStamp = Math.floor(Date.now() / 1000);
    let Data = getDataFromLS();

    // flags to prevent repeat toast
    let missedShown = false;
    let after24Shown = false;
    let streakIncreaseToast = false;

    Data.forEach((e) => {
        console.log(typeof e);
        console.log(typeof title);
        
        
        let elapsed = timeStamp - (e.lastCheckedTime || 0);  // how many seconds passed since last update
        let hours = 24 * 60 * 60;  // 1 day in seconds. 1 day = 86400 seconds, 2 days = 172800 

        if(elapsed > 2 * hours && toString(e.title) === title) {  // missed 2 day streak 2 * hours
            e.STREAK_COUNTER = 0;
            e.Check_Status_Messg = "Unchecked";
            e.lastCheckedTime = timeStamp;
            if(!missedShown) {
                customToast('missed');
                missedShown = true; // prevents repeating
            }
        } else if (elapsed > hours && toString(e.title) === title) {
            e.STREAK_COUNTER ++;
            e.Check_Status_Messg = "Checked";
            e.lastCheckedTime = timeStamp;
            if(!streakIncreaseToast) {
                customToast('streakIncrease');
                streakIncreaseToast = true;
            }
        } else {
            if(!after24Shown) {
                customToast('after24');
                after24Shown = true;
            }
        }
    });
    addDataToLS(Data);
}