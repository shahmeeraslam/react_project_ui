import React from "react";

const Whyus = () => {
  return (
    <div className="md:h-[50vh] h-full relative w-full overflow-hidden">
      <div className="h-full w-full">
        <img
          className="absolute inset-0 w-full "
          src="https://media.istockphoto.com/id/1138429558/cs/fotografie/%C5%99ady-polic.webp?b=1&s=612x612&w=0&k=20&c=yXXCW1v2dR7XkKobwMnkI9Ntcl80tJYglPQzqfFE_8M="
          alt=""
        />
        <div className="absolute h-full w-full  bg-black/50"></div>
        <div className="relative flex flex-col gap-2  text-center justify-center md:p-5 p-4  h-full w-full items-center">
          <h1 className="md:text-4xl text-xs font-black">Looking for High-Quality Pallets for Your Business?</h1>
          <p className="md:text-sm text-xs">We provide strong, heat-treated, and export-ready wooden pallets at competitive prices.</p>
          <button className="md:text-sm text-xs bg-amber-400 rounded-br-3xl rounded-tl-4xl font-bold  text-black p-2.5">Contact Us Today</button>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
