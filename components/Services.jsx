import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-white pt-10 md:pt-14 mt-40 md:mt-20 pb-20 md:pb-40 xl:px-20 ">
      <h2 className="flex font-titleFont text-3xl md:text-4xl lg:text-4xl font-semibold md:font-bold text-gray-800 justify-center items-center text-center p-3 gap-1 md:mx-20 lgl:mx-16">
        ¿Buscas un lugar para mejorar tu salud y estado físico?
      </h2>
      <h3 className="flex font-titleFont text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold text-yellow-400 justify-center items-center text-center lgl:mx-16">
        ¡No busques más!
      </h3>

      <div className="grid grid-cols-1 xl:grid-cols-3  lg:px-40 xl:px-0 pt-20 md:pt-40  gap-5 p-4 md:p-8 ">
  
         {/*divide */}
        
          <div className="flex flex-col mdl:flex-row xl:flex-col  justify-center items-center bg-gray-100 p-1 md:p-4 lgl:pt-3 rounded-md w-full">

             <Image
                src="/assets/services2.png"
                alt="My Image"
                width={366}
                height={200}
                className="h-[230px]"
              />
            
             <span className="w-full pt-2 md:p-7 gap-2">
              <h3 className="flex font-titleFont text-2xl md:text-3xl lg:text-3xl font-semibold md:font-bold text-gray-800 justify-center items-center text-center  gap-2 p-1  md:p-2">
                Personal <span className="text-yellow-400"> calificado </span>
              </h3>
              <p className="w-full flex font-bodyFont text-base md:text-1xl lg:text-1xl font-medium text-gray-600   lg:text-start  md:px-3 mdl:px-0 ">
                Nuestro equipo de entrenadores altamente capacitados están aquí
                para brindarte la orientación y motivación que necesitas para
                alcanzar tus objetivos.Desde la pérdida de peso hasta el aumento
                de masa muscular.¡Cuenta con nosotros!
              </p>
             </span>
            

          </div>
        
          {/*divide */}
    
          <div className="flex flex-col mdl:flex-row xl:flex-col  justify-center items-center bg-gray-100 p-1 md:p-4 lgl:pt-3 rounded-md w-full">
              <Image
                src="/assets/services3.png"
                alt="My Image"
                width={360}
                height={400}
                className=" h-[230px] flex"
              />
           
            <span className="w-full pt-2 md:p-7 gap-2 ">
              <h3 className=" font-titleFont text-2xl md:text-3xl lg:text-3xl font-semibold md:font-bold text-gray-800 justify-center items-center text-center  gap-2 p-1  md:p-2">
                Smart  <span className="text-yellow-400"> diet</span>
              </h3>
              <p className="w-full flex font-bodyFont text-base md:text-1xl lg:text-1xl font-medium text-gray-600   text-start  md:px-3 mdl:px-0 ">
                Además de nuestras clases y equipos, también ofrecemos planes de
                nutrición personalizados y asesoramiento para ayudarte a
                alcanzar tus objetivos de manera efectiva.Una dieta saludable es
                clave para mantener una buena salud y un estado físico óptimo.
              </p>
            </span>
           </div>

      
       {/*divide */}
       
          <div className="flex flex-col mdl:flex-row xl:flex-col  justify-center items-center bg-gray-100 p-1 md:p-4 lgl:pt-3 rounded-md">
              <Image
                src="/assets/services1.png"
                alt="My Image"
                width={366}
                height={400}
                className="h-[230px] flex"
              />
           
             <span className="w-full pt-2 md:p-7  gap-2">
              <h3 className="flex flex-row font-titleFont text-2xl md:text-3xl lg:text-3xl font-semibold md:font-bold text-gray-800 justify-center items-center text-center  gap-2 p-1  md:p-2">
                Vuelvete
                <span className="text-yellow-400">miembro </span>
              </h3>

              <p className="w-full flex font-bodyFont text-base md:text-1xl lg:text-1xl font-medium text-gray-600   text-start  md:px-3 mdl:px-0 ">
                Al unirte a PowerGym, tendrás acceso a nuestros entrenadores,
                clases y equipos de alta calidad. Además, tendrás acceso a una
                comunidad de miembros comprometidos y motivados que te apoyarán
                en tu viaje de estado físico.
              </p>
             </span>
          </div>
       
        {/*divide */}
      </div>
    </div>
  );
};

export default Services;
