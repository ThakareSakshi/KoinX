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
import { useParams } from 'react-router-dom';
const Main = () => {
  const params=useParams();
  return (
    <div className='flex  gap-6 p-6 py-10 bg-[#eff2f5] max-md:flex-col max-sm:px-2 relative'>
       <p className=' text-sm text-gray-500 absolute top-[10px]'>Cryptocurrencies &gt;&gt; <span className='text-black text-base font-medium capitalize'>{params.id? params.id:"bitcoin"}</span></p>
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
