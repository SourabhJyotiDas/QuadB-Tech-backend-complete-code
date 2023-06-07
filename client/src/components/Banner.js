import React from 'react'

export default function Banner() {
   return (
      <div className=''>
         <h1 className='text-center tracking-wide text-2xl text-gray-400'>Best Price to Trade</h1>
         <div className='flex items-center justify-around'>
            <div className='flex flex-col text-center '>
               <span className='text-4xl font-medium text-sky-400'>0.8%</span>
               <span className='text-gray-400'>5 mins</span>
            </div>
            <div className='flex flex-col text-center'>
               <span className='text-4xl font-medium text-sky-400'>1.45%</span>
               <span className='text-gray-400'>1 Hour</span>
            </div>
            <div className='flex flex-col text-center'>
               <span className='text-8xl font-normal'> ₹ 25,01,365</span>
               <span className='text-gray-400'>Avarage BTC/INR price including commission</span>
            </div>
            <div className='flex flex-col text-center'>
               <span className='text-4xl font-medium text-sky-400'>1.45%</span>
               <span className='text-gray-400'>1 Hour</span>
            </div>
            <div className='flex flex-col text-center'>
               <span className='text-4xl font-medium text-sky-400'>1.45%</span>
               <span className='text-gray-400'>1 Hour</span>
            </div>
         
         </div>
      </div>
   )
}
