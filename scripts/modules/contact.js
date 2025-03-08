// scripts/modules/contact.js
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  // Name Validation
  if (name === '') {
    showError('name-error', 'Name is required');
    isValid = false;
  }

  // Email Validation
  if (email === '') {
    showError('email-error', 'Email is required');
    isValid = false;
  } else if (!validateEmail(email)) {
    showError('email-error', 'Please enter a valid email address');
    isValid = false;
  }

  // Message Validation
  if (message === '') {
    showError('message-error', 'Message is required');
    isValid = false;
  }

  if (isValid) {
    // Submit form (you can add AJAX or fetch here)
    alert('Message sent successfully!');
    contactForm.reset();
  }
});

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrors() {
  const errors = document.querySelectorAll('.error-message');
  errors.forEach(error => error.textContent = '');
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
