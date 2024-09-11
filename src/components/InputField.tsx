import React from 'react';
import { inputBase, inputVariants, colorVariants } from './InputField.css';

interface InputFieldProps {
  label?: string;
  variant: 'filled' | 'outlined';
  color: 'gray' | 'red' | 'green';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ label, variant, color, value, onChange, icon }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
        <input
          className={`${inputBase} ${inputVariants[variant]} ${colorVariants[color]}`}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;