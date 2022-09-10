import axios from 'axios';

const KEY = '119d79b053f922516c6af4b71b0fd3ac';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const IMG_BASE_URL = `https://image.tmdb.org/t/p`;
export const IMG_W500 = `/w500`;
export const IMG_W400 = `/w400`;
export const IMG_W300 = `/w300`;
export const IMG_W200 = `/w200`;
export const IMG_W100 = `/w100`;
export const IMG_ORIG = `/original`;

export const checkImages = (type, imgForCheck) => {
    if (type === "poster") {
        return imgForCheck !== null ? `${IMG_BASE_URL}${IMG_W400}${imgForCheck}` : 'https://i.ibb.co/GPMFHG6/keep-calm-poster-not-found-1.png';
    }
    if (type === "profile") {
        return imgForCheck !== null ? `${IMG_BASE_URL}${IMG_W200}${imgForCheck}` : 'https://static.hdrezka.ac/i/nopersonphoto.png';
    }
};

export const getTrending = async (page = 1) => {
    const { data } = await axios.get(
        `/trending/movie/week?api_key=${KEY}&page=${page}`
    );
    return data;
};

export const getSearchMovie = async (query, page) => {
    const { data } = await axios.get(
        `/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}`
    );
    return data;
};

export const getMovieDetails = async id => {
    const { data } = await axios.get(`/movie/${id}?api_key=${KEY}&append_to_response=credits,reviews`);
    return data;
};

export const getMovieCast = async id => {
    const { data } = await axios.get(`/movie/${id}/credits?api_key=${KEY}`);
    return data;
};

export const getMovieReviews = async id => {
    const { data } = await axios.get(`/movie/${id}/reviews?api_key=${KEY}`);
    return data;
};