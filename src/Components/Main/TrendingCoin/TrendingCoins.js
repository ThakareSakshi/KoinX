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
    <div className='w-full p-4 bg-white rounded-xl'>
      <h1 className='text-3xl font-bold '>Trending Coins (24H)</h1>
      {
        trendindCoins.map(coin=>{
          return <div className='flex p-2 justify-between w-full'>
            <img src={coin.item.small} alt="coin logo" className='h-8 w-8 rounded-full'/>
            <h2>{coin.item.name}</h2>
            <span className="px-2 p-[2px] rounded-md text-sm" style={{color:(coin.item.data.price_change_percentage_24h.usd>0?"green":"red"), backgroundColor:(coin.item.data.price_change_percentage_24h.usd>0?"#ebf9f4":"#fdf0ee")}}><ArrowDropDownIcon/>{Math.round(coin.item.data.price_change_percentage_24h.usd* 100) / 100}%</span>
          </div>
        })
      }

    </div>
  )
}

export default TrendingCoins
