const { meuArray } = require("./teste1")

let x = "2"
let y = 2
if (x === y) {
    console.log("As variáveis são iguais")
} else {
    console.log("As variáveis são diferentes")
}

function numbercheck(numero) {
    if (numero > 0)  {
        return "numero de positivo"
     } else if (numero < 0) {
            return "numero negativo"
     } else {
     return "Numero Zero"
     }
}           
    console.log(numbercheck(0))
console.log("Após adicionar 6:", meuArray);
const index = meuArray.indexOf(3);
if (index !== -1) {
    meuArray.splice(index, 1);
}
console.log("Após remover 3:", meuArray);
console.log("Elementos do array:");
meuArray.forEach(elemento => {
    console.log(elemento);
});



    