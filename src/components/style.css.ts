import { styleVariants, style } from '@vanilla-extract/css';

export const searchContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
});

export const searchInput = style({
  width: '300px',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '2px solid #ccc',
  marginBottom: '20px',
  outline: 'none',
  transition: 'border 0.3s ease',
  ':focus': {
    border: '2px solid #0070f3',
  },
});

export const searchResults = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '20px',
  width: '100%',
});

export const albumCard = style({
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  padding: '20px',
  marginBottom: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
});

export const albumImage = style({
  width: '100%',
  height: 'auto',
});

export const albumDetails = style({
  padding: '10px',
  textAlign: 'center',
});

export const favoriteButton = style({
  padding: '8px 12px',
  fontSize: '14px',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
  ':hover': {
    backgroundColor: '#005bb5',
  },
});




export const containerImg = style({

  width: '100vw',
  height: '100vh',
  display: 'flex',
  
 
  justifyContent: 'center',
  overflow: 'scroll'
});

export const background = style({
  position: 'absolute', 
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1, 
});


