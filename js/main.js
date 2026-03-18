/**
 * 🎓 SISTEMA GESTIÓN DOCENTE UTC
 * Script Principal para interactividad y animaciones
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer para animaciones al hacer scroll (AOS manual)
    const animateElements = document.querySelectorAll('.integrante, .bubble, .img-card, .matriz-container, .codigo-explicacion, .gantt-visual');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small stagger delay based on index for siblings
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100); // 100ms stagger
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Preparar elementos ocultos
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.95)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        elementObserver.observe(el);
    });

    // 3. Interactividad interactiva en las tarjetas del equipo
    const integrantes = document.querySelectorAll('.integrante');
    integrantes.forEach(card => {
        card.addEventListener('click', function () {
            // Animación de 'pop' al clickear
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    console.log("🚀 Sistema de Gestión Docente UTC Inicializado Correctamente.");
});
