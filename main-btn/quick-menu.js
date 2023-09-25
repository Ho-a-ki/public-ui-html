class QuickMenu extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('quick-menu-template');
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.menuToggle = shadowRoot.querySelector('.menu-toggle');
        this.subMenu = shadowRoot.querySelector('.sub-menu');

        this.menuToggle.addEventListener('click', () => {
            this.subMenu.classList.toggle('active');
        });
    }
}

customElements.define('quick-menu', QuickMenu);