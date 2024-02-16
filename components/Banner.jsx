import Image from "next/image";
import Formulary from "./Formulary";

const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-gray-950 "  data-aos="fade-down"  >
      <div className="flex flex-row  justify-center items-center">

        <div className="flex flex-col mdl:flex-row ">

         {/*bloque1 */}
          <div className="flex flex-row">
            <div className=" flex  justify-start    md:justify-center items-start">
              <div className="md:hidden xl:flex flex-row" data-aos="fade-right" >
                <img
                  src="/assets/muscle1.png"
                  alt="My Image"
                  className=" h-[340px] w-[400px] md:w-full md:h-[600px]"
                />
              </div>
            </div>
             {/*bloque2 */}
            <div className="flex flex-col justify-center items-center px-1 md:px-3 pl-2 pt-12 md:pt-20  lg:pt-0 pb-28 gap-2">
              <h1 className="hidden md:flex text-white font-titleFont text-2xl md:text-4xl text-center font-bold px-2 md:px-8 lg:px-10">
                ¡No te pierdas este super descuento!
              </h1>

              <h2 className="flex md:hidden text-white font-titleFont text-2xl md:text-4xl text-center font-bold ">
                ¡No te lo pierdas!
              </h2>
              <Image
                src="/assets/501.png"
                alt="My Image"
                width={456}
                height={200}
                data-aos="zoom-in"
              />
              <p className="text-white font-bodyFont text-sm md:text-1xl text-center font-semibold px-0  lg:mdl:px-20  mx-8  md:mx-20">
              Alcanza tu máximo "prime" este invierno <br />
              </p>
              <p className="hidden md:flex text-white text-base md:text-1xl text-center">
               
                Ven tenemos el mejor staff 
                <br />
              </p>
            </div>
          </div>
           {/*bloque3 */}
          <div className=" justify-center items-center  hidden md:flex  ">
            
              <Formulary />
           
          </div>

        </div>
        


      </div>
    </div>
  );
};

export default Banner;
