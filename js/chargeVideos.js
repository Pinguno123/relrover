$(document).ready(function () {
    $('#resultados').on('click', '#peliculasEnlaces', function (e) {
        e.preventDefault();

        var href = $(this).attr('href');
        buscarEnlaceYObtenerDatos(href);
    });

    $('.swiper-slide img').on('click', function () {
        var videoSrc = $(this).siblings('video').attr('src');
        buscarEnlaceYObtenerDatos(videoSrc);
    });

    function buscarEnlaceYObtenerDatos(enlace) {
        $.getJSON("jsons/peliculas.json", function (data) {
            var pelicula = data.find(function (pelicula) {
                return pelicula.recurso === enlace;
            });

            if (pelicula) {
                almacenarVideoVisto(pelicula);
                cargarVideoPlayer(enlace, pelicula.nombre, pelicula.duración, pelicula.director, pelicula.categoría);
            } else {
                console.log("No se encontró ninguna película");
            }
        });
    }

    function almacenarVideoVisto(pelicula) {
        
        var videosVistos = JSON.parse(sessionStorage.getItem('videosVistos')) || [];
        videosVistos.push(pelicula);
        
        //Ultimos 10 vistos
        if (videosVistos.length > 10) {
            videosVistos.shift();
        }
        sessionStorage.setItem('videosVistos', JSON.stringify(videosVistos));
    }

    function cargarVideoPlayer(href, nombre, duracion, director, categoria) {
        var url = 'videoPlayer.php';
        $.ajax({
            type: "GET",
            url: url,
            data: {
                href: href,
                nombre: nombre,
                duracion: duracion,
                director: director,
                categoria: categoria
            },
            dataType: "html",
            success: function (response) {
                $('main').html(response);
            },
            error: function () {
                console.log('Hubo un error con la solicitud');
            },
        });
    }

    $('#logoButton').click(function (e) {
        e.preventDefault();

        $.ajax({
            type: "GET",
            url: "index.html",
            dataType: "html",
            success: function (response) {
                $('body').html(response);
            }
        });
    });
});
