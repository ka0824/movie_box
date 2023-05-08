import { useState, useEffect } from 'react';

function useDate() {
  const [date, setDate] = useState<Date>(new Date());
  const [formatted, setFormatted] = useState('');

  useEffect(() => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    setFormatted(`${year}${month}${day}`);
  }, [date]);

  return { date, setDate, formatted };
}

export default useDate;
