import { addDataToLS } from "./addDataToLS";
import { getDataFromLS } from "./getDataFromLS";
import { customToast } from "./toast";

export const dynamicElementCreation = () => {
    let getData = getDataFromLS();
    
    getData.forEach((elements) => {
        let timeStamp = Math.floor(Date.now() / 1000);
        let elapsed = timeStamp - (elements.lastCheckedTime || 0);
        let hours = 24 * 60 * 60;

        let element = document.createElement('tr');
        element.classList.add('dynamic_element');
        element.setAttribute('data-title', elements.HABIT_TITLE);
        element.innerHTML = `
            <td>${elements.HABIT_TITLE}</td>
            <td>${elements.HABIT_DATE}</td>
            <div class="checkBox">
            <input type="checkbox" data-title="${elements.HABIT_TITLE}"  data-check="${elements.CHECKBOX}" data-streak="${elements.STREAK_COUNTER}" class="checkBOX" name="streak">
            <p>${elements.Check_Status_Messg}</p>
            </div>
            <td class="viewStreak">${elements.STREAK_COUNTER}</td>
            <button type="button" data-title="${elements.HABIT_TITLE}" class="rmBtn">Delete</button>
            `;
            // <div class="date">${elements.date}</div>
        document
        .getElementById('tableBody')
        .append(element);
``
        
        // to reset the state of the checkbox of 24 hours
        // if(elapsed >= hours) {
        //     getData.forEach((elements) => {
        //         if(elements.CHECKBOX !== false ) {
        //             elements.CHECKBOX = false;
        //         }
        //     })
        //     addDataToLS(getData);
        // }
        
        if(elements.CHECKBOX === true) {
            document
            .querySelectorAll('.checkBOX')
            .forEach((e) => {
                e.checked = true;
                customToast('neutral');
            } );
        }
    });
}