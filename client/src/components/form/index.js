import React from 'react';

import classes from './index.module.css';

export default function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={classes.container}>
      {children}
    </form>
  );
}

Form.InputContainer = ({ children, ...restProps }) => {
  return (
    <div className={classes.inputContainer} {...restProps}>
      {children}
    </div>
  );
};

Form.Label = ({ children, ...restProps }) => {
  return (
    <label className={classes.label} {...restProps}>
      {children}
    </label>
  );
};

Form.Input = ({ children, ...restProps }) => {
  return (
    <input className={classes.input} {...restProps}>
      {children}
    </input>
  );
};

Form.Errors = ({ errors, ...restProps }) => {
  return (
    <div {...restProps} className={classes.errors}>
      <ul>
        {Object.values(errors).map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

Form.Submit = ({ children, ...restProps }) => {
  return (
    <button className={classes.submit} {...restProps}>
      {children}
    </button>
  );
};
