/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../../components/Header Menu/Header";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Avatar,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

export default function About() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="flex bg-aboutBg font-josefin bg-center bg-fixed bg-cover h-screen justify-start flex-col items-center w-full">
        <Header />

        <div className="flex flex-col items-center lg:flex-row mt-20 w-10/12 py-8 lg:justify-between lg:px-14 overflow-x-hidden bg-main/10 backdrop-blur-lg h-5/6 overflow-scroll">
          <div className="flex flex-col lg:mx-4 items-center justify-center lg:flex-col-reverse">
          <h2 className="mb-4 text-main text-3xl lg:mt-6 lg:text-6xl lg:w-72 whitespace-pre-wrap text-center">Vincent Van Gogh</h2>
          <Avatar className="rounded-full bg-main p-0.5 w-60 lg:w-96 h-60 lg:h-96 object-cover" src={require("../../Assets/ABOUT_Vincent_Van_Gogh.jpg")} alt="avatar" />
          </div>
          <div className="w-10/12 lg:w-3/6">
            <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
              <AccordionHeader className="text-main text-lg font-josefin hover:text-main active:text-main" onClick={() => handleOpen(1)}>
                Biografia:
              </AccordionHeader>
              <AccordionBody className="text-main font-josefin font-medium">
              Vincent Willem van Gogh nasceu em Groot-Zundert, nos Países Baixos, em 30 de março de 1853. Sua vida foi marcada por uma paixão fervorosa pela arte, uma jornada repleta de descobertas e um olhar único para o mundo ao seu redor. Vincent começou sua carreira como vendedor de arte antes de dedicar-se integralmente à pintura.
              </AccordionBody>
            </Accordion>
            <Accordion className="lg:mt-4" open={open === 2} animate={CUSTOM_ANIMATION}>
              <AccordionHeader className="text-main text-lg  font-josefin hover:text-main active:text-main" onClick={() => handleOpen(2)}>
              Jornada Artística:
              </AccordionHeader>
              <AccordionBody className="text-main font-josefin font-medium lg:text-base">
              Van Gogh passou por diversas fases artísticas, desde suas primeiras obras influenciadas pelos mestres holandeses até o desenvolvimento de seu estilo único e inconfundível. Sua jornada o levou de Paris a Arles, onde suas experiências e desafios pessoais se refletiram intensamente em sua arte.
              </AccordionBody>
            </Accordion>
            <Accordion className="lg:mt-4" open={open === 3} animate={CUSTOM_ANIMATION}>
              <AccordionHeader className="text-main text-lg  font-josefin hover:text-main active:text-main" onClick={() => handleOpen(3)}>
              Estilo Distintivo:
              </AccordionHeader>
              <AccordionBody className="text-main font-josefin font-medium lg:text-base">
              O estilo de Van Gogh é caracterizado por pinceladas ousadas, cores vibrantes e uma exploração profunda da emoção humana. Sua habilidade única de capturar a beleza e a tragédia da existência humana elevou suas obras a um patamar de reconhecimento global.
              </AccordionBody>
            </Accordion>
            <Accordion className="lg:mt-4" open={open === 4} animate={CUSTOM_ANIMATION}>
              <AccordionHeader className="text-main text-lg  font-josefin hover:text-main active:text-main" onClick={() => handleOpen(4)}>
              Desafios Pessoais:
              </AccordionHeader>
              <AccordionBody className="text-main font-josefin font-medium lg:text-base">
              Vincent van Gogh enfrentou batalhas significativas em sua vida, incluindo lutas com a saúde mental e relacionamentos turbulentos. Apesar desses desafios, sua dedicação à arte nunca vacilou, e ele deixou para trás um legado que transcende o tempo.
              </AccordionBody>
            </Accordion>
            <Accordion className="lg:mt-4" open={open === 5} animate={CUSTOM_ANIMATION}>
              <AccordionHeader className="text-main text-lg  font-josefin hover:text-main active:text-main" onClick={() => handleOpen(5)}>
              Legado Duradouro:
              </AccordionHeader>
              <AccordionBody className="text-main font-josefin font-medium lg:text-base">
              A influência de Van Gogh na arte moderna é imensurável. Suas obras, inicialmente incompreendidas durante sua vida, tornaram-se ícones da expressão artística. Hoje, museus e galerias em todo o mundo celebram seu legado, e suas pinturas continuam a inspirar artistas e admiradores.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
