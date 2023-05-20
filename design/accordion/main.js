const element = document.querySelector('.item');
const button = document.querySelector('.icon');

button.addEventListener('click', (e) => {
    console.log(e.target);
    element.classList.toggle('open');
    }
);