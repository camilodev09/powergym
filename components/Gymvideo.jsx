
import React from 'react'


const Gymvideo = () => {
  return (
    <div className='px-5 justify-center items-center bg-[#010108] flex flex-col p-20'
    data-aos="fade-up"
    >
         <h3 className=' text-center pb-10 md:pb-20 font-semibold text-yellow-300 text-xl md:text-4xl w-full' data-aos="zoom-in" >¡Que Nada te detenga este verano!</h3>
         <video src="./assets/gym-video.mp4" width={800} height={400} controls autoPlay className='justify-center items-center ' ></video>
    </div>
  )
}

export default Gymvideo