import axios from 'axios';

const key = 'dea2d79a9d2826570ce7fe158e8c2542';

export const fetchSearched = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
  );
  const searchedMovies = response.data.results;

  return searchedMovies;
};
