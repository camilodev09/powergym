import Formulary from "./Formulary";

const Form = () => {
  return (
    <div className=" px-20 justify-center items-center relative  top-44 left-1  flex md:hidden">
      <div className="w-[90%] flex justify-center items-center  absolute px-4 mx-4 right-2" >
        <Formulary />
      </div>
    </div>
  );
};

export default Form;
