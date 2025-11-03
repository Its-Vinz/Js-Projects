export const toastSection = (message) => {
    if(message === 'success') {
        alert('Your preferences have been updated!'); 
    } else if (message === 'error-nooptionselect') {
        alert('Please select options!'); 
    }
}