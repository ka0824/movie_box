import { DailyData } from '@/type/global';
import { AxiosError } from 'axios';
import { AgChartsReact } from 'ag-charts-react';
import {
  AgChartOptions,
  AgPieSeriesTooltipRendererParams,
} from 'ag-charts-community';
import { useRouter } from 'next/router';

interface FormatterParams {
  value: string;
}

function tooltipRenderer(params: AgPieSeriesTooltipRendererParams) {
  const data = params.datum;

  return {
    title: data.movieNm,
    content: data.audiCnt
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  };
}

function Piegraph({
  data,
  isLoading,
  error,
}: {
  data: DailyData[] | undefined;
  isLoading: boolean;
  error: AxiosError | null;
}) {
  const router = useRouter();
  const options: AgChartOptions = {
    data: data,
    series: [
      {
        type: 'pie',
        angleKey: 'audiCnt',
        labelKey: 'movieNm',
        tooltip: {
          renderer: tooltipRenderer,
        },
        listeners: {
          nodeDoubleClick: (event) => {
            const datum = event.datum;
            router.push(`/movie/${datum.movieCd}`);
          },
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <div style={{ height: '600px', minWidth: '600px' }}>
        <AgChartsReact options={options} />
      </div>
    </div>
  );
}

export default Piegraph;
