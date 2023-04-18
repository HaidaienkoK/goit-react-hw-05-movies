import axios from 'axios';

const key = 'dea2d79a9d2826570ce7fe158e8c2542';

export const fetchCast = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`
  );

  const details = response.data.cast;

  return details;
};
