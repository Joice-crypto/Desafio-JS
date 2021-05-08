const express = require('express');
const app = express();


console.log("Bem Vindo(a)! \n ----------- Vamos começar o questionario -------\n  ")

const questions = [
    "1-Digite seu nome completo",
    "2-Digite seu email",
    "3-Digite seu CPF ou CNPJ",
    "4-Digite seu numero de telefone",
    "5-Informe seu CEP",
    "6-Informe seu Logradouro",
    "7-Informe o numero",
    "8-Bairro",
    "9-Cidade",
    "10-Estado"

] // perguntas ao cliente


const respostas = [] // armazenar as respostas recebidas 

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " >")

}

process.stdin.on('data', data => {

    respostas.push(data.toString().trim())
    if (respostas.length < questions.length) { // se for menor que a quantidade de perguntas roda ate que todas as perguntas tenham sido respondidas
        ask(respostas.length)

    } else {
        // console.log(respostas)
        excluir()
    }

})

process.on('write', () => {

    console.log(`
    
    Obrigada por preencher \n

    Seu nome: ${respostas[0]}
    seu email: ${respostas[1]}
    CPF ou CNPJ: ${respostas[2]}
    Numero de telefone: ${respostas[3]}
    CEP: ${respostas[4]}
    Logradouro: ${respostas[5]}
    Numero: ${respostas[6]}
    Bairro: ${respostas[7]}
    Cidade: ${respostas[8]}
    Estado: ${respostas[9]}
    
    
    `)


})

const excluir = () => {
    process.stdin.on('data',data => {
        console.log(`\n\nDigite o numero correspondente a instancia que você deseja excluir.\n `)
        

            return questions
        } // Função para excluir 

    )}



        ask();