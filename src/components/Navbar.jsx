import { GiSpiderMask } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MenuMobile from "./Menu";
import Wallpapers from "./wallpapers";


export default function Navbar() {
  const [loading, setLoading] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);

    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="  mt-3 flex justify-between items-center w-full">
          <div className="flex items-center w-full gap-1 ml-[2%]  lg:gap-8 ml-[5%]  ">
            <GiSpiderMask className="from-neutral-50  ml-6 hover:text-red-600 transition ease-in duration-150 hover:scale-125  transform-gpu text-[70px]  lg:text-[90px]" />

            <a
              href="#"
              className="lg: font-mukta font-normal not-italic uppercase text-gray-400 hidden lg:block "
            >
              Inicio
            </a>
            <a
              href="#"
              className="font-mukta font-normal not-italic uppercase text-gray-400 hidden lg:block"
            >
              História
            </a>
            <a
              href="#"
              className="font-mukta font-normal not-italic uppercase text-gray-400 hidden lg:block"
            >
              Wallpapers
            </a>
          </div>

          <div className="flex items-center gap-6 mr-8">
            <FaFacebookF className=" text-gray-400 text-[23px] hover:text-red-600 transition ease-in-out duration-350  hover:translate-y-2  duration-300   " />
            <FaInstagram className="  text-gray-400 text-[23px] hover:text-red-600 transition ease-in-out duration-350 hover:translate-y-2  duration-300    " />
            <FaYoutube
              className=" text-gray-400 text-[23px] hover:text-red-600 transition ease-in-out duration-350 hover:translate-y-2  duration-300"
              text-gray-400
            />
            <MenuMobile />
          </div>
        </div>
      ) : (
        <ChakraProvider>
          <Loading />
          <Wallpapers />
          <MenuMobile />
        </ChakraProvider>
      )}

   
    </>
  );
}
