  // Intenta abrir la aplicación de Spotify de inmediato.
  window.location = "spotify:track:4tQofG51E0juZBBVr6pral?si=wcs-tEPJQfytzfvCccCGGQ";

  // Si la app no se abre después de 2 segundos, redirige al sitio web como plan B.
  setTimeout(function() {
      window.location = "https://open.spotify.com/intl-es/track/4tQofG51E0juZBBVr6pral?si=c1e550bc363540af";
  }, 2000);