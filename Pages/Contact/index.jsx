import React from "react";
import Header from "../../components/Header Menu/Header";
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import Footer from "../../components/Footer/Footer";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export default function Contact() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="flex overflow-hidden bg-gray-900 bg-center bg-fixed bg-cover h-screen justify-start flex-col md:px-40 px-10 items-center w-full">
        <Header />
        <div className="flex flex-col">
          <img src={require("../../Assets/logo.png")} className="w-96 md:w-full lg:w-80 sepia" alt="Logo KHK" />
        </div>
        <div className="overflow-y-auto lg:flex-row -mt-10">
          <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
            <AccordionHeader className="text-main text-lg font-josefin hover:text-main active:text-main md:text-3xl md:mb-5" onClick={() => handleOpen(1)}>O que é a KHK?</AccordionHeader>
            <AccordionBody className="text-main text-lg font-josefin hover:text-main active:text-main md:text-xl">
              KHK, um exército de desenvolvimento composto por um único herói, domina diversas ferramentas poderosas, incluindo Vue.js, React.js, Laravel, Node.js, APIs, Tailwind, e muito mais.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
            <AccordionHeader className="text-main text-lg font-josefin hover:text-main active:text-main md:text-3xl md:mb-5" onClick={() => handleOpen(2)}>Van Gogh Univers</AccordionHeader>
            <AccordionBody className="text-main text-lg font-josefin hover:text-main active:text-main md:text-xl">
              Van Gogh Univers é um site dedicado à celebração da vida e obra do renomado artista Vincent Willem van Gogh. Esta plataforma é uma homenagem ao legado artístico e à contribuição única que Van Gogh trouxe ao mundo da arte. Explore conosco a jornada fascinante desse visionário pintor, conhecendo suas obras mais icônicas, sua inspiração única e sua influência duradoura na história da arte. Permita-se mergulhar na paleta de cores vibrantes e nas pinceladas marcantes que caracterizam a genialidade de Van Gogh. Bem-vindo ao Van Gogh Univers, onde a arte se torna uma experiência imersiva e inspiradora.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
            <AccordionHeader className="text-main text-lg font-josefin hover:text-main active:text-main md:text-3xl md:mb-5" onClick={() => handleOpen(3)}>
              Onde encontro o projeto?
            </AccordionHeader>
            <AccordionBody className="text-main text-center text-xl font-bold font-josefin hover:text-main active:text-main md:text-2xl">
              Você pode me encontrar nas seguintes redes sociais:
              <div className="flex justify-between font-normal mt-4">
                <a className="flex flex-col items-center" href="https://www.linkedin.com/in/joseph-kawe/" target="_blank" rel="noopener noreferrer">
                  <h3>LinkedIn</h3>
                  <img src={require("../../Assets/Icons/ICONS_linkedin.png")} className="w-10" alt="LinkedIn" />
                </a>
                <a className="flex flex-col items-center" href="https://github.com/JosephKawe" target="_blank" rel="noopener noreferrer">
                  <h3>GitHub</h3>
                  <img src={require("../../Assets/Icons/ICON_github.png")} className="w-10" alt="GitHub" />
                </a>
                <a className="flex flex-col items-center" href="/" target="_blank" rel="noopener noreferrer">
                  <h3>Portfólio</h3>
                  <img src={require("../../Assets/Icons/portfolio.png")} className="w-10" alt="Portfólio" />
                </a>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <Footer />
      </div>
    </>
  );
}
