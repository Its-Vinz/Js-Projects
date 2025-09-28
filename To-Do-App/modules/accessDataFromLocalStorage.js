export const accessDataFromLocalStorage = (todosAdder) => {
  localStorage.setItem('to-Do-Key', JSON.stringify(todosAdder));
}