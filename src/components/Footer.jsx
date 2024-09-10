import spiderFace from "../assets/iconePaginaWeb.png";
import logoMarvel from "../assets/logoMarvel.png";



export default function Footer() {
  return (
    <>
      <div className="container bg-slate-700 max-w-full max-h-full mt-7 flex items-center p-7  ">
        <div className="flex justify-between items-center">
       
       <div className="flex items-center gap-6">
       <img className="w-[25%] lg:w-[7%] " src={spiderFace} alt="" />
       <img className="w-[25%]  lg:w-[9%]" src={logoMarvel} alt="" />

       </div>
       
        <h1 className="font-mukta font-bold   ">2021 Sony Interactive Entertainment  Inc. Todos os direitos reservados.</h1>
        </div>

       
      </div>
    </>
  );
}
