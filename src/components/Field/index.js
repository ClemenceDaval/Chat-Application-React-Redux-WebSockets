import React from 'react';
import PropTypes from 'prop-types';

import './field.scss';

// On définit un composant générique qui permet de définir la
// portion d'UI représentatn un champ
const Field = ({
  type,
  name,
  placeholder,
  value,
  setValue,
  className,
}) => (
  <input
    className={ `fiel ${className}` }
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={(event) => setValue(event.target.value)}
  />
);

// pour les props non obligatoire (non isRequired)
// on détermine la valeur à utiliser dans le cas où
// elle n'est pas indiquée
Field.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
};

Field.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Field;
