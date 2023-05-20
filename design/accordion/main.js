const element = document.querySelectorAll('.item');
const button = document.querySelector('.icon');

element.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
    }
);