import useDailyBoxOffice from '@/customhook/use-daily-boxoffice';
import Rank from './rank';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Bargraph from './bargraph';
import Piegraph from './piegraph';

function Daily({
  formatted,
  movieType,
  movieNation,
}: {
  formatted: string;
  movieType: string;
  movieNation: string;
}) {
  const { isLoading, error, data } = useDailyBoxOffice(
    formatted,
    movieType,
    movieNation
  );

  return (
    <div className="flex flex-col">
      <div className="mb-4 font-black text-xl">일별 박스오피스</div>
      <div className="mb-8">
        <Rank data={data} isLoading={isLoading} error={error}></Rank>
      </div>
      <div className="mb-8">
        <Bargraph data={data} isLoading={isLoading} error={error}></Bargraph>
      </div>
      <div className="mb-8">
        <Piegraph data={data} isLoading={isLoading} error={error}></Piegraph>
      </div>
    </div>
  );
}

export default Daily;
