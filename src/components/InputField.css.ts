import { styleVariants, style } from '@vanilla-extract/css';

export const containerB = style({
  display: 'flex',
  alignItems: 'center',
});

export const input = style({
  width: '250px',
  padding: '10px',
  border: '2px solid #00b3b3', 
  borderRight: 'none',
  borderRadius: '5px 0 0 5px', 
  fontSize: '16px',
  color: '#ccc',
  backgroundColor: 'transparent', 
  '::placeholder': {
    color: '#ccc', 
  },
});

export const button = style({
  padding: '10px 20px',
  border: '2px solid #00b3b3', 
  borderRadius: '0 5px 5px 0',
  backgroundColor: 'transparent', 
  color: '#00b3b3', 
  fontSize: '16px',
  cursor: 'pointer',
  outline: 'none',
  ':hover': {
    backgroundColor: '#00b3b3', 
    color: 'white', 
  },
});

export const inputBase = style({
  padding: '10px',
  borderRadius: '5px',
  fontSize: '16px',
  outline: 'none',
});

export const inputVariants = styleVariants({
  filled: {
    backgroundColor: '#f0f0f0',
    border: '2px solid #ccc',
  },
  outlined: {
    backgroundColor: 'transparent',
    border: '2px solid #ccc',
  },
});

export const colorVariants = styleVariants({
  gray: {
    color: 'gray',
    backgroundColor: 'gray',
  },
  red: {
    color: 'red',
    backgroundColor: 'red',
  },
  green: {
    color: 'green',
    backgroundColor: 'green',
  },
});