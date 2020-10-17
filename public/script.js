let display = document.getElementById("display");
document.body.onkeypress = function() {
  // Include all numbers, 0-10
  for (var i = 0; i < 10; i++) {
    if (event.keyCode == i + 48) display.value += i;
  }
};let display = document.getElementById("display");
document.body.onkeypress = function() {
  // Include all numbers, 0-10
  for (var i = 0; i < 10; i++) {
    if (event.keyCode == i + 48) display.value += i;
  }
};