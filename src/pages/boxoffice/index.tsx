import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useDate from '@/customhook/use-date';
import Toggle from './toggle';
import Daily from './daily';
import Weekend from './weekend';

function Index() {
  const { date, setDate, formatted } = useDate();
  const [type, setType] = useState('일별');

  return (
    <div>
      <div className="text-xl font-black">박스오피스</div>
      <Toggle type={type} setType={setType}></Toggle>
      <div className="mt-4">
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date || new Date())}
          dateFormat="yyyy년 MM월 dd일"
        ></DatePicker>
      </div>
      {type === '일별' && <Daily></Daily>}
      {type === '주중 / 주간' && <Weekend></Weekend>}
    </div>
  );
}

export default Index;
