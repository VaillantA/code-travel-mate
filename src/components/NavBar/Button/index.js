import React from 'react';
import './style.scss';
import { Link, NavLink } from 'react-router-dom';


const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
      'btn--medium',
      'btn--large'
]

export const Button = ({
  type,
  onClick,
  buttonsStyle,
  buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonsStyle) ? buttonsStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
      
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} href="/registration">
          <NavLink  to="/registration">Sign Up</NavLink>
        </button>
    )
}
