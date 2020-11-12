import { useState } from 'react';

export const useForm = (callback, initState = {}) => {
  const [values, setValues] = useState(initState);

  const onChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  return { onChange, handleSubmit, values };
};
