import MovieCard from './MovieCard';

function MovieList({ movies, onDeleteMovie }) {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onDelete={onDeleteMovie}
          />
        ))
      )}
    </div>
  );
}

export default MovieList;