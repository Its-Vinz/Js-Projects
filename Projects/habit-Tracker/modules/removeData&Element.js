import { addDataToLS } from "./addDataToLS";
import { getDataFromLS } from "./getDataFromLS";
import { customToast } from "./toast";

export const removeDataWithElement = () => {
    document
    .querySelectorAll('.rmBtn')
    .forEach((e) => {
        e.addEventListener('click', (event) => {
            let filteredData = getDataFromLS().filter((title)=> title.HABIT_TITLE != event.target.dataset.title)
            addDataToLS(filteredData);
            event.target.parentElement.remove();
            customToast('pop');
        })
    })
}