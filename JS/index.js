document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carruselContainer = document.querySelector('.carrusel-container');
    const carruselItems = document.querySelectorAll('.carrusel-item');
    const totalItems = carruselItems.length;
    let index = 1;
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

    // Clonar el primer y último elemento
    const firstClone = carruselItems[0].cloneNode(true);
    const lastClone = carruselItems[totalItems - 1].cloneNode(true);
    carruselContainer.appendChild(firstClone);
    carruselContainer.insertBefore(lastClone, carruselItems[0]);

    // Ajustar el ancho del contenedor
    const itemWidth = carruselItems[0].offsetWidth;
    carruselContainer.style.transform = `translateX(${-itemWidth * index}px)`;

    function updateCarrusel() {
        carruselContainer.style.transition = 'transform 0.5s ease';
        carruselContainer.style.transform = `translateX(${-itemWidth * index}px)`;
    }

    function resetCarrusel() {
        carruselContainer.style.transition = 'none';
        if (index === 0) {
            index = totalItems;
        } else if (index === totalItems + 1) {
            index = 1;
        }
        carruselContainer.style.transform = `translateX(${-itemWidth * index}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (index < totalItems + 1) {
            index++;
            updateCarrusel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateCarrusel();
        }
    });

    carruselContainer.addEventListener('transitionend', resetCarrusel);

});
