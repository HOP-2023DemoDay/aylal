import React from "react";
import img from "../img/img3.png";

export const news = () => {
  return (
    <div className="mt-[6vh]">
      <img src={img} alt="" className="md:h-[210px] md:w-[300px]" />
      <div className="mt-[-20vh] ml-[15px]">
        <div className="font-bold text-[19.2px]  text-white w-[320px] md:text-[17px] md:w-[250px]">
          Wakatobi beach is a paradise for coral reets in indonesia
        </div>
        <div className="text-[12px] font-bold  text-white ">
          Yogyakarta, Indonesia
        </div>
        <button className="rounded-[8px] w-[120px] h-[40px] text-white text-[16px] font-bold bg-Button mt-[4vh] ">
          View More
        </button>
      </div>
    </div>
  );
};
export default news;
