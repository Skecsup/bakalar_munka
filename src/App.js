import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Homepage/Home";
import Shop from "./components/pages/Shoppage/Shop";
import About from "./components/pages/About";
import Cart from "./components/pages/Cartpage/Cart";
import Signin from "./components/pages/Signinpage/Signin";

function App() {
  const home = [<Navbar />, <Home />];
  const shop = [<Navbar />, <Shop />];
  const about = [<Navbar />, <About />];
  const cart = [<Navbar />, <Cart />];
  const signin = [<Navbar />, <Signin />];

  return (
    <div className="App">
      <Routes>
        <Route key="1" path="/" element={home} />
        <Route key="2" path="/Shop" element={shop} />
        <Route key="3" path="/About" element={about} />
        <Route key="4" path="/Cart" element={cart} />
        <Route key="5" path="/Signin" element={signin} />
      </Routes>
    </div>
  );
}

export default App;
