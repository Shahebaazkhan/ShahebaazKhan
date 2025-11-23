// Contact form validation and message display
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (name === '' || email === '' || message === '') {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fill all fields.';
  } else {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you for contacting us!';
    form.reset();
  }
});

function scrollToCards() {
  document.getElementById('cards').scrollIntoView({ behavior: 'smooth' });
}

  //hamburger icon
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
  });