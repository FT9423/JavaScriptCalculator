function goAdd() {
    let value = getValue();
    let result = value[0] + value[1];
    showResult(result);
}
function goSubtract() {
    let value = getValue();
    let result = value[0] - value[1];
    showResult(result);
}
function goMultiply() {
    let value = getValue();
    let result = value[0] * value[1];
    showResult(result);
}
function goDivide() {
    let value = getValue();
    let result = value[0] / value[1];
    showResult(result);
}	

function showResult(result) {
    document.getElementById("output").innerHTML = result;
    emptyValue();
}

function getValue() {
    let value1 = parseFloat(document.getElementById("FirstInput").value);
    let value2 = parseFloat(document.getElementById("SecondInput").value);
    return [value1, value2];
}

function emptyValue() {
    document.getElementById("FirstInput").value = null;
    document.getElementById("SecondInput").value = null;
}