import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar.jsx';
import { Title } from './components/Title.jsx';
import { Footer } from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Title/>
    <NavBar />
    <App />
    <Footer/>
  </BrowserRouter>
);
