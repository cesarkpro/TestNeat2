"use client";
import * as styles from '../app/page.css';
import React from 'react';
import { useState}  from 'react';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import Button from '../components/Button';
import { containerB, input, button } from '../components/InputField.css';
import Image from 'next/image';
import { containerImg, background } from '../components/style.css';
import { columnsUi, columnUi } from '../components/Button.css';



const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [email, setEmail] = useState('');
  return (

  <section className={containerImg}>
        <div >
      <Image
        src="/bg.jpg" 
        alt="Background image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={background}
      />
    
    <div style={{ marginTop: '17rem' }} className={styles.mt12} >
   
    

    <div className={columnsUi}>
      {/* Colonne pour les boutons gris */}
      <div className={columnUi}>
      <h3 >UI Kit - Boutton 1</h3>
        <Button  variant="filled" color="gray"><span className={styles.white}>Filled</span></Button>
        <Button variant="outlined" color="gray">Outlined</Button>
        <Button variant="ghost" color="gray">Ghost</Button>
      </div>

      {/* Colonne pour les boutons verts */}
      <div className={columnUi}>
      <h3 >UI Kit - Boutton 2</h3>
        <Button variant="filled" color="green"><span className={styles.white}>Filled</span></Button>
        <Button variant="outlined" color="green">Outlined</Button>
        <Button variant="ghost" color="green">Ghost</Button>
      </div>

      {/* Colonne pour les boutons rouges */}
      <div className={columnUi}>
      <h3 >UI Kit - Boutton 3</h3>
        <Button variant="filled" color="red"><span className={styles.white}>Filled</span></Button>
        <Button variant="outlined" color="red">Outlined</Button>
        <Button variant="ghost" color="red">Ghost</Button>
      </div>
    </div>

      <div className={styles.container}>
        <div className={styles.column2}>
        <h3 className={styles.white}>UI Kit - Input</h3>
        <div className={containerB}>
      <input
        className={input}
        type="email"
        placeholder="Votre texte ici"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <button className={button} onClick={() => alert('Access Requested')}>
      🔍
      </button>

      
      </div>
      <div style={{ marginTop: '3rem' }} >
        <Link href="/favorites" passHref>
      <Button variant="outlined" color="gray"><span className={styles.white}>Page - Rechercher un album</span></Button>
      </Link>
      </div>
        </div>
        <div className={styles.column2}>

      
      


      

        <div className={styles.column2}>
        
        
        
      </div>

    </div>


    </div>
     </div>
     </div>
  </section>
)
}
export default App;

