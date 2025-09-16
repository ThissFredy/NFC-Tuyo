# Spotify NFC Landing Page - MORA "TUYO"

Página de aterrizaje interactiva y visualmente atractiva diseñada para ser activada mediante una etiqueta NFC. Al escanear la etiqueta con un dispositivo móvil, se abre esta página, que sirve como un puente elegante para redirigir al usuario a una canción específica en Spotify.

<img width="1756" height="895" alt="image" src="https://github.com/user-attachments/assets/23c80ab6-f8db-487b-96af-61fa13a21f5f" />

-----

## ✨ Características

  * **🎨 Diseño Moderno y Atractivo:** Inspirado en la estética del álbum, con un fondo degradado, efectos de brillo y una paleta de colores cohesiva.
  * **✨ Animaciones Sutiles:** La carátula del álbum flota suavemente y el ícono de reproducción tiene un pulso lento para atraer la atención del usuario.
  * \*\* interactivity Interactividad Mejorada:\*\* Efectos `hover` en la carátula y el botón principal que proporcionan una experiencia de usuario dinámica y agradable.
  * **📱 Totalmente Responsivo:** Gracias a **Tailwind CSS**, la página se ve increíble en cualquier dispositivo, ya sea móvil o de escritorio.
  * **🚀 Carga Rápida:** Al ser una página estática con dependencias mínimas (solo el CDN de Tailwind), la carga es casi instantánea.
  * **🔗 Lógica de Redirección Inteligente:** Un script de JavaScript maneja la redirección a la aplicación de Spotify, con una URL de respaldo a la web por si la aplicación no está instalada.

-----

## 🛠️ Tecnologías Utilizadas

  * **HTML5:** Para la estructura semántica del contenido.
  * **Tailwind CSS (vía Play CDN):** Para todo el diseño y los estilos de utilidad. Incluye una configuración personalizada para animaciones (`float`, `pulse-slow`).
  * **JavaScript:** Para la funcionalidad del botón que redirige a Spotify.
  * **GitHub Pages:** Para el alojamiento gratuito y permanente de la página.
  * **NFC:** Como el método de activación previsto para lanzar la página.

-----

## 🚀 Cómo Usarlo para tu Propia Canción

Puedes adaptar fácilmente este proyecto para cualquier canción que desees. Sigue estos pasos:

1.  **Fork/Clona este Repositorio:**
    Obtén una copia de este proyecto en tu propia cuenta de GitHub.

2.  **Personaliza los Recursos:**

      * Reemplaza `primerdia.jpg` con la carátula del álbum de tu canción.
      * Reemplaza `favicon.jpg` con una imagen para el ícono de la pestaña.

3.  **Edita `index.html`:**

      * Cambia el `<title>` por el de tu canción.
      * Actualiza el `<h1>` (título de la canción), `<p>` (artista) y demás textos para que coincidan con tu elección.
      * ¡Siéntete libre de experimentar con los colores y clases de Tailwind para crear un diseño único\!

4.  **Edita `index.js`:**

      * Abre el archivo `index.js` y actualiza las dos constantes con los enlaces de tu canción:
        ```javascript
        function openSpotify() {
          // Cambia este URI por el de tu canción
          const spotifyUri = "spotify:track:TU_CODIGO_DE_CANCION";
          
          // Cambia esta URL por el enlace web de tu canción
          const webUrl = "https://open.spotify.com/track/TU_CODIGO_DE_CANCION";

          // ... el resto del código no necesita cambios
        }
        ```

5.  **Publica en GitHub Pages:**

      * Sigue los pasos en la pestaña `Settings > Pages` de tu repositorio para activar GitHub Pages. Tu enlace será algo como `https://tu-usuario.github.io/tu-repositorio/`.

6.  **Graba tu Etiqueta NFC:**

      * Usa una aplicación como **NFC Tools** para escribir la URL de tu nueva página de GitHub en una tarjeta NFC.

-----

## 🎯 El Resultado Final

El resultado es una experiencia de usuario fluida y memorable: una tarjeta física que te lleva a una experiencia digital personalizada, conectando el mundo real con tu música favorita de una manera única.

Un proyecto de [Fredy](https://github.com/thissfredy).
