import React from "react";
import clsx from "clsx";
import Hutulbur from "../components/Hutulbur";
import Map from "../img/map.png";
import star from "../img/star.svg";
import hun from "../img/hun.png";
import img from "../img/companyImg.svg";
import pagearr from "../img/pagearr.svg";

const style = {
  people:
    "2xl:w-[40px] 2xl:h-[40px] 2xl:ml-[-2vw] xl:w-[40px] xl:h-[40px] xl:ml-[-2vw] lg:w-[40px] lg:h-[40px] lg:ml-[-3vw] md:w-[30px] md:h-[30px] md:ml-[-3vw] w-[26px] h-[26px] ml-[-6vw] bg-DarkText rounded-full",
  box: "flex justify-between w-[281px] mt-[2vh] ml-[20vw] md:ml-[10vw] xl:ml-[25vw] 2xl:ml-[0vw]",
  too: "2xl:ml-[5vw] 2xl:text-[35px] xl:ml-[-0.5vw] lg:ml-[-1vw] md:ml-[0.5vw] font-Poppins font-light text-[22px] ml-[-22vw] opacity-50 text-white",
  star: "2xl:w-[35px] 2xl:h-[35px] 2xl:ml-[7vw] xl:ml-[2vw] w-[22px] lg:ml-[3vw] h-[22px] ml-[-12vw] opacity-50 ml-[-10vw] md:w-[20px] md:h-[20px] md:ml-[5vw] mt-[-3vh]",
  Text: " ml-[1vw] mr-[3vw] font-Poppins font-light text-[10px] xl:text-[14px] text-center md:ml-[-2vw] md:w-[90vw] mt-[2vh] lg:mt-[1vh] md:text-[10px] lg:text-[12px] 2xl:text-[20px] 2xl:ml-[10vw] 2xl:w-[40vw] xl:w-[45vw] lg:w-[40vw] w-[90vw] mb-[20vh]",
};

