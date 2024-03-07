import React, { useState ,useEffect} from 'react';
import Coin from './Coin';
import axios from 'axios';
const Carousel = ({ id }) => {
  const [scrollX, setScrollX] = useState(0);
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

  const handleLeftScroll = () => {
    const container = document.getElementById(id);
    if (container) {
      container.scrollLeft -= 260; 
      setScrollX(container.scrollLeft);
    }
  };

  const handleRightScroll = () => {
    const container = document.getElementById(id);
    if (container) {
      container.scrollLeft += 260; 
      setScrollX(container.scrollLeft);
    }
  };

  return (
    <div className="relative w-full overflow-hidden p-4 m-2">
      <div id={id} className="flex gap-2 overflow-x-auto scrollbar-hide p-2">
      {trendindCoins.map((coin) => {
          return <Coin coin={coin} />;
        })}
      </div>
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent border-none text-2xl" onClick={handleLeftScroll}>
        &lt;
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent border-none text-2xl" onClick={handleRightScroll}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
