import { editToDoList } from "./modules/editToDoList";
import { pushDataFromFrontendToLS } from "./modules/pushDataFromFrontendToLS";
import { removeDataFromLS } from "./modules/removeDataFromLS";
import { showData } from "./modules/showData";

showData();
removeDataFromLS();
editToDoList();

document
    .querySelector(".btn")
    .addEventListener('click', (event) => {
    pushDataFromFrontendToLS(event);
});