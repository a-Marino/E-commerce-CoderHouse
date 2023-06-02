import { useState } from "react";
import "./ProductDetails.css";

export const ProductDetails = ({ product, stock }) => {
  const [price, setPrice] = useState(product.spec[0].price);

  const onSpecChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="min-h-full min-w-screen mt-32 mb-20 p-10 flex md:flex-row md:justify-around md:space-y-0 space-y-10 flex-col">
      {/* LEFT */}
      <div>
        <img src={product.img} alt={product.model} className="w-72" />
      </div>
      {/* RIGHT */}
      <div className="flex flex-col md:w-96">
        {/* model & price */}
        <div className="border-b border-black pb-3">
          <h1 className="text-4xl font-extrabold mb-1">{product.model}</h1>
          <div className="flex flex-row">
            <span className="text-2xl font-semibold">{price} USD</span>
            <div className="flex self-end items-center space-x-2 ml-auto pr-3">
              {product.colorCode != undefined && (
                <div
                  className="w-5 h-5 border border-black rounded-full"
                  style={{ backgroundColor: product.colorCode }}
                ></div>
              )}
              <span className=" text-lg">{product.color}</span>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="mt-5 pr-10 border-b border-black pb-5">
          <p>{product.description}</p>
        </div>
        {/* memory */}
        <div className="mt-5 pb-2 border-b border-black px-5 flex items-center justify-center space-x-4">
          {product.spec.map((spec) => {
            return (
              <div className="button" key={spec.id}>
                <input
                  type="radio"
                  id={spec.id}
                  value={spec.price}
                  name="productMemory"
                  disabled={!spec.stock}
                  onChange={onSpecChange}
                  required
                  aria-selected="false"
                />
                <label className="btn btn-default" htmlFor={spec.size}>
                  {spec.size}
                </label>
              </div>
            );
          })}
        </div>
        {/* Buy button */}
        <button
          className="mt-5 w-full h-10 bg-blue-600 rounded-full text-white enabled:hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={!stock}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};