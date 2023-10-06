import React, { useEffect, useState } from "react";
import Data from "../../data.json";
import Header from "../../components/Header Menu/Header";

export default function Gallery() {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    setPaintings(Data.data_painting);
  }, []);

  return (
    <>
      <div className="flex bg-paintingBg bg-cover bg-fixed bg-center h-auto justify-start flex-col items-center w-full">
        <Header />
        <div className={`flex my-20 flex-col lg:block lg:flex-row lg:columns-3 xl:columns-5 duration-300 lg:w-10/12 justify-start lg:justify-center items-center gap-6 `}>
          {paintings.map((painting) => (
            <div
              key={painting.id}
              className={`flex flex-col items-center justify-center lg:my-4 bg-main/40 backdrop-blur-lg h-auto w-auto lg:pb-0 lg:mx-0 mx-8 overflow-hidden cursor-pointer object-fill text-main flex-wrap`}
            >
              <img
                src={require(`../../Assets/Paintings/${painting.imagePainting}`)}
                className={`px-1 py-1 lg:h-auto lg:w-max object-cover duration-300`}
                alt={painting.namePainting}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
