let btn = document.querySelectorAll(".btn");
let jugador = "O";

// if (jugador == "O") {jugador = X } else {jugador = "O"} 
// funcion de las x/o y que no se repitan
for (let index = 0; index < btn.length; index++) {
  btn[index].addEventListener("click", function () {
    if (btn[index].innerHTML == "") {
      btn[index].innerHTML = "X"
    }
    setTimeout(computadora, 600) //tiempo de respuesta del bot despues de que el jugador de click
    verificarGanador()
   } 
)
}
//revicion de que hay espacios vacios 
function computadora() {
  let posicionesValidas = false;
  for (let i = 0; i < btn.length; i++) {
     if (btn[i].innerHTML == "") {
       posicionesValidas = true
    }
    
  }
  //bot que marca en un lagar random y que el espacio este vacio  
  while (posicionesValidas == true) {
    posicion = Math.floor(Math.random() *9);
    if (btn[posicion].innerHTML == "") { 
      btn[posicion].innerHTML = "O"
      posicionesValidas = false
    }
  }
}
//verificar ganador 
function verificarGanador() {
  const tablero = Array.from(btn).map(btn => btn.textContent); // cambio el querySelectorAll a un array 
  console.log(tablero)
  
// verificacion de horizontales 
  for (let i = 0; i < 9; i+= 3) {
    if (tablero[i] && tablero[i] === tablero[i+1] && tablero[i] === tablero[i+2]) { 
      console.log("ganaste")
    } 
  }
}

// boton de reinicio
let btnReiniciar = document.querySelector("button");
btnReiniciar.addEventListener("click", function () {
  for (let index = 0; index < btn.length; index++) {
    btn[index].innerHTML = "";
  }
});
     
//Operador ternario
//condición ? expr1 : expr2
//Donde condicion es la validacio  o comparación
// el simbolo ? se lee como: "Entonces"
// despues del simbolo ? se pone la opcion true
// los : se lee como el: "Si no" o "Else"
// despues de los : punto se pone la opcion false.
