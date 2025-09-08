import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  };

  // El uso correcto es para sincronizar con entidades externas al componente
  // Comunicarnos con un Endpoint
  // Operaciones async
  // Parametros de entrada
  // Context
  // Operaciones asincronas
  useEffect(() => {
    // logica ? que logica ? cuando se ejecuta esta logica ?
    // 1.- Cuando se monta el componente
    // 2.- Cada vez que se modifique un valor del estado
    fetchData();

    return () => {
      // Se utiliza para:
      //  Manejar el estado de la memoria
    }; // funcion que se ejecuta cuando el componente se desmonta
  }, []); // arreglo de dependencias

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return <div className="App">Error: {error}</div>;
  }

  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
