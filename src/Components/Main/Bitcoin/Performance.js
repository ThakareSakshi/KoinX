import React from "react";
import Fundamentals from "./Fundamentals";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Performance = () => {
  return (
    <div className="p-10 bg-white rounded-xl overflow-hidden my-4 max-sm:p-5">
      <h1 className="text-3xl text-[#0F1629] font-semibold">Performance</h1>

      <div className="flex items-center justify-between my-4">
        <div>
          <p  className="text-[14px] text-left max-md:text-[12px]">Today's Low</p>
          <p  className="text-[15px] text-left max-md:text-[13px] font-medium" >46,930.22</p>
        </div>
        <div className="h-1 w-[700px] bg-gray relative">
          <div className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-500  to-green-500 rounded-full"></div>
          <div className="absolute right-[20%] top-1 flex flex-col items-center">
            <ArrowDropUpIcon/>
            <p  className="text-[15px] text-left max-md:text-[12px] font-medium">$48,637.83</p>
          </div>
        </div>
        <div>
          <p className="text-[14px] text-right py-1 max-md:text-[12px]">Today's High</p>
          <p  className="text-[15px] text-right py-1max-md:text-[13px] font-medium">49,343.83</p>
        </div>
      </div>

      <div className="flex items-center justify-between my-4">
        <div>
          <p  className="text-[14px] text-left py-1 max-md:text-[12px]">52W Low</p>
          <p  className="text-[15px] text-left max-md:text-[13px] font-medium">16,930.22</p>
        </div>
        <div className="h-1 w-[700px] bg-gray">
          <div className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-500  to-green-500 rounded-full"></div>
        </div>
        <div>
          <p  className="text-[14px] text-right py-1 max-md:text-[12px]">52W High</p>
          <p  className="text-[15px] text-right max-md:text-[13px] font-medium">49,743.83</p>
        </div>
      </div>

      <Fundamentals/>
      
    </div>
  );
};

export default Performance;
