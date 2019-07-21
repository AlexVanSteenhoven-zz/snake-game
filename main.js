const canvas = document.getElementById("game-field");
const ctx = canvas.getContext("2d");

// Setting up the gamefield
// by setting up a scale and define rows and columns
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
(function setup() {
  snake = new Snake();
  snake.draw();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.draw();
  }, 250);
})();

window.addEventListener("keydown", evt => {
  const dir = evt.key.replace("Arrow", "");
  console.log(dir);
  snake.changeDirection(dir);
});
