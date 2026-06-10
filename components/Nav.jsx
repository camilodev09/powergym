"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaUser } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Registrar GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const Nav = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    // Animación de caída (Drop-down) al cargar la página
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out" 
      }
    );
  }, []);

  return (
    <nav 
      ref={navRef} 
      className="bg-[#0A0A0A]/80 backdrop-blur-md flex justify-between items-center px-6 md:px-12 h-20 sticky top-0 z-50 w-full mx-auto border-b border-white/5 transition-all duration-300"
    >
      {/* Contenedor del Logo Responsivo */}
      <div className="relative w-[140px] md:w-[180px] h-[40px] md:h-[50px] flex items-center">
        <Link href="/" className="w-full h-full relative">
          <Image
            src="/assets/logoletratrue22.svg"
            alt="PowerGym Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
      </div>

      {/* Botones de Acción (Iconos) */}
      <div className="flex items-center gap-3 md:gap-4">
        
        {/* Botón Llamada */}
        <Link 
          href="tel:+51966301171"
          className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 hover:border-[#CCFF00] hover:bg-[#CCFF00] transition-all duration-300 hover:shadow-[0_0_15px_rgba(204,255,0,0.3)]"
          aria-label="Llamar ahora"
        >
          <FaPhone 
            size={16} 
            className="text-[#FFFFFF] group-hover:text-[#0A0A0A] transition-colors duration-300" 
          />
        </Link>

        {/* Botón Contacto / Email */}
        <Link 
          href="mailto:contacto@creazone.pe?subject=Información%20sobre%20planes%20PowerGym"
          className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 hover:border-[#CCFF00] hover:bg-[#CCFF00] transition-all duration-300 hover:shadow-[0_0_15px_rgba(204,255,0,0.3)]"
          aria-label="Enviar correo"
        >
          <FaUser 
            size={18} 
            className="text-[#FFFFFF] group-hover:text-[#0A0A0A] transition-colors duration-300" 
          />
        </Link>
        
      </div>
    </nav>
  );
};

export default Nav;
