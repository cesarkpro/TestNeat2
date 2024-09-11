import React from 'react';
import { buttonBase, buttonVariants, colorVariants } from './Button.css';


interface ButtonProps {
  variant: 'filled' | 'outlined' | 'ghost';
  color: 'gray' | 'red' | 'green';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, color, onClick, children }) => {
  return (
    <button
      className={`${buttonBase} ${buttonVariants[variant]} ${colorVariants[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;