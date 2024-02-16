import { FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#080808] pt-10 "
   
    >
      <div className="grid grid-cols-1 md:grid-cols-2"  data-aos="fade-up">
        <div className="grid  mx-10">
          <Image
            width={200}
            height={100}
            src="/assets/logoletratrue22.svg"
            alt="imgSlider3"
          />
          <span class="px-2">
            <p class="text-gray-400">Lima, Perú (+51) 966301171</p>
           <Link href="https:/www.creazone.pe"> <p class="text-gray-400 underline">www.creazone.pe</p></Link>
            <p class="text-gray-400">contacto@creazone.pe</p>
            <p class="text-gray-400">Copyright © 2023</p>
          </span>
          <div className="flex gap-4  pt-5  mb-10">
            

            <Link href='https://www.facebook.com/profile.php?id=100065758831949' >
            <span className="bannerIcon ">
              <FaFacebookF size={30} />
            </span>
            </Link>

      
            <Link href="https://www.tiktok.com/@creazone.pe">
            <span className="bannerIcon">
              <FaTiktok size={30} />
            </span>
            </Link>
            
            <Link href="https://api.whatsapp.com/send?phone=51966301171&text=Deseo%20más%20información.%20Estoy%20interesado.">
             <span className="bannerIcon">
              <FaWhatsapp size={32} />
             </span>
            </Link>
            
          </div>
        </div>
        <div className="grid p-2 pb-10 px-9">
          <h3 className="text-1xl md:text-xl   text-gray-200 tracking-wider ">
            Acerca de POWERGYM
          </h3>
          <hr />
          <ul className="  flex flex-col gap-4 font-titleFont font-medium  py-0  overflow-hidden py-30">
            <li>
              <span className="w-full text-xs md:text-base relative hover:text-yellow-300 duration-300 group cursor-pointer">
                Necesito mas información
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-xs md:text-base relative hover:text-yellow-300 duration-300 group cursor-pointer">
                ¿Necesito una membresía Premium?
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-xs md:text-base relative hover:text-yellow-300 duration-300 group cursor-pointer">
                ¿Necesitas el servicio completo?
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
