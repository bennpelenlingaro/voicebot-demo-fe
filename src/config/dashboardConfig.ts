export const filterTabs = ['All', 'Mobile', 'Internet'] as const
export const mainTabs = ['Call Logs', 'Complaints', 'Anomalies', 'Resolution', 'Feedback'] as const
export const subTabs = ['Log', 'Analysis'] as const

export const timeFrameOptions = [
  'Last 7 days',
  'Last 30 days', 
  'Last 90 days'
] as const

export type FilterTab = typeof filterTabs[number]
export type MainTab = typeof mainTabs[number]
export type SubTab = typeof subTabs[number]
export type TimeFrameOption = typeof timeFrameOptions[number]
