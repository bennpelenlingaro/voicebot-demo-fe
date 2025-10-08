import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import type { ChartOptions } from 'chart.js'
import { labels, colors, chartConfig } from './config'
import { mockDataSets } from '@/mock'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend
)

const generateMockData = (): {
  labels: string[];
  datasets: typeof mockDataSets;
} => {
  return {
    labels,
    datasets: mockDataSets,
  }
}

const Chart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx: CanvasRenderingContext2D | null = chartRef.current.getContext('2d')
      if (ctx) {
        // Destroy existing chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy()
        }

        const chartData: {
          labels: string[];
          datasets: typeof mockDataSets;
        } = generateMockData()

        const options: ChartOptions<'line'> = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: chartConfig.title.text,
              color: colors.title,
              font: {
                size: chartConfig.title.fontSize,
                weight: chartConfig.title.fontWeight,
              },
              padding: {
                bottom: chartConfig.title.padding,
              },
            },
            legend: {
              display: true,
              position: chartConfig.legend.position,
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                color: colors.legend.text,
                font: {
                  size: chartConfig.legend.fontSize,
                },
                padding: chartConfig.legend.padding,
              },
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              backgroundColor: colors.tooltip.background,
              titleColor: colors.tooltip.title,
              bodyColor: colors.tooltip.body,
              borderColor: colors.tooltip.border,
              borderWidth: chartConfig.tooltip.borderWidth,
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: true,
                color: colors.scales.grid,
              },
              ticks: {
                color: colors.scales.ticks,
                font: {
                  size: chartConfig.scales.fontSize,
                },
              },
            },
            y: {
              display: true,
              min: chartConfig.scales.y.min,
              max: chartConfig.scales.y.max,
              grid: {
                display: true,
                color: colors.scales.grid,
              },
              ticks: {
                color: colors.scales.ticks,
                font: {
                  size: chartConfig.scales.fontSize,
                },
                stepSize: chartConfig.scales.y.stepSize,
              },
            },
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false,
          },
        }

        chartInstance.current = new ChartJS(ctx, {
          type: 'line',
          data: chartData,
          options,
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="w-full h-full p-4 overflow-auto">
      <div className="min-h-[400px]">
        <canvas ref={chartRef} />
      </div>
    </div>
  )
}

export default Chart
