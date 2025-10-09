import { Button } from '@/components/ui/button'
import phoneCallSvg from '@/assets/icons/phoneCall.svg'

interface CallPopupProps {
  isOpen: boolean
  onClose: () => void
  onHangUp: () => void
  onPickUp: () => void
}

const CallPopup = ({ isOpen, onClose, onHangUp, onPickUp }: CallPopupProps) => {
  if (!isOpen) return null

  const handleHangUp = () => {
    onHangUp()
    onClose()
  }

  const handlePickUp = () => {
    onPickUp()
    onClose()
  }

  return (
    <div className="absolute inset-x-0 top-[205px] flex justify-center z-50 pointer-events-none">
      <div className="w-[628px] h-[616px] rounded-2xl relative pointer-events-auto backdrop-blur-sm" style={{ backgroundColor: '#65696C1A' }}>
        <div className="flex justify-center mt-10 mb-8">
          <div className="w-[310px] h-[310px] bg-custom-gray-1 rounded-full flex items-center justify-center">
            <img src={phoneCallSvg} alt="Phone call" className="w-[104px] h-[104px]" />
          </div>
        </div>
        
        <div className="mb-[80px]">
          <h2 className="text-[18px] font-[700] text-center text-black">
            CUSTOMER IS CALLING
          </h2>
        </div>
        
        <div className="flex gap-[40px] mb-[80px] px-10">
          <Button
            onClick={handleHangUp}
            className="flex-1 h-[54px] text-[20px] font-[600] text-white bg-custom-dark-purple-1/40 hover:bg-custom-dark-purple-1/30 rounded-full border border-black shadow-none"
          >
            HANG UP
          </Button>
          <Button
            onClick={handlePickUp}
            className="flex-1 h-[54px] text-[20px] font-[600] text-white bg-custom-dark-purple-1 hover:bg-custom-dark-purple-1/90 rounded-full border-0 shadow-none"
          >
            PICK UP
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CallPopup
