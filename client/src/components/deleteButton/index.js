import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import classes from './index.module.css';

export default ({ callback = () => {} }) => {
  return (
    <div
      className={`${classes.buttonContainer} ${classes.trashButtonContainer}`}
    >
      <button
        className={`${classes.button} ${classes.trashButton}`}
        onClick={callback}
      >
        <IconContext.Provider
          value={{ color: 'white', className: classes.icon }}
        >
          <div className={classes.iconContainer}>
            <FaTrash />
          </div>
        </IconContext.Provider>
      </button>
    </div>
  );
};
