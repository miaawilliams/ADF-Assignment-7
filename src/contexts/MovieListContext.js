import { createContext, useContext } from 'react';

export const MovieListContext = createContext();

export function useMovieList() {
  const context = useContext(MovieListContext);
  if (!context) {
    throw new Error('useMovieList must be used within MovieListProvider');
  }
  return context;
}
