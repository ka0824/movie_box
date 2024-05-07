import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

function useWeekendBoxoffice(formatted, movieType, movieNation) {
  const { isLoading, error, data, refetch, remove } = useQuery(
    'weekendBoxOffice',
    async () => {
      try {
        const result = await axios.get(
          'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json',
          {
            params: {
              key: process.env.NEXT_PUBLIC_API_KEY,
              targetDt: formatted,
              multiMovieYn: movieType === '전체' ? undefined : movieType,
              repNationCd: movieNation === '전체' ? undefined : movieNation,
            },
          }
        );

        console.log(formatted);
        const conversed =
          result.data.boxOfficeResult?.weeklyBoxOfficeList.map((element) => {
            return {
              ...element,
              audiCnt: Number(element.audiCnt),
              audiAcc: Number(element.audiAcc),
            };
          }) || [];

        return conversed;
      } catch (error) {
        return [];
      }
    }
  );

  useEffect(() => {
    remove();
    refetch();
  }, [formatted, movieType, movieNation, refetch]);

  return { isLoading, error, data };
}

export default useWeekendBoxoffice;
