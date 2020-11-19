// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Field = ({
  value,
  name,
  type,
  placeholder,
  onChange,
  className,
}) => {
  // == Handlers
  const handleChange = (evt) => {
    console.log('je suis là field custom');
    console.log(evt.target.value, name);
    onChange(evt.target.value, name);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      name={name}
      type={type}
      className={className}
    />
  );
};

// == PropTypes

Field.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Field.defaultProps = {
  className: '',
};

// == Export
export default Field;
