import React from 'react';
import { useFavoritesStore } from '../store/store';
import { albumCard, albumImage, albumDetails, favoriteButton } from './style.css';

interface AlbumCardProps {
  id: string;
  title: string;
  artist: string;
  artworkUrl: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ id, title, artist, artworkUrl }) => {
  const addFavorite = useFavoritesStore((state) => state.addFavorite);

  return (
    <div className={albumCard}>
      <img src={artworkUrl} alt={`${title} cover`} className={albumImage} />
      <div className={albumDetails}>
        <h3>{title}</h3>
        <p>{artist}</p>
        <button className={favoriteButton} onClick={() => addFavorite({ id, title, artist, artworkUrl })}>
          Ajouter aux Favoris
        </button>
      </div>
    </div>
  );
};

export default AlbumCard;