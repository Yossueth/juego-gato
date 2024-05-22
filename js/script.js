let btn = document.querySelectorAll(".btn");
let jugador = "O";

// if (jugador == "O") {jugador = X } else {jugador = "O"} 
// funcion de las x/o y que no se repitan
for (let index = 0; index < btn.length; index++) {
  console.log(btn[index]);
  btn[index].addEventListener("click", function () {
    if (btn[index].innerHTML == "") {
      btn[index].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
    }
    setTimeout(computadora, 1000)
   } 
)
}
//bot del gato 
function computadora() {
  let posicionesValidas = false;
  for (let i = 0; i < btn.length; i++) {
     if (btn[i].innerHTML == "") {
       posicionesValidas = true
    }
    
  }
  while (posicionesValidas == true) {
    posicion = Math.floor(Math.random() *9);
    if (btn[posicion].innerHTML == "") {
      btn[posicion].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
      posicionesValidas = false
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
