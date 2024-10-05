(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-menu-open]'),
      closeModalBtn: document.querySelector('[data-menu-close]'),
      modal: document.querySelector('[data-menu]'),
      navLinks: document.querySelectorAll('.burger-nav-item-link'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.navLinks.forEach(link => {
      link.addEventListener('click', event => {
        toggleModal();
      });
    });
  
    function toggleModal() {
      refs.modal.classList.toggle('is-open');
      document.body.classList.toggle('no-scroll');
    }
  })();
document.querySelector('.feedback_form').addEventListener('submit', function(event) {
    const nameInput = document.querySelector('input[name="name"]');
    const phoneInput = document.querySelector('input[name="tel"]');
  
    const namePattern = /^[A-Za-zА-Яа-яЁёІіЇїЄє' -]+$/;
    const phonePattern = /^\+?[0-9\s()-]{7,15}$/;
  
    if (!namePattern.test(nameInput.value)) {
      alert('The name should contain only letters.');
      event.preventDefault(); 
    }
  
    if (!phonePattern.test(phoneInput.value)) {
      alert('Please enter a valid phone number.');
      event.preventDefault(); 
    }
});
  
document.addEventListener('scroll', function () {
  const anchor = document.querySelector('.scroll-link');
  if (window.scrollY === 0) {
    anchor.style.transform = 'rotate(0deg)';
    anchor.href = '#footer';
  } else {
    anchor.style.transform = 'rotate(180deg)';
    anchor.href = '#header';
  }
});