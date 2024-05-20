let btn = document.querySelectorAll(".btn");
let jugador = "O";


//Operador ternario
//condición ? expr1 : expr2
//Donde condicion es la validacio  o comparación
// el simbolo ? se lee como: "Entonces"
// despues del simbolo ? se pone la opcion true
// los : se lee como el: "Si no" o "Else"
// despues de los : punto se pone la opcion false.


btn[0].addEventListener("click", function () {
  if (btn[0].innerHTML == "") {
    btn[0].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
  }
});

btn[1].addEventListener("click", function () {
    if (btn[1].innerHTML == "") {
        btn[1].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
      }
});

btn[2].addEventListener("click", function () {
   if (btn[2].innerHTML == "") {
    btn[2].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
  }
});

btn[3].addEventListener("click", function () {
    if (btn[3].innerHTML == "") {
        btn[3].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
      }
});

btn[4].addEventListener("click", function () {
    if (btn[4].innerHTML == "") {
        btn[4].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
      }
});

btn[5].addEventListener("click", function () {
    if (btn[5].innerHTML == "") {
        btn[5].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
      }
});

btn[6].addEventListener("click", function () {
    if (btn[6].innerHTML == "") {
        btn[6].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
      }
});

btn[7].addEventListener("click", function () {
 if (btn[7].innerHTML == "") {
    btn[7].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
  }
});

btn[8].addEventListener("click", function () {
    if (btn[8].innerHTML == "") {
        btn[8].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
      }
});

// boton de reinicio
let btnReiniciar = document.querySelector('button')
btnReiniciar.addEventListener('click', function () {
    for (let index = 0; index < btn.length; index++) {
         btn[index].innerHTML = "";
    }
})

