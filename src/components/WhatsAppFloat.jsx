import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const openDashboard = () => {
    window.location.href = "https://laravel.arifurrahmanrasel.top/dashboard/contact";
  };

  return (
    <button
      onClick={openDashboard}
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 duration-300"
    >
      <FaWhatsapp size={30} />
    </button>
  );
};

export default WhatsAppFloat;