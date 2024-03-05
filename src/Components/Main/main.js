import React from 'react'
import BItcoinChart from './Bitcoin/BItcoinChart';
import GetStartedCard from './TrendingCoin/GetStartedCard';
import TradingViewWidget from './Bitcoin/TradingViewWidget';
const Main = () => {
  return (
    <div className='flex  gap-6 p-6'>
        <div className='w-[75%]'>
               <BItcoinChart/>
        </div>
        <div className='w-[20%]'>
         <GetStartedCard/>
        </div>
      
    </div>
  )
}

export default Main;
