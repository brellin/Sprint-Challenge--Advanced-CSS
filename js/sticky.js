window.onscroll = function(){engage()};
let navbar = document.getElementsByClassName(links);
let stick = nav.offsetTop;
function engage(){
    if(window.pageYOffset >= stick){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}