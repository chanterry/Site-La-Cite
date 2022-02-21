const nav = document.querySelector('.navbar');

function stickNavbar(){
    if (window.scrollY > 0){
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

window.addEventListener('scroll', stickNavbar);

/* window.addEventListener('scroll', stickNavbar);
function stickNavbar(){
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 0);
} */


