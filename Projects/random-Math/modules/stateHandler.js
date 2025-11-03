
import { accessDataFromLS } from "./accessDataFromLS";
import { storeDataInLS } from "./storeDataInLS";
import { toastSection } from "./toastSection";

const LEVEL = document.querySelector('#Level');
let elem = document.querySelector('.static');
let message = document.querySelector('.messg');
let digits = document.querySelector('#Digits');
let ope =  document.querySelector('#ope');

let LSData = accessDataFromLS();
let level = LSData.map((e) => e.level)

/*
    \\  Handles the option selection phase  //
*/ 

// -- only when the option is hard, hide remaining options even when user refresh page
export function hardSelector () {
    if(level.includes('hard')) {
        document.querySelector('.static')
        .style.display = 'none';
        document.querySelector('.messg')
        .innerText = 'Random mode activated!';
        document.querySelector('#displayDigit')
        .style.display = 'none';
        document.querySelector('.btn')
        .style.display = 'none';
    }
}

// -- only when user select the option
export function userSelection () {
    LEVEL.addEventListener('change', () => {
        const selectedOption = LEVEL.options[LEVEL.selectedIndex].text;
        if(selectedOption === 'Hard') {
            elem.style.display = 'none';
            document.querySelector('.btn')
            .style.display = 'none';
            document.querySelector('.staticHardBtn').innerHTML = `
                <button type="submit" class="btn-static">Start</button>
            `
            document.querySelector('.btn-static').addEventListener('click', () => {
                // storeDataInLS(LEVEL);
                toastSection('success');
            })
        } else if (selectedOption === 'Easy' || selectedOption === 'Medium') {
            elem.style = '';
            message.style.display = 'none';
            document.querySelector('.btn')
            .style.display = '';
        } else {
            console.error('error in module! [stateHandler.js]');
        }
    });
}

// -- checks for user entered input is valid or not
// export function userInputChecker () {
//     if ((LEVEL.value === 'Easy' || options === 'Medium' && )) {
//         toastSection('error-nooptionselect');
//     }
// }