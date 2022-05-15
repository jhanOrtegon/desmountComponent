import Div from "./components/Div";
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false)
  const handleActive = () => {
    setIsActive(!isActive)
  }
  return (
    <div className="m-5">

      <button
        className="btn btn-success"
        onClick={handleActive}
      >
        Activar o Desactivar componente
      </button>

      {
        isActive && <Div />
      }

    </div>
  );
}

export default App;
