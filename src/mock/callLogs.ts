export interface CallLog {
  id: string
  timestamp: string
  type: 'Voicebot' | 'Human'
  topic: string
  duration: string
  outcome: 'Pending' | 'Resolved'
  rate: number
}

export const mockCallLogs: CallLog[] = [
  {
    id: 'CL-0992',
    timestamp: '12.09.2025',
    type: 'Voicebot',
    topic: 'Refund the order',
    duration: '23min 12sec',
    outcome: 'Pending',
    rate: 4.5
  },
  {
    id: 'CL-0992',
    timestamp: '12.09.2025',
    type: 'Human',
    topic: 'Placing order',
    duration: '23min 12sec',
    outcome: 'Resolved',
    rate: 4.5
  },
  {
    id: 'CL-0992',
    timestamp: '12.09.2025',
    type: 'Voicebot',
    topic: 'Refund the order',
    duration: '23min 12sec',
    outcome: 'Pending',
    rate: 4.5
  },
  {
    id: 'CL-0992',
    timestamp: '12.09.2025',
    type: 'Human',
    topic: 'Placing order',
    duration: '23min 12sec',
    outcome: 'Resolved',
    rate: 4.5
  },
  {
    id: 'EL-0992',
    timestamp: '12.09.2025',
    type: 'Voicebot',
    topic: 'Refund the order',
    duration: '23min 12sec',
    outcome: 'Pending',
    rate: 4.5
  },
  {
    id: 'CL-0992',
    timestamp: '12.09.2025',
    type: 'Human',
    topic: 'Placing order',
    duration: '23min 12sec',
    outcome: 'Resolved',
    rate: 4.5
  },
  {
    id: 'CL-0992',
    timestamp: '12.09.2025',
    type: 'Voicebot',
    topic: 'Refund the order',
    duration: '23min 12sec',
    outcome: 'Pending',
    rate: 4.5
  },
  {
    id: 'CL-0992',
    timestamp: '12.09.2025',
    type: 'Human',
    topic: 'Placing order',
    duration: '23min 12sec',
    outcome: 'Resolved',
    rate: 4.5
  },
  {
    id: 'CL-0992',
    timestamp: '12.09.2025',
    type: 'Voicebot',
    topic: 'Refund the order',
    duration: '23min 12sec',
    outcome: 'Pending',
    rate: 4.5
  }
]
