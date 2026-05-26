document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const secciones = document.querySelectorAll(".seccion");
    const enlacesNav = document.querySelectorAll(".nav-item");
 
    // Función para verificar si una sección está en el viewport
function mostrarSecciones() {
    secciones.forEach((seccion) => {
        const distanciaDesdeTop = seccion.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;

        // Si la sección está a la vista, agrega la clase "visible"
        if (distanciaDesdeTop < alturaVentana - 100) {
            seccion.classList.add("visible");
        }
    });
}

// Función para manejar el clic en los enlaces del menú
enlacesNav.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        
        const destinoId = enlace.getAttribute("href").substring(1); // Obtiene el id de destino
        const destino = document.getElementById(destinoId);

        // Scroll suave al elemento destino
        destino.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Llama a la función mostrarSecciones al hacer scroll
window.addEventListener("scroll", mostrarSecciones);

// Llama a la función una vez al cargar la página (para las secciones visibles inicialmente)
mostrarSecciones();

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

});
