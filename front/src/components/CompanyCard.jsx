import React from 'react'
import Img from "../img/img1.svg"

export const CompanyCard = () => {
  return (
    <div>
        <div className="shadow-md w-[55vw] h-[51vh] rounded-[10px] ml-[5vw] sm:w-[20vw] sm:shadow-2xl">
        <img className="sm:h-[28vh] sm:w-[20vw] h-[23vh] w-[55vw] bg-current rounded-t-lg bg-repeat" src={Img} alt="img" />
        <p className="sm:text-[25px] sm:w-[15vw] text-[15px] font-Poppins capitalize text-Black font-semibold sm:mx-[3vw] mx-[6vw] mt-[2vh]">The Golden Sands of Florida and clifornia{" "}</p>
        <p className="sm:text-[20px] sm:w-[16vw] w-[40vw] text-[10px] font-Poppins  text-GrayText  sm:mx-[3vw] mx-[6vw] my-[2vh] max-w-md ...">
          Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec
          purus viverra. Sit justo velit, eu sed
        </p>
        <div className="w-[370px] flex flex-wrap w-[20vw] sm:mx-[3vw] mx-[6vw]">
          <p className="font-Poppins font-medium sm:text-[14px] text-[10px] text-GreenText  border-b-2 border-GreenText">Solo Travel</p>
          <p className="font-Poppins font-medium sm:text-[14px] text-[10px] text-MediumGrayText mx-[5px]">By</p>
          <p className="font-Poppins font-medium sm:text-[14px] text-[10px] text-Black ">Adam Smith</p>
        </div>
      </div>
    </div>
  )
}
export default CompanyCard;
