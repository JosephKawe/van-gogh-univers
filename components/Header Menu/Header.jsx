import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header({ setVisibility }) {
  const [showMenu, setShowMenu] = useState(false);
  const [changeImage, setChangeImage] = useState(null);

  const menuRef = useRef(null);

  const navigate = useNavigate();

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

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
      <nav
        className={`flex bg-main/10 backdrop-blur-md w-full duration-300 items-center fixed z-50 shadow-2xl ${
          showMenu ? "-translate-y-full" : "-translate-y-0"
        }`}
      >
        <img
          className="ml-4 w-6 md:w-8 md:my-3 my-2.5 cursor-pointer"
          onClick={openMenu}
          onMouseEnter={() => handleHover(1)}
          onMouseOut={() => handleHover(null)}
          src={require(changeImage === 1
            ? "../../Assets/Icons/ICON_hamburger-hover.png"
            : "../../Assets/Icons/ICON_hamburger.png")}
          alt="Menu"
        />
      </nav>
      <nav
        ref={menuRef}
        className={`flex flex-col pt-8 w-1/2 md:w-1/3 left-0 h-screen justify-start fixed z-50 items-start bg-main/10 backdrop-blur-xl shadow-2xl duration-300 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          className="w-6 md:w-8 ml-8"
          onClick={openMenu}
          onMouseEnter={() => handleHover(1)}
          onMouseOut={() => handleHover(null)}
          src={require(changeImage === 1
            ? "../../Assets/Icons/ICON_close-hover.png"
            : "../../Assets/Icons/ICON_close.png")}
          alt="Menu"
        />
        <ul className="flex flex-col list-none gap-12 pl-8 pt-12 md:pt-20 text-main">
          <li className="flex gap-2">
            <img
              className="w-6 md:w-10 md:my-2 object-contain"
              onClick={() => navigate("/")}
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleHover(null)}
              src={require(changeImage === 2
                ? "../../Assets/Icons/ICON_home-hover.png"
                : "../../Assets/Icons/ICON_home.png")}
              alt="home"
            />
            <NavLink
              className={`text-xl pt-2 md:pt-5 hover:text-mainYellow active:text-mainYellow duration-150 ${
                showMenu ? "" : "main_navLinkOpen"
              }`}
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="flex gap-2">
            <img
              className="w-6 md:w-10 md:my-2 object-contain"
              onClick={() => navigate("/pinturas")}
              onMouseEnter={() => handleHover(3)}
              onMouseLeave={() => handleHover(null)}
              src={require(changeImage === 3
                ? "../../Assets/Icons/ICON_starry-night-hover.png"
                : "../../Assets/Icons/ICON_starry-night.png")}
              alt="Pinturas"
            />
            <NavLink
              className={`text-xl pt-1 md:pt-4 hover:text-mainYellow active:text-mainYellow ${
                showMenu ? "" : "main_navLinkOpen"
              }`}
              to="/pinturas"
              exact
            >
              Pinturas
            </NavLink>
          </li>
          <li className="flex gap-2">
            <img
              className="w-6 md:w-10 md:my-2 object-contain"
              onMouseEnter={() => handleHover(4)}
              onMouseLeave={() => handleHover(null)}
              src={require(changeImage === 4
                ? "../../Assets/Icons/ICON_gallery-hover.png"
                : "../../Assets/Icons/ICON_gallery.png")}
              alt="Galeria"
            />
            <NavLink
              className={`text-xl pt-1 md:pt-4 hover:text-mainYellow active:text-mainYellow ${
                showMenu ? "" : "main_navLinkOpen"
              }`}
              to="/galeria"
              exact
            >
              Galeria
            </NavLink>
          </li>
          <li className="flex gap-2">
            <img
              className="w-6 md:w-10 md:my-2 object-contain"
              onMouseEnter={() => handleHover(5)}
              onMouseLeave={() => handleHover(null)}
              src={require(changeImage === 5
                ? "../../Assets/Icons/ICON_about-hover.png"
                : "../../Assets/Icons/ICON_about.png")}
              alt="Sobre"
            />
            <NavLink
              className={`text-xl pt-1 md:pt-4 hover:text-mainYellow active:text-mainYellow ${
                showMenu ? "" : "main_navLinkOpen"
              }`}
              to="/sobre"
              exact
            >
              Sobre
            </NavLink>
          </li>
          <li className="flex gap-2">
            <img
              className="w-6 md:w-10 md:my-2 object-contain"
              src={require("../../Assets/Icons/ICON_contact-form.png")}
              alt="Contato"
            />
            <NavLink
              className={
                "text-xl pt-1 md:pt-4 hover:text-mainYellow active:text-mainYellow"
              }
              to="/contato"
              exact
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
