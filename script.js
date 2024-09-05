ceroPantalla();
let operacionRealizada = false;
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

  if (buttonValue === ".") {
    const lastNumber = screen.split(/[\+\-\*\/]/).pop(); // Obtiene el último número ingresado
    if (lastNumber.includes(".")) {
        return; // Evita agregar más de un punto en el mismo número
    }
}
  //! no permite escribir más de 2 simbolos de división o multiplicación seguidos
  if (
    buttonValue === "/" &&
    screen.endsWith("/")
  ) {
    return;
  }
  if (
    buttonValue === "*" &&
    screen.endsWith("*")
  ) {
    return;
  }

  //*si ya se hizo una operación previa este bloque evita que se concatene el nuevo numero ingresado en pantalla al resultado anterior
  if (screen === "0" || operacionRealizada === true) {

    // if(buttonValue != "/" || buttonValue != "*" || buttonValue != "+" || buttonValue != "-"){
    if(buttonValue!='.'){
      screen = "";
      operacionRealizada = false;
    }
      
  
    }
  
  

  //* Control de cero antes de otros números después de un operador
  const ultimoCar = screen.slice(-1); // Último carácter en la pantalla
  const penultimoCar = screen.slice(-2, -1); // Penúltimo carácter

  if (
    ultimoCar === "0" && 
    !isNaN(buttonValue) && // Si el nuevo valor es un número
    (penultimoCar === "/" || penultimoCar === "*" || penultimoCar === "+" || penultimoCar === "-")
  ) {
    // Si hay un cero después de un operador, reemplaza el cero con el número
    screen = screen.slice(0, -1);
  }

  document.getElementById("screen").value = screen + buttonValue;
  console.log(screen + buttonValue);
}

function ceroPantalla() {
  document.getElementById("screen").value = "0";
}

function resolverOp() {
  var screen = document.getElementById("screen").value;
  try {
    var screen = (document.getElementById("screen").value = eval(screen));
  } catch (error) {
    document.getElementById("screen").value = "Error!";
    setTimeout(() => {
      ceroPantalla();
    }, 2000);
  }
  return true;
}
