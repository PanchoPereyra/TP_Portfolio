
document.querySelector("#scroll-arriba").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


//===================== Para cambiar a modo oscuro =====================
// let modoOscuro=document.getElementById("modoOscuro")
// function cambiarFondo(){
//   document.body.style.backgroundColor="black"
//   document.body.style.color="white" // Cambia el color de las letras a blanco
// }

//===================== Condicionales para que cambie de modo al hacer clic =====================
let modoOscuroActivo = false;

function cambiarFondo() {
  if (modoOscuroActivo) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.documentElement.style.backgroundColor = "white"; // Cambia el fondo de <html>
    document.documentElement.style.color = "black";           // Cambia el color de texto de <html>
    modoOscuroActivo = false;
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.documentElement.style.backgroundColor = "black";
    document.documentElement.style.color = "white";
    modoOscuroActivo = true;
  }
}

modoOscuro.addEventListener('click',cambiarFondo)
