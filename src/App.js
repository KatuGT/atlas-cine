import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import Error404 from "./Paginas/Error404";
import Home from "./Paginas/Home";
import Pelicula from "./Paginas/Pelicula";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="pelicula/:id" element={<Pelicula />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
