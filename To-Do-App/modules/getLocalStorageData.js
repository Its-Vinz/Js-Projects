export const getLocalStorageData = () => {
  return JSON.parse(localStorage.getItem('to-Do-Key') || '[]');
}