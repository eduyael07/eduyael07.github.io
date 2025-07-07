// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

  // Selecciona todos los enlaces del menú que tengan el atributo 'data-section'
  const enlaces = document.querySelectorAll('.menu a[data-section]');

  // Selecciona todas las secciones dentro del <main>
  const secciones = document.querySelectorAll('main section');

  // Función que muestra una sección específica y oculta las demás
  function mostrarSeccion(id) {
    secciones.forEach(seccion => {
      if (seccion.id === id) {
        // Si el id coincide, muestra la sección
        seccion.classList.add('activa');
      } else {
        // Si no, se asegura de que esté oculta
        seccion.classList.remove('activa');
      }
    });
  }

  // Asigna un evento click a cada enlace del menú
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault(); // Evita el comportamiento por defecto (navegar a #)

      // Obtiene el nombre de la sección desde el atributo 'data-section'
      const seccion = enlace.getAttribute('data-section');

      // Muestra esa sección en pantalla
      mostrarSeccion(seccion);

      // Guarda la sección activa en localStorage para recordar la selección
      localStorage.setItem('seccionActiva', seccion);
    });
  });

  // Al cargar la página, recupera la última sección activa desde localStorage
  // Si no existe ninguna guardada, se muestra por defecto la sección 'resumen'
  const guardada = localStorage.getItem('seccionActiva') || 'resumen';
  mostrarSeccion(guardada);
});
