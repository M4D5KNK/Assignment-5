import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./GenreView.css";

const genres = [
  { genre: "Action", id: 28 },
  { genre: "Adventure", id: 12 },
  { genre: "Animation", id: 16 },
  { genre: "Crime", id: 80 },
  { genre: "Family", id: 10751 },
  { genre: "History", id: 36 },
  { genre: "Fantasy", id: 14 },
  { genre: "Horror", id: 27 },
  { genre: "Sci-Fi", id: 878 },
  { genre: "Mystery", id: 9648 },
];

function GenreView() {
  const { genre_id } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const selectedGenre = genres.find(genre => genre.id === parseInt(genre_id));
  console.log(genre_id);
  const genreName = selectedGenre ? selectedGenre.genre : "Movies in Genre";

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${genre_id}&page=${page}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchMovies();
  }, [genre_id, page]);

  return (
    <div className="hero">
      <div className="featured-movies-grid">
            {movies.map(movie => (
                <div className="movie-card" key={movie.id}>
                   <Link to={`/movies/details/${movie.id}`}>
                   <img 
                        src={movie.poster_path 
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                            : 'https://via.placeholder.com/500x750?text=No+Poster'
                        } 
                        alt={movie.title} 
                    />
                   </Link>
                    <h3>{movie.title}</h3>
                    <p>Rating: {movie.vote_average?.toFixed(1)}</p>
                </div>
            ))}
        </div>

      <div className="genre-view-pagination-container">
        <button
          className="genre-view-pagination-button"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Prev
        </button>
        <button
          className="genre-view-pagination-button"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GenreView;