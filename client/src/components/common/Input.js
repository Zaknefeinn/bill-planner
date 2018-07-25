import React from 'react';
import classnames from 'classnames';

import './Common.css';

const InputGroup = ({
  name,
  placeholder,
  value,
  errors,
  type,
  onChange,
  classType
}) => {
  return (
    <div className="form-div">
      <input
        className={classnames(classType, {
          'is-invalid': errors
        })}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
