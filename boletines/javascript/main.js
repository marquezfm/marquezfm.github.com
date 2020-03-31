//DOM
// querySelector y querySelectorAll

/*
let links = document.querySelectorAll("a");

links.forEach(function(link) {
    console.log(link);
});
*/

// Obtiene los elementos de .close
let links = document.querySelectorAll(".close");

// Agrega un evento a los clics
links.forEach(function(link) {
    link.addEventListener("click", function(ev) {
        ev.preventDefault()

        let content = document.querySelector(".content");

        // Quita las clases de animación
        content.classList.remove("fadeInDown")
        content.classList.remove("fadeInUp")
        content.classList.remove("fadeInRight")
        content.classList.remove("fadeInLeft")
        content.classList.remove("fadeIn")
        content.classList.remove("animated")

        // Agregar clases de animación de salida
        content.classList.add("fadeOutUp")
        content.classList.add("fadeOutUp")
        content.classList.add("fadeOutUp")
        content.classList.add("fadeOutUp")
        content.classList.add("fadeOutUp")
        content.classList.add("animated")

        setTimeout(function() {
            location.href = "/";
        }, 600);

        return false;
    })
});