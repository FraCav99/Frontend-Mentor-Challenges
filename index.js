const projectList = [
    {
        name: 'qr-code-main-content',
        difficulty: 'newbie',
        url: './qr-code-component-main'
    }
];

const dropdownContainer = document.querySelector('.dropdown-container');
const arrow = document.querySelector('.arrow');
const dropdownListContainer = document.querySelector('.dropdown-list-container');

dropdownContainer.addEventListener('click', () => {
    arrow.classList.toggle('up');
    dropdownListContainer.classList.toggle('show-dropdown-list-container');
})