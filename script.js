//Tipagem dinâmica 
//let idade;

//idade = 'Pedro'

//console.log(idade);

//Objetos
//const pessoa = {
//    idade: 10,
//    Nome: 'Pedro',
//    Sobrenome: 'Fagundes',
//}

//console.log(pessoa)

//array
//let idade2 = [1,2,3,4]
//for(i = 0;i<idade2.length;i++){
  //  console.log(idade2[i]);
//}


//Funções
/*
let corSite = 'Azul'
function resetaCor(cor){

    corSite = cor;

}

console.log(corSite);

resetaCor("Vermelho");

console.log(corSite);

*/

//operador ternario
/*
let pontos = 100;
let tipo = pontos >= 100 ? 'preimum' : 'comum';

console.log(tipo)
*/

//switch
/*
let permissao;
permissao = 'comun';

switch(permissao){
    case 'comun': 
    console.log('É um usuario comun');
    break;

    case 'premiun':
    console.log('É um usuario comun')
    break;

    default: 
    console.log('Usuario nao reconhecido')
}
*/


//Loop
for(let i = 0; i < 10;i++){
    console.log(`${i},` + `${i}`)
}

let pessoa = {
    nome: 'Pedro',
    idade: 10
};

let cor = ['azul','preto','vermelho'];

for(let i of cor ){
    console.log(i)
}

function maiorNumero(numero1,numero2){
    return numero1 > numero2 ? numero1: numero2;
}
console.log(maiorNumero(21,20))



function bizzBuzz(valor){
    if(valor % 3 == 0 && valor % 5 == 0 ){
        return "Fizz-Buzz"
    }else if(valor % 3 == 0 && valor % 5 == 1){
        return 'Fizz'
    }else if(valor % 3 == 1 && valor % 5 == 1){
        return 'Buzz'
    }else if(valor != 'number'){
        return 'Não é numero';
    }else{
        return null;
    }
}

console.log(bizzBuzz('porco'))

let idade = 10;