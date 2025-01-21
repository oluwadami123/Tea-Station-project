/*setup date*/
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

/*navbar*/
const navbar = document.getElementById(("navbar"));
const navbtn = document.getElementById(("nav-btn"));
const navClose = document.getElementById(("nav-close"));

/*show navbar*/
navbtn.addEventListener("click", () => { navbar.classList.add(("showNav"));});

/*close navbar*/
navClose.addEventListener("click", () => { navbar.classList.remove(("showNav"));});