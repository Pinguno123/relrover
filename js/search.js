$(document).ready(function () {
    const searchInput = $('#search-input');
    let hideResultsTimeout;
    let responseData;
    $('#resultados').hide();

    ajaxSearchCall();

    function ajaxSearchCall() {
        $.ajax({
            url: 'jsons/peliculas.json',
            method: 'GET',
            success: function (response) {
                responseData = response;
                displayData(responseData);
            },
            error: function (xhr, status, error) {
                console.error('Error en la solicitud:', status, error);
            }
        });
    }

    function displayData(data) {
        $('#resultados').empty();
        
        data.forEach(function (pelicula) {
            $('#resultados').append(`<a href="${pelicula.recurso}" id="peliculasEnlaces" target="_blank">${pelicula.nombre}</a>`);
        });
    }

    function filterAndDisplayData(searchItem) {
        const datosFiltrados = responseData.filter(function(pelicula) {
            return pelicula.nombre.toLowerCase().includes(searchItem);
        });

        displayData(datosFiltrados);
    }

    searchInput.on('keyup', function (e) {
        const searchItem = $(this).val().toLowerCase();

        if (searchItem === '') {
            displayData(responseData);
        } else {
            filterAndDisplayData(searchItem);
        }
    });

    searchInput.on('focus', function () {
        $('#resultados').show();
    });

    searchInput.on('blur', function () {
        hideResultsTimeout = setTimeout(function () {
            $('#resultados').hide();
        }, 200);
    });

    $('#resultados').on('click', function () {
        clearTimeout(hideResultsTimeout);
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('#resultados, #search-input').length) {
            $('#resultados').hide();
        }
    });    
});