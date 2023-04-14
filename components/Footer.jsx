import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-950 pt-10 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid p-2">
          <img
            className="rounded-lg object-cover px-7"
            src="/assets/logoletratrue.png"
            alt="imgSlider3"
          />
          <span class="mx-10">
            <p class="text-gray-400">Lima- Peru (51) 969 597 945</p>
            <p class="text-gray-400">creazone.contact@gmail.com</p>
            <p class="text-gray-400">www.creazone.pe</p>
            <p class="text-gray-400">Copyright © 2021</p>
          </span>
          <div className="flex gap-4  pt-5 px-8 mb-10">
            <span className="bannerIcon">
              <FaFacebookF size={30} />
            </span>
            <span className="bannerIcon">
              <FaTiktok size={30} />
            </span>
            <span className="bannerIcon">
              <FaInstagram size={30} />
            </span>
          </div>
        </div>
        <div className="grid p-2 pb-10 px-9">
          <h3 className="text-1xl md:text-xl   text-yellow-300 tracking-wider ">
            Acerca del Proyecto
          </h3>
          <hr />
          <ul className="  flex flex-col gap-4 font-titleFont font-medium py-0  overflow-hidden py-30">
            <li>
              <span className="w-full text-sm md:text-lg relative hover:text-yellow-300 duration-300 group cursor-pointer">
                Este proyecto abarca desde la creación de la marca hasta la
                creación de la misma landing page.
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-sm md:text-lg relative hover:text-yellow-300 duration-300 group cursor-pointer">
                ¿Deseas solo adquirir esta plantilla?
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-sm md:text-lg  relative hover:text-yellow-300 duration-300 group cursor-pointer">
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
