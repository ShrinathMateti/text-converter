import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
      document.title = "Text-Converter- Dark Mode";
      setInterval(() => {
        document.title = "Text-Converter is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install Text-Converter Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "Text-Converter- Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text-Converter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer mode={mode} />
    </>
  );
}

export default App;
