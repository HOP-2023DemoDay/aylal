import React from 'react'
import Img from "../img/img1.svg"
import clsx from "clsx";

const style = {
  ug: "font-Poppins font-medium text-[14px]",
};


export const CompanyCard = () => {
  return (
    <div>
        <div className="shadow-md2 h-[517px] rounded-[10px] ml-[80px] smmsm:ml-[50px] smmsm:h-[410px]">
        <img className="h-[288px] w-[370px] bg-current rounded-t-lg bg-repead smmsm:h-[200px] smmsm:w-[300px]" src={Img} alt="img" />
        <p className="text-[18px] w-[310px] font-Poppins capitalize text-Black font-semibold mx-[40px] mt-[20px] smmsm:w-[250px] smmsm:text-[16px]  smmsm:mx-[30px]">The Golden Sands of Florida and clifornia{" "}</p>
        <p className="w-[320px] text-[15px] mx-[40px] font-Poppins  text-GrayText my-[20px] smmsm:w-[250px] smmsm:my-[5px] smmsm:text-[14px]  smmsm:mx-[30px]">
          Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec
          purus viverra. Sit justo velit, eu sed
        </p>
        <div className="w-[370px] flex flex-wrap mx-[40px] smmsm:w-[250px] smmsm:mx-[30px]">
          <p className={clsx(style.ug , "text-GreenText  border-b-2 border-GreenText")}>Solo Travel</p>
          <p className={clsx(style.ug , "text-MediumGrayText mx-[5px]")}>By</p>
          <p className={clsx(style.ug , "text-Black")}>Adam Smith</p>
        </div>
      </div>
    </div>
  )
}
export default CompanyCard;
