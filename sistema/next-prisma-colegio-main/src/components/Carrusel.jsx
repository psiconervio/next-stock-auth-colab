import Image from "next/image";
function Carrusel() {
  return (
    <>
      <h1 className=" text-white font-bold title-font text-3xl mb-2  text-center">
        Facultad de Derecho, &quot;Eulalia Ares&quot;
      </h1>
      <div className="lg:max-w-5xl mx-auto sm:max-w-2xl xl:max-w-5xl mt-8">
        <div id="default-carousel" className="relative" data-carousel="static">
          <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96 ">
            <div className="  ease-in-out" data-carousel-item="0">
              <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                First Slide
              </span>
              <Image
                src="/img/ubaaa.jpg"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
                width={1000}
                height={720}
              />
            </div>
            <div className="  ease-in-out" data-carousel-item="1">
              <Image
                src="/img/2.jpg"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
                width={1000}
                height={720}
              />
            </div>
            <div className=" ease-in-out" data-carousel-item="2">
              <Image
                src="/img/3.jpge"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
                width={1000}
                height={720}
              />
            </div>
          </div>
          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>
          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-16  mx-auto">
          <p className="text-gray-400 font-bold title-font sm:text-lg text-2xl pb-5 text-center">
            En honor a la valiente líder Eulalia Ares, nuestra facultad se
            dedica a formar profesionales comprometidos con la justicia, la
            igualdad y los derechos humanos.
          </p>

          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-full h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap py-6 mb-12 ">
              <div className="flex-1 ">
                <div className="flex flex-wrap sm:flex-row flex-col px-5 pt-10 pb-10">
                  <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                    Nuestras propuestas
                  </h1>
                  <p>
                    Nuestra institución se dedica a formar profesionales
                    comprometidos con la justicia, la igualdad y los derechos
                    humanos.
                  </p>
                  <br />
                  <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                    Valores y mision
                  </h1>
                  <p>
                    Nuestra misión es proporcionar una educación legal de
                    calidad, fomentando la ética, la responsabilidad social y la
                    excelencia académica. Valoramos la diversidad, la equidad y
                    la búsqueda constante de la verdad.
                  </p>
                  <br />
                  <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0 ">
                    Destacados y logros
                  </h1>
                  <p>
                    Últimamente, hemos ampliado nuestra oferta académica con
                    nuevos programas de posgrado y hemos establecido alianzas
                    con organizaciones de derechos humanos. Además, nuestros
                    estudiantes han obtenido reconocimientos en competencias
                    nacionales e internacionales.
                  </p>
                </div>
              </div>
              <div className=" md:w-1/3 sm:my-10 ">
                <h3 className="text-white font-medium title-font text-xl mb-2 sm:mb-0 mt-2">
                  <i
                    className="fa-solid fa-calendar-days"
                    aria-hidden="true"
                  ></i>{" "}
                  Agenda de Actividades:
                </h3>
                <h2 className="text-xl font-medium title-font text-gray-300 mt-5">
                  Conferencia: &quot;La Importancia del juicio por jurados cómo
                  garantía de un proceso democrático&quot;
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Lunes 8 de julio de 2024 a las 17:30 h en el Salón Verde
                </p>
                <a
                  href="http://www.derecho.uba.ar/institucional/deinteres/2024/conferencia-la-importancia-del-juicio-por-jurados-como-garantia-de-un-proceso-democratico"
                  className="text-indigo-400 inline-flex items-center mt-3"
                >
                  Leer Mas
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <h2 className="text-xl font-medium title-font text-gray-300 mt-5">
                  Ciclo internacional de conferencias de Derecho Informático.
                  Inteligencia artificial y protección de datos personales
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Miércoles 10 de julio de 2024 a las 18.30 h por Zoom
                </p>
                <a
                  href="http://www.derecho.uba.ar/institucional/deinteres/2024/ciclo-internacional-de-conferencias-de-derecho-informatico-inteligencia-artificial-y-proteccion-de-datos-personales"
                  className="text-indigo-400 inline-flex items-center mt-3"
                >
                  Leer Mas
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <h2 className="text-xl font-medium title-font text-gray-300 mt-5">
                  X Jornada Internacional Derecho y Justicia. Nuevos desafíos
                  institucionales en Brasil y Argentina: Inclusión social,
                  educación y tecnologías
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Jueves 11 de julio de 2024 a las 18 h en el Salón Rojo
                </p>
                <a
                  href="http://www.derecho.uba.ar/institucional/deinteres/2024/x-jornada-internacional-derecho-y-justicia-nuevos-desafios-institucionales-en-brasil-y-argentina-inclusion-social-educacion-y-tecnologias"
                  className="text-indigo-400 inline-flex items-center mt-3"
                >
                  Leer Mas
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <h1 className="sm:w-2/5 mb-5 text-white font-medium title-font text-2xl sm:mb-0">
            Noticias
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/4.webp"
                  width={1000}
                  height={720}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Pasantias en la UBA
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Es un programa implementado por la Facultad en el marco de lo
                dispuesto por la ley 26.427 con el objeto de complementar la
                formación académica y la práctica profesional de los/as
                estudiantes, quienes desarrollan.
              </p>
              <a
                href="http://www.derecho.uba.ar/academica/asuntos_estudiantiles/pasantias/"
                className="text-indigo-400 inline-flex items-center mt-3"
              >
                Leer Mas
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/5.jpg"
                  width={1000}
                  height={720}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Preparacion CBC
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Programa optativo de acompañamiento y apoyo educativo previo al
                inicio de la cursada del Ciclo Básico Común.{" "}
              </p>
              <a
                href="https://www.cbc.uba.ar/extension/la-previa-de-la-uba"
                className="text-indigo-400 inline-flex items-center mt-3"
              >
                Leer Mas
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/6.jpg"
                  width={1000}
                  height={720}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                18 Estudiantes de la UBA fueron seleccionados
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Para participar del Programa de Intercambio de Estudiantes de la
                Facultad 2023-2024.
              </p>
              <a
                href="http://www.derecho.uba.ar/noticias/2022/aa8-estudiantes-de-la-carrera-de-abogacia-fueron-seleccionados-as-para-participar-del-programa-de-intercambio-de-estudiantes-de-la-facultad-2-22-2-23"
                className="text-indigo-400 inline-flex items-center mt-3"
              >
                Leer Mas
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/7.jpg"
                  width={1000}
                  height={720}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Reglamentación de los Cursos de Invierno 2024
              </h2>
              <p className="text-base leading-relaxed mt-2 ">
                Comienza el receso invernal, enterate todo.
              </p>
              <a
                href="http://www.derecho.uba.ar/noticias/2024/reglamentacion-de-los-cursos-de-invierno-2-24"
                className="text-indigo-400 inline-flex items-center mt-3"
              >
                Leer Mas
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carrusel;
