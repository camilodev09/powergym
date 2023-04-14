import Image from "next/image";
import Formulary from "./Formulary";

const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-gray-950">
      <div className="flex flex-row  justify-center items-center">
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-row">
            <div className=" flex justify-center items-center">
              <div className="md:hidden xl:flex flex-row">
                <img
                  src="/assets/muscle1.png"
                  alt="My Image"
                  className=" h-[340px] w-[400px] md:w-full md:h-[600px]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center px-6 md:px-3 pl-2">
              <h1 className="hidden md:flex text-white font-titleFont text-2xl md:text-4xl text-center font-bold">
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
              />
              <p className="text-white font-bodyFont text-sm md:text-2xl text-center font-semibold">
                Ven tenemos al mejor staff <br /> para desarrollar todo tu
                potencial
              </p>
              <p className="hidden md:flex text-white text-base md:text-1xl text-center">
                Alcanza tu maximo "prime" este invierno
                <br />
              </p>
            </div>
          </div>

          <div className=" justify-center items-center  hidden md:flex  ">
            <div className="justify-center items-center ">
              <Formulary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
