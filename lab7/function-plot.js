const canvas1 = document.getElementById("plot");

if (canvas1.getContext) {
  canvas1.width = x_axis * 2;
  canvas1.height = y_axis * 2;

  const ctx1 = canvas1.getContext("2d");

  ctx1.font = "14px sans-serif";
  ctx1.strokeText("y = 5sin(x) + x^2", x_axis + 50, 50);

  ctx1.lineWidth = 1;

  ctx1.beginPath();
  ctx1.strokeStyle = "#ee0000";

  x = -x_max;
  y = 5 * Math.sin(x) + x ** 2;
  ctx1.moveTo(offsetX(x), offsetY(y));

  while (x < x_max) {
    // INCLUDE CODE FOR BROKEN LINE IN HERE
    x += 0.1;
    y = 5 * Math.sin(x) + x ** 2;
    ctx1.lineTo(offsetX(x), offsetY(y));
  }
  ctx1.stroke();
  ctx1.closePath();
}
