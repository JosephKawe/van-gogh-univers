<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../Styles/details.css";
import Data from "../../data.json";

export default function PaintingDetails() {
  const [showMenu, setShowMenu] = useState(true);
  const [changeImage, setChangeImage] = useState(null);
  const [painting, setPainting] = useState(null);
  const [expandImage, setExpandImage] = useState(true)

  const navigate = useNavigate();

  const { id } = useParams();

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  const resizeImage = () => {
    setExpandImage(!expandImage)
  }

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

  return (
    <>
      <div className="details_container">
        <nav
          className={`details_navContainer ${
            showMenu ? "" : "details_navContainerOpen"
          }`}
        >
          <img
            onClick={openMenu}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHover(null)}
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
                className={`details_navLink ${
                  showMenu ? "" : "details_navLinkOpen"
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
                className={`details_navLink ${
                  showMenu ? "" : "details_navLinkOpen"
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
                className={`details_navLink ${
                  showMenu ? "" : "details_navLinkOpen"
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
                className={`details_navLink ${
                  showMenu ? "" : "details_navLinkOpen"
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
                className={`details_navLink ${
                  showMenu ? "" : "details_navLinkOpen"
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="details_mainContainer">
          {painting && (
            <div className="details_paintingDetailsContainer" key={painting.id}>
              <div className="details_paintingContainer">
                <h1>{painting.namePainting}</h1>
                <img
                  src={require(`../../Assets/Paintings/${painting.imagePainting}`)}
                  className={`details_paitingImage ${expandImage ? "details_expandImage" : ""}`}
                />
                <img
                  onClick={() => resizeImage()}
                  className="details_buttonExpandImage"
                  src={require("../../Assets/Icons/ICON_two-arrows.png")}
                />
              </div>
              <div className="details_infoContainer">
                <ul>
                  <li>
                    <h4>Título:</h4>
                    <p>{painting.originalTittle}</p>
                  </li>
                  <li>
                    <h4>Data:</h4>
                    <p>{painting.datePainting}</p>
                  </li>
                  <li>
                    <h4>Estilo:</h4>
                    <p>{painting.style}</p>
                  </li>
                  <li>
                    <h4>Materiais:</h4>
                    <p>{painting.materials}</p>
                  </li>
                  <li>
                    <h4>Localização:</h4>
                    <p>{painting.local}</p>
                  </li>
                </ul>
                <div className="details_palleteContainer">
                  <h2>Palheta de Cores</h2>
                  <div
                    className="details_palleteColor"
                    style={{ backgroundColor: painting.color1 }}
                  >
                    <p>{painting.color1}</p>
                  </div>
                  <div
                    className="details_palleteColor"
                    style={{ backgroundColor: painting.color2 }}
                  >
                    <p>{painting.color2}</p>
                  </div>
                  <div
                    className="details_palleteColor"
                    style={{ backgroundColor: painting.color3 }}
                  >
                    <p>{painting.color3}</p>
                  </div>
                  <div
                    className="details_palleteColor"
                    style={{ backgroundColor: painting.color4 }}
                  >
                    <p>{painting.color4}</p>
                  </div>
                  <div
                    className="details_palleteColor"
                    style={{ backgroundColor: painting.color5 }}
                  >
                    <p>{painting.color5}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
=======
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../Styles/details.css";
import Data from "../../data.json";

export default function PaintingDetails() {
  const [showMenu, setShowMenu] = useState(true);
  const [changeImage, setChangeImage] = useState(null);
  const [painting, setPainting] = useState(null);
  const [expandImage, setExpandImage] = useState(true)

  const navigate = useNavigate();

  const { id } = useParams();

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  const resizeImage = () => {
    setExpandImage(!expandImage)
  }

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

  return (
    <>
      <div className="details_container">
        <nav
          className={`details_navContainer ${
            showMenu ? "" : "details_navContainerOpen"
          }`}
        >
          <img
            onClick={openMenu}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHover(null)}
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
                className={`details_navLink ${
                  showMenu ? "" : "details_navLinkOpen"
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
                className={`details_navLink ${
                  showMenu ? "" : "details_navLinkOpen"
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
                className={`details_navLink ${
                  showMenu ? "" : "details_navLinkOpen"
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
                className={`details_navLink ${
                  showMenu ? "" : "details_navLinkOpen"
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
                className={`details_navLink ${
                  showMenu ? "" : "details_navLinkOpen"
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="details_mainContainer">
          {painting && (
            <div className="details_paintingDetailsContainer" key={painting.id}>
              <div className="details_paintingContainer">
                <h1>{painting.namePainting}</h1>
                <img
                  src={require(`../../Assets/Paintings/${painting.imagePainting}`)}
                  className={`details_paitingImage ${expandImage ? "details_expandImage" : ""}`}
                />
                <img
                  onClick={() => resizeImage()}
                  className="details_buttonExpandImage"
                  src={require("../../Assets/Icons/ICON_two-arrows.png")}
                />
              </div>
              <div className="details_infoContainer">
                <ul>
                  <li>
                    <h4>Título:</h4>
                    <p>{painting.originalTittle}</p>
                  </li>
                  <li>
                    <h4>Data:</h4>
                    <p>{painting.datePainting}</p>
                  </li>
                  <li>
                    <h4>Estilo:</h4>
                    <p>{painting.style}</p>
                  </li>
                  <li>
                    <h4>Materiais:</h4>
                    <p>{painting.materials}</p>
                  </li>
                  <li>
                    <h4>Localização:</h4>
                    <p>{painting.local}</p>
                  </li>
                </ul>
                <div className="details_palleteContainer">
                  <h2>Palheta de Cores</h2>
                  <div
                    className="details_palleteColor"
                    style={{ backgroundColor: painting.color1 }}
                  >
                    <p>{painting.color1}</p>
                  </div>
                  <div
                    className="details_palleteColor"
                    style={{ backgroundColor: painting.color2 }}
                  >
                    <p>{painting.color2}</p>
                  </div>
                  <div
                    className="details_palleteColor"
                    style={{ backgroundColor: painting.color3 }}
                  >
                    <p>{painting.color3}</p>
                  </div>
                  <div
                    className="details_palleteColor"
                    style={{ backgroundColor: painting.color4 }}
                  >
                    <p>{painting.color4}</p>
                  </div>
                  <div
                    className="details_palleteColor"
                    style={{ backgroundColor: painting.color5 }}
                  >
                    <p>{painting.color5}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
>>>>>>> 302fbb4 (Adding GitHub Pages)
