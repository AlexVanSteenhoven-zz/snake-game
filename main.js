const canvas = document.getElementById("game-field");
const ctx = canvas.getContext("2d");

// Setting up the gamefield
// by setting up a scale and define rows and columns
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

// Draw the Snake
