
const Section = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="lg:text-center mt-12">
        <h2 className="text-lg font-semibold text-indigo-600">Facultad de Derecho - Eulalia Ares</h2>
        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          , &quot;La justicia es la constante y perpetua voluntad de dar a cada uno su derechos&quot;
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus, debitis porro deserunt? Id minus eos dolore a iure dolores.
        </p>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Fundada en 1890</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quia.</dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Excelencia Académica</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quia.</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Section;
