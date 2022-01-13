import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./components/Homepage/Home'));
const Cube = React.lazy(() => import('./components/Cube/CubeOfTruth'));
const HeroList = React.lazy(() => import('./components/HeroList/HeroList'));
const Hero = React.lazy(() => import('./components/Hero/HeroPage'));
const TeamBuilder = React.lazy(() => import('./components/TeamComp/TeamBuilder'));
const PageNotFound = React.lazy(() => import('./components/PageNotFound'));
const Tierlist = React.lazy(() => import('./components/Tierlist/Tierlist'));

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <React.Fragment>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />

      <React.Suspense
        fallback={
          <div className='loading-screen'>
            <div className='ring'></div>
            <p className='loading-text'>Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Home setShowMenu={setShowMenu} />} />
          <Route path='/hero-list' element={<HeroList setShowMenu={setShowMenu} />} />
          <Route path='/hero-list/:heroName' element={<Hero setShowMenu={setShowMenu} />} />
          <Route path='/cube' element={<Cube setShowMenu={setShowMenu} />} />
          <Route path='/team-builder' element={<TeamBuilder setShowMenu={setShowMenu} />} />
          <Route path='/team-builder/:builderData' element={<TeamBuilder setShowMenu={setShowMenu} />} />
          <Route path='/tierlist' element={<Tierlist setShowMenu={setShowMenu} />} />
          <Route path='*' element={<PageNotFound setShowMenu={setShowMenu} />} />
        </Routes>
      </React.Suspense>
      <Footer setShowMenu={setShowMenu} />
    </React.Fragment>
  );
}

export default App;
