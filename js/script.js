// Smooth scroll para los enlaces anclados
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



// Carrusel automático
const carouselImages = document.querySelector('.carousel-images');
if (carouselImages) {
    let index = 0;
    const slides = carouselImages.children.length;

    setInterval(() => {
        index++;
        if (index >= slides) index = 0;
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // Cambia cada 3 segundos
}
