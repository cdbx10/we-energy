document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const logo = document.getElementById('logo');
    const textlogo = document.getElementById('text-logo');

    hamburger.addEventListener("click", () => {
        textlogo.classList.toggle('cls-1')
        textlogo.classList.toggle('cls-2')
        logo.classList.toggle('cls-1')
        logo.classList.toggle('cls-2')
        hamburger.classList.toggle('active');
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    });
});