
import { createVar } from '@vanilla-extract/css';
import { globalStyle,createThemeContract,assignVars} from '@vanilla-extract/css';
  import { styleVariants, style } from '@vanilla-extract/css';



  export const buttonBase = style({
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    border: '2px solid transparent',
    marginBottom: '10px', // Pour espacer les boutons
  });
  
  export const buttonVariants = styleVariants({
    filled: {
      backgroundColor: 'currentColor',
      color: 'white',
      border: 'none',
     
      
    },
    outlined: {
      backgroundColor: 'transparent',
      border: '2px solid currentColor',
      color: 'currentColor',
    },
    ghost: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'currentColor',
    },
  });
  
  export const colorVariants = styleVariants({
    gray: {
      color: 'gray',
    },
    red: {
      color: 'red',
    },
    green: {
      color: 'green',
    },
  });
  
  export const columnsUi = style({
    display: 'flex',
    
    marginTop: '20px',
    justifyContent: 'space-between', // Pour écarter les colonnes également
    gap: '3rem',
  });
  
  export const columnUi = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '1rem',
    
  });

export const styleButton = style({
    background: '#245655',
    color: 'white',
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'Roboto',
    fontSize: '1.2em',
    
    marginTop: '2rem',
    transition: 'opacity .1s ease', 
    ':hover': {
      opacity: 0.8,
    },
  });

