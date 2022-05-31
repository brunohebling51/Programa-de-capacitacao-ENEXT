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

// let data = new Date();
// new Date(valor);
// new Date(dataString);
// new Date(ano, mes, dia, hora, minuto, segundo, milisegundo);

// console.log(data);

// ---------------------------------------------------------------------------------- //

// funcao entrar

// function entrar() {
//     let area = document.getElementById('area');
//     let texto = prompt('Digite seu nome');

//     if (texto == '' || texto == null) {
//         alert('Digite seu nome novamente!');
//         area.innerHTML = 'Bem vindo ...';
//     } else {
//         area.innerHTML = 'Bem vindo ' + texto;

//     }
// }


// function entrar2(nome) {
//     let area = document.getElementById('area2');
//     let texto = prompt('Digite seu sobrenome');
//     area.innerHTML = nome + " " + texto;
// }

// function entrar3(idade) {
//     let area = document.getElementById('area3');
//     let texto = parseFloat(prompt('Digite sua idade'));
//     area.innerHTML = nome + idade + " " + texto;
// }
// ---------------------------------------------------------------------------------- //

// arrays

// let lista = ["Bruno", "Fernandes", "Hebling", 25];

// loop while e for
// while = enquanto.
// x = 0; 

// while (x < 10) {
//      document.write("</br> O valora do X é: " + x);
//      x++; // e igual a x = x + 1

// }

// loop for
// for = para

// for (a = 0; a <br 10; a++) {
//     document.write("</br> O valora do A é: " + a);

// }

// switch 
// document.write("</br> escolha seu pedido: </br>");
// document.write("</br> 0 - Sorvete / 1 - Suco </br>");
// document.write("</br> 2 - Coca Cola / 3 - Agua </br>");

// function pedir() {
//     x = prompt("O que deseja pedir?");

//     switch (x) {
//         case "0":
//             alert("Voce pediu um Sorvete");
//             break;
//         case "1":
//             alert("Voce pediu um Suco")
//             break;
//         case "2":
//             alert("Voce pediu uma Coca gelada")
//             break;
//         case "3":
//             alert("Voce pediu uma Agua")
//             break;
//         default:
//             alert("Não temos essa opção!")
//     }
// }

// eventos / mouse / teclado / pagina / formulario e outros 
//evento de mouse
//apertou o mouse
// function apertoumouse() {
//     console.log("o mouse foi apertado");
// }

// // mouse up, soltar o mouse

// function solteiOmouse() {
//     console.log("Soltei o botao do mouse");
// }

// // mouse over, quando passa o mouse

// function passouOmouse() {
//     console.log("Passei o mouse encima do botao");
// }

// // mouse out, quando tira o mouse de cima

// function tirouOmouse() {
//     console.log("Tirou o mouse de cima");
// }

// // mouse move, quando voce move o mouse

// function movendoOmouse() {
//     console.log("Mexendo sob o botao");
// }

// // On click

// function onClick(){
//     console.log("Voce clicou no botao");
// }

// // Context menu

// function botaoDireito() {
//     console.log("Voce clicou com o botao direito");
//     return false; // no js e no html faz com que nao seja possivel clicar com o botao direito no icone botao
// }
// evento de teclado / precisar passar um evento na funcao (event)

// onkeydown e para quando segura a tecla apertada / event.keyCode exibe o codigo da letra apertada ctrl,shift.key retorna boleano
// function tecladoApertado(event) {
//     console.log("Teclado apertado" + event.shiftKey);
// }

// onkeyup, quando tira o dedo da tecla do mouse

// function soltouOteclado(event) {
//     console.log("Soltou o teclado!");
// }

// onkeypress, quando aperta alguma tecla no teclado

// function apertounoteclado(event) {
//     console.log("apertou uma tecla");
// }

// evento de pagina
// evento onload dentro do body, carrega a pagina // onunload no momento que sai da pagina


// function carregou() {
//     alert("pagina foi carregada");
// }

// eventos de formulario
// onfocus - funcao que exibe para focar algo, no caso um input e onblur e para quando sai o foco, desfocado no caso
// function focado() {
//     console.log("Campo Focado!");
// }

// function desfocado() {
//     console.log("Desfocou do campo")
// }

// onchange="opcaoSelecioanda(this)" para mostrar o objeto selecionado, recebe por parametro this para identificar a selecao
// concatenando a string com objeto.value, mostra qual foi a opcao selecionada

// function opcaoSelecionada(objeto) {
//     console.log("Voce selecionou " + objeto.value);
// }

// na opcao de enviar, utiliza onsubmit 

// jogo balao ------------------------- joao balao //

// 1 Criar o balao
// 2 Estourar o balao
// 3 Carregar o jogo, precisa da onload no body para carregar o jogo com as funcoes

// let total = 0; // variavel que vai contar o score da pontuacao

// function criarBalao() {
//     let balao = document.createElement("div");
//     balao.setAttribute("class", "balao");

//     let x = Math.floor(Math.random() * 600);
//     let y = Math.floor(Math.random() * 400);

//     // <div class="balao" style="left:30; top: 60px"></div>
//     balao.setAttribute("style", "left:" + x + "px;top:" + y + "px;")
//     balao.setAttribute("onclick", "estourar(this)");

//     document.body.appendChild(balao);

// }
// // removechild serve para remover um objeto
// function estourar(objeto) {
//     document.body.removeChild(objeto);
//     total++; // mesma coisa que total = total + 1;
//     let score = document.getElementById("total")
//     score.innerHTML = "Baloes estourados: " + total;
// }

// function carregarJogo() {
//     setInterval(criarBalao, 1000);
// }

// manipulacao de data


// validacao de formulario

// function validar() {
//     let valor = document.getElementById("numero").value;
//     let nomeValor = document.getElementById("nome").value;

//     if (valor.length  > 2) {
//         alert("Digite dois numeros ou menos");
//         document.formulario.numero.focus();
//         return false;
//     } else if (nomeValor.length < 3) {
//         alert("Digite um nome maior!");
//         return false;
//     } else {
//         alert("Formulario enviado com sucesso!");
//         return true;
//     }
// }

// criando calculadora IMC

/* 
Colinha IMC
Abaixo de 17   Muito abaixo do peso
Entre 17 e 18,49   Abaixo do peso
Entre 18,5 e 24,99  Peso normal
Entre 25 e 29,99  Acima do peso
peso/(altura*altura);
*/

let peso;
let altura;
let imc;
let resultado;

function calcular() {
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    imc = peso/(altura*altura);
    if (imc < 17) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc;
        return false;
    }

}