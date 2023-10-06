import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Data from "../../data.json";
import Header from "../../components/Header Menu/Header";

export default function Pinturas() {
  const [paintings, setPaintings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("ascendente");
  const [selectedOption, setSelectedOption] = useState("Filtrar");
  const [sortBy, setSortBy] = useState("nome");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isPaintingsVisible, setIsPaintingsVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  const paintingsSectionRef = useRef();

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setPaintings(Data.data_painting);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    if (
      paintingsSectionRef.current &&
      scrollPosition > paintingsSectionRef.current.offsetTop
    ) {
      setIsPaintingsVisible(true);
    }
  };

  const openSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortBy = (event) => {
    const value = event.target.value;
    setSortBy(value);
    setSelectedOption(value);
  };

  const filteredPaintings = paintings.filter(
    (painting) =>
      painting.namePainting.toLowerCase().includes(searchTerm.toLowerCase()) ||
      painting.datePainting.includes(searchTerm) ||
      painting.originalTittle
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
  );

  const sortedPaintings = [...filteredPaintings].sort((a, b) => {
    if (sortBy === "nome") {
      return order === "ascendente"
        ? a.namePainting.localeCompare(b.namePainting)
        : b.namePainting.localeCompare(a.namePainting);
    } else if (sortBy === "ano") {
      const yearA = parseInt(a.datePainting.match(/\d{4}/)[0]);
      const yearB = parseInt(b.datePainting.match(/\d{4}/)[0]);

      return order === "ascendente" ? yearA - yearB : yearB - yearA;
    }
  });

  const sortOptions = [
    { value: "nome", label: "Nome" },
    { value: "ano", label: "Ano" },
  ];

  const handleHover = (id) => {
    setHoveredCard(id);
  };

  const handleRouter = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <div
        className={`flex text-main overflow-x-hidden justify-start bg-fixed bg-center flex-col items-center font-josefin bg-paintingBg bg-cover ${
          filteredPaintings.length < 3 ? "h-screen" : "h-auto"
        }`}
      >
        <div className="flex h-9 md:h-12 mt-20 lg:w-4/6 lg:mt-24 w-4/5">
        <input
          type="search"
          name=""
          className={`flex bg-transparent outline-2 w-full outline -outline-offset-2 outline-main rounded-l-full z-50 pl-2 pt-2 placeholder-main text-xs pb-1.5 ${
            showSearch ? "" : ""
          }`}
          value={searchTerm}
          onChange={handleSearch}
          onFocus={openSearch}
          onBlur={openSearch}
          placeholder={showSearch ? "Pesquisar..." : ""}
        />
        <button className="bg-main/20 backdrop-blur-xl w-20 flex justify-center items-center rounded-r-full">
        <img
          className={`w-5 md:w-7 right-0.5 z-50 h-auto ml-2 object-contain mr-4 pointer-events-none`}
          src={require("../../Assets/Icons/ICON_search.png")}
          alt="Search Icon"
        />
        </button>
        </div>
        <Header />
        <div className="flex w-4/5 mt-8 md:mt-10">
          <div className="h-0.5 bg-main mt-2 grow mr-2"></div>
          <div className="flex">
            <select
              className="border-none rounded-lg mr-2 bg-main/20 backdrop-blur-md pt-0.5 text-main flex px-1 py-0.5 capitalize text-sm cursor-pointer"
              value={selectedOption}
              onChange={handleSortBy}
            >
              <option disabled hidden>
                Filtrar
              </option>
              {sortOptions.map((option) => (
                <option
                  key={option.value}
                  className="text-mainBlue p-2"
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div
          className={`flex flex-col lg:flex-row lg:gap-4 duration-300 w-full justify-start lg:justify-center items-center gap-6 mx-4 my-6 lg:flex-wrap md:gap-8`}
          ref={paintingsSectionRef}
        >
          {sortedPaintings.map((painting) => {
            const isHovered = hoveredCard === painting.id;
            return (
              <div
                onClick={() => handleRouter(painting.id)}
                className={`flex flex-col opacity-transition items-center justify-center bg-main/40 backdrop-blur-lg w-auto lg:w-72 lg:pb-1.5 lg:mx-0 mx-8 overflow-hidden cursor-pointer rounded-md lg:h-auto object-fill text-main flex-wrap ${
                  isHovered ? "lg:h-auto lg:justify-start lg:pb-1.5" : ""
                } ${isPaintingsVisible ? "visible" : ""}`}
                key={painting.id}
                onMouseEnter={() => handleHover(painting.id)}
                onMouseLeave={() => handleHover(null)}
              >
                <img
                  src={require(`../../Assets/Paintings/${painting.imagePainting}`)}
                  className={`px-1.5 pt-1.5 lg:h-56 lg:w-80 object-cover duration-300 ${
                    isHovered ? "lg:h-28 lg:my-1" : ""
                  }`}
                  alt={painting.namePainting}
                />
                <h2
                  className={`font-bold duration-300 mt-1.5 text-lg lg:text-base px-2 text-center ${
                    isHovered ? "lg:flex" : "lg:hidden"
                  }`}
                >
                  {painting.namePainting}
                </h2>
                <p
                  className={`font-medium duration-300 ${
                    isHovered
                      ? "lg:flex translate-y-px"
                      : "lg:hidden translate-y-cardHover"
                  }`}
                >
                  {painting.datePainting.match(/\d{4}/)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
