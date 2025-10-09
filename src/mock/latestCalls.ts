interface LatestCalls {
    id: number
    name: string
    phone: string
    success: boolean
}

export const mockLatestCalls: LatestCalls[] = [
  { id: 1, name: 'NAME SURNAME', phone: '+1 9384839920', success: true },
  { id: 2, name: 'NAME SURNAME', phone: '+1 9384839920', success: true },
  { id: 3, name: 'NAME SURNAME', phone: '+1 9384839920', success: false },
  { id: 4, name: 'NAME SURNAME', phone: '+1 9384839920', success: true },
  { id: 5, name: 'NAME SURNAME', phone: '+1 9384839920', success: true },
  { id: 6, name: 'NAME SURNAME', phone: '+1 9384839920', success: false },
  { id: 7, name: 'NAME SURNAME', phone: '+1 9384839920', success: true },
  { id: 8, name: 'NAME SURNAME', phone: '+1 9384839920', success: false },
  { id: 9, name: 'NAME SURNAME', phone: '+1 9384839920', success: false },
  { id: 10, name: 'NAME SURNAME', phone: '+1 9384839920', success: true },
  { id: 11, name: 'NAME SURNAME', phone: '+1 9384839920', success: true },
]