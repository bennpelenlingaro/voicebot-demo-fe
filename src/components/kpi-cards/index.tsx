import KPICard from '@/components/kpi-card'
import { useDashboardStore } from '@/store/dashboardStore'

const KPICards = () => {
  const { kpiData } = useDashboardStore()

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <KPICard
        title="Avg. Time"
        value={kpiData.avgTime.value}
        subtitle={kpiData.avgTime.unit}
        trend={kpiData.avgTime.trend}
      />
      
      <KPICard
        title="Resolution Rate"
        value={kpiData.resolutionRate.value}
        unit="%"
        trend={kpiData.resolutionRate.trend}
      />
      
      <KPICard
        title="Avg. Rate"
        layout="dual"
        dualValues={{
          label1: "VoiceBot",
          value1: kpiData.avgRate.voicebot,
          label2: "Human", 
          value2: kpiData.avgRate.human
        }}
      />
      
      <KPICard
        title="Nb. of Complaints"
        value={kpiData.complaints.value}
        trend={kpiData.complaints.trend}
      />
      
      <KPICard
        title="Nb. of Calls"
        value={kpiData.calls.value}
        trend={kpiData.calls.trend}
      />
      
      <KPICard
        title="Mobile Calls"
        value={kpiData.mobileCalls.value}
        trend={kpiData.mobileCalls.trend}
      />
    </div>
  )
}

export default KPICards
