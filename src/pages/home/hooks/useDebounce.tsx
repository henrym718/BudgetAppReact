/**
 * Hook que valida los datos del formulario usando
 * la esrategia de debounce para brindar una mejor
 * esperiencia en la UI, retorna un error o null
 * dependiendo la validaciòn recibida por parametros
 */

import { useEffect, useState, useRef } from "react";

export function useDebouncedValidation(
  value: string,
  validate: (value: string) => Promise<string | null>,
  delay: number
) {
  const [error, setError] = useState<string | boolean | null>(false);
  const [isLoading, setIsLoading] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const validateWithDelay = async () => {
      setIsLoading(true);
      setError(null);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      await new Promise((resolve) => {
        timeoutRef.current = setTimeout(resolve, delay);
      });

      setError(await validate(value));
      setIsLoading(false);
    };

    value.trim() || error === null ? validateWithDelay() : setIsLoading(false);

    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, [value, validate, delay]);

  return { error, isLoading };
}
