'use client';

import { useState } from 'react';
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
      <div className="w-full min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto shadow-lg rounded-lg bg-white p-6">
          <div className="text-xl font-black text-gray-800 mb-6">
            박스오피스
          </div>
          <Toggle type={type} setType={setType} setDate={setDate} />
          <div className="mt-4 mb-4 flex flex-wrap items-center justify-between">
            <div className="flex-grow-0">
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date || new Date())}
                dateFormat="yyyy년 MM월 dd일"
                maxDate={
                  type === '일별'
                    ? new Date(new Date(Date.now() - 24 * 60 * 60 * 1000))
                    : new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                }
                className="form-input text-base px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <select
                className="form-select mr-2 w-30 text-base px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-600 shadow-sm transition-colors duration-150 bg-white text-gray-800"
                onChange={(e) => setMovieType(e.target.value)}
              >
                <option value="전체">전체</option>
                <option value="Y">다양성 영화</option>
                <option value="N">상업 영화</option>
              </select>

              <select
                className="form-select w-30 text-base px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-600 shadow-sm transition-colors duration-150 bg-white text-gray-800"
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
            />
          )}
          {type === '주중 / 주간' && (
            <Weekend
              formatted={formatted}
              movieType={movieType}
              movieNation={movieNation}
            />
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default Page;
