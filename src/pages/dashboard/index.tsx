import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { useDashboardStore } from '@/store/dashboardStore'
import KPICards from '@/components/kpi-cards'
import AnomalyAlert from '@/components/anomaly-alert'
import CallTable from '@/components/call-table'
import { filterTabs, mainTabs, subTabs, timeFrameOptions, type TimeFrameOption } from '@/config/dashboardConfig'

const Dashboard = () => {
  const { 
    selectedTimeFrame, 
    selectedFilter, 
    selectedTab, 
    selectedSubTab,
    setTimeFrame, 
    setFilter, 
    setTab, 
    setSubTab 
  } = useDashboardStore()


  return (
    <div className="p-6 pb-0 space-y-6 bg-gray-50 h-screen overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">DASHBOARD</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-button-primary text-button-primary-foreground border-button-primary hover:bg-button-primary-hover">
            BI Export Settings
          </Button>
          <Button variant="outline" className="bg-button-primary text-button-primary-foreground border-button-primary hover:bg-button-primary-hover">
            PBI Report
          </Button>
        </div>
      </div>

      {/* Anomaly Alert */}
      <AnomalyAlert />

      {/* Time Frame */}
      <div className="flex justify-end">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Time frame</span>
          <div className="relative">
            <select
              value={selectedTimeFrame}
              onChange={(e) => setTimeFrame(e.target.value as TimeFrameOption)}
              className="appearance-none bg-white border border-gray-300 rounded px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {timeFrameOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex bg-gray-200 rounded-lg p-1 w-fit">
        {filterTabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 text-sm font-medium transition-all ${
              selectedFilter === tab
                ? 'bg-white text-gray-900 shadow-sm rounded-md'
                : 'text-gray-600 hover:text-gray-900'
            } ${index === 0 ? 'rounded-l-md' : ''} ${
              index === filterTabs.length - 1 ? 'rounded-r-md' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* KPI Cards */}
      <KPICards />

      {/* Main Tabs */}
      <div className="flex bg-gray-200 rounded-lg p-1 w-full">
        {mainTabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setTab(tab)}
            className={`flex-1 px-4 py-2 text-sm font-medium transition-all ${
              selectedTab === tab
                ? 'bg-white text-gray-900 shadow-sm rounded-md'
                : 'text-gray-600 hover:text-gray-900'
            } ${index === 0 ? 'rounded-l-md' : ''} ${
              index === mainTabs.length - 1 ? 'rounded-r-md' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Call Log Section */}
      <div className="bg-white rounded-lg p-6 flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">CALL LOG AND ANALYSIS</h2>
          <div className="flex bg-gray-200 rounded-lg p-1 w-fit">
            {subTabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setSubTab(tab)}
                className={`px-3 py-1 text-sm font-medium transition-all ${
                  selectedSubTab === tab
                    ? 'bg-white text-gray-900 shadow-sm rounded-md'
                    : 'text-gray-600 hover:text-gray-900'
                } ${index === 0 ? 'rounded-l-md' : ''} ${
                  index === subTabs.length - 1 ? 'rounded-r-md' : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden">
          {selectedSubTab === 'Log' && <CallTable />}
          {selectedSubTab === 'Analysis' && (
            <div className="text-center py-8 text-gray-500">
              Analysis view coming soon...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
