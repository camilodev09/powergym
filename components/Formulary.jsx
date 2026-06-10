"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Formulary = () => {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const msgRef = useRef(null);

  // Animación de aparición para los mensajes de alerta
  useGSAP(() => {
    if (errMsg || successMsg) {
      gsap.fromTo(
        msgRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [errMsg, successMsg]);

  const handleSend = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrMsg("");
    setSuccessMsg("");

    const username = e.target.username.value;
    const lastname = e.target.lastname.value;
    const phonenumber = e.target.phonenumber.value;
    const email = e.target.email.value;  
    const message = e.target.message.value;

    try {
      const response = await fetch("https://server-portfolio-beru.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          lastname,
          phonenumber,
          email,
          message,
        }),
      });

      if (response.ok) {
        setSuccessMsg(`¡Gracias ${username}, tu solicitud está en camino!`);
        e.target.reset();
        
        setTimeout(() => {
          setSuccessMsg("");
        }, 5000);
      } else {
        throw new Error("Ocurrió un error al enviar. Intenta de nuevo.");
      }
    } catch (error) {
      setErrMsg(error.message || "Error de conexión. Revisa tu red.");
    } finally {
      setIsLoading(false);
    }
  };

  // Clases reutilizables para mantener consistencia en los inputs
  const inputStyles = "w-full bg-[#0A0A0A] border border-white/10 rounded-[4px] py-3 px-4 text-[#FFFFFF] placeholder:text-[#A3A3A3]/40 focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-all duration-300";
  const labelStyles = "block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5";

  return (
    // CONTENEDOR AUTÓNOMO: Añadido px-6 (móvil) y md:p-10 (desktop). Fondo y bordes incluidos.
    <div className="w-full max-w-xl mx-auto bg-[#141414] px-6 py-8 md:p-10 rounded-2xl border border-white/5 transition-all duration-500 focus-within:border-[#CCFF00]/50 focus-within:shadow-[0_0_25px_rgba(204,255,0,0.05)]">
      <form
        onSubmit={handleSend}
        className="w-full flex flex-col gap-5"
      >
        <div className="text-center mb-2">
          <h3 className="font-titleFont text-2xl md:text-3xl font-bold text-[#FFFFFF] uppercase tracking-tight">
            Asegura tu <span className="text-[#CCFF00]">Lugar</span>
          </h3>
          <p className="text-[#A3A3A3] text-sm mt-1">Completa tus datos y un asesor te contactará de inmediato.</p>
        </div>

        {/* Notificaciones de Éxito / Error */}
        {(errMsg || successMsg) && (
          <div 
            ref={msgRef}
            className={`py-3 px-4 rounded-[4px] text-center text-sm font-medium tracking-wide ${
              errMsg 
                ? "bg-red-500/10 border border-red-500/50 text-red-400" 
                : "bg-[#CCFF00]/10 border border-[#CCFF00]/50 text-[#CCFF00]"
            }`}
          >
            {errMsg || successMsg}
          </div>
        )}

        {/* Fila: Nombre y Apellido */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 flex flex-col">
            <label className={labelStyles} htmlFor="username">Nombre</label>
            <input
              name="username"
              className={inputStyles}
              type="text"
              placeholder="Ej. Carlos"
              required
              disabled={isLoading}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <label className={labelStyles} htmlFor="lastname">Apellido</label>
            <input
              name="lastname"
              className={inputStyles}
              type="text"
              placeholder="Ej. Mendoza"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Fila: Celular */}
        <div className="w-full flex flex-col">
          <label className={labelStyles} htmlFor="phonenumber">Celular</label>
          <input
            name="phonenumber"
            className={inputStyles}
            type="tel"
            placeholder="+1 234 567 8900"
            required
            disabled={isLoading}
          />
        </div>

        {/* Fila: Email */}
        <div className="w-full flex flex-col">
          <label className={labelStyles} htmlFor="email">Email</label>
          <input
            name="email"
            className={inputStyles}
            type="email"
            placeholder="tu@correo.com"
            required
            disabled={isLoading}
          />
        </div>

        {/* Fila: Mensaje */}
        <div className="w-full flex flex-col">
          <label className={labelStyles} htmlFor="message">¿Cuáles son tus objetivos?</label>
          <textarea
            name="message"
            className={`${inputStyles} resize-none`}
            rows="3"
            placeholder="Quiero aumentar masa muscular, bajar de peso..."
            required
            disabled={isLoading}
          ></textarea>
        </div>

        {/* Botón de Submit */}
        <div className="w-full mt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-14 bg-[#CCFF00] text-[#0A0A0A] font-titleFont font-black text-lg md:text-xl uppercase tracking-widest rounded-[4px] hover:bg-[#d4ff33] hover:shadow-[0_0_25px_rgba(204,255,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isLoading ? "Procesando..." : "Contactar Ahora"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulary;