
//Cálculo de média
/*function media(nota1,nota2){
    

let total=(nota1+nota2)/2;
console.log(`O resultado da sua média é: ${total}`)

if(total==10){
    console.log('Uau Média nota 10 Parabéns, aprovadíssimo')
}else if(total>=7&&total<10){
console.log('Parabéns voce foi aprovado')
}else if(total<7&&total>=4){
    console.log('Infelizmente você não foi aprovado, aguarde a recuperação')
}else if(total<4){
    console.log('Impressionante, você foi tão incompetente que não pôde sequer fazer a recuperação, mais sorte próximo ano')
}
}
media(2,2);

*/
//Jogo da adivinhação
/*
function RandomNumber(){
    let count=1;
    let match = Math.round(Math.random()*10)
    console.log(match);
    while (true) {
        let result = prompt('Adivinhe um número aleatório: (entre 0 e 10)');
        console.log(match, result);

        if (result === null) {
            // Se o usuário pressionar Cancelar, encerramos o jogo
            alert('Jogo encerrado.');
            break;
        }

        result = parseInt(result);

        if (isNaN(result) || result < 0 || result > 10) {
            alert('Por favor, digite um número válido entre 0 e 10.');
        } else if (result === match) {
            alert(`Parabéns! Você acertou o número em ${count} tentativa(s).`);
            break;
        } else {
            count++;
            alert('Tente novamente.');
        }
    }
}
RandomNumber()
*/
//Lista de compras
/*
let option
let items = []

while(option != 3) {

  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))
  
  
  if(option == 1) {
    items[index] = prompt("Digite o nome do item")
    index++
  }
  
  else if (option == 2) {
  
    if(items.length == 0) {
      alert("Não existem itens cadastrados")
    } else {
      alert(items)
    }
  
  } else {
    alert("Tchau")
  }
  
  console.log(option, items)

}   
*/
//Calculadora
/*
function calc(){
    let number1 = prompt('Digite o primeiro operador')
    let number2 = prompt('Digite o segundo operador')
  let operação= prompt(`
  Digite um número para uma determinada operação algébrica
  1:Soma
  2:Subtração
  3:Multiplicação
  4:Divisão
  5:Resto da divisão
  `)
  if(operação==1){
    alert(`O valor da operação é ${Number(number1)+Number(number2)}`)
  }else if(operação==2){
    alert(`O valor da operação é ${Number(number1)-Number(number2)}`)
  }else if(operação==3){
    alert(`O valor da operação é ${Number(number1)*Number(number2)}`)
  }else if(operação==4){
    alert(`O valor da operação é ${Number(number1)/Number(number2)}`)
  }else if(operação==5){
    alert(`O valor da operação é ${Number(number1)%Number(number2)}`)
  }
}
calc()
*/
//Analisador de elementos
/*
function AnalyseNumber(){
  let x = prompt('Insira qualquer coisa aqui e eu digo se é número ou não')
  if(isNaN(x)||x==null){
    alert('não é um número')
  }else{
    alert('é um número :)')
  }
  console.log(typeof(x))
}
AnalyseNumber();
*/
//Analisador de Booleanos
/*
function AnalyseBoolean() {
  let y = prompt('Insira um valor booleano (true/false) ou não');
  
  if (y === 'true' || y === 'false'|| y===0||y===1) {
    alert('É booleano');
  } else {
    alert('Não é booleano');
  }
}

AnalyseBoolean();
*/
//Par ou não
/*
function IsPair(){
  let w = prompt('Insira um número e veja se ele é par ou não')
  Number(w);
  if(isNaN(w)){
    alert('Não é número')
  }else if(w%2==0){
alert('É par')
  }else if(w%2==1){
    alert('Não é par')
  }
}
IsPair();
*/