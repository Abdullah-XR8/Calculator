let string = ""; // first string null hai because of input
let buttons = document.querySelectorAll('.button'); //this will selects all the buttons of calculator

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
    }

   else if (e.target.innerHTML == 'C'){
        string = ""; 
        document.querySelector('input').value = string; // its a Clear button function string ""
    }

    else {
    console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  });
});
// uses array from button for each button and places add event listener on each button on their click  e target THEN US K BAAD we change the string into like humm jo button click karen gy wow console my ayey ga AND THEN we use input as qureyselector and = to string means string jo k hamara pressed button hai wow ab input my show hu ga, 

