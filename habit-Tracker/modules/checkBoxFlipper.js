import { addDataToLS } from "./addDataToLS";
import { globalDataHolder } from "./globalDataHolder";

export const checkBoxFlipper = () => {
  const systemTime = new Date();
  document
  .querySelectorAll('.checkBOX')
  .forEach((element) => {
    element.addEventListener('change', (e) => {
      let state = 1;
      let TARGET = e.target.dataset.checkbox;
      for(let data of globalDataHolder) {
        if(String(data.CHECKBOX) === "false" && TARGET === "false") {
          data.CHECKBOX = true;
          data.STREAK_COUNTER += state;
          console.log(`checkbox status: ${data.CHECKBOX} & streak status: ${data.STREAK_COUNTER}`);
          addDataToLS(data);
          e.target.disabled = true;
          data.CHECK_STATUS = "disabled";
          console.log("checked success!");
        } else {
          alert('peek after 24 hours!');
          // const hours = systemTime.getHours();
          // if(hours <= 23) {
          //   alert('peek after 24 hours!');
          // } else {
          //   data.STREAK_COUNTER += state;
          // }
        }
      };
    });
  });
}