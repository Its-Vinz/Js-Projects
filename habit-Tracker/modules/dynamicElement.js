import { getDataFromLS } from "./getDataFromLS";

export const dynamicElementCreation = () => {
    let getData = getDataFromLS();
    getData.forEach((elements) => {
        let element = document.createElement('tr');
        element.classList.add('dynamic_element');
        element.setAttribute('data-checkBox', elements.CHECKBOX);
        element.innerHTML = `
            <td>${elements.HABIT_TITLE}</td>
            <td>${elements.HABIT_DATE}</td>
            <div class="checkBox">
            <input type="checkbox" data-checkBox="${elements.CHECKBOX}" name="done-today" class="checkBOX">
            </div>
            <td class="viewStreak"></td>
            <button type="button" data-checkBox="${elements.CHECKBOX}" class="rmBtn">delete</button>
        `;
        document
            .getElementById('tableBody')
            .append(element);
    });
}