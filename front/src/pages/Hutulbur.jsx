import React from "react";
import Arrow from "../img/arrow.jpg";
// import Map from "../img/map.png";
export const Hutulbur = () => {
  return (
    <div>
      <div className="flex felx-col w-full h-52 bg-slate-500">
        <img src={Arrow} alt="" className="h-6" />
        <div className="font-bold flex items-end">Taman Nasional Bunaken</div>
      </div>
      <div className="w-full flex flex-row ">
        <div className="flex flex-col Txl:w-[750px] xl:w-[500px] lg:w-[380px] md:w-[270px] sm:w-[100px] ml-[80px] ">
          <div className="font-bold">Get in touch</div>
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
        </div>

        {/* <div className="flex flex-col m-4 w-[300px] grid  content-between">
          <img src={Map} alt="" />
            <div className="flex flex-row">
              <div className="flex flex-row  w-60 justify-between">
                <div className="text-black text-sm">Address:</div>
                <div className="text-neutral-500 text-sm">
                  JL.Cindelaras NO.205A
                </div>
              </div>
              <div className="flex flex-row  w-60 justify-between">
                <div className="text-black text-sm">Phone:</div>
                <div className="text-neutral-500 text-sm">+62 1234 432 567</div>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-row  w-60 justify-between">
                <div className="text-black text-sm">City:</div>
                <div className="text-neutral-500 text-sm">
                  Yogyakarta, Indonesia
                </div>
              </div>
              <div className="flex flex-row  w-60 justify-between">
                <div className="text-black text-sm">Email:</div>
                <div className="text-neutral-500 text-sm">
                  info@travelaja.com
                </div>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-row  w-60 justify-between">
                <div className="text-black text-sm">City:</div>
                <div className="text-neutral-500 text-sm">
                  Yogyakarta, Indonesia
                </div>
              </div>
              <div className="flex flex-row  w-60 justify-between">
                <div className="text-black text-sm">Email:</div>
                <div className="text-neutral-500 text-sm">
                  info@travelaja.com
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
  );
};
export default Hutulbur;
