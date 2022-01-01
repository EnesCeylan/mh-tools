import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className='topbar'>
        <Link to='/'>
          <h1>MH Tools</h1>
        </Link>
        <div
          className={showMenu ? 'hamburger-menu active' : 'hamburger-menu'}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className='bar-1'></div>
          <div className='bar-2'></div>
          <div className='bar-3'></div>
        </div>
      </div>
      <nav className={showMenu ? 'nav-drawer active' : 'nav-drawer'}>
        <Link to='/hero-list'>Heroes</Link>
        <Link to='/cube'>Cube of Truth</Link>
      </nav>
    </header>
  );
}

export default Header;
