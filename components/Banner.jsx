"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Formulary from "./Formulary";

// Setup GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const Banner = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Animación Fade-Up progresiva para los textos y assets
    gsap.fromTo(
      ".hero-reveal",
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out",
        delay: 0.1
      }
    );

    // 2. Animación Zoom-out lenta para dar sensación de peso a la imagen
    gsap.fromTo(
      ".hero-img",
      { scale: 1.05 },
      { 
        scale: 1, 
        duration: 1.5, 
        ease: "power2.out" 
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative flex flex-col lg:flex-row w-full bg-[#0A0A0A] min-h-screen overflow-hidden"
    >
      {/* =========================================
          BLOQUE IZQUIERDO: NARRATIVA & ESTADO (55%)
          ========================================= */}
      <div className="relative lg:w-[55%] flex flex-col justify-center px-6 md:px-12 pt-12 pb-8 lg:py-24 z-10 flex-grow">
        
        {/* Imagen de Fondo (Desktop: Absolute / Mobile: Inline por orden) */}
        <div className="order-3 lg:order-none relative w-full h-[350px] lg:h-auto lg:absolute lg:inset-0 z-[-1] mt-8 lg:mt-0 overflow-hidden">
          <Image
            src="/assets/muscle1.png"
            alt="Atleta en su Prime"
            fill
            priority
            className="hero-img object-cover object-top lg:object-center grayscale-[20%] contrast-125"
          />
          {/* Gradientes para fusionar la imagen con el fondo #0A0A0A */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent lg:bg-gradient-to-r lg:from-[#0A0A0A]/60 lg:via-[#0A0A0A]/80 lg:to-[#0A0A0A]" />
        </div>

        {/* Contenedor de Contenido (Flex Order maneja la estructura Mobile vs Desktop) */}
        <div className="flex flex-col z-10 lg:pl-8">
          
          {/* Badge 50% */}
          <div className="hero-reveal order-2 lg:order-1 mb-6 lg:mb-8 flex justify-center lg:justify-start">
            <div className="relative w-[280px] h-[100px] lg:w-[350px] lg:h-[130px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              <Image
                src="/assets/501.png"
                alt="50% de Descuento"
                fill
                className="object-contain object-center lg:object-left"
                priority
              />
            </div>
          </div>

          {/* Título Desktop (H1) */}
          <h1 className="hero-reveal hidden lg:block order-2 text-6xl lg:text-7xl font-titleFont font-black uppercase text-[#FFFFFF] mb-8 leading-[1.05] tracking-tight">
            ¡No te pierdas este <br />
            <span className="text-[#CCFF00]">super descuento!</span>
          </h1>

          {/* Título Mobile (H2) */}
          <h2 className="hero-reveal lg:hidden order-1 text-4xl text-center font-titleFont font-black uppercase text-[#FFFFFF] mb-4 leading-tight tracking-tight">
            ¡No te lo <br />
            <span className="text-[#CCFF00]">pierdas!</span>
          </h2>

          {/* Textos de Apoyo */}
          <div className="hero-reveal order-4 lg:order-3 text-center lg:text-left mt-6 lg:mt-0">
            <p className="font-bodyFont text-lg md:text-2xl font-medium text-[#FFFFFF] mb-2 tracking-wide">
              Alcanza tu máximo "prime" este invierno.
            </p>
            <p className="font-bodyFont text-base md:text-lg text-[#A3A3A3] font-light">
              Ven, tenemos el mejor staff.
            </p>
          </div>

        </div>
      </div>

      {/* =========================================
          BLOQUE DERECHO: INTENCIÓN & ACCIÓN (45%)
          ========================================= */}
      <div className="lg:w-[45%] flex flex-col justify-center items-center p-6 md:p-12 z-10 bg-[#0A0A0A]">
        
        {/* Contenedor del Formulario con Micro-interacción (Glow on Focus) */}
        <div className="hidden md:flex hero-reveal  w-full max-w-md bg-[#141414] p-8 md:p-10 rounded-2xl border border-white/5 transition-all duration-500 focus-within:border-[#CCFF00] focus-within:shadow-[0_0_25px_rgba(204,255,0,0.1)]">
          <Formulary />
        </div>
        
      </div>

    </section>
  );
};

export default Banner;
