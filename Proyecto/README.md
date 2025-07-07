# Currículum Vitae Web

Versión web interactiva del CV de Eduardo Yael Jiménez Sánchez.

## 💡 Descripción

Proyecto académico para mostrar habilidades en HTML, CSS y JavaScript.

## 🚀 Funcionalidades

- Perfil profesional
- Educación, habilidades y experiencia
- Botón para descargar el CV en PDF
- Diseño responsive

# Documentación del Proyecto de CV Web

Este proyecto es una página web de un Currículum Vitae (CV) personal, que muestra secciones como Resumen Profesional, Educación, Experiencia, Habilidades y Contacto. La navegación es dinámica, mostrando y ocultando secciones según la selección del usuario, y recordando la última vista.

---

## 1. Archivo HTML (`index.html`)

Este archivo estructura el contenido y define la base para la navegación y el estilo visual.

### Estructura y finalidad de elementos principales:

- `<!DOCTYPE html>`: Define que el documento es HTML5.
- `<html lang="es">`: Indica que el idioma principal es español.
- `<head>`: Contiene metadatos como codificación, título y enlace a estilos CSS.
- `<body>`: Contiene el contenido visible y la funcionalidad con JavaScript.

### Clases e IDs importantes:

- `.fondo`: Div usado para mostrar un fondo animado GIF detrás del contenido.
- `.header`: Contiene el menú de navegación, es fijo y visible siempre.
- `.menu`: Lista horizontal de enlaces del menú con navegación entre secciones.
- `data-section` (atributo en enlaces): Indica qué sección se debe mostrar al hacer clic.
- `<main class="contenido">`: Contenedor principal que alberga todas las secciones.
- Secciones `<section id="...">`: Cada una representa un bloque de contenido distinto (ej. resumen, educación, experiencia, etc.).
- Sección `.activa`: Clase que indica qué sección está visible actualmente.

---

## 2. Archivo CSS (`style.css`)

Define el estilo visual para la página y el comportamiento de las secciones y menú.

### Bloques principales:

- **General**  
  Define estilos base para `body` y `html`: sin márgenes ni padding, fuente, color blanco sobre fondo negro, scroll suave y altura completa.

- **`.header`**  
  Barra superior fija con fondo negro, padding y z-index alto para superponerse al contenido.

- **`.menu`**  
  Menú horizontal centrado con espacio entre elementos, sin viñetas, con tamaño de fuente personalizado.

- **`.menu li a` y `:hover`**  
  Estilos para enlaces del menú: sin subrayado, color blanco, borde inferior transparente que se vuelve visible y cambia de color al pasar el cursor.

- **`.fondo`**  
  Fondo animado con un GIF detrás del contenido principal, con filtro de oscurecimiento para mejorar legibilidad.

- **`main.contenido`**  
  Contenedor principal con fondo semitransparente, bordes redondeados, padding y centrado en la página.

- **`section` y `.activa`**  
  Por defecto, las secciones están ocultas (`display: none`, `opacity: 0`).  
  La clase `.activa` las muestra (`display: block`, `opacity: 1`), con transición suave.

- **`h2`**  
  Títulos de sección con borde inferior decorativo y espacio.

---

## 3. Archivo JavaScript (`script.js`)

Controla la interacción dinámica para mostrar y ocultar secciones, y recordar la última vista.

### Descripción de funcionalidades:

- **Esperar carga del DOM**  
  Usa `document.addEventListener('DOMContentLoaded', ...)` para ejecutar el código solo cuando el HTML esté cargado.

- **Selección de elementos**  
  - `enlaces`: Todos los enlaces del menú con atributo `data-section` que indican la sección a mostrar.  
  - `secciones`: Todas las secciones dentro del `<main>`.

- **Función `mostrarSeccion(id)`**  
  Recorre todas las secciones y:  
  - Añade clase `.activa` solo a la sección cuyo `id` coincide con `id` dado, mostrando esa sección.  
  - Remueve `.activa` de las demás, ocultándolas.

- **Evento click en enlaces del menú**  
  Al hacer clic en un enlace:  
  - Se previene el comportamiento por defecto del navegador.  
  - Se obtiene el valor de `data-section` para saber qué sección mostrar.  
  - Se llama a `mostrarSeccion` para mostrar la sección correspondiente.  
  - Se guarda la sección actual en `localStorage` con la clave `'seccionActiva'` para recordar la selección.

- **Carga inicial de la página**  
  Al cargar la página, se busca en `localStorage` la última sección activa guardada y se muestra.  
  Si no existe, se muestra la sección `'resumen'` por defecto.

---

# Resumen

| Archivo       | Propósito principal                                     |
|---------------|--------------------------------------------------------|
| `index.html`  | Estructura del CV con secciones y menú de navegación.  |
| `style.css`   | Estilo visual, layout, colores, visibilidad de secciones. |
| `script.js`   | Control de navegación dinámica y persistencia de estado.|

---

# Notas adicionales

- La clase `.activa` es clave para el control de visibilidad dinámica de las secciones.
- El atributo `data-section` en los enlaces permite asociar fácilmente cada botón del menú con la sección correspondiente.
- El uso de `localStorage` mejora la experiencia del usuario recordando su última sección visitada incluso tras recargar o cerrar la página.

---