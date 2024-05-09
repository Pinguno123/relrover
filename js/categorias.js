var categorias = $('.categorias-slide');

for (let index = 0; index < categorias.length; index++) {
    $(categorias[index]).click(function (e) { 
        e.preventDefault();
        
        switch (index) {
            case 0:
                getCategoria('acción');
                break;
            case 1:
                getCategoria('comedia');
                break;
            case 2:
                getCategoria('romance');
                break;
            case 3:
                getCategoria('aventura');
                break;
            default:
                console.log('Error');
                break;
        }
    });
}

function getCategoria(categoria) {
    $.getJSON("jsons/peliculas.json", function (data) {
        var peliculasFiltradas = [];

        data.forEach(function(pelicula) {
            if (pelicula.categoría === categoria) {
                peliculasFiltradas.push(pelicula);
            }
        });

        displayCategoria(peliculasFiltradas, categoria);
    });
}

function displayCategoria(peliculas, categoria) {
    var jsonData = {
        peliculas: peliculas,
        categoria: categoria
    };

    var jsonString = JSON.stringify(jsonData);

    $.ajax({
        type: "GET",
        url: "moviesPage.php",
        data: {
            json: jsonString
        },
        dataType: "html",
        success: function (response) {
            $('main').html(response);
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}