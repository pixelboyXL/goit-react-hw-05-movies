import { lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { AppBar } from "./AppBar";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "pages/MovieDetails";
import { Error } from "./Error";
import img from 'components/images/404-error-page-examples-best.jpg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cast = lazy(() => import('./Cast').then(module => ({
  ...module,
  default: module.Cast,
})));
const Reviews = lazy(() => import('./Reviews').then(module => ({
  ...module,
  default: module.Reviews,
})));

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={
          <Error errorImg={img}>
            <NavLink to="/">Back to home</NavLink>
          </Error>} />
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={3000}/>
    </>
  );
};

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

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
