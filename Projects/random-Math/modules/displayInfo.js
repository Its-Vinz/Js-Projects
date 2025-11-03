import { accessDataFromLS } from "./accessDataFromLS";
let infoContainer = document.querySelector('.infoContainer');

export const displayInfo = () => {
    let data = accessDataFromLS();
    data.forEach(element => {
        infoContainer.innerHTML = `
            <p>Selected Level: ${element.level}</p>
            <p id="displayDigit">Selected Digit: ${element.digit}</p>
            <p>Total Points Earned: ${element.points}</p>
            <p>Total Points Lost: ${element.loss}</p>
        `;
    });
}