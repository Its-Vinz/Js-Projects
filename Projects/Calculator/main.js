const inputValue = document.getElementById("inputValue");
const Numbers_Input = document.querySelectorAll(".val");
let Display = document.querySelector(".display");
let temp = '';
let VIPKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "%", "Enter", "Control", "Backspace"];

const clickHandler = (e) => {      // so you can call object in parameter!
  let num = e.target.textContent;
  // when we have to show or sets the data in input we use .value and to view the text textContent, e.target is the HTML object
  temp += num;
  if(num === '=') {
    temp = temp.slice(0, -1);
    temp = eval(temp);
  }
  if(num === 'C') {
    temp = '';
  }
  if(num === '') {
    console.log("enter valid input");
  }
  if(num === 'B') {
    console.log(temp = temp.slice(0, -1));
  }
  inputValue.value = temp;
}

const keyboardHandler = (e) => {
  if(VIPKeys.includes(e.key)) {
    let num = e.key;
    temp += num;
    if(num == 'Enter') {
      temp = temp.slice(0, 5);
      temp = eval(temp);
    }
    if(num === 'Control') {
      temp = '';
    }
    inputValue.value = temp;
  }
}

// as we are taking multiple divs from the val we will loop through to access all divs and using event delegation we will came to know which button got fired as parent will sync which child is fired.
for(let i=0; i < Numbers_Input.length; i++) {
  Numbers_Input[i].addEventListener('click', clickHandler);
  // js automatically passes the event object into your listener function i.e handleNumberOperation
}

document.addEventListener('keydown', keyboardHandler);
