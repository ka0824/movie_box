import useWeekendBoxOffice from '@/customhook/use-weekend-boxoffice';
import { useState } from 'react';
import Rank from './rank';
import Bargraph from './bargraph';
import Piegraph from './piegraph';

function Weekend({
  formatted,
  movieType,
  movieNation,
}: {
  formatted: string;
  movieType: string;
  movieNation: string;
}) {
  const [weekType, setWeekType] = useState('1');
  const { isLoading, error, data } = useWeekendBoxOffice(
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
        <Bargraph data={data} isLoading={isLoading} error={error}></Bargraph>
      </div>
      <div className="mb-8">
        <Piegraph data={data} isLoading={isLoading} error={error}></Piegraph>
      </div>
    </div>
  );
}

export default Weekend;
