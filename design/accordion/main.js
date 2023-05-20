const element = document.querySelectorAll('.item');
const button = document.querySelector('.icon');

element.forEach((item) => {
    item.addEventListener('click', (e) => {
        item.classList.toggle('open');
    });
    }
);