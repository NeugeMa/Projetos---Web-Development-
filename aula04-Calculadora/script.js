function soma() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = num1 + num2;

}

function subtracao() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = num1 - num2;
}

function multiplicacao() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = num1 * num2;
}

function divisao() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 == 0)  { 
        resultado.innerText = "Erro: divisão por zero"
    } else {
        resultado.innerText = num1 / num2; 
    }
}