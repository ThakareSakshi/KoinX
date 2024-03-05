import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between px-6 py-2 '>
        <div>
            <img src="logo.png" alt=""/>
        </div>
        <div className='flex gap-4 items-center max-md:hidden'>
            <ul className='flex justify-evenly gap-6 font-semibold max-md:hidden'>
                <li>Crypto Taxes</li>
                <li>Free Tools</li>
                <li>Resource Center</li>
               

            </ul>
            <button className='text-white px-4 py-2  bg-[#0052FE] rounded-md m-2 font-semibold'>
               Get Started
            </button>

        </div>
        <div className='md:hidden text-xl text-black'>
        <i class="fa-solid fa-bars"></i>
        </div>
      
    </div>
  )
}

export default Navbar
