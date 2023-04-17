import React from 'react'
import Img from "../img/img1.svg"
import clsx from "clsx";

const style = {
  ug: "font-Poppins font-medium md:text-[15px] sm:text-[14px] text-[16px]",
};


export const CompanyCard = () => {
  return (
    <div>
        <div className="shadow-md w-[20vw] h-[43vh] rounded-[10px] ml-[5vw] sm:w-[20vw] sm:shadow-2xl md:w-[48vw] lg:w-[25vw]">
        <img className="sm:h-[28vh] sm:w-[20vw] h-[23vh] w-[20vw] bg-current rounded-t-lg bg-repeat md:w-[48vw]" src={Img} alt="img" />
        <p className="sm:text-[25px] md:text-[13px] md:mt-[-3vh] sm:w-[15vw] text-[25px] font-Poppins ml-[3vw] capitalize text-Black font-semibold sm:mx-[3vw] mx-[6vw] mt-[2vh] lg:ml-[4vw] lg:mt-[4vw]">The Golden Sands of Florida and clifornia{" "}</p>
        <p className="sm:text-[20px] md:text-[10px] sm:w-[16vw] w-[15vw] text-[16px] ml-[3vw] font-Poppins  text-GrayText sm:mx-[3vw] mx-[6vw] my-[2vh] lg:w-[20vw] lg:ml-[4vw]">
          Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec
          purus viverra. Sit justo velit, eu sed
        </p>
        <div className="w-[370px] flex flex-wrap w-[20vw] sm:mx-[3vw] ml-[3vw] mx-[6vw] lg:ml-[4vw]">
          <p className={clsx(style.ug , "text-GreenText  border-b-2 border-GreenText")}>Solo Travel</p>
          <p className={clsx(style.ug , "text-MediumGrayText mx-[5px]")}>By</p>
          <p className={clsx(style.ug , "text-Black")}>Adam Smith</p>
        </div>
      </div>
    </div>
  )
}
export default CompanyCard;
