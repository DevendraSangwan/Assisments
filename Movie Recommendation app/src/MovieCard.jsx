function MovieCard({
    movie,
    liked,
    watchlisted,
    onlike,
    onWatchlist,
}){
return (
    <div className="movie-card">
<img src={movie.image} alt={movie.title} />
<div className="movie-content">
   <h2>{movie.title}</h2>
   <button className={liked ? "liked-btn":"like-btn"}
   onClick={()=>onlike(movie.id)}>
{liked ? "Liked":"Like"}
   </button>
   <button className="watch-btn"
   onClick={()=>onWatchlist(movie.id)}>
   {watchlisted ? "Remove from Watchlist":"Add to Watchlist"}
   </button>
</div>
    </div>
)
};
export default MovieCard;
