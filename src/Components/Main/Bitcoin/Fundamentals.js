import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
const Fundamentals = () => {
  return (
    <div className='py-4'>
      <h2 className='text-xl font-semibold my-4'>Fundamentals <InfoIcon style={{color:"gray"}}/></h2>
      <div className='flex gap-12 max-[650px]:flex-col max-[650px]:gap-0'>
        <div className='w-1/2 max-[650px]:w-full'>
            <li className='w-full flex justify-between py-4 border-b-2 h-20 items-center  max-md:text-sm'> <span className='text-gray-500 '>Bitcoin Price</span> <span className='font-medium'>$16,815.46</span></li>
            <li className='w-full flex justify-between py-4 border-b-2 h-20 items-center max-md:text-sm'><span className='text-gray-500 '> 24h Low /24h High</span> <span className='font-medium'>$16,382.07/$16,874.12</span></li>
            <li className='w-full flex justify-between py-4 border-b-2 h-20 items-center max-md:text-sm'><span className='text-gray-500 '>7d Low /7d High</span> <span className='font-medium'>$16,382.07/$16,874.12</span></li>
            <li className='w-full flex justify-between py-4 border-b-2 h-20 items-center max-md:text-sm'><span className='text-gray-500 '>Trading volumn</span> <span className='font-medium'>$23,249,202,782</span></li>
            <li className='w-full flex justify-between py-4 border-b-2 h-20 items-center max-md:text-sm'><span className='text-gray-500 '>Market Cap Rank</span> <span className='font-medium'>#1</span></li>
             
        </div>
        <div className='w-1/2 max-[650px]:w-full'>
        <li className='w-full flex justify-between py-4 border-b-2 h-20 items-center max-md:text-sm'> <span className='text-gray-500 '>Market Cap</span> <span className='font-medium'>$323,507,290,047</span></li>
            <li className='w-full flex justify-between py-4 border-b-2 h-20 items-center max-md:text-sm'><span className='text-gray-500 '>Market Cap Dominance</span> <span className='font-medium'>38.343%</span></li>
            <li className='w-full flex justify-between py-4 border-b-2 h-20 items-center max-md:text-sm'><span className='text-gray-500 '>Volume / Market Cap</span> <span className='font-medium'>0.0718</span></li>
            <li className='w-full flex justify-between py-4 border-b-2 h-20 items-center max-md:text-sm'><span className='text-gray-500 '>All-Time High</span> <span className='font-medium'>$69,044.77 <span className='text-red-400'>-75.6%</span><p className='text-[12px] font-light'>Nov 10, 2021 (about 1 year)</p></span></li>
            <li className='w-full flex justify-between py-4 border-b-2 h-20 items-center max-md:text-sm'><span className='text-gray-500 '>All-Time Low</span> <span className='font-medium'>$67.81 <span className='text-green-400'>24729.1%</span><p className='text-[12px] font-light'>Jun 06, 2013 (over 9 year)</p></span></li>
        </div>
      </div>
      
    </div>
  )
}

export default Fundamentals
