module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  const emailRegEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

  const validateInput = (key, value) => {
    if (value.trim() === '') {
      errors[key] = `${key} must not be empty`;
      return false;
    }

    return true;
  };

  validateInput('username', username);

  if (validateInput('email', email) && !email.match(emailRegEx)) {
    errors.email = 'Email must be a valid email address';
  }

  if (validateInput('password', password) && password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
