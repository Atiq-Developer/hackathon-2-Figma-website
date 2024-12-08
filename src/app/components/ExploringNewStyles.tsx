import Image from "next/image";
import React from "react";

export default function TopCategories() {
  return (
    <div className="flex flex-wrap px-4 sm:px-8 md:px-44  mt-12">
      {/* First Div with Main Image */}
      <div className="w-full md:w-1/2 p-2 flex flex-row justify-center items-center">
        <div className="w-full h-full relative">
          <Image
            src="/Chair3.png"
            alt="Main Image"
            layout="responsive"
            width={400}
            height={560}
            className="object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Second Div with Grid of Images */}
      <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-2">
        {/* 4 Images */}
        <div className="relative">
          <Image
            src="/Chair2.png"
            alt="Image 1"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/Chair1.png"
            alt="Image 3"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/Chair4.png"
            alt="Image 3"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/Chair5.png"
            alt="Image 4"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
