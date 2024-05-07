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

  // if (isLoading) {
  //   return (
  //     <QueryClientProvider client={queryClient}>
  //       <div className="w-full min-h-screen bg-gray-100 p-4">
  //         <div className="max-w-7xl mx-auto shadow-lg rounded-lg bg-white p-6">
  //           <div className="flex justify-center">
  //             <LoadingSpinner />
  //           </div>
  //         </div>
  //       </div>
  //     </QueryClientProvider>
  //   );
  // }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto shadow-lg rounded-lg bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-black text-gray-800">영화 소개</div>
          <button
            className="flex items-center text-gray-800 bg-transparent hover:bg-gray-200 rounded p-2 transition duration-150"
            onClick={goPrev}
          >
            <GrPrevious />
            돌아가기
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <tbody>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  영화 명
                </th>
                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                  {data?.movieNm}
                </td>
              </tr>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  영문 명
                </th>
                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                  {data?.movieNmEn}
                </td>
              </tr>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  장르
                </th>
                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                  {data?.genres.map((element, idx) => (
                    <div key={`genre-${idx}`}>{element.genreNm}</div>
                  ))}
                </td>
              </tr>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  배우
                </th>
                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                  <div className="flex flex-wrap gap-4">
                    {data?.actors.map((actor, idx) => (
                      <span key={`actor-${idx}`} className="whitespace-nowrap">
                        {actor.peopleNm}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  연출
                </th>
                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                  {data?.directors.map((element, idx) => (
                    <div key={`director-${idx}`}>{element.peopleNm}</div>
                  ))}
                </td>
              </tr>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  등급 구분
                </th>
                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                  {data?.audits[0].watchGradeNm}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Page;
