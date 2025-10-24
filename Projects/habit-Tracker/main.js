import { checkBoxFlipper } from "./modules/checkBoxFlipper";
import { dynamicElementCreation } from "./modules/dynamicElement";
import { processData } from "./modules/processData";
import { removeDataWithElement } from "./modules/removeData&Element";

dynamicElementCreation()

removeDataWithElement()

checkBoxFlipper()

document
  .querySelector('.addBtn')
  .addEventListener('click', (e) => {
    processData(e) 
  });