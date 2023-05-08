import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useDate from '@/customhook/use-date';

function Index() {
  const { date, setDate, formatted } = useDate();
  const [type, setType] = useState('일별');

  return (
    <div>
      박스오피스
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date || new Date())}
      ></DatePicker>
    </div>
  );
}

export default Index;
