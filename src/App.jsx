import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/navigation/Navigation";
import css from "./App.module.css";

const MoviesPage = lazy(() => import("./pages/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage.jsx"));
const MovieCast = lazy(() => import("./components/movie-cast/MovieCast.jsx"));
const MovieReviews = lazy(() =>
  import("./components/movie-reviews/MovieReviews.jsx")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));

function App() {
  return (
    <div className={css.container}>
      <div>
        <Navigation />
      </div>

      {/* TODO: Add Loader */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
