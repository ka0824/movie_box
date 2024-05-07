'use client';

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import useDate from '@/customHooks/useDate';
import Toggle from './components/Toggle';
import Daily from './components/Daily';
import Weekend from './components/Weekend';

const queryClient = new QueryClient();

function Page() {
  const { date, setDate, formatted } = useDate();
  const [movieType, setMovieType] = useState('전체');
  const [movieNation, setMovieNation] = useState('전체');
  const [type, setType] = useState('일별');

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div className="text-xl font-black">박스오피스</div>
        <Toggle type={type} setType={setType} setDate={setDate}></Toggle>
        <div className="mt-4 mb-4 flex flex-wrap items-center">
          <div className="mb-4 mr-4">
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date || new Date())}
              dateFormat="yyyy년 MM월 dd일"
              maxDate={
                type === '일별'
                  ? new Date(new Date(Date.now() - 24 * 60 * 60 * 1000))
                  : new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
              }
            ></DatePicker>
          </div>
          <div className="flex items-center mb-4 ml-4">
            <select
              className="w-30 mr-4"
              onChange={(e) => setMovieType(e.target.value)}
            >
              <option value="전체">전체</option>
              <option value="Y">다양성 영화</option>
              <option value="N">상업 영화</option>
            </select>
            <select
              className="w-30"
              onChange={(e) => setMovieNation(e.target.value)}
            >
              <option value="전체">전체</option>
              <option value="K">한국 영화</option>
              <option value="F">외국 영화</option>
            </select>
          </div>
        </div>
        {type === '일별' && (
          <Daily
            formatted={formatted}
            movieType={movieType}
            movieNation={movieNation}
          ></Daily>
        )}
        {type === '주중 / 주간' && (
          <Weekend
            formatted={formatted}
            movieType={movieType}
            movieNation={movieNation}
          ></Weekend>
        )}
      </div>
    </QueryClientProvider>
  );
}

export default Page;
