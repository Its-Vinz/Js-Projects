export const removeDataWithElement = () => {
    document
    .querySelectorAll('.rmBtn')
    .forEach((e) => {
        e.addEventListener('click', (event) => {
            event.target.parentElement.remove();        
        })
    })
}