import { useState, useEffect } from 'react';

/**
 * Hook customizado para obter a largura da janela com debounce.
 *
 * @param {number} delay - O tempo de espera em milissegundos para debounce (opcional, padrão: 300ms).
 * @returns {number} - A largura da janela atual.
 */
const useWindowWidth = (delay = 300) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId: any;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, delay);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return windowWidth;
};

export default useWindowWidth;
