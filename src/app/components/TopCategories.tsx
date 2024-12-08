"use client";

import React, { useEffect, useState } from "react";

const categories = [
  {
    id: 1,
    title: "Wing Chair",
    products: "362 Products",
    image: "/Chair6.png",
  },
  {
    id: 2,
    title: "Wooden Chair",
    products: "157 Products",
    image: "/Chair7.png",
  },
  {
    id: 3,
    title: "Desk Chair",
    products: "154 Products",
    image: "/Chair9.png",
  },
];

export default function TopCategories() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <section className="bg-gray-50 px-4 md:px-16 py-16">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Top Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-auto object-cover"
              />

              {/* Bottom Bar on Hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm font-semibold">{category.title}</h3>
                <p className="text-xs">{category.products}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null;
}
