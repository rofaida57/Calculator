let expression="";

function press(value){
  expression += value;
  document.getElementById("result").innerHTML = expression;
}


function calculate(){
let result = eval(expression);
document.getElementById("result").innerHTML = result;
expression = "";
}


function clearResult(){
  expression = "";
  document.getElementById("result").innerHTML = ""; 
}
