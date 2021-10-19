/*
//Tipagem dinâmica 
let idade;
idade = 'Pedro'
console.log(idade);
*/



/*
//Objetos
const pessoa = {
    idade: 10,
    Nome: 'Pedro',
    Sobrenome: 'Fagundes',
}
console.log(pessoa)
*/



/*
//array
let idade2 = [1,2,3,4]
for(i = 0;i<idade2.length;i++){
    console.log(idade2[i]);
}


//push, unshift, splice,pop
//const numero = [1,2,3,4,5,6]

//inserir no meio do array
//numero.splice(1,0,20)

//inserir no inicio do array
//numero.unshift(10)

//inserir no final do array
//numero.push(30)

//remover o ultimo arrya
//numero.pop()

//remover inicio do array
//numero.shift()

//procuror tipo primitivos
//console.log(numero.indexOf(6))

console.log(numero)


//apagar o array
numero.length = 0;
numero.slipe(0,numero.length)

//Combinando Array
const array1 = [1,2,3,4]
const array2 = [5,6,7,8]

//let array3 = array1.concat(array2);
//ou
//let array3 = [...array1,...array2]

console.log(array3) 


*/




/*
//Funções
let corSite = 'Azul'
function resetaCor(cor){
    corSite = cor;
}
console.log(corSite);
resetaCor("Vermelho");
console.log(corSite);
*/


/*
//operador ternario
let pontos = 100;
let tipo = pontos >= 100 ? 'preimum' : 'comum';
console.log(tipo)
*/





/*
//switch
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




/*
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

const numeros = [1,2,3,4,5]
numeros.forEach((numero,indice) => console.log(numero,indice))
*/



/*
function bizzBuzz(valor){
    if(valor % 3 == 0 && valor % 5 == 0 ){
        return "Fizz-Buzz"
    }else if(valor % 3 == 0 && valor % 5 == 1){
        return 'Fizz'
    }else if(valor % 3 == 1 && valor % 5 == 1){
        return 'Buzz'
    }else if(typeof valor !== 'number'){
        return 'Não é numero';
    }else{
        return null;
    }
}
console.log(bizzBuzz('gol'))
*/



/*
//velocidade maximo 70km
function medirVelocidade(velocidade){
    let carteira = 0;
    if(velocidade == 70){
        console.log('Você esta no limite');
    }else if( velocidade >= 70){
        let veloNova = (velocidade - 70) / 5
        console.log(`Voce ultrapassou o limite`)
        carteira += veloNova
        console.log(`Sua carteira tem ${Math.floor(carteira)} pontos`)
    }
    
}
console.log(medirVelocidade(90))
*/




/*
const filme = {
    nome: 'Harry Potter',
    preco: 20,
    ator: 'Harry',
    dia: 10
}
function exibirProprioedades(filme){
    for(let i in filme){
        if(typeof filme[i] === 'string'){
            console.log(filme[i])
           
        }
    }
}
exibirProprioedades(filme)
*/  





/*
function contarAteriscos(linhas){
    let padrao = ' ';
    for(let i = 0; i <= linhas; i++){
        padrao += '*';
        console.log(padrao)
    }
}
contarAteriscos(10)
*/



/*
//push, unshift, splice,pop
//const numero = [1,2,3,4,5,6]

//inserir no meio do array
//numero.splice(1,0,20)

//inserir no inicio do array
//numero.unshift(10)

//inserir no final do array
//numero.push(30)

//remover o ultimo arrya
//numero.pop()

//remover inicio do array
//numero.shift()

//procuror tipo primitivos
//console.log(numero.indexOf(6))

console.log(numero)
*/


/*
//encontrar objetos em um array
const marca = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];
/*
let ver =  marca.find(
        function(marca){
            return marca.nome === 'b';
        }
)

        //com arrow function
//console.log(marca.find(marca => marca.nome === 'b'));

//console.log(ver)
*/

/*
let cor = prompt('Qual sua cor preferida')
console.log(cor)
    if(cor == 'vermelho'){
        alert('Cor certa')
    }
*/

/*
let texto = document.getElementById('texto')
texto.innerHTML = 'Oi mundo'
*/
