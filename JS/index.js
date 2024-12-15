document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carruselContainer = document.querySelector('.carrusel-container');
    const carruselItems = document.querySelectorAll('.carrusel-item');
    const totalItems = carruselItems.length;
    let index = 1;
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

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
