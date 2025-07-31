document.querySelector('.feedback-form').addEventListener('submit', e => {
  const email = document.getElementById('email');
  if (!email.value || !email.checkValidity()) {
    e.preventDefault();
    alert('Please enter a valid email address.');
    email.focus();
  }
});
