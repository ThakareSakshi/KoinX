import { useEffect, useState } from "react";

import axios from "axios";
import Coin from "./Coin";
import Carousel from "./Carousel";

const YouMayAlsoLike = () => {
  const [trendindCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    async function fetchCoins() {
      const response = await axios.request({
        method: "get",
        url: "https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-uzug2oPsswL8SZt4drLPdZor",
      });

      const coins = response.data.coins;

      setTrendingCoins([...coins]);
    }
    fetchCoins();
  }, []);
  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold my-4">You May Also Like</h1>
     
      <Carousel key="youmaylike" id={"carousel1"}/>
      <h1 className="text-2xl font-semibold my-4">Trending Coins</h1>
      
      <Carousel key="trendingcoin" id={"carousel2"}/>
    </div>
  );
};

export default YouMayAlsoLike;
