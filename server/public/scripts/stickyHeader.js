window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");
var sticky = window.innerHeight // - (window.innerHeight/10);

function myFunction() {
    console.log(header.offsetTop);
  if (window.pageYOffset > sticky) {
    header.classList.remove("not-sticky");
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    header.classList.add("not-sticky");
  }
}