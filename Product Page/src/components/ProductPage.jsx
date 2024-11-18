import React, { useState } from "react";
import shoes01 from "../assets/shoes01.jpg";
import shoes02 from "../assets/shoes02.jpg";
import shoes03 from "../assets/shoes03.jpg";
import shoes04 from "../assets/shoes04.jpg";
import shoes05 from "../assets/shoes05.jpg";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: shoes01,
    img2: shoes02,
    img3: shoes03,
    img4: shoes04,
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center bg-gray-900 text-white p-8 rounded-lg">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl transition-transform duration-100 hover:scale-110"
        />

        <div className="flex flex-row justify-between h-24">
          {Object.values(images).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={index + 1}
              className={`w-24 h-24 rounded-md cursor-pointer transition-transform duration-300 hover:scale-110 ${
                activeImg === img ? "border-4 border-violet-500" : ""
              }`}
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="text-violet-400 font-semibold mb-2">
            Special Sneaker
          </span>
          <h1 className="text-3xl font-bold">
            Pure Platinum and Metallic Silver
          </h1>
        </div>
        <p className="text-gray-300">
          Shine like a star in this early-noughties icon. Made famous by its
          mechanical cushioning, the Shox TL comes cloaked in Pure Platinum and
          Metallic Silver for a flashy take on the futuristic design. Glossy
          details, textured mesh underlays and a reflective design finish
          highlight every step, while Chrome accents add a sleek boost of
          energy.
        </p>
        <h6 className="text-2xl font-semibold">$199.00</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-700 py-2 px-5 rounded-lg text-violet-400 text-3xl transition-all duration-300 hover:bg-violet-500 hover:text-white"
              onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button className="bg-gray-700 py-2 px-5 rounded-lg text-violet-400 text-3xl transition-all duration-300 hover:bg-violet-500 hover:text-white" onClick={() => setAmount((prev) => prev+1)}>
              +
            </button>
          </div>
          <button className="bg-violet-500 text-white font-semibold py-3 px-16 rounded-xl h-full transition-all duration-300 hover:bg-violet-600 hover:shadow-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
