import React from 'react'
import DoughnutChart from './DoughnutChart';

const Tokenomics = () => {

  return (
    <div className="p-10 bg-white rounded-xl overflow-hidden my-4 max-sm:p-5">
        <h2 className="text-3xl text-[#0F1629] font-semibold">Tokenomics</h2>
        <h3 className='text-lg font-semibold mt-4'>Initial Distribution </h3>
        <div className='h-[180px] w-[300px] flex items-center'>
            <DoughnutChart/>
            
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores repellat a expedita debitis eligendi inventore voluptates corporis. Fugiat molestiae necessitatibus eligendi dicta omnis ex exercitationem quia corporis harum! Possimus!
        Iure nam incidunt libero, delectus quod atque? Iusto doloremque corporis aut delectus, dolore tempora aliquam quos cumque veniam quia laudantium odit quas aperiam. Repellat consectetur veritatis accusantium numquam ducimus quo?
        Vero temporibus quasi minima, laborum quisquam veritatis. Suscipit autem et architecto quisquam eaque earum, molestiae ex ducimus, nobis quasi perspiciatis! Ipsam, modi exercitationem aperiam fugit ullam velit mollitia eius aspernatur.
         tenetur adipisci quibusdam? Ullam autem aperiam natus neque.</p>
      
    </div>
  )
}

export default Tokenomics
