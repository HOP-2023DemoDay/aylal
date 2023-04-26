import React from "react";
import Arrow from "../img/Vector.png";
import Map from "../img/map.png";
import Lake from "../img/lake.png";
import News from "../components/news";
import clsx from "clsx"

const style = {
  box: "flex justify-between w-[281px] mt-[2vh] 2xl:text-[30px] 2xl:w-[500px] font-Poppins",
};

export const Hutulbur = () => {           
  return (
    <div className="overflow-hidden w-screen  ">
      <div className="flex felx-col w-full h-52 bg-slate-500 w-full">
        <button onClick = {() => {console.log("first")}} className="h-10 mt-[3vh] ml-[2vw]"> <img src={Arrow} alt=""/></button>
        <div className="font-bold text-[33.18px] mb-[2vh] text-white flex items-end text-[25px] 2xl:text-[45px]">Taman Nasional Bunaken</div>
      </div>

      <div className="w-screen flex 2xl:flex-row 2xl:justify-around xl:flex-row xl:justify-around lg:flex-row lg:justify-around md:flex-row md:justify-around sm:flex-row sm:justify-around flex-col">
        <div className="flex flex-col w-1/3 2xl:w-[850px] xl:w-[500px] lg:w-[380px] sm:text-[15px] mx-[30px] w-auto font-Poppins">
          <div className="font-bold  2xl:text-[45px] xl:text-[30px] lg:text-[25px] md:text-[25px] sm:text-[20px] text-[20px] text-start ">
            Get in touch
          </div>
              <div className=" text-center 2xl:text-[30px] sm:text-[15px] text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent{" "}
                elementum facilisis leo, vel fringilla est ullamcorper eget
                nulla.
            enim lobortis scelerisque fermentum dui faucibus in ornare quam
            viverra orci sagittis eu volutpat odio facilisis mauris sit amet
            massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
            viverra vitae congue eu, consequat ac felis donec et odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla
            fau.{" "}
            enim lobortis scelerisque fermentum dui faucibus in ornare quam
            viverra orci sagittis eu volutpat odio facilisis mauris sit amet
            massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
            viverra vitae congue eu, consequat ac felis donec et odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla
            fau.
            enim lobortis scelerisque fermentum dui faucibus in ornare quam
            viverra orci sagittis eu volutpat odio facilisis mauris sit amet
            massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
            viverra vitae congue eu.
          </div>

          <img src={Lake} alt="" className="2xl:h-[500px] lg:h-[350px] md:h-[200px] sm:h-[150px] h-[200px]" />

          <div className="mt-[43vh] 2xl:mt-0 xl:mt-0  lg:mt-0 md:mt-0 sm:mt-0">

          <div className="2xl:text-[30px] font-Poppins">Comment:</div>
          <textarea
            type="text"
            className="rounded-lg border-2 2xl:h-[400px] 2xl:w-[850px] 2xl:text-[35px] xl:h-[250px] xl:w-[500px] xl:text-[20px]  lg:h-[200px] lg:w-[370px] md:h-[150px] md:w-[270px] sm:h-[130px] sm:w-[250px] w-[250px]  h-[200px] "
          ></textarea>
          <button className="rounded-[8px] 2xl:text-[30px] 2xl:h-[55px] 2xl:w-[200px]  w-[120px] h-[40px] text-white text-[16px] font-bold bg-Button mt-[4vh] justify-self-start">Send</button>
          
          </div>
        </div>

        <div className="flex flex-col m-6  w-1/3  ">
          
          
          <div className=" mt-[-73vh] 2xl:mt-0 xl:mt-0  lg:mt-0 md:mt-0 sm:mt-0">
          <img src={Map} className="  bg-slate-900 2xl:w-[950px] 2xl:h-[750px]  md:h-[34vh] md: w-[40vh] sm:h-[300px] w-[280px] mr-[7px] h-[200px]" alt="Map" />
          <div className="xl:w-[29vw] xl:h-[8vh]  lg:h-[16vh]  md:h-[16vh] h-[17vh]  xl:mt-[3vh]">
            <div className={clsx(style.box)}> 
            <p >Address :</p>
            <input type="text" placeholder="JL.Cindelaras No.205A" name="" id="" />
            </div>
            <div className={clsx(style.box)}>
            <p>Email :</p>
            <input type="text" placeholder="info@travelaja.com" name="" id="" />
            </div>
            <div className={clsx(style.box)}>
            <p>Phone :</p>
            <input type="text" placeholder="+62 1234 432 567" name="" id="" />
            </div>
            </div>
          </div>


          <div className="flex flex-col justify-center 2xl:w-[750px] 2xl:mt-[4vh] xl:mt-[8vh] lg:mt-0 md:mt-0 sm:mt-0 mt-[33vh]">
            <div className="flex flex-row 2xl:mb-[-7vh] xl:mb-[-5vh] lg:mb-[-4vh] md:mb-[-2vh] sm:mb-[-1.5vh] sm:mt-[15px] mb-[-3vh] font-Poppins">
              <div className="md:text-[15px]  2xl:text-[30px] 2xl:w-[500px] sm:text-[15px] ">Other Destinations</div>
              <button className="text-Button ml-[10vw]   2xl:text-[30px]  2xl:w-[300px] sm:text-[15px]">see all</button>
            </div>
            <News/>
            <News />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hutulbur;
