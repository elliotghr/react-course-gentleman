import "./App.css";
import { Button, ColorRed } from "./components";

function App() {
  const handleClick = () => console.log("Button clicked");

  const dimeHola = () => alert("Hola!");

  return (
    <>
      <ColorRed>
        <Button parentMethod={dimeHola}>Mi Boton Rojo</Button>
      </ColorRed>
      <Button parentMethod={handleClick}>My boton normal</Button>
    </>
  );
}

export default App;
