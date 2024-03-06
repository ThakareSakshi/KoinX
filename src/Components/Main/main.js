import React from 'react'
import BItcoinChart from './Bitcoin/BItcoinChart';
import GetStartedCard from './TrendingCoin/GetStartedCard';
import TradingViewWidget from './Bitcoin/TradingViewWidget';
import Nav from './Bitcoin/Nav';
import Performance from './Bitcoin/Performance';
import Team from './Bitcoin/Team';
import AboutBitcoin from './Bitcoin/AboutBitcoin';
import Tokenomics from './Bitcoin/Tokenomics';
const Main = () => {
  return (
    <div className='flex  gap-6 p-6 bg-[#eff2f5]'>
        <div className='w-[70%]'>
               <BItcoinChart/>
               <Nav/>
               <Performance/>
               <AboutBitcoin/>
               <Tokenomics/>
               <Team/>
        </div>
        <div className='w-[27%]'>
         <GetStartedCard/>
        </div>
      
    </div>
  )
}

export default Main;
