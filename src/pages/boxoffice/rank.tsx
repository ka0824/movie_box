import { DailyData } from '@/type/global';
import { AxiosError } from 'axios';
import { AgGridReact } from 'ag-grid-react';
import { RowDoubleClickedEvent, ValueFormatterParams } from 'ag-grid-community';
import { useRouter } from 'next/router';

function RankChangeRenderer(params: ValueFormatterParams) {
  let result;
  const basicClass = 'text-white px-2 py-1 rounded-md';

  if (params.data.rankOldAndNew === 'NEW') {
    result = <span className={basicClass + ' bg-red-500'}>New</span>;
  } else {
    if (params.data.rankInten === '0') {
      result = <span>-</span>;
    } else if (+params.data.rankInten > 0) {
      result = (
        <span
          className={basicClass + ' bg-red-500'}
        >{`${params.data.rankInten} ↑`}</span>
      );
    } else {
      result = (
        <span className={basicClass + ' bg-blue-500'}>{`${Math.abs(
          params.data.rankInten
        )} ↓`}</span>
      );
    }
  }

  return result;
}

function numberWithCommas(params: ValueFormatterParams) {
  if (!params.colDef.field) {
    return '';
  }

  const value = params.data[params.colDef.field];

  if (!value) return null;
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function Rank({
  data = [],
  isLoading,
  error,
}: {
  data: DailyData[] | undefined;
  isLoading: boolean;
  error: AxiosError | null;
}) {
  const router = useRouter();

  const handleRowDoubleClick = (params: RowDoubleClickedEvent) => {
    router.push(`/movie/${params.data.movieCd}`);
  };

  const columnDefs = [
    {
      headerName: '',
      cellRenderer: RankChangeRenderer,
      maxWidth: 80,
      minWidth: 80,
      flex: 1,
    },
    { headerName: '순위', field: 'rank', maxWidth: 70, flex: 1 },
    { headerName: '영화 명', field: 'movieNm', minWidth: 350, flex: 1 },
    {
      headerName: '관객 수',
      field: 'audiCnt',
      minWidth: 100,
      valueFormatter: numberWithCommas,
      flex: 1,
    },
    {
      headerName: '누적 관객 수',
      field: 'audiAcc',
      minWidth: 130,
      valueFormatter: numberWithCommas,
      flex: 1,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 480 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={data}
        overlayNoRowsTemplate={
          isLoading
            ? '<div>로딩 중 입니다.</div>'
            : '<div>데이터가 없습니다.</div>'
        }
        onRowDoubleClicked={handleRowDoubleClick}
      ></AgGridReact>
    </div>
  );
}

export default Rank;
