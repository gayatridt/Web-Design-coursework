(function() {
    'use strict';

    const dropdownButton = document.querySelector('.nav-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    function closeDropdown() {
        dropdownMenu.classList.remove('open');
        dropdownButton.setAttribute('aria-expanded', 'false');
    }

    function toggleDropdown() {
        const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';
        dropdownButton.setAttribute('aria-expanded', !isExpanded);
        dropdownMenu.classList.toggle('open');
    }

    // Toggle dropdown on button click
    dropdownButton.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDropdown();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-list')) {
            closeDropdown();
        }
    });

    // Close dropdown when pressing Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && dropdownMenu.classList.contains('open')) {
            closeDropdown();
            dropdownButton.focus();
        }
    });

    // Handle keyboard navigation within dropdown
    dropdownMenu.addEventListener('keydown', (event) => {
        const menuItems = dropdownMenu.querySelectorAll('a');
        const currentIndex = Array.from(menuItems).indexOf(document.activeElement);

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                if (currentIndex < menuItems.length - 1) {
                    menuItems[currentIndex + 1].focus();
                } else {
                    menuItems[0].focus();
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (currentIndex > 0) {
                    menuItems[currentIndex - 1].focus();
                } else {
                    menuItems[menuItems.length - 1].focus();
                }
                break;
            case 'Tab':
                if (!event.shiftKey && currentIndex === menuItems.length - 1) {
                    closeDropdown();
                }
                break;
        }
    });
})();