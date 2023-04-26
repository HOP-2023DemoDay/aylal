import React from 'react'
import img from "../img/img3.png"

export const news = () => {
  return (
    <div className='2xl:mt-[10vh] xl:mt-[7vh] lg:mt-[6vh] md:mt-[4vh] sm:mt-[5vh] mt-[6vh] font-Poppins'>
        <img src={img} alt="" className='  2xl:w-[650px] 2xl:h-[400px] lg:w-[300px] lg:h-[200px] md:h-[190px] md:w-[300px] sm:w-[300px] sm:h-[180px] w-[270px]' />
        <div className='mt-[-20vh] ml-[15px]'>
        <div className='font-bold text-[15px] mt-[20px] text-white w-[200px]  2xl:text-[30px] 2xl:w-[400px] lg:w-[250px] md:text-[17px] md:w-[200px] sm:text-[15px] sm:w-[165px] sm:mt-[20px] '>Wakatobi beach is a paradise for coral reets in indonesia</div>
        <div className=' font-bold text-[8px]  text-white 2xl:text-[17px] xl:text-[12px] lg:text-[10px] md:text-[12px] sm:text-[8px]  '>Yogyakarta, Indonesia</div>
        <button className='rounded-[8px] w-[120px] h-[40px] text-white text-[16px] font-bold bg-Button mt-[3vh] 2xl:w-[200px] 2xl:h-[60px] 2xl:text-[25px] lg:w-[100px] lg:h-[35px] lg:text-[15px]   '>View More</button>
        </div>
    </div>
  )
}
export default news