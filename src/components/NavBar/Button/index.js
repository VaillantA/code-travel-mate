import React from 'react';
import './style.scss';

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
      'btn--medium',
      'btn--large'
]

export const Button = ({
  children,
  type,
  onClick,
  buttonsStyle,
  buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonsStyle) ? buttonsStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
          {children}
      </button>
    )
}
