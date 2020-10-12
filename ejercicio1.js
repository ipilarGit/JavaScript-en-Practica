const validarFormulario = (nombre, asunto, mensaje) => {
  let validacion = true;

  let validaNombre = /[a-zA-Z]/gim;
  if (validaNombre.test(nombre) == false) {
    let errorNombre = document.querySelector(".errorNombre");
    errorNombre.innerHTML = "El nombre es requerido";
    validacion = false;
  }

  let validaAsunto = /[a-zA-Z]/gim;
  if (validaAsunto.test(asunto) == false) {
    let errorAsunto = document.querySelector(".errorAsunto");
    errorAsunto.innerHTML = "El asunto es requerido";
    validacion = false;
  }

  let validaMensaje = /[a-zA-Z]/gim;
  if (validaMensaje.test(mensaje) == false) {
    let errorMensaje = document.querySelector(".errorMensaje");
    errorMensaje.innerHTML = "El mensaje es requerido";
    validacion = false;
  }
  return validacion;
};

const limpiarErrores = () => {
  let errorNombre = document.querySelector(".errorNombre");
  errorNombre.innerHTML = "";

  let errorAsunto = document.querySelector(".errorAsunto");
  errorAsunto.innerHTML = "";

  let errorMensaje = document.querySelector(".errorMensaje");
  errorMensaje.innerHTML = "";
};

const resultadoExitoso = () => {
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = "Mensaje enviado con éxito!!!";
};

let form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;

  limpiarErrores();

  let validacion = validarFormulario(nombre, asunto, mensaje);
  console.log(nombre);
  console.log(asunto);
  console.log(mensaje);

  if (validacion == true) {
    resultadoExitoso();
  }
});
