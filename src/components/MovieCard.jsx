import { Link } from 'react-router-dom';

function MovieCard({ movie, onDelete }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-card-link">
        <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p className="movie-description">{movie.description}</p>
          <div className="movie-rating">
            <span>Rating: {movie.rating}/10</span>
          </div>
        </div>
      </Link>
      {onDelete && (
        <button onClick={() => onDelete(movie.id)} className="delete-btn">
          Delete
        </button>
      )}
    </div>
  );
}

export default MovieCard;
