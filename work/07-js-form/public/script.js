(function() {
    'use strict';

    // Form elements
    const form = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirm-email');
    
    // Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const confirmEmailError = document.getElementById('confirm-email-error');

    function setErrorState(input, errorElement, message) {
        if (message) {
            input.classList.add('error');
            errorElement.textContent = message;
        } else {
            input.classList.remove('error');
            errorElement.textContent = '';
        }
    }

    function validateName() {
        const value = nameInput.value.trim();
        const isValid = value !== '';
        setErrorState(nameInput, nameError, isValid ? '' : 'Name is required');
        return isValid;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const isValid = value !== '';
        setErrorState(emailInput, emailError, isValid ? '' : 'Email is required');
        return isValid;
    }

    function validateEmailMatch() {
        const emailValue = emailInput.value.trim();
        const confirmValue = confirmEmailInput.value.trim();
        if (emailValue === '' || confirmValue === '') {
            return true; 
        }
        const isMatch = emailValue === confirmValue;
        if (!isMatch) {
            setErrorState(confirmEmailInput, confirmEmailError, 'Emails do not match');
        } else {
            setErrorState(confirmEmailInput, confirmEmailError, '');
        }
        return isMatch;
    }

    nameInput.addEventListener('input', validateName);

    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isEmailsMatch = validateEmailMatch();

        if (isNameValid && isEmailValid && isEmailsMatch) {
            form.submit();
        }
    });

})();