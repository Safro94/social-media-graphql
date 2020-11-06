const validateInput = (key, value, errors) => {
  if (value.trim() === '') {
    errors[key] = `${key} must not be empty`;
    return false;
  }

  return true;
};

module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  const emailRegEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

  validateInput('username', username, errors);

  if (validateInput('email', email, errors) && !email.match(emailRegEx)) {
    errors.email = 'Email must be a valid email address';
  }

  if (
    validateInput('password', password, errors) &&
    password !== confirmPassword
  ) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  validateInput('username', username, errors);
  validateInput('password', password, errors);

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
