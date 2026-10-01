import { FaStar } from "react-icons/fa";
import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaVuejs,
  FaPhp,
  FaLaravel,
  FaWordpress,
} from "react-icons/fa";

import { SiTailwindcss, SiMysql } from "react-icons/si";

const About = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-500" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-400" },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <FaReact />, name: "React.js", color: "text-cyan-300" },
    { icon: <FaVuejs />, name: "Vue.js", color: "text-green-500" },
    { icon: <FaPhp />, name: "PHP", color: "text-indigo-400" },
    { icon: <FaLaravel />, name: "Laravel", color: "text-red-500" },
    { icon: <SiMysql />, name: "MySQL", color: "text-sky-500" },
    { icon: <FaWordpress />, name: "WordPress", color: "text-blue-400" },
  ];

const [formData, setFormData] = useState({
  name: "",
  phone: "",
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

  const res = await fetch("https://laravel.arifurrahmanrasel.top/api/about", {
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
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  }
};

  return (
    <>
    <section className="bg-gray-900 text-white py-20 min-h-screen rounded-t-3xl">
      <div className="w-[90%] max-w-7xl mx-auto">

        {/* Title */}
        <div className="mb-14">
          <h1 className="text-5xl md:text-6xl font-bold">
            Full Stack <span className="text-cyan-400">Developer</span> 
          </h1>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Hi, <br /> I'm Arifur Rahman Rasel
            </h2>

            <p className="text-gray-300 leading-8 mb-5">
              I specialize in building modern, responsive and high-performance
              websites using React.js, Vue.js, PHP, Laravel, MySQL and
              WordPress.
            </p>

            <p className="text-gray-300 leading-8 mb-8">
              My focus is creating clean UI, scalable backend systems and SEO
              friendly web solutions for businesses and personal brands.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-14 h-14 rounded-xl border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-xl border border-gray-700 flex items-center justify-center hover:bg-[#0A66C2] duration-300"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-xl border border-gray-700 flex items-center justify-center hover:bg-green-500 duration-300"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-orange-500/10 flex items-center justify-center">
              <FaReact
                size={90}
                className="text-cyan-400 animate-spin"
                style={{ animationDuration: "8s" }}
              />
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">My Tech Stack</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-cyan-400 hover:-translate-y-1 duration-300"
              >
                <div className={`text-4xl ${skill.color}`}>
                  {skill.icon}
                </div>

                <p className="text-sm text-center text-gray-200">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

<section className="bg-[#031522] py-20">
  <div className="w-[90%] max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <p className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
        Clients Feedback
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
        Awesome Clients
      </h2>
      <p className="text-[15px] text-white mt-3 text-center md:px-50">With a strong foundation in frontend development and a keen eye for design, I specialize in creating interactive and responsive web.</p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-[#082032] border border-[#12354A] rounded-xl p-8 hover:border-cyan-400 duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-lime-600 flex items-center justify-center text-white text-xl font-bold">
            H
          </div>

          <div>
            <h3 className="text-white font-bold text-lg">Harry Wilson</h3>
            <p className="text-gray-400 text-sm">Tech Lead @ Officer</p>
          </div>
        </div>

        <p className="text-gray-300 leading-8 mb-8">
          I hope this message finds you well. I wanted to take a moment to
          provide some feedback on the recent project we collaborated on.
        </p>

        <div className="flex items-center gap-3 ">
          <span className="text-white text-3xl font-bold">5.0</span>
          <div className="flex gap-1 text-orange-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#082032] border border-[#12354A] rounded-xl p-8 hover:border-cyan-400 duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-lime-600 flex items-center justify-center text-white text-xl font-bold">
            H
          </div>

          <div>
            <h3 className="text-white font-bold text-lg">Harry Wilson</h3>
            <p className="text-gray-400 text-sm">Tech Lead @ Officer</p>
          </div>
        </div>

        <p className="text-gray-300 leading-8 mb-8">
          This template exceeded all my expectations. The design is sleek,
          modern, and incredibly well-structured exactly what I needed.
        </p>

        <div className="flex items-center gap-3">
          <span className="text-white text-3xl font-bold">5.0</span>
          <div className="flex gap-1 text-orange-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#082032] border border-[#12354A] rounded-xl p-8 hover:border-cyan-400 duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-lime-600 flex items-center justify-center text-white text-xl font-bold">
            W
          </div>

          <div>
            <h3 className="text-white font-bold text-lg">Wilson Kink</h3>
            <p className="text-gray-400 text-sm">Tech Officer</p>
          </div>
        </div>

        <p className="text-gray-300 leading-8 mb-8">
          The template has a great overall design, but it would be even better
          with more documentation on customization and flexibility.
        </p>

        <div className="flex items-center gap-3 mt-auto">
          <span className="text-white text-3xl font-bold">5.0</span>
          <div className="flex gap-1 text-orange-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="bg-[#031522] pb-20  ">
  <div className="w-[90%] max-w-7xl mx-auto">

    {/* Heading */}
   

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-[#082032] border border-[#12354A] rounded-xl p-8 hover:border-cyan-400 duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-lime-600 flex items-center justify-center text-white text-xl font-bold">
            H
          </div>

          <div>
            <h3 className="text-white font-bold text-lg">Harry Wilson</h3>
            <p className="text-gray-400 text-sm">Tech Lead @ Officer</p>
          </div>
        </div>

        <p className="text-gray-300 leading-8 mb-8">
          I hope this message finds you well. I wanted to take a moment to
          provide some feedback on the recent project we collaborated on.
        </p>

        <div className="flex items-center gap-3">
          <span className="text-white text-3xl font-bold">5.0</span>
          <div className="flex gap-1 text-orange-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#082032] border border-[#12354A] rounded-xl p-8 hover:border-cyan-400 duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-lime-600 flex items-center justify-center text-white text-xl font-bold">
            H
          </div>

          <div>
            <h3 className="text-white font-bold text-lg">Harry Wilson</h3>
            <p className="text-gray-400 text-sm">Tech Lead @ Officer</p>
          </div>
        </div>

        <p className="text-gray-300 leading-8 mb-8">
          This template exceeded all my expectations. The design is sleek,
          modern, and incredibly well-structured exactly what I needed.
        </p>

        <div className="flex items-center gap-3">
          <span className="text-white text-3xl font-bold">5.0</span>
          <div className="flex gap-1 text-orange-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#082032] border border-[#12354A] rounded-xl p-8 hover:border-cyan-400 duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-lime-600 flex items-center justify-center text-white text-xl font-bold">
            W
          </div>

          <div>
            <h3 className="text-white font-bold text-lg">Wilson Kink</h3>
            <p className="text-gray-400 text-sm">Tech Officer</p>
          </div>
        </div>

        <p className="text-gray-300 leading-8 mb-8">
          The template has a great overall design, but it would be even better
          with more documentation on customization and flexibility.
        </p>

        <div className="flex items-center gap-3">
          <span className="text-white text-3xl font-bold">5.0</span>
          <div className="flex gap-1 text-orange-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="bg-lime-200  md:py-20 mb-21 rounded-b-3xl pb-12 pt-12">
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
            type="tel"
             name="phone"
            placeholder="Phone *"
              value={formData.phone}
             onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-800 pb-3 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-black"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
      <a
  href="#"
  onClick={handleSubmit}
  className="mt-10 inline-flex md:px-8 md:py-6 px-4 py-3 hover:bg-white items-center gap-2 bg-gray-100 md:rounded-2xl rounded-xl font-bold tracking-[4px] text-sm cursor-pointer"
>
  SEND MESSAGE
  <span>→</span>
</a>

    </form>
  </div>
</section>
</>
  );
};

export default About;