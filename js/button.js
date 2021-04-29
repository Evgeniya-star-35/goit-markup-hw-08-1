(() => {
    const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    };

    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);

    function toggleMenu() {
        document.body.classList.toggle("menu-open");
    refs.modal.classList.toggle('is-hidden');
    }
})();