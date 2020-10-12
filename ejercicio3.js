let botonSumar = document.getElementById("btn-sumar");
botonSumar.addEventListener("click", () => {
  let inputs = document.getElementsByTagName("input");
  let valor1 = Number(inputs[0].value);
  let valor2 = Number(inputs[1].value);
  let sumar = valor1 + valor2;
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = `El resultado de la suma es : ${sumar}`;
});

let botonRestar = document.getElementById("btn-restar");
botonRestar.addEventListener("click", () => {
  let inputs = document.getElementsByTagName("input");
  let valor1 = Number(inputs[0].value);
  let valor2 = Number(inputs[1].value);
  let restar = valor1 - valor2;
  let resultado = document.querySelector(".resultado");
  if (restar < 0) {
    resultado.innerHTML = `El resultado de la resta es : ${0}`;
  } else {
    resultado.innerHTML = `El resultado de la resta es : ${restar}`;
  }
});
