// openSidebar = false;

var btnOpenMenu = document.getElementById("btnmenu");
var bntCloseMenu = document.getElementById("btnclose")
var sideBar = document.getElementById("sidebar");
var navLinks = document.getElementById("navlinks");

function toggleSideBar(isShowing) {
    if (isShowing) {
        btnOpenMenu.style.display = "none";
        bntCloseMenu.style.display = "block";
        sideBar.style.display = "block"
        navLinks.style.display = "block"
    } else {
        btnOpenMenu.style.display = "block";
        bntCloseMenu.style.display = "none";
        sideBar.style.display = "none"
        navLinks.style.display = "none"
    }
}