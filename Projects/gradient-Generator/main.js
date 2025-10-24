const L_Button = document.getElementById("LButton");
const R_Button = document.getElementById("RButton");
const copyCode = document.querySelector(".copyCode");
let hexColor1 = "#264547";
let hexColor2 = "#621dcb";

const hexValuesFunction = () => {
  let hex_Values = "0123456789abcdef";
  let colors = "#";
  for(let i=0; i < 6; i++){
    colors += (hex_Values[Math.floor(Math.random() * 16)]);
  }
  return colors;
}
const handleLeftButton = () => {
  hexColor1 = hexValuesFunction();      // calling hex function passing the hex to hexColor2 variable
  document.body.style.backgroundImage = `linear-gradient(to right, ${hexColor1}, ${hexColor2})`;  // dynamically changing the body color using the "style.backgroundImage"
  copyCode.innerHTML = `background-Image: linear-gradient(to right, ${hexColor1}, ${hexColor2})`; // passing the hex values to the message section where backgroundImage property is diplayed
  L_Button.innerText = hexColor1;     // dynamically changes the hex values of the buttons
}

const handleRightButton = () => {
  hexColor2 = hexValuesFunction();
  document.body.style.backgroundImage = `linear-gradient(to right, ${hexColor1}, ${hexColor2})`;
  copyCode.innerHTML = `background-Image: linear-gradient(to right, ${hexColor1}, ${hexColor2})`;
  R_Button.innerText = hexColor2;
}

L_Button.addEventListener("click", handleLeftButton);   // calling the reference of the button and assigning click event
R_Button.addEventListener('click', handleRightButton);
copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(copyCode.innerText);  // js inbuilt clipboard method
  alert(`copied to clipboard`);
})
