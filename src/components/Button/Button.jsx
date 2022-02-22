import React from 'react';
import './button.css';

const Button = ({ onClick, className, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
