export interface KPIData {
  avgTime: {
    value: number
    unit: string
    trend: number
  }
  resolutionRate: {
    value: number
    trend: number
  }
  avgRate: {
    voicebot: number
    human: number
  }
  complaints: {
    value: number
    trend: number
  }
  calls: {
    value: number
    trend: number
  }
  mobileCalls: {
    value: number
    trend: number
  }
}

export const mockKPIData: KPIData = {
  avgTime: {
    value: 21,
    unit: 'Minutes',
    trend: 2
  },
  resolutionRate: {
    value: 78,
    trend: 2
  },
  avgRate: {
    voicebot: 4.3,
    human: 4.8
  },
  complaints: {
    value: 12,
    trend: -2
  },
  calls: {
    value: 32,
    trend: -2
  },
  mobileCalls: {
    value: 15,
    trend: -2
  }
}

export interface AnomalyData {
  title: string
  description: string
  linkText: string
}

export const mockAnomalyData: AnomalyData = {
  title: 'Anomaly detected',
  description: 'Complaint volume increased by 45% in last 30 days.',
  linkText: 'View details'
}
