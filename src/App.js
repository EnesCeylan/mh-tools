import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import CubeOfTruth from './components/Cube/CubeOfTruth';
import HeroList from './components/HeroList/HeroList';
import Hero from './components/Hero/Hero';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' />
        <Route path='/hero-list' element={<HeroList />} />
        <Route path='/hero-list/:heroName' element={<Hero />} />
        <Route path='/cube' element={<CubeOfTruth />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
