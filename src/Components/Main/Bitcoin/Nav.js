import React from 'react'

const Nav = () => {
  return (
    <div className='px-6'>
      <ul className='flex gap-4 pt-4 font-sans font-medium border-b-[1px] border-gray-500 text-[#3E424A] overflow-x-auto'>
        <li className='p-2 px-4 border-b-2 border-blue-600 text-blue-600'>Overview</li>
        <li className='p-2 px-4'>Fundamentals</li>
        <li className='p-2 px-4'>News Insights</li>
        <li className='p-2 px-4'>Sentiments</li>
        <li className='p-2 px-4'>Team</li>
        <li className='p-2 px-4'>Technicals</li>
        <li className='p-2 px-4'>Tokenomics</li>
      </ul>
    </div>
  )
}

export default Nav;
