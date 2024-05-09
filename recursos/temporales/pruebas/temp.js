$(document).ready(function () {
    buscarEnlaceYObtenerDatos("recursos/videos/video.mp4");
});

function buscarEnlaceYObtenerDatos(enlace) {
    $.getJSON("jsons/peliculas.json", function(data) {
        var pelicula = data.find(function(pelicula) {
            return pelicula.recurso === enlace;
        });

        if (pelicula) {
            console.log("Nombre:", pelicula.nombre);
            console.log("Director:", pelicula.director);
            console.log("Categoría:", pelicula.categoría);
        } else {
            console.log("No se encontró ninguna película con el enlace proporcionado.");
        }
    });
}