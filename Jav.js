//Exercicio 1 -----------------------------------------------------
function umParametro(valorp){
    let positivo = "P"
    let negativo = "N"
    if(valorp >= 0){
        return positivo 
    }
    if(valorp <= 0){
        return negativo
    }
}
console.log(umParametro(1))

//Exercicio 2 -----------------------------------------------------
function digitos(num){
    let digit1 = "1 digitos"
    let digit2 = "2 digitos"
    let digit3 = "3 digitos"
    if(num < 10){
        return digit1 
    }
    if(num < 100){
        return digit2
    }
    if(num < 1000){
        return digit3
    }
}
console.log(digitos(999))

//Exercicio 3 ------------------------------------------------------
function somativa(number1,number2){
    let soma = number1+number2
    let falha = "Primeiro numero não é maior que o segundo"
    if(number1 > number2 ){
        return soma
    }
    else{return falha}
}
  console.log(somativa(1,9))  

//Exercicio 4 -------------------------------------------------------
/* function verdadeOuMentira(palavra1,letra1){
    let verdade = true
    let mentira = false
    if(palavra1 = letra1){
        return verdade
    }
    else{return mentira}
}
console.log(verdadeOuMentira("Carro","c"))
 */

//Exercicio 5 ---------------------------------------------------------
function horaDeAtendimento(horaAtendimento){
    let aberto = "O /pergunta está em horário de funcionamento." 
    let fechado = "O /pergunta não está em horário de funcionamento."
    if(horaAtendimento >= 11 && horaAtendimento <=23){
        return aberto
    }
    else{return fechado}
}
console.log(horaDeAtendimento(9))