import { useParams } from 'react-router-dom';
import './HeroPage.css';
import HeroInfoContainer from './HeroInfoContainer';
import { useWindowSize } from 'react-use';

function Hero({ setShowMenu }) {
  const { width, height } = useWindowSize();

  const { heroName } = useParams();
  const hero = heroName.replace(/-/g, ' ');

  return (
    <section className={width < 1440 ? 'hero-container' : 'hero-container divided'} onClick={() => setShowMenu(false)}>
      <img
        src={process.env.PUBLIC_URL + '/assets/hero/illustration/' + hero + (width < 600 ? '_480.png' : '_800.png')}
        alt={hero}
        className={'illustration ' + heroName}
      />
      <HeroInfoContainer heroName={heroName} />
    </section>
  );
}

export default Hero;
