"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registrar GSAP Plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".footer-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          // FIX: Cambiamos "top 90%" por "top bottom" para garantizar que 
          // se dispare en móvil apenas asome en la pantalla.
          start: "top bottom", 
        },
      }
    );
  }, { scope: footerRef });

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      ref={footerRef} 
      className="bg-[#050505] border-t border-white/5 pt-16 md:pt-24 pb-12 md:pb-8 px-6 md:px-12 font-bodyFont overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
          
          {/* Bloque 1: Marca y Contacto */}
          <div className="footer-content flex flex-col gap-6">
            <Link href="/" className="inline-block w-[200px]">
              <Image
                width={200}
                height={100}
                src="/assets/logoletratrue22.svg"
                alt="Logo PowerGym"
                className="object-contain"
              />
            </Link>
            
            <div className="flex flex-col gap-2 text-sm text-[#A3A3A3] font-light tracking-wide mt-2">
              <p>Lima, Perú (+51) 966301171</p>
              <Link 
                href="https://www.creazone.pe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#CCFF00] transition-colors duration-300"
              >
                www.creazone.pe
              </Link>
              <p>contacto@creazone.pe</p>
            </div>

            {/* Redes Sociales */}
            <div className="flex gap-4 mt-4">
              <Link 
                href="https://www.facebook.com/profile.php?id=100065758831949"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white hover:border-[#CCFF00] hover:text-[#0A0A0A] hover:bg-[#CCFF00] transition-all duration-300 hover:shadow-[0_0_15px_rgba(204,255,0,0.3)]"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link 
                href="https://www.tiktok.com/@creazone.pe"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white hover:border-[#CCFF00] hover:text-[#0A0A0A] hover:bg-[#CCFF00] transition-all duration-300 hover:shadow-[0_0_15px_rgba(204,255,0,0.3)]"
              >
                <FaTiktok size={20} />
              </Link>
              <Link 
                href="https://api.whatsapp.com/send?phone=51966301171&text=Deseo%20más%20información.%20Estoy%20interesado."
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white hover:border-[#CCFF00] hover:text-[#0A0A0A] hover:bg-[#CCFF00] transition-all duration-300 hover:shadow-[0_0_15px_rgba(204,255,0,0.3)]"
              >
                <FaWhatsapp size={22} />
              </Link>
            </div>
          </div>

          {/* Bloque 2: Enlaces Rápidos */}
          <div className="footer-content flex flex-col pt-2">
            <h3 className="text-sm font-semibold text-[#FFFFFF] tracking-widest uppercase mb-4">
              Acerca de POWERGYM
            </h3>
            <div className="w-full h-px bg-white/10 mb-6"></div>
            
            <ul className="flex flex-col gap-4 text-sm font-medium text-[#A3A3A3]">
              <li>
                <span className="relative hover:text-[#CCFF00] transition-colors duration-300 group cursor-pointer inline-block">
                  Necesito más información
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
              <li>
                <span className="relative hover:text-[#CCFF00] transition-colors duration-300 group cursor-pointer inline-block">
                  ¿Necesito una membresía Premium?
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
              <li>
                <span className="relative hover:text-[#CCFF00] transition-colors duration-300 group cursor-pointer inline-block">
                  ¿Necesitas el servicio completo?
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bloque 3: Copyright Bar */}
        <div className="footer-content flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8 text-center md:text-left text-xs text-[#A3A3A3]/60 font-light tracking-wide">
          <p>Copyright © {currentYear} Creazone. Todos los derechos reservados.</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Términos y Condiciones</span>
            <span className="hover:text-white cursor-pointer transition-colors">Políticas de Privacidad</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;