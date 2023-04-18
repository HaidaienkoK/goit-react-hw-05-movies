

import axios from 'axios';

const key = 'dea2d79a9d2826570ce7fe158e8c2542';

export const fetchTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
  );
  const trendingMovies = response.data.results;

  return trendingMovies;
};
