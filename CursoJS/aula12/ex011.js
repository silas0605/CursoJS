var idade = 12
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log(`N�o Vota`)

} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto Obrigatorio')
}

