button = document.querySelector("button");
body = document.querySelector("body");

button.addEventListener("click", function() {
  red = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  colors = `rgb(${red}, ${blue}, ${green})`;
  body.style.backgroundColor = colors;
  // body.setAttribute("backgroundColor", colors)
});
