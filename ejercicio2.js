let botones = document.getElementsByTagName("button");

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", () => {
    let backgroundColor = botones[i].style.backgroundColor;
    let caja = document.getElementById("caja");
    caja.style.backgroundColor = backgroundColor;
  });
}
