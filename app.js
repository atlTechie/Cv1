// Toggle top Navigation
document.getElementById("nav-toggle").onclick = function () {
  toggleNav();
};

function toggleNav() {
  document.getElementById("slide-out-menu").classList.toggle("active");
}
