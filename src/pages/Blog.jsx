import { useEffect, useState } from "react";
import heroBg from "../assets/hero-bg.png";
import aboutImg from "../assets/about.jpeg";
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube, FaGooglePlusG, } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { FaLaptopCode, FaPalette, FaPenNib, FaSearch, FaBullhorn, FaChartLine,} from "react-icons/fa";


const Blog = () => {
  const titles = [" Web Developer", "Full Stack Developer", "Wordpress Developer" ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("https://laravel.arifurrahmanrasel.top/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (data.success) {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
};


  return (
    <>
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${heroBg})`,
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          {/* Auto Change Text */}
          <h1 className="text-white font-bold leading-none text-5xl sm:text-7xl md:text-8xl lg:text-[120px] transition-all duration-500">
            {titles[index]}
          </h1>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8 text-white text-xl">
            <FaFacebookF className="hover:text-cyan-400 cursor-pointer" />
            <FaGithub className="hover:text-cyan-400 cursor-pointer" />
            <FaTwitter className="hover:text-cyan-400 cursor-pointer" />
            <FaYoutube className="hover:text-cyan-400 cursor-pointer" />
            <FaGooglePlusG className="hover:text-cyan-400 cursor-pointer" />
          </div>

          {/* Scroll */}
          <div className="mt-16 flex justify-center">
            <FiChevronDown className="text-white text-4xl animate-bounce" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#F5F5F5] py-16 lg:py-24 ">
  <div className="w-[90%] max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Image */}
      <div className="flex justify-center lg:justify-start">
       <img src={aboutImg} alt="About" 
          className="w-full max-w-md h-auto object-cover shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="font-serif italic text-3xl md:text-5xl leading-tight text-[#1E293B]">
          I'm Arifur Rahman,
          <br />
          Web Designer & Web Developer
          <br />
          from Bangladesh, Dhaka.
        </h2>

        <p className="text-gray-600 leading-8 mt-8 text-base md:text-lg">
          I have rich experience in website design, WordPress development,
          React.js, Laravel and modern web applications. I also write blogs
          about Graphic Design, SEO and Digital Marketing to help freelancers
          and businesses grow online.
        </p>

        <button className="mt-8 uppercase tracking-[4px] text-sm font-semibold border-1 px-4 py-4 border-gray-600 rounded-xl bg-cyan-400 hover:bg-white active:bg-white duration-300">
          Download Resume
        </button>
      </div>

    </div>
  </div>
</section>


<section className="bg-[#F5F5F5] py-16 lg:py-24">
  <div className="w-[90%] max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-14">
      <h2 className="text-4xl md:text-5xl font-serif italic text-[#1E293B]">
        What I Do
      </h2>
    </div>

    {/* Services */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

      <div className="group bg-white border-1 border-gray-300 md:h-[300px] md:w-[350px] px-6 py-3 items-center justify-between rounded-2xl shadow-2xl shadow-gray-300 hover:bg-gray-200 pt-8">
        <FaLaptopCode className="md:text-5xl text-4xl text-cyan-400 mb-5 group-hover:scale-110 duration-300" />
        <h3 className="uppercase tracking-[2px] text-lg font-semibold text-[#111827] mb-3">
          Web Development
        </h3>
        <p className="text-gray-600 leading-8">
          Modern responsive websites using React.js, vue.js, PHP, Laravel, MySQL and WordPress.
        </p>
      </div>

      <div className="group bg-white border-1 border-gray-300 md:h-[300px] md:w-[350px] px-6 py-3 items-center justify-between rounded-2xl shadow-2xl shadow-gray-300 hover:bg-gray-200 pt-8">
        <FaPalette className="md:text-5xl text-4xl text-cyan-400 mb-5 group-hover:scale-110 duration-300" />
        <h3 className="uppercase tracking-[2px] text-lg font-semibold text-[#111827] mb-3">
          Graphic Design
        </h3>
        <p className="text-gray-600 leading-8">
          Creative branding, banners, social media posts and UI/UX design solutions.
        </p>
      </div>

      <div className="group bg-white border-1 border-gray-300 md:h-[300px] md:w-[350px] px-6 py-3 items-center justify-between rounded-2xl shadow-2xl shadow-gray-300 hover:bg-gray-200 pt-8">
        <FaPenNib className="md:text-5xl text-4xl text-cyan-400 mb-5 group-hover:scale-110 duration-300" />
        <h3 className="uppercase tracking-[2px] text-lg font-semibold text-[#111827] mb-3">
          Wordpress
        </h3>
        <p className="text-gray-600 leading-8">
          Clean, user-friendly interfaces focused on better user experience.
        </p>
      </div>

      <div className="group bg-white border-1 border-gray-300 md:h-[300px] md:w-[350px] px-6 py-3 items-center justify-between rounded-2xl shadow-2xl shadow-gray-300 hover:bg-gray-200 pt-8">
        <FaSearch className="md:text-5xl text-4xl text-cyan-400 mb-5 group-hover:scale-110 duration-300" />
        <h3 className="uppercase tracking-[2px] text-lg font-semibold text-[#111827] mb-3">
          SEO Optimization
        </h3>
        <p className="text-gray-600 leading-8">
          Technical SEO, On-page SEO and website performance optimization.
        </p>
      </div>

      <div className="group bg-white border-1 border-gray-300 md:h-[300px] md:w-[350px] px-6 py-3 items-center justify-between rounded-2xl shadow-2xl shadow-gray-300 hover:bg-gray-200 pt-8">
        <FaBullhorn className="md:text-5xl text-4xl text-cyan-400 mb-5 group-hover:scale-110 duration-300" />
        <h3 className="uppercase tracking-[2px] text-lg font-semibold text-[#111827] mb-3">
          Digital Marketing
        </h3>
        <p className="text-gray-600 leading-8">
          Social media marketing, content strategy and business growth campaigns.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#F5F5F5] md:py-20 mb-21 rounded-b-3xl pb-12 pt-12">
  <div className="w-[90%] max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-serif italic text-black mb-12">
      Contact Me
    </h2>

    <form className="space-y-10" onSubmit={handleSubmit}>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <input
             type="text"
            placeholder="Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-800 pb-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-black"
          />
        </div>

        <div>
          <input
             type="email"
            name="email"
            placeholder="Email *"
              value={formData.email}
                onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-800 pb-3 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-black"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <input
             type="text"
            name="subject"
            placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-800 pb-3 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-black"
          />
        </div>

        
      </div>

      {/* Message */}
      <div>
        <textarea
         rows="5"
          placeholder="Message"
          name="message"
            value={formData.message}
             onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-800 py-3 text-gray-800 placeholder:text-gray-500 resize-none focus:outline-none focus:border-black"
        ></textarea>
      </div>

      {/* Button */}
      <button
        type="submit"
         onClick={handleSubmit}
        className="uppercase  text-sm font-semibold text-black border-1 px-4 py-3 border-gray-600 rounded-xl bg-cyan-400 hover:bg-white active:bg-white duration-300 "
      >
        Send Message
      </button>

    </form>
  </div>
</section>
</>
  );
};

export default Blog;