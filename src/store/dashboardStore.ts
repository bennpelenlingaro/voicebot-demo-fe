import { create } from 'zustand'
import { mockCallLogs, mockKPIData, mockAnomalyData } from '@/mock'
import type { CallLog, KPIData, AnomalyData } from '@/mock'
import type { FilterTab, MainTab, SubTab, TimeFrameOption } from '@/config/dashboardConfig'

interface DashboardState {
  // Data
  callLogs: CallLog[]
  kpiData: KPIData
  anomalyData: AnomalyData
  
  // UI State
  selectedTimeFrame: TimeFrameOption
  selectedFilter: FilterTab
  selectedTab: MainTab
  selectedSubTab: SubTab
  
  // Actions
  setTimeFrame: (timeFrame: TimeFrameOption) => void
  setFilter: (filter: FilterTab) => void
  setTab: (tab: MainTab) => void
  setSubTab: (subTab: SubTab) => void
  refreshData: () => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
  // Initial data
  callLogs: mockCallLogs,
  kpiData: mockKPIData,
  anomalyData: mockAnomalyData,
  
  // Initial UI state
  selectedTimeFrame: 'Last 7 days' as TimeFrameOption,
  selectedFilter: 'All' as FilterTab,
  selectedTab: 'Call Logs' as MainTab,
  selectedSubTab: 'Log' as SubTab,
  
  // Actions
  setTimeFrame: (timeFrame) => set({ selectedTimeFrame: timeFrame }),
  setFilter: (filter) => set({ selectedFilter: filter }),
  setTab: (tab) => set({ selectedTab: tab }),
  setSubTab: (subTab) => set({ selectedSubTab: subTab }),
  refreshData: () => {
    // In a real app, this would fetch fresh data
    set({ 
      callLogs: mockCallLogs,
      kpiData: mockKPIData,
      anomalyData: mockAnomalyData
    })
  }
}))
