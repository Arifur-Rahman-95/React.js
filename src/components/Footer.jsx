import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const links = {
    "By Age": ["Babies", "Toddlers", "Preschools", "Foundation"],
    "Play": ["Sensory Play", "Dramatic Play", "Small World Play", "Play Spaces", "Fine Motor"],
    "Subject Areas": ["Literacy", "Numeracy", "Science", "Geography", "Health and Wellbeing"],
  };

  return (
    <footer className="w-full px-6 md:px-16 py-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo + description */}
        <div className="md:w-[25%]">
          <h2 className="text-3xl font-extrabold text-gray-800">Child Care</h2>
          <p className="text-xs tracking-widest text-gray-400 -mt-1">CHILD CARE EXPERT</p>
          <p className="text-sm text-gray-500 mt-4">
            Velit id auctor sed quam mattis elit faucibus imperdiet duis non ultrices nibh egestas in auctor.
          </p>
          <div className="flex gap-4 mt-4 text-indigo-500 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-indigo-700" />
            <FaTwitter className="cursor-pointer hover:text-indigo-700" />
            <FaInstagram className="cursor-pointer hover:text-indigo-700" />
            <FaYoutube className="cursor-pointer hover:text-indigo-700" />
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:w-[65%]">
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-bold text-gray-800 mb-3">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-sm text-gray-700 hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-2">
        <p>Copyright © 2026 Child Care website</p>
        <p>Powered by Child Care website</p>
      </div>
    </footer>
  );
}