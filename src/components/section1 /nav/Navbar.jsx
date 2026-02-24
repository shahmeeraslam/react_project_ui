import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
   const  scroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior : "smooth"
    });
   };

  return (
    <nav className="w-full  text-white">
      <div className="flex items-center justify-between p-4 text-sm">
        <div className="font-bold tracking-wide">
          ALI & SONS
        </div>
        <ul className="hidden md:flex gap-10">
          <li className="cursor-pointer hover:text-yellow-200">Home</li>
          <li onClick={()=> scroll("About")} className="cursor-pointer hover:text-yellow-200">About</li>
          <li onClick={()=> scroll("section3")} className="cursor-pointer hover:text-yellow-200">Quality</li>
          <li onClick={()=> scroll("section4")} className="cursor-pointer hover:text-yellow-200">Products</li>
          <li onClick={()=> scroll("section5")} className="cursor-pointer hover:text-yellow-200">WhyUS ?</li>
          <li onClick={()=> scroll("section7")} className="cursor-pointer hover:text-yellow-200">Contacts</li>
        </ul>
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Items</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Contacts</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
