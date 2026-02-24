import React from 'react'

const Quality = (props) => {
  return (
      <div id='section3' className="bg-[#2B1A12] text-xs py-16 px-6">

      <h2 className="md:text-4xl font-bold text-center text-[#F2C94C] mb-10">
        Our Pallet Quality
      </h2>

      <div className="max-w-4xl mx-auto overflow-x-auto">

        <table className="w-full border border-[#F2C94C]">

          <thead>

            <tr className="bg-[#3B2A1F] text-[#F2C94C]">

              <th className="p-4 text-left border border-[#F2C94C]">
                Feature
              </th>

              <th className="p-4 text-left border border-[#F2C94C]">
                Specification
              </th>

            </tr>

          </thead>

          <tbody>

            {props.user3.map((item, index) => (
              <tr
                key={index}
                className="text-white hover:bg-[#3B2A1F] transition"
              >

                <td className="p-4 border border-[#F2C94C] font-semibold">
                  {item.feature}
                </td>

                <td className="p-4 border border-[#F2C94C]">
                  {item.value}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>

    
  )
}

export default Quality
