function openSpotify() {
  // URI de la app
  const spotifyUri = "spotify:track:4tQofG51E0juZBBVr6pral";
  
  // URL de respaldo para la web
  const webUrl = "https://open.spotify.com/intl-es/track/4tQofG51E0juZBBVr6pral?si=c1e550bc363540af";

  // Intenta abrir la URI.
  window.location = spotifyUri;

  // El fallback ahora es menos necesario, pero lo dejamos por si acaso.
  setTimeout(function() {
      // Si después de 2.5s el usuario no ha cambiado de página, 
      // es probable que no tenga la app, lo mandamos a la web.
      window.location = webUrl;
  }, 2500);
}