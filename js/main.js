function addCircle(x, y) {
  var circle = document.createElement("div");
  var animationTime = Math.round(Math.random() * 10);
  circle.classList.add("circle");
  circle.style.left = x + "vw";
  circle.style.top = y + "vh";
  circle.style.backgroundColor = randomColor();
  circle.style.setProperty("--grow-time", `${animationTime}s`);

  requestAnimationFrame(() => {
    document.body.appendChild(circle);
    setTimeout(removeCircle.bind(this, circle), animationTime * 1000);
  });
}

function removeCircle(circle) {
  document.body.removeChild(circle);
}

function randomPosition() {
  return [Math.random() * 95 + 1, Math.random() * 90 + 1];
}

function randomColor() {
  const colors = [
    "#81ecec",
    "#74b9ff",
    "#a29bfe",
    "#ffeaa7",
    "#fab1a0",
    "#ff7675",
    "#fd79a8",
  ];
  return colors[Math.round(Math.random() * colors.length)];
}

const timer = 350;

setInterval(() => {
  addCircle(...randomPosition());
}, timer);

window.addEventListener("load", () => {
  document.querySelector(".bio").classList.add("ready");
});
