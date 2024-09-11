import Link from 'next/link';
import { ReactNode } from 'react'; 
import Button from '../components/Button';
import { containerImg, background } from '../components/style.css';
import Image from 'next/image';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (

  
    <div className={containerImg}>
  <Image
    src="/bg2.jpg" 
    alt="Background image"
    layout="fill"
    objectFit="cover"
    quality={100}
    className={background}
  />

    <div style={{ padding: '20px',marginTop: '17rem' }}>
      <nav style={{ marginBottom: '20px' }}>
        <ul style={{ display: 'flex', gap: '20px' }}>
          <li>


            <Link href="/search" passHref>
        <Button variant="outlined" color="green">
        Rechercher
        </Button>
        </Link>

          </li>
          <li>
          <Link href="/favorites" passHref>
        <Button variant="outlined" color="green">
          Mes favoris
        </Button>
        </Link>
          
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
    </div>

  );
};

export default Layout;