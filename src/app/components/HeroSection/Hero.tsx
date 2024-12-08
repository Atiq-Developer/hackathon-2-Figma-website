import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 px-4 md:px-16 py-16">
      <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-8">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-teal-500 text-[14px] uppercase tracking-widest">
            WELCOME TO CHARITY
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug space-y-2">
            <span className="block">Best Furniture</span>
            <span className="block">Collection For Your</span>
            <span className="block">Interior.</span>
          </h1>
          <Link
            href="/Card"
            className="inline-block px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition duration-300"
          >
            Shop Now →
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-start md:ml-8">
          <img
            src="/chair.png" // Add your chair image in the public folder
            alt="Chair"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
