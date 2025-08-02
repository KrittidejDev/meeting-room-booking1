"use client";
import React, { useState } from "react";
import cx from "classnames";
// import PropTypes from 'prop-types'
import { TextFieldPasswordStyled } from "./styled";
import { Icons } from "@/components";

const TextFieldPassword = ({
  theme_standard,
  label,
  disabled,
  errors,
  value,
  require,
  onChange,
  onChangeCus,
  ...props
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  const [_isVisible, _setIsVisible] = useState(false);

  const _handleClick = () => {
    _setIsVisible(!_isVisible);
  };

  return (
    <TextFieldPasswordStyled className={customClass} disabled={disabled}>
      {label && (
        <div className="label">
          {label} {require && <span>*</span>}
        </div>
      )}
      <div className="input_password_block">
        <input
          {...props}
          type={!_isVisible ? "password" : "text"}
          disabled={disabled}
          value={value}
          onChange={(e) => {
            onChange(e);
            onChangeCus && onChangeCus(e);
          }}
        />
        <div className="icon_visible" onClick={_handleClick}>
          <Icons.FieldVisible />
        </div>
      </div>
      {errors && <div className="errors">{errors}</div>}
    </TextFieldPasswordStyled>
  );
};

TextFieldPassword.propTypes = {};

export default TextFieldPassword;
