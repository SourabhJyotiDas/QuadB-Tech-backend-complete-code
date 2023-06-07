import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Table() {

   const [data, setData] = useState([])


   const getTableData = async () => {
      const { data } = await axios.get(`http://localhost:4000/api/v1/getalldata`);
      setData(data.savedApiData)
   }

   useEffect(() => {
      getTableData()
   }, [])

   return (
      <div>
         <table className='w-[100%] text-center my-10 p-10'>
            <thead >
               <tr className=' text-gray-400 leading-loose '>
                  <th className=''>#</th>
                  <th className=''>Platform</th>
                  <th className=''>Last Traded Price</th>
                  <th className=''>Buy/ Sell Price</th>
                  <th className=''>Difference</th>
                  <th className=''>Savings</th>
               </tr>
            </thead>
            <tbody >
               {
                  data?.map((element, index) => {
                     return <tr key={index} className='font-semibold text-xl leading-loose'>
                        <td>{index + 1}</td>
                        <td className='uppercase'>{element.base_unit}</td>
                        <td>₹{element.last}</td>
                        <td>₹{element.buy} / ₹{element.sell}</td>
                        <td>{element.volume}</td>
                        <td>{element.open}</td>
                     </tr>
                  })
               }
            </tbody>
         </table>
      </div>
   )
}
