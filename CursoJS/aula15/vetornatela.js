let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

console.log(valores)

/*for (let pos=0; pos < valores.length; pos++){
    console.log(`A posi��o${pos} tem o valor ${valores[pos]}`)
}*/


for (let pos in valores) {
    console.log(`${pos} tem o valor ${valores[pos]}`)
}