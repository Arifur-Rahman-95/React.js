import React, { useEffect, useState } from "react";

const Contact = () => {
  // Random Order Number (Example: ADR6H3)
  const generateOrderNumber = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";

    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return code;
  };

  // Form State
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    order_number: "",
    reason: "Pre-Purchase Question",
    message: "",
  });

  // Generate Order Number on Refresh
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      order_number: generateOrderNumber(),
    }));
  }, []);

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://laravel.arifurrahmanrasel.top/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        // Dashboard Auto Refresh Signal
        localStorage.setItem("contact_updated", Date.now().toString());

        alert("Message Sent Successfully");

        setFormData({
          full_name: "",
          email: "",
          phone: "",
          order_number: generateOrderNumber(),
          reason: "Pre-Purchase Question",
          message: "",
        });
      } else {
        alert("Failed to send");
      }
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  return (
    <>
      <section className="bg-white py-16 lg:py-24 mb-24 rounded-xl shadow-2xl shadow-[0_0_20px_rgba(209,213,219,0.8)] hover:shadow-[0_0_10px_rgba(0,0,0,0.5)]">
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[4px] text-sm text-gray-400 font-semibold">
              Customer Support
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
              Contact Us
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Need help with your order, shipping or returns? Send us a message
              and our support team will reply within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Arifur Rahman"
                  className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="arif@email.com"
                  className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1747691248"
                  className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Order Number
                </label>

                <input
                  type="text"
                  name="order_number"
                  value={formData.order_number}
                  readOnly
                  className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 font-semibold tracking-widest text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Contact Reason *
              </label>

              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
              >
                <option>Pre-Purchase Question</option>
                <option>Order Tracking</option>
                <option>Return / Exchange</option>
                <option>Shipping Issue</option>
                <option>Complaint</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Message *
              </label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your issue or question..."
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-black"
              />
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;