//--------Questão 1. Escreve uma função que consuma a api (https://api.thecatapi.com/v1/images/0XYvRd7oD ) utilizando Promise.

import fetch from 'node-fetch';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

async function requisicaoAPI(){
const response = await fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD")
.then(response => response.json())
.then(data => {

console.log(data);

const chave = uuidv4();
const nomeArquivo = `${chave}.txt`

fs.writeFile(nomeArquivo, JSON.stringify(data), (err) => {
if (err) throw err;

console.log('dados salvos');

});
})
.catch(error => {
console.error(error);
});
}

requisicaoAPI();


//--------Questão 2. Inverta o valor de uma variável de true para false utilizando ternário

const verdadeiro = true;

const status = (verdadeiro === true) ? false : true;
console.log(status);


//----------Questão 3. De um exemplo de um objeto com Null-safe
//Explicação: Entendo como Null-safe aquilo que não pode ser nulo a menos que seja especificado ou que haja um tratamento ao nulo evitando o erro. Usei como tratamento o if.


const Dados = {
    nome: 'Vanessa',
    idade: null,
    endereco: 'Rua Dom Manuel',
};

if (idade == null){
    console.log("Idade realmente é nulo")
}   else {
    console.log("Não é nula")
}

//----------Questão 4. Percorra, ordene o array e inclua um novo elemento mantendo a ordem.

let meuArray = [1, 5 , 6, 8];

meuArray.unshift(2)

console.log(meuArray)

const ordenado = meuArray.sort();

console.log(ordenado)

//----------Questão 5. Inverta a ordem do array que você criou acima.

const reverse = meuArray.reverse();

console.log(reverse)

//----------Questão 6. Descreva com suas palavras qual a diferença entre const, var e let

//Const = Como o nome já diz, constante. é um valor atribuido que não se altera, ela também nao pode ser declarada novamente.
// let = é um valor que pode ser atualizado, mas não pode ser declarada mais de uma vez.
// var = var tem um escolpo global ou de função, isso depende do local onde ela for declarada, dentro ou fora do bloco, e pode ter seu valor atualizado. 

//----------Questão 7.Escreva um código para desenhar uma pirâmide, conforme imagem abaixo.


for (let i = 1; i <= 6; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += i;
    }
    let espacos = 6 - i;
    for (let k = 0; k < espacos; k++) {
        linha = " " + linha;
    }
    console.log(linha);
}


