import React, { useEffect, useState } from "react";
import "../../Styles/painting.css";
import { Link, useNavigate } from "react-router-dom";
import Data from "../../data.json";

export default function Pinturas() {
  const [paintings, setPaintings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("ascendente");
  const [selectedOption, setSelectedOption] = useState("Filtrar");
  const [sortBy, setSortBy] = useState("nome");
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const navigate = useNavigate();

  const [paintingsToShow, setPaintingsToShow] = useState(18);
  const paintingsPerScroll = 3;

  useEffect(() => {
    setPaintings(Data.data_painting);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (windowHeight + scrollTop >= documentHeight - 100) {
      // O valor 100 é uma margem para detecção
      setPaintingsToShow((prev) => prev + paintingsPerScroll);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortBy = (value) => {
    setSortBy(value);
  };

  const filteredPaintings = paintings.filter(
    (painting) =>
      painting.namePainting.toLowerCase().includes(searchTerm.toLowerCase()) ||
      painting.datePainting.includes(searchTerm) || 
      painting.originalTittle.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const sortedPaintings = [...filteredPaintings].sort((a, b) => {
    if (sortBy === "nome") {
      if (order === "ascendente") {
        return a.namePainting.localeCompare(b.namePainting);
      } else {
        return b.namePainting.localeCompare(a.namePainting);
      }
    } else if (sortBy === "ano") {
      if (order === "ascendente") {
        return a.datePainting - b.datePainting;
      } else {
        return b.datePainting - a.datePainting;
      }
    }
  });

  const sortOptions = [
    { value: "nome", label: "Nome" },
    { value: "ano", label: "Ano" },
  ];

  const handleHover = (id) => {
    setHoveredCard(id);
  };

  const handleRouter = ( id ) => {
    navigate(`/details/${id}`)
  }

  const visiblePaintings = sortedPaintings.slice(0, paintingsToShow);

  return (
    <>
      <div className="paint_container">
        <nav className="paint_navContainer">
          <input
            type="search"
            name=""
            id=""
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Pesquisar..."
          />
          <ul>
            <Link className="paint_navLink" to="/">
              Home
            </Link>
            <Link className="paint_navLink" to="/pinturas">
              Pinturas
            </Link>
            <Link className="paint_navLink" to="/galeria">
              Galeria
            </Link>
            <Link className="paint_navLink">Sobre</Link>
            <Link className="paint_navLink">Contato</Link>
          </ul>
        </nav>
        <div className="paint_filterContainer">
          <div className="paint_lineFilter"></div>
          <div
            className="custom-options"
          >
            <select
              className="custom-select"
              value={selectedOption}
              onChange={handleSortBy}
            >
              <option disabled hidden>
                Filtrar
              </option>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <img
            src={require("../../Assets/Icons/filter (2).png")}
          />
        </div>
        <div className="paint_paintingsContainer">
          {visiblePaintings.map((paintings) => {
            const isHovered = hoveredCard === paintings.id;

            return (
              <div
                onClick={() => handleRouter(paintings.id)}
                className={`paint_cardPaintingContainer ${
                  isHovered ? "paint_cardHoveredContainer" : ""
                }`}
                key={paintings.id}
                onMouseEnter={() => handleHover(paintings.id)}
                onMouseLeave={() => handleHover(null)}
              >
                <img
                  src={require(`../../Assets/Paintings/${paintings.imagePainting}`)}
                  className={`paint_cardPaintingImage ${
                    isHovered ? "paint_cardHoveredImage" : ""
                  }`}
                  alt={paintings.namePainting}
                />
                <h2
                  className={ `paint_cardPaintingName ${
                    isHovered ? "paint_cardHoveredName" : ""
                  }`}
                >
                  {paintings.namePainting}
                </h2>
                <p className={ `paint_cardPaintingYear ${
                    isHovered ? "paint_cardHoveredYear" : ""
                  }`}>
                  {paintings.datePainting.match(/\d{4}/)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
