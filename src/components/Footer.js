function Footer({ setShowMenu }) {
  return (
    <footer onClick={() => setShowMenu(false)}>
      <p className='disclaimer'>
        Mythic Companion is an unofficial fan site dedicated to Mythic Heroes.
        It is not affiliated with IGG Inc in any way.
      </p>
      <p>All game assets' rights reserved by IGG Inc.</p>
    </footer>
  );
}

export default Footer;
