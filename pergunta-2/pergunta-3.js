const dados = require('./dados.json');

var ultimoIndice = dados.length - 1;

function retornaMenorValor(){
    var menorValor = 99999999999999;
    for(var i = 0; i <= ultimoIndice; i++){
        if(menorValor > dados[i].valor && dados[i].valor != 0){
            menorValor = dados[i].valor;
        }
    }
    return console.log('Menor valor: ', menorValor);
}

function retornaMaiorValor(){
    var maiorValor = 0;
    for(var i = 0; i <= ultimoIndice; i++){
        if(maiorValor < dados[i].valor){
            maiorValor = dados[i].valor;
        }
    }
    return console.log('Maior valor: ', maiorValor);
}

function retornoDiasEmQueValorMaiorQueMedia(){
    var media = 0;
    var totalMes = 0;
    var dias = 0;
    var diasComValorMaiorQueMedia = 0;

    for(var i = 0; i <= ultimoIndice; i++){
        totalMes += dados[i].valor;
        dias += 1;
    }
    media = totalMes / dias;

    for(var i = 0; i <= ultimoIndice; i++){
        if(dados[i].valor > media){
            diasComValorMaiorQueMedia += 1;
        }
    }

    return console.log('Numero de dias no mes em que o valor de faturamento diario foi superior a media mensal: ', diasComValorMaiorQueMedia);
}

retornaMenorValor();
retornaMaiorValor();
retornoDiasEmQueValorMaiorQueMedia();
