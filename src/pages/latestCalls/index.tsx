import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PhoneForwarded } from 'lucide-react';
import { PhoneMissed } from 'lucide-react';
import { mockLatestCalls } from '@/mock/latestCalls';
import latestCallsSvg from '@/assets/icons/latestCalls.svg'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import CallPopup from '@/components/call-popup'

const LatestCalls = () => {
  const { register, handleSubmit } = useForm()
  const [isPopupOpen, setIsPopupOpen] = useState(true)

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  const handleHangUp = () => {
    console.log('Call hung up')
  }

  const handlePickUp = () => {
    console.log('Call picked up')
  }

  return (
    <div className="flex">
      <div className="h-screen w-[394px]">
        <Card 
          className="h-full flex flex-col border-0 border-r border-gray-200 rounded-none"
          style={{ boxShadow: "0px 4px 24px 0px #00000040" }}
        >
          <CardHeader className="pb-10">
            <CardTitle className="text-lg font-bold tracking-wide text-center text-black">
              LATEST CALLS
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto px-0">
            <div className="space-y-1">
              {mockLatestCalls.map((contact) => (
                <div 
                  key={contact.id}
                  className="flex items-center justify-between pl-8 pr-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-11 h-11 bg-custom-gray-1 rounded-full flex items-center justify-center">
                        {contact.success
                          ?  <PhoneForwarded className="w-6 h-6" />
                          :  <PhoneMissed className="w-6 h-6" />
                        }
                      </div>
                    </div>
                    <div className="flex flex-col text-lg text-black">
                      <span className="font-semibold">
                        {contact.name}
                      </span>
                      <span className="font-normal">
                        {contact.phone}
                      </span>
                    </div>
                  </div>
                  <Button 
                    className="w-[78px] h-[44px] text-lg font-normal text-black bg-gray-100 hover:bg-gray-200 rounded-full border-0 shadow-none cursor-pointer"
                    onClick={() => false}
                  >
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-1 flex-col justify-between relative">
        <div className="flex flex-col items-center">
          <img 
            src={latestCallsSvg} 
            alt="Latest calls logo" 
            className="w-[264px] h-[220px] mb-12 mt-[160px]"
          />
          <p className="text-lg font-bold text-black">SELECT ANY CALLS FROM THE LIST TO SEE DETAILS </p>
        </div>
        <div className="px-[182px] pb-10">
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 items-center">
            <input
              {...register('message')}
              type="text"
              placeholder="Ask me anything"
              className="flex-1 h-[54px] px-6 text-lg font-normal bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-lg placeholder:font-normal"
            />
            <Button
              type="submit"
              className="w-[192px] h-[54px] px-8 text-xl font-semibold text-white bg-custom-dark-purple-1 hover:bg-custom-dark-purple-1/90 rounded-full border-0 shadow-none min-w-[120px] cursor pointer"
            >
              Submit
            </Button>
          </form>
        </div>
        
        <CallPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          onHangUp={handleHangUp}
          onPickUp={handlePickUp}
        />
      </div>
    </div>
  )
}

export default LatestCalls
