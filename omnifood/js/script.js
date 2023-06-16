const menuBtn = document.querySelector('.btn-mobile-nav');

menuBtn.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll('a:link');