import {
  RiFacebookFill,
  RiInstagramLine,
  RiWhatsappFill,
  RiMailFill,
  RiMapPinFill,
} from "@remixicon/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_fjpbhrt",
      "template_tmog1ot",
      form.current,
      "1ct0-NJRob_z-TrRp"
    )

    .then(() => {

      alert("Subscribed Successfully ✅");

      form.current.reset();

    })

    .catch(() => {

      alert("Failed ❌");

    });

  };
  const scrollView = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-[#2B1A12] text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Company Info */}

        <div>
          <h2 className="text-[#F2C94C] text-2xl font-bold mb-4">
            Wood Pallets
          </h2>

          <p className="text-sm leading-relaxed">
            We manufacture premium quality wooden pallets designed for
            industrial, warehouse, and export use.
          </p>

          <div className="flex gap-4 mt-6">
            <RiFacebookFill
              className="hover:text-[#F2C94C] cursor-pointer"
              size={22}
            />

            <RiInstagramLine
              className="hover:text-[#F2C94C] cursor-pointer"
              size={22}
            />

            <RiWhatsappFill
              className="hover:text-[#F2C94C] cursor-pointer"
              size={22}
            />
          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2">
            <li
              onClick={() => scrollView("Home")}
              className="cursor-pointer hover:text-yellow-200"
            >
              Home
            </li>
            <li
              onClick={() => scrollView("About")}
              className="cursor-pointer hover:text-yellow-200"
            >
              About
            </li>
            <li
              onClick={() => scrollView("section3")}
              className="cursor-pointer hover:text-yellow-200"
            >
              Quality
            </li>
            <li
              onClick={() => scrollView("section4")}
              className="cursor-pointer hover:text-yellow-200"
            >
              Products
            </li>
            <li
              onClick={() => scrollView("section5")}
              className="cursor-pointer hover:text-yellow-200"
            >
              WhyUS ?
            </li>
            <li
              onClick={() => scrollView("section7")}
              className="cursor-pointer hover:text-yellow-200"
            >
              Contacts
            </li>
          </ul>
        </div>

        {/* Contact Info */}

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <RiMapPinFill className="text-[#F2C94C]" />
              Karachi, Pakistan
            </p>

            <p className="flex items-center gap-2">
              <RiWhatsappFill className="text-[#F2C94C]" />
              +92 318 2349545
            </p>

            <p className="flex items-center gap-2">
              <RiMailFill className="text-[#F2C94C]" />
              info@woodpallet.com
            </p>
          </div>
        </div>

        {/* Newsletter */}

        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>

          <p className="text-sm mb-4">Subscribe for updates and offers.</p>

          <form ref={form} onSubmit={sendEmail} className="flex">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full p-2 bg-[#3B2A1F] outline-none"
            />

            <button
              type="submit"
              className="bg-[#F2C94C] text-black px-4 font-semibold"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © 2026 Wood Pallets. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
