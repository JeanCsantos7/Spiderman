import milesImagem from "../assets/MilesImagem.jpg";

export default function Historia() {
  return (
    <>
      <div className="container bg-slate-700 max-w-full max-h-full mt-7 flex flex-col lg:flex-row items-start ">
        <img
          className=" p-4 rounded-[35px] ml-[3%] hover:skew-y-12 ease-in-out duration-200 w-[95%] lg:w-[31%]"
          src={milesImagem}
          alt=""
        />

        <div className="flex flex-col">
          <h1 className="font-spider  p-3 text-red-600 mt-1 ml-3 text-3xl lg:text-5xl mt-7  ">
            Historia
          </h1>
          <p className="font-mukta text-gray-400  ml-3 p-3 w-[85%] text-[16px] lg:w-[60%]  text-base ">
            A história de Spider-Man: Miles Morales se passa um ano após os
            eventos do jogo original Spider-Man para PS4. Miles progrediu
            bastante, vestindo-se com sua própria versão em vermelho e preto da
            fantasia do Spider-Man para patrulhar as ruas de Nova York.
            Começando pouco antes do Natal, a história começa na casa de Miles
            no Harlem e apresenta o herói incipiente lidando com uma guerra de
            rua entre a Roxxon Energy Corporation e o exército criminoso de alta
            tecnologia conhecido como Underground, liderado por um vilão
            conhecido como o Tinkerer, no português conhecido como Consertador.
            Enquanto a mãe de Miles, Rio Morales, realiza um comício eleitoral
            para a Câmara Municipal, o Underground destrói a festa, levando as
            duas gangues a se confrontarem na ponte Braithwaite e deixando para
            Miles intervir e salvar aqueles em perigo.
          </p>
        </div>
      </div>
    </>
  );
}
