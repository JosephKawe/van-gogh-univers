import React, { useEffect, useRef, useState } from "react";
import "../../Styles/main.css";
import { Link, useNavigate } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


export default function Main() {

  const [showMenu, setShowMenu] = useState(false);
  const [changeImage, setChangeImage] = useState(null);
  const [expandImage, setExpandImage] = useState(true)

  const menuRef = useRef(null);

  const navigate = useNavigate();

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  const resizeImage = () => {
    setExpandImage(!expandImage)
  }

  const handleHover = (imageId) => {
    setChangeImage(imageId);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Remove o ouvinte de eventos quando o componente é desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="main_container">
        <nav className={`main_navHamburgerContainer ${showMenu ? "main_navHamburgerOpen" : "main_navHamburgerClose"}`}>
          <img
            onClick={openMenu}
            onMouseEnter={() => handleHover(1)}
            onMouseOut={() => handleHover(null)}
            src={require(changeImage === 1
              ? "../../Assets/Icons/ICON_hamburger-hover.png"
              : "../../Assets/Icons/ICON_hamburger.png")}
            alt="Menu"
          />
        </nav>
        <nav ref={menuRef} className={`main_navContainer ${showMenu ? "main_navContainerOpen" : "main_navContainerClose"}`}>
          <img
            onClick={openMenu}
            onMouseEnter={() => handleHover(1)}
            onMouseOut={() => handleHover(null)}
            src={require(changeImage === 1
              ? "../../Assets/Icons/ICON_hamburger-hover.png"
              : "../../Assets/Icons/ICON_hamburger.png")}
            alt="Menu"
          />
          <ul>
          <li>
              <img
                onClick={() => navigate("/")}
                onMouseEnter={() => handleHover(2)}
                onMouseLeave={() => handleHover(null)}
                src={require(changeImage === 2
                  ? "../../Assets/Icons/ICON_home-hover.png"
                  : "../../Assets/Icons/ICON_home.png")}
                alt=""
              />
              <Link
                className={`main_navLink ${
                  showMenu ? "" : "main_navLinkOpen"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <img
                onClick={() => navigate("/pinturas")}
                onMouseEnter={() => handleHover(3)}
                onMouseLeave={() => handleHover(null)}
                src={require(changeImage === 3
                  ? "../../Assets/Icons/ICON_starry-night-hover.png"
                  : "../../Assets/Icons/ICON_starry-night.png")}
                alt="Pinturas"
              />
              <Link
                className={`main_navLink ${
                  showMenu ? "" : "main_navLinkOpen"
                }`}
                to="/pinturas"
              >
                Pinturas
              </Link>
            </li>
            <li>
              <img
                onMouseEnter={() => handleHover(4)}
                onMouseLeave={() => handleHover(null)}
                src={require(changeImage === 4
                  ? "../../Assets/Icons/ICON_gallery-hover.png"
                  : "../../Assets/Icons/ICON_gallery.png")}
                alt="Galeria"
              />
              <Link
                className={`main_navLink ${
                  showMenu ? "" : "main_navLinkOpen"
                }`}
                to="/galeria"
              >
                Galeria
              </Link>
            </li>
            <li>
              <img
                onMouseEnter={() => handleHover(5)}
                onMouseLeave={() => handleHover(null)}
                src={require(changeImage === 5 ? "../../Assets/Icons/ICON_about-hover.png" : "../../Assets/Icons/ICON_about.png")}
                alt="Sobre"
              />
              <Link
                className={`main_navLink ${
                  showMenu ? "" : "main_navLinkOpen"
                }`}
              >
                Sobre
              </Link>
            </li>
            <li>
              <img
                src={require("../../Assets/Icons/ICON_contact-form.png")}
                alt=""
              />
              <Link
                className={`main_navLink ${
                  showMenu ? "" : "main_navLinkOpen"
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="main_infoContainer">
          <h1>Bem-vindo ao Universo de Van Gogh:</h1>
          <h2>Onde a Arte se Torna Vida</h2>
          <p>
            Vincent van Gogh foi um dos pintores mais influentes da história da
            arte. Com sua técnica marcante e uso vívido de cores, ele deixou uma
            impressão duradoura no mundo da arte. Neste site, convidamos você a
            explorar suas obras, descobrir sua vida fascinante e entender por
            que ele é uma figura tão reverenciada no cenário artístico.
            Bem-vindo à jornada de Vincent van Gogh!
          </p>
          <Swiper
            effect={'coverflow'}
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
            className="main_swiperContainer"
          >
            <SwiperSlide className="main_swiperSlider">
              <img
                onClick={() => navigate("/main/3")}
                className="main_swiperImage"
                src={require("../../Assets/Paintings/PAINT_noite_estrelada_rodano.jpg")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="main_swiperSlider">
              <img
                onClick={() => navigate("/main/4")}
                className="main_swiperImage"
                src={require("../../Assets/Paintings/PAINT_quarto_em_arles.jpg")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="main_swiperSlider">
              <img
                onClick={() => navigate("/main/15")}
                className="main_swiperImage"
                src={require("../../Assets/Paintings/PAINT_o_semeador.jpg")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="main_swiperSlider">
              <img
                onClick={() => navigate("/main/13")}
                className="main_swiperImage"
                src={require("../../Assets/Paintings/PAINT_ponte_langlois_arles.jpg")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="main_swiperSlider">
              <img
                onClick={() => navigate("/main/5")}
                className="main_swiperImage"
                src={require("../../Assets/Paintings/PAINT_terraco_cafe.jpg")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="main_swiperSlider">
              <img
                onClick={() => navigate("/main/2")}
                className="main_swiperImage"
                src={require("../../Assets/Paintings/PAINT_os_girassois.jpg")}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <button onClick={() => navigate("/pinturas")}>
            Explorar
          </button>
        </div>
      </div>
    </>
  );
}
