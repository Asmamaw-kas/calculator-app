const display = document.getElementById("display");
let valuenow;
function appendtodisplay(input){
    valuenow=input;
display.value += valuenow;
console.log(display.value)
}

function cleardisplay(){
display.value = '';
}

function calculate(){

    try{
display.value = eval(display.value);
    }
catch(error){
    display.value='syntax error';
}
}
function clearone(){
    display.value -= valuenow;
}