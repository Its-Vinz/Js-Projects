export const addDataToLS = (dataHolder) => {
    localStorage.setItem('habit-tracker', JSON.stringify(dataHolder));
}