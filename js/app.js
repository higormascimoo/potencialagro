/// EFEITO MENU STICK

window.addEventListener("scroll", function(){

    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0)
})

// MENU RESPONSIVE
const menuResponsive = document.getElementById("open");
const btnClose = document.getElementById("btnClose");
const btnOpen = document.getElementById("btnOpen");

function openMenu(){


    menuResponsive.style.display = "flex";
    btnOpen.style.display = "none"
    btnClose.style.display = "block"
}

function closeMenu(){
    
    menuResponsive.style.display = "none";
    btnOpen.style.display = "block"
    btnClose.style.display = "none"

}