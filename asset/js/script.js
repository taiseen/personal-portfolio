// 3-May-2021
// 5-May-2021

const menu = document.getElementById('menu');
const topImg = document.getElementById('top');
const header = document.getElementsByTagName('header')[0];
const prevScrollPosition = window.pageYOffset;

//console.log("Top",prevScrollPosition);

menu.addEventListener('click', () => {

    menu.classList.toggle('fa-times');
    header.classList.toggle('toggle');

    console.log("class toggling...")
});

window.addEventListener('scroll', () => {

    const currentScrollPosition = window.pageYOffset;
    //console.log(currentScrollPosition)

    if (prevScrollPosition > currentScrollPosition) {
        header.classList.remove('toggle');
    }else{
        header.classList.remove('toggle');
    }

    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        topImg.style.display = "block";
    } else {
        topImg.style.display = "none";
    }
});
