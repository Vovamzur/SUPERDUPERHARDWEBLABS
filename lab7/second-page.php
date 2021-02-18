<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Друга сторінка</title>
</head>

<body>
  <?php
  $subject = $_POST["subject"];
  $material = $_POST["material"];
  $count = $_POST["count"];
  echo "Ваше замовлення прийнято \nЗамовлено виріб - $subject \nМатеріал - $material\nКількість - $count"
  ?>
  <p>
    <a href="index.html"> Повернення </a>
  </p>
</body>

</html>