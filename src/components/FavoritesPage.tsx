import React from 'react';
import { useFavoritesStore } from '../store/store';
import { albumCard, albumImage, albumDetails } from './style.css';

const FavoritesPage: React.FC = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div>
      
      <div>
        {favorites.length === 0 ? (
          <p>Pas encore de favoris..</p>
        ) : (
          favorites.map((album) => (
            <div key={album.id} className={albumCard}>
              <img src={album.artworkUrl} alt={`${album.title} cover`} className={albumImage} />
              <div className={albumDetails}>
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;