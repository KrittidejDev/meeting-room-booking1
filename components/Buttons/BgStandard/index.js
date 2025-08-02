import React from "react";
import cx from "classnames";
// import PropTypes from 'prop-types'
import { BgStandardStyled } from "./styled";

const BgStandard = ({
  theme_standard,
  disabled,
  label,
  type = "button",
  onClick,
  iconFront,
  iconBack,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <BgStandardStyled className={customClass} disabled={disabled}>
      <button className="btn" type={type} disabled={disabled} onClick={onClick}>
        {iconFront && <span>{iconFront}</span>} {label}
        {iconBack && <span>{iconBack}</span>}
      </button>
    </BgStandardStyled>
  );
};

BgStandard.propTypes = {};

export default BgStandard;
