"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registrar el plugin de Scroll para Next.js
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Services = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // 1. Animar los títulos al entrar en pantalla
    gsap.fromTo(
      ".service-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Se activa cuando el top de la sección llega al 80% del viewport
        },
      }
    );

    // 2. Efecto Stagger (cascada) para las tarjetas de servicios
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2, // Cada tarjeta entra 0.2s después de la anterior
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        },
      }
    );
  }, { scope: sectionRef });

  const cardsData = [
    {
      img: "/assets/services2.png",
      titleStart: "Personal",
      titleHighlight: "Calificado",
      desc: "Nuestro equipo de entrenadores altamente capacitados está aquí para brindarte la orientación y motivación que necesitas para alcanzar tus objetivos. Desde la pérdida de peso hasta el aumento de masa muscular. ¡Cuenta con nosotros!"
    },
    {
      img: "/assets/services3.png",
      titleStart: "Smart",
      titleHighlight: "Diet",
      desc: "Ofrecemos planes de nutrición personalizados y asesoramiento para ayudarte a alcanzar tus objetivos de manera efectiva. Una dieta saludable es clave para mantener una buena salud y un estado físico óptimo."
    },
    {
      img: "/assets/services1.png",
      titleStart: "Vuélvete",
      titleHighlight: "Miembro",
      desc: "Al unirte a PowerGym, tendrás acceso a nuestros entrenadores, clases y equipos de alta calidad. Además, tendrás acceso a una comunidad de miembros comprometidos y motivados que te apoyarán en tu viaje."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0A0A0A] py-24 md:py-32 px-6 md:px-12 w-full overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* ENCABEZADOS */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24 px-4">
          <h2 className="service-title font-titleFont text-3xl md:text-5xl lg:text-6xl font-black uppercase text-[#FFFFFF] tracking-tight mb-4 max-w-4xl leading-tight">
            ¿Buscas un lugar para mejorar tu salud y estado físico?
          </h2>
          <h3 className="service-title font-titleFont text-2xl md:text-4xl font-black uppercase text-[#CCFF00] tracking-widest">
            ¡No busques más!
          </h3>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {cardsData.map((card, index) => (
            <div 
              key={index}
              className="service-card group flex flex-col bg-[#141414] rounded-xl border border-white/5 overflow-hidden hover:border-[#CCFF00]/40 transition-colors duration-500"
            >
              {/* Contenedor de Imagen (Aspect Ratio para evitar distorsiones) */}
              <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                <Image
                  src={card.img}
                  alt={card.titleStart}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <h3 className="font-titleFont text-2xl md:text-3xl font-bold text-[#FFFFFF] uppercase tracking-wide mb-4">
                  {card.titleStart} <span className="text-[#CCFF00]">{card.titleHighlight}</span>
                </h3>
                <p className="font-bodyFont text-[#A3A3A3] text-sm md:text-base leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;