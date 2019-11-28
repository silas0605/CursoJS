let amigo = { nome: 'Silas', 
sexo: 'M',
peso: '52,4',
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} KG`)