import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import {  TbMessageDots} from "react-icons/tb";
import Image from "next/image";

const UseGym = () => {

  return (
    <div className="bg-[#040303] grid grid-cols-1  xl:grid-cols-1 pt-20 lg:pt-40 justify-center items-center  w-full   md:px-20 lg:px-40  pb-40">
     
      <div className="bg-gradient-to-t from-[#040303] via-[#181a1c] to-[#171818]     pb-4 md:pb-10">
        
         <div className=" items-center justify-center w-full grid">
            
         

           <h2 className="px-6 flex font-titleFont text-3xl md:text-4xl lg:text-3xl lgl:text-6xl font-semibold md:font-bold  justify-center items-center  text-center pt-20 pb-10 w-full  bg-gradient-to-l from-red-500 via-red-500 to-yellow-400 text-transparent bg-clip-text">
            ¡Es momento de ponernos en forma,
            alista la silueta para el verano!
           </h2>
             <div className="flex flex-col md:flex-row">
               <div className="flex flex-col  justify-center items-center w-full p-2 gap-2">
                 <div className="flex flex-col justify-center items-center  rounded-sm    p-4   md:px-10 xl:px-40 ">
                      
                     <p className="flex font-bodyFont text-sm md:text-base lgl:text-xl font-normal text-gray-400 justify-center items-start text-center md:text-center px-1 md:px-2">
                     Comienza a entrenar hoy, adquiere nuestros planes
                     </p>
                     <p className="flex font-bodyFont text-xs md:text-sm lgl:text-xl font-base text-gray-500 justify-center items-start text-center md:text-center px-1 md:px-2">
                     *Válido por este mes
                     </p>
                 </div>
         
               </div>
             </div>
   
         </div>
          {/*division*/}
          <div className=" w-full  gap-4  rounded-lg items-center justify-center px-5  py-4 grid ">
            

         

               
            <div className="md:pt-4 flex justify-center items-center px-3">
              <Link
                href="https://api.whatsapp.com/send?phone=51966301171&text=Deseo%20más%20información.%20Estoy%20interesado."
                className="flex flex-row border-[1px] border-purple-400 hover:text-white hover:bg-gradient-to-br from-yellow-600 via-red-500 to-pink-700  fond-light md:font-bold text-sm md:text-base py-2  px-6  md:px-10 gap-1 rounded-md justify-center items-center "
                 >
                Escríbenos
               <TbMessageDots
                size={30}
                className="border-[1px] border-white rounded-full px-1 items-center justify-center dark:text-white"
               />
              </Link>
            </div>
          </div> 
     
     </div> 
    
   </div>
  );
};

export default UseGym;