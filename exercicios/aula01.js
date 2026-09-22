// Aula 01 - Um botao que lembra
// Responda abaixo. Mantenha os marcadores e nao apague os enunciados.

// ex1
// Escreva a linha que cria uma variavel chamada visto guardando o valor falso.
let visto = false;

// ex2
// Diga o que cada comparacao devolve, true ou false:
//   5 === 5
//   "5" === 5
//   "5" == 5
//   true === false
5 === 5 -> true

"5" === 5 -> false

"5" == 5 -> true

true === false -> false

// ex3
// O trecho abaixo roda sem dar erro, mas apoiar um cartao bagunca os outros.
// Diga por que, e escreva a correcao.
//
//   let apoiado = false;
//
//   document.querySelectorAll(".apoiar").forEach(function(botao) {
//     botao.addEventListener("click", function() {
//       // ...
//     });
//   });
document.querySelectorAll(".apoiar").forEach(function(botao) {
  let apoiado = false;

  botao.addEventListener("click", function() {
    // ...
  });
});

// ex4
// Complete o if/else para o botao voltar a dizer Apoiar quando o apoio for retirado.
//if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
//     botao.textContent = ______________;
//   }
botao.textContent = "Apoiar";
//   if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
//     botao.textContent = ______________;
//   }


// ex5
// Este exercicio eh feito no index.html, nao aqui.
// Acrescente ao Radar um quarto cartao, com um problema real da sua escola,
// e faca o botao dele funcionar igual aos outros.
// Escreva aqui, em uma linha, o que voce mudou na pagina.
Adicionei um novo HTML de cartão contendo um parágrafo com o problema "Falta de ventilação nas salas" e um botão com a classe .apoiar.

// ex6
// Um cartao precisa nascer ja apoiado: contagem em 1 e botao escrito Apoiado.
// O que voce mudaria no JavaScript para ele funcionar direito desde o primeiro clique?
// E por que a sua solucao nao serve para os outros cartoes?
O que mudar: Inicializar a variável de controle desse cartão específico como true (let apoiado = true;).

Por que não serve para os outros: Os outros cartões começam no estado desapoiado. Se inicializarmos apoiado = true para eles, o primeiro clique faria a lógica de desapoiar, invertendo o comportamento esperado.