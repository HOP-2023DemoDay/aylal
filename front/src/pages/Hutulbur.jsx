import React from "react";
import Arrow from "../img/Vector.png";
import Lake from "../img/lake.png";
import Mountain from "../img/mountain.png";
import { Link } from "react-router-dom";
import Map from "../img/map.png";
import News from "../components/news"

export const Hutulbur = () => {
  return (
    <div>
      <div
        className="bg-cover w-[100vw] h-[35vh] p-[5vw] flex flex-col gap-[2.5vw]"
        style={{ backgroundImage: `url(${Mountain})` }}
      >
        <Link to="/">
          <img alt="" src={Arrow} />
        </Link>
        <p className="font-Poppins font-bold text-white text-[2vw]">
          Tam an Nasional Bunaken
        </p>
      </div>
      <div className="flex flex-row bg-white w-[100vw] justify-around h-auto p-[5vw]">
        <div className="flex flex-col gap-5 w-[50%]">
          <p className="font-bold text-[1.5vw] font-Poppins text-DarkText">
            Get in touch
          </p>
          <div className="flex flex-col">
            <p className="h-auto w-[38vw] font-[400] text-DarkText font-Poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla.
            </p>
            <p className="h-auto w-[38vw] font-[400] font-Poppins text-DarkText">
              enim lobortis scelerisque fermentum dui faucibus in ornare quam
              viverra orci sagittis eu volutpat odio facilisis mauris sit amet
              massa vitae tortor condimentum lacinia quis vel eros donec ac odio
              tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
              viverra vitae congue eu, consequat ac felis donec et odio
              pellentesque diam volutpat commodo sed egestas egestas fringilla
              fau.
            </p>
            <p className="h-auto w-[38vw] font-[400] font-Poppins text-DarkText">
              enim lobortis scelerisque fermentum dui faucibus in ornare quam
              viverra orci sagittis eu volutpat odio facilisis mauris sit amet
              massa vitae tortor condimentum lacinia quis vel eros donec ac odio
              tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
              viverra vitae congue eu, consequat ac felis donec et odio
              pellentesque diam volutpat commodo sed egestas egestas fringilla
              fau.
            </p>
            <p className="h-auto w-[38vw] font-[400] font-Poppins text-DarkText">
              enim lobortis scelerisque fermentum dui faucibus in ornare quam
              viverra orci sagittis eu volutpat odio facilisis mauris sit amet
              massa vitae tortor condimentum lacinia quis vel eros donec ac odio
              tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
              viverra vitae congue eu.
            </p>
          </div>

          <img alt="" src={Lake} className="rounded-2xl w-[38vw]" />
          <div className="flex flex-col gap-3">
            <p className="font-normal text-[1.2vw] font-Poppins text-DarkText">
              Comment :
            </p>
            <input className="w-[37vw] h-[15vh] border-2 border-black rounded-xl focus:border-sky-500" />
            <button class="bg-Button hover:bg-ButtonHover font-[400] font-Poppins w-[5vw] h-[4vh] rounded-lg text-white">
              Send
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[50%] h-auto gap-[5%]">
          <img alt="" src={Map} className="w-[80%] h-[50%] rounded-lg" />
          <div className="flex flex-col h-auto w-[80%] gap-[7vh]">
            <div className="w-[100%] flex justify-between">
              <div className="w-auto flex justify-between w-[45%]">
                <p className="f-normal text-[19px] f-Poppins text-DarkText">
                  Address:
                </p>
                <p className="f-normal text-[19px] f-Poppins text-DarkText">
                  JL.Cindelaras No.205A
                </p>
              </div>
              <div className="w-auto flex justify-between w-[45%]">
                <p className="f-normal text-[19px] f-Poppins text-DarkText">
                  Phone:
                </p>
                <p className="f-normal text-[19px] f-Poppins text-DarkText">
                  +976 80894656
                </p>
              </div>
            </div>

            <div className="w-[100%] flex justify-between">
              <div className="w-auto flex justify-between w-[45%]">
                <p className="f-normal text-[19px] f-Poppins text-DarkText">
                  City:
                </p>
                <p className="f-normal text-[19px] f-Poppins text-DarkText">
                  Yogyakarta, Indonesia
                </p>
              </div>
              <div className="w-auto flex justify-between w-[45%]">
                <p className="f-normal text-[19px] f-Poppins text-DarkText">
                  Email :
                </p>
                <p className="f-normal text-[19px] f-Poppins text-DarkText">
                  info@travelaja.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[80%] h-auto gap-[3vh] justify-start items-end">
            <News />
            <News />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hutulbur;
