import { useParams } from 'react-router-dom';
import './HeroPage.css';
import HeroInfoContainer from './HeroInfoContainer';
function Hero({ setShowMenu }) {
  const { heroName } = useParams();
  const hero = heroName.replace(/-/g, ' ')
  return (
    <section className='hero-container' onClick={() => setShowMenu(false)}>
      <img
        src={
          process.env.PUBLIC_URL +
          '/assets/illustration/' +
          hero +
          '.png'
        }
        alt={hero}
        className={"illustration " + heroName}
      />
      <HeroInfoContainer heroName={heroName} />
    </section>
  );
}

export default Hero;