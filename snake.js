function Snake() {
  // Initialize the Snake variables
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;

  // Draw the snake
  this.draw = function() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(this.x, this.y, scale, scale);
  };

  // Update the snake's position
  this.update = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  };
}
