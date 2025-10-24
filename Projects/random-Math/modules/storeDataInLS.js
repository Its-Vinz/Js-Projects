export const storeDataInLS = (Data) => {
    localStorage.setItem('random-Math', JSON.stringify(Data));
}