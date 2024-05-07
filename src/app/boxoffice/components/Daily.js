import useDailyBoxOffice from '@/customHooks/useDailyBoxoffice';
import Rank from './Rank';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';

function Daily({ formatted, movieType, movieNation }) {
  const { isLoading, error, data } = useDailyBoxOffice(
    formatted,
    movieType,
    movieNation
  );

  return (
    <div className="flex flex-col">
      <div className="mb-4 font-black text-xl">일별 박스오피스</div>
      <div className="mb-8 scrollbar-hide">
        <Rank data={data} isLoading={isLoading} error={error}></Rank>
      </div>
      <div className="mb-8">
        <BarGraph data={data} isLoading={isLoading} error={error}></BarGraph>
      </div>
      <div className="mb-8">
        <PieGraph data={data} isLoading={isLoading} error={error}></PieGraph>
      </div>
    </div>
  );
}

export default Daily;
