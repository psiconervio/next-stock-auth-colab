function Footer() {
    return (
        <>
            <footer className="relative bg-blueGray-800 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-200">F.C Eulalia Ares </h4>
        <br/>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-200">¿Tienes alguna pregunta sobre nuestros programas o quieres saber más sobre la Facultad de Derecho Eulalia Ares? No dudes en contactarnos. Estamos aquí para ayudarte.</h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-white text-light Blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter" aria-hidden="true"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Enlaces</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-200 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="index.html">Inicio</a>
              </li>
              <li>
                <a className="text-blueGray-200 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="programas.html">Programas</a>
              </li>
              <li>
                <a className="text-blueGray-200 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="profesores.html">Profesores</a>
              </li>
              <li>
                <a className="text-blueGray-200 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="profesores.html">Admisiones</a>
              </li>
              <li>
                <a className="text-blueGray-200 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="Contacto.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-200"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-200 font-semibold py-1">
          Copyright por,<a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-200 hover:text-gray-200" target="_blank"> Alumno:
          </a><a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-200">Del Campo, Augusto</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
        </>
    )
}

export default Footer