let runningTotal = 9;
let buffer = "0";
let previousOperator;
const screen = document.querySelector('.screen');

function clickButton(value){
    if(isNaN(value)){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}
function handleSymbol(symbol){
    switch(symbol){
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;
        case "=":
            if(previousOperator === null){
               return 
            }    

    }
}