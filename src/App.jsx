import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import './App.css';

const initialMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterURL: "https://via.placeholder.com/300x450?text=Shawshank",
    rating: 9.3,
    trailerURL: "https://www.youtube.com/embed/6hB3S9bIaco"
  },
  {
    id: 2,
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterURL: "https://via.placeholder.com/300x450?text=Godfather",
    rating: 9.2,
    trailerURL: "https://www.youtube.com/embed/sY1S34973zA"
  }
];

function App() {
  const [movies, setMovies] = useState(initialMovies);

  const handleAddMovie = (newMovie) => {
    const movieWithTrailer = {
      ...newMovie,
      trailerURL: newMovie.trailerURL || ''
    };
    setMovies([...movies, movieWithTrailer]);
  };

  const handleDeleteMovie = (movieId) => {
    setMovies(movies.filter(movie => movie.id !== movieId));
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>My Movie Collection</h1>
        </header>
        
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  movies={movies}
                  onAddMovie={handleAddMovie}
                  onDeleteMovie={handleDeleteMovie}
                />
              } 
            />
            <Route 
              path="/movie/:id" 
              element={<MovieDetails movies={movies} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
