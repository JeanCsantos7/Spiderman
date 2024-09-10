import AranhaVetor from "../assets/LogoAranha.png";
import { Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <div className="container max-w-full h-[1920px] bg-[#d41010] m-auto animate-float">
        <img className="w-[250px] m-auto pt-[200px]" src={AranhaVetor} alt="" />
        <h1 className=" font-mukta text-2xl text-white  text-center mt-8  ">Loading...</h1>
        
        <div className=" flex justify-center items-center mt-9">
        <Spinner
          thickness="3px"
          speed="0.75s"
          emptyColor="red"
          color="white"
          size="xl"
        />
        </div>
      
      </div>
    </>
  );
}
