import logoSvg from '@/assets/icons/logo.svg'

const Menu = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      path: '/',
    },
    {
      label: 'Calls',
      path: '/latest-calls',
    },
    {
      label: 'Text',
      path: '/text',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-between py-6 bg-sidebar-bg h-full text-white text-sm font-bold leading-[18px]">
      <div>
        <div className="flex justify-center">
          <img 
            src={logoSvg} 
            alt="Logo" 
            className="w-[66px] h-[55px] mb-12"
          />
        </div>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            return (
                <li key={item.path} className="mb-10">
                  <a href={item.path} className="no-underline flex flex-col items-center">
                      <span className="inline-block w-[70px] h-[66px] bg-white mb-2 rounded-[10px]"></span>
                      <span className="">{item.label}</span>
                    </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <div className="w-[69px] h-[69px] bg-custom-gray-1 rounded-full"></div>
        <p className="text-center">Agent</p>
      </div>
    </div>
  )
}

export default Menu
