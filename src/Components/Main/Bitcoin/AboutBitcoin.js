import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutBitcoin = () => {
  return (
    <div className="p-10 bg-white rounded-xl overflow-hidden my-4 max-sm:p-5">
      <h2 className="text-3xl text-[#0F1629] font-semibold ">About Bitcoin</h2>
      <h3 className="text-lg text-[#0F1629] font-semibold my-2">
        What is Bitcoin ?
      </h3>
      <p className="py-2">
        Bitcoin is a digital currency which operates free of any central control
        or the oversight of banks or governments. Instead it relies on
        peer-to-peer software and cryptography. A public ledger records all
        bitcoin transactions and copies are held on servers around the world.
        Anyone with a spare computer can set up one of these servers, known as a
        node. Consensus on who owns which coins is reached cryptographically
        across these nodes rather than relying on a central source of trust like
        a bank.
      </p>
        <hr className="my-2"/>
      <h3 className="text-lg text-[#0F1629] font-semibold my-2">
        Lorem ipsum dolor sit amet ?
      </h3>
      <p className="py-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
        accusamus repudiandae soluta ipsam iste atque sequi cum eveniet, aperiam
        omnis, iusto quisquam asperiores id sit voluptas dolorum. Expedita,
        possimus quam.
      </p>
      <p className="py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor
        maxime libero sapiente est et dolore quas rerum. Animi aperiam cum nemo
        cumque assumenda aliquam exercitationem? Quod sit laborum ullam? Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Deserunt impedit
        libero nobis minus quae est eaque ad quidem asperiores dicta maxime, in
        cum, architecto debitis labore ducimus atque. Expedita, vero.
      </p>
      <p className="py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor
        maxime libero sapiente est et dolore quas rerum. Animi aperiam cum nemo
        cumque assumenda aliquam exercitationem? Quod sit laborum ullam? Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Deserunt impedit
        libero nobis minus quae est eaque ad quidem asperiores dicta maxime, in
        cum, architecto debitis labore ducimus atque. Expedita, vero.
      </p>
       <hr className="my-2"></hr>
      <h2 className="text-2xl text-[#0F1629] font-semibold my-2">
        Already Holding Bitcoin ?
      </h2>
      <div className=" flex p-2 gap-4 max-[650px]:flex-col">
        <div className="bg-gradient-to-br from-emerald-500 to-cyan-600 p-4 rounded-lg text-white font-medium flex items-center gap-4 w-1/2 max-[650px]:w-full max-md:p-2">
          <div className="">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqbv6xN2CXJWUo24by8Ls-biY2x7piR5Jlw&usqp=CAU"
              alt="img"
              className="h-[150px] w-[150px] rounded-xl max-md:h-[100px] max-md:w-[100px]"
            />
          </div>
          <div className="w-1/2 max-md:w-2/3">
            <h2 className="text-2xl font-medium max-md:text-xl">Calculate your profit</h2>
            <button className="p-1 px-4 bg-white text-black rounded-lg my-2 max-md:px-1">
              Check now <ArrowForwardIcon/>
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-lg text-white font-medium w-1/2 flex items-center gap-4 max-[650px]:w-full max-md:p-2">
          <div className="">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqbv6xN2CXJWUo24by8Ls-biY2x7piR5Jlw&usqp=CAU"
              alt="img"
              className="h-[150px] w-[150px] rounded-xl max-md:h-[100px] max-md:w-[100px]"
            />
          </div>
          <div className="w-1/2 max-md:w-2/3">
            <h2 className="text-2xl font-medium max-md:text-xl">
              Calculate your Tax liability
            </h2>
            <button className="p-1 px-4 bg-white text-black rounded-lg my-2 max-md:px-1">
              Check now <ArrowForwardIcon/>
            </button>
          </div>
        </div>
      </div>
      <hr className="my-2"/>
      <p className="my-2">Expedita dolorem. Minima consectetur officiis esse qui impedit alias optio soluta minus amet aut, dolore iure sunt cupiditate maiores, facere dignissimos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque repellendus quia tenetur corporis dolor culpa dolores vero ab, maxime iste nostrum, corrupti neque at perspiciatis doloremque, minima illo necessitatibus? Cum?</p>
    </div>
  );
};

export default AboutBitcoin;
