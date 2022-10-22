import '../css/main.scss';
import validate from './validate';

export default () => {
  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.get('email'));
    // console.log(formData.get('password'));
    // console.log(formData.get('checkboxRemember'));
    try {
      const email = formData.get('email');
      const password = formData.get('password');
      const shouldRemember = !!formData.get('checkboxRemember');

      validate(email, password);

      if (shouldRemember) {
        console.log('yep');
      } else {
        console.log('no');
      }
    } catch (error) {
      error.errors.map((e) => console.log(e.field));
    }
  });
};
