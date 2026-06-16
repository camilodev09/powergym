"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Formulary from "./Formulary";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const Banner = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Textos: Fade-up
    gsap.fromTo(
      ".hero-reveal",
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out",
        delay: 0.2
      }
    );

    // 2. Imagen: Zoom-out muy sutil para no desestabilizar el encuadre
    gsap.fromTo(
      ".hero-img",
      { scale: 1.05 }, 
      { 
        scale: 1, 
        duration: 2, 
        ease: "power2.out" 
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      // 🛠️ CORRECCIÓN CRÍTICA: Cambiamos pt-20 por mt-20.
      // Esto empuja todo el bloque debajo del navbar (que mide h-20),
      // asegurando que la cabeza del atleta no se esconda bajo el menú.
      className="relative w-full min-h-[calc(100vh-80px)] flex flex-col lg:flex-row bg-black overflow-hidden mt-20"
    >
      {/* =========================================
          CAPA 0: IMAGEN DE FONDO
          ========================================= */}
      <div className="absolute top-0 left-0 w-full h-[60vh] lg:h-full lg:w-[65%] z-0 overflow-hidden">
        <Image
          src="/assets/muscle1.png"
          alt="Atleta en su Prime"
          fill
          priority
          /* Ajuste de encuadre: 
             object-top asegura que el recorte respete la parte superior (la cabeza).
             lg:object-[75%_top] la mueve un poco a la derecha en desktop para centrar el rostro.
          */
          className="hero-img object-cover object-top lg:object-[75%_top] grayscale-[20%] contrast-125"
        />
        
        {/* Gradientes oscuros para la fusión con el fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black lg:bg-gradient-to-r lg:from-black/20 lg:via-black/60 lg:to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden" />
      </div>

      {/* =========================================
          CAPA 1: CONTENIDO (FLEXBOX)
          ========================================= */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full h-full flex-grow">
        
        {/* BLOQUE IZQUIERDO: Textos (55%) */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-12 py-12 lg:py-24">
          
          <div className="hero-reveal mb-6 lg:mb-8 flex justify-center lg:justify-start">
            <div className="relative w-[260px] h-[90px] lg:w-[320px] lg:h-[110px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
              <Image
                src="/assets/501.png"
                alt="50% de Descuento"
                fill
                className="object-contain object-center lg:object-left"
                priority
              />
            </div>
          </div>

          <h1 className="hero-reveal hidden lg:block text-6xl lg:text-[4.5rem] font-titleFont font-black uppercase text-white mb-6 leading-[1.05] tracking-tight drop-shadow-2xl">
            ¡No te pierdas este <br />
            <span className="text-[#CCFF00]">super descuento!</span>
          </h1>

          <h2 className="hero-reveal lg:hidden text-4xl text-center font-titleFont font-black uppercase text-white mb-4 leading-tight tracking-tight drop-shadow-xl">
            ¡No te lo <br />
            <span className="text-[#CCFF00]">pierdas!</span>
          </h2>

          <div className="hero-reveal text-center lg:text-left mt-4 lg:mt-0">
            <p className="font-bodyFont text-lg md:text-xl font-semibold text-white mb-1 tracking-wide drop-shadow-md">
              Alcanza tu máximo "prime" este invierno.
            </p>
            <p className="font-bodyFont text-sm md:text-base text-gray-300 font-light drop-shadow-md">
              Ven, tenemos el mejor staff.
            </p>
          </div>

        </div>

        {/* BLOQUE DERECHO: Formulario (45%) */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-center px-6 md:px-12 pb-12 lg:py-24">
          <div className="hero-reveal w-full max-w-md">
            <Formulary />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;