import React from "react";
import Tsarai from "../img/Tsarai.svg"
import Dots from "../img/Dots.svg"
import Phone from "../img/Phone.svg"
import Gmail from "../img/Gmail.svg"
import Hutulbur from "../components/Hutulbur";


const Profile = () => {
  return (
  <div>
    <div className="mt-[40vh] ml-[10vw] fixed w-[413px] z-[-10] h-[505px]" style={{ backgroundImage: `url(${Dots})`}}></div>
    <div className="w-screen flex justify-center">
      <div className='flex flex-col'>
        <div className="flex items-center space-x-5 mt-[10vh]">
          <img src={Tsarai} alt="" />
          <div className='h-10 text-2xl font-Poppins text-GrayText'>Ner</div>
        </div>
        <div className="flex items-center space-x-5">
          <img src={Phone} alt="" />
          <div className="h-6 font-inter font text-xl font-Poppins text-DarkText">+976 99116969</div>
        </div>
        <div className="flex items-center space-x-4 ml-[-2px] mt-[2vh]">
          <img src={Gmail} alt="" />
          <div className="h-6 font-inter font text-xl font-Poppins text-DarkText">example@gmail.com</div>
        </div>
      </div>
      </div>
    <div className="font-poppins text-DarkText ml-[5vw] mt-[7vh] text-xl">Favorites</div>
      <div className="w-screen overflow-x-scroll flex flex-nowrap mt-[5vh]">
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      </div>
      <div className="w-screen overflow-x-scroll flex flex-nowrap mt-[5vh]">
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      </div>
      <div className="w-screen overflow-x-scroll flex flex-nowrap my-[5vh]">
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      <Hutulbur />
      </div>
  </div>
  )
};
export default Profile;
