import { accessDataFromLS } from "./modules/accessDataFromLS";
import { storeDataInLS } from "./modules/storeDataInLS";
import { toastSection } from "./modules/toastSection";

let digits = document.querySelector('#Digits');
let level = document.querySelector('#Level');
// let uRegister = "";
// let sample = document.querySelector('.sample');

let Options_Data = accessDataFromLS() || []; 

const dynamicUser = () => {
    let element = document.createElement('div')
    element.classList.add('user');
    element.innerHTML = `
        <p class="userLabel">Username</p>
        <input type="text" name="user" id="user" placeholder="Give Username" class="userInput" required>
        <button type="button" class="userNameButton">Submit</button>
    `
    document.querySelector('#user').append(element);
    let du = document.querySelector('.userNameButton').addEventListener('click', () => {
        let btnRef = document.querySelector('.userInput');
        let uRegister = btnRef.value;
        let mappedData = Options_Data.map((e) => {
            storeDataInLS(e.user_name);
        });
        alert('registered!');
        document.querySelector('#user').style.display = 'block';
        return uRegister;
        console.log(`dynamicUser name runned! data : ${uRegister}`);
    });
    return du;          
}

const user_options_handler = () => {
    document.querySelector('.btn').addEventListener('click', () => {
        const Data = {
            level : level.value,
            digit : digits.value,
            points : 0,
            loss : 0,
            user_name : "",
            uRegister : true
        };
        Options_Data.push(Data);
        storeDataInLS(Options_Data);
        console.log('Data append in LS');
    });

}

// const random_Number_Generator = () => {
//     let number = Math.floor(Math.random() * 10000);
    
    

//     sample.innerText = number;
// }

// random_Number_Generator();
dynamicUser()
user_options_handler()