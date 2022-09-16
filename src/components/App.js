import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { AppBar } from "./AppBar";
import { Error } from "./Error";
import img from 'components/images/404-error-page-examples-best.jpg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavButton } from "components/GlobalStyles";
import { ProgressBar } from "react-loader-spinner";
import { ProgressBarStyle } from "components/services/fetchMovies";

const Home = lazy(() => import('../pages/Home').then(module => ({
  ...module,
  default: module.Home,
})));
const Movies = lazy(() => import('../pages/Movies/Movies').then(module => ({
  ...module,
  default: module.Movies,
})));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails').then(module => ({
  ...module,
  default: module.MovieDetails,
})));
const Cast = lazy(() => import('./Cast/Cast').then(module => ({
  ...module,
  default: module.Cast,
})));
const Reviews = lazy(() => import('./Reviews/Reviews').then(module => ({
  ...module,
  default: module.Reviews,
})));

export const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<ProgressBar {...ProgressBarStyle}/>}>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route index element="For more information, please click the appropriate button👆" />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={
          <Error errorImg={img}>
            <NavButton to="/">Back to home</NavButton>
          </Error>} />
      </Routes>
      </Suspense>
      <GlobalStyle />
      <ToastContainer autoClose={3000}/>
    </>
  );
};

/* <div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'
  }}
>
  React homework template
</div> */
