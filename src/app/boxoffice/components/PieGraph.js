import { useState } from 'react';
import { AxiosError } from 'axios';
import { AgChartsReact } from 'ag-charts-react';
import {
  AgChartOptions,
  AgPieSeriesTooltipRendererParams,
} from 'ag-charts-community';
import { useRouter } from 'next/navigation';

function tooltipRenderer(params) {
  const data = params.datum;

  return {
    title: data.movieNm,
    content: data.audiCnt
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  };
}

function PieGraph({ data, isLoading, error }) {
  const router = useRouter();
  const options = {
    data: data,
    series: [
      {
        type: 'pie',
        angleKey: 'audiCnt',
        labelKey: 'movieNm',
        calloutLabelKey: 'movieNm',
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

  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);

  const onTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
    setStartY(event.touches[0].clientY);
  };

  const onTouchMove = (event) => {
    if (startX !== null && startY !== null) {
      const currentX = event.touches[0].clientX;
      const currentY = event.touches[0].clientY;

      const deltaX = (currentX - startX) * 0.5;
      const deltaY = (currentY - startY) * 0.5;

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

export default PieGraph;
