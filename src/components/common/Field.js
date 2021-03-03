// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Field = ({
  name,
  type,
  placeholder,
  className,
}) => (
  <input
    placeholder={placeholder}
    name={name}
    type={type}
    className={className}
  />
);

// == PropTypes

Field.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Field.defaultProps = {
  className: '',
};

// == Export
export default Field;
