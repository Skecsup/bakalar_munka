import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Basket from "./components/pages/Basket";
import Signin from "./components/pages/Signin";

function App() {
  const home = [<Navbar />, <Home />];
  const shop = [<Navbar />, <Shop />];
  const about = [<Navbar />, <About />];
  const basket = [<Navbar />, <Basket />];
  const signin = [<Navbar />, <Signin />];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={home} />
        <Route path="/Shop" element={shop} />
        <Route path="/About" element={about} />
        <Route path="/Basket" element={basket} />
        <Route path="/Signin" element={signin} />
      </Routes>
    </div>
  );
}

export default App;
