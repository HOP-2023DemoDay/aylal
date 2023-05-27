import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../img/Vector.png";
import axios from "axios";
import ImgUpload from "../img/uploadImg.svg"
import clsx from "clsx";

const style = {
  ImgDiv: "w-[40vw] border-2 border-dashed border-Button rounded-3xl flex items-center justify-center",
  resml: "2xl:ml-[0vw] xl:ml-[0vw] lg:ml-[0vw] md:ml-[0vw] ml-[-45vw]",
  resmt: "2xl:mt-[4vh] xl:mt-[4vh] lg:mt-[4vh] md:mt-[5vh] mt-[55vh]",
  text: "-normal text-[19px] font-Poppins text-DarkText",
  input: "border-[1px] rounded-lg border-black md:w-[120px] xl:w-[200px] 2xl:w-[16vw] 2xl:text-2xl w-[80px] h-[30px] ml-[1vw]",
};

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
        <div className="w-screen h-[35vh] flex justify-center items-center bg-Button ">
          <input
            type="file"
            className="absolute opacity-0 w-screen h-[35vh]"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
          <div className="bg-cover w-[10vw] flex flex-wrap gap-[2.5vw] absolute ml-[-80vw]">
            <Link to="/" className="z-20">
              <img alt="" src={Arrow} />
            </Link>
            <input
              className="font-Poppins font-bold text-[2vw] placeholder:text-black z-[10] bg-transparent border-2 border-dashed border-black"
              type="text"
              placeholder="Title"
              ref={title}
            />
          </div>
          <div className="flex item-center">
            <img src={ImgUpload} alt="img"/>
            <p className="absolute ml-[-2vw] mt-[7vh]">BrowserFileToUpload</p>
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
            <div className={clsx(style.ImgDiv , "h-[23vh] 2xl:mt-[0vh] xl:mt-[0vh] lg:mt-[0vh] md:mt-[0vh] mt-[65vh]")}>
              <input
                type="file"
                className="absolute opacity-0 w-[40vw] h-[20vh] "
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage1(event.target.files[0]);
                }}
              />
              <div className="flex item-center">
                <img src={ImgUpload} alt="" />
                <p className="absolute ml-[-2vw] mt-[7vh]">BrowserFileToUpload</p>
              </div>
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
            <div  className={clsx(style.ImgDiv , style.resml , style.resmt , "h-[40vh]")}>
              <input
                type="file"
                className="absolute opacity-0 w-[40vw] h-[40vh] "
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage2(event.target.files[0]);
                }}
              />
              <div className="flex item-center">
                <img src={ImgUpload} alt="img"/>
                <p className="absolute ml-[-2vw] mt-[7vh]">BrowserFileToUpload</p>
              </div>
            </div>
          )}

          <div className={clsx(style.resml , "flex flex-col h-auto w-[80%] gap-[7vh]")}>
            <div className="w-[100%] flex justify-between">
              <div className="w-auto flex justify-between w-[45%] ml-[-1vw]">
                <p  className={clsx(style.text)}>
                  Days:
                </p>
                <input
                  className={clsx(style.input)}
                  ref={days}
                />
              </div>
              <div className="w-auto flex justify-between w-[45%] ml-[1vw]">
                <p  className={clsx(style.text)}>
                  Phone:
                </p>
                <input
                  className={clsx(style.input)}
                  type="number"
                  ref={phone}
                />
              </div>
            </div>

            <div className="w-[100%] flex justify-between">
              <div className="w-auto flex justify-between w-[45%]">
                <p className={clsx(style.text , "ml-[-2vw]")}>
                  Country:
                </p>
                <input
                  className={clsx(style.input)}
                  ref={country}
                />
              </div>
              <div className="w-auto flex justify-between w-[45%]">
                <p  className={clsx(style.text , "ml-[1vw]")}>
                  Email:
                </p>
                <input
                  className={clsx(style.input)}
                  type="email"
                  ref={email}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};