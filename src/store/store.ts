import create from 'zustand';

interface Album {
  id: string;
  title: string;
  artist: string;
  artworkUrl: string;
}

interface FavoritesState {
  favorites: Album[];
  addFavorite: (album: Album) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: [],
  addFavorite: (album) =>
    set((state) => ({
      favorites: [...state.favorites, album],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((album) => album.id !== id),
    })),
}));
