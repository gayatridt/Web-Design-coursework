document.addEventListener('DOMContentLoaded', function() {
    // Menu functionality
    const menuBtn = document.querySelector('.menu__btn');
    const navMenu = document.querySelector('.nav__menu');

    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('show');
    });

    document.addEventListener('click', function(e) {
        if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('show');
        }
    });

    // Modal functionality
    const modalEl = document.querySelector('.modal');
    const openEls = document.querySelectorAll('.subscribe-btn');
    const closeEl = document.querySelector('.cancel-btn');
    const formEl = document.getElementById('subscribe-form');
    const emailEl = document.getElementById('email');
    const email2El = document.getElementById('confirm-email');

    // Only run modal code if elements exist
    if (modalEl && formEl) {
        // Open modal
        openEls.forEach(btn => {
            btn.addEventListener('click', () => {
                modalEl.style.display = 'block';
                emailEl.focus();
                clearErrors();
                formEl.reset();
            });
        });

        // Close modal
        function closeModal() {
            modalEl.style.display = 'none';
            formEl.reset();
            clearErrors();
        }

        closeEl.addEventListener('click', closeModal);

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === modalEl) {
                closeModal();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalEl.style.display === 'block') {
                closeModal();
            }
        });

        // Helper functions
        function isNotEmpty(value) {
            return value.trim() !== "";
        }

        function isValidEmail(email) {
            return email.includes('@');
        }

        function areEmailsEqual(email1, email2) {
            return email1 === email2;
        }

        // Clear error messages
        function clearErrors() {
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(error => {
                error.style.display = 'none';
            });
            emailEl.classList.remove('error');
            email2El.classList.remove('error');
        }

        // Form validation
        formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            clearErrors();

            // First check: email required
            if (!isNotEmpty(emailEl.value)) {
                emailEl.classList.add('error');
                document.querySelector('#email-error').style.display = 'block';
                document.querySelector('#email-error').textContent = 'This field is required';
                return;
            }

            // Second check: email format
            if (!isValidEmail(emailEl.value)) {
                emailEl.classList.add('error');
                document.querySelector('#email-error').style.display = 'block';
                document.querySelector('#email-error').textContent = 'This field be a valid email address including a @';
                return;
            }

            // Third check: confirm email match
            if (!areEmailsEqual(emailEl.value, email2El.value)) {
                email2El.classList.add('error');
                document.querySelector('#email2-error').style.display = 'block';
                document.querySelector('#email2-error').textContent = 'This field must match the provided email address';
                return;
            }

            // If all validations pass, submit the form
            formEl.submit();
        });

        // Real-time validation
        emailEl.addEventListener('input', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.classList.add('error');
                document.querySelector('#email-error').style.display = 'block';
                document.querySelector('#email-error').textContent = 'This field be a valid email address including a @';
            } else {
                clearErrors();
            }
        });

        email2El.addEventListener('input', function() {
            if (this.value && !areEmailsEqual(this.value, emailEl.value)) {
                this.classList.add('error');
                document.querySelector('#email2-error').style.display = 'block';
                document.querySelector('#email2-error').textContent = 'This field must match the provided email address';
            } else {
                clearErrors();
            }
        });
    }

    // Event registration functionality
    const eventModal = document.querySelector('.event-modal');
    if (eventModal) { // Only run this code if we're on the events page
        const registerBtns = document.querySelectorAll('.register-btn');
        const eventForm = document.getElementById('event-form');
        const eventCancelBtn = eventModal.querySelector('.cancel-btn');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('event-email');
        const eventSelect = document.getElementById('event-select');

        // Open modal with correct event selected
        registerBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                eventModal.style.display = 'block';
                nameInput.focus();
                clearEventErrors();
                eventForm.reset();
                
                // Set the event based on button context
                const eventTitle = btn.closest('.event__content')?.querySelector('h3')?.textContent || 
                                btn.closest('.featured__details')?.querySelector('h3')?.textContent;
                
                if (eventTitle) {
                    const option = Array.from(eventSelect.options)
                        .find(opt => opt.text.includes(eventTitle.split(' ')[0]));
                    if (option) eventSelect.value = option.value;
                }
            });
        });

        // Close modal functions
        function closeEventModal() {
            eventModal.style.display = 'none';
            eventForm.reset();
            clearEventErrors();
        }

        eventCancelBtn.addEventListener('click', closeEventModal);

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === eventModal) {
                closeEventModal();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && eventModal.style.display === 'block') {
                closeEventModal();
            }
        });

        // Form validation
        function validateEventForm() {
            let isValid = true;
            clearEventErrors();

            // Validate name
            if (!nameInput.value.trim()) {
                showEventError(nameInput, 'This field is required');
                isValid = false;
            }

            // Validate email
            if (!emailInput.value.trim()) {
                showEventError(emailInput, 'This field is required');
                isValid = false;
            } else if (!emailInput.value.includes('@')) {
                showEventError(emailInput, 'This field be a valid email address including a @');
                isValid = false;
            }

            // Validate event selection
            if (!eventSelect.value) {
                showEventError(eventSelect, 'Please select an event');
                isValid = false;
            }

            return isValid;
        }

        function showEventError(input, message) {
            const formControl = input.closest('.form__control');
            formControl.classList.add('error');
            const errorMessage = formControl.querySelector('.error-message');
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
        }

        function clearEventErrors() {
            const formControls = eventForm.querySelectorAll('.form__control');
            formControls.forEach(control => {
                control.classList.remove('error');
                const errorMessage = control.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.style.display = 'none';
                    errorMessage.textContent = '';
                }
            });
        }

        // Real-time validation
        nameInput.addEventListener('input', function() {
            if (!this.value.trim()) {
                showEventError(this, 'This field is required');
            } else {
                clearEventErrors();
            }
        });

        emailInput.addEventListener('input', function() {
            if (this.value && !this.value.includes('@')) {
                showEventError(this, 'This field be a valid email address including a @');
            } else {
                clearEventErrors();
            }
        });

        eventSelect.addEventListener('change', function() {
            if (!this.value) {
                showEventError(this, 'Please select an event');
            } else {
                clearEventErrors();
            }
        });

        // Form submission
        eventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateEventForm()) {
                // Form is valid, submit it
                eventForm.submit();
            }
        });
    }

    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
                accItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });

        // Keyboard handling
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });


    const carousel = document.querySelector('.carousel');
    if (!carousel) return; // Only run on work page
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentSlide = 0;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.dot');
    
    function updateSlides() {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateSlides();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
});