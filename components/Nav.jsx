"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaUser } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  // Array de referencias para animar los botones uno por uno
  const buttonsRef = useRef([]);

  useGSAP(() => {
    // 🌀 Animación TIER 2: Timeline Coreográfico
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Cae la barra de navegación completa
    tl.from(navRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1.2,
    })
    // 2. Entra el logo desde la izquierda
    .from(logoRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.8,
    }, "-=0.8") // Se adelanta un poco para mayor fluidez
    // 3. Entran los botones desde la derecha en cascada (stagger)
    .from(buttonsRef.current, {
      x: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    }, "-=0.6");

  }, []);

  return (
    // Contenedor full-width con fondo negro puro y efecto cristal
    <header 
      ref={navRef} 
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      {/* Contenedor interno para limitar el ancho en pantallas gigantes */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <div ref={logoRef} className="relative w-[140px] md:w-[180px] h-[40px] md:h-[50px] flex items-center">
          <Link href="/" className="w-full h-full relative block">
            <Image
              src="/assets/logoletratrue22.svg"
              alt="PowerGym Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* BOTONES DE ACCIÓN */}
        <div className="flex items-center gap-4 md:gap-5">
          
          {/* Botón 1: Llamada */}
          <Link 
            href="tel:+51966301171"
            ref={(el) => (buttonsRef.current[0] = el)}
            className="group flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/15 bg-white/5 hover:border-[#CCFF00] hover:bg-[#CCFF00] transition-colors duration-300 shadow-none hover:shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            aria-label="Llamar ahora"
          >
            <FaPhone 
              size={16} 
              className="text-white group-hover:text-black transition-colors duration-300" 
            />
          </Link>

          {/* Botón 2: Usuario / Contacto */}
          <Link 
            href="mailto:contacto@creazone.pe?subject=Información%20sobre%20planes%20PowerGym"
            ref={(el) => (buttonsRef.current[1] = el)}
            className="group flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/15 bg-white/5 hover:border-[#CCFF00] hover:bg-[#CCFF00] transition-colors duration-300 shadow-none hover:shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            aria-label="Enviar correo"
          >
            <FaUser 
              size={18} 
              className="text-white group-hover:text-black transition-colors duration-300" 
            />
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Nav;