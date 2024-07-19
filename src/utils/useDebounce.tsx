import { useRef, useCallback } from 'react';

/**
 * Hook customizado para debouncing de uma função de callback.
 *
 * @param {Function} callback - A função a ser debounced.
 * @param {number} delay - O tempo de espera em milissegundos.
 * @returns {Function} - Uma versão debounced da função de callback.
 */
function useDebounce(callback: Function, delay: number) {
  // useRef para armazenar o ID do timeout
  const timeoutRef = useRef<number | null>(null);

  return useCallback(
    (...args: any[]) => {
      // Limpa o timeout existente, se houver
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Define um novo timeout para chamar o callback após o delay
      timeoutRef.current = window.setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay], // Array de dependências
  );
}

export default useDebounce;
