export const dynamicToast = (property) => {
    let dynamicToastElement = document.createElement('div');
    dynamicToastElement.classList.add('toast');

    if (property === 'duplicate') {
        dynamicToastElement.innerHTML = `<p class="error">Duplication of Todo has been pointed!<p>`;
    } else if (property === 'added') {
        dynamicToastElement.innerHTML = `<p class="success">Todo added!<p>`;
    } else if (property === 'removed') {
        dynamicToastElement.innerHTML = `<p class="error">Todo removed!<p>`;
    } else if (property === 'edited') {
        dynamicToastElement.innerHTML = `<p class="success">Todo edited!<p>`;
    } else if (property === 'emptyTitle') {
        dynamicToastElement.innerHTML = `<p class="error">Title can't be empty!<p>`;
    } else {
        dynamicToastElement.innerHTML = `<p class="error">Backend Error!<p>`;
    }

    document.querySelector('.toast').append(dynamicToastElement);

    setTimeout(() => {
        dynamicToastElement.remove();
    }, 3000);

}