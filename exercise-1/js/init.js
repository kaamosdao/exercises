import '../css/main.scss';
import validate from './validate';

export default () => {
  const elements = {
    form: document.querySelector('.form'),
    emailAlert: document.querySelector('.input-email__alert'),
    passwordAlert: document.querySelector('.input-password__alert'),
    passwordInput: document.querySelector('.input-password__input'),
    emailInput: document.querySelector('.input-email__input'),
  };

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const email = formData.get('email');
      const password = formData.get('password');
      const shouldRemember = !!formData.get('checkboxRemember');

      elements.emailAlert.classList.add('hide');
      elements.passwordInput.classList.remove('input-password__input--invalid');
      elements.passwordAlert.classList.add('hide');
      elements.emailInput.classList.remove('input-email__input--invalid');

      validate(email, password);

      if (shouldRemember) {
        console.log('yep');
      } else {
        console.log('no');
      }
    } catch (error) {
      error.errors.forEach((error) => {
        if (error.field === 'email') {
          elements.emailAlert.textContent = error.message;
          elements.emailAlert.classList.remove('hide');
          elements.emailInput.classList.add('input-email__input--invalid');
        }
        if (error.field === 'password') {
          elements.passwordAlert.textContent = error.message;
          elements.passwordAlert.classList.remove('hide');
          elements.passwordInput.classList.add('input-password__input--invalid');
        }
      });
    }
  });
};