export const CompanyInfo = () => {
  return (
    <div className="overflow-hidden w-screen">
      <div>
        <img src={img} alt="img" className="w-screen h-[20vh] object-cover " />
        <button>
          <img
            src={pagearr}
            alt="arrow"
            onClick={() => {
              console.log("first");
            }}
            className="h-10 mt-[-30vh] ml-[2vw]"
          />
        </button>
        <div className="w-screen flex justify-around mt-[-9vh]">
          <p className="font-Poppins font-bold text-[22px] text-white 2xl:text-[50px] ml-[-16vw] md:text-[28px] md:text-[24px]">
            CompanyName
          </p>
          <div className="w-[15vw] flex justify-between mr-[-20vw]">
            <div className="w-[90px] ml-[-5vw]">
              <p className={clsx(style.too)}>144</p>
              <img src={star} alt="start" className={clsx(style.star)} />
            </div>
            <div className="w-[140px] flex ml-[-5vw] lg:ml-[10vw] md:ml-[10vw]">
              <img src={hun} alt="hun" className={clsx(style.people)} />
              <img src={hun} alt="hun" className={clsx(style.people)} />
              <img src={hun} alt="hun" className={clsx(style.people)} />
              <img src={hun} alt="hun" className={clsx(style.people)} />
              <img src={hun} alt="hun" className={clsx(style.people)} />
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:mt-[20vh] 2xl:px-[5vw] xl:mt-[10vh] lg:mt-[10vh] lg:px-[5vw] md:mt-[5vh] md:px-[5vw] flex justify-around md:mt-[10vh] mt-[10vh] ml-[-3vw]">
        <div className="2xl:w-1/2 2xl:mr-[5vw] 2xl:ml-[-5vw] xl:ml-[-10vw] md:ml-[5vw] ml-[5vw] lg:ml-[-18vw]">
          <p className="text-[26px] ml-[5vw] font-Poppins text-DarkText font-bold lg:text-[26px] md:ml-[-5vw] md:text-[24px] 2xl:text-[40px] 2xl:ml-[10vw] md:ml-[0vw]">
            Get in touch
          </p>
          <p className={clsx(style.Text)}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem facere voluptatum ab, cum fugiat asperiores amet sit
            tenetur maiores unde! In omnis corporis, natus veniam aliquid
            nesciunt quod pariatur inventore harum ratione velit facere nisi
            possimus, repellat asperiores aliquam, officiis porro iste tempora
            doloremque veritatis doloribus atque expedita! Maxime sunt obcaecati
            debitis expedita. Aut debitis aliquam nostrum libero. Tempore quam
            ipsum provident sequi saepe nobis repellat dolorem cumque similique
            quibusdam quo, nam aliquam, quidem voluptate dignissimos vitae
            dolor? Animi aspernatur, necessitatibus magni cumque minus quisquam
            porro dolor sunt. Harum facilis sit quis, soluta ullam excepturi.
            Unde eum debitis blanditiis molestias aperiam cupiditate labore,
            soluta corporis repellat ab dolorem. Veritatis ad ducimus minima
            quis iure, dolores optio aut assumenda fugiat enim velit quaerat
            corrupti odit numquam commodi? Sequi velit facere aliquam aliquid.
            Consectetur similique error nostrum fugit tenetur? Laborum incidunt
            saepe amet optio consequuntur ipsa similique illum neque! Quas magni
            id, dolorem possimus facilis autem fuga expedita natus qui porro
            architecto tempora beatae laboriosam fugiat culpa animi distinctio
            totam vitae sint dicta incidunt aut! Iusto ipsa ut recusandae
            ducimus veniam deserunt omnis perferendis totam impedit natus
            repudiandae voluptas illo aliquid repellendus, adipisci deleniti
            reiciendis nobis a vero? Cupiditate aspernatur vero hic eaque nihil
            id vitae dicta, molestias odit ducimus illum, fuga libero? Quae
            pariatur cumque rerum quas doloremque id impedit modi minima
            deleniti blanditiis ratione expedita recusandae, facilis reiciendis
            odit? Quas illum pariatur accusantium obcaecati nam itaque dicta,
            atque dolorem tempore placeat, totam fuga sit neque fugit cum.
            Consequuntur eaque odit natus cupiditate magni. Nemo possimus cumque
            iste animi suscipit officia, velit necessitatibus amet iusto vitae
            veritatis, maiores doloribus voluptate deleniti eius praesentium
            iure ipsam ipsa est quasi nulla! Provident aspernatur libero
            voluptates impedit fugiat ullam excepturi eum pariatur facilis
            praesentium alias, nostrum, sunt nisi rerum quo ipsum! Ipsa ullam
            vel incidunt, quia sequi laborum architecto sed omnis. Culpa quas
            hic nulla animi nam sunt vero, magni, modi similique repellat
            dignissimos ex error ad labore quaerat placeat earum minus dolorum
            iusto, mollitia neque sit deleniti laudantium! Dolor ut odit, iste
            laborum animi molestiae iure neque nobis, a aperiam facere non
            voluptas fuga? Voluptas veritatis qui vitae ratione repellendus
            facere illum
          </p>
        </div>

        <div className="ml-[-60vw] w-1/2 md:mt-[40vh] mt-[65vh] 2xl:mt-[5vh] 2xl:ml-[5vh] xl:mt-[5vh] lg:mt-[5vh] ">
          <img
            src={Map}
            className="w-[100vw] xl:w-[30vw] 2xl:w-[35vw] 2xl:h-[30vw] ml-[-22vw] xl:ml-[25vw] h-[30vh] lg:ml-[20vw] md:ml-[-40vw] md:h-[40vw] 2xl:mt-[-10vh] xl:mt-[-5vh] 2xl:ml-[1vw] xl:h-[30vw]"
            alt="Map"
          />
          <div className="w-[29vw] grid grid-cols-1 2xl:grid-cols-2 ml-[-42vw] 2xl:ml-[1vw] md:mt-[-30vw] md:mb-[20vw] xl:ml-[0vh] mt-[3vh] lg:ml-[0vw] md:ml-[0vw]">
            <div className={clsx(style.box)}>
              <p>Address :</p>
              <input
                type="text"
                placeholder="JL.Cindelaras No.205A"
                name=""
                id=""
              />
            </div>
            <div className={clsx(style.box, "2xl:ml-[3vw]")}>
              <p>Email :</p>
              <input
                type="text"
                placeholder="info@travelaja.com"
                name=""
                id=""
              />
            </div>
            <div className={clsx(style.box)}>
              <p>Phone :</p>
              <input type="text" placeholder="+62 1234 432 567" name="" id="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex sm:flex-wrap overflow-x-auto mt-[5vh] 2xl:mt-[-10vh] xl:mt-[-10vh] lg:mt-[-10vh] md:mt-[0vh]">
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
      <div className="w-screen flex sm:flex-wrap overflow-x-auto mt-[5vh] mb-[5vh]">
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
  );
};
export default CompanyInfo;

//import React from "react";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function CompanyInfo(){
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }
