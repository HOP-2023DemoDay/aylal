import React from 'react'
import Img from "../img/img1.svg"

export const CompanyCard = () => {
  return (
    <div>
        <div className="shadow-2xl w-[40vw] h-[51vh] rounded-[10px] ml-[5vw] sm:w-[20vw]">
        <img className="h-[28vh] w-[20vw] bg-current rounded-t-lg bg-repeat" src={Img} alt="img" />
        <p className="font-Poppins text-[18px] capitalize text-Black font-semibold mx-[3vw] mt-[3vh]">The Golden Sands of Florida and clifornia{" "}</p>
        <p className="font-Poppins text-[15px] text-GrayText w-[16vw] mx-[3vw] my-[1vh] max-w-md ...">
          Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec
          purus viverra. Sit justo velit, eu sed
        </p>
        <div className="w-[370px] flex flex-wrap w-[20vw] mx-[3vw]">
          <p className="font-Poppins font-medium text-GreenText  border-b-2 border-GreenText">Solo Travel</p>
          <p className="font-Poppins font-medium text-MediumGrayText mx-[5px]">By</p>
          <p className="font-Poppins font-medium text-Black ">Adam Smith</p>
        </div>
      </div>
    </div>
  )
}
export default CompanyCard;
