var string = "STRING";
var ultimoIndice = string.length - 1;
var stringInvertida = "";

for(var i = ultimoIndice; i >= 0; i--){
    stringInvertida += string[i];
}

console.log(stringInvertida);
