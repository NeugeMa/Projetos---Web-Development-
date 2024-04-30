// While
while (i < 10) {
    texto += "O número é " + i;
    i++;
}

// While Do
let count = 0;
do {
    console.log(count);
    count++; 
} while (count < 5)

// For
for(i=0; i<=10; i++) {
    console.log(i)
} 

// i = 0 | 0 é menor que 10? | printa na tela 0
// i = 1 | 1 é menor que 10? | printa na tela 1
// i = 11 | 11 é menor que 10? | printa na tela 11

// Fazendo uma contagem reressiva
for(i=0; i<=0; i--) {
    console.log(i)
} 

// Função Calcular 

// Função Tabuada
function calcular() {
    
var numero = document.getElementById("num1").value 
console.lo(`A tabuada do número ${numero} é:`)
for(i=10; i>=0; i--) {
    console.lo(`${numero} x ${i} `)
    }
}