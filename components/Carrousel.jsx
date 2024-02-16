"use client";

import React, { useState } from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { onClick } = props;
  return <div onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;

  return <div onClick={onClick}></div>;
}

const Carrousel = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
    beforeChange: (prev, next) => {
      setDocActive(next);
    },

    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "2px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <div className="pt-16  pb-12 md:pb-40 bg-gray-50  lg:px-20">
      <h1 className="text-2xl md:text-4xl  text-gray-800 py-5 font-titleFont font-extrabold  w-30 md:w-100 text-center rounded-sm p-1 md:p-7 pb-10 mb-10"  data-aos="zoom-in">
        ¡Ellos ya comenzarón a lograr sus objetivos!
      </h1>
      <Slider {...settings} className="pt-8 ">
        <div className="justify-center items-center flex ">
          <img
            className=" rounded-lg object-cover "
            src="/assets/testim1.png"
            alt="imgSlider2"
            data-aos="flip-left"
          />
          <h3 className="text-center text-2xl text-gray-800 font-medium font-titleFont ">
            Juana Salinas
          </h3>
          <p className="text-start text-gray-800 font-bodyFont mx-5">
            "Empecé a ir al gym después de tener a mi segundo hijo, y ha sido
            una de las mejores decisiones que he tomado.Me ha ayudado a
            recuperar mi fuerza y mi resistencia, y me ha dado un tiempo para mí
            en el que puedo enfocarme en mi salud y bienestar.
          </p>
        </div>
        <div className="justify-center items-center flex">
          <img
            className="rounded-lg object-cover"
            src="/assets/testim2.png"
            alt="imgSlider3"
            data-aos="flip-left"
          />
          <h3 className="text-center text-2xl text-gray-800 font-medium font-titleFont">
            Anita Correa
          </h3>
          <p className="text-start text-gray-800 font-bodyFont mx-5">
            "Ir al gym me ha ayudado a tonificar mi cuerpo y a sentirme más
            segura de mí misma.Además, me encanta la sensación de liberación que
            siento después de una buena sesión de entrenamiento. Es como si todo
            el estrés desapareciera".
          </p>
        </div>
        <div className="justify-center items-center flex">
          <img
            className="rounded-lg object-cover"
            src="/assets/testim3.png"
            alt="imgSlider3"
            data-aos="flip-left"
          />

          <h3 className="text-center text-2xl text-gray-800 font-medium font-titleFont">
            Benji Lim
          </h3>
          <p className="text-start text-gray-800 font-bodyFont mx-5">
            "Cuando empecé a ir al gym regularmente, he notado una gran
            diferencia en mi físico y en mi estado de ánimo.Me siento más fuerte
            y con más energía todo el día. He conocido a mucha gente interesante
            y he hecho amigos nuevos en el gym"
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
