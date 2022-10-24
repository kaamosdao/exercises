class LoginView {
  constructor(elements) {
    this.elements = elements;
  }

  renderInitialValues(email, password) {
    this.elements.emailInput.value = email;
    this.elements.passwordInput.value = password;
  }

  renderErrors(errors) {
    errors.forEach((error) => {
      if (error.field === 'email') {
        this.elements.emailAlert.textContent = error.message;
        this.elements.emailAlert.classList.remove('hide');
        this.elements.emailInput.classList.add('is-invalid');
      }
      if (error.field === 'password') {
        this.elements.passwordAlert.textContent = error.message;
        this.elements.passwordAlert.classList.remove('hide');
        this.elements.passwordInput.classList.add('is-invalid');
      }
    });
  }

  renderToDefault() {
    this.elements.emailAlert.classList.add('hide');
    this.elements.passwordInput.classList.remove('is-invalid');
    this.elements.passwordAlert.classList.add('hide');
    this.elements.emailInput.classList.remove('is-invalid');
  }
}

export default LoginView;
