import { useState } from "react";
import './index.css'

function App() {
  // Initialize the selectedColor state with an empty string
  const [selectedColor, setSelectedColor] = useState("olive");

  // Define a function to handle button clicks and update the selected color
  const handleButtonClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="main" style={{ backgroundColor: selectedColor }}>
      <div className="submain">
        <button className="btn6" onClick={() => handleButtonClick("violet")}>
          violet
        </button>
        <button className="btn5" onClick={() => handleButtonClick("indigo")}>
          indigo
        </button>
        <button className="btn4" onClick={() => handleButtonClick("blue")}>
          blue
        </button>
        <button className="btn3" onClick={() => handleButtonClick("green")}>
          green
        </button>
        <button className="btn2" onClick={() => handleButtonClick("yellow")}>
          yellow
        </button>
        <button className="btn1" onClick={() => handleButtonClick("orange")}>
          orange
        </button>
        <button className="btn" onClick={() => handleButtonClick("red")}>
          red
        </button>
      </div>
    </div>
  );
}

export default App;
