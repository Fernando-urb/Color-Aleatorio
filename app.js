const boton = document.getElementById("boton-color");
const color = document.getElementById("color");

// boton.addEventListener("click", () => {
//     const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     document.body.style.backgroundColor = colorAleatorio;
//     color.textContent = colorAleatorio;
// });

function generarColor(){
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16);
    colorHex += digitos[index];
  }
return colorHex;
}

boton.addEventListener("click", () => {
  const colorAleatorio = generarColor();
  // actualizar el color de fondo del body
  document.body.style.backgroundColor = colorAleatorio;
  // actualizar el texto del parrafo
  color.textContent = colorAleatorio;
});