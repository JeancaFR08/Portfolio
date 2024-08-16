document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a.nav-link');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            // Previene el comportamiento predeterminado del enlace
            e.preventDefault();

            // Obtiene el valor del atributo href
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Realiza el desplazamiento suave
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });

                // Actualiza la URL con el hash de la sección
                history.pushState(null, null, `#${targetId}`);
            }
        });
    }
});
