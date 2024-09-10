import Logo from "../assets/logo spiderman.png";
import Spiderman from "../assets/Miles morales.png";

export default function Section1() {
  return (
    <>
      <div className="w-full h-full flex  items-center justify-start gap-[13%] flex-col  lg:flex-row">
       
          <span className="flex flex-col order-1 lg:order-[-1] ">
            <img className=" w-[79%] mt-[7%]  lg:w-[50%] ml-[8%]  " src={Logo} alt="" />
            <p className="font-mukta  mt-[1%]  text-gray-400 w-[80%] ml-[8%] text-[16px]  lg: text-lg w-[50%]  ml-[25%]">
              Na aventura mais recente do universo de Marvel's Spider-Man , o  
              adolescente Miles Morales está se adaptando à sua nova casa
              enquanto  segue os passos de seu mentor, Peter Parker, para
              se tornar um novo  Spider-Man.
            </p>
          </span>
          <img className=" mr-[6%] mt-6 w-[46%] lg:w-[22%] mt-1" src={Spiderman} alt="" />

        


 
      </div>
    </>
  );
}
