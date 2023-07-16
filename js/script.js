// toggle icon and navbar function
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick =  () => {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
}
// typed feature for home section
const typed = new Typed(".text", {
    strings: ["Warehouse Supervisor", "Full-stack Web Developer", "Husband (of Barbara Márku)", "Traveller", "Play Station 5 Fanatic... :)"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});
// scroll sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });
// sticky navbar
let header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 100);

// remove toggle icon and navbar function
    menuIcon.classList.remove("bx-x");
    navBar.classList.remove("active");

};
