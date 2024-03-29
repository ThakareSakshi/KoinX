import React, { useEffect, useState } from "react";
import TradingViewWidget from "./TradingViewWidget";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const BItcoinChart = () => {
  let params=useParams();
  const navigate=useNavigate();
  params.id=params.id?params.id:"bitcoin"
  
  console.log(params);
  const [priceINR, setPriceINR] = useState(0);
  const [PriceUSD, setPriceUSD] = useState(0);
  const [change, setChange] = useState(0);
  const [imageurl,setimageurl]=useState("");
  const [symbol,setSymbol]=useState("")

  async function fetchdata() {
    try{
      const response = await axios.request({
        method: "get",
        url: "https://api.coingecko.com/api/v3/simple/price?x_cg_demo_api_key=CG-uzug2oPsswL8SZt4drLPdZor",

        params: {
          ids: params.id,
          vs_currencies: `inr,usd`,
          include_24hr_change: true,
        },
      });

      const bitcoin = await response.data[params.id];
      console.log(bitcoin)

      setPriceINR(bitcoin.inr.toLocaleString());
      setPriceUSD(bitcoin.usd.toLocaleString());
      setChange(Math.round(bitcoin.usd_24h_change * 100) / 100);
    
    }
    catch(e){
      navigate("/error");
    }
  }

  async function fetchCoin(){
    try{
      const response = await axios.request({
        method: "get",
        url: `https://api.coingecko.com/api/v3/coins/${params.id}?x_cg_demo_api_key=CG-uzug2oPsswL8SZt4drLPdZor`,

        
      });

      const coin = await response.data;
      console.log(coin);
      setSymbol(coin.symbol.toUpperCase());
      setimageurl(coin.image.small);

    
    }
    catch(e){
      navigate("/error");
    }
  }

  useEffect(() => {
    
     
    
fetchdata();
fetchCoin()
  }, []);

  return (
    <div className="  h-[700px] bg-white rounded-xl p-4 overflow-clip flex flex-col gap-3  max-sm:gap-2 max-md:h-[550px]">
      <div className="flex gap-2 items-center">
        <img
          src={imageurl}
          className="h-8 w-8"
        />
        <h1 className="text-3xl text-[#0F1629] font-semibold capitalize max-sm:text-2xl">{params.id} </h1>
        <span className="text-gray-500 font-semibold text-lg">{symbol}</span>
        <div className="p-1 px-2 bg-gray-400 text-white rounded-md">
          Rank #1
        </div>
      </div>

      <div className="flex gap-4 items-center mt-4">
        <span className="text-2xl font-semibold ">${PriceUSD}</span>
        <span
          className="px-2 p-[2px] rounded-md text-sm"
          style={{
            color: change > 0 ? "green" : "red",
            backgroundColor: change > 0 ? "#ebf9f4" : "#fdf0ee",
          }}
        >
          <ArrowDropDownIcon />
          {change}%
        </span>
        <span className="text-gray-400 text-sm ">(24H)</span>
      </div>
      <p className="font-medium">
        <CurrencyRupeeIcon style={{ fontSize: "16px" }} />
        {priceINR}
      </p>
      <hr />
      <div className="flex justify-between items-center max-md:flex-col max-md:items-start max-md:justify-start">
        <h2 className="font-medium capitalize">{params.id} Price Chart (USD)</h2>
        <div className="flex gap-5 items-center p-2 font-medium max-[400px]:gap-2">
          <li className="text-gray-400 text-sm list-none max-[400px]:text-[11px]">1H</li>
          <li className="text-gray-400 text-sm list-none max-[400px]:text-[11px]">24H</li>
          <li className="text-blue-600 text-sm bg-blue-100 list-none px-2 rounded-full max-[400px]:text-[11px]">
            7D
          </li>
          <li className="text-gray-400 text-sm list-none max-[400px]:text-[11px]">1M</li>
          <li className="text-gray-400 text-sm list-none max-[400px]:text-[11px]">3M</li>
          <li className="text-gray-400 text-sm list-none max-[400px]:text-[11px]">6M</li>
          <li className="text-gray-400 text-sm list-none max-[400px]:text-[11px]">1Y</li>
          <li className="text-gray-400 text-sm list-none max-[400px]:text-[11px]">ALL</li>
        </div>
      </div>
      <TradingViewWidget />
    </div>
  );
};

export default BItcoinChart;
