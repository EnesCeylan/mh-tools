import { Link } from 'react-router-dom';

function Header({ showMenu, setShowMenu }) {
  return (
    <header>
      <div className='topbar'>
        <Link to='/'>
          <img src={process.env.PUBLIC_URL + '/assets/Background/Logo.png'} alt='logo' className='logo' />
        </Link>
        <div className={showMenu ? 'hamburger-menu active' : 'hamburger-menu'} onClick={() => setShowMenu(!showMenu)}>
          <div className='bar-1'></div>
          <div className='bar-2'></div>
          <div className='bar-3'></div>
        </div>
        <nav className='navbar'>
          <Link to='/hero-list' onClick={() => setShowMenu(false)} className='page-button'>
            Heroes
          </Link>
          <Link to='/team-builder' onClick={() => setShowMenu(false)} className='page-button'>
            Team Builder
          </Link>
          <Link to='/cube' onClick={() => setShowMenu(false)} className='page-button'>
            Cube of Truth
          </Link>
          <Link to='/tierlist' onClick={() => setShowMenu(false)} className='page-button'>
            Tierlist
          </Link>
          <a href='https://discord.gg/ZW9JpnNX8Z' target='_blank' rel='noreferrer'>
            <div className='join'>
              <p>Join our Discord</p>
            </div>
            <img
              src={process.env.PUBLIC_URL + '/assets/discord-icon/icon_clyde_white_RGB.svg'}
              alt='discord support'
              className='discord-support-server-icon'
            />
          </a>
        </nav>
      </div>
      <nav className={showMenu ? 'nav-drawer active' : 'nav-drawer'}>
        <Link to='/hero-list' onClick={() => setShowMenu(false)}>
          Heroes
        </Link>
        <Link to='/team-builder' onClick={() => setShowMenu(false)}>
          Team Builder
        </Link>
        <Link to='/cube' onClick={() => setShowMenu(false)}>
          Cube of Truth
        </Link>
        <Link to='/tierlist' onClick={() => setShowMenu(false)}>
          Tierlist
        </Link>
        <a href='https://discord.gg/BFBuXrSY54' target='_blank' rel='noreferrer' className='support-server'>
          <p className='support-server-text'>Join us on Discord</p>
          {/* <div className="discord-icon-container"> */}
          <img
            src={process.env.PUBLIC_URL + '/assets/discord-icon/icon_clyde_white_RGB.svg'}
            alt='discord support'
            className='discord-support-server-icon'
          />
          {/* </div> */}
          {/* <p className="support-server-text">Join us on Discord</p> */}
        </a>
      </nav>
    </header>
  );
}

export default Header;
