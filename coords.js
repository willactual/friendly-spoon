let i = document.querySelector("img");
i.addEventListener("click", function() {
  let newX = evt.clientX - i.x;
  let newY = evt.clientY - i.y;
  alert("x: " + newX + ", y: " + newY);
});
