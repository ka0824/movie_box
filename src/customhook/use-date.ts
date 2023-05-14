import { useState, useEffect } from 'react';

/**
 * 달력에서 날짜를 관리하는 커스텀 훅입니다.
 * 박스오피스의 통계 값은 당일에는 구할 수 없으므로 이전 날을 초기값으로 설정합니다.
 * date는 현재 선택된 날짜입니다.
 * formatted는 date를 YYYYMMDD 형태로 변환한 값 입니다.
 * @returns {{date, setDate, formatted}}
 * - date: 현재 선택된 날짜를 나타내는 Date 객체입니다.
 * - setDate: date 값을 변경하는 함수 입니다.
 * - formatted: date를 YYYYMMDD 형태로 변환한 문자열 입니다.
 */

function useDate() {
  const [date, setDate] = useState<Date>(
    new Date(Date.now() - 24 * 60 * 60 * 1000)
  );
  const [formatted, setFormatted] = useState(
    `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${(
      '0' + date.getDate()
    ).slice(-2)}`
  );

  useEffect(() => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    setFormatted(`${year}${month}${day}`);
  }, [date]);

  return { date, setDate, formatted };
}

export default useDate;
