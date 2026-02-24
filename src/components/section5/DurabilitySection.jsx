const DurabilitySection = (props) => {

  return (

    <section id="section5" className="bg-[#2B1A12] py-20 px-6">

      <h2 className="text-center text-4xl font-bold text-[#F2C94C] mb-14">

        Why Choose Our Pallets

      </h2>


      <div className="grid md:grid-cols-3 grid-cols-2  gap-8 max-w-6xl mx-auto">


        {props.user5.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="bg-[#3B2A1F] md:p-8 md:h-full   p-3 md:hover:scale-105 transition duration-300"
            >

              <Icon size={40} className="text-[#F2C94C]" />


              <h3 className="text-white text-xs md:text-xl font-bold mt-4">

                {item.title}

              </h3>


              <p className="text-gray-300 mt-3 text-xs">

                {item.description}

              </p>

            </div>

          );

        })}


      </div>

    </section>

  );

};

export default DurabilitySection;