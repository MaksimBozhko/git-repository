let operationsButton = document.getElementsByClassName('operation-button');

function makeOperation(operation) {
    let input1 = document.getElementById('input1'); 
    let input2 = document.getElementById('input2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    if (operation === '+') {
        var result = number1 + number2;
    } else if (operation === '-') {
        var result = number1 - number2;
    } else if (operation === '*') {
        var result = number1 * number2;
    } else if (operation === '/') {
        var result = number1 / number2;
    } else {
        resultinput.value = 'Operation is unknown';    
    }
    resultinput.value = result;
}

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for(i = 0; i < operationsButton.length; i++) {
    let button =  operationsButton[i];
    button.addEventListener('click', onOperationButtonClick);
}