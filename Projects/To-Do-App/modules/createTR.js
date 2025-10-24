export const createTr = (currTodo) => {
    let dynamicTr = document.createElement('tr');
    dynamicTr.classList.add("dynamic-table-row");
    dynamicTr.setAttribute("data-title", currTodo.title_todo);
    dynamicTr.innerHTML = `
        <td class="table-data-row">${currTodo.title_todo}</td>
        <td class="table-data-row">${currTodo.priority_todo}</td>
        <td class="table-data-row">${currTodo.date_to}</td>
        <td class="table-data-row">${currTodo.date_from}</td>
        <td class="table-data-row">${currTodo.status_todo}</td>
        <button class="btnn delete-btn" data-title="${currTodo.title_todo}"></button>
        <button class="btnn edit-btn"></button> 
    `;
    return document
            .querySelector('.table-data')
            .append(dynamicTr);
}