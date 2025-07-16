import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';

function Home({ movies, onAddMovie, onDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = ({ title, rating }) => {
    let filtered = movies;

    if (title) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filtered = filtered.filter(movie => movie.rating >= parseFloat(rating));
    }

    setFilteredMovies(filtered);
  };

  return (
    <>
      <AddMovieForm onAddMovie={onAddMovie} />
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} onDeleteMovie={onDeleteMovie} />
    </>
  );
}

export default Home;