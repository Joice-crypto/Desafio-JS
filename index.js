
// Rodar com node index.js 

const readlineSync = require("readline-sync");


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
    process.stdout.write("\n" + questions[index] + " >") // exibir as perguntas uma a uma

}

process.stdin.on('data', data => {

    respostas.push(data.toString().trim())
    if (respostas.length < questions.length) { // se for menor que a quantidade de perguntas roda ate que todas as perguntas tenham sido respondidas
        ask(respostas.length)

    } else {
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
        excluir()

    }

})



const excluir = () => {

    //o usuario digite um numero 
    // o numero que esse usuario digitar vai apagar no questionario uma pergunta

    const number = readlineSync.question(' Digite o numero correspondente a pergunta que você deseja excluir  ');
    apagar = parseInt(number)

    switch (apagar) {
        case 1:
            questions.splice(0, 1);
            console.log("Removido com sucesso!\n" + questions)
            process.exit() // Começando na posição do índice 0, remova um elemento e assim em diante
            break;
        case 2:
            questions.splice(1, 1);
            console.log("Removido com sucesso!\n" + questions)
            process.exit()

            break;
        case 3:
            questions.splice(2, 1);
            console.log("Removido com sucesso!\n" + questions)
            process.exit()
            break;
        case 4:
            questions.splice(3, 1);
            console.log("Removido com sucesso!\n" + questions)
            process.exit()
            break;
        case 5:
            questions.splice(4, 1);
            console.log("Removido com sucesso!\n" + questions)
            process.exit()
            break;
        case 6:
            questions.splice(5, 1);
            console.log("Removido com sucesso!\n" + questions)
            process.exit()
            break;
        case 7:
            questions.splice(6, 1);
            console.log("Removido com sucesso!\n" + questions)
            process.exit()
            break;
        case 8:
            questions.splice(7, 1);
            console.log("Removido com sucesso!\n" + questions)
            process.exit()
            break;
        case 9:
            questions.splice(8, 1);
            console.log("Removido com sucesso!\n" + questions)
            process.exit()
            break;
        case 10:
            questions.splice(9, 1);
            console.log("Removido com sucesso!\n" + questions)
            process.exit()
            break;

    }

}



ask();