window.onscroll = function () { engage() };
let nav = document.getElementsByClassName('links')[0],
    header = document.getElementsByClassName('intro')[0],
    sticky = nav.offsetTop;
let engage = function () {
    if (window.pageYOffset >= sticky) {
        nav.classList.add('sticky');
        nav.classList.remove('links');
        header.classList.add('no-jump');
    } else {
        nav.classList.remove('sticky');
        nav.classList.add('links');
        header.classList.remove('no-jump');
    }
}