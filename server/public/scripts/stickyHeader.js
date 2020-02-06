window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");
var sticky = header.offsetTop - (header.offsetTop/10);

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.remove("not-sticky");
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    header.classList.add("not-sticky");
  }
}