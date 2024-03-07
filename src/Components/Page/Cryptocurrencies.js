import React from 'react'
import Navbar from '../Header/Navbar'
import Main from '../Main/main'
import YouMayAlsoLike from '../Main/YouMayAlsoLike/YouMayAlsoLike'

const Cryptocurrencies = () => {
  return (
    <div>
      <Navbar/>
      <div>
       
        <Main/>
      </div>
      <YouMayAlsoLike/>
    </div>
  )
}

export default Cryptocurrencies
