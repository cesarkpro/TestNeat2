import React, { useState } from 'react';
import AlbumCard from './AlbumCard';
import { searchInput, searchResults, searchContainer } from './style.css';
import Button from '../components/Button';
import Link from 'next/link';

interface Album {
  trackId: string;
  collectionName: string;
  artistName: string;
  artworkUrl100: string;
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState<Album[]>([]);

  const handleSearch = async () => {
    const response = await fetch(`https://itunes.apple.com/search?term=${query}&entity=album`);
    const data = await response.json();
    setAlbums(data.results);
  };

  return (
    <div className={searchContainer}>
      <input
        type="text"
        className={searchInput}
        placeholder="Rechercher un albums..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
   
      <Button variant="outlined" color="green" onClick={handleSearch}>
        Rechercher
        </Button>

      <div className={searchResults}>
        {albums.map((album) => (
          <AlbumCard
            key={album.trackId}
            id={album.trackId}
            title={album.collectionName}
            artist={album.artistName}
            artworkUrl={album.artworkUrl100}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;