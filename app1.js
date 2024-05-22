function animateDiv() {
  var div = document.getElementById("myDiv");
  var left = 0;
  var step = 10;
  var interval = setTimeout(function() {
    left += step;
    div.style.left = left + "px";
    if (left < 300) {
      interval = setTimeout(arguments.callee, 10);
    }
  }, 10);
}
