export const accessDataFromLS = () => {
    return JSON.parse(localStorage.getItem('random-Math') || '[]');
}