let n = 16
let i = 0

for(let x = n; x >= 2; x /= 2){
    i++
}
if(n / 2 ** i === 1){ 
    console.log('É potencia de 2')
} else {
    console.log('NÃO é potencia de 2')
}
