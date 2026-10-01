import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import images from '../assets/images.jpg'
import img from '../assets/img.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import { GoArrowRight } from "react-icons/go";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [email, setEmail] = useState("");

const handleSubscribe = async () => {
  try {
    const res = await fetch("https://laravel.arifurrahmanrasel.top/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    console.log("STATUS:", res.status);
    console.log("DATA:", data);

    if (res.ok) {
  setEmail("");
  console.log("Subscribed Successfully");
} else {
  console.log(data.message);
}
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
  return (
    <>
    <section>
      {/* hero fast */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center ' >
        <div className='w-full md:w-1/2 px-5'>
          <h6 className='text-xs text-gray-950 mb-8 tracking-[4px]'>
            Welcome to Boocah
          </h6>
          <h1 className='md:text-[100px] text-[47px] fon font-extrabold mb-2 text-gray-950 leading-[1.5]'>
            Child Care Expert
          </h1>
          <p className='text-[15px] md:[18px] text-gray-900 mb-8'>Facilisi commodo ac consequat erat risus duis velit quis velit fermentum feugiat sit bibendum pellentesque semper maecenas posuere cursus gravida.</p>
          <div className='flex gap-4 items-center'>
            <a className=' px-7 py-3 rounded-xl active:bg-white bg-lime-300 text-gray-900 font-semibold text-[12px] md:text-[16px] hover:bg-gray-200' href="">Contact Us</a>
            <a href="" className='flex items-center gap-2 rounded-xl hover:bg-lime-300 px-6 py-3 md:text-[16px] text-gray-900 font-semibold text-[12px] active:bg-white'> Learn More<GoArrowRight /> </a>
          </div>
        </div>
        <div className='w-1/2 md:w-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full overflow-hidden shadow-2xl flex items-center justify-center mb-18 shadow-lime-600 hover:shadow-gray-500 mt-10 '>
          <img
            src={images} alt="images"
            className='md:h-[480px] md:w-[480px] h-[290px]  w-[290px] rounded-full object-cover' />
        </div>
      </div>
      <div className='w-[95%] md:w-[98%] border-t-[1px] border-gray-400 mb-12'></div>
    </section>
   
   <section>
    <div className='flex px-4 flex-col md:flex-row mb-8'>
      <div className=' justify-start items-center w-full md:w-[70%]  '>
        <p className='text-4xl md:text-5xl pb-12 text-lime-900'>Babies</p>
        <div className='border-t-[1px] border-gray-400 w-[98%] '>
        <h1 className='text-2xl md:text-3xl text-gray-700 font-semibold mt-4'>How to improve venenatis ultrices nulla</h1>
        <p className='md:text-[16px] text-xs text-gray-600 mt-4'>Babies, Sensory Play / January 21, 2026</p>
        </div>
        <div className='mt-12 flex '>
          <div className='border-b-[1px] border-gray-400 w-[98%] pb-8'>
          <img className='w-[300px] md:w-[90%] h-[300px] md:h-[500px] flex' src={img4} alt="img4" />
          <div>
          <p className='mt-8 text-[15px] text-gray-700 '>Mi vel morbi tristique adipiscing magna tristique porttitor quis vel elementum amet commodo diam hendrerit odio sit cras vel vel arcu semper tellus sapien morbi sit iaculis amet mauris tellus velit donec ipsum rhoncus fusce in volutpat congue quis pharetra. Donec molestie enim vitae id tempus etiam malesuada consectetur eget aenean purus lacus, nunc ipsum […]</p>
        </div>
        <div className='flex'>
            <a className='bg-lime-600 px-8 py-3 mt-4 hover:bg-white rounded-[3px]' href="">Read More »</a>
        </div>
          </div>
        </div>  
      </div>
      <div className='justify-start items-center w-full md:w-[30%] flex '>
        <div className='md:border-l-[1px] border-gray-400 md:pl-6 md:h-[1050px] '>
         <p className='mt-22 text-3xl text-gray-900 md:text-3xl mb-4'>Recent Posts</p>
         <p className='mb-2'><a className='mt-22 text-[15px]  text-gray-700 md:text-[18px] ' href="">Taste-safe sensory nulla dignissim</a></p>
         <p className='mb-2'><a className='mt-22 text-[15px]  text-gray-700 md:text-[18px] '  href="">Exploring the duis lacus turpis</a></p>
         <p className='mb-2'><a className='mt-22 text-[15px] md:text-[18px]  text-gray-700 '  href="">faucibus</a></p>
         <p className='mb-2'><a className='mt-22 text-gray-700 text-[15px] md:text-[18px]  '  href="">How to improve venenatis ultr</a></p>
         <p className=''><a className='mt-22 text-gray-700 text-[15px] md:text-[18px]  '  href="">nulla</a></p>
         <p className='mt-8 text-3xl text-gray-900 md:text-3xl mb-4'>Categories</p>
          <p className='mb-2'><a className='mt-22  text-gray-700 text-[15px] md:text-[18px]  '  href="">Play Spaces</a></p>
          <p className='mb-2'><a className='mt-22 text-gray-700 text-[15px] md:text-[18px]  '  href="">Preschools</a></p>
          <p className='mb-2'><a className='mt-22 text-gray-700 text-[15px] md:text-[18px]  '  href="">Science</a></p>
          <p className='mb-2'><a className='mt-22 text-gray-700 text-[15px] md:text-[18px]  '  href="">Sensory Play</a></p>
          <p className='mb-2'><a className='mt-22 text-gray-700 text-[15px] md:text-[18px]  '  href="">Toddlers</a></p>
        </div>
      </div>
    </div>
   </section>

   <section>
    <div className='flex flex-col md:flex-row md:justify-between items-center gap-6 mb-10 mt-20 px-5 '>
      <div className='md:w-[60%]'>
              <h1 className='md:text-5xl text-[33px] font-bold text-gray-800  mb-4'>Featured Articles</h1>
              <p className='md:text-[17px] text-[15px] mb-4 text-gray-700 md:w-[50%]'>Dolor ultrices facilisis odio donec massa amet mattis nunc scelerisque nunc tincidunt vitae nunc amet placerat.</p>
      </div>
         <a className='bg-lime-600 active:bg-white px-8 py-4 text-[16px] md:text-[18px] border-2 border-white rounded-[5px] hover:bg-white shadow-[0_0_40px_rgba(0,0,0,0.45)]' href="">View All Articles</a>
    </div>
      <div className='flex  flex-wrap gap-12 mb-18 justify-center '>


        <div className='mt-8  gap-6 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.45)] hover:shadow-[0_0_40px_rgba(0,0,0,0.55)] active:shadow-[0_0_60px_rgba(0,0,0,0.65)] h-auto w-full md:h-auto  md:w-[380px] bg-white'>
          <div className=' md:h-[570px] h-[480px]  w-full  md:w-[380px] '>
              <img className='block object-cover md:w-[380px] md:h-[300px] w-full rounded-2xl' src={img2} alt="img2" />
              <div className=' bottom-0 left-0 w-full px-8  mt-8'>
                <h1 className=' md:text-2xl text-[20px] text-gray-800 font-semibold mb-4'>Vulputate hendrerit libero augue etiam</h1>
                <p className='text-gray-700 text-[15px] md:text-[15px] mb-4'>Molestie risus, tempor duis tempus diam ornare mauris ac odio bibendum lectus blandit senectus odio nisl.</p>
                <a className='text-gray-800 hover:text-gray-900 font-medium items-center block pb-4 gap-1' href="">Read More  →</a>
              </div>
          </div>
        </div>


         <div className=' mt-8 gap-6 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.45)] hover:shadow-[0_0_40px_rgba(0,0,0,0.55)] active:shadow-[0_0_60px_rgba(0,0,0,0.65)]  w-full md:w-[380px] md:h-auto h-auto bg-white'>
          <div className=' md:h-[570px] h-[480px] w-full  md:w-[380px] '>
              <img className='object-cover md:w-[380px] md:h-[300px] w-full rounded-2xl' src={img5} alt="img5" />
              <div className=' bottom-0 left-0 w-full px-8 mt-8'>
                <h1 className=' md:text-2xl text-[20px] text-gray-800 font-semibold mb-4'>Justo sem condimentum ante aliquam</h1>
                <p className='text-gray-700 text-[15px] md:text-[15px] mb-4'>Mattis adipiscing etiam ac feugiat sed consequat a donec ultrices euismod elit mauris risus diam morbi</p>
                <a className='text-gray-800 hover:text-gray-900 font-medium inline-flex items-center gap-1' href="">Read More  →</a>
              </div>
          </div>
        </div>
         <div className='mt-8 gap-6 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.45)] hover:shadow-[0_0_40px_rgba(0,0,0,0.55)] active:shadow-[0_0_60px_rgba(0,0,0,0.65)] overflow-hidden w-full md:w-[380px]  h-auto md:h-auto bg-white'>

          <div className=' md:h-[570px] h-[480px] w-full  md:w-[380px] '>
              <img className='object-cover md:w-[380px] md:h-[300px] w-full rounded-2xl' src={img6} alt="img6" />
              <div className=' bottom-0 left-0 w-full px-8 mt-8'>
                <h1 className=' md:text-2xl text-[20px] text-gray-800 font-semibold mb-4'>Nibh tristique duis cras et</h1>
                <p className='text-gray-700 text-[15px] md:text-[15px] mb-4'>Quisque eleifend at sed in arcu sit eu, facilisi orci sapien, sed placerat cursus blandit amet neque, turpis ipsum dolor ultricies eget dolor enim.</p>
                <a className='text-gray-800 hover:text-gray-900 font-medium inline-flex items-center gap-1' href="">Read More  →</a>
              </div>
          </div>
        </div>
        </div>
   </section>


    <section>
      <div className='flex flex-wrap gap-12 mb-10 mt-40 justify-center '>
        <div className=' relative rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.25)] hover:shadow-[0_0_40px_rgba(0,0,0,0.55)] active:shadow-[0_0_60px_rgba(0,0,0,0.65)]  w-full md:w-[320px] mb-32'>
          <div className=' md:h-[320px] h-[350px] w-full  md:w-[380px]  justify-center items-center  '>
              <img className='absolute left-1/2 -translate-x-1/2 -top-16 z-10  object-cover md:w-[150px] md:h-[150px] w-[150px] h-[150px] rounded-2xl' src={img7} alt="img7" />
              <div className=' pt-[110px] md:pt-[120px] w-full px-4 '>
                <p className='text-gray-700 text-[15px] md:text-[15px] mb-4 pr-14 px-4'>Molestie risus, tempor duis tempus diam ornare mauris ac odio bibendum lectus blandit senectus odio nisl.“Vitae purus ante enim, nec iaculis proin erat in nullam ipsum ut in vitae nec aliquam at mattis fermentum sagittis.”</p>
                <a className='text-gray-800 hover:text-gray-900 mb-8 font-medium inline-flex items-center gap-1 px-4' href="">Read More  →</a>
              </div>
          </div>
        </div>
         <div className=' relative rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.25)] hover:shadow-[0_0_40px_rgba(0,0,0,0.55)] active:shadow-[0_0_60px_rgba(0,0,0,0.65)]  w-full md:w-[320px] mb-28'>
          <div className=' md:h-[320px] h-[350px] w-full  md:w-[380px]  justify-center items-center  '>
              <img className='absolute left-1/2 -translate-x-1/2 -top-16 z-10  object-cover md:w-[150px] md:h-[150px] w-[150px] h-[150px] rounded-2xl' src={img8} alt="img8" />
              <div className=' pt-[110px] md:pt-[120px] w-full px-4 '>
                <p className='text-gray-700 text-[15px] md:text-[15px] mb-4 pr-14 px-4'>Molestie risus, tempor duis tempus diam ornare mauris ac odio bibendum lectus blandit senectus odio nisl.“Vitae purus ante enim, nec iaculis proin erat in nullam ipsum ut in vitae nec aliquam at mattis fermentum sagittis.”</p>
                <a className='text-gray-800 hover:text-gray-900 mb-8 font-medium inline-flex items-center gap-1 px-4' href="">Read More  →</a>
              </div>
          </div>
        </div>
         <div className=' relative rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.25)] hover:shadow-[0_0_40px_rgba(0,0,0,0.55)] active:shadow-[0_0_60px_rgba(0,0,0,0.65)]  w-full md:w-[320px] mb-28'>
          <div className=' md:h-[320px] h-[350px] w-full  md:w-[380px]  justify-center items-center  '>
              <img className='absolute left-1/2 -translate-x-1/2 -top-16 z-10  object-cover md:w-[150px] md:h-[150px] w-[150px] h-[150px] rounded-2xl' src={img9} alt="img9" />
              <div className=' pt-[110px] md:pt-[120px] w-full px-4 '>
                <p className='text-gray-700 text-[15px] md:text-[15px] mb-4 pr-14 px-4'>Molestie risus, tempor duis tempus diam ornare mauris ac odio bibendum lectus blandit senectus odio nisl.“Vitae purus ante enim, nec iaculis proin erat in nullam ipsum ut in vitae nec aliquam at mattis fermentum sagittis.”</p>
                <a className='text-gray-800 hover:text-gray-900 mb-8 font-medium inline-flex items-center gap-1 px-4' href="">Read More  →</a>
              </div>
          </div>
        </div>
        </div>
   </section>

  <section>
<div className="flex flex-col lg:flex-row gap-4 items-start mb-28 px-2">

  {/* Left */}
  <div className="w-full lg:w-[40%]">
    <div className="w-12 h-1 bg-lime-900 mb-6"></div>

    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
      Meet The Experts
    </h1>

    <p className="text-gray-600 text-[15px] pb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </p>
  </div>

  {/* Right */}
  <div className="w-full lg:w-[60%] flex flex-wrap justify-center gap-4 mb-12">

    <div className="w-full sm:w-[280px] h-auto text-center">
      <img
        src={img1}
        alt="Michael Rich"
        className="w-full h-[330px] object-cover rounded-3xl"
      />

      <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
      Alex
      </h3>

      <div className="flex justify-center gap-4 text-indigo-500 text-lg">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>

  </div>

  <div className="w-full lg:w-[60%] flex flex-wrap justify-center gap-4 mb-12">

    <div className="w-full sm:w-[280px] h-auto text-center">
      <img
        src={img3}
        alt="Alicia Michelle"
        className="w-full h-[320px] object-cover rounded-3xl"
      />

      <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        Michael Rich
      </h3>

      <div className="flex justify-center gap-4 text-indigo-500 text-lg">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>

  </div>
  <div className="w-full lg:w-[60%] flex flex-wrap justify-center gap-4">

    <div className="w-full sm:w-[280px] text-center">
      <img
        src={img10}
        alt="Michael Rich"
        className="w-full h-[320px] object-cover rounded-3xl"
      />

      <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
       Sarah B. Johnson
      </h3>

      <div className="flex justify-center gap-4 text-indigo-500 text-lg">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>

  </div>

</div>

  </section>

   <section>

    <div className='flex px-6 bg-white rounded-2xl w-full h-auto flex-col md:flex-row hover:shadow-gray-400 shadow-[0_0_30px_rgba(0,0,0,0.25)] mt-12 mb-20'>
    <div className=' md:w-[30%] w-full flex items-center justify-center px-6 md:justify-start py-4 md:py-0 '>
      <img src={img} alt="img"  className='shadow-[0_0_30px_rgba(0,0,0,0.25)]  mt-4 h-50 w-50 md:w-60 md:h-60 rounded-full object-cover '/>
    </div>
    <div className='md:w-[70%] w-full flex flex-col items-center '>
      <div className='justify-center items-center flex'>
      <div className='bg-gray-500 border-2 h-1 w-18 md:w-20 justify-center items-center mt-8 md:mt-12'></div>
      </div>
      <div className=' justify-center items-center flex mt-6 text-center'>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-600'>Subscribe to Our Newsletter</h1>
      </div>
       <div className=' justify-center items-center flex  md:mt-4'>
        <p className='text-[1px] md:text-[15px] text-center font-light text-gray-500  max-w-md  mt-4'>Aenean massa feugiat imperdiet a scelerisque et morbi tempus massa tincidunt vitae libero aenean tincidunt molestie.</p>
      </div>
      <div className='flex flex-col md:flex-row w-full justify-center items-center mt-4 gap-4 mb-10'>

     <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="rounded-xl bg-gray-300 py-4 px-6 outline-none text-[15px] w-full md:w-[480px]"
/>

     <button
  type="button"
  onClick={handleSubscribe}
  className="bg-lime-600 px-8 w-full md:w-auto py-4 rounded-xl text-white font-bold uppercase hover:bg-black"
>
  Subscribe
</button>


      </div>
    </div>
    </div>

    <a
  href="https://wa.me/8801747691248"
  target="_blank"
  rel="noreferrer"
  className="fixed right-0 top-1/2 -translate-y-1/2 z-50 md:w-14 md:h-14 w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 duration-300"
>
  <FaWhatsapp size={32} />
</a>
   </section>

   </>
  )
}

export default Hero