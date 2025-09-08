import { useEffect, useState } from "react";

// Definición de tipos
type Data<T> = T | null;
type ErrorType = Error | null;

// Definición de la interfaz para el retorno del hook
interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}

export function useFetch<T>(url: string): Params<T> {
  // Estados para datos, carga y error
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>(null);

  // Efecto para realizar la petición fetch
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, controller);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: T = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  // Retorno de los estados
  return { data, loading, error };
}
