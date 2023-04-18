import React from 'react';
import PropTypes from 'prop-types';
import css from './Error.module.css'

export const Error = ({ text }) => {
  return <p className={css.error}>{text}</p>;
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};
