
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const phoneNumber = '51966301171'; // Reemplaza con el número de teléfono deseado

const WhatsAppLink = () => {
  const encodedMessage = encodeURIComponent('Deseo más información. Estoy interesado.');

  return (
    <Link
    href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`}
    className="fixed bottom-4 right-4  px-5 py-5 rounded-full z-10 transition-transform hover:scale-110"
   
  >
    <span className="bg-green-400 hover:bg-green-500 p-2 rounded-full justify-center items-center flex right-0 px-4 py-4" data-aos="zoom-in">
      {" "}
      <FaWhatsapp size={42} className="text-white" />{" "}
    </span>
  </Link>
  
  
  
  );
};

export default WhatsAppLink;
