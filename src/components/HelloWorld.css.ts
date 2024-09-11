import { style } from '@vanilla-extract/css';

export const root = style({
  background: '#245655',
  color: 'white',
  alignItems: 'center',
    marginBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
  padding: '16px',
  transition: 'opacity .1s ease', 
  ':hover': {
    opacity: 0.8,
  },
});
