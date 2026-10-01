import { useState } from "react";
import {Link} from 'react-router-dom'
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineShoppingCart, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import logo from '../assets/logo.webp';


const Navbar = () => {
  const [menu,setMenu] = useState(false);

  return (

    <div className=" w-full pt-4">
    <nav className="bg-white  text-gray-500 text-xl md:text-[15px] font-light flex justify-between items-center md:px-12 px-4 py-2 md:py-1 h-12  md:h-15 rounded-4xl hover:bg-lime-100 mb-6 shadow-3xl relative">
      <div className="flex justify-start">
        <img src={logo} alt="logo" className="h-10 w-auto"/>
      </div>


       
    
  {/* menu */}

         <div className="hidden md:flex gap-6 flex-1 justify-end">
          <Link className="hover:text-gray-600" to="/">Home</Link>
          <Link className="hover:text-gray-600" to="/about">About</Link>
          <Link className="hover:text-gray-600" to="/product">Product</Link>
          <Link className="hover:text-gray-600" to="/blog">Blog</Link>
          <Link className="hover:text-gray-600" to="/contact">Contact</Link>
        </div>

        {/* mobile Menu */}
        <button onClick={() => setMenu(!menu)} className="md:hidden text-3xl">
             {menu ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
        </nav>

        {menu && (
          <div className="md:hidden w-[95%] mx-auto flex flex-col gap-3 pb-4  ">
          <Link className="active:text-gray-600 text-gray-900" to="/" onClick={() => setMenu(false)}>Home</Link>
          <Link className="active:text-gray-600 text-gray-900" to="/about" onClick={() => setMenu(false)}>About</Link>
          <Link className="active:text-gray-600 text-gray-900" to="/product" onClick={() => setMenu(false)}>Product</Link>
          <Link className="active:text-gray-600 text-gray-900" to="/blog" onClick={() => setMenu(false)}>Blog</Link>
          <Link className="active:text-gray-600 text-gray-900" to="/contact" onClick={() => setMenu(false)}>Contact</Link>
        </div>
        )}
    
    </div>
  )
};

export default Navbar;