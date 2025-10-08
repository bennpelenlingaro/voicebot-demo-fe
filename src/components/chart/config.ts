interface LegendColors {
  text: string;
}

interface TooltipColors {
  background: string;
  title: string;
  body: string;
  border: string;
}

interface ScaleColors {
  grid: string;
  ticks: string;
}

interface ChartColors {
  title: string;
  legend: LegendColors;
  tooltip: TooltipColors;
  scales: ScaleColors;
}

export const colors: ChartColors = {
  title: '#333333',
  legend: {
    text: '#333333',
  },
  tooltip: {
    background: '#374151',
    title: '#ffffff',
    body: '#ffffff',
    border: '#6B7280',
  },
  scales: {
    grid: '#E5E7EB',
    ticks: '#666666',
  },
} as const

export const labels: string[] = [
  '00:00 AM', '01:00 AM', '03:00 AM', '06:00 AM', '09:00 AM', 
  '12:00 PM', '03:00 PM', '06:00 PM', '09:00 PM'
]

interface ChartTitleConfig {
  text: string;
  fontSize: number;
  fontWeight: 'normal' | 'bold' | 'lighter' | 'bolder';
  padding: number;
}

interface ChartLegendConfig {
  fontSize: number;
  padding: number;
  position: 'top' | 'bottom' | 'left' | 'right';
}

interface ChartScalesConfig {
  y: {
    min: number;
    max: number;
    stepSize: number;
  };
  fontSize: number;
}

interface ChartTooltipConfig {
  borderWidth: number;
}

interface ChartConfiguration {
  title: ChartTitleConfig;
  legend: ChartLegendConfig;
  scales: ChartScalesConfig;
  tooltip: ChartTooltipConfig;
}

export const chartConfig: ChartConfiguration = {
  title: {
    text: '24 Hours Call Resolution',
    fontSize: 16,
    fontWeight: 'normal',
    padding: 20,
  },
  legend: {
    fontSize: 12,
    padding: 20,
    position: 'bottom',
  },
  scales: {
    y: {
      min: 0,
      max: 125,
      stepSize: 25,
    },
    fontSize: 11,
  },
  tooltip: {
    borderWidth: 1,
  },
} as const
