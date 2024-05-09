<?php 
$href = $_GET['href'];
$nombre = $_GET['nombre'];
$director = $_GET['director'];
$duracion = $_GET['duracion'];
$categoria = $_GET['categoria'];
?>
<meta http-equiv="Content-Type" content="text/html">
<meta charset="UTF-8">
<style>
.webPlayer {
    height: 90vh;
    width: 100%;
}

.webPlayer video {
    height: 60%;
    width: 100%;
}

.infoVideo {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

#botones {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
}

#botones button {
    width: 49%;
    height: 40px;
}

#infoVideo {
    width: 100%;
    height: auto;
}
</style>
<div class="webPlayer">
    <video src="<?php echo $href ?>" controls id="currentVideo"></video>
    <div class="infoVideo">
        <section id="botones">
            <button id="retrocederVideo" onclick="retroceder()">Retroceder 10s</button>
            <button id="adelantarVideo" onclick="avanzar()">Adelantar 10s</button>
        </section>
        <section id="infoVideo">
            <h1>Nombre de la pelicula: <?php echo $nombre ?></h1>
            <p>Director: <?php echo $director ?></p>
            <p>Duración: <?php echo $duracion?></p>
            <p>Categoria: <?php echo $categoria?></p>
        </section>
    </div>
</div>
<script>
    var currentVideo = document.getElementById('currentVideo');
    function avanzar() {
        currentVideo.currentTime += 10;
    };

    function retroceder() {
        currentVideo.currentTime -= 10;
    };
</script>