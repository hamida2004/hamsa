import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'; // note the import path!
import Home from './pages/Home';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order/:id' element={<Order />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
