function pertenceFibonacci(x) {
    let num1 = 0, num2 = 1, proximo;

    while (num2 < x) {
        proximo = num1 + num2;
        num1 = num2;
        num2 = proximo;
    }

    return num2 === x || x === 0;
}

console.log(pertenceFibonacci(7));