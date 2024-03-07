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
import YouMayAlsoLike from './YouMayAlsoLike/YouMayAlsoLike';
const Main = () => {
  const params=useParams();
  return (
    <div className='grid grid-cols-3 gap-6 max-md:gap-2 pt-10 bg-[#eff2f5] max-md:flex-col  relative max-md:grid-cols-1 max-md:pb-0'>
       <p className=' text-sm  ml-6 text-gray-500 absolute top-[20px]'>Cryptocurrencies &gt;&gt; <span className='text-black text-base font-medium capitalize'>{params.id? params.id:"bitcoin"}</span></p>
        <div className='w-[96%] max-md:w-full col-span-2 mt-4 ml-6  max-md:col-start-1 max-md:mr-4 max-md:ml-4'>
               <BItcoinChart/>
               <Nav/>
               <Performance/>
               <Sentiments/>
               <AboutBitcoin/>
               <Tokenomics/>
               <Team/>
        </div>
        <div className='w-[96%] flex flex-col gap-4  mt-4 mr-6 max-md:row-start-3 max-md:ml-2 max-md:mr-2 max-md:w-full '>
         <GetStartedCard/>
         <TrendingCoins/>
        </div>
       <div className='col-span-3 bg-white'>
       <YouMayAlsoLike />
       </div>
      
    </div>
  )
}

export default Main;
