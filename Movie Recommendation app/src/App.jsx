import { useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
const moviesData = [
  {
    id:1,
    title: "Inception",
    image:
      "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg",
  },
  {
    id:2,
    title: "The Dark Knight",
    image:
      "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg",
  },
  {
    id:3,
    title: "Interstellar",
    image:
      "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg",
  },{
    id:4, 
    title: "The Matrix",
    image:
      "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg",
  }
];
function App(){
  const [likedMovies, setLikedMovies] = useState([]);
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const toogleLike = (id) => {
    if(likedMovies.includes(id)){
      setLikedMovies(likedMovies.filter(movieId => movieId !== id));
    } else {
      setLikedMovies([...likedMovies, id]);
    }
  };
const toggleWatchlist = (id) => {
  if(watchlistMovies.includes(id)){
    setWatchlistMovies(watchlistMovies.filter(movieId => movieId !== id));
  } else {
    setWatchlistMovies([...watchlistMovies, id]);
  }
};
return (
  <div className="app">
    <h1 className="heading">
Movie Recommendation App
    </h1>
    <h2 className="liked-cont">
      total liked movies: {likedMovies.length}
    </h2>
<div className="movies-container">
  {moviesData.map(movie => (
    <MovieCard
    key={movie.id}
    movie={movie}
    liked={likedMovies.includes(movie.id)}
    watchlisted={watchlistMovies.includes(movie.id)}
    onlike={toogleLike}
    onWatchlist={toggleWatchlist}
  />))}
</div>
  </div>
)
  }

  export default App;