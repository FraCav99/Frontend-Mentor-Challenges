const projectList = [
    {
        name: 'qr-code-main-content',
        difficulty: 'newbie',
        url: './qr-code-component-main'
    }
];

const arrow = document.querySelector('.arrow')

arrow.addEventListener('click', () => {
    arrow.classList.toggle('up')
})