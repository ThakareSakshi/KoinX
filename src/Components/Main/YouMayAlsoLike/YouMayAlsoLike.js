import { useEffect, useState } from "react";

import axios from "axios";
import Coin from "./Coin";

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
      <h1 className="text-3xl font-semibold my-4">You May Also Like</h1>
      <div className="flex gap-4 overflow-x-scroll p-2">
        {trendindCoins.map((coin) => {
          return <Coin coin={coin} />;
        })}
      </div>

      <h1 className="text-3xl font-semibold my-4">Trending Coins</h1>
      <div className="flex gap-4 overflow-x-scroll p-2">
        {trendindCoins.map((coin) => {
          return <Coin coin={coin} />;
        })}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
