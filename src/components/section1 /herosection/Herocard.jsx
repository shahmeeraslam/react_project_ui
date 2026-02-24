import React from "react";
import { RiAwardFill } from "@remixicon/react";
const Herocard = (props) => {
  return (
    <div
      style={{ color: props.color, backgroundColor: props.bg }}
      className="  p-2 flex flex-col justify-between w-21 h-full  md:w-56 md:h-90"
    >
      <div className="flex flex-col justify-center gap-5">
      <div className="flex  ">{props.icon}</div>

      <div className="md:text-xl text-2xs text-white font-bold">{props.title}</div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="text-white md:text-sm  text-xs" >{props.description}</div>
        <div>
          <button className=" font-black font-serif md:text-xl text-xs shadow-2xl  shadow-amber-300">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herocard;
