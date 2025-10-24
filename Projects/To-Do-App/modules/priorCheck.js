import { getLocalStorageData } from "./getLocalStorageData"
import { dynamicToast } from "./toast";

export const priorCheck = (title) => {
    let savedData = getLocalStorageData();
    let Data = savedData.map((element) => element.title_todo);
    if(Data.includes(title)) {
        dynamicToast('duplicate');
        return false;
    } else if (title == '') {
        dynamicToast('emptyTitle');
        return false;
    } else {      
        return true;
    }
}