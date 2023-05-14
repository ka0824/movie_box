import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { DailyData } from '@/type/global';

function useDailyBoxOffice(
  formatted: string,
  movieType: string,
  movieNation: string
) {
  const { isLoading, error, data, refetch, remove } = useQuery<
    DailyData[],
    AxiosError
  >('dailyBoxOffice', async () => {
    try {
      const result = await axios.get(
        'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
        {
          params: {
            key: process.env.NEXT_PUBLIC_API_KEY,
            targetDt: formatted,
            multiMovieYn: movieType === '전체' ? undefined : movieType,
            repNationCd: movieNation === '전체' ? undefined : movieNation,
          },
        }
      );

      const conversed =
        result.data.boxOfficeResult?.dailyBoxOfficeList.map(
          (element: DailyData) => {
            return {
              ...element,
              audiCnt: Number(element.audiCnt),
              audiAcc: Number(element.audiAcc),
            };
          }
        ) || [];

      return conversed;
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    remove();
    refetch();
  }, [formatted, movieType, movieNation]);

  return { isLoading, error, data };
}

export default useDailyBoxOffice;
