import { Dropdown } from "./dropdown.class.js";

fetch('projects.json')
    .then(res => res.json())
    .then(res => {
        init(res)
    })
    .catch(err => {
        console.error(err);
    });

function init(projectsArr) {
    const main = document.querySelector('main');

    const newbieItems = projectsArr['newbie'].items;
    const dropdown = new Dropdown('newbie', newbieItems);

    main.appendChild(dropdown.getDropdown());

    const dropdownContainer = document.querySelector('.dropdown-container');
    const arrow = document.querySelector('.arrow');
    const dropdownListContainer = document.querySelector('.dropdown-list-container');
    const levels = ['newbie', 'junior', 'intermediate', 'advanced', 'guru'];

    dropdownContainer.addEventListener('click', () => {
        arrow.classList.toggle('up');
        dropdownListContainer.classList.toggle('show-dropdown-list-container');
    });
}