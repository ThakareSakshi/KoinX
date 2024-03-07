import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Coin = ({ coin }) => {
  return (
    <div className=" p-2 border-[2px]  min-w-[300px] h-[200px]  max-sm:min-w-[250px] rounded-lg  overflow-hidden">
      <div className="flex gap-1 items-center">
        <img src={coin.item.small} className="h-10 w-10 rounded-full" />
        <p className=" text-[#202020]">{coin.item.symbol}</p>
        <span
          className="px-2 p-[2px] rounded-md text-sm"
          style={{
            color:
              coin.item.data.price_change_percentage_24h.usd > 0
                ? "green"
                : "red",
            backgroundColor:
              coin.item.data.price_change_percentage_24h.usd > 0
                ? "#ebf9f4"
                : "#fdf0ee",
          }}
        >
          <ArrowDropDownIcon />
          {Math.round(coin.item.data.price_change_percentage_24h.usd * 100) /
            100}
          %
        </span>
      </div>
      <h2 className=" text-xl font-medium">{coin.item.data.price}</h2>
      <img src={coin.item.data.sparkline} className="p-4 w-[80%]" />
    </div>
  );
};

export default Coin;
