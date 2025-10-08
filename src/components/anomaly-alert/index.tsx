import { AlertTriangle } from 'lucide-react'
import { useDashboardStore } from '@/store/dashboardStore'

const AnomalyAlert = () => {
  const { anomalyData } = useDashboardStore()

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex items-start gap-3">
      <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{anomalyData.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{anomalyData.description}</p>
        <a 
          href="#" 
          className="text-sm text-blue-600 underline hover:text-blue-800 mt-1 inline-block"
        >
          {anomalyData.linkText}
        </a>
      </div>
    </div>
  )
}

export default AnomalyAlert
