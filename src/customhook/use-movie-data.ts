import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

function useMovieData(movieId: string) {
  const { isLoading, error, data, refetch, remove } = useQuery(
    'movieData',
    async () => {
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

        const conversed = result.data.movieInfoResult?.movieInfo || [];
        return conversed;
      } catch (error) {
        return [];
      }
    }
  );

  useEffect(() => {
    remove();
    refetch();
  }, [movieId]);

  return { isLoading, error, data };
}

export default useMovieData;
