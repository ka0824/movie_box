import { useState } from 'react';
import { AxiosError } from 'axios';
import { DailyData } from '@/type/global';
import { AgChartsReact } from 'ag-charts-react';
import {
  AgChartOptions,
  AgHistogramSeriesTooltipRendererParams,
} from 'ag-charts-community';
import { useRouter } from 'next/router';

interface FormatterParams {
  value: string;
}

function tooltipRenderer(params: AgHistogramSeriesTooltipRendererParams) {
  return {
    title: params.xValue,
    content: params.yValue
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  };
}

function Bargraph({
  data = [],
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
        type: 'column',
        xKey: 'movieNm',
        yKey: 'audiCnt',
        yName: '일일 관객 수',
        fill: '#808080',
        stroke: undefined,
        strokeWidth: undefined,
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
    axes: [
      {
        type: 'category',
        position: 'bottom',
        label: {
          autoRotate: false,
          avoidCollisions: false,
          formatter: (params: FormatterParams) => {
            const title = params.value;
            let result = '';

            for (let i = 0; i < title.length; i++) {
              if (i % 6 === 0 && i !== 0) {
                result += title[i] + '\n';
              } else {
                result += title[i];
              }
            }
            return result;
          },
        },
        paddingInner: 0.8,
        paddingOuter: 0.8,
        thickness: 150,
      },
      {
        type: 'number',
        position: 'left',
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

      const deltaX = (currentX - startX) * 0.1;
      const deltaY = (currentY - startY) * 0.1;

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
      <div style={{ height: '600px', minWidth: '1100px' }}>
        <AgChartsReact options={options} />
      </div>
    </div>
  );
}

export default Bargraph;
