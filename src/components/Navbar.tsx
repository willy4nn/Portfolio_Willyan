import { useEffect, useState } from 'react';
import useWindowWidth from '../utils/useWindowWidth';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    // Fecha o menu se a largura da janela for maior que 1024px
    if (windowWidth > 1024) {
      setMenuOpen(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    // Adiciona/remova a classe para ocultar o scroll do body quando o menu está aberto/fechado
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  // Função para alternar o estado do menu
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div
      className={`${menuOpen ? 'h-lvh bg-highlight-0' : 'h-20'} flex max-h-lvh w-full flex-col overflow-hidden bg-background-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`flex h-20 min-h-20 w-full items-center justify-end px-4 lg:hidden lg:h-0 lg:min-h-0`}
      >
        <div
          className="cursor-pointer"
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle menu"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 34H38M10 24H38M10 14H38"
              stroke={`${menuOpen ? '#0E0F0B' : '#040422'}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={`px-4 py-6 lg:px-16 lg:py-7`}>
        <nav className="divide-y divide-highlight-70 lg:flex lg:items-center lg:justify-between lg:divide-none">
          <ul className="divide-y divide-highlight-70 lg:flex lg:gap-16 lg:divide-none">
            <li className="cursor-pointer py-4 font-body font-bold text-highlight-180 transition-all hover:text-highlight-190 lg:px-0 lg:py-0">
              home
            </li>
            <li className="cursor-pointer py-4 font-body font-bold text-highlight-180 transition-all hover:text-highlight-190 lg:px-0 lg:py-0">
              talk to me
            </li>
            <li className="cursor-pointer py-4 font-body font-bold text-highlight-180 transition-all hover:text-highlight-190 lg:px-0 lg:py-0">
              about me
            </li>
            <li className="cursor-pointer py-4 font-body font-bold text-highlight-180 transition-all hover:text-highlight-190 lg:px-0 lg:py-0">
              case studies
            </li>
          </ul>
          <div className="flex flex-wrap gap-8 lg:gap-4">
            <a
              href="https://www.linkedin.com/in/willyan-pereira-a998ab253"
              target="_blank"
            >
              <div className="group flex cursor-pointer items-center gap-4 py-4 transition-all lg:py-0">
                <div>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group"
                  >
                    <path
                      d="M43.5 1.12499H4.5C3.61512 1.11598 2.7628 1.45838 2.13007 2.07705C1.49734 2.69572 1.13588 3.54013 1.125 4.42499V43.5825C1.13785 44.466 1.50017 45.3085 2.13269 45.9256C2.7652 46.5426 3.6164 46.884 4.5 46.875H43.5C44.3849 46.882 45.2367 46.5384 45.8691 45.9194C46.5015 45.3003 46.8631 44.4561 46.875 43.5712V4.41374C46.8592 3.53147 46.4958 2.69109 45.8639 2.07526C45.2319 1.45943 44.3824 1.11793 43.5 1.12499Z"
                      className="fill-highlight-180 transition-all group-hover:fill-highlight-190"
                    />
                    <path
                      d="M7.89755 18.2737H14.6888V40.125H7.89755V18.2737ZM11.295 7.39874C12.074 7.39874 12.8354 7.62977 13.483 8.06259C14.1306 8.49542 14.6353 9.11059 14.9332 9.83029C15.2311 10.55 15.3088 11.3419 15.1566 12.1058C15.0044 12.8697 14.629 13.5713 14.0779 14.1218C13.5269 14.6723 12.825 15.047 12.0609 15.1985C11.2969 15.35 10.505 15.2715 9.78563 14.9729C9.06621 14.6743 8.45152 14.1691 8.01931 13.5211C7.5871 12.8731 7.3568 12.1114 7.35755 11.3325C7.35854 10.2889 7.77382 9.2883 8.51214 8.55068C9.25045 7.81307 10.2514 7.39874 11.295 7.39874ZM18.9488 18.2737H25.4588V21.2737H25.5488C26.4563 19.5562 28.6688 17.745 31.9725 17.745C38.85 17.73 40.125 22.2562 40.125 28.125V40.125H33.3338V29.4937C33.3338 26.9625 33.2888 23.7037 29.805 23.7037C26.3213 23.7037 25.7288 26.4637 25.7288 29.3287V40.125H18.9488V18.2737Z"
                      className={`${menuOpen ? 'fill-highlight-0' : 'fill-background-0'} transition-all`}
                    />
                  </svg>
                </div>
                <p
                  className={`${
                    !menuOpen ? 'max-w-0 opacity-0' : 'max-w-xs opacity-100'
                  } overflow-hidden font-body font-bold text-highlight-180 transition-all duration-300 group-hover:text-highlight-190`}
                >
                  linkedin
                </p>
              </div>
            </a>
            <a href="https://github.com/willy4nn" target="_blank">
              <div className="flex cursor-pointer items-center gap-4 py-4 lg:py-0">
                <div>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 1.91364C11.4949 1.91364 1.35449 12.0518 1.35449 24.5591C1.35449 34.5649 7.84312 43.053 16.8409 46.0478C17.9722 46.2578 18.3877 45.5565 18.3877 44.9584C18.3877 44.4184 18.3667 42.6345 18.357 40.7423C12.057 42.1121 10.7276 38.0704 10.7276 38.0704C9.69749 35.4529 8.21324 34.7569 8.21324 34.7569C6.61324 33.6045 8.39449 33.623 8.39449 33.623C10.4936 33.7745 11.5987 35.7984 11.5987 35.7984C13.0697 39.146 15.8767 38.1696 18.426 37.6604C18.7027 36.6445 20.6692 35.464 22.004 35.0596C22.2127 34.7191 22.956 33.5877 23.4245 32.9662C16.9722 32.5016 10.9722 30.8321 10.9722 22.9564C10.9722 20.4977 11.7597 18.5266 13.2512 17.0716C12.9745 16.4704 12.2667 14.4898 13.5082 10.9166C13.5082 10.9166 14.9134 10.3331 18.3867 13.4566C19.8377 13.0431 21.3849 12.8321 23.0022 12.8266C24.6195 12.8321 26.1676 13.0431 27.6209 13.4566C31.0931 10.3331 32.4999 10.9166 32.4999 10.9166C33.7414 14.4898 33.0336 16.4704 32.7569 17.0716C34.2484 18.5266 35.0359 20.4977 35.0359 22.9564C35.0359 30.8386 29.0359 32.4977 22.5609 32.9564C22.9922 33.3877 23.2409 34.2591 23.2409 35.0596C24.5776 35.469 26.5495 36.6445 26.8262 37.6604C29.3755 38.1696 32.1826 39.146 33.6609 35.7984C33.6609 35.7984 34.7659 33.7745 36.865 33.623C36.865 33.623 38.6462 33.6045 37.0462 34.7569C37.0462 34.7569 35.562 35.4529 34.5319 38.0704C34.5319 38.0704 33.2026 42.1121 26.9026 40.7423C26.9026 40.7423 26.8815 44.3984 26.8815 44.9384C26.8815 45.5565 27.2971 46.2578 28.4284 46.0478C37.4262 43.053 43.9149 34.5649 43.9149 24.5591C43.9149 12.0518 33.7745 1.91364 24 1.91364ZM20.2484 27.2104C20.2484 27.2104 20.7222 29.6277 24 29.6277C27.2778 29.6277 27.7516 27.2104 27.7516 27.2104C27.7516 27.2104 27.6276 25.4678 24 25.4678C20.3724 25.4678 20.2484 27.2104 20.2484 27.2104ZM33.865 25.1331C33.865 25.1331 33.465 26.845 32.3536 27.964C32.3536 27.964 31.665 28.8646 30.8762 27.9545C30.8762 27.9545 29.9205 25.7564 32.7399 24.5369C32.7399 24.5369 34.7799 24.2104 33.865 25.1331Z"
                      className={`${menuOpen ? 'fill-highlight-0' : 'fill-background-0'} transition-all`}
                    />
                  </svg>
                </div>
                <p
                  className={`${
                    !menuOpen ? 'max-w-0 opacity-0' : 'max-w-xs opacity-100'
                  } overflow-hidden font-body font-bold text-highlight-180 transition-all duration-300 group-hover:text-highlight-190`}
                >
                  github
                </p>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
