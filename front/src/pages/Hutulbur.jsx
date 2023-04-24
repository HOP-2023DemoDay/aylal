import React from "react";
import Arrow from "../img/Vector.png";
import Map from "../img/map.png";
import Lake from "../img/lake.png";
import News from "../components/news";
import clsx from "clsx"

const style = {
  box: "flex justify-between w-[281px] mt-[2vh]",
};

export const Hutulbur = () => {
  return (
    <div className="overflow-hidden w-screen  ">
      <div className="flex felx-col w-full h-52 bg-slate-500 w-full">
        <button onClick = {() => {console.log("first")}} className="h-10 mt-[3vh] ml-[2vw]"> <img src={Arrow} alt=""/></button>
        <div className="font-bold text-[33.18px] mb-[2vh] text-white flex items-end smmsm:text-[25px]">Taman Nasional Bunaken</div>
      </div>

      <div className="w-screen flex flex-row justify-around smmsm:flex-col">
        <div className="flex flex-col w-1/3 Txl:w-[750px] Txl:text-[20px] xl:w-[500px] lg:w-[380px] smmsm:mr-[20px] smmsm:w-[350px] smmsm:mx-[25px] ml-[80px] text-center">
          <div className="font-bold smmsm:text-[23px] Txl:text-[35px] ">
            Get in touch
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col mt-8">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent{" "}
              </div>
              <div>
                elementum facilisis leo, vel fringilla est ullamcorper eget
                nulla.
              </div>
            </div>
          </div>
          <div>
            enim lobortis scelerisque fermentum dui faucibus in ornare quam
            viverra orci sagittis eu volutpat odio facilisis mauris sit amet
            massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
            viverra vitae congue eu, consequat ac felis donec et odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla
            fau.{" "}
          </div>
          <div>
            enim lobortis scelerisque fermentum dui faucibus in ornare quam
            viverra orci sagittis eu volutpat odio facilisis mauris sit amet
            massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
            viverra vitae congue eu, consequat ac felis donec et odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla
            fau.
          </div>
          <div>
            enim lobortis scelerisque fermentum dui faucibus in ornare quam
            viverra orci sagittis eu volutpat odio facilisis mauris sit amet
            massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
            viverra vitae congue eu.
          </div>

          <img src={Lake} alt="" />

          <div className="smmsm:mt-[70vh]">
          <div className="text-start">Comment:</div>
          <textarea
            type="text"
            className="rounded-lg xl:h-[250px] border-2 xl:pt-[-20vh] xl:pb-[20vh] xl:text-[20px] xl:w-[500px] lg:h-[200px] lg:w-[370px] md:h-[150px] md:w-[270px] smmsm:h-[150px] smmsm:w-[360px]"
          ></textarea>
          <button className="rounded-[8px] w-[120px] h-[40px] text-white text-[16px] font-bold bg-Button mt-[4vh]">Send</button>
          </div>
        </div>

        <div className="flex flex-col m-6  w-1/3 smmsm:w-[380px]  ">
          
          
          <div className=" smmsm:mt-[-95vh]">
          <img src={Map} className="w-full h-[46vh] bg-slate-900 md:h-[34vh] md: w-[40vh]" alt="Map" />
          <div className="xl:w-[29vw] xl:h-[8vh]  lg:h-[16vh] md:h-[16vh] smmsm:h-[17vh]  xl:mt-[3vh]">
            <div className={clsx(style.box)}> 
            <p className="">Address :</p>
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


          <div className="flex flex-col justify-center w-[650px] xl:mt-[8vh] smmsm:mt-[30vh]">
            <div className="flex flex-row">
              <div className="md:text-[15px]">Other Destinations</div>
              <button className="text-Button ml-[10vw] smmsm: ml-[30vw]">see all</button>
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
