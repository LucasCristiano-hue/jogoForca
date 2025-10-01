<?php session_start(); ?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jogo da Forca</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Jogo da Forca</h1>
    <div>
      <select id="categoriaSelect"></select>
      <button id="novoJogo">Novo Jogo</button>
    </div>
  </header>

  <div class="message"></div>

  <main>
    <article class="content-img">
      <img src="imagens/img1.png" alt="Jogo da forca">
    </article>
    <article class="content">
      <div class="guess-word"></div>
      <div class="clue"></div>
      <div class="btns"></div>
    </article>
  </main>

  <a href="ranking.php">Ver Ranking</a>

  <script src="js/script.js"></script>
</body>
</html>
