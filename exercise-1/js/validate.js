import * as yup from 'yup';

const validate = (email, password) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required({ field: 'email', message: 'must not be empty' })
      .email({ field: 'email', message: 'must be a valid email' }),
    password: yup
      .string()
      .min(6, { field: 'password', message: 'must be at least 6 characters' }),
  });

  schema.validateSync({ email, password }, { abortEarly: false });
};

export default validate;
