
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { HiOutlineBars3, HiOutlineXMark, HiSparkles } from "react-icons/hi2";
import {
  FiSearch,
  FiMoon,
  FiSun,
  FiHeart,
  FiShoppingBag,
  FiX,
  FiRefreshCw,
} from "react-icons/fi";
import { GoCheck } from "react-icons/go";
import { FaStar } from "react-icons/fa";

import banner from "../assets/banner.webp";
import cash1 from "../assets/cash1.jpg";
import cash2 from "../assets/cash2.jpg";
import cash3 from "../assets/cash3.jpg";
import cash4 from "../assets/cash4.jpg";
import cash5 from "../assets/cash5.jpg";



const ProductCard = ({ p, onBuyNow, showAdd }) => (
  <div className="bg-white rounded-3xl shadow hover:shadow-2xl overflow-hidden group duration-300">
    <div className="bg-gray-200 p-3 relative">
      <div className="absolute top-3 left-3 space-y-2">
        <span className="bg-orange-500 text-white text-[10px] px-2 py-1 rounded-full">-{p.discount}%</span>
        <span className="bg-orange-400 text-white text-[10px] px-2 py-1 rounded-full">{p.badge}</span>
      </div>

      <img
       src={`/images/${p.image}`}
       alt={p.name} 

        className="w-full h-36 md:h-75 pt-2 pb-2 rounded-2xl object-cover mt-8 group-hover:scale-110 group-active:scale-110 duration-500"
      />

      <div className="flex gap-1.5 md:gap-2 mt-3">
        {showAdd && (
          <button className="flex-1 bg-white rounded-xl py-2 flex justify-center items-center gap-1 hover:bg-black hover:text-white duration-300 text-[10px] md:text-sm px-1">
            <FiShoppingBag size={14} /> <span className="hidden sm:inline">Add</span>
          </button>
        )}
        <button
          onClick={() => onBuyNow(p)}
          className="flex-1 bg-black text-white rounded-xl py-2 flex justify-center items-center gap-1 hover:bg-gray-800 duration-300 text-[10px] md:text-sm whitespace-nowrap px-1"
        >
          <FiShoppingBag size={14} className={showAdd ? "hidden sm:inline" : ""} />
          Buy Now
        </button>
        <button className="w-8 md:w-11 shrink-0 bg-white rounded-xl flex justify-center items-center hover:bg-red-500 hover:text-white duration-300">
          <FiHeart size={16} />
        </button>
      </div>
    </div>

    <div className="p-3">
      <div className="flex justify-between text-xs text-gray-500">
        <span>{p.category}</span>
        <span className="flex items-center gap-1 text-yellow-500">
          <FaStar size={13} /> {p.rating}
        </span>
      </div>
      <h3 className="font-bold mt-1 text-[12px] md:text-sm">{p.name}</h3>
      <div className="flex gap-2 mt-2 items-center">
        <span className="font-bold">${p.price}</span>
        <span className="line-through text-gray-400">${p.oldPrice}</span>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [cart, setCart] = useState(2);
  const [search, setSearch] = useState("");

  const handleBuyNow = (product) => {
    navigate("/checkout", { state: product });
  };
  const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("https://laravel.arifurrahmanrasel.top/api/products")
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);

  return (
    <>
      <section>
        <div className="w-full">
          <nav className="bg-gray-500 text-white text-xl md:text-[15px] font-light flex justify-between items-center px-6 py-2 md:py-1 h-12 md:h-15 rounded-xs shadow-3xl relative">
            <div className="flex items-center gap-4 text-xl md:text-2xl text-white">
              <button onClick={() => setSearchOpen(true)}>
                <FiSearch />
              </button>
              <button onClick={() => setDark(!dark)}>
                {dark ? <FiSun className="text-yellow-500" /> : <FiMoon />}
              </button>
              <button onClick={() => setWishlist(!wishlist)}>
                <FiHeart className={wishlist ? "text-red-500 fill-red-500" : "text-white"} />
              </button>
              <button onClick={() => setCart(cart + 1)} className="relative">
                <FiShoppingBag />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full text-white text-[10px] flex items-center justify-center">
                  {cart}
                </span>
              </button>
            </div>

            {searchOpen && (
              <div
                onClick={() => setSearchOpen(false)}
                className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start pt-20 px-4"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-2xl bg-white rounded-full px-6 py-4 flex items-center gap-3 shadow-2xl"
                >
                  <FiSearch className="text-xl text-white" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="flex-1 outline-none text-lg text-gray-600"
                    autoFocus
                  />
                  <button onClick={() => setSearchOpen(false)}>
                    <FiX className="text-2xl text-gray-500 hover:text-red-500" />
                  </button>
                </div>
              </div>
            )}

            <div className="hidden md:flex gap-6 flex-1 justify-end">
              <Link className="hover:text-rose-600" to="/">Shop</Link>
              <Link className="hover:text-rose-600" to="/about">Categories</Link>
              <Link className="hover:text-rose-600" to="/product">Sale</Link>
              <Link className="hover:text-rose-600" to="/blog">New Arrivals</Link>
              <Link className="hover:text-rose-600" to="/contact">Contact</Link>
            </div>

            <button onClick={() => setMenu(!menu)} className="md:hidden text-3xl">
              {menu ? <HiOutlineXMark /> : <HiOutlineBars3 />}
            </button>
          </nav>

          {menu && (
            <div className="md:hidden w-[95%] mx-auto flex flex-col gap-3 pb-4">
              <Link className="active:hover:text-rose-600 text-gray-900" to="/" onClick={() => setMenu(false)}>Shop</Link>
              <Link className="active:hover:text-rose-600 text-gray-900" to="/about" onClick={() => setMenu(false)}>Categories</Link>
              <Link className="active:hover:text-rose-600 text-gray-900" to="/product" onClick={() => setMenu(false)}>Product</Link>
              <Link className="active:hover:text-rose-600 text-gray-900" to="/blog" onClick={() => setMenu(false)}>New Arrivals</Link>
              <Link className="active:hover:text-rose-600 text-gray-900" to="/contact" onClick={() => setMenu(false)}>About</Link>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="relative min-h-screen overflow-hidden pt-8 py-8 px-1">
          <img src={banner} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#020817]/70"></div>
          <div className="relative z-10 w-[90%] max-w-7xl mx-auto min-h-screen flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
              <div className="lg:w-1/2 text-white text-center lg:text-left">
                <div className="flex justify-center items-center md:justify-start">
                  <p className="inline-flex items-center gap-2 uppercase tracking-[1px] font-semibold text-[10px] text-black bg-white md:px-4 md:py-2 px-2 rounded-full hover:bg-gray-200 duration-300 mb-4">
                    <HiSparkles className="text-yellow-500 text-sm" />
                    New Collection 2026
                  </p>
                </div>
                <h1 className="text-[45px] md:text-8xl font-bold leading-tight mb-5">
                  Step Into <br /> <span className="text-cyan-400">Your Best</span>
                </h1>
                <p className="text-gray-300 mb-8 text-[16px]">
                  Premium sneakers built for comfort, performance and everyday style.
                </p>
                <div className="flex gap-4 items-center justify-center md:justify-start">
                  <button className="bg-cyan-400 uppercase md:tracking-[2px] text-white md:px-10 md:py-4 rounded-xl font-semibold hover:bg-cyan-300 duration-300 text-[12px] md:text-xl px-4 py-3">
                    Shop Now
                  </button>
                  <button className="text-white uppercase md:tracking-[2px] border-1 md:px-8 md:py-4 px-3 py-3 rounded-xl font-semibold hover:bg-cyan-300 duration-300 md:text-xl text-[12px]">
                    Browse Categories
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2 mt-8 relative flex justify-center">
                <img
                  src={cash1}
                  alt="Product"
                  className="w-[350px] md:w-[500px] md:h-[500px] h-[350px] object-cover rounded-3xl shadow-xs hover:bg-gray-300 shadow-gray-700 rotate-1 animate-[float_4s_ease-in-out_infinite]"
                />
                <div className="absolute md:top-3 right-1 md:right-2 md:w-20 md:h-20 w-16 h-16 rounded-full bg-cyan-400 flex flex-col items-center justify-center shadow-xl">
                  <span className="text-black text-[9px] font-bold uppercase">UP TO</span>
                  <h2 className="text-black md:text-2xl text-xs font-extrabold leading-none">40%</h2>
                  <span className="text-black text-[10px] font-bold uppercase">OFF</span>
                </div>
                <div className="absolute top-22 md:top-28 -left-3 md:-left-6 bg-cyan-400 backdrop-blur rounded-2xl px-4 md:py-3 py-4 flex items-center gap-3 shadow-xl">
                  <div className="md:w-10 md:h-10 w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center">
                    <GoCheck className="text-white md:text-xl" />
                  </div>
                  <div className="leading-tight">
                    <h3 className="text-black font-bold text-[12px] md:text-sm">Free Shipping</h3>
                    <p className="text-black text-[10px] md:text-xs">Orders over $75</p>
                  </div>
                </div>
                <div className="absolute bottom-5 md:opacity-100 right-0 bg-cyan-400 backdrop-blur rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
                  <div className="md:w-10 md:h-10 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
                    <FiRefreshCw className="text-white md:text-lg text-xs" />
                  </div>
                  <div className="leading-tight">
                    <h3 className="text-black font-bold md:text-sm text-[12px]">Easy Returns</h3>
                    <p className="text-black md:text-xs text-[10px]">60-day guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mt-20 bg-gray-50 pt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold">Featured Products</h2>
              <p className="text-gray-500 mt-2">Best quality products for your active lifestyle</p>
            </div>
            <button className="hidden md:block border px-5 py-2 rounded-full hover:bg-black hover:text-white duration-300">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
           {products.slice(0, 4).map((p, i) => (
  <ProductCard key={i} p={p} onBuyNow={handleBuyNow} showAdd />
))}
          </div>
        </div>
      </section>

      {/* Trending / Buy Now section */}
      <section className="pt-12 mb-20 bg-gray-50 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products.slice(4, 8).map((p, i) => (
  <ProductCard key={i} p={p} onBuyNow={handleBuyNow} showAdd={false} />
))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;