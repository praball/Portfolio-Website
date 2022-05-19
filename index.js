const nav = document.querySelector('.navbar-custom');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if(top >= window.innerHeight - 60){
        nav.classList.add('navbar-active');
    }
    else{
        nav.classList.remove('navbar-active');
    }
}