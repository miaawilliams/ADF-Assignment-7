import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";
import { useMovieList } from "../contexts/MovieListContext";

function Watchlist() {
    const { movieList } = useMovieList();

    return (
        <main className="main-content">
            <div className="content-header">
                <h2>Want to Watch</h2>
                <p>Movies you're planning on watching!</p>
            </div>
            {movieList.length > 0 ? (
                <MovieGrid movies={movieList} />
            ) : (
                <div className="empty-state">
                    <p>No movies in your watchlist yet. Browse and add your future watches on the home page!</p>
                </div>
            )}
        </main>
    );
};

export default Watchlist;