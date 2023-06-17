const menuBtn = document.querySelector('.btn-mobile-nav');

menuBtn.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');

        if(href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        if(href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: 'smooth' });
        }

        if(link.classList.contains('main-nav-link')) {
            document.querySelector('.header').classList.toggle('nav-open');
        }
    });
});

const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver((entries)=> {
    const ent = entries[0];
    if(!ent.isIntersecting) {
        document.querySelector('.header').classList.add('sticky');
    }
}, {
   root: null,
   threshold: 1,
});

obs.observe(sectionHeroEl);