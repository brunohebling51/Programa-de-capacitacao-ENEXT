// function calculo(numero) {
//     return numero * numero;
// }
// console.log(calculo(12));

// const meuCabecalho = document.querySelector('h1');
// meuCabecalho.textContent = 'Ola mundo!'; (com esse codigo e possivel trocar algum argumento ex: h1 e mudar o texto)

// let n = 3;
// n === 4; (declara uma variavel e com o sinal de === retorna um booleano, falso ou verdadeiro)

// function multiplica(num1, num2) {
//     let resultado = num1 * num2;
//     return resultado;
// }
// console.log(multiplica);

// let n1 = 1;
// let n2 = 12;

// function multiplica(n1, n2) {
//     let n = n1 * n2;
//     if(n > 10){
//         console.log('maior que dez');
//     } else {
//         console.log('menor que dez');
//     }
// }

// console.log(multiplica(n1, n2));


// ----------------------------------------------------- //
// let meuBotao = document.querySelector('button');
// let meuCabecalho = document.querySelector('h1');

// function defineNomeUsuario() {
//     let meuNome = prompt('Por favor, digite seu nome.');
//     localStorage.setItem('nome', meuNome);
//     meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
// }
// if (!localStorage.getItem('nome')) {
//     defineNomeUsuario();
// } else {
//     let nomeGuardado = localStorage.getItem('nome');
//     meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
// }

// meuBotao.onclick = function() {defineNomeUsuario();}

// ------------------------------------------------------- //

let data = new Date();
// new Date(valor);
// new Date(dataString);
// new Date(ano, mes, dia, hora, minuto, segundo, milisegundo);

console.log(data);
