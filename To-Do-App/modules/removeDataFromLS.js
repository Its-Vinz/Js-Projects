import { accessDataFromLocalStorage } from "./accessDataFromLocalStorage";
import { getLocalStorageData } from "./getLocalStorageData";
import { dynamicToast } from "./toast";
// import { todosAdder } from "./state.js"
// console.log("this is todosAdder", todosAdder);

// todosAdder.length = 0;
export const removeDataFromLS = () => {
    document
    .querySelectorAll('.delete-btn')
    .forEach((clickedButton) => {        
        clickedButton.addEventListener(('click'), (event) => {
            let DATA = getLocalStorageData().filter((e) => e.title_todo !== event.target.dataset.title);
            // DATA.forEach((e) => todosAdder.push(e));
            accessDataFromLocalStorage(DATA);
            event.target.closest('tr').remove();
            dynamicToast('removed');
            window.location.reload();
        });        
    });
}