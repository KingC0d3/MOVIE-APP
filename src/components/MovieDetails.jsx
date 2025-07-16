import { useParams, Link } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-details">
        <h2>Movie not found</h2>
        <Link to="/" className="back-btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="movie-details">
      <Link to="/" className="back-btn">← Back to Home</Link>
      
      <div className="movie-details-content">
        <div className="movie-details-poster">
          <img src={movie.posterURL} alt={movie.title} />
        </div>
        
        <div className="movie-details-info">
          <h1>{movie.title}</h1>
          <div className="movie-rating">
            <span>Rating: {movie.rating}/10</span>
          </div>
          <p className="movie-description">{movie.description}</p>
          
          {movie.trailerURL && (
            <div className="movie-trailer">
              <h3>Trailer</h3>
              <iframe
                width="100%"
                height="315"
                src={movie.trailerURL}
                title={`${movie.title} trailer`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;