import { useCallback } from 'react';

function Toggle({
  type,
  setType,
  setDate,
}: {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}) {
  const handleType = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const currentDate = new Date();

      if (e.currentTarget.dataset.type === '일별') {
        setDate(new Date(Date.now() - 24 * 60 * 60 * 1000));
      } else if (e.currentTarget.dataset.type === '주중 / 주간') {
        setDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
      }

      setType(e.currentTarget.dataset.type || '');
    },
    [type, setType]
  );

  return (
    <div className="flex justify-end">
      <button
        className="px-2 py-1 border-2"
        data-type="일별"
        onClick={handleType}
      >
        일별
      </button>
      <button
        className="border-2 px-2 py-1"
        data-type="주중 / 주간"
        onClick={handleType}
      >
        주중 / 주간
      </button>
    </div>
  );
}

export default Toggle;
