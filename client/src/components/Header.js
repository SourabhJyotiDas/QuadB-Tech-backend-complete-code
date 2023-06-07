import React from 'react'

export default function Header() {
   return (
      <div className='p-10 flex items-center justify-between'>
         <div className='uppercase text-4xl text-sky-300 font-semibold'>Hodlinfo</div>
         <div className='flex items-center space-x-5 font-medium'>

            <div>
               <select name="" id="" className='cursor-pointer'>
                  <option value="">INR</option>
               </select>
            </div>
            <div>
               <select name="" id="" className='cursor-pointer'>
                  <option value="">BTC</option>
                  <option value="">ETH</option>
                  <option value="">USDT</option>
                  <option value="">XRP</option>
                  <option value="">TRX</option>
                  <option value="">DASH</option>
                  <option value="">ZEC</option>
                  <option value="">XEM</option>
                  <option value="">IOST</option>
                  <option value="">WIN</option>
                  <option value="">BTT</option>
                  <option value="">WRX</option>
               </select>
            </div>
            <button className='uppercase'>buy btc</button>

         </div>

         <div>
            <button className='leading-loose text-white py-2 px-4 bg-sky-300 rounded-2xl font-semibold'> Connect Telegram</button>
         </div>
      </div>
   )
}
