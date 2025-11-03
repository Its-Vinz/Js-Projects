import { accessDataFromLS } from "./accessDataFromLS";
import { storeDataInLS } from "./storeDataInLS";
import { toastSection } from "./toastSection";

let digits = document.querySelector('#Digits');
let level = document.querySelector('#Level');
let ope =  document.querySelector('#ope');

export const user_options_handler = () => {
    if((digits.value === '' || ope.value === '')) {
        toastSection('error-nooptionselect')
    } else {
        let Options_Data = [];
        const Data = {
            level : level.value,
            digit : Number(digits.value),   // Hard option is not working! showing alert, it should not show!
            points : 0,
            loss : 0,
            ope : ope.value,
        };
        Options_Data.push(Data);
        storeDataInLS(Options_Data);
        toastSection('success')
        window.location.reload();
    }
}