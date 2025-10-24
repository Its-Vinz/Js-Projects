import { addDataToLS } from "./addDataToLS";
import { getDataFromLS } from "./getDataFromLS";
import { streakChecker } from "./streakChecker";
import { customToast } from "./toast";

export const checkBoxFlipper = () => {
  let Data = getDataFromLS();
  let timeStamp = Math.floor(Date.now() / 1000);
  let state = 1;
  // let date = new Date()
  // let fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  document
  .querySelectorAll('.checkBOX')
  .forEach((element) => {
    element.addEventListener('change', (e) => {

      let checkStatus = e.target.dataset.check;
      let title = e.target.dataset.title;

      if(checkStatus === "true") {
        streakChecker(title);
        e.target.disabled = true;
      } else {
        let updatedData = Data.map((e) => {
          if(String(e.HABIT_TITLE) === title) {
              e.Check_Status_Messg = "Checked";
              e.CHECKBOX = true;
              e.STREAK_COUNTER += state;
              e.lastCheckedTime = timeStamp;
          }
          return e;
        })
        e.target.disabled = true;
        addDataToLS(updatedData);
        console.log("checked success!");
        customToast('newStreak');
      }
    });
  });
}