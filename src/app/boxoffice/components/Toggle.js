import { useCallback } from 'react';

function Toggle({ type, setType, setDate }) {
  const handleType = useCallback(
    (e) => {
      const currentDate = new Date();

      if (e.currentTarget.dataset.type === '일별') {
        setDate(new Date(Date.now() - 24 * 60 * 60 * 1000));
      } else if (e.currentTarget.dataset.type === '주중 / 주간') {
        setDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
      }

      setType(e.currentTarget.dataset.type || '');
    },
    [setType, setDate]
  );

  return (
    <div className="flex justify-end gap-2">
      <button
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
          type === '일별'
            ? 'bg-gray-700 text-white hover:bg-gray-800'
            : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
        }`}
        data-type="일별"
        onClick={handleType}
      >
        일별
      </button>
      <button
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
          type === '주중 / 주간'
            ? 'bg-gray-700 text-white hover:bg-gray-800'
            : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
        }`}
        data-type="주중 / 주간"
        onClick={handleType}
      >
        주중 / 주간
      </button>
    </div>
  );
}

export default Toggle;
