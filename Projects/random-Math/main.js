import { accessDataFromLS } from "./modules/accessDataFromLS";
import { displayInfo } from "./modules/displayInfo";
import { hardSelector, userSelection } from "./modules/stateHandler";
import { user_options_handler } from "./modules/userOptions";
// import { randomNumberLogic } from "./modules/randomNumber";

let LSData = accessDataFromLS();

displayInfo();      // displays information based on user preferences
// randomNumberLogic();     // main logic, generates random numbers, checks there answers & steaks handling section

/*
    // selectHander.js modules functions 
*/
hardSelector();     // when user select hard option
userSelection();    // perform operation based on user selected option
// userInputChecker()  // checks for valid input or not

document
.querySelector('.btn')
.addEventListener('click', (e) => user_options_handler(e));