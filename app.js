window.addEventListener("scroll",function(){
   let nav=this.document.querySelector("section");
    nav.classList.toggle("sticky",this.window.scrollY>0);
    if (x.style.display === "block")
    x.style.display = "none";
});
var x = document.getElementById("content");

// Hamburger
function myFunction() {
    var x = document.getElementById("content");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }