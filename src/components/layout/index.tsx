import { Outlet } from 'react-router-dom'
import Menu from '@/components/menu'

const Layout = () => {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-[100px] bg-card border-r">
        <Menu />
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
