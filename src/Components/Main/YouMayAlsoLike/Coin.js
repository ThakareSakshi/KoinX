import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Coin = ({ coin }) => {
  return (
    <div className="min-w-fit p-2 border-[1px]  ">
      <div className="flex gap-1 items-center">
        <img src={coin.item.small} />
        <p>{coin.item.symbol}</p>
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
      <h2>{coin.item.data.price}</h2>
      <img src={coin.item.data.sparkline} />
    </div>
  );
};

export default Coin;
