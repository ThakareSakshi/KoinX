import React ,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 

  return (
    <div className='w-full flex justify-between px-6 py-2 relative'>
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
        <div className='md:hidden block text-xl text-black ' onClick={handleMenuToggle}>
         <MenuIcon/>
         <div className={` w-1/2 block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} absolute top-10 right-0 bg-white  z-50` }>
          <div className="text-sm lg:flex-grow  border-[1px]">
              <a href="#responsive-header" className="block m-2 lg:inline-block lg:mt-0 text-gray-500 p-2 hover:text-white  border-b-[1px]">
                Crypto Taxes
              </a>
              <a href="#responsive-header" className="block m-2 lg:inline-block lg:mt-0 text-gray-500 p-2  hover:text-white  border-b-[1px]">
                Free Tools
              </a>
              <a href="#responsive-header" className="block m-2 lg:inline-block lg:mt-0 text-gray-500 p-2 hover:text-white ">
              Resource Center
              </a>
          </div>
         </div>
         </div>
         
       
      
    </div>
  )
}

export default Navbar
