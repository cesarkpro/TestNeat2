import React, { useState } from 'react';
import { containerB, input, button } from './InputField.css';

const InputFieldWithButton: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={containerB}>
      <input
        className={input}
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className={button} onClick={() => alert('Access Requested')}>
        GET ACCESS
      </button>
    </div>
  );
};

export default InputFieldWithButton;