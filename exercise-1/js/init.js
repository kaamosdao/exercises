import { Modal } from 'bootstrap';
import '../css/main.scss';
import LocalStorageData from './localStorageData';
import validate from './validate';
import LoginView from './view';

export default () => {
  const elements = {
    form: document.querySelector('.form'),
    emailAlert: document.querySelector('.input-email__alert'),
    passwordAlert: document.querySelector('.input-password__alert'),
    passwordInput: document.querySelector('.input-password__input'),
    emailInput: document.querySelector('.input-email__input'),
    modal: document.querySelector('#modal'),
  };

  const localStorageLogin = new LocalStorageData('login');
  const loginView = new LoginView(elements);
  const loginModal = new Modal(elements.modal);

  if (localStorageLogin.hasData()) {
    const { email, password } = localStorageLogin.getData();
    loginView.renderInitialValues(email, password);
  }

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    try {
      loginView.renderToDefault();
      
      const formData = new FormData(e.target);
      const email = formData.get('email');
      const password = formData.get('password');
      const shouldRemember = !!formData.get('checkboxRemember');

      validate(email, password);

      loginModal.show();

      if (shouldRemember) {
        localStorageLogin.setData(email, password);
      }

    } catch (error) {
      loginView.renderErrors(error.errors);
    }
  });
};
