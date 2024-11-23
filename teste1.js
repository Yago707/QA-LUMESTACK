let meuArray = [1, 2, 3, 4, 5];
console.log("Array inicial:", meuArray);

// Adiciona o número 6 ao final do array
meuArray.push(6);
console.log("Após adicionar 6:", meuArray);

// Remove o número 3, se ele existir
if (meuArray.indexOf(3) !== -1) {
  meuArray.splice(meuArray.indexOf(3), 1); // Use splice em vez de slice
}
console.log("Após remover 3:", meuArray);

// Exibe os elementos do array
console.log("Elementos do array:");
meuArray.forEach((elemento) => {
  console.log(elemento);
});

// Retorna o array final (se necessário em um ambiente de módulo)
meuArray;
