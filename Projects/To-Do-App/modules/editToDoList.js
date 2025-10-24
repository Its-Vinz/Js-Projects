export const editToDoList = () => {
    document.querySelectorAll('.edit-btn').forEach((currButton) => {
        currButton.addEventListener('click', (event) => {
            let target = event.target.dataset.title
            document.querySelectorAll('.table-data-row-edit').forEach((e) => {
                if(e.dataset.title === target) {
                    document.querySelectorAll('.dynamic-pocket').innerHTML =    
                `
                    <label for="priority">Priority</label>
                    <select name="Priority" id="priority" class="selectData">
                        <option class="selectActive" disabled>Select Option</option>
                        <option class="selectActive" value="ongoing">Low</option>
                        <option class="selectActive" value="hold">Medium</option>
                        <option class="selectActive" value="cancelled">Major</option>
                        <option class="selectActive" value="done">Critical</option>
                    </select>
                    
                    <label for="dateFrom">Deadline From</label>
                    <input type="date" name="dateFrom" id="dateFrom" class="inputData">
                    
                    <label for="dateTo">Deadline To</label>
                    <input type="date" name="dateTo" id="dateTo" class="inputData">
                    
                    <label for="Status">Status</label>
                    <select name="status" id="Status" class="selectData">
                        <option class="selectActive" disabled>Select Option</option>
                        <option class="selectActive" value="ongoing">Ongoing</option>
                        <option class="selectActive" value="hold">Hold</option>
                        <option class="selectActive" value="cancelled">Cancelled</option>
                        <option class="selectActive" value="done">Done</option>
                    </select>
                
                    <button class="btn">Add</button>
                    `                        
                    // })
                }
                })
        })
    })
}