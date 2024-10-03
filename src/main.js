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

