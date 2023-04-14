import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaUser } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="bg-gray-950 flex justify-between md:px-10 h-14 sticky top-0 z-50  w-full mx-auto  ">
      <div className="">
        <Link href={"/"}>
          <Image
            src="/assets/logoletratrue.png"
            alt="My Image"
            width={200}
            height={100}
            className="rounded-md pt-1"
          />
        </Link>
      </div>
      <div className="flex gap-1 p-4">
        <Link href={"/Contact"} className=" ">
          <span>
            <FaPhone
              size={32}
              className="border-[1px] border-white rounded-full px-1 animate-pulse"
            />
          </span>
        </Link>
        <Link href={"/Store"} className="  px-3">
          <span>
            <FaUser
              size={32}
              className="border-[1px] border-white rounded-full px-1 "
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
