function Footer({ setShowMenu }) {
  return (
    <footer onClick={() => setShowMenu(false)}>
      <p className='disclaimer'>
<<<<<<< HEAD
        Mythic Companion is an unofficial fan site dedicated to Mythic Heroes.
        It is not affiliated with IGG Inc in any way.
=======
        Mythic Companion is an unofficial fan site dedicated to Mythic Heroes, it is not
        affiliated with IGG Inc. in any way.
>>>>>>> 4dc3855b496675da6847fa2ae75f67485a4b7acd
      </p>
      <p>All game assets' rights reserved by IGG Inc.</p>
    </footer>
  );
}

export default Footer;
