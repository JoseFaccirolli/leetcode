let n = 16
let i = 0

for(let x = n; x >= 2; x /= 2){ // Divide o valor dito (por ex 16) por 2 para saber qual o expoente
    // O i++ conta quantas repetições para dizer qual é o expoente da potencia 
    // (a cada divisao por dois, é uma vez para a potencia multiplicar por 2)
    i++
    console.log(i)
}

/*
    Sabendo o expoente podemos fazer uma conta onde: 2^x = n então: 
    2 elevado ao expoente descoberto, dividido pelo numero, deve obrigatoriamente dar 1.
    por que? Simples, ao multiplicar 2 pelo expoente se tem n, ex:
    n = 16, ao dividir 16 por 2 até o 0, temos 4 repetições, logo 4 é o expoente, assim
    2 (base) mulplicado por 4 é 16, afinal, essa é a conta inicial, 2^x = n. 2^4 = 16.
*/  
if(n / 2 ** i === 1){ 
    console.log('É potencia de 2')
} else {
    console.log('NÃO é potencia de 2')
}

// Obs: 1 é potencia pois 2^0 = 1, porém, não tive preocupações, afinal 1 é naturalmente
// menor que dois, então o for tem 0 iterações, consequentemente o i continua sendo 0 
// e no if 2 ** 0 / 1 é o mesmo que 1 / 1 que resulta em 1