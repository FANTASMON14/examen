import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Inicio } from './components/Inicio';
import { Ofertas } from './components/Ofertas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Inicio" element={<Inicio />} />
      <Route path="/Ofertas" element={<Ofertas />} />
    </Routes>
  );
}

export default App;
