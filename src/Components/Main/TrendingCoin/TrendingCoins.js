import React, { useEffect, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from "axios"


const TrendingCoins = () => {

  const [trendindCoins,setTrendingCoins]=useState([]);

  useEffect(()=>{
    async function fetchCoins(){
      const response=await axios.request({
        method: 'get',
        url: 'https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-uzug2oPsswL8SZt4drLPdZor',
      
      })

      const coins=response.data.coins;
      console.log(coins);

      const topThreeCoins=coins.filter((coin,index)=>index<3);
      setTrendingCoins(topThreeCoins);

 }
 fetchCoins();
     
  },[])
  return (
    <div className='w-full p-4 bg-white rounded-xl '>
      <h1 className='text-2xl font-bold my-2'>Trending Coins (24H)</h1>
      {
        trendindCoins.map(coin=>{
          return <div className='flex p-2 justify-between w-full'>
            <div className='flex gap-2'>
            <img src={coin.item.small} alt="coin logo" className='h-7 w-7 rounded-full'/>
            <h2 className='text-[#0F1629] font-medium'>{coin.item.name}</h2>
            </div>
            <span className="px-2 p-[2px] rounded-md text-sm" style={{color:(coin.item.data.price_change_percentage_24h.usd>0?"green":"red"), backgroundColor:(coin.item.data.price_change_percentage_24h.usd>0?"#ebf9f4":"#fdf0ee")}}><ArrowDropDownIcon/>{Math.round(coin.item.data.price_change_percentage_24h.usd* 100) / 100}%</span>
          </div>
        })
      }

    </div>
  )
}

export default TrendingCoins
