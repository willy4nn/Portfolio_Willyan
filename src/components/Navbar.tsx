import { useEffect, useState } from 'react';
import useWindowWidth from '../utils/useWindowWidth';
import { LinkedinNavIcon } from './Icons/LinkedinNavIcon';
import GithubNavIcon from './Icons/GithubNavIcon';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();

  // Fecha o menu caso a tela seja menor que 1024px
  useEffect(() => {
    if (windowWidth > 1024) {
      setMenuOpen(false);
    }
  }, [windowWidth]);

  // Bloqueia o scroll na página quando o menu estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  // Alterna o estado do menu
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
                <LinkedinNavIcon menuOpen={menuOpen} />
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
                <GithubNavIcon />
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
