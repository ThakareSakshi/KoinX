import React from 'react'
import BItcoinChart from './Bitcoin/BItcoinChart';
import GetStartedCard from './TrendingCoin/GetStartedCard';
import TradingViewWidget from './Bitcoin/TradingViewWidget';
import Nav from './Bitcoin/Nav';
import Performance from './Bitcoin/Performance';
const Main = () => {
  return (
    <div className='flex  gap-6 p-6 bg-[#eff2f5]'>
        <div className='w-[75%]'>
               <BItcoinChart/>
               <Nav/>
               <Performance/>
        </div>
        <div className='w-[23%]'>
         <GetStartedCard/>
        </div>
      
    </div>
  )
}

export default Main;
