import { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import './App.css';

const initialMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterURL: "https://via.placeholder.com/300x450?text=Shawshank",
    rating: 9.3
  },
  {
    id: 2,
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterURL: "https://via.placeholder.com/300x450?text=Godfather",
    rating: 9.2
  }
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const handleAddMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const handleDeleteMovie = (movieId) => {
    const updatedMovies = movies.filter(movie => movie.id !== movieId);
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

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
    <div className="app">
      <header>
        <h1>My Movie Collection</h1>
      </header>
      
      <main>
        <AddMovieForm onAddMovie={handleAddMovie} />
        <Filter onFilterChange={handleFilterChange} />
        <MovieList movies={filteredMovies} onDeleteMovie={handleDeleteMovie} />
      </main>
    </div>
  );
}

export default App;
