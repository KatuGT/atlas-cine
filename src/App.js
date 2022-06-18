import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import Home from "./Paginas/Home";
import Pelicula from "./Paginas/Pelicula";


function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
      <Routes>
        <Route path="/" index element={<Home />}/>
        <Route path="pelicula" element={<Pelicula />}/>
      </Routes>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
