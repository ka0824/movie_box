import LoadingSpinner from '@/component/loading-spinner';
import useMovieData from '@/customhook/use-movie-data';
import { GrPrevious } from 'react-icons/gr';
import { useRouter } from 'next/router';
import { Actor, Director, Genre } from '@/type/global';

function Index() {
  const router = useRouter();
  const [, , movieId] = router.asPath.split('/');
  const { isLoading, error, data } = useMovieData(movieId);
  function goPrev() {
    router.back();
  }

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  return (
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
                {data?.genres.map((element: Genre, idx: number) => (
                  <div key={`genre-${idx}`}>{element.genreNm}</div>
                ))}
              </td>
            </tr>
            <tr>
              <th>배우</th>
              <td>
                {data?.actors.map((element: Actor, idx: number) => (
                  <div key={`actor-${idx}`}>{element.peopleNm}</div>
                ))}
              </td>
            </tr>
            <tr>
              <th>연출</th>
              <td>
                {data?.directors.map((element: Director, idx: number) => (
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
  );
}

export default Index;
