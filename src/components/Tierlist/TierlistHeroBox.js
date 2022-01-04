const TierlistHeroBox = ({ hero, heroname }) => {
  return (
    <div className='tierlist-hero-box'>
      <img
        alt=''
        className={'tierlist-hero-image ' + hero}
        src={
          process.env.PUBLIC_URL + '/assets/hero/hero-cards/' + hero + '.png'
        }
      ></img>
      <div className='tierlist-hero-name-container'>
        <img
          className='tierlist-hero-name-banner'
          src={process.env.PUBLIC_URL + '/assets/tierlist-button/Header3.png'}
          alt=''
        />
        <div className='tierlist-hero-name'>{heroname}</div>
      </div>
    </div>
  );
};
export default TierlistHeroBox;
//key={indexHero}
