import React from "react";
import Arrow from "../img/Vector.png";
import Map from "../img/map.png";
import Lake from "../img/lake.png";
import News from "../components/news";
import Mountain from "../img/mountain.png";
import { Link } from "react-router-dom";

export const Hutulbur = () => {
  return (
    <div>
      <div
        className="bg-cover w-[100vw] h-[45vh] p-[5vw] flex flex-col gap-[2.5vw]"
        style={{ backgroundImage: `url(${Mountain})` }}
      >
        <Link to="/">
          <img alt="" src={Arrow} />
        </Link>
        <p className="font-Poppins font-bold text-white text-[2vw]">
          Tam an Nasional Bunaken
        </p>
      </div>
      <div className="flex flex-row bg-white w-[100vw] h-auto p-[5vw]">
        <div className="flex flex-col gap-5">
          <p className="font-bold text-[1.5vw] font-Poppins">Get in touch</p>
          <div className="flex flex-col">
            <p className="h-auto w-[38vw] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla.
            </p>
            <p className="h-auto w-[38vw] font-[400] font-Poppins">
              enim lobortis scelerisque fermentum dui faucibus in ornare quam
              viverra orci sagittis eu volutpat odio facilisis mauris sit amet
              massa vitae tortor condimentum lacinia quis vel eros donec ac odio
              tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
              viverra vitae congue eu, consequat ac felis donec et odio
              pellentesque diam volutpat commodo sed egestas egestas fringilla
              fau.
            </p>
            <p className="h-auto w-[38vw] font-[400] font-Poppins">
              enim lobortis scelerisque fermentum dui faucibus in ornare quam
              viverra orci sagittis eu volutpat odio facilisis mauris sit amet
              massa vitae tortor condimentum lacinia quis vel eros donec ac odio
              tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
              viverra vitae congue eu, consequat ac felis donec et odio
              pellentesque diam volutpat commodo sed egestas egestas fringilla
              fau.
            </p>
            <p className="h-auto w-[38vw] font-[400] font-Poppins">
              enim lobortis scelerisque fermentum dui faucibus in ornare quam
              viverra orci sagittis eu volutpat odio facilisis mauris sit amet
              massa vitae tortor condimentum lacinia quis vel eros donec ac odio
              tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
              viverra vitae congue eu.
            </p>
          </div>

          <img alt="" src={Lake} className="rounded-2xl" />
          <div className="flex flex-col gap-3">
            <p className="font-normal text-[1.2vw] font-Poppins">Comment :</p>
            <input className="w-[37vw] h-[15vh] border-2 border-black rounded-xl focus:border-sky-500" />
            <button class="bg-Button hover:bg-ButtonHover font-[400] font-Poppins w-[5vw] h-[4vh] rounded-lg text-white">
              Send
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Hutulbur;
