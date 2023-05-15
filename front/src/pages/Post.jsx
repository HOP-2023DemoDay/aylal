import React, { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../img/Vector.png";
import axios from "axios";

export const Post = () => {
  const [selectedImage, setSelectedImage] = useState(false);
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e;
    const base64 = await convertToBase64(file);
    console.log(base64);
    // axios.post("http://www.localhost:8000/hutulburs", {
    //   image: base64,
    // });
  };
  return (
    <div>
      <div className="bg-cover w-[100vw] h-[35vh] p-[5vw] flex flex-col gap-[2.5vw]">
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
          <input className="text-[16px] w-[40vw] h-[35vh] border border-black rounded-xl pb-[28vh] pl-[27px] f-Poppins" />

          {selectedImage ? (
            <div>
              <img
                alt="not found"
                width={"250px"}
                className="w-[40vw] h-[20vh]"
                src={URL.createObjectURL(selectedImage)}
              />
              {/* <button onClick={() => setSelectedImage(null)}>Remove</button> */}
            </div>
          ) : (
            
            <input
              type="file"
              name="img"
            //   name="myImage"
              className="w-[40vw] h-[20vh]"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
          )}

          <div className="flex flex-col gap-3">
            <p className="font-normal text-[1.2vw] font-Poppins text-DarkText">
              Comment :
            </p>
            <input className="w-[40vw] h-[4vh] border border-black rounded-full focus:border-sky-500" />
            <button
              class="bg-Button hover:bg-ButtonHover font-[400] font-Poppins w-[5vw] h-[4vh] rounded-lg text-white"
              onClick={() => handleFileUpload(selectedImage)}
            >
              Post
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[50%] h-auto gap-[5%]">
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
          <div className="flex flex-col w-[80%] h-auto gap-[3vh] justify-start items-end"></div>
        </div>
      </div>
    </div>
  );
};
