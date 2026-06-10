"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registrar GSAP Plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Carrousel = () => {
  const [dotActive, setDocActive] = useState(0);
  const sectionRef = useRef(null);

  // Animaciones de entrada GSAP
  useGSAP(() => {
    gsap.fromTo(
      ".testim-title",
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

    gsap.fromTo(
      ".testim-slider",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: sectionRef });

  const testimonials = [
    {
      name: "Juana Salinas",
      img: "/assets/testim1.png",
      text: "Empecé a ir al gym después de tener a mi segundo hijo, y ha sido una de las mejores decisiones que he tomado. Me ha ayudado a recuperar mi fuerza y resistencia, y me ha dado un tiempo para mí enfocada en mi salud.",
    },
    {
      name: "Anita Correa",
      img: "/assets/testim2.png",
      text: "Ir al gym me ha ayudado a tonificar mi cuerpo y a sentirme más segura de mí misma. Además, me encanta la sensación de liberación después de una buena sesión. Es como si todo el estrés desapareciera.",
    },
    {
      name: "Benji Lim",
      img: "/assets/testim3.png",
      text: "Desde que empecé a entrenar regularmente, he notado una gran diferencia en mi físico y estado de ánimo. Me siento más fuerte y con más energía todo el día. Además, he conocido a mucha gente increíble.",
    },
  ];

  const settings = {
    dots: true,
    arrows: false, // Quitamos las flechas vacías, diseño más limpio en móvil y desktop
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ marginTop: "30px" }}>
        <ul className="flex justify-center gap-3 m-0 p-0"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
          i === dotActive 
            ? "bg-[#CCFF00] scale-125 shadow-[0_0_10px_rgba(204,255,0,0.5)]" 
            : "bg-[#333333] hover:bg-[#555555]"
        }`}
      ></div>
    ),
  };

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0A0A0A] py-24 md:py-32 px-6 lg:px-12 w-full overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Título */}
        <div className="flex justify-center mb-16">
          <h2 className="testim-title font-titleFont text-3xl md:text-5xl font-black uppercase text-[#FFFFFF] text-center max-w-3xl leading-tight tracking-tight">
            ¡Ellos ya comenzaron a <br className="hidden md:block"/> lograr sus <span className="text-[#CCFF00]">objetivos!</span>
          </h2>
        </div>

        {/* Carrusel */}
        <div className="testim-slider cursor-grab active:cursor-grabbing">
          <Slider {...settings} className="px-2">
            {testimonials.map((testim, index) => (
              <div key={index} className="p-3 outline-none">
                <div className="flex flex-col bg-[#141414] border border-white/5 rounded-2xl p-6 md:p-8 h-full min-h-[380px] hover:border-[#CCFF00]/30 transition-colors duration-500">
                  
                  {/* Imagen y Nombre (Header de la Card) */}
                  <div className="flex items-center gap-5 mb-6 border-b border-white/10 pb-6">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={testim.img}
                        alt={`Testimonio de ${testim.name}`}
                        fill
                        className="rounded-full object-cover grayscale-[20%]"
                        sizes="80px"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl text-[#FFFFFF] font-titleFont font-bold uppercase tracking-wide">
                      {testim.name}
                    </h3>
                  </div>

                  {/* Texto del Testimonio */}
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-4xl text-[#CCFF00] opacity-20 font-serif">"</span>
                    <p className="text-[#A3A3A3] text-sm md:text-base font-bodyFont leading-relaxed relative z-10 pl-4">
                      {testim.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
        
      </div>
    </section>
  );
};

export default Carrousel;