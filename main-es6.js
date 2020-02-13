(function () {
    const header = document.querySelector('.header');
    const menu = document.querySelector('.header_nav');
    window.onscroll = () => {
        if (window.pageYOffset > 50 ) {
           header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
    // if(window.matchMedia('(max-width: 320px)').matches){
    //     window.onscroll = () => {
    //         if (window.pageYOffset > 50 ) {
    //             if (menu.classList.contains('header_nav_active')) {
    //                 header.classList.add('header_active');
    //             }
    //         }
    //         // else {
    //         //     header.classList.remove('header_active');
    //         // }
    //     }
    // }

        // if($(window).width() < 767) {
        //     // change functionality for smaller screens
        // } else {
        //     // change functionality for larger screens
        // }



}());

(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const intro = document.querySelector('.intro');
    const menuLinks = document.querySelectorAll('.header_link');


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

    if (window.innerWidth <= 767 ) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header_nav_active');
            });
        }
    }
}());

//Scroll to anchors
(function () {
    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());