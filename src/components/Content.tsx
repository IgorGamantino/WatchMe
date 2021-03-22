import { useEffect, useState,Dispatch } from "react";

import { api } from '../services/api';
import { MovieCard } from '../components/MovieCard';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface EstatesProps {
 movies():Dispatch<MovieProps[]>;
 setMovies(value:MovieProps[]): void;
 selectedGenreId(): void; 
 selectedGenre(): GenreResponseProps[];
}



export function Content({movies,setMovies,selectedGenre,selectedGenreId }:EstatesProps) {
  
  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data)
    })
  })

  return (
  <div className="container">
  <header>
    <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>

  </div>

  )
}
