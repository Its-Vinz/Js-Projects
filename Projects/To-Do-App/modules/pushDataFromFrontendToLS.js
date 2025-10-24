import { accessDataFromLocalStorage } from "./accessDataFromLocalStorage.js";
import { createTr } from "./createTR.js";
import { priorCheck } from "./priorCheck.js";
import { removeDataFromLS } from "./removeDataFromLS.js";
import { dynamicToast } from "./toast.js";
import { todosAdder } from "./state.js"

const Title = document.getElementById('title');
const Priority = document.getElementById('priority');
const Date_To = document.getElementById('dateTo');
const Date_From = document.getElementById('dateFrom');
const Status = document.getElementById('Status');

export const pushDataFromFrontendToLS = (event) => {
    event.preventDefault();
    let TITLE = Title.value;

    if(priorCheck(TITLE) === true) {
        const key = {
            title_todo : TITLE.trim(),
            priority_todo : Priority.value.trim(),
            date_to : Date_To.value.trim(),
            date_from : Date_From.value.trim(),
            status_todo : Status.value.trim(),
        }
        todosAdder.push(key);
        accessDataFromLocalStorage(todosAdder);
        createTr(key);
        dynamicToast('added');
        removeDataFromLS()
    }

    setTimeout(() => {
        Title.value = '';
        Priority.value = '';
        Date_To.value = '';
        Date_From.value = '';
        Status.value = '';
    }, 1000);
}
