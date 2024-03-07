import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import InfoIcon from '@mui/icons-material/Info';
const Sentiments = () => {
  return (
    <div className="p-10 bg-white rounded-xl overflow-x-auto my-4 max-sm:p-5">
      <h1 className="text-3xl text-[#0F1629] font-semibold">Sentiments</h1>
      <h3 className='text-xl text-gray-700 font-semibold my-2'>key Events <InfoIcon style={{color:"gray"}}/></h3>
      <div className='flex gap-4 overflow-x-auto scrollbar-hide py-4'>
        <div className='p-2 rounded-lg bg-blue-100 min-w-[400px] max-md:w-[310px] flex gap-4'>
        <div className='h-12 min-w-12 bg-blue-500 text-white rounded-full flex justify-center items-center'>
            <InsertChartIcon/>
          </div>
          <div>
            <p className='font-medium'>Lorem ipsum dolor sit amet consect beatae aut deserunt modi omnis.</p>
            <p className='text-sm'>Lorem ipsum dolor sit, . Quas ea assumenda sequi sit. Voluptatum recusandae aliquam placeat ex quisquam enim sed ea eligendi tempore deserunt. Debitis illum distinctio sed id!
            .</p>
          </div>
        </div>

        <div className='p-2 rounded-lg bg-green-100  min-w-[400px] max-md:w-[310px] flex gap-4'>
          <div className='h-12 min-w-12 bg-green-500 text-white rounded-full flex justify-center items-center'>
            <TrendingUpIcon/>
          </div>
          <div>
            <p className='font-medium'>Lorem ipsum dolor sit amet consect, beatae aut deserunt modi omnis.</p>
            <p className='text-sm'>Lorem ipsum  Quas ea assumenda sequi sit. Voluptatum recusandae aliquam placeat ex quisquam enim sed ea eligendi tempore deserunt. Debitis illum distinctio sed id!
            .</p>
          </div>
        </div>
        <div className='p-2 rounded-lg bg-blue-100 min-w-[400px] max-md:w-[310px] flex gap-4'>
        <div className='h-12 min-w-12 bg-blue-500 text-white rounded-full flex justify-center items-center'>
            <AccountBalanceWalletIcon/>
          </div>
          <div>
            <p className='font-medium'>Lorem ipsumusantium enim beatae aut deserunt modi omnis.</p>
            <p className='text-sm'>Lorem ipsum dolor sit, amet sequi sit. Voluptatum recusandae aliquam placeat ex quisquam enim sed ea eligendi tempore deserunt. Debitis illum distinctio sed id!
         </p>
          </div>
        </div>
      </div>

      <h3 className='text-xl text-gray-700 font-semibold my-2'>Analyst Estimates <InfoIcon style={{color:"gray"}}/></h3>
      <div className='flex items-center gap-6 my-4 max-md:gap-2'>
        <div className='h-32 w-32 bg-green-100 rounded-full text-[#00b386] text-3xl font-semibold flex justify-center items-center max-md:h-24 max-md:w-24'>76%</div>
        <div className='w-[60%] text-gray-400'>
          <div className='w-full flex gap-2 m-2 items-center'>
            <span>Buy</span>
            <div className='h-2 w-[76%] bg-[#00b386] rounded-sm '></div>
            <span>76%</span>
            </div>
            <div className='w-full flex gap-2 m-2 items-center'>
            <span>Hold</span>
            <div className='h-2 w-[8%] bg-gray-300 rounded-sm'></div>
            <span>8%</span>
            </div> 
            <div className='w-full flex gap-2 m-2 items-center'>
            <span>Sell</span>
            <div className='h-2 w-[16%] bg-red-400 rounded-sm'></div>
            <span>16%</span>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Sentiments
