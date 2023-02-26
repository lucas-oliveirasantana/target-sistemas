var INDICE = 13;
var SOMA = 0; 
var K = 0;

function imprimir(SOMA) {
    while(K < INDICE) {
        K += 1;
        SOMA += K;
    }
    console.log(SOMA);
}

imprimir(SOMA);