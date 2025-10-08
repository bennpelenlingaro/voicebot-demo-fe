interface DataSets {
    label: string,
    data: number[],
    borderColor: string,
    backgroundColor: string,
    borderWidth: number,
    pointRadius: number,
    pointBackgroundColor: string,
    tension: number,
}

export const mockDataSets: DataSets[] = [
      {
        label: 'Total',
        data: [75, 95, 98, 85, 82, 95, 70, 58, 50],
        borderColor: '#374151',
        backgroundColor: '#374151',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#374151',
        tension: 0.4,
      },
      {
        label: 'Resolved',
        data: [25, 30, 45, 20, 15, 25, 45, 35, 40],
        borderColor: '#6B7280',
        backgroundColor: '#6B7280',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#6B7280',
        tension: 0.4,
      },
      {
        label: 'Escalated',
        data: [80, 85, 82, 78, 95, 68, 42, 58, 62],
        borderColor: '#9CA3AF',
        backgroundColor: '#9CA3AF',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#9CA3AF',
        tension: 0.4,
      },
    ]