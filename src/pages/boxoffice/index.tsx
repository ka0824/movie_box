import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Index() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    const formatted = `${year}${month}${day}`;

    console.log(formatted);
  }, [date]);

  return (
    <div>
      박스오피스
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
      ></DatePicker>
    </div>
  );
}

export default Index;
