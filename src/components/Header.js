import { Link } from 'react-router-dom';

function Header({ showMenu, setShowMenu }) {
  return (
    <header>
      <div className='topbar'>
        <Link to='/mythic-tools'>
          <h1>Mythic Tools</h1>
        </Link>
        <div
          className={showMenu ? 'hamburger-menu active' : 'hamburger-menu'}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className='bar-1'></div>
          <div className='bar-2'></div>
          <div className='bar-3'></div>
        </div>
        <nav className='navbar'>
          <Link to='/mythic-tools/hero-list' onClick={() => setShowMenu(false)}>
            Heroes
          </Link>
          <Link
            to='/mythic-tools/team-builder'
            onClick={() => setShowMenu(false)}
          >
            Team Builder
          </Link>
          <Link to='/mythic-tools/cube' onClick={() => setShowMenu(false)}>
            Cube of Truth
          </Link>
        </nav>
      </div>
      <nav className={showMenu ? 'nav-drawer active' : 'nav-drawer'}>
        <Link to='/mythic-tools/hero-list' onClick={() => setShowMenu(false)}>
          Heroes
        </Link>
        <Link
          to='/mythic-tools/team-builder'
          onClick={() => setShowMenu(false)}
        >
          Team Builder
        </Link>
        <Link to='/mythic-tools/cube' onClick={() => setShowMenu(false)}>
          Cube of Truth
        </Link>
      </nav>
    </header>
  );
}

export default Header;
