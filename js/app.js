document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const logo = document.getElementById("logo");
    const textlogo = document.getElementById("text-logo");

    hamburger.addEventListener("click", () => {
        textlogo.classList.toggle("cls-1");
        textlogo.classList.toggle("cls-2");
        logo.classList.toggle("cls-1");
        logo.classList.toggle("cls-2");
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("open");
        links.forEach((link) => {
            link.classList.toggle("fade");
        });
    });

    function linksnav()
    {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        const logo = document.getElementById("logo");
        const textlogo = document.getElementById("text-logo");

        document.querySelector('#li-1').addEventListener('click', () => {
            textlogo.classList.add("cls-1");
            textlogo.classList.remove("cls-2");
            logo.classList.add("cls-1");
            logo.classList.remove("cls-2");
            hamburger.classList.remove("active");
            navLinks.classList.remove("open");
            links.forEach((link) => {
                link.classList.remove("fade");
            });
        });
        document.querySelector('#li-2').addEventListener('click', () => {
            textlogo.classList.add("cls-1");
            textlogo.classList.remove("cls-2");
            logo.classList.add("cls-1");
            logo.classList.remove("cls-2");
            hamburger.classList.remove("active");
            navLinks.classList.remove("open");
            links.forEach((link) => {
                link.classList.remove("fade");
            });
        });

        li3 = document.querySelector('#li-3') || document.createElement('li');
        li3.addEventListener('click', () => {
            textlogo.classList.add("cls-1");
            textlogo.classList.remove("cls-2");
            logo.classList.add("cls-1");
            logo.classList.remove("cls-2");
            hamburger.classList.remove("active");
            navLinks.classList.remove("open");
            links.forEach((link) => {
                link.classList.remove("fade");
            });
        });

        li4 = document.querySelector('#li-4') || document.createElement('li');
        li4.addEventListener('click', () => {
            textlogo.classList.add("cls-1");
            textlogo.classList.remove("cls-2");
            logo.classList.add("cls-1");
            logo.classList.remove("cls-2");
            hamburger.classList.remove("active");
            navLinks.classList.remove("open");
            links.forEach((link) => {
                link.classList.remove("fade");
            });
        });
        document.querySelector('#li-5').addEventListener('click', () => {
            textlogo.classList.add("cls-1");
            textlogo.classList.remove("cls-2");
            logo.classList.add("cls-1");
            logo.classList.remove("cls-2");
            hamburger.classList.remove("active");
            navLinks.classList.remove("open");
            links.forEach((link) => {
                link.classList.remove("fade");
            });
        });
    }

    linksnav();


    //animejs

    anime({
        targets: ".cls-2",
        rotate: "360deg",
        easing: "linear",
        scale: ".7",
        direction: "alternate",
        loop: true,
        duration: 40000,
        endDelay: 500,
    });
    const ruta = anime.path(".ruta");

    anime({
        targets: ".ele1",
        easing: "linear",
        direction: "alternate",
        backgroundColor: "#c4d638",
        loop: true,
        duration: 3000,
    });

    anime({
        targets: ".ele1",
        translateX: ruta("x"),
        translateY: ruta("y"),
        duration: 240000,
        loop: true,
        easing: "linear",
        scale: "6",
        direction: "alternate",
    });
    const ruta2 = anime.path(".ruta2");
    anime({
        targets: ".ele2",
        translateX: ruta2("x"),
        translateY: ruta2("y"),
        duration: 50000,
        loop: true,
        easing: "linear",
        scale: "3",
    });
    anime({
        targets: ".c3",
        translateX: ruta("x"),
        translateY: ruta2("y"),
        duration: 50000,
        loop: true,
        easing: "linear",
        scale: "3",
    });
    anime({
        targets: ".c1",
        translateX: ruta2("x"),
        translateY: 200,
        duration: 50000,
        loop: true,
        easing: "linear",
        scale: "2",
    });

    if ( screen.width > 700 )
    {
        anime({
            targets: ".circle3",
            scale: "2",
            duration: 40000,
            translateY: ruta2("y"),
            translateX: 300,

            loop: true,
            direction: "alternate",
            easing: "easeOutInQuint",
        });
    }

    let spy = new NavScrollSpy({
        offset: 500,
    }).init();

    opacityNav("navbar");

    const splide = new Splide(".splide1", {
        type: "loop",
        autoplay: true,
        pauseOnHover: false,
        speed: 500,
        interval: 10000,
    }).mount();
    // splide.on( 'moved', function() {
    //     if(2){
    //         console.log('true')
    //     }
    // } );
    // splide.on('move', function(){
    //     1
    // } )
    const splide2 = new Splide(".splide2", {
        type: "loop",
    }).mount();
});

function opacityNav(par)
{
    const nav = document.getElementById(par);
    window.addEventListener("scroll", () => {
        window.scrollY > 300 ? nav.classList.remove("opacity") : true;
    });
}