import { accessDataFromLS } from "./accessDataFromLS"
import { toastSection } from "./toastSection";
let radioButton = document.querySelector('.radioButton')


export const randomNumberLogic = () => {
    try {
        let data = accessDataFromLS();
        data.forEach(element => {
            let num = 0;
            // for digits
            if(element.digit === 1) {
                num = 10;
            } else if (element.digit === 2) {
                num = 100;
            } else if (element.digit === 3) {
                num = 1000;
            } else if (element.digit === 4) {
                num = 10000;
            } else {
                console.error('randomNumberLogic Module Error!');
            }
            
            function randomNumberGenerator() {
                let randomNumbers = Math.floor(Math.random() * num);
                return randomNumbers;
            }
            // for levels
            
            if(element.level === "easy" || element.level === "medium") {
                document.querySelector('.mathProblemDisplay').innerHTML = `
                ${randomNumberGenerator()} ${element.ope} ${randomNumberGenerator()}
                    <img class="staticButtons" src="./assets/refresh-circle-svgrepo-com.svg" alt="refresh-svg" height="35" title="Refresh"/>
                `;
                document.querySelector('.staticButtons').addEventListener('click', () => {
                    randomNumberGenerator()
                    document.querySelector('.mathProblemDisplay').innerHTML = `
                    ${randomNumberGenerator()} ${element.ope} ${randomNumberGenerator()}
                        <img class="staticButtons" src="./assets/refresh-circle-svgrepo-com.svg" alt="refresh-svg" height="35" title="Refresh"/>
                    `;
                })
            } else if (element.level === "hard") {
                // alert('random alert')
            }
        });
    } catch (error) {
        console.log(error)
    }
}
