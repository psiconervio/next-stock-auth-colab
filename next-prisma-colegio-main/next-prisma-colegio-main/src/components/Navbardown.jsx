'use client'
import { useEffect } from 'react';
import Image from 'next/image';

function Navbardown() {
  useEffect(() => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    };

    mobileMenuButton.addEventListener('click', toggleMenu);

    return () => {
      mobileMenuButton.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <>
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js" async/>
    <script defer src="https://unpkg.com/alpinejs@3.2.3/dist/cdn.min.js" async/>
      <nav className="bg-gray-800 mb-6">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                id="mobile-menu-button"
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-shrink-0 ml-12 justify-start">
            <a href="index.html"> <Image className="h-8 w-auto" src="/img/eulalia-Photorooma.png"  alt="Your Company" width={15} height={7}/></a>

              <h6 className="text-gray-300 rounded-md px-3 py-2 text-sm font-medium sm:text-xs">
                Facultad de Derecho - , &quot;Eulalia Ares&quot;
              </h6>
            </div>
            <div className="flex flex-1 justify-end mr-4">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex align-items-end space-x-4">
                  <a
                    href="index.html"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Inicio
                  </a>
                  <a
                    href="programas.html"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Programas
                  </a>
                  <a
                    href="profesores.html"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Profesores
                  </a>
                  <a
                    href="admisiones.html"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Admisiones
                  </a>
                  <a
                    href="contacto.html"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="index.html"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Inicio
            </a>
            <a
              href="programas.html"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Programas
            </a>
            <a
              href="profesores.html"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Profesores
            </a>
            <a
              href="admisiones.html"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Admisiones
            </a>
            <a
              href="contacto.html"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbardown;
