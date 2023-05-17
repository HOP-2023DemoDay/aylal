import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../img/Vector.png";
import axios from "axios";

export const Post = () => {
  const [selectedImage, setSelectedImage] = useState(false);
  const [selectedImage1, setSelectedImage1] = useState(false);
  const [selectedImage2, setSelectedImage2] = useState(false);

  const days = useRef("");
  const country = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const text = useRef("");
  const title = useRef("");

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
  const convertToBase65 = (filee) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(filee);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const convertToBase66 = (fileee) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(fileee);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e, f, g) => {
    const file = e;
    const filee = f;
    const fileee = g;
    const base64 = await convertToBase64(file);
    const base65 = await convertToBase65(filee);
    const base66 = await convertToBase66(fileee);
    axios
      .post("http://www.localhost:8000/hutulburs", {
        image: base64,
        image1: base65,
        image2: base66,
        title: title.current.value,
        days: days.current.value,
        phone: phone.current.value,
        email: email.current.value,
        text: text.current.value,
        country: country.current.value,
      })
      .then(() => {
        window.location.replace("/CompanyInfo");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {selectedImage ? (
        <div>
          <img
            alt="not found"
            className="w-screen h-[30vh]"
            src={URL.createObjectURL(selectedImage)}
          />
          <button
            onClick={() => setSelectedImage(null)}
            class="bg-Button hover:bg-ButtonHover font-[400] font-Poppins w-[5vw] h-[4vh] rounded-lg text-white ml-[5vw] mt-[1vh]"
          >
            Remove
          </button>
          <div className="bg-cover w-[100vw] h-[35vh] p-[5vw] flex flex-col gap-[2.5vw] mt-[-40vh] ">
            <Link to="/">
              <img alt="" src={Arrow} />
            </Link>
            <input
              className="font-Poppins font-bold bg-transparent text-[2vw] placeholder:text-black"
              placeholder="Title"
              ref={title}
            />
          </div>
        </div>
      ) : (
        <div className="w-screen h-[35vh] bg-gray-300">
          <input
            type="file"
            className="text-gray-300 relative opacity-0  w-full h-full cursor-pointer"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
          <div className="mt-[-20vh] ml-[50vw]">img+</div>
          <div className="bg-cover w-[100vw] h-[35vh] p-[5vw] flex flex-col gap-[2.5vw] mt-[-20vh] ">
            <Link to="/" className="z-20">
              <img alt="" src={Arrow} />
            </Link>
            <input
              className="font-Poppins font-bold text-[2vw] placeholder:text-black z-[10] bg-gray-300 w-[30vw]"
              type="text"
              placeholder="Title"
              ref={title}
            />
          </div>
        </div>
      )}

      <div className="flex flex-row bg-white w-[100vw] justify-around h-auto p-[5vw]">
        <div className="flex flex-col gap-5 w-[50%]">
          <p className="font-bold text-[1.5vw] font-Poppins text-DarkText">
            Get in touch
          </p>
          <input
            className="text-[16px] w-[40vw] h-[40vh] border border-black rounded-xl pb-[28vh] pl-[27px] f-Poppins"
            ref={text}
          />
          <button class="bg-Button hover:bg-ButtonHover font-[400] font-Poppins w-[5vw] h-[4vh] rounded-lg text-white">
            Delete
          </button>

          {selectedImage1 ? (
            <div>
              <img
                alt="not found"
                className="w-[40vw] h-[20vh]"
                src={URL.createObjectURL(selectedImage1)}
              />
              <button
                onClick={() => setSelectedImage1(null)}
                class="bg-Button hover:bg-ButtonHover font-[400] font-Poppins w-[5vw] h-[4vh] rounded-lg text-white mt-[1vh]"
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="w-[40vw] h-[20vh] bg-gray-300">
              <input
                type="file"
                className="text-gray-300 relative opacity-0  w-full h-full cursor-pointer"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage1(event.target.files[0]);
                }}
              />
              <div className="mt-[-10vh] ml-[19vw]">img+</div>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              class="bg-Button hover:bg-ButtonHover font-[400] font-Poppins w-[5vw] h-[4vh] rounded-lg text-white"
              onClick={() =>
                handleFileUpload(selectedImage, selectedImage1, selectedImage2)
              }
            >
              Post
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[50%] h-auto gap-[5%]">
          {selectedImage2 ? (
            <div className="mt-[5vh]">
              <img
                alt="not found"
                className="w-[50vw] h-[40vh]"
                src={URL.createObjectURL(selectedImage2)}
              />
              <button
                onClick={() => setSelectedImage2(null)}
                class="bg-Button hover:bg-ButtonHover font-[400] font-Poppins w-[5vw] h-[4vh] rounded-lg text-white mt-[1vh]"
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="w-[40vw] h-[40vh] bg-gray-300 mt-[7vh]">
              <input
                type="file"
                className="text-gray-300 relative opacity-0  w-full h-full cursor-pointer"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage2(event.target.files[0]);
                }}
              />
              <div className="mt-[-20vh] ml-[19vw]">img+</div>
            </div>
          )}

          <div className="flex flex-col h-auto w-[80%] gap-[7vh]">
            <div className="w-[100%] flex justify-between">
              <div className="w-auto flex justify-between w-[45%] ml-[-1vw]">
                <p className="f-normal text-[19px] font-Poppins text-DarkText">
                  Days:
                </p>
                <input
                  className="border-[1px] rounded-lg border-black w-[15vw] h-[3vh] ml-[1vw]"
                  ref={days}
                />
              </div>
              <div className="w-auto flex justify-between w-[45%] ml-[1vw]">
                <p className="f-normal text-[19px] font-Poppins text-DarkText">
                  Phone:
                </p>
                <input
                  className="border-[1px] rounded-lg border-black w-[15vw] h-[3vh] ml-[1vw]"
                  // type="number"
                  ref={phone}
                />
              </div>
            </div>

            <div className="w-[100%] flex justify-between">
              <div className="w-auto flex justify-between w-[45%]">
                <p className="f-normal text-[19px] font-Poppins text-DarkText ml-[-2vw]">
                  Country:
                </p>
                <input
                  className="border-[1px] rounded-lg border-black w-[15vw] h-[3vh] ml-[1vw]"
                  ref={country}
                />
              </div>
              <div className="w-auto flex justify-between w-[45%]">
                <p className="f-normal text-[19px] font-Poppins text-DarkText ml-[1vw]">
                  Email:
                </p>
                <input
                  className="border-[1px] rounded-lg border-black w-[15vw] h-[3vh] ml-[1vw]"
                  type="email"
                  ref={email}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[80%] h-auto gap-[3vh] justify-start items-end"></div>
        </div>
      </div>
    </div>
  );
};
