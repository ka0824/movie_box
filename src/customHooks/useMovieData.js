import { useState, useEffect } from 'react';
import axios from 'axios';

function useMovieData(movieId) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(
          'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json',
          {
            params: {
              key: process.env.NEXT_PUBLIC_API_KEY,
              movieCd: movieId,
            },
          }
        );
        setData(result.data.movieInfoResult?.movieInfo || null);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      }
      setIsLoading(false);
    };

    if (movieId) {
      fetchMovieData();
    }

    return () => {
      setData(null);
      setError(null);
      setIsLoading(false);
    };
  }, [movieId]);

  return { isLoading, error, data };
}

export default useMovieData;
