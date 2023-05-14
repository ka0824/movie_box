import { useState } from 'react';
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

  const [startX, setStartX] = useState<number | null>(null);
  const [startY, setStartY] = useState<number | null>(null);

  const onTouchStart = (event: React.TouchEvent) => {
    setStartX(event.touches[0].clientX);
    setStartY(event.touches[0].clientY);
  };

  const onTouchMove = (event: React.TouchEvent) => {
    if (startX !== null && startY !== null) {
      const currentX = event.touches[0].clientX;
      const currentY = event.touches[0].clientY;

      const deltaX = (currentX - startX) * 0.05;
      const deltaY = (currentY - startY) * 0.05;

      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        window.scrollTo(0, window.scrollY - deltaY);
      } else {
        const container = event.currentTarget;
        container.scrollLeft -= deltaX;
      }
    }
  };

  const onTouchEnd = () => {
    setStartX(null);
    setStartY(null);
  };

  return (
    <div
      className="w-full overflow-x-auto overflow-y-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div style={{ height: '600px', minWidth: '600px' }}>
        <AgChartsReact options={options} />
      </div>
    </div>
  );
}

export default Piegraph;
