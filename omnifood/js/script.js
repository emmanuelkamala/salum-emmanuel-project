const menuBtn = document.querySelector('.btn-mobile-nav');

menuBtn.addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('nav-open');
};