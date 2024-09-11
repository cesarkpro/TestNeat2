import React from 'react';
import Layout2 from './layout2'; 
import FavoritesPage from '../components/FavoritesPage'; 



const Favorites: React.FC = () => {
  return (
    
    <Layout2>
          <div>
      <FavoritesPage />
      </div>
    </Layout2>
    
  );
};

export default Favorites;