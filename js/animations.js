// ==========================================
// SISTEMA DE ANIMACIONES PARA CORAZONES
// ==========================================

// Crear corazones flotantes en el fondo
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;

    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';

        container.appendChild(heart);

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 13000);
    }, 800);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
});

// ==========================================
// ANIMACIÓN DE TEXTO SECUENCIAL
// ==========================================
function animateText(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';

    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// ==========================================
// CONTADOR ANIMADO
// ==========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ==========================================
// REVEAL ON SCROLL
// ==========================================
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// Inicializar reveal on scroll
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealOnScroll);
} else {
    revealOnScroll();
}
