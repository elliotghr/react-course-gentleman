import "./App.css";
import { useFetch } from "./hooks";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const { data, loading, error } = useFetch<Data>(url);

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return <div className="App">Error: {error.message}</div>;
  }

  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
