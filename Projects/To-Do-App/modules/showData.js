import { getLocalStorageData } from "./getLocalStorageData";

export const showData = () => {
  let Data = getLocalStorageData()
  Data.forEach((element) => {
    console.log(element);
    
    
      let dynamicTr = document.createElement('tr');
      dynamicTr.classList.add("dynamic-table-row");
      dynamicTr.setAttribute("data-title", element.title_todo);
      dynamicTr.innerHTML = `
        <td class="table-data-row">${element.title_todo}</td>
        <td class="table-data-row">${element.priority_todo}</td>
        <td class="table-data-row">${element.date_to}</td>
        <td class="table-data-row">${element.date_from}</td>
        <td class="table-data-row">${element.status_todo}</td>
        <td class="table-data-row"><button class="btnn delete-btn" data-title="${element.title_todo}"></button></td>
        <td class="table-data-row"><button class="btnn edit-btn" data-title="${element.title_todo}"></button></td>
        <td class="table-data-row-edit" data-title="${element.title_todo}">
            <div class="dynamic-pocket" data-title="${element.title_todo}"></div>
        </td>
      `; 
      document
        .querySelector('.table-data')
        .append(dynamicTr);

  });
}