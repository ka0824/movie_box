'use client';

import LoadingSpinner from '@/app/components/LoadingSpinner';
import useMovieData from '@/customHooks/useMovieData';
import { GrPrevious } from 'react-icons/gr';
import { useRouter } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function Page({ params }) {
  const router = useRouter();
  const { isLoading, error, data } = useMovieData(params.id);
  function goPrev() {
    router.back();
  }

  //   if (isLoading) {
  //     return (
  //       <QueryClientProvider client={queryClient}>
  //         <div className="flex justify-center">
  //           <LoadingSpinner></LoadingSpinner>
  //         </div>
  //       </QueryClientProvider>
  //     );
  //   }

  return (
    // <QueryClientProvider client={queryClient}>
    <div className="flex flex-col">
      <div className="font-black text-xl">영화 소개</div>
      <div className="w-fit ml-auto mr-auto">
        <div className="flex justify-end">
          <button className="flex items-center mb-4" onClick={goPrev}>
            <GrPrevious></GrPrevious>돌아가기
          </button>
        </div>
        <table>
          <tbody>
            <tr>
              <th>영화 명</th>
              <td>{data?.movieNm}</td>
            </tr>
            <tr>
              <th>영문 명</th>
              <td>{data?.movieNmEn}</td>
            </tr>
            <tr>
              <th>장르</th>
              <td>
                {data?.genres.map((element, idx) => (
                  <div key={`genre-${idx}`}>{element.genreNm}</div>
                ))}
              </td>
            </tr>
            <tr>
              <th>배우</th>
              <td>
                {data?.actors.map((element, idx) => (
                  <div key={`actor-${idx}`}>{element.peopleNm}</div>
                ))}
              </td>
            </tr>
            <tr>
              <th>연출</th>
              <td>
                {data?.directors.map((element, idx) => (
                  <div key={`director-${idx}`}>{element.peopleNm}</div>
                ))}
              </td>
            </tr>
            <tr>
              <th>등급 구분</th>
              <td>{data?.audits[0].watchGradeNm}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    // </QueryClientProvider>
  );
}

export default Page;
