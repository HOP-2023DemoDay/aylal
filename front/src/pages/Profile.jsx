import React from "react";
import Tsarai from "../img/Tsarai.svg"
import Dots from "../img/Dots.svg"
import Phone from "../img/Phone.svg"
import Gmail from "../img/Gmail.svg"
import Hutulbur from "../components/Hutulbur";


const Profile = () => {
  return <div className="w-[100vw] h-[150vh] bg-cover z-[-10] block justify-center">
    
    <div className="mt-[40vh] ml-[10vw] absolute smm:w-[80vw] w-[413px] z-[-10] h-[505px]" style={{ backgroundImage: `url(${Dots})`}}></div>

    <div className='flex justify-center smm:ml-[10px]'>

      <div className='mt-[5vh] h-[261px] w-[346px] flex flex-col justify-between'>
        <div className="flex items-center space-x-5">
          <img src={Tsarai} alt="" />
          <div className='h-10 text-2xl font-Poppins text-GrayText'>Ner</div>
        </div>
        <div className="flex items-center space-x-5">
          <img src={Phone} alt="" />
          <div className="h-6 font-inter font text-xl font-Poppins text-DarkText">+976 99116969</div>
        </div>
        <div className="flex items-center space-x-4 ml-[-2px]">
          <img src={Gmail} alt="" />
          <div className="h-6 font-inter font text-xl font-Poppins text-DarkText">example@gmail.com</div>
        </div>
      </div>

    </div>
    <div className="font-poppins text-DarkText ml-[5vw] mt-[7vh] text-xl">Favorites</div>
    <div className="grid grid-cols-3 space-y-4 pb-10 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 w-[97vw] ml-[2vw] mt-[3vh]">
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
  </div>;
};
export default Profile;
