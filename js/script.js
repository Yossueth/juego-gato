let btn = document.querySelectorAll(".btn");
let jugador = "O";
// if (jugador == "O") {jugador = X } else {jugador = "O"} 
// funcion de las x/o y que no se repitan
for (let index = 0; index < btn.length; index++) {
  btn[index].addEventListener("click", function () {
    if (btn[index].innerHTML === "") {
      if (btn[index] !== '') {        //Se valida si la casilla no está vacía
        btn[index].innerHTML = "X"
        setTimeout(computadora, 600) //tiempo de respuesta del bot despues de que el jugador de click
      }
      mostrarTexto.innerHTML = "turno X" 
    }
    verificarGanador()
   } 
)}
//revicion de que hay espacios vacios para que el bot pueda marcar 
function computadora() {
  let posicionesValidas = false;
  for (let i = 0; i < btn.length; i++) {
     if (btn[i].innerHTML == "") {
       posicionesValidas = true
    } }
  //el bot marca en un espacio random y que el espacio este vacio  
  while (posicionesValidas == true) {
    posicion = Math.floor(Math.random() *9);
    if (btn[posicion].innerHTML == "") { 
      btn[posicion].innerHTML = "O"
      posicionesValidas = false
      mostrarTexto.innerHTML = "turno O" 
      verificarGanador()
    }
  }}
//verificar ganador 
let winner = false;
function verificarGanador() {
  const tablero = Array.from(btn).map(btn => btn.textContent); // cambio el querySelectorAll a un array 
  console.log(tablero)
// verificacion victorias  horizontales 
// basicamente lo que hace es comparar una por una de los espacios horizontales
// y si hay 3 que tienen el mismo simbolo lo da como ganador 
  for (let i = 0; i < 9; i+= 3) {
    if (tablero[i] && tablero[i] === tablero[i+1] && tablero[i] === tablero[i+2]) { 
      winner = true
    } 
  }
// verificacion victorias verticales
// basicamente lo que hace es comparar una por una de los espacios verticales
// y si hay 3 que tienen el mismo simbolo lo da como ganador 
for (let i = 0; i < 9; i++) {
  if (tablero[i] && tablero[i] === tablero[i+3] && tablero[i] === tablero[i+6]) {
    winner = true
  } 
}
// verificacion victorias diagonales 
  if (tablero[0] && tablero[0] === tablero[4] && tablero[0] === tablero[8]) { // este verifica que la casilla 0, 4 y 8 sean iguales y si cumplen con eso ese el el que gano 
    winner = true
}
  if (tablero[2] && tablero[2] === tablero[4] && tablero[2] === tablero[6]) { // este verifica que la casilla 2, 4 y 6 sean iguales y si cumplen con eso ese el el que gano 
    winner = true
} 
if (winner === true) { 
  etiq.innerHTML="GANASTE"  // <-- eso envia ua alerta cuando alguien gane 
  document.getElementById("capa").style.display = "block"; // capa lo que hace es que cuando alguien gana no se pueda segur jugando 
}
// verificacion de empate
if (tablero.includes("")) return; // lo que hace es revisar si hay casillas desocupadas 
empate.innerHTML="empate"    // y cuando detecta que ya no hay casillas desocupadas y nadie gano tira el empate
}
// boton de reinicio
let btnReiniciar = document.querySelector("button");
btnReiniciar.addEventListener("click", function () {
  window.location.reload()
});  
//Operador ternario
//condición ? expr1 : expr2
//Donde condicion es la validacio  o comparación
// el simbolo ? se lee como: "Entonces"
// despues del simbolo ? se pone la opcion true
// los : se lee como el: "Si no" o "Else"
// despues de los : punto se pone la opcion false.