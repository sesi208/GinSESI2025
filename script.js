document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.getElementById('carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    let slideInterval;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    nextBtn.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    prevBtn.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    // Inicia o carrossel automático
    startSlideShow();
});
