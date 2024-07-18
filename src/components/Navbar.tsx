import { useEffect, useState } from 'react';
import useWindowWidth from '../utils/useWindowWidth';

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
                      d="M24 1.91364C11.4949 1.91364 1.35449 12.0518 1.35449 24.5591C1.35449 34.5649 7.84312 43.053 16.8409 46.0478C17.9722 46.2578 18.3877 45.5565 18.3877 44.9584C18.3877 44.4184 18.3667 42.6345 18.357 40.7423C12.057 42.1121 10.7276 38.0704 10.7276 38.0704C9.69749 35.4529 8.21324 34.7569 8.21324 34.7569C6.15824 33.3514 8.36812 33.3806 8.36812 33.3806C10.6417 33.54 11.8395 35.7143 11.8395 35.7143C13.8592 39.1755 17.1371 38.175 18.4294 37.5968C18.6326 36.1331 19.2195 35.1338 19.8671 34.5683C14.8372 33.9964 9.54937 32.0543 9.54937 23.3771C9.54937 20.9048 10.4344 18.8846 11.883 17.2984C11.6475 16.7284 10.8724 14.4251 12.102 11.3059C12.102 11.3059 14.0032 10.6973 18.3307 13.6271C20.1375 13.125 22.0751 12.8726 24 12.864C25.9237 12.8726 27.8625 13.1243 29.6726 13.6264C33.9949 10.6965 35.8939 11.3051 35.8939 11.3051C37.1265 14.424 36.3514 16.7276 36.1162 17.2976C37.5682 18.8839 38.4469 20.904 38.4469 23.3764C38.4469 32.0741 33.1492 33.9889 28.1066 34.5499C28.9192 35.2526 29.643 36.6311 29.643 38.7435C29.643 41.7735 29.6167 44.2121 29.6167 44.958C29.6167 45.5606 30.0247 46.2668 31.1722 46.0444C40.1647 43.0466 46.6459 34.5611 46.6459 24.5591C46.6455 12.0525 36.5062 1.91364 24 1.91364Z"
                      className="fill-highlight-180 transition-all group-hover:fill-highlight-190"
                    />
                    <path
                      d="M9.93147 34.4273C9.88159 34.5398 9.70459 34.5735 9.54334 34.4967C9.37834 34.4232 9.28647 34.2698 9.33972 34.1569C9.38847 34.0407 9.56584 34.0088 9.72972 34.0864C9.89472 34.1603 9.98847 34.3152 9.93109 34.4277L9.93147 34.4273ZM10.8487 35.4507C10.7411 35.5508 10.53 35.5043 10.3867 35.3457C10.2382 35.1882 10.2105 34.977 10.3203 34.8754C10.4321 34.7757 10.6368 34.8229 10.7853 34.9804C10.9331 35.1402 10.9623 35.3494 10.8491 35.451L10.8487 35.4507ZM11.742 36.7545C11.6032 36.8513 11.376 36.7609 11.2357 36.5595C11.097 36.3578 11.097 36.1159 11.2395 36.0195C11.3793 35.9228 11.6032 36.0102 11.7457 36.2097C11.8837 36.414 11.8837 36.6563 11.742 36.7545ZM12.9648 38.0149C12.8411 38.1518 12.5763 38.115 12.3828 37.9287C12.1852 37.746 12.1301 37.4862 12.2542 37.3497C12.3802 37.2124 12.6461 37.2507 12.8407 37.4359C13.0383 37.6182 13.098 37.8784 12.9656 38.0145L12.9648 38.0149ZM14.6523 38.7465C14.5972 38.9239 14.343 39.0045 14.0861 38.9288C13.83 38.8512 13.6623 38.6438 13.7148 38.4645C13.7673 38.2857 14.0235 38.202 14.2818 38.2827C14.538 38.3599 14.7056 38.5662 14.6523 38.7465ZM16.506 38.8819C16.5123 39.0687 16.2948 39.2232 16.026 39.2269C15.7548 39.2333 15.5355 39.0818 15.5328 38.898C15.5328 38.7094 15.7458 38.5568 16.0166 38.5515C16.2855 38.5467 16.5063 38.6967 16.5063 38.8815L16.506 38.8819ZM18.2302 38.5887C18.2625 38.7705 18.0753 38.9577 17.808 39.0075C17.5455 39.0563 17.3017 38.943 17.268 38.7627C17.2357 38.5759 17.4262 38.3888 17.6887 38.3404C17.9565 38.2943 18.1965 38.4038 18.2302 38.5887Z"
                      className="fill-highlight-180 transition-all group-hover:fill-highlight-190"
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
