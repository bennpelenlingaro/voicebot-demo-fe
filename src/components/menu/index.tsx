import { Home, Phone } from 'lucide-react'

const Menu = () => {
  const menuItems = [
    {
      icon: Home,
      label: 'Dashboard',
      path: '/',
    },
    {
      icon: Phone,
      label: 'Latest calls',
      path: '/latest-calls',
    },
  ]

  return (
    <ul className="py-4 space-y-2 bg-[#0A0422] h-full">
      {menuItems.map((item) => {
        return (
            <li className="mb-10">
              <a href={item.path} className="no-underline flex flex-col items-center">
                  <span className="inline-block w-[70px] h-[66px] bg-white mb-2 rounded-[10px]"></span>
                  <span className="text-xs text-white">{item.label}</span>
                </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
