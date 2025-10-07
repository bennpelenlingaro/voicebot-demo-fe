import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import { useState } from 'react'
import { Bot, User, Play, MoreVertical, ChevronsUpDown, Star } from 'lucide-react'
import { useDashboardStore } from '@/store/dashboardStore'
import type { CallLog } from '@/mock'

const columnHelper = createColumnHelper<CallLog>()

const CallTable = () => {
  const { callLogs } = useDashboardStore()
  const [sorting, setSorting] = useState<SortingState>([])

  const columns = [
    columnHelper.accessor('id', {
      header: ({ column }) => (
        <button
          className="flex items-center gap-1 text-white font-medium"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Call ID
          <ChevronsUpDown className="w-4 h-4" />
        </button>
      ),
      cell: (info) => (
        <span className="text-gray-900">{info.getValue()}</span>
      ),
    }),
    columnHelper.accessor('timestamp', {
      header: () => <span className="text-white font-medium">Timestamp</span>,
      cell: (info) => (
        <span className="text-gray-900">{info.getValue()}</span>
      ),
    }),
    columnHelper.accessor('type', {
      header: () => <span className="text-white font-medium">Type</span>,
      cell: (info) => {
        const type = info.getValue()
        return (
          <div className="flex items-center gap-2">
            {type === 'Voicebot' ? (
              <Bot className="w-4 h-4 text-blue-600" />
            ) : (
              <User className="w-4 h-4 text-green-600" />
            )}
            <span className="text-gray-900">{type}</span>
          </div>
        )
      },
    }),
    columnHelper.accessor('topic', {
      header: () => <span className="text-white font-medium">Topic</span>,
      cell: (info) => (
        <span className="text-gray-900">{info.getValue()}</span>
      ),
    }),
    columnHelper.accessor('duration', {
      header: () => <span className="text-white font-medium">Duration</span>,
      cell: (info) => (
        <span className="text-gray-900">{info.getValue()}</span>
      ),
    }),
    columnHelper.accessor('outcome', {
      header: () => <span className="text-white font-medium">Outcome</span>,
      cell: (info) => {
        const outcome = info.getValue()
        return (
          <span 
            className={`px-2 py-1 rounded-full text-xs ${
              outcome === 'Resolved' 
                ? 'bg-gray-200 text-gray-800' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {outcome}
          </span>
        )
      },
    }),
    columnHelper.accessor('rate', {
      header: () => <span className="text-white font-medium">Rate</span>,
      cell: (info) => (
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-gray-900">{info.getValue()}</span>
        </div>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: () => <span className="text-white font-medium">Action</span>,
      cell: () => (
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Play className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      ),
    }),
  ]

  const table = useReactTable({
    data: callLogs,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="overflow-auto max-h-96">
        <table className="w-full">
          <thead className="bg-sidebar-bg sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-sm font-medium bg-sidebar-bg"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CallTable
