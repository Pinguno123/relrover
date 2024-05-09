    <style>
        #cajaCategorias {
            width: 100%;
            height: 90vh;
            display: flex;
            justify-content: center;
            gap: 15px;
        }

        .card {
            width: calc(90% / 2);
            height: 500px;
            display: flex;
            flex-direction: column;
            border: 1px solid var(--stroke);
        }

        .card img {
            width: 100%;
            height: 60%;
        }

        #text {
            height: 40%;
            width: 100%;
            padding: 20px;
            position: relative;
        }

        .buttonView {
            position: absolute;
            bottom: 0;
            left: 0;
            margin-bottom: 10px;
            margin-left: 10px;
            padding: 10px 20px;
            background-color: transparent;
            color: white;
            transition: all 400ms;
            border: 1px solid var(--stroke);
        }

        .buttonView:hover {
            border-radius: 2px;
            background-color: var(--accent);
            transition: all 400ms;
        }
    </style>
    <div id="cajaCategorias">
        <?php
        // Obtener el JSON enviado desde JavaScript
        $jsonString = $_GET['json'];

        // Descodifico el JSON a un array
        $jsonData = json_decode($jsonString, true);

        // Accedo a las películas y la categorías del JSON
        $peliculas = $jsonData['peliculas'];
        $categoria = $jsonData['categoria'];

        // Recorro el array
        foreach ($peliculas as $pelicula) {
            $nombre = $pelicula['nombre'];
            $imagen = $pelicula['imagen'];
            $recurso = $pelicula['recurso'];
            $director = $pelicula['director'];
            $duracion = $pelicula['duración'];
        ?>
            <div class="card">
                <img src="<?php echo $imagen ?>" alt="Imagen">
                <hr>
                <section id="text">
                    <h1><?php echo $nombre ?></h1>
                    <p><?php echo $categoria ?></p>
                    <button type="button" class="buttonView" id="<?php echo $recurso ?>" onclick="cargarVideoPlayer(this.id, '<?php echo $nombre; ?>', '<?php echo $duracion; ?>', '<?php echo $director; ?>', '<?php echo $categoria; ?>', '<?php echo $imagen; ?>')">Ver película</button>
                </section>
            </div>
        <?php
        }
        ?>

    </div>
    <script>
        function cargarVideoPlayer(href, nombre, duracion, director, categoria, img) {
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
                success: function(response) {
                    $('main').html(response);
                    almacenarVideoVisto(nombre, duracion, director, categoria, img);
                },
                error: function() {
                    console.log('Hubo un error con la solicitud');
                },
            });
        }

        function almacenarVideoVisto(nombre, duracion, director, categoria, imagen) {
            var videosVistos = JSON.parse(sessionStorage.getItem('videosVistos')) || [];
            var video = {
                nombre: nombre,
                "duración": duracion,
                director: director,
                "categoría": categoria,
                imagen: imagen
            };
            videosVistos.push(video);
            if (videosVistos.length > 10) {
                videosVistos.shift(); // Quita el primer elemento del array si se pasa de 10 videos
            }
            sessionStorage.setItem('videosVistos', JSON.stringify(videosVistos));
        }
    </script>