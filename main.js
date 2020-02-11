(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50 ) {
           header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}());

(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const intro = document.querySelector('.intro');


    burgerItem.addEventListener('click', function () {
         menu.classList.add('header_nav_active');
        burgerItem.style.display = "none";
        intro.style.paddingTop = "619px";
    });
    menuCloseItem.addEventListener('click', function () {
        menu.classList.remove('header_nav_active');
        burgerItem.style.display = "block";
        intro.style.paddingTop = "319px";
    });

}());