function velocidade() {
    var multa = parseInt(document.getElementById("multa").value)
    var preco = ""

    if (multa > 60) {
        var velocidade = multa - 60
        var multa = 100*velocidade
    } else { 
        var multa = "parabéns, você respeitou as leis"
    } 
    resultado.innerText = `${multa}`
}

