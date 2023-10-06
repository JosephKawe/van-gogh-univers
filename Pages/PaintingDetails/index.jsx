/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../data.json";
import Header from "../../components/Header Menu/Header";
import Footer from "../../components/Footer/Footer";

export default function PaintingDetails() {
  const [changeImage, setChangeImage] = useState(null);
  const [painting, setPainting] = useState(null);
  const [expandImage, setExpandImage] = useState(false);
  const [paletteColors, setPaletteColors] = useState([]);

  const { id } = useParams();

  const resizeImage = () => {
    setExpandImage(!expandImage);
  };

  const handleHover = (imageId) => {
    setChangeImage(imageId);
  };

  useEffect(() => {
    const foundPainting = Data.data_painting.find(
      (painting) => painting.id === id
    );

    if (foundPainting) {
      setPainting(foundPainting);
    }
  }, [id]);

  const copyToClipboard = (color) => {
    const el = document.createElement("textarea");
    el.value = color;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    // Exibir uma mensagem de confirmação ao usuário (opcional)
    alert(`Cor "${color}" copiada para a área de transferência.`);
  };

  useEffect(() => {
    const foundPainting = Data.data_painting.find(
      (painting) => painting.id === id
    );
  
    if (foundPainting) {
      setPainting(foundPainting);
  
      // Inicialize o estado paletteColors aqui com base nas cores do objeto painting
      setPaletteColors([
        { color: foundPainting.color1, isHovered: false },
        { color: foundPainting.color2, isHovered: false },
        { color: foundPainting.color3, isHovered: false },
        { color: foundPainting.color4, isHovered: false },
        { color: foundPainting.color5, isHovered: false },
      ]);
    }
  }, [id]);

  const handlePaletteColorHover = (index) => {
    const updatedPaletteColors = [...paletteColors];
    updatedPaletteColors[index].isHovered =
      !updatedPaletteColors[index].isHovered;
    setPaletteColors(updatedPaletteColors);
  };

  return (
    <>
      <div className="flex h-auto bg-mainBg overflow-auto justify-start font-josefin items-start lg:h-screen pb-20 bg-cover bg-center bg-fixed">
        <Header />
        <div className="flex flex-col text-main mt-20 lg:mx-autolg:h-5/6 lg:w-10/12 items-center overflow-x-hidden mx-5 md:mx-20 bg-white/20 backdrop-blur-2xl rounded-md xl:h-5/6">
          {painting && (
            <div className="flex flex-col lg:flex-row lg:h-full xl:h-full" key={painting.id}>
              <div className="flex flex-col lg:w-2/4 h-full">
                <h1 className="text-center pt-3 pb-1 text-lg font-semibold">{painting.namePainting}</h1>
                <img
                  src={require(`../../Assets/Paintings/${painting.imagePainting}`)}
                  className={`px-5 object-cover w-auto lg:h-auto xl:h-full xl:pb-6 ${
                    expandImage ? "object-cover" : ""
                  }`}
                />
              </div>
              <div className="flex flex-col md:pt-6 items-center mt-4 lg:w-2/4 xl:w-6/12 justify-center text-center">
                <ul className="text-xs items-center flex flex-col px-10 gap-2 lg:items-start">
                  <li className="gap-1 lg:flex lg:items-center">
                    <h4 className="font-semibold text-base md:text-base">Título:</h4>
                    <p>{painting.originalTittle}</p>
                  </li>
                  <li className="gap-1 lg:flex lg:items-center">
                    <h4 className="font-semibold text-base md:text-base">Data:</h4>
                    <p>{painting.datePainting}</p>
                  </li>
                  <li className="gap-1 lg:flex lg:items-center">
                    <h4 className="font-semibold text-base md:text-base">Estilo:</h4>
                    <p>{painting.style}</p>
                  </li>
                  <li className="gap-1 lg:flex lg:items-center">
                    <h4 className="font-semibold text-base md:text-base">Materiais:</h4>
                    <p>{painting.materials}</p>
                  </li>
                  <li className="gap-1 lg:flex lg:items-start lg:justify-start">
                    <h4 className="font-semibold text-base md:text-base">Localização:</h4>
                    <p>{painting.local}</p>
                  </li>
                </ul>
                  <div className="bg-main w-4/5 h-0.5 mt-4 mx-2 px-2"></div>
                <div className="flex pt-4 lg:pr-4 lg:flex lg:justify-center">
                  <h2 className="absolute tracking-wide whitespace-nowrap text-lg uppercase text-center translate-x-1/2 xl:-translate-x-24 lg:right-20 lg:-translate-x-10 right-1/2 2xl:-translate-x-40">Paleta de Cores:</h2>
                  {painting &&
                    paletteColors.map((paletteColor, index) => (
                      <div
                        key={index}
                        className={`flex w-16 mt-10 h-20 md:w-24 lg:w-16 lg:h-28 xl:h-32 xl:w-24 cursor-pointer my-7 items-center justify-center ${
                          paletteColor.isHovered
                            ? "w-20 lg:w-28 xl:w-32"
                            : ""
                        }`}
                        style={{ backgroundColor: paletteColor.color }}
                        onMouseEnter={() => handlePaletteColorHover(index)}
                        onMouseLeave={() => handlePaletteColorHover(index)}
                        onClick={() => copyToClipboard(paletteColor.color)}
                      >
                        <p className="text-sm">{paletteColor.color}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
