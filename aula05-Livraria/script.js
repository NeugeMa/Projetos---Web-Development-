function calcular() {
    var numBook = parseInt(document.getElementById("numBook").value)

    if (numBook <= 6 ) {
        document.getElementById("resultado").innerText = numBook * 22
    } else {
        document.getElementById("resultado").innerText = numBook * 15
    }

}

// Resolução Professor:
// var resultado = document.getElementById('resultado')

// function calcular() {
//     var livros = parseInt(document.getElementById('numBook').value);
//     var preco = ""

//     resultado.innerText = `o preço é ${preco}`
// }