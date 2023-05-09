import { useCallback } from 'react';

function Toggle({
  type,
  setType,
}: {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleType = useCallback(
    (e) => {
      setType(e.target.dataset.type);
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
