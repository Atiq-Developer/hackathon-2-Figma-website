"use client";

import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function AllProducts() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const products = [
    {
      id: 1,
      label: "New",
      title: "Library Stool Chair",
      price: "$20",
      image: "/Chair1.png",
    },
    {
      id: 2,
      label: "Sales",
      title: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      image: "/Chair2.png",
    },
    { id: 3, title: "Library Stool Chair", price: "$20", image: "/Chair3.png" },
    { id: 4, title: "Library Stool Chair", price: "$20", image: "/Chair4.png" },
    {
      id: 5,
      label: "New",
      title: "Library Stool Chair",
      price: "$20",
      image: "/Chair5.png",
    },
    {
      id: 6,
      label: "Sales",
      title: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      image: "/Chair6.png",
    },
    { id: 7, title: "Library Stool Chair", price: "$20", image: "/Chair7.png" },
    { id: 8, title: "Library Stool Chair", price: "$20", image: "/Chair8.png" },
    {
      id: 9,
      label: "New",
      title: "Library Stool Chair",
      price: "$20",
      image: "/Main1.png",
    },
    {
      id: 10,
      label: "Sales",
      title: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      image: "/Chair9.png",
    },
    {
      id: 11,
      title: "Library Stool Chair",
      price: "$20",
      image: "/Chair3.png",
    },
    {
      id: 12,
      title: "Library Stool Chair",
      price: "$20",
      image: "/Chair8.png",
    },
  ];

  return isClient ? (
    <section className="bg-gray-50 px-4 md:px-16 py-16">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id} // Ensures unique keys
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                />
                {product.label && (
                  <span
                    className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded ${
                      product.label === "New"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {product.label}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-gray-800">
                      {product.price}
                    </p>
                    {product.oldPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        {product.oldPrice}
                      </p>
                    )}
                  </div>
                </div>
                {/* Cart Icon */}
                <button
                  className="p-2 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white transition-colors"
                  onClick={() => alert(`Added ${product.title} to cart!`)}
                >
                  <FiShoppingCart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null;
}
