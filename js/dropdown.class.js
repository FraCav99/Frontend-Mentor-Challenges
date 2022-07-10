export class Dropdown {
    #id;
    #itemList;

    constructor(id, itemList) {
        this.#id = id;
        this.#itemList = itemList;
    }

    getDropdown() {
        const newDropdown = document.createElement('div');
        newDropdown.classList.add('dropdown-container');

        newDropdown.appendChild(this.#getDropdownLine());
        newDropdown.appendChild(this.#getDropdownListContainer());
        return newDropdown;
    }

    #getDropdownLine() {
        const newDropdownLine = document.createElement('div');
        newDropdownLine.classList.add('dropdown-line');

        newDropdownLine.appendChild(this.#getDropdownText());

        const arrow = document.createElement('i');
        arrow.classList.add('arrow');
        newDropdownLine.appendChild(arrow);

        return newDropdownLine;
    }

    #getDropdownText() {
        const newDropdownText = document.createElement('div');
        newDropdownText.classList.add('dropdown-text');

        const idSpan = document.createElement('span');
        idSpan.textContent = this.#id;
        newDropdownText.appendChild(idSpan);

        const itemCounterSpan = document.createElement('span');
        itemCounterSpan.classList.add('item-counter');
        itemCounterSpan.textContent = this.#itemList.length;
        newDropdownText.appendChild(itemCounterSpan);

        return newDropdownText;
    }

    #getDropdownListContainer() {
        const newDropdownListContainer = document.createElement('div');
        newDropdownListContainer.classList.add('dropdown-list-container');

        this.#itemList.forEach(element => {
            const newLinkEl = this.#addLinkElement(element);
            newDropdownListContainer.appendChild(newLinkEl);
        });

        return newDropdownListContainer;
    }

    #addLinkElement(listEl) {
        const linkEl = document.createElement('a');
        linkEl.classList.add('dropdown-list-item');
        linkEl.setAttribute('href', listEl.url);

        const spanText = document.createElement('span');
        spanText.textContent = listEl.name;
        linkEl.appendChild(spanText);

        const arrowRight = document.createElement('i');
        arrowRight.classList.add('fa-solid');
        arrowRight.classList.add('fa-arrow-right');
        linkEl.appendChild(arrowRight);

        return linkEl;
    }
}