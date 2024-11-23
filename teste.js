// Exporta um array inicial
export let meuArray = [1, 2, 3, 4, 5];

// Função para manipular o array
function manipularArray(acao) {
    console.log("Array inicial:", meuArray);

    // Usa switch para determinar a ação a ser executada
    switch (acao) {
        case 'adicionar':
            meuArray.push(6);
            console.log("Após adicionar 6:", meuArray);
            break;
        case 'remover':
            if (meuArray.indexOf(3) !== -1) {
                meuArray.splice(meuArray.indexOf(3), 1);
                console.log("Após remover 3:", meuArray);
            } else {
                console.log("3 não encontrado no array.");
            }
            break;
        default:
            console.log("Ação desconhecida. Nenhuma alteração feita.");
    }

    console.log("Elementos do array:");
    meuArray.forEach(elemento => {
        console.log(elemento);
    });

    return meuArray;
}

// Chama a função com a ação desejada
manipularArray('adicionar');  // Tente 'adicionar' ou 'remover'

