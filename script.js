function subtractNumbers() {
    var val1 = parseInt(document.getElementById("value1").value);
    var val2 = parseInt(document.getElementById("value2").value);
    var ansD = document.getElementById("answer");
    ansD.value = val1 - val2;
}
  
function addNumbers() {
    const num1 = document.getElementById('addNum1').value;
    const num2 = document.getElementById('addNum2').value;
    const addTotal = parseInt(num1) + parseInt(num2);
    document.getElementById('addTotal').value = addTotal;
}

function div () {
    var a,b,Div;
    a = parseInt(document.getElementById ("first").value);
    b = parseInt(document.getElementById ("second").value);
    Div = a/b;
    document.getElementById("third").value=Div;
}

function multiFunction(e) {
    let firstNumber = document.getElementById('multi-number1');
    let lastNumber = document.getElementById('multi-number2');
    let multiAnswer = document.getElementById('multiAnswer');

    multiAnswer.value += firstNumber.value * lastNumber.value;

}