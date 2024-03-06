import React from "react";
import Fundamentals from "./Fundamentals";

const Performance = () => {
  return (
    <div className="p-10 bg-white rounded-xl overflow-hidden my-4">
      <h1 className="text-2xl text-[#0F1629] font-semibold">Performance</h1>

      <div className="flex items-center justify-between my-4">
        <div>
          <p  className="text-[13px] text-left">Today Low</p>
          <p  className="text-[15px] text-left">434,4565,45</p>
        </div>
        <div className="h-1 w-[700px] bg-gray">
          <div className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-500  to-green-500 rounded-full"></div>
        </div>
        <div>
          <p className="text-[13px] text-right py-1">Today high</p>
          <p  className="text-[15px] text-right py-1">434,4565,45</p>
        </div>
      </div>

      <div className="flex items-center justify-between my-4">
        <div>
          <p  className="text-[13px] text-left py-1">Today Low</p>
          <p  className="text-[15px] text-left">434,4565,45</p>
        </div>
        <div className="h-1 w-[700px] bg-gray">
          <div className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-500  to-green-500 rounded-full"></div>
        </div>
        <div>
          <p  className="text-[13px] text-right py-1">Today high</p>
          <p  className="text-[15px] text-right">434,4565,45</p>
        </div>
      </div>

      <Fundamentals/>
      
    </div>
  );
};

export default Performance;
