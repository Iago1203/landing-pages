
/*let frutas = ["Maçã", "Uva", "Morango"]
console.log(frutas [0])
console.log(frutas [1])
console.log(frutas [2])
console.log(frutas [3])


push
frutas.push("Banana")
console.log(frutas)

pop

frutas.pop()
console.log(frutas)

length

let numeros = [10, 20, 30 , 40 , 50]
console.log(numeros.length)

let senha = "123.ago"
console.log(senha.length)
if(senha.length <9){
    console.log("Senha deve conter no mínimo 9 caracteres")
}

filter

let nomes = [ "Ana", "Ana", "Maria", "João"]

let nomesFiltados = nomes.filter(nome => nome === "Ana")
console.log(nomesFiltados)

let num = [1, 2, 3, 4, 5] 
let dobroNumeros = num.map(numero => numero * 2)
console.log(dobroNumeros)

//for Each 

let cores =["Azul", "Verde", "Rosa"]

cores.forEach(cor =>{
    console.log("Cor: "+ cor)
})*/


//exercicio 1

let frutas = ["Maçã", "banana", "uva"]

console.log(frutas)


//exercicio 2

let cores = ["Azul", "verde", "amarelo", "vermelho"]

console.log(cores[1])

//exercicio 3

let animais = ["Cachorro", "Coelho", "Passaro"]
animais[1] = "Gato"
console.log(animais)

//Exercicio 4 
let nomes = ["Ana", "Lucas"]

nomes.push("Maurício")
console.log(nomes)

//Exercicio 5 
let numeros = [10, 20, 30, 40, 51]
console.log(numeros.length)


//Exercicio 1.1
let num = [1, 2, 3, 4, 5, 6]

let numerosFiltrados = num.filter(numero => numero % 2 == 0)
console.log(numerosFiltrados)

//Exercicio 2.1
let valores = [5, 12, 8, 20, 3, 15]
valores.forEach(valor => {
    if (valor > 10) {
        console.log(valor)
    }
})

let nome = ["Ana", "João", "Gabriel", "Lu"]
nome.forEach(nome => {
    if (nome.length < 5) {
        console.log(nome)
    }
})











