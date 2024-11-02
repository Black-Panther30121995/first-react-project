// App.js
import { useState } from "react";
import "./App.css";
/* import About from "./components/About"; */
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState("white");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Only changes background color if in dark mode
  const changeBackgroundColor = (color) => {
    if (mode === "dark") {
      setBgColor(color);
      document.body.style.backgroundColor = color;
      showAlert(`Background color changed to ${color}`, "success");
    } else {
      showAlert("Switch to dark mode to change background color", "warning");
    }
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setBgColor("white");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      setBgColor("black"); // Set default dark mode background to black
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <div>
{/*     <Router> */}
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
        changeBackgroundColor={changeBackgroundColor}
      />
      <Alert alert={alert} />
      <div className="container my-3">
{/*         <Routes> */}
{/*           <Route path="/about" element={<About />} /> */}
          {/* <Route */}
           { /* path="/"*/}
          {/* element={ */ }
              <TextForm
                heading="Enter the text to analyse below"
                showAlert={showAlert}
                mode={mode}
              />
         {  /*  } */}
        {/*   /> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </div>
  );
}

export default App;
