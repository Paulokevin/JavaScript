// Criando objetos em JavaScript

let pessoa = {nome:'Paulo',
sexo: 'Masculino',
peso: 60.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}


pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)
