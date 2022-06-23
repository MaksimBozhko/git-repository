/*function alertValues(elementParametr) {
console.log(elementParametr)    
console.log(elementParametr.value)
console.log(elementParametr.id)        
}
function getEl(id) {
    return document.getElementById(id)
}

let titleElementId = 'title';
let titleEl = getEl(titleElementId);
alertValues(titleEl);

let helloMessageId = 'hello-message';
let helloMessageEl = getEl(helloMessageId);
alertValues(helloMessageEl);

let citiesId = 'cities';
let citiesEl = getEl(citiesId);
alertValues(citiesEl);

//window.alert(citiesEl.id);

helloMessageEl.value = 'hello (good bye)';
helloMessageEl.id = 'HELLO-message';
//window.alert(helloMessageEl.id);

alertValues(helloMessageEl);*/


function addErrorClassName(elementId, newValue) {
    let element = document.getElementById(elementId);
    element.className = 'error';
    element.value = newValue;
}

function addErrorClassNameToAllInputs() {
    addErrorClassName('hello-message');
    addErrorClassName('FirstName');
    addErrorClassName('lastName');
}

let sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', addErrorClassNameToAllInputs);
//window.setTimeout(addErrorClassNameToAllInputs, 3000);

function changeValueToHelloMessage() {
    addErrorClassName('hello-message', 'buy!!!');  
}
function changeValueToFirstName() {  
    addErrorClassName('FirstName', 'Nikita');
}
function changeValueTolastName() {
    addErrorClassName('lastName', 'Garmash');
}

window.setTimeout(changeValueToHelloMessage, 2000);
window.setTimeout(changeValueToFirstName, 3000);
window.setTimeout(changeValueTolastName, 4000);
