import React from 'react'
import BItcoinChart from './Bitcoin/BItcoinChart';
import GetStartedCard from './TrendingCoin/GetStartedCard';
import TradingViewWidget from './Bitcoin/TradingViewWidget';
import Nav from './Bitcoin/Nav';
import Performance from './Bitcoin/Performance';
import Team from './Bitcoin/Team';
import AboutBitcoin from './Bitcoin/AboutBitcoin';
import Tokenomics from './Bitcoin/Tokenomics';
import Sentiments from './Bitcoin/Sentiments';
import TrendingCoins from './TrendingCoin/TrendingCoins';
const Main = () => {
  return (
    <div className='flex  gap-6 p-6 bg-[#eff2f5] max-md:flex-col max-sm:p-2'>
        <div className='w-[70%] max-md:w-full'>
               <BItcoinChart/>
               <Nav/>
               <Performance/>
               <Sentiments/>
               <AboutBitcoin/>
               <Tokenomics/>
               <Team/>
        </div>
        <div className='w-[27%] flex flex-col gap-4 max-md:w-full'>
         <GetStartedCard/>
         <TrendingCoins/>
        </div>
      
    </div>
  )
}

export default Main;
