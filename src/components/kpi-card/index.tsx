import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface KPICardProps {
  title: string
  value?: string | number
  unit?: string
  trend?: number
  subtitle?: string
  layout?: 'default' | 'dual'
  dualValues?: {
    label1: string
    value1: string | number
    label2: string
    value2: string | number
  }
}

const KPICard = ({ 
  title, 
  value, 
  unit, 
  trend, 
  subtitle,
  layout = 'default',
  dualValues 
}: KPICardProps) => {
  const getTrendIcon = (trend: number) => {
    if (trend > 0) return <TrendingUp className="w-8 h-8 text-gray-600" />
    return <TrendingDown className="w-8 h-8 text-gray-600" />
  }

  if (layout === 'dual' && dualValues) {
    return (
      <Card className="bg-white border border-gray-200 p-0">
        <CardContent className="p-4">
          <div>
            <p className="text-xl font-bold">{title}</p>
            <div className="flex items-center justify-between gap-4 mt-2">
              <div>
                <p className="text-5xl font-bold">{dualValues.value1}</p>
                <p className="text-s">{dualValues.label1}</p>
              </div>
              <div>
                <p className="text-5xl font-bold">{dualValues.value2}</p>
                <p className="text-s">{dualValues.label2}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white border border-gray-200 p-0">
      <CardContent className="p-4">
        <div>
          <p className="text-xl font-bold">{title}</p>
          <div className="flex items-center justify-between mt-1">
            <p className="text-5xl font-bold">
              {value}{unit && ` ${unit}`}
            </p>
            {trend !== undefined && (
              <div className="flex flex-col items-center gap-1">
                {getTrendIcon(trend)}
                <span className={`text-s font-bold`}>
                  {trend > 0 ? '+' : ''}{trend}%
                </span>
              </div>
            )}
          </div>
          {subtitle && (
            <p className="text-s mt-1">{subtitle}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default KPICard
