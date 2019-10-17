window.addEventListener("DOMContentLoaded", event => {
  startTime();
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector(".nav_clock").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  var input = document.querySelector(".form_input");
  input.addEventListener("input", updateValue);

  function updateValue(e) {
    if (e.target.value.length > 0) {
      e.target.parentElement.classList.add("form_input-active");
      e.target.parentElement.classList.remove("form_input-box");
    } else {
      e.target.parentElement.classList.remove("form_input-active");
      e.target.parentElement.classList.add("form_input-box");
    }
  }
});
