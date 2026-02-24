import React from "react";

const Aboutus = () => {

  const img_address =
    "https://imgs.search.brave.com/8FLefPh5JZeUqyMHODjPio44JGzgyKBDfuNeUQ13aac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/My8xNS8xNS8xOS93/b29kZW4tcGFsbGV0/cy0xMjU4NDg2XzY0/MC5qcGc";

  return (

    <section className="w-full relative text-xs flex-col justify-center min-h-screen  text-white px-10 py-10">

      {/* Heading */}

      <div className="text-center mb-12">

        <h1 className="md:text-2xl font-bold text-[#FFD9A0] mb-4">
          About Us
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Trusted Wooden Pallet Manufacturer for Industrial and Export Solutions
        </p>

      </div>


      {/* Content */}

      <div className="flex flex-col md:flex-row items-center gap-12">


        {/* Left Side Text */}

        <div className="flex-1 space-y-6">

          <h2 className="md:text-2xl font-semibold text-[#FFD9A0]">

            Who We Are

          </h2>


          <p className="text-gray-300 leading-relaxed">

            We are a reliable and experienced wooden pallet manufacturing company,
            providing strong, durable, and high-quality pallets for warehouses,
            logistics companies, factories, and exporters. Our pallets are designed
            to ensure maximum safety, durability, and efficiency in material handling.

          </p>


          <h3 className="md:text-xl font-semibold text-[#FFD9A0]">

            Our Products

          </h3>


          <ul className="space-y-2 text-gray-300 list-disc pl-5">

            <li>Standard Wooden Pallets</li>

            <li>Heavy-Duty Industrial Pallets</li>

            <li>Custom Size Pallets</li>

            <li>Export Quality Pallets</li>

            <li>Recycled & Eco-Friendly Pallets</li>

          </ul>


          <h3 className="md:text-xl font-semibold text-[#FFD9A0]">

            Why Choose Us

          </h3>


          <ul className="space-y-2 text-gray-300 list-disc pl-5">

            <li>Premium Quality Wood</li>

            <li>Strong and Durable Design</li>

            <li>Affordable Pricing</li>

            <li>Fast Delivery</li>

            <li>Professional Customer Support</li>

          </ul>


        </div>



        {/* Right Side Image */}

        <div className="flex-1">

          <img
            src={img_address}
            alt="Wooden Pallets"
            className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-500"
          />

        </div>


      </div>


    </section>

  );

};

export default Aboutus;
