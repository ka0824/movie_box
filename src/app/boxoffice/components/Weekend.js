import useWeekendBoxoffice from '@/customhooks/useWeekendBoxoffice';
import { useState } from 'react';
import Rank from './Rank';
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';

function Weekend({ formatted, movieType, movieNation }) {
  const [weekType, setWeekType] = useState('1');
  const { isLoading, error, data } = useWeekendBoxoffice(
    formatted,
    movieType,
    movieNation
  );

  return (
    <div className="flex flex-col">
      <div>
        <select
          style={{ width: '100px' }}
          defaultValue={'1'}
          onChange={(e) => setWeekType(e.target.value)}
        >
          <option value="0">주간</option>
          <option value="1">주말</option>
          <option value="2">주중</option>
        </select>
      </div>
      <div className="mb-8">
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

export default Weekend;
