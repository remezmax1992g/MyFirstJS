var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var operationsButton = document.getElementsByClassName("operation-button");

function makeOperation(operationCode){
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    if (operationCode === "+"){
        var result = number1 + number2;
    } else if (operationCode === "-"){
        var result = number1 - number2;
    } else if (operationCode === "*"){
        var result = number1 * number2;
    } else if (operationCode === "/"){
        var result = number1 / number2;
    } else {
        window.alert("Operation is unknown");
    }
    window.alert(result);

}

function onButtonOperationClick(eventObject){
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}


for (var i = 0; i < operationsButton.length; i++) {
    var button = operationsButton[i];
    button.addEventListener("click", onButtonOperationClick);
    
}
