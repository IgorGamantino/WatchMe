import React, { useState, createContext, useContext, useEffect } from "react";
import { api } from "../services/api";

interface GenereContext {
  selectedGenreId: number;
  setSelectedGenreId(id: number): void;
  selectedGenre: GenreResponseProps;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

const GenreContext = createContext<GenereContext>({} as GenereContext);

export const GenereProvider: React.FC = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);
  
  return (
    <GenreContext.Provider value={{selectedGenreId, setSelectedGenreId, selectedGenre}}>
      {children}
    </GenreContext.Provider>
  );
};

export function useGenre() {
  const context = useContext(GenreContext);

  return context
}