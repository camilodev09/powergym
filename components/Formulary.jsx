"use client";

import { useState } from "react";

const Formulary = () => {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showSuccessMsg, setShowSuccessMsg] = useState(false); // Nuevo estado

  const handleSend = async (e) => {
    e.preventDefault();


    const username = e.target.username.value;
    const lastname =  e.target.lastname.value;
    const phonenumber = e.target.phonenumber.value;
    const email =  e.target.email.value;
    const message = e.target.message.value;

    try {

      const response = await fetch("https://server-portfolio-beru.onrender.com/contact",{
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
      

      })
      console.log(response);

      if (response.ok) {
        setSuccessMsg(
          `Thank you dear ${e.target.username.value}, Your Messages has been sent Successfully!`
        );
        setErrMsg("");
        e.target.reset();
        setShowSuccessMsg(true);

        setTimeout(() => {
          setShowSuccessMsg(false);
          setSuccessMsg(""); // Limpiar el mensaje de éxito después de desaparecer
        }, 5000);
      } else {
        throw new Error("Something went wrong with the request.");
      }
    } catch (error) {
      setErrMsg(error.message);
      setSuccessMsg("");
    }
  };

  return (
    <div className="  gap-4 p-4 rounded-lg items-center justify-center">
      <form
        onSubmit={handleSend}
        className=" flex flex-col gap-3 lgl:gap-6 py-2 lgl:py-5 bg-white p-4 rounded-md shadow-todoShodow pt-8 md:pt-0 shadow-shadowOne"
      >
        <h3 className=" pb-4 text-center font-titleFont font-semibold text-gray-800">
          ¡Contáctanos adquiere los mejores planes!
        </h3>
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gray-300 shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}

        <div className="flex flex-row gap-2">
          <div className="w-[50%] lgl:w-1/2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-900  tracking-wide"
              htmlFor="username"
            >
              Nombre*
            </label>
            <input
              name="username"
              className={`${
                errMsg === "Username is required!" && "outline-moradito"
              } bg-gray-100 rounded-md py-2`}
              type="text"
              required
            />
          </div>
          <div className="w-[47%] lgl:w-1/2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-900  tracking-wide"
              htmlFor="lastname"
            >
              Apellido*
            </label>
            <input
              name="lastname"
              className={`${
                errMsg === "Username is required!" && "outline-moradito"
              } bg-gray-100 rounded-md py-2 `}
              type="text"
              required
            />
          </div>
        </div>

        <div className="w-full  flex flex-col gap-1">
          <label
            className="text-sm text-gray-900  tracking-wide"
            htmlFor="phonenumber"
          >
            Celular*
          </label>
          <input
            name="phonenumber"
            className={`${
              errMsg === "Phone number is required!" && "outline-designColor"
            } bg-gray-100 rounded-md py-2`}
            type="text"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="text-sm text-gray-900 tracking-wide"
            htmlFor="email"
          >
            Email*
          </label>
          <input
            name="email"
            className={`${
              errMsg === "Please give your Email!" && "outline-moradito"
            } bg-gray-100 rounded-md py-2`}
            type="email"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-900  tracking-wide">Mensaje*</p>
          <textarea
            name="message"
            className={`${
              errMsg === "Message is required!" && "outline-lightText"
            } bg-gray-100 rounded-md py-2`}
            cols="30"
            rows="2"
          ></textarea>
        </div>
        <div className="w-full">
          <button
            onSubmit={handleSend}
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-moradito border-transparent"
          >
            Contactar Ahora
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulary;
