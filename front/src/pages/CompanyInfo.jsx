import React from "react";
import clsx from "clsx";
import Hutulbur from "../components/Hutulbur";
import Map from "../img/map.png"
import star from "../img/star.svg"
import hun from "../img/hun.png"
import img from "../img/companyImg.svg"
import pagearr from "../img/pagearr.svg"

const style = {
  people: "w-[40px] h-[40px] ml-[-2vw] bg-DarkText rounded-full smm:ml-[-7vw] smm:w-[30px] smm:h-[30px]",
  box: "flex justify-between w-[281px] mt-[2vh]",
};

export const CompanyInfo = () => {
  return (
    <div className="overflow-hidden">
      <div>
      <img src={img} alt="img" className="w-screen h-[20vh] object-cover" />
      <button><img src={pagearr} alt="arrow" onClick = {() => {console.log("first")}} className="h-10 mt-[-30vh] ml-[2vw]" /></button>
      <div className="w-screen flex justify-around mt-[-9vh]">
        <p className="font-Poppins font-bold text-[33px] text-white ml-[-20vw] md:text-[28px] smmmd:ml-[0px] smm:text-[20px]">CompanyName</p>
        <div className="w-[15vw] flex justify-between mr-[-20vw] smmmd:mr-[0px]">
          <div className="w-[90px]">
          <p className="font-Poppins font-light text-[28px] opacity-50 text-white md:text-[26px] smm:ml-[-30vw] smm:text-[20px]">144</p>
          <img src={star} alt="start" className="w-[25px] h-[25px] opacity-50 ml-[40px] mt-[-3vh] smm:ml-[-20vw]"/>
          </div>
          <div className="w-[140px] flex ml-[5vw] smm:ml-[-10vw]">
            <img src={hun} alt="hun" className={clsx(style.people)}/>
            <img src={hun} alt="hun" className={clsx(style.people)}/>
            <img src={hun} alt="hun" className={clsx(style.people)}/>
            <img src={hun} alt="hun" className={clsx(style.people)}/>
            <img src={hun} alt="hun" className={clsx(style.people)}/>
          </div>
        </div>
      </div>
      </div>
      <div className="mt-[16vh] w-screen flex justify-around md:mt-[10vh] smmsm:mt-[1vh] ">

        <div className="w-1/3 smmsm:w-screen smmsm:mt-[2vh]">
        <p className="text-[28px] font-Poppins text-DarkText font-bold lg:text-[26px]">Get in touch</p>
        <p className="w-[40vw] font-Poppins font-light text-[16px] xl:text-[14px] text-center mt-[2vh] lg:mt-[1vh] md:text-[10px] lg:text-[12px] smmsm:text-[10px] smmsm:w-screen">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem facere voluptatum ab, cum fugiat asperiores amet sit
          tenetur maiores unde! In omnis corporis, natus veniam aliquid nesciunt
          quod pariatur inventore harum ratione velit facere nisi possimus,
          repellat asperiores aliquam, officiis porro iste tempora doloremque
          veritatis doloribus atque expedita! Maxime sunt obcaecati debitis
          expedita. Aut debitis aliquam nostrum libero. Tempore quam ipsum
          provident sequi saepe nobis repellat dolorem cumque similique
          quibusdam quo, nam aliquam, quidem voluptate dignissimos vitae dolor?
          Animi aspernatur, necessitatibus magni cumque minus quisquam porro
          dolor sunt. Harum facilis sit quis, soluta ullam excepturi. Unde eum
          debitis blanditiis molestias aperiam cupiditate labore, soluta
          corporis repellat ab dolorem. Veritatis ad ducimus minima quis iure,
          dolores optio aut assumenda fugiat enim velit quaerat corrupti odit
          numquam commodi? Sequi velit facere aliquam aliquid. Consectetur
          similique error nostrum fugit tenetur? Laborum incidunt saepe amet
          optio consequuntur ipsa similique illum neque! Quas magni id, dolorem
          possimus facilis autem fuga expedita natus qui porro architecto
          tempora beatae laboriosam fugiat culpa animi distinctio totam vitae
          sint dicta incidunt aut! Iusto ipsa ut recusandae ducimus veniam
          deserunt omnis perferendis totam impedit natus repudiandae voluptas
          illo aliquid repellendus, adipisci deleniti reiciendis nobis a vero?
          Cupiditate aspernatur vero hic eaque nihil id vitae dicta, molestias
          odit ducimus illum, fuga libero? Quae pariatur cumque rerum quas
          doloremque id impedit modi minima deleniti blanditiis ratione expedita
          recusandae, facilis reiciendis odit? Quas illum pariatur accusantium
          obcaecati nam itaque dicta, atque dolorem tempore placeat, totam fuga
          sit neque fugit cum. Consequuntur eaque odit natus cupiditate magni.
          Nemo possimus cumque iste animi suscipit officia, velit necessitatibus
          amet iusto vitae veritatis, maiores doloribus voluptate deleniti eius
          praesentium iure ipsam ipsa est quasi nulla! Provident aspernatur
          libero voluptates impedit fugiat ullam excepturi eum pariatur facilis
          praesentium alias, nostrum, sunt nisi rerum quo ipsum! Ipsa ullam vel
          incidunt, quia sequi laborum architecto sed omnis. Culpa quas hic
          nulla animi nam sunt vero, magni, modi similique repellat dignissimos
          ex error ad labore quaerat placeat earum minus dolorum iusto, mollitia
          neque sit deleniti laudantium! Dolor ut odit, iste laborum animi
          molestiae iure neque nobis, a aperiam facere non voluptas fuga?
          Voluptas veritatis qui vitae ratione repellendus facere illum
        </p>
        </div>

        <div className="w-1/3 smmsm:w-screen smmsm:mt-[60vh] smmsm:ml-[-80vw]  smmsmm:mt-[73vh]">
          <img src={Map} className="w-[29vw] h-[46vh] bg-slate-900 smmsm:w-[80vw] smmsm:ml-[-10vw]" alt="Map" />
          <div className="w-[29vw] grid grid-cols-2 smmsm:grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 mt-[3vh]">
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

      </div>
      <div className="w-screen flex sm:flex-wrap overflow-x-auto mt-[5vh]">
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
