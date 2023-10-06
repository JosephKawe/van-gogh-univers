import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Header from "../../components/Header Menu/Header";
import Footer from "../../components/Footer/Footer";

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <div className={`flex bg-mainBg bg-cover h-screen justify-start flex-col items-center w-full font-josefin duration-1000`}>

        <Header />
        
        <div className={`flex flex-col w-11/12 md:w-10/12 text-center h-auto mx-auto items-center mt-16 2xl:container md:mt-20 lg:px-4 xl:px-16  text-main duration-1000 overflow-hidden ${isVisible ? "" : ""}`}>
          <h1 className={`text-4xl lg:text-5xl font-semibold -translate-y-full opacity-0 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : ""}`}>Bem-vindo ao Universo de Van Gogh</h1>
          <h2 className={`text-2xl lg:text-3xl mt-1 font-semibold translate-x-full duration-1000 ${isVisible ? "translate-x-px" : ""}`}>Onde a Arte se Torna Vida</h2>
          <p className={`text-md mt-6 lg:text-lg -translate-x-full duration-1000 opacity-0 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : ""}`}>
            Vincent van Gogh foi um dos pintores mais influentes da história da
            arte. Com sua técnica marcante e uso vívido de cores, ele deixou umaz
            impressão duradoura no mundo da arte. Neste site, convidamos você a
            explorar suas obras, descobrir sua vida fascinante e entender por
            que ele é uma figura tão reverenciada no cenário artístico.
            Bem-vindo à jornada de Vincent van Gogh!
          </p>
          <Swiper
            effect={"coverflow"}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000 }}
            coverflowEffect={{
              rotate: 45,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className={`bg-main/20 opacity-0 duration-1000 w-full xl:w-11/12 2xl:w-10/12 self-end h-auto backdrop-blur-lg shadow-2xl rounded-xl
             my-8 ${isVisible ? "opacity-100" : ""}`}
          >
            <SwiperSlide>
              <img
                onClick={() => navigate("/details/3")}
                className="h-40 md:h-56 lg:h-60 border-main/40 border-2 my-4 object-fill md:my-8 w-full cursor-pointer"
                src={require("../../Assets/Paintings/PAINT_noite_estrelada_rodano.jpg")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => navigate("/details/4")}
                className="h-40 md:h-56 lg:h-60 border-main/40 border-2 my-4 object-fill md:my-8 w-full cursor-pointer"
                src={require("../../Assets/Paintings/PAINT_quarto_em_arles.jpg")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => navigate("/details/15")}
                className="h-40 md:h-56 lg:h-60 border-main/40 border-2 my-4 object-fill md:my-8 w-full cursor-pointer"
                src={require("../../Assets/Paintings/PAINT_o_semeador.jpg")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => navigate("/details/13")}
                className="h-40 md:h-56 lg:h-60 border-main/40 border-2 my-4 object-fill md:my-8 w-full cursor-pointer"
                src={require("../../Assets/Paintings/PAINT_ponte_langlois_arles.jpg")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => navigate("/details/5")}
                className="h-40 md:h-56 lg:h-60 border-main/40 border-2 my-4 object-fill md:my-8 w-full cursor-pointer"
                src={require("../../Assets/Paintings/PAINT_terraco_cafe.jpg")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => navigate("/details/2")}
                className="h-40 md:h-56 lg:h-60 border-main/40 border-2 my-4 object-fill md:my-8 w-full cursor-pointer"
                src={require("../../Assets/Paintings/PAINT_os_girassois.jpg")}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <button className={`w-full lg:h-16 lg:text-xl bg-main/20 translate-y-full opacity-0 ease-in-out backdrop-blur-lg self-center h-12 uppercase tracking-widest pt-1 rounded-xl cursor-pointer hover:text-mainYellow duration-1000 ${isVisible ? "translate-y-px opacity-100" : ""}`} onClick={() => navigate("/pinturas")}>Explorar</button>
        </div>
        <Footer />
      </div>
    </>
  );
}
