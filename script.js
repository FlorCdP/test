// Cambiar color de fondo
const changeColorBtn = document.getElementById('changeColorBtn');
const colors = ['#ffffff', '#e8f4f8', '#f0e8f8', '#f8f0e8', '#e8f8f0'];
let currentColorIndex = 0;

changeColorBtn.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentColorIndex];
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mensaje de bienvenida en consola
console.log('¡Bienvenido a Mi Web! 🚀');
