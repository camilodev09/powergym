"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Registrar GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const phoneNumber = "51966301171";

const WhatsAppLink = () => {
  const encodedMessage = encodeURIComponent("Deseo más información. Estoy interesado.");
  const btnRef = useRef(null);

  useGSAP(() => {
    // Animación de entrada (Pop-in) al cargar la página
    gsap.fromTo(
      btnRef.current,
      { scale: 0, opacity: 0, rotation: -45 },
      { 
        scale: 1, 
        opacity: 1, 
        rotation: 0, 
        duration: 0.8, 
        ease: "back.out(1.5)", 
        delay: 1 // Aparece 1 segundo después de que carga la web
      }
    );
  }, []);

  return (
    <div ref={btnRef} className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
      <Link
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex justify-center items-center"
      >
        {/* Efecto de Pulso/Radar continuo */}
        <span className="absolute w-full h-full rounded-full bg-[#CCFF00] opacity-40 animate-ping"></span>
        
        {/* Botón Principal */}
        <span className="relative flex justify-center items-center bg-[#CCFF00] p-4 rounded-full border-2 border-[#141414] shadow-[0_10px_30px_rgba(204,255,0,0.3)] transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#d4ff33]">
          <FaWhatsapp size={32} className="text-[#0A0A0A]" />
        </span>
      </Link>
    </div>
  );
};

export default WhatsAppLink;
