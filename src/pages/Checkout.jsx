import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state;

  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    address: "",
    payment_method: "Cash on Delivery",
    bkash_number: "",
  });

  const [ordered, setOrdered] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">No Product Selected</h2>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://laravel.arifurrahmanrasel.top/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          product_name: product.name,
          product_image: `${window.location.origin}/images/${product.image}`,
          price: product.price,
          customer_name: form.customer_name,
          phone: form.phone,
          address: form.address,
          payment_method: form.payment_method,
          bkash_number: form.bkash_number,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setOrdered(true);
      } else {
        alert("Order Failed");
      }
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  if (ordered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center text-4xl">
            ✅
          </div>

          <h2 className="text-3xl font-bold mt-5 text-green-600">
            Order Successful
          </h2>

          <p className="text-gray-600 mt-3">
            Thank you <b>{form.customer_name}</b>
          </p>

          <p className="text-gray-500 text-sm mt-1">
            Your order has been placed successfully.
          </p>

          <button
            onClick={() => navigate("/product")}
            className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl  mx-auto px-4 grid lg:grid-cols-2 gap-8">

        {/* Product Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">


          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="w-full  object-cover rounded-2xl"
          />


          <h2 className="text-2xl md:ml-22 font-bold mt-5">{product.name}</h2>

          <p className="text-gray-500 md:ml-40 mt-1">{product.category}</p>

          <div className="flex items-center md:ml-8 gap-3 mt-4">
            <span className="text-3xl font-bold">${product.price}</span>
            <span className="text-gray-400  line-through">
              ${product.oldPrice}
            </span>
          </div>

          <div className="mt-4 md:ml-8 flex justify-between text-sm text-gray-600">
            <span>⭐ {product.rating} Rating</span>
            <span className="md:mr-22">{product.badge}</span>
          </div>
        </div>

        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-6 shadow-lg space-y-5"
        >
          <h2 className="text-2xl font-bold">Checkout</h2>

          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="customer_name"
              value={form.customer_name}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter Your Phonr Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Delivery Address</label>
            <textarea
              rows="4"
              name="address"
              placeholder="Enter Your Address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl px-4 py-3 resize-none outline-none focus:border-black"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-3">Payment Method</h3>

            <label className="flex items-center gap-2 border rounded-xl p-3 cursor-pointer mb-3">
              <input
                type="radio"
                name="payment_method"
                value="Cash on Delivery"
                checked={form.payment_method === "Cash on Delivery"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-2 border rounded-xl p-3 cursor-pointer">
              <input
                type="radio"
                name="payment_method"
                value="bKash"
                checked={form.payment_method === "bKash"}
                onChange={handleChange}
              />
              bKash
            </label>
          </div>

          {form.payment_method === "bKash" && (
            <div>
              <label className="text-sm font-medium">
                Sender bKash Number
              </label>
              <input
                type="text"
                name="bkash_number"
                value={form.bkash_number}
                onChange={handleChange}
                required
                className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 duration-300"
          >
            Confirm Order — ${product.price}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;