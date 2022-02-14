// 3-May-2021
// 5-May-2021

let scrollIndicator = document.getElementById('scroll-indicator');
let theme = document.getElementById('themeToggling');
let menu = document.getElementById('menu');
let topImg = document.getElementById('top');
let header = document.querySelector('header');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


let prevScrollPosition = window.pageYOffset;
//console.log("Top",prevScrollPosition);


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('toggle');
});

theme.addEventListener('click', () => {
    theme.firstElementChild.classList.toggle('fa-moon');
    theme.firstElementChild.classList.toggle('fa-sun');
    document.body.classList.toggle('themeChange');
});


window.addEventListener('scroll', () => {

    let currentScrollPosition = window.pageYOffset;
    //console.log(currentScrollPosition)
    menu.classList.remove('fa-times');

    if (prevScrollPosition > currentScrollPosition) {
        header.classList.remove('toggle');
        menu.classList.remove('fa-times');
    } else {
        header.classList.remove('toggle');
    }

    // condition - for showing upper arrow 
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topImg.style.transform = "scale(1)";
    } else {
        topImg.style.transform = "scale(0)";
    }




    // calculate user screen view portions...
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY / maxHeight)) * 100;

    // at HTML horizontal bar display show incrementally... 
    scrollIndicator.style.width = percentage + '%';





    // auto select menu according to screen scrolling
    sections.forEach(section => {

        let top = window.scrollY;
        let height = section.offsetHeight;
        let offset = section.offsetTop - 150;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });

});



/*****************************************************************
******************************************************************
******************************************************************/
// 15 Feb 2022
// JavaScript Typing Animation
let typed = new Typed('.auto-input', {

    strings: ['Md Taiseen Azam', 'Web Developer', 'Front-end Developer'],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true

});

/*****************************************************************
******************************************************************
******************************************************************/

// DISABLE the RIGHT CLICK for viewing the ==> View Page Source Code
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}, false);


// DISABLE SHORTCUT KEY
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.keyCode == 123) {
        e.stopPropagation();
        e.preventDefault();
    }
}, false);