"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { TbMessageDots } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registrar GSAP Plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const UseGym = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animación en cascada (stagger) para el contenido del CTA
    gsap.fromTo(
      ".cta-reveal",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0A0A0A] py-24 md:py-40 px-6 md:px-12 w-full flex justify-center items-center"
    >
      {/* Tarjeta de CTA (Call to Action) */}
      <div className="relative w-full max-w-5xl bg-[#141414] border border-white/5 rounded-2xl p-8 md:p-16 lg:p-20 text-center overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Glow de fondo sutil dentro de la tarjeta */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-[#CCFF00]/5 blur-[100px] pointer-events-none"></div>

        <h2 className="cta-reveal font-titleFont text-3xl md:text-5xl lg:text-6xl font-black text-[#FFFFFF] uppercase tracking-tight leading-[1.1] md:leading-tight mb-6">
          ¡Es momento de ponernos en forma, <br className="hidden lg:block" /> 
          alista la silueta para el <span className="text-[#CCFF00]">verano!</span>
        </h2>
        
        <div className="cta-reveal flex flex-col gap-1 mb-10">
          <p className="font-bodyFont text-base md:text-xl font-medium text-[#A3A3A3]">
            Comienza a entrenar hoy, adquiere nuestros planes.
          </p>
          <p className="font-bodyFont text-xs md:text-sm font-light text-[#A3A3A3]/50">
            *Válido por este mes
          </p>
        </div>

        {/* Botón de WhatsApp Refactorizado */}
        <div className="cta-reveal flex justify-center w-full">
          <Link
            href="https://api.whatsapp.com/send?phone=51966301171&text=Deseo%20más%20información.%20Estoy%20interesado."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-row items-center justify-center gap-3 bg-[#CCFF00] text-[#0A0A0A] font-titleFont font-black text-lg md:text-xl uppercase tracking-widest py-4 px-8 md:px-12 rounded-[4px] hover:bg-[#d4ff33] hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-all duration-300"
          >
            Escríbenos
            <TbMessageDots
              size={26}
              className="text-[#0A0A0A] transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default UseGym;