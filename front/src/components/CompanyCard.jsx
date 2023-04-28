import React from "react";
import Img from "../img/img1.svg";
import clsx from "clsx";

const style = {
  ug: "font-Poppins font-medium 2xl:text-[14px] xl:text-[12px] text-[12px]",
};

export const CompanyCard = () => {
  return (
    <div>
      <div className="shadow-xl 2xl:h-[517px] xl:h-[300px] rounded-[10px] ml-[80px]">
        <img
          className="2xl:h-[288px] xl:h-[150px] 2xl:w-[380px] xl:w-[380px] w-[310px] bg-current rounded-t-lg object-cover"
          src={Img}
          alt="img"
        />
        <p className="2xl:text-[20px] xl:text-[16px] 2xl:w-[300px] mt-[8px] xl:w-[200px] w-[280px] font-Poppins capitalize text-Black font-semibold 2xl:mx-[40px] 2xl:mt-[20px] xl:mt-[5px] xl:mt-[20px] xl:ml-[40px] ml-[30px]">
          The Golden Sands of Florida and clifornia{" "}
        </p>
        <p className="2xl:w-[300px] xl:w-[200px] w-[260px] my-[8px] ml-[30px] 2xl:text-[15px] xl:text-[12px] xl:mx-[40px] font-Poppins text-[12px] 2xl:mx-[40px] text-GrayText 2xl:my-[20px] xl:my-[5px]">
          Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec
          purus viverra. Sit justo velit, eu sed
        </p>
        <div className="2xl:w-[300px] xl:w-[200px] w-[280px] ml-[30px] flex flex-wrap 2xl:mx-[40px] xl:ml-[40px]">
          <p className={clsx(style.ug,"text-GreenText  2xl:border-b-2 border-GreenText")}>Solo Travel</p>
          <p className={clsx(style.ug, "text-MediumGrayText mx-[5px]")}>By</p>
          <p className={clsx(style.ug, "text-Black")}>Adam Smith</p>
        </div>
      </div>
    </div>
  );
};
export default CompanyCard;
