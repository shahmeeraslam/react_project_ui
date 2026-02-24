import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(

      "service_fjpbhrt",
      "template_jso3aqw",
      form.current,
      "1ct0-NJRob_z-TrRp"

    )

    .then(() => {

      alert("Message Sent Successfully ✅");

      form.current.reset();

    })

    .catch(() => {

      alert("Failed ❌");

    });

  };
  return (

    <section id="section7" className="bg-[#2B1A12] py-20 px-6">

      {/* Heading */}

      <h2 className="text-4xl font-bold text-center text-[#F2C94C] mb-12">
        Contact Us
      </h2>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">


        {/* LEFT SIDE – Contact Info */}

        <div className="bg-[#3B2A1F] p-8">

          <h3 className="text-white md:text-2xl  font-bold mb-6">
            Our Factory
          </h3>


          <p className="text-gray-300 text-sm mb-4">

            <span className="text-[#F2C94C] font-semibold">
              Address:
            </span>

            <br />

            Site Area, Karachi, Sindh, Pakistan

          </p>


          <p className="text-gray-300 text-sm mb-4">

            <span className="text-[#F2C94C] font-semibold">
              Phone:
            </span>

            <br />

            0318-2349545

          </p>


          <p className="text-gray-300 text-sm mb-8">

            <span className="text-[#F2C94C] font-semibold">
              Email:
            </span>

            <br />

            info@woodpallets.com

          </p>


          {/* WhatsApp Button */}

          <a
            href="https://wa.me/923182349545"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F2C94C] text-black  text-sm p-2.5 rounded-tl-4xl rounded-br-4xl  font-bold md:px-6  md:py-3 inline-block hover:bg-yellow-500 transition"
          >

            Chat on WhatsApp

          </a>


        </div>



        {/* RIGHT SIDE – Inquiry Form */}

        <div className="bg-[#3B2A1F] p-8">


          <h3 className="text-white text-2xl font-bold mb-6">
            Quick Inquiry
          </h3>

<form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-[#3B2A1F] p-8 space-y-4"
      >

        <h2 className="text-[#F2C94C] text-3xl font-bold">
          Contact Us
        </h2>


        <input
          name="name"
          placeholder="Name"
          required
          className="w-full p-3 bg-[#2B1A12] text-white"
        />


        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 bg-[#2B1A12] text-white"
        />


        <input
          name="phone"
          placeholder="Phone"
          required
          className="w-full p-3 bg-[#2B1A12] text-white"
        />


        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full p-3 bg-[#2B1A12] text-white"
        ></textarea>


        <button
          type="submit"
          className="bg-[#F2C94C] text-black px-6 py-3 font-bold"
        >

          Send Message

        </button>

      </form>



        </div>


      </div>


    </section>

  );
};

export default Contact;