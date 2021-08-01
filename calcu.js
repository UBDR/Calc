/*
 *  1. add click listener on each button - done
 *  2. on click of button , display value on input field - done
 *  3. implement clear button functionality - done
 *  4. implement arithmetic operation
 *  5. implement evaluation button
 */

let input = document.getElementById("screen"); // our input field reference for future use

input.value = "0"; // setting default value as 0. On Screen load

let buttons = document.getElementsByTagName("Button"); // getting reference of all the buttons by Tag Name

let number1 = 0;
let number2 = 0;
let operation = null;
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// let arr = [1,2,3,4]

// console.log(buttons);
// console.log(typeof buttons);
// console.log(Array.isArray(buttons));


for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', this.onClickButton);
}


function onClickButton(event) {
    let data = replaceDefaultZero(input.value, event.target.value);

    if(data === true) {
        return;
    }

    if(numbers.includes(event.target.value)) {
        input.value = input.value + event.target.value;
    } else {

        if(event.target.id === "reset") {
            onClickClearButton();
        }
    
        if(event.target.id === "add") {
            if(number1 == 0) {
                number1 = input.value;
            } else {
                number2 = input.value;
            }
            operation = 'ADD';

            if(number1 != 0 && number2 != 0) {
                doSum();
            } else {
                input.value = '';
            }
        }

        if(event.target.id === 'equal') {
            if(number1 != 0) {
                number2 = input.value;
            }
            if(number1 != 0 && number2 != 0 && operation != null) {
                doEvaluation();
            }
        }
    
    }

}

function replaceDefaultZero(defaultValue, newValue) {
    let result = false;
    if(defaultValue == 0) {
        input.value = newValue;
        result = true;
    }
    return result;
}

function onClickClearButton() {
    input.value = 0;
    clearGlobalVariables();
}

function clearGlobalVariables() {
    number1 = 0;
    number2 = 0;
    operation = null;
}

function doSum() {
    input.value = Number(number1) + Number(number2);
}

function doEvaluation() {
    if(operation === 'ADD') {
        doSum();
    }
    clearGlobalVariables();
}











// for (let i=0;i<buttons.length;i++)
// {

//     // addEventListener('event_name', function)
//     buttons[i].addEventListener('click', function(event) {
//         if(event.target.id=="Eq") 
//         {
//            eval();
//         }                             //important
//        if (event.target.id=="reset")
//        {
//            input.value = "0";
//        }
//        else
//        {
//         let bt=input.value;// console.log(event.target);
//         if (bt == 0) {
//                 input.value = event.target.value;
//             }                                                                                   
//             else 
//                 {
//                     input.value = bt + event.target.value;
//                 }
//             }        
//         // input.value = event.target.value;
//     }) ;

// };


// function eval(){
// if(event.target.value == '+')
// {
//     bt = Math.value() ;
//     console.log(bt);
// }
