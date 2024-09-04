ceroPantalla();
let operacionRealizada = false;
let punto= false;
botones = document.querySelectorAll(".btn");
botones.forEach(function (boton) {
  boton.addEventListener("click", () => {
    valor = boton.value;
    if (valor === "all-clear") {
      ceroPantalla();
    } else if (valor === "=") {
      operacionRealizada = resolverOp();
      return operacionRealizada;
    } else {
      if (isNaN(parseInt(valor))) {
        operacionRealizada = false;
      }
      getValue(valor, operacionRealizada);
    }
  });
});

function getValue(buttonValue) {
  var screen = document.getElementById("screen").value;
//!control de puntos
if ((buttonValue === ".") && (screen.substring(screen.length - 1, screen.length) === ".")) {
    screen = screen.substring(0, screen.length - 1);
}
//! no permite escribir más de 2 simbolos de división o multiplicación seguidos
if ((buttonValue === "/") && (screen.substring(screen.length - 1, screen.length) === "/")) {
    screen = screen.substring(0, screen.length - 1);
}
if ((buttonValue === "*") && (screen.substring(screen.length - 1, screen.length) === "*")) {
  screen = screen.substring(0, screen.length - 1);
}

  //*si ya se hizo una operación previa este bloque evita que se concatene el nuevo numero ingresado en pantalla al resultado anterior
  if (screen === "0" || operacionRealizada === true) {
    if (buttonValue != ".") {
      screen = "";
      operacionRealizada = false;
    }
  }
  //*borra el cero si va antes de otro número y después de un signo, genera error en las restas
  if (
    screen.substring(screen.length - 1, screen.length) === "0" &&
    !isNaN(parseInt(buttonValue)) &&
    isNaN(parseInt(screen.substring(screen.length - 2, screen.length - 1))) && (screen.substring(screen.length - 1, screen.length)===".")
  ) {
    screen = screen.substring(0, screen.length - 1);
  }
  document.getElementById("screen").value = screen + buttonValue;
}

function ceroPantalla() {
  document.getElementById("screen").value = "0";
}

function resolverOp() {
  var screen = document.getElementById("screen").value;
  try {

  var screen = (document.getElementById("screen").value = eval(screen));}
  catch (error) {
    document.getElementById("screen").value = "Error!";
    setTimeout(() => { ceroPantalla(); }, 2000);
  }
  return true;
}
