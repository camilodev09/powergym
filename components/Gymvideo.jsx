
"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registrar el plugin de Scroll para Next.js
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Gymvideo = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // 1. Animación del título (Fade up)
    gsap.fromTo(
      ".video-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // 2. Animación del contenedor del video (Zoom in suave)
    gsap.fromTo(
      ".video-container",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2, // Empieza un poco después del título
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0A0A0A] py-24 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center">
        
        {/* Título */}
        <h3 className="video-title font-titleFont text-3xl md:text-5xl lg:text-6xl font-black uppercase text-[#CCFF00] tracking-tight text-center mb-10 md:mb-16">
          ¡Que nada te detenga <br className="md:hidden" /> este verano!
        </h3>

        {/* Contenedor Responsivo del Video */}
        <div className="video-container relative w-full max-w-5xl aspect-video bg-[#141414] rounded-xl md:rounded-2xl border border-white/5 shadow-[0_0_40px_rgba(204,255,0,0.03)] overflow-hidden">
          <video 
            src="/assets/gym-video.mp4" 
            controls 
            preload="metadata"
            className="w-full h-full object-cover outline-none"
          >
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>

      </div>
    </section>
  );
};

export default Gymvideo;