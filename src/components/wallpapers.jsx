import wallpaper1 from "../assets/wallpaper1.jpg";
import wallpaper2 from "../assets/wallpaper2.png";
import wallpaper3 from "../assets/wallpaper3.jpg";
import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function Wallpapers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imagemSelecionada, setImagemSelecionada] = useState();
  const listaImagens = [
    { id: 1, imagem: wallpaper1 },
    { id: 2, imagem: wallpaper2 },
    { id: 3, imagem: wallpaper3 },
  ];

  function imagemClicada(id) {
    setImagemSelecionada(id);
    onOpen();
  }

  return (
    <>
      <div className="container bg-slate-800 max-w-full max-h-full mt-7 flex justify-center items-center">
        <div>
          <h1 className="font-spider mt-7 p-4 text-red-600 text-center text-3xl    lg:text-5xl">
            Wallpapers
          </h1>
          <h2 className="font-mukta text-gray-400 text-center text-[16px]  lg:text-lg">
            Screenshots em alta definição, clique nas imagens para habilitar o
            zoom.
          </h2>
          <span className="flex justify-center items-center gap-5 p-8 flex-col lg:flex-row">
            {listaImagens.map((item) => {
              return (
                <img
                  className=" rounded-[15px] animate-float cursor-pointer w-[75%] lg:w-[25%] "
                  src={item.imagem}
                  alt=""
                  onClick={() => imagemClicada(item.imagem)}
                />
              );
            })}
          </span>

          <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
            <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
            <ModalContent>
              <ModalBody className="flex flex-col ">
                <img
                  src={imagemSelecionada}
                  alt=""
                  className=" h-full flex justify-center items-center m-auto w-[90%] mt-[60%]  lg:w-[50%] mt-[7%]"
                />

                <ModalCloseButton className="ml-[49%] mt-3 " />
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
}
