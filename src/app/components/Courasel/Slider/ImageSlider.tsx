"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slider/ImageSlider.css";
export default function ImageSlider() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const imageData = [
    { src: "/Image1.png", alt: "Zapier Logo" },
    { src: "/Image2.png", alt: "Pipedrive Logo" },
    { src: "/Image3.png", alt: "CIB Bank Logo" },
    { src: "/Image4.png", alt: "Z Logo" },
    { src: "/Image5.png", alt: "Burnt Toast Logo" },
    { src: "/Image6.png", alt: "PandaDoc Logo" },
    { src: "/Image7.png", alt: "Moz Logo" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return isClient ? (
    <section className="bg-gray-50 px-4 md:px-16 py-16">
      <div className="max-w-screen-lg mx-auto">
        <Slider {...settings}>
          {imageData.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-40 bg-white p-4 rounded-md shadow-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-24 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  ) : null;
}
