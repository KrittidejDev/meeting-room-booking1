import React from "react";
import cx from "classnames";
// import PropTypes from 'prop-types'
import { TextFieldStyled } from "./styled";

const TextField = ({
  theme_standard,
  label,
  disabled,
  errors,
  value,
  require,
  onChangeCus,
  onChange,
  ...props
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <TextFieldStyled className={customClass} disabled={disabled}>
      {label && (
        <div className="label">
          {label} {require && <span>*</span>}
        </div>
      )}
      <input
        {...props}
        value={value}
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.value);
          onChangeCus && onChangeCus(e.target.value);
        }}
      />
      {errors && <div className="errors">{errors}</div>}
    </TextFieldStyled>
  );
};

TextField.propTypes = {};

export default TextField;
