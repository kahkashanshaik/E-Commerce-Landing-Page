import { isNull } from 'lodash';

export default class WebsiteMenu {
    constructor() {
        this.init();
        this.menuControler();
    }
    init() {
        this.mobileMenu = document.querySelector('.nav-links')
        this.toggleBtn = document.querySelector('.toggle-btn');
        this.toggleBtnText = document.querySelector('.toggle-btn-text');
    }
    menuControler() {
        if (!isNull(this.mobileMenu) && !isNull(this.toggleBtn)) {
            this.toggleBtn.addEventListener('click', () => {
                this.mobileMenu.classList.toggle('top-[9%]');
                if (this.mobileMenu.classList.contains('top-[9%]')) {
                    this.toggleBtnText.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
                } else {
                    this.toggleBtnText.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
                }
            })
        }
    }
    
}
