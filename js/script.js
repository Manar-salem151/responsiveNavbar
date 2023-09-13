let open = document.getElementById("open");
let close = document.getElementById("close");
let side = document.getElementsByClassName("side")[0];
let nav = document.getElementsByTagName("nav")[0];
let ul = document.getElementsByTagName("ul")[1];

window.addEventListener("resize", function () {
  if (window.innerWidth <= 600) {
    nav.style.display = "none";
    side.style.display = "none";
    // ul.classList.display="none"
    ul.classList.toggle("hide");
    close.style.display = "block";

    close.addEventListener("click", function () {
        side.style.display = "block";
        side.style.height = "0px";
        // ul.style.display="none"
        ul.classList.toggle("hide");
      });

  } else {
    side.style.display = "none";
    nav.style.display = "block";
    close.style.display = "none";
  }
});

window.addEventListener("load", function () {
  if (window.innerWidth <= 600) {
    nav.style.display = "none";
    side.style.display = "block";
    close.style.display = "block";

    close.addEventListener("click", function () {
      side.style.display = "block";
      side.style.height = "0px";
      // ul.style.display="none"
      ul.classList.toggle("hide");
    });

  } else {
    side.style.display = "none";
    nav.style.display = "block";
    close.style.display = "none";
  }
});
